import { Outlet } from "react-router-dom"
export const AuthLayou = () => {
  return (
   <div className="bg-slate-800  min-h-screen ">
    <div className="max-w-lg mx-auto pt-10 px-5">
        <Outlet />
    </div>
  </div>
  )
}
