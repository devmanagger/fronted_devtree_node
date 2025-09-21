import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    HandleView,
    HomeView,
    LinkTreeView,
    Login,
    NotFoundView,
    ProfileView,
    Register,
} from "../views";
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

                <Route path="/" element={<HomeView />} />
                <Route path="/:handle" element={<AuthLayou />}>
                    <Route element={<HandleView />} index={true} />
                </Route>
                <Route path="/404" element={<AuthLayou />}>
                    <Route element={<NotFoundView />} index={true} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
