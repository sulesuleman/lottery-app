import React, { Fragment, PropsWithChildren } from 'react'
import CardHeader from './molecules/CardHeader';
import CardBody from './molecules/CardBody';
import CardFooter from './molecules/CardFooter';
import Text from '../../atoms/Text';
import { Avatar } from '../../atoms';
import clsx from 'clsx';
import Button from '../../atoms/Button';
import { getThemeColorByLotteryName } from '@/app/utils/helpers';
import ExpandedView from '@/app/csr/Home/components/ExpandedView';
import '../Card/styles.css'

interface Props extends PropsWithChildren {
    title?: string;
    subtext?: string;
    icon?: any;
    theme?: string;
    footerText?: string;
    nextDraw?: string;
    isExpanded: boolean;
    poolAmount: Array<any>;
    onClickMagnify: () => void;
    onExpandPool: () => void;
    onPlayClick: () => void;
}

const Card = ({ title, subtext, icon, theme, footerText, children, nextDraw, poolAmount = [], onPlayClick, onClickMagnify, onExpandPool, isExpanded }: Props) => {
    const getBgColor = () => {
        switch (theme) {
            case 'blue':
                return 'bg-[#E9EEF6]';
            case 'purple':
                return 'bg-[#EEE1F0]';
            case 'green':
                return 'bg-[#EAF9F7]';
            default:
                return 'bg-white'
        }
    }
    const getButtonColor = () => {
        switch (theme) {
            case 'blue':
                return 'bg-[#191978]';
            case 'purple':
                return 'bg-[#961A88]';
            case 'green':
                return 'bg-[#00AEB1]';
            default:
                return 'bg-white'
        }
    }

    return (
        <section className={clsx(getBgColor(), 'rounded-[10px]')}>
            <CardHeader>
                <div className='flex p-5 px-3'>
                    <div className='flex gap-5 items-center'>
                        <Text size='22' weight='700' color={theme}>{title}</Text>
                        <Text size='14' weight='500' color={theme} width={'max-content'}>{subtext}</Text>
                    </div>
                    <div className={`w-full flex justify-end items-center cursor-pointer magnifier-${theme}`}>
                        <Avatar onClick={onClickMagnify} src={icon} alt={'card-icon'} color={theme} height={24} width={24} />
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
            <CardFooter>
                <section>
                    <div className={clsx('flex justify-between items-center px-3 py-2', getButtonColor())}>
                        <div className='flex gap-x-2 items-center'>
                            <Text size={'14'} weight='600' color={'white'} width={'min-content'} lineHeight='13px'>{'Next Draw'}</Text>
                            <Avatar name={'clock'} alt={'clock-icon'} width={18} height={18}></Avatar>
                            <Text size={'20'} weight='600' color={'white'}>{nextDraw}</Text>
                        </div>
                        <Button handleOnClick={onPlayClick} type='button' color={theme}>
                            Play
                        </Button>
                    </div>
                    {
                        isExpanded && (
                            <ExpandedView poolAmount={poolAmount} />

                        )
                    }
                    <div onClick={onExpandPool} className='flex justify-center items-center gap-1 p-3 cursor-pointer '>
                        <Avatar name={isExpanded ? 'up-arrow' : 'down-arrow'} alt={`${isExpanded ? 'up' : 'down'}-arrow-icon`} width={11} height={9}></Avatar>
                        <Text size={'13'} weight='600' color={'black'}>{footerText}</Text>
                    </div>
                </section>

            </CardFooter>
        </section>
    )
}
export default Card;