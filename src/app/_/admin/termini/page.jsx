"use client";
import React from "react";

function MainComponent() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/get-appointments", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Nije moguće učitati termine");
      }
      const data = await response.json();
      setAppointments(data.appointments || []);
    } catch (err) {
      setError("Greška pri učitavanju termina");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id, status) => {
    try {
      const response = await fetch("/api/update-appointment-status", {
        method: "POST",
        body: JSON.stringify({ id, status }),
      });
      if (!response.ok) {
        throw new Error("Nije moguće ažurirati status");
      }
      await fetchAppointments();
    } catch (err) {
      setError("Greška pri ažuriranju statusa");
      console.error(err);
    }
  };

  const deleteAppointment = async (id) => {
    if (
      !window.confirm("Da li ste sigurni da želite da obrišete ovaj termin?")
    ) {
      return;
    }
    try {
      const response = await fetch("/api/delete-appointment", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Nije moguće obrisati termin");
      }
      await fetchAppointments();
    } catch (err) {
      setError("Greška pri brisanju termina");
      console.error(err);
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;
    const matchesDate =
      !dateFilter || appointment.appointment_date === dateFilter;
    return matchesStatus && matchesDate;
  });

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      <head>
        <title>Upravljanje Terminima | N-Art Studio Admin</title>
      </head>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-3xl text-[#2c1810]">
            Upravljanje Terminima
          </h1>
          <a href="/" className="text-[#d4a5a5] hover:text-[#c39292]">
            <i className="fas fa-arrow-left mr-2"></i>Nazad na sajt
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <select
              className="border rounded px-4 py-2 text-[#2c1810]"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">Svi statusi</option>
              <option value="pending">Na čekanju</option>
              <option value="confirmed">Potvrđeno</option>
              <option value="cancelled">Otkazano</option>
            </select>
            <input
              type="date"
              className="border rounded px-4 py-2 text-[#2c1810]"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />
          </div>

          {loading ? (
            <div className="text-center py-8">
              <i className="fas fa-spinner fa-spin text-[#d4a5a5] text-2xl"></i>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#fdf8f5]">
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Datum
                    </th>
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Vreme
                    </th>
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Klijent
                    </th>
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Usluga
                    </th>
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-[#2c1810]">
                      Akcije
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="border-b hover:bg-[#fdf8f5]"
                    >
                      <td className="px-4 py-2">
                        {appointment.appointment_date}
                      </td>
                      <td className="px-4 py-2">
                        {appointment.appointment_time}
                      </td>
                      <td className="px-4 py-2">
                        <div>{appointment.client_name}</div>
                        <div className="text-sm text-gray-500">
                          {appointment.client_email}
                        </div>
                      </td>
                      <td className="px-4 py-2">{appointment.service_name}</td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : appointment.status === "cancelled"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status === "confirmed"
                            ? "Potvrđeno"
                            : appointment.status === "cancelled"
                            ? "Otkazano"
                            : "Na čekanju"}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          {appointment.status === "pending" && (
                            <button
                              onClick={() =>
                                updateAppointmentStatus(
                                  appointment.id,
                                  "confirmed"
                                )
                              }
                              className="text-green-600 hover:text-green-800"
                              title="Potvrdi termin"
                            >
                              <i className="fas fa-check"></i>
                            </button>
                          )}
                          {appointment.status !== "cancelled" && (
                            <button
                              onClick={() =>
                                updateAppointmentStatus(
                                  appointment.id,
                                  "cancelled"
                                )
                              }
                              className="text-red-600 hover:text-red-800"
                              title="Otkaži termin"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          )}
                          <button
                            onClick={() => deleteAppointment(appointment.id)}
                            className="text-gray-600 hover:text-gray-800"
                            title="Obriši termin"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredAppointments.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Nema pronađenih termina
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;