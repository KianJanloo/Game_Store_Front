import React, { FC } from 'react'

const HeadTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <span className='text-primary text-3xl'> {title} </span>
  )
}

export default HeadTitle
