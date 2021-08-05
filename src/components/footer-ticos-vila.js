import React from 'react'

import PropTypes from 'prop-types'

import styles from './footer-ticos-vila.module.css'

const FooterTicosVila = (props) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['container']}>
          <span className={styles['text']}>
            <span className={styles['text01']}>---------</span>
            <span>
              Cu peste 10 ani de experiență pe piața construcțiilor din Romania
              am reușit să realizăm nenumărate proiecte, unele dintre ele cu o
              complexitate mai mare care ne-au oferit șansa să ne dezvoltăm
              abilități, să ne adaptăm și să învățăm noi tehnologii.
            </span>
          </span>
        </div>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <span className={styles['text03']}>
              <span className={styles['text04']}>Suport clienți :</span>
            </span>
            <span className={styles['text05']}>
              <span className={styles['text06']}>ANPC</span>
            </span>
            <span className={styles['text07']}>
              <span className={styles['text08']}>Contact</span>
            </span>
            <span className={styles['text09']}>
              <span className={styles['text10']}>SOL</span>
            </span>
          </div>
        </div>
        <div className={styles['container3']}>
          <div className={styles['container4']}>
            <div className={styles['container5']}>
              <span className={styles['text11']}>
                <span className={styles['text12']}>
                  Numar de telefon : 0760553636
                </span>
              </span>
              <span className={styles['text13']}>
                <span className={styles['text14']}>
                  Email : ticosvilaconstruct@gmail.com
                </span>
                <span>:</span>
              </span>
              <span className={styles['text16']}>{props.text}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['copyright']}>
        <span className={styles['text17']}>
          <span>© 2021 ticosvilaconstruct.ro | Toate Drepturile Rezervate</span>
          <span className={styles['text19']}></span>
        </span>
      </div>
    </div>
  )
}

FooterTicosVila.defaultProps = {
  text: 'Adresa :  Cugir, jud. Alba, str, Victoriei nr.19, bloc 19, sc A, et. 2, ap 12',
}

FooterTicosVila.propTypes = {
  text: PropTypes.string,
}

export default FooterTicosVila
