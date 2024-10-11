import { createBrowserRouter, Navigate } from "react-router-dom";
import ComingSoon from "./pages/soon/soon.component";


const AppRoutesConfig = createBrowserRouter(([
    {
        path: "/",
        element: <ComingSoon />,
    },
    {
        path: '*',
        element: <Navigate to="/" replace />

    },
]));


export default AppRoutesConfig;