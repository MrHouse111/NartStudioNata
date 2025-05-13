async function handler({ appointment_id }) {
  if (!appointment_id) {
    return {
      error: "ID termina je obavezan",
    };
  }

  try {
    const appointments = await sql`
      SELECT 
        id,
        service_name,
        appointment_date,
        appointment_time,
        client_name,
        client_phone,
        client_email,
        notes,
        status,
        created_at
      FROM appointments 
      WHERE id = ${appointment_id}
    `;

    if (appointments.length === 0) {
      return {
        error: "Termin nije pronađen",
      };
    }

    return {
      appointment: appointments[0],
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom preuzimanja detalja termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}