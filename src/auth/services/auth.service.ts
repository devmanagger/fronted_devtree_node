import { isAxiosError } from "axios";
import { axiosClients } from "../../config";
import type { LoginForm } from "../../types";

export const handleLogin = async (formData: LoginForm) => {
    //http://localhost:4000/auth/login-test
    try {
        const { data } = await axiosClients.post("/auth/login-test", formData);
        // Puede ser string plano (token) o { token: string }
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error || "Error en login");
        }
        throw new Error("Error desconocido en login");
    }
};


////auth/current_user

export const handleCurrentUser = async () => {
    //http://localhost:4000/auth/current_user
    try {
        // Obtener el token del localStorage
        const token = localStorage.getItem("AUTH_TOKEN");
        const { data } = await axiosClients.get("/auth/current_user", {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            },
        });
        console.log("Current user data:", data);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error || "Error al obtener usuario");
        }
        throw new Error("Error desconocido al obtener usuario");
    }
};

