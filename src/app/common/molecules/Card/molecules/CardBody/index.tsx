import React, { PropsWithChildren } from 'react'

interface ICardBodyProps extends PropsWithChildren { }

const CardBody: React.FC<ICardBodyProps> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default CardBody