import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Instagram from '@/components/Instagram'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Captur Photography' message='I capture moments in nature and keep them alive.' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}
