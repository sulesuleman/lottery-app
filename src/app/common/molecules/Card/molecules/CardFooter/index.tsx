import React, { PropsWithChildren } from 'react'

interface ICardFooterProps extends PropsWithChildren { }

const CardFooter: React.FC<ICardFooterProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default CardFooter