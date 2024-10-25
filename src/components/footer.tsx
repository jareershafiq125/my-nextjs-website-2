import React from 'react'
import styles from "@/components/footer.module.css"
export default function footer() {
  return (

    <><footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.text}>© 2024 Jareer Shafiq</p>
      <nav className={styles.nav}>
        <a href="/about" className={styles.link}>About</a>
        <a href="/services" className={styles.link}>Services</a>
        <a href="/contact" className={styles.link}>Contact</a>
      </nav>
    </div>
  </footer><><>

    </>

      </></>
    )
}
