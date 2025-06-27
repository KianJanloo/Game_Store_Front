import { IInfoText } from '@/types/info-text/info-text-types'
import React, { FC } from 'react'

const InfoText: FC<IInfoText> = ({ title, value, icon }) => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex gap-2 text-foreground/60 items-center'> {icon} {title}: </div>
            <span> {value} </span>
        </div>
    )
}

export default InfoText
