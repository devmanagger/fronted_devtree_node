import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DevTree } from "../components/DevTree";
import { getUser } from "../api";

export const AppLayou = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["users"],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false,
    });
    if (isLoading)
        return (
            <div className="text-center mt-20 font-black text-3xl">
                Cargando...
            </div>
        );
    if (isError) return <Navigate to={"/auth/login"} />;
    if (data) return <DevTree data={data} />;
};
