import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../components/Header/Header.module.css"
import logo from '../Images/app_logo2.png'

export default function Header() {
  return (
    <header>
        <nav className={styles.header}>
            <div>
              <img src={logo} alt="logo"></img>
            </div>
            <div className={styles.left}><Link to="/">Home</Link></div>
            <div className={styles.middle}><Link to="/o-nas">O nas</Link></div>
            <div className={styles.right}><Link to="/kontakt">Kontakt</Link></div>
        </nav>
    </header>
  )
}
