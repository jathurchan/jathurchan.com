import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jathurchan Selvakumar</title>
        <meta name="description" content="Personal Website." />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>

        <h2 className={styles.heroEyebrow}>
        Solving Problems with Code & AI
          
        </h2>

        <h1 className={styles.heroHeadline}>
        <a href="">Jathurchan Selvakumar</a>
        </h1>

        <div className={styles.socialNav}>
          <ul>
            <li><a href="http://github.com/jathurchan" className={styles.github}>GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jathurchan/" className={styles.medium}>LinkedIn</a></li>
            <li><a href="http://twitter.com/jathurchan" className={styles.twitter}>Twitter</a></li>
            
          </ul>
        </div>

        <p className={styles.description}>
          <i>New version (v2) coming on  Nov 10 2022 😊</i>
        </p>

        
      </main>

      <footer className={styles.footer}>
        <p>
          Made with HTML, CSS, Typescript, React and NEXT.JS. Deployed on Vercel.
        </p>
      </footer>
    </div>
  )
}

export default Home
