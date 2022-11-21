import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/DashBoard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/MangeDoctors/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointments/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";

import Home from "../Pages/Home/Home/Home";

import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DisplayError from "../Shared/DisplayError/DisplayError";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoutes>
            <AddDoctor></AddDoctor>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoutes>
            <ManageDoctors></ManageDoctors>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoutes>
            <Payment></Payment>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://doc-care-server.vercel.app/booking/${params.id}`),
      },
    ],
  },
]);

export default router;
