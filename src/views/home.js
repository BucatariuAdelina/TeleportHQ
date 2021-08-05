import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderTicosVila from '../components/header-ticos-vila'
import FooterTicosVila from '../components/footer-ticos-vila'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Home - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Home - Studio Intro" />
        <meta
          property="og:description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1541f36-452d-444a-8d4e-55d1b5ebc049/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <HeaderTicosVila></HeaderTicosVila>
      <div className={styles['page-content']}>
        <h1 className={styles['heading']}>
          <span className={styles['text']}></span>
          <span className={styles['text01']}></span>
          <span></span>
          <span></span>
          <span className={styles['text04']}>
            FIRMĂ
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className={styles['text06']}>
            DE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className={styles['text08']}>CONSTRUCȚII</span>
        </h1>
        <span className={styles['text09']}>
          <span>Construiește cu noi!</span>
        </span>
        <div className={styles['buttons-div']}>
          <button
            className={` ${styles['button']} ${projectStyles['thqButton']} `}
          >
            <span className={styles['text11']}>IA LEGĂTURA CU NOI</span>
          </button>
          <button
            className={` ${styles['button1']} ${projectStyles['thqButton']} `}
          >
            <span className={styles['text12']}>
              <span>Despre noi</span>
              <span className={styles['text14']}>&amp;#8203;</span>
            </span>
          </button>
        </div>
      </div>
      <FooterTicosVila></FooterTicosVila>
    </div>
  )
}

export default Home
