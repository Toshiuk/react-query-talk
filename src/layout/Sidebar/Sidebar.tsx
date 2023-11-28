import { FC, PropsWithChildren } from "react";

const Sidebar: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
};

export default Sidebar;
