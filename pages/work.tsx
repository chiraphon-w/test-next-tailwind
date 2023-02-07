import Hero from '@/components/Hero'
import Porfolio from '@/components/Porfolio'
import React from 'react'

type Props = {}

const work = (props: Props) => {
    return (
        <div>
            <Hero heading='My Work' message='This is some of my recent work traveling the world.' />
            <Porfolio />
        </div>
    )
}

export default work