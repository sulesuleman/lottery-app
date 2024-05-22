import React, { FC, useCallback } from 'react'

import { Avatar } from '@/app/common/atoms'
import Text from '@/app/common/atoms/Text'
import ApproxIcon from '@/app/svgs/approx-icon';

type Props = {
    poolAmount: Array<any>;
}

const COIN_AVATARS = [
    'inae',
    'bitcoin',
    'eth',
    'sol',
    'xrp',
    'doge',
    'tron',
];

const ExpandedView: FC<Props> = ({ poolAmount = [] }) => {

    const getTotalPoolAmount = useCallback(() => {
        if (!poolAmount || !poolAmount.length) return 0;
        let totalAmount = 0;
        poolAmount.forEach((obj: any) => {
            totalAmount += parseInt(obj.poolAmount);
        })
        return totalAmount.toLocaleString();
    }, [poolAmount]);


    return (
        <div className="flex flex-col px-3 py-2 w-full gap-y-2">
            <Text color="black" weight='500' size='14' lineHeight='17.05' >Current Pool Status</Text>
            <section className='flex flex-col gap-y-2'>
                {
                    poolAmount?.map((poolObj: any, index: number) => (
                        <div key={poolObj?.lotteryId} className='flex justify-between'>
                            <Avatar
                                height={16}
                                width={16}
                                name={COIN_AVATARS[index]}
                                alt={"currency-icon"}
                            />
                            <Text color="black" weight="400" lineHeight="19.49" size="16">
                                {poolObj?.poolAmount} {poolObj?.coinSymbol}
                            </Text>
                        </div>

                    ))
                }
            </section>

            <hr className='border border-[#3F3F3F]' />
            <div className="flex py-2 items-center justify-end">
                <div className="flex flex-row gap-x-2 items-center">
                    <Avatar src={ApproxIcon} alt={'card-icon'} height={16} width={12} />
                    <div className="flex flex-row gap-x-1.5 items-end">
                        <Text
                            id={"winning pot-2"}
                            color="black"
                            weight="700"
                            lineHeight="29.23"
                            size="24"
                        >
                            {poolAmount && poolAmount.length ? getTotalPoolAmount() : 0}
                        </Text>
                        <Text
                            id={"winning pot-3"}
                            color="black"
                            weight="500"
                            lineHeight="18.62"
                            size="12"
                        >
                            LUCKI
                        </Text></div>
                </div>
            </div>
        </div>
    )
}

export default ExpandedView