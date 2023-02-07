import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

type Props = {}

const contact = (props: Props) => {
  return (
    <div>
        <Hero heading='Contact' message='Submit the form below for more work qoutes.'/>
        <Contact />
    </div>
  )
}

export default contact