import React, { FC, PropsWithChildren } from 'react'
import clsx from 'clsx';

interface ITextProps extends PropsWithChildren {
  id?: string;
  font?: string;
  weight?: string;
  size?: string;
  lineHeight?: string;
  color?: string;
  width?: string;
}

const Text: FC<ITextProps> = ({ id, font, weight, size, lineHeight, color, width, children }) => {


  const getWidth = () => {
    switch (width) {
      case 'max-content':
        return 'w-max';
      case 'min-content':
        return 'w-min';
      default:
        return 'auto';
    }
  }

  const getWeight = () => {
    switch (weight) {
      case '700':
        return 'font-bold';
      case '400':
        return 'font-normal';
      case '500':
        return 'font-medium';
      case '600':
        return 'font-semibold';
      default:
        return 'font-normal';
    }
  }

  const getSize = () => {
    switch (size) {
      case '24':
        return 'text-[24px]'
      case '22':
        return 'text-[22px]'
      case '21':
        return 'text-[21px]'
      case '20':
        return 'text-[20px]'
      case '15':
        return 'text-[15px]'
      case '16':
        return 'text-[16px]'
      case '14':
        return 'text-[14px]'
      case '13':
        return 'text-[13px]'
      default:
        return 'text-xs'
    }
  }

  const getLineHeight = () => {
    switch (lineHeight) {
      case '29.23':
        return 'leading-[29.23px]';
      case '26.63':
        return 'leading-[26.63px]';
      case '17.05':
        return 'leading-[17.05px]';
      case '15.83':
        return 'leading-[15.83px]';
      case '14.62':
        return 'leading-[14.62px]';
      case '18.62':
        return 'leading-[18.62px]';
      default:
        return 'leading-3';
    }
  }

  const getColor = () => {
    switch (color) {
      case 'black':
        return 'text-black';
      case 'purple':
        return 'text-[#961A88]';
      case 'blue':
        return 'text-[#191978]';
      case 'green':
        return 'text-[#00AEB1]';
      default:
        return 'text-white'
    }
  }

  return (
    <h1 className={clsx(getWeight(), getSize(), getLineHeight(), getColor(), getWidth())} id={id}>{children}</h1>
  )
}

export default Text