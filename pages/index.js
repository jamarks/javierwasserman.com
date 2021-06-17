import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images/JavierWasserman.jpg'
import coverPic from '../public/images/cover.jpg'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: '400px', width: '100%', position: 'relative' }}>
        <Image style={{ height: '150px' }} src={coverPic} layout='fill' objectFit='cover' objectPosition='center' quality={100}></Image>
      </div>

      <div style={{ position: 'relative', top: '-40px' }} className='container sm:w-8/12 mx-auto '>
        <Image src={profilePic} width='138' height='150'></Image>
      </div>

      <div className='container mx-auto sm:w-8/12'>
        <h1 className='font-roboto font-bold my-3'>Hi! Hello! Hallo!</h1>
        <div className='sm:border-l-4 sm:pl-10 w-full'>
          <p className='leading-6'>I am an Entrepreneur and Full-Stack Developer, born in Argentina, now living in Berlín 🇩🇪 with more than 15 years of coding experience (PHP, Node, React,  Next.js enthusiast)</p>
          <p className='leading-6 mt-4'>In 2013 I have co-founded EntrenaYa, a B2C & B2B fitness platform, focusing on Product Management, Business and UX Optimization.</p>
          <p className='leading-6 mt-4'>Problem solver. Optimistic. Lateral thinking. Sagittarius. Musician. Cook. Wine Geek.</p>
        </div>

      </div>

      <footer className=''>

      </footer>
    </div>
  )
}
