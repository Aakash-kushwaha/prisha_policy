import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.Nav}>

<img src="https://media.licdn.com/dms/image/C560BAQFfV6QuHZ7ujg/company-logo_200_200/0/1591078687589?e=2147483647&v=beta&t=DXrot12zmVB8T3dISGU1qkHGtBu27f5Rxb1Da8ElENc" alt="" />

<div className={styles.NavC2}>
   <Link to="/" style={{ textDecoration:"underline"}}>Home</Link>

<Link to="/contact"  >contact</Link></div>
    </div>
  )
}

export default Navbar