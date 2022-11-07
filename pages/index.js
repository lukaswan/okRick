import Head from 'next/head'
import Image from 'next/image'
import Page from '../components'
import styles from '../styles/Home.module.css'

import { useState } from 'react';

export default function Home() {
  const [cnt, setCnt] = useState(1)
  const pages = []
  for (let i = 0; i < cnt; i++) {
    pages.push(<Page index={i} key={i} />)
  }
  return (
    <div className={` container-fluid d-flex flex-column ${styles.container}`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={` container-fluid d-flex flex-column ${styles.container}`}>
      {pages}
      <div className={`container d-flex justify-content-center col-10${styles.footer}`}>
      <button className='btn btn-primary' onClick={() => setCnt(cnt + 1)}>Load More</button>
      </div>
      </div>
    </div>
  )
}
