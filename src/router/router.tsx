import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LinkTreeView, Login, ProfileView, Register } from "../views";
import { AppLayou, AuthLayou } from "../layout";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* Your routes and components go here */}
            <Routes>
                <Route element={<AuthLayou />}>
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Route>
                {/* Dashboar  */}
                <Route path="/admin" element={<AppLayou />}>
                    <Route index element={<LinkTreeView />} />
                    <Route path="profile" element={<ProfileView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
