import { FC } from 'react';
import Image from 'next/image'

interface IAvatarProps {
    name?: string;
    alt: string;
    height: number;
    width: number;
    color?: string;
    onClick?: () => void;
}

const Avatar: FC<IAvatarProps> = ({ name, alt, width, height, onClick }) => {
    return <Image onClick={onClick} src={`/assets/${name}.svg`} alt={alt} width={width} height={height} />
}


export default Avatar;