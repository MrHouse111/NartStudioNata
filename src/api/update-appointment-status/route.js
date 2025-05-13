async function handler({ appointment_id, status }) {
  if (!appointment_id || !status) {
    return {
      error: "ID termina i status su obavezni",
    };
  }

  if (!["pending", "confirmed", "cancelled"].includes(status)) {
    return {
      error: "Status može biti samo: pending, confirmed, ili cancelled",
    };
  }

  try {
    const result = await sql`
      UPDATE appointments 
      SET status = ${status}
      WHERE id = ${appointment_id}
      RETURNING id, status
    `;

    if (result.length === 0) {
      return {
        error: "Termin nije pronađen",
      };
    }

    return {
      success: true,
      message: "Status termina je uspešno ažuriran",
      appointment: result[0],
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom ažuriranja statusa",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}