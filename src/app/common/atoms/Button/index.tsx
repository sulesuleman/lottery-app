import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react'

interface IButtonProps extends PropsWithChildren {
    id?: string;
    type?: 'submit' | 'button';
    handleOnClick?: () => void;
    background?: string;
    color?: string;
    fontSize?: string;
}

const Button: FC<IButtonProps> = ({ id, type = 'button', background = 'white', color, fontSize, handleOnClick, children }) => {

    const handleClick = () => {
        handleOnClick && handleOnClick();
    }

    switch (background) {
        case 'white':
            background = 'bg-white';
            break;
        default:
            background = 'bg-transparent';
            break;
    }

    switch (color) {
        case 'purple':
            color = 'text-[#961A88]';
            break;
        case 'blue':
            color = 'text-[#191978]';
            break;
        case 'green':
            color = 'text-[#00AEB1]';
            break;
        default:
            color = 'text-white'
            break;
    }

    return (
        <button onClick={handleClick} id={id} type={type} className={clsx(background, color, 'border rounded-[4px] font-semibold text-sm w-[80px]')}>
            {children}
        </button>
    )
}

export default Button