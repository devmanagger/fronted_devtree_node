import { Navigate, useParams } from "react-router-dom";
import { getUserByHandle } from "../api";
import { useQuery } from "@tanstack/react-query";

export const HandleView = () => {
    const params = useParams();
    const handle = params.handle!;
    const { data, error, isLoading } = useQuery({
        queryKey: ["handle", handle],
        queryFn: () => getUserByHandle(handle),
        retry: 1,
    });

    // si esta cargando validamos la carga
    if (isLoading) return <p className="text-center text-white">Carcando...</p>;
    if (error) return <Navigate to={"/404"} />;
    console.log(data);

    return <div>HandleView</div>;
};
