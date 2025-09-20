import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
export const AuthLayou = () => {
    return (
        <>
            <div className="bg-slate-800  min-h-screen ">
                <div className="w-full p-5 lg:p-0 md:w-1/3">
                    <img src="/logo.svg" className="w-full block" />
                </div>
                <div className="max-w-lg mx-auto pt-10 px-5">
                    <Outlet />
                </div>
            </div>
            <Toaster position="top-center" richColors />
        </>
    );
};
