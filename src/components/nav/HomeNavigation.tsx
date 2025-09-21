import { Link } from "react-router-dom";

export const HomeNavigation = () => {
    return (
        <>
            <Link
                className="text-white p-2 uppercase font-black text-xs cursor-pointer"
                to={"/auth/login"}
            >
                Iniciar sesion
            </Link>
            <Link
                className="bg-lime-500 text-slate-800 rounded-lg p-2 uppercase font-black text-xs cursor-pointer"
                to={"/auth/register"}
            >
                Registarme
            </Link>
        </>
    );
};
