import Text from '@/app/common/atoms/Text';
import React from 'react'

interface IMagnifiedViewProps {
    theme?: string;
    roundNumber: number;
}

const MagnifiedView = ({ theme, roundNumber }: IMagnifiedViewProps) => {
    return (
        <section className="flex flex-col items-center px-3 pb-3">
            <div className='flex flex-row w-full justify-between items-center'>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>{roundNumber}</Text>
                <Text color={theme} lineHeight='15.83' size='13' weight='500'>99 99 99 99 99 99</Text>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>14,934,000,000</Text>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>{roundNumber}</Text>
                <Text color={theme} lineHeight='15.83' size='13' weight='500'>99 99 99 99 99 99</Text>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>14,934,000,000</Text>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>{roundNumber}</Text>
                <Text color={theme} lineHeight='15.83' size='13' weight='500'>99 99 99 99 99 99</Text>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>14,934,000,000</Text>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>{roundNumber}</Text>
                <Text color={theme} lineHeight='15.83' size='13' weight='500'>99 99 99 99 99 99</Text>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>14,934,000,000</Text>
            </div>
            <div className='flex flex-row w-full justify-between items-center'>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>{roundNumber}</Text>
                <Text color={theme} lineHeight='15.83' size='13' weight='500'>99 99 99 99 99 99</Text>
                <Text color='black' lineHeight='15.83' size='13' weight='500'>14,934,000,000</Text>
            </div>
        </section>
    )
}

export default MagnifiedView;