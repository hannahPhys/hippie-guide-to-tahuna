import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout className={styles.main}>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/TahunaHeader.tiff"
        alt="Tahuna Queenstown New Zealand Banner"
        placeholder="blurred"
        layout="fullWidth"
        height={142}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
   </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
