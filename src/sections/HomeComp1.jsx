import React from "react";
import { AnimatedList } from "../components/magicui/animated-list";
import classNames from "classnames";

const notifications = Array.from({ length: 10 }, () => [
    {
        name: "Payment received",
        description: "Your subscription for premium research tools is active.",
        time: "15m ago",
        icon: "💰",
        color: "#00C9A7",
    },
    {
        name: "New user joined",
        description: "A new researcher has joined the community!",
        time: "10m ago",
        icon: "👨‍🏫",
        color: "#FFB800",
    },
    {
        name: "New collaboration request",
        description: "Dr. Smith has invited you to co-author a research paper.",
        time: "5m ago",
        icon: "🤝",
        color: "#FF3D71",
    },
    {
        name: "Upcoming research webinar",
        description: "Join us for a session on 'AI in Academic Writing' this Friday.",
        time: "2m ago",
        icon: "📅",
        color: "#1E86FF",
    },
]).flat();

const Notification = ({ name, description, icon, color, time }) => {
    return (
        <figure
            className={classNames(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                "bg-white shadow-md dark:bg-transparent dark:backdrop-blur-md dark:border dark:border-gray-700"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: color }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">{description}</p>
                </div>
            </div>
        </figure>
    );
};

const HomeComp1 = ({ className }) => {
    return (
        <div className={classNames("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
};

export default HomeComp1;
