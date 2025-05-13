async function handler({
  service_name,
  appointment_date,
  appointment_time,
  client_name,
  client_phone,
  client_email,
  notes,
}) {
  if (
    !service_name ||
    !appointment_date ||
    !appointment_time ||
    !client_name ||
    !client_phone ||
    !client_email
  ) {
    return {
      error: "Sva polja su obavezna osim napomena",
    };
  }

  try {
    const result = await sql`
      INSERT INTO appointments (
        service_name,
        appointment_date,
        appointment_time,
        client_name,
        client_phone,
        client_email,
        notes
      ) VALUES (
        ${service_name},
        ${appointment_date},
        ${appointment_time},
        ${client_name},
        ${client_phone},
        ${client_email},
        ${notes || null}
      )
      RETURNING id
    `;

    return {
      success: true,
      message: "Termin je uspešno zakazan",
      appointmentId: result[0].id,
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom zakazivanja termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}