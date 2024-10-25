"use client"
import React from 'react'
import styles from "@/components/navbar.module.css"
import Link from 'next/link';


export default function Navbar() {
  return (
   

      <><div className="topnav">
          <p className={styles.home}><Link href="/experience">Experience</Link></p>
         
          <p className={styles.contact}><Link href="/contact">Contact</Link></p>
          <p className={styles.about}><Link href="/about"> About me</Link></p>
      </div>
         </>
  )
}
