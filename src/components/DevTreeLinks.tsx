import type { SocialNetwork } from "../types";

type DevTreeLinksProps = {
    links: SocialNetwork;
};
export const DevTreeLinks = ({ links }: DevTreeLinksProps) => {
    return (
        <li className="bg-white px-5 py-2 flex items-center gap-5 rounded-3xl">
            <div
                style={{
                    backgroundImage: `url(/social/icon_${links.name}.svg)`,
                }}
                className="w-12 h-12 bg-cover"
            ></div>
            <p className="capitalize text-gray-400">
                Follow me :{" "}
                <span className="font-bold text-black">{links.name}</span>
            </p>
        </li>
    );
};
