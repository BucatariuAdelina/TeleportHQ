import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './header-ticos-vila.module.css'

const HeaderTicosVila = (props) => {
  return (
    <div className={styles['header']}>
      <div className={styles['nav-bar']}>
        <Link
          to="/informatii"
          className={` ${styles['informatii']} ${projectStyles['thqLink']} `}
        >
          {props.informatii}
        </Link>
        <Link
          to="/catalog"
          className={` ${styles['catalog']} ${projectStyles['thqLink']} `}
        >
          {props.catalog}
        </Link>
        <Link
          to="/servicii"
          className={` ${styles['servicii']} ${projectStyles['thqLink']} `}
        >
          {props.servicii}
        </Link>
        <Link
          to="/contact"
          className={` ${styles['contact']} ${projectStyles['thqLink']} `}
        >
          {props.contact}
        </Link>
      </div>
      <div className={styles['logo']}>
        <Link to="/home" className={styles['navlink']}>
          <h1
            className={` ${styles['text-logo']} ${projectStyles['thqLink']} `}
          >
            <span className={styles['text']}>Ticosvila Construct</span>
          </h1>
        </Link>
      </div>
    </div>
  )
}

HeaderTicosVila.defaultProps = {
  servicii: 'Servicii',
  contact: 'Contact',
  catalog: 'Catalog',
  informatii: 'Informații',
}

HeaderTicosVila.propTypes = {
  servicii: PropTypes.string,
  contact: PropTypes.string,
  catalog: PropTypes.string,
  informatii: PropTypes.string,
}

export default HeaderTicosVila
