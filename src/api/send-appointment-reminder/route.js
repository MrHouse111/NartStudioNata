async function handler() {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split("T")[0];

    const appointments = await sql`
      SELECT * FROM appointments 
      WHERE appointment_date = ${tomorrowDate}
      AND status = 'confirmed'
    `;

    if (!appointments.length) {
      return { message: "No appointments scheduled for tomorrow" };
    }

    const results = [];

    for (const appointment of appointments) {
      const formattedTime = appointment.appointment_time.slice(0, 5);

      const emailContent = `
        Poštovani/a ${appointment.client_name},

        Podsećamo Vas na zakazani termin za šminkanje sutra, ${tomorrowDate} u ${formattedTime}h.

        Detalji termina:
        - Usluga: ${appointment.service_name}
        - Vreme: ${formattedTime}h
        - Napomene: ${appointment.notes || "Nema dodatnih napomena"}

        Molimo Vas da dođete 5 minuta pre zakazanog termina.
        
        U slučaju da morate da otkažete termin, molimo Vas da nas obavestite što pre.

        Srdačan pozdrav,
        N-Art Studio
      `;

      try {
        await fetch("https://api.emailprovider.com/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.EMAIL_API_KEY}`,
          },
          body: JSON.stringify({
            to: appointment.client_email,
            subject: "Podsetnik za sutrašnji termin - N-Art Studio",
            text: emailContent,
          }),
        });

        results.push({
          appointmentId: appointment.id,
          status: "success",
          email: appointment.client_email,
        });
      } catch (error) {
        results.push({
          appointmentId: appointment.id,
          status: "failed",
          email: appointment.client_email,
          error: error.message,
        });
      }
    }

    return {
      message: "Reminder processing completed",
      results,
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom slanja podsetnika",
      details: error.message,
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}