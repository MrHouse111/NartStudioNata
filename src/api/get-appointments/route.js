async function handler({ date, status }) {
  try {
    let queryString = `
      SELECT * FROM appointments 
      WHERE 1=1
    `;

    const values = [];
    let paramCount = 1;

    if (date) {
      queryString += ` AND appointment_date = $${paramCount}`;
      values.push(date);
      paramCount++;
    }

    if (status) {
      queryString += ` AND status = $${paramCount}`;
      values.push(status);
      paramCount++;
    }

    queryString += ` ORDER BY appointment_date ASC, appointment_time ASC`;

    const appointments = await sql(queryString, values);

    return {
      success: true,
      appointments: appointments,
    };
  } catch (error) {
    return {
      success: false,
      error: "Došlo je do greške prilikom preuzimanja termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}