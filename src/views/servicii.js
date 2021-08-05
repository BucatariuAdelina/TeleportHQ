import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderTicosVila from '../components/header-ticos-vila'
import FooterTicosVila from '../components/footer-ticos-vila'
import styles from './servicii.module.css'

const Servicii = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Servicii - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Servicii - Studio Intro" />
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
      <div className={styles['container1']}></div>
      <FooterTicosVila></FooterTicosVila>
    </div>
  )
}

export default Servicii
