async function handler({ appointment_date, appointment_time }) {
  if (!appointment_date || !appointment_time) {
    return {
      error: "Datum i vreme su obavezni",
    };
  }

  try {
    const existingAppointments = await sql`
      SELECT id 
      FROM appointments 
      WHERE appointment_date = ${appointment_date}
      AND appointment_time = ${appointment_time}
      AND status != 'cancelled'
    `;

    return {
      available: existingAppointments.length === 0,
      message:
        existingAppointments.length === 0
          ? "Termin je dostupan"
          : "Termin je već zauzet",
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom provere dostupnosti termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}