import React, { FC } from 'react'

const SubTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <span className='text-hover-foreground text-base text-center'> {title} </span>
  )
}

export default SubTitle
