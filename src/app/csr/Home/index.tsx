"use client";

import { Avatar } from "@/app/common/atoms";
import Text from "@/app/common/atoms/Text";
import Card from "@/app/common/molecules/Card";
import Circle from "@/app/common/molecules/Circle";
import { getThemeColorByLotteryName } from "@/app/utils/helpers";
import React, { FC, useState } from "react";

interface IHomeProps {
    lotteries: Array<any>;
}

const Home: FC<IHomeProps> = ({ lotteries = [] }) => {
    console.info({ lotterisHome: lotteries });

    const [magnifiedLottery, setMagnifiedLottery] = useState({
        cosmic: false,
        classic: false,
        automic: false,
    });

    return (
        <main className="bg-white h-screen w-screen flex items-center justify-center">
            <section
                id=""
                className="w-full h-full max-w-[390px] border border-black"
            >
                <section id="screen-header" className="flex">
                    <div className="p-5">
                        <Avatar
                            height={18}
                            width={24}
                            name={"hamburger"}
                            alt={"hamburger-menu-icon"}
                        />
                    </div>
                    <div className="w-[65%] flex justify-center items-center">
                        <Text
                            id={"header-title"}
                            color="black"
                            weight="700"
                            lineHeight="26.63"
                            size="22"
                        >
                            Lottery
                        </Text>
                    </div>
                </section>

                <section
                    id="latest-results-container"
                    className="flex flex-col p-5 px-3 gap-y-5"
                >
                    <Text color="black" weight="700" lineHeight="26.63" size="21">
                        Latest Results
                    </Text>
                    <section
                        id="lottery-cards-container"
                        className="gap-y-4 flex flex-col"
                    >
                        {lotteries.map((lottery: any) => {
                            const data = lottery.data;
                            const isMagnifySelected = magnifiedLottery[
                                data.lotteryName.toLocaleLowerCase() as
                                | "cosmic"
                                | "classic"
                                | "automic"
                            ];
                            return (
                                <Card
                                    key={data.lotteryName}
                                    title={data.lotteryName}
                                    subtext={`No. ${data.roundNumber}`}
                                    footerText={"Current Pool Status"}
                                    theme={getThemeColorByLotteryName(
                                        data?.lotteryName
                                    )}
                                    icon={
                                        isMagnifySelected
                                            ? "magnifier-minus"
                                            : "magnifier-plus"
                                    }
                                    onClickMagnify={() =>
                                        setMagnifiedLottery((prev) => ({
                                            ...prev,
                                            [data.lotteryName.toLocaleLowerCase()]:
                                                !prev[
                                                data.lotteryName.toLocaleLowerCase() as
                                                | "cosmic"
                                                | "classic"
                                                | "automic"
                                                ],
                                        }))
                                    }
                                    nextDraw={data.nextDraw}
                                >
                                    {data?.lotteryName === "COSMIC" ? (
                                        <>
                                            <div className="flex gap-x-2 px-3">
                                                {data.previousWinningticket.map(
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
                                                        980,934,368,172
                                                    </Text>
                                                    <Text
                                                        id={"winning pot-3"}
                                                        color="black"
                                                        weight="500"
                                                        lineHeight="14.62"
                                                        size="12"
                                                    >
                                                        LUCKI
                                                    </Text>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                </Card>
                            );
                        })}
                    </section>
                </section>
            </section>
        </main>
    );
};

export default Home;
