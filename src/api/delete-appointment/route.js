async function handler({ id }) {
  if (!id) {
    return {
      error: "ID termina je obavezan",
    };
  }

  try {
    const result = await sql`
      DELETE FROM appointments 
      WHERE id = ${id}
      RETURNING id
    `;

    if (result.length === 0) {
      return {
        error: "Termin nije pronađen",
      };
    }

    return {
      success: true,
      message: "Termin je uspešno obrisan",
      deletedId: result[0].id,
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom brisanja termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}