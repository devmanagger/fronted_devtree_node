import type { SocialNetwork, UserHandle } from "../types";

type HandleProps = {
    data: UserHandle;
};

export const HandleData = ({ data }: HandleProps) => {
    const links: SocialNetwork[] = JSON.parse(data.links).filter(
        (link: SocialNetwork) => link.enabled
    );
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
            <div className="mt-20 fle flex-col ga-6">
                {links.length ? (
                    links.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="bg-white mt-3 px-5 py-2 flex items-center gap-5 rounded-3xl"
                            key={link.id}
                        >
                            <img
                                src={`/social/icon_${link.name}.svg`}
                                alt="red_social"
                                className="w-12"
                            />
                            <p className="text-gray-400 capitalize text-lg">
                                Visita mi:{" "}
                                <strong className="text-black">
                                    {link.name}
                                </strong>
                            </p>
                        </a>
                    ))
                ) : (
                    <p className="text-center">No hay enlace en este perfil</p>
                )}
            </div>
        </div>
    );
};
