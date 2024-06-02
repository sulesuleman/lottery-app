"use client";

import React, { FC } from "react";
import { Avatar } from "@/app/common/atoms";
import Text from "@/app/common/atoms/Text";
import Card from "@/app/common/molecules/Card";
import { getThemeColorByLotteryName } from "@/app/utils/helpers";
import MinifiedView from "./components/MinifiedView";
import MagnifiedView from "./components/MagnifiedView";
import MagnifierPlusIcon from '@/app/svgs/magnifier-plus';
import MagnifierMinusIcon from '@/app/svgs/maginifier-minus';
import useHome from "./hooks/useHome";
interface IHomeProps {
    lotteries: Array<any>;
}

const Home: FC<IHomeProps> = ({ lotteries = [] }) => {

    const { expanded, isAuthenticated, magnifiedLottery, router, setExpanded, setMagnifiedLottery } = useHome();

    return (
        <main className="bg-white min-h-screen w-screen flex items-center justify-center">
            <section
                id=""
                className="w-full h-full max-w-[390px]"
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
                            const lotteryName = data.lotteryName.toLocaleLowerCase() as
                                | "cosmic"
                                | "classic"
                                | "automic"
                            const isMagnifySelected = magnifiedLottery[lotteryName];
                            const roundNumber = data.roundNumber;
                            return (
                                <Card
                                    key={data.lotteryName}
                                    title={data.lotteryName}
                                    subtext={isMagnifySelected ? 'Past 5 Results' : `No. ${roundNumber}`}
                                    footerText={expanded[lotteryName] ? "Close" : "Current Pool Status"}
                                    theme={getThemeColorByLotteryName(
                                        data?.lotteryName
                                    )}
                                    icon={
                                        isMagnifySelected
                                            ? MagnifierMinusIcon
                                            : MagnifierPlusIcon
                                    }
                                    onPlayClick={() => !isAuthenticated && router.push("/login")}
                                    onClickMagnify={() =>
                                        setMagnifiedLottery((prev) => ({
                                            ...prev,
                                            [data.lotteryName.toLocaleLowerCase()]: !prev[lotteryName],
                                        }))
                                    }
                                    onExpandPool={() =>
                                        setExpanded((prev) => ({
                                            ...prev,
                                            [data.lotteryName.toLocaleLowerCase()]: !prev[lotteryName],
                                        }))
                                    }
                                    isExpanded={expanded[lotteryName]}
                                    nextDraw={data.nextDraw}
                                    poolAmount={data.poolAmount}
                                >
                                    {!isMagnifySelected ? (
                                        <MinifiedView
                                            previousWinningTicket={
                                                data.previousWinningticket
                                            }
                                            winningPot={data.winningPot}
                                        />
                                    ) : (
                                        <MagnifiedView
                                            theme={getThemeColorByLotteryName(
                                                data?.lotteryName
                                            )}
                                            roundNumber={roundNumber}
                                        />
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
