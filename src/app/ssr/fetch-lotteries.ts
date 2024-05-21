import { getLottery } from "@/app/utils/routes"

async function fetchLotteries () {
    try {
        const results = await Promise.all([ 
            fetch(getLottery('COSMIC')),
            fetch(getLottery('CLASSIC')),
            fetch(getLottery('ATOMIC')),
        ]);
        const data = await Promise.all(results.map(result => result.json()))
        return data;
    } catch(error: any) {
        console.error('Failed to resolve Promise', error);
    }
}

export default fetchLotteries;