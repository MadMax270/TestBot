import { IconProps } from "../utils/types";

const Settings: React.FC<IconProps> = ({ size = 24, className = "" }) => {

    const svgSize = `${size}px`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            height={svgSize}
            width={svgSize}
            viewBox="0 0 24 24"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-7.75c-.59-.26-1.02-.77-1.02-1.41 0-.96.78-1.75 1.75-1.75s1.75.78 1.75 1.75h-1.5c0-.14-.11-.25-.25-.25s-.25.11-.25.25c0 .27.22.5.5.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S11 14.33 11 13.5h1.5c0 .27-.22.5-.5.5s-.5-.22-.5-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .64-.42 1.16-1.02 1.41-.42.18-.86.29-1.31.29-.45 0-.89-.11-1.31-.29zm.13-4.25H12c.28 0 .5-.22.5-.5v-.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .28.22.5.5.5z"/>
        </svg>
    );
};

export default Settings;
