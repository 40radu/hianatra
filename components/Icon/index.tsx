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
import Student from "./Student";
import Lesson from "./Lesson";
import SearchMin from "./SearchMin";

export const icon = {
    arrowDown: <ArrowDown />,
    cancel: <Cancel />,
    search: <SearchIcon />,
    miniSearch: <SearchMin />,
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
    linkedin: <Linkedin />,
    student: <Student />,
    lesson: <Lesson />

};

export type IconType = typeof icon;
export type IconVariant = "blue" | "white" | "red" | "blue-secondary" | "black" | "gray";

interface IconProps {
    className?: string;
    variant?: IconVariant;
    name: keyof IconType;
}

export default function Icon(props: IconProps) {
    const { variant = "blue", name, className = "" } = props;

    return (
        <span
            className={classNames("icon", variant && `icon--${variant}`, className)}
        >
            {icon[name]}
        </span>
    );
}

