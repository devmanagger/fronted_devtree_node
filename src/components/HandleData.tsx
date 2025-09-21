import type { UserHandle } from "../types";

type HandleProps = {
    data: UserHandle;
};

export const HandleData = ({ data }: HandleProps) => {
    return (
        <div className="space-y-6 text-white">
            <p className="text-5xl text-center font-black">{data.handle}</p>
            {data.image && (
                <img
                    src={data.image}
                    alt="avatar_user"
                    className="max-w-[250px] mx-auto"
                />
            )}
            <p className="text-lg text-center font-bold">{data.description}</p>
        </div>
    );
};
