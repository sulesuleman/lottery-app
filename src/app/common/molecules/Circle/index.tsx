import React from 'react'
import Text from '../../atoms/Text'

interface ICircleProps { ticketNumber: number }

const Circle = ({ ticketNumber }: ICircleProps) => {
    return (
        <div key={ticketNumber} className='border rounded-full bg-[#595857] w-9 h-9 flex items-center justify-center'>
            <Text color='white' weight='600' lineHeight='26.8' size='20'>
                {ticketNumber}
            </Text>
        </div>
    )
}

export default Circle;