import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderTicosVila from '../components/header-ticos-vila'
import FooterTicosVila from '../components/footer-ticos-vila'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contact - Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Contact - Studio Intro" />
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
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <h1 className={styles['text']}>Contactează-ne:</h1>
          <span className={styles['text1']}>
            <span className={styles['text2']}>
              Suntem mereu disponibili pentru orice întrebare sau propunere de
              proiect, nu ezita să ne contactezi!
            </span>
          </span>
          <div className={styles['container3']}>
            <div className={styles['container4']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <span className={styles['text3']}>
                <span className={styles['text4']}>
                  ticosvilaconstruct@gmail.com
                </span>
              </span>
            </div>
            <div className={styles['container5']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className={styles['text5']}>0760553636</span>
            </div>
            <div className={styles['container6']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <span className={styles['text6']}>
                Oraș Cugir, Județ Alba, Strada Victoriei 19, Scara A, Etaj 2,
                Apartament 12
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterTicosVila></FooterTicosVila>
    </div>
  )
}

export default Contact
