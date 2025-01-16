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

export const icon = {
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
export type IconVariant = "blue" | "white" | "red" | "blue-secondary";

interface IconProps {
    className?: string;
    variant?: IconVariant;
    name: keyof IconType;
}

export default function Icon(props: IconProps) {
    const { variant = "blue", name, className } = props;

    return (
        <span
            className={classNames("icon", variant && `icon--${variant}`, className)}
        >
            {icon[name]}
        </span>
    );
}
