import Text from '@/app/common/atoms/Text'
import Circle from '@/app/common/molecules/Circle'
import React from 'react'

interface IMinifiedViewProps {
    previousWinningTicket: Array<number>
    winningPot: number;
}

const MinifiedView = ({ previousWinningTicket, winningPot }: IMinifiedViewProps) => {
    return (
        <>
            <div className="flex gap-x-2 px-3">
                {previousWinningTicket.map(
                    (winningTicket: number) => (
                        <Circle
                            key={winningTicket}
                            ticketNumber={winningTicket}
                        />
                    )
                )}
            </div>
            <div className="flex justify-between px-3 py-2 items-center">
                <Text
                    id={"winning pot"}
                    color="black"
                    weight="500"
                    lineHeight="15.83"
                    size="13"
                >
                    Winning Pot
                </Text>
                <div className="flex flex-row gap-x-1 items-end">
                    <Text
                        id={"winning pot-2"}
                        color="black"
                        weight="700"
                        lineHeight="29.23"
                        size="24"
                    >
                        {winningPot.toLocaleString()}
                    </Text>
                    <Text
                        id={"winning pot-3"}
                        color="black"
                        weight="500"
                        lineHeight="18.62"
                        size="12"
                    >
                        LUCKI
                    </Text>
                </div>
            </div>
        </>
    )
}

export default MinifiedView