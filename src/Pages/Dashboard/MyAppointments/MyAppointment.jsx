import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const url = `https://doc-care-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="overflow-hidden">
      <h3 className="text-4xl text-accent font-bold mb-7">My Appointments</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Patient Name</th>
              <th>Treatment</th>
              <th>Booking Date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                  <td>{booking?.patient}</td>
                  <td>{booking?.treatment}</td>
                  <td>{booking?.appointmentDate}</td>
                  <td>{booking?.slot}</td>
                  <td>
                    {booking?.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn btn-accent btn-sm">Pay</button>
                      </Link>
                    )}
                    {booking?.price && booking.paid && (
                      <span className="text-accent">Paid</span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
