import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import LayoutIndex from "../../layouts";
import DashBoard from "../../pages/dashboard";
import Report from "../../pages/report";
import Student from "../../pages/student";

const privateRoutes = [
  {
    path: "/admin",
    element: <PrivateRoute element={<LayoutIndex />} />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "student",
        element: <Student />,
      },
      {
        path: "report",
        element: <Report />,
      },
    ],
  },
];

export default privateRoutes;
