import classNames from "classnames";
import "./style.scss";
import Play from "./Play";
import Css from "./Css";
import Html from "./Html";
import Device from "./Device";
import Accessible from "./Accessible";

export const icon = {
    play: <Play />,
    css : <Css/>,
    html : <Html/>,
    device : <Device/>,
    accessible : <Accessible/>
};

export type IconType = typeof icon;
export type IconVariant = "blue" | "white";

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
