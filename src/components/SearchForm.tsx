import { useForm } from "react-hook-form";
import slugify from "react-slugify";
import { ErrorMessage } from "./ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { searchByHandle } from "../api";
import { Link } from "react-router-dom";

export const SearchForm = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            handle: "",
        },
    });
    const mutation = useMutation({
        mutationFn: searchByHandle,
    });
    const handle = watch("handle");
    const handleSearch = () => {
        const slug = slugify(handle, {
            delimiter: "_",
        });
        mutation.mutate(slug);
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit(handleSearch)}>
            <div className="relative flex items-center bg-slate-200 px-2">
                <label htmlFor="handle" className="text-gray-400">
                    devtree.com/
                </label>
                <input
                    type="text"
                    id="handle"
                    className="border-node bg-transparent p-2 focus:right-0 flex-1 rounded-3xl ml-3"
                    placeholder="Search your nickname..."
                    {...register("handle", {
                        required: "Please enter your nickname.",
                    })}
                />
            </div>
            {errors.handle && (
                <ErrorMessage>{errors.handle.message}</ErrorMessage>
            )}
            <div className="mt-10">
                {mutation.isPending && (
                    <p className="text-center">Cargando..</p>
                )}
                {mutation.error && (
                    <p className="text-center text-red-600 font-black">
                        {mutation.error.message}
                    </p>
                )}
                {mutation.data && (
                    <p className="text-center text-cyan-500 font-black">
                        {mutation.data} Ir a{" "}
                        <Link
                            to={"/auth/register"}
                            state={{ handle: slugify(handle) }}
                        >
                            Register
                        </Link>
                    </p>
                )}
            </div>
            <input
                value={"Get my DevTree"}
                type="submit"
                className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-xl font-bold cursor-pointer"
            />
        </form>
    );
};
