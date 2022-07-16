import { Outlet } from "react-router-dom"

interface LayoutProps {
    header: JSX.Element;
}

export const Layout = ({ header }: LayoutProps) => {
    return (
        <>
            { header }
            <Outlet/>
        </>
    );
};
