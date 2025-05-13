async function handler({ date, service_duration = 60 }) {
  if (!date) {
    return {
      error: "Datum je obavezan",
    };
  }

  try {
    // Define working hours (9:00 - 20:00)
    const workStart = "09:00";
    const workEnd = "20:00";

    // Get booked appointments for the date
    const bookedSlots = await sql`
      SELECT appointment_time 
      FROM appointments 
      WHERE appointment_date = ${date}
      AND status != 'cancelled'
      ORDER BY appointment_time
    `;

    // Generate all possible time slots
    const allSlots = [];
    let currentTime = workStart;

    while (currentTime <= workEnd) {
      const [hours, minutes] = currentTime.split(":");
      const slotTime = new Date(2000, 1, 1, parseInt(hours), parseInt(minutes));

      // Add service_duration minutes to get next slot
      const nextSlot = new Date(slotTime.getTime() + service_duration * 60000);

      // Only add if the slot ends before work end time
      if (
        nextSlot.getHours().toString().padStart(2, "0") +
          ":" +
          nextSlot.getMinutes().toString().padStart(2, "0") <=
        workEnd
      ) {
        allSlots.push(currentTime);
      }

      // Move to next 30-minute slot
      slotTime.setMinutes(slotTime.getMinutes() + 30);
      currentTime =
        slotTime.getHours().toString().padStart(2, "0") +
        ":" +
        slotTime.getMinutes().toString().padStart(2, "0");
    }

    // Filter out booked slots and their overlapping times
    const availableSlots = allSlots.filter((slot) => {
      const [slotHours, slotMinutes] = slot.split(":");
      const slotTime = new Date(
        2000,
        1,
        1,
        parseInt(slotHours),
        parseInt(slotMinutes)
      );
      const slotEndTime = new Date(
        slotTime.getTime() + service_duration * 60000
      );

      return !bookedSlots.some((bookedSlot) => {
        const [bookedHours, bookedMinutes] =
          bookedSlot.appointment_time.split(":");
        const bookedTime = new Date(
          2000,
          1,
          1,
          parseInt(bookedHours),
          parseInt(bookedMinutes)
        );
        const bookedEndTime = new Date(
          bookedTime.getTime() + service_duration * 60000
        );

        return slotTime < bookedEndTime && slotEndTime > bookedTime;
      });
    });

    return {
      available_slots: availableSlots,
      work_start: workStart,
      work_end: workEnd,
    };
  } catch (error) {
    return {
      error: "Došlo je do greške prilikom provere dostupnih termina",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}