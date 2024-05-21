export const getLottery = (lotteryType: 'COSMIC' | 'CLASSIC' | 'ATOMIC') => 
    `https://testing-luckito-backend.rnssol.com/api/luckito/lottery/get-lottery?lotteryType=${lotteryType}`;
