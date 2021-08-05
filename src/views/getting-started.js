import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import projectStyles from '../style.module.css'
import styles from './getting-started.module.css'

const GettingStarted = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Studio Intro</title>
        <meta
          name="description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Studio Intro" />
        <meta
          property="og:description"
          content="This project is meant to introduce you to the capabilities of the Playground. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d1541f36-452d-444a-8d4e-55d1b5ebc049/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className={styles['container1']}>
        <Heading heading1="Welcome to the Studio!"></Heading>
        <div className={styles['ul']}>
          <ListItem></ListItem>
          <ListItem text="Your progress is saved automatically"></ListItem>
          <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
        </div>
        <div className={styles['footer']}>
          <span
            className={` ${styles['text']} ${projectStyles['subheading']} `}
          >
            Let&apos;s do this!
          </span>
          <div className={styles['container2']}>
            <Tip></Tip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
