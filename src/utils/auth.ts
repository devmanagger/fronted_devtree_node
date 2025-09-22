export const getAuthToken = (): string | null => {
    return localStorage.getItem("AUTH_TOKEN");
};
// Utilidad para manejar el token de autenticación en localStorage
export const setAuthToken = (token: string) => {
    localStorage.setItem("AUTH_TOKEN", token);
};
