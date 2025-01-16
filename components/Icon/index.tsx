import classNames from "classnames";
import "./style.scss";
import Play from "./Play";
import Css from "./Css";
import Html from "./Html";
import Device from "./Device";
import Accessible from "./Accessible";
import ArrowRight from "./ArrowRight";
import Apostr from "./Apostr";
import Android from "./Android";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Linkedin from "./Linkedin";
import SearchIcon from "./Search";
import Login from "./Login";
import ArrowDown from "./ArrowDown";
import Cancel from "./Cancel";

export const icon = {
    arrowDown: <ArrowDown />,
    cancel: <Cancel />,
    search: <SearchIcon />,
    login: <Login />,
    play: <Play />,
    css: <Css />,
    html: <Html />,
    device: <Device />,
    accessible: <Accessible />,
    arrowRight: <ArrowRight />,
    apostr: <Apostr />,
    android: <Android />,
    facebook: <Facebook />,
    instagram: <Instagram />,
    twitter: <Twitter />,
    linkedin: <Linkedin />

};

export type IconType = typeof icon;
export type IconVariant = "blue" | "white" | "red" | "blue-secondary" | "black";

interface IconProps {
    className?: string;
    variant?: IconVariant;
    name: keyof IconType;
    onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void
}

export default function Icon(props: IconProps) {
    const { variant = "blue", name, className, onClick } = props;

    return (
        <span
            className={classNames("icon", variant && `icon--${variant}`, className)}
            onClick={onClick}
        >
            {icon[name]}
        </span>
    );
}

