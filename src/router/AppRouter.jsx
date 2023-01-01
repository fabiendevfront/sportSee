import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import ComingSoon from "../pages/ComingSoon";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Home />} />
            <Route path="/setting" element={<ComingSoon />} />
            <Route path="/community" element={<ComingSoon />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            {/* path="*" if the path does not correspond to any route declared above */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRouter;