import React from "react";
import classNames from "classnames";

const HomeComp2 = ({ className }) => {
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

export default HomeComp2;
