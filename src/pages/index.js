import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Kotlin",
    url: "",
    description:
      "Разработал приложение iSpringDevices для бронирования мобильных устройств",
  },
  {
    text: "HTML, CSS, JS(es6), WordPress",
    url: "https://qubeproduction.ru/",
    description: "Разработал веб-сайт для видеопродакшена Qube.Production",
  },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/picture.png"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>Резюме Дикова Кирилла</h1>
      <p className={styles.intro}>Android-разработчик</p>
    </div>
    <ul className={styles.list}>
      {links.map(link =>
        link.url == "" ? (
          <li key={link.url} className={styles.listItem}>
            <p
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </p>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        ) : (
          <li key={link.url} className={styles.listItem}>
            <a
              className={styles.listItemLink}
              href={`${link.url}${utmParameters}`}
            >
              {link.text} ↗
            </a>
            <p className={styles.listItemDescription}>{link.description}</p>
          </li>
        )
      )}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
