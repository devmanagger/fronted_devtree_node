import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Logo } from "../components";
export const AuthLayou = () => {
    return (
        <>
            <div className="bg-slate-800  min-h-screen ">
                <div className="w-full p-5 lg:p-0 md:w-1/3">
                    <Logo />
                </div>
                <div className="max-w-lg mx-auto pt-10 px-5">
                    <Outlet />
                </div>
            </div>
            <Toaster position="top-center" richColors />
        </>
    );
};
