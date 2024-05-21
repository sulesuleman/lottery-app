import React, { PropsWithChildren } from 'react'

interface ICardHeaderProps extends PropsWithChildren { }

const CardHeader: React.FC<ICardHeaderProps> = ({ children }) => {

  return (
    <div >{children}</div>
  )
}

export default CardHeader