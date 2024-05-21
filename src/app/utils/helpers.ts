export const getThemeColorByLotteryName = (themeClr: string) => {
        switch (themeClr) {
            case 'COSMIC':
                return 'purple';
            case "CLASSIC":
                return 'blue';
            case "ATOMIC":
                return 'green';
            default:
                return 'default'
        }
}