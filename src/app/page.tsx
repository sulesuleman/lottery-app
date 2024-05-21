import Image from "next/image";
import fetchLotteries from "./ssr/fetch-lotteries";
import Home from "./csr/Home";

export default async function HomePage() {
  const lotteries = await fetchLotteries() ?? [];

  return (
    <Home lotteries={lotteries} />
  );
}
