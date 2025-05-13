async function handler({ appointmentId }) {
  if (!appointmentId) {
    return {
      error: "ID termina je obavezan",
    };
  }

  try {
    const appointments = await sql`
      SELECT 
        service_name,
        appointment_date,
        appointment_time,
        client_name,
        client_email,
        client_phone,
        notes
      FROM appointments 
      WHERE id = ${appointmentId}
      AND status = 'confirmed'
    `;

    if (appointments.length === 0) {
      return {
        error: "Termin nije pronađen ili nije potvrđen",
      };
    }

    const appointment = appointments[0];

    const emailContent = `
Poštovani/a ${appointment.client_name},

Vaš termin je uspešno zakazan.

Detalji termina:
- Usluga: ${appointment.service_name}
- Datum: ${new Date(appointment.appointment_date).toLocaleDateString("sr-RS")}
- Vreme: ${appointment.appointment_time}

Dodatne informacije:
- Molimo vas da dođete 5 minuta pre zakazanog termina
- Ako ste sprečeni da dođete, otkažite termin najmanje 24h ranije
- Lokacija: Studio N-Art, Beograd

Za sve dodatne informacije možete nas kontaktirati:
Telefon: 066 584 8998
Email: natasa@makeup.rs

Hvala na poverenju!
N-Art Studio
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "N-Art Studio <natasa@makeup.rs>",
        to: appointment.client_email,
        subject: "Potvrda termina - N-Art Studio",
        text: emailContent,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return {
      success: true,
      message: "Email potvrda je uspešno poslata",
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom slanja email potvrde",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}