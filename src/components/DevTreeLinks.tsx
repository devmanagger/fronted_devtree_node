import type { SocialNetwork } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type DevTreeLinksProps = {
    links: SocialNetwork;
};
export const DevTreeLinks = ({ links }: DevTreeLinksProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: links.id,
        });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <li
            ref={setNodeRef}
            style={style}
            className="bg-white px-5 py-2 flex items-center gap-5 rounded-3xl"
            {...attributes}
            {...listeners}
        >
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
