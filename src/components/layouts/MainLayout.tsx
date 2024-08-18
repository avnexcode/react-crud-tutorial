import { Outlet } from "react-router-dom";
import Navbar from "../fragments/Navbar";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <div className="p-10">
                <Outlet />
            </div>
        </div>
    )
}
