
import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from './Navigation.module.css'

const getNavClass = ({ isActive }) => {
    return clsx(css.nav, isActive && css.activeNav)
}
export default function Navigation() {

    return (
        <nav className={css.containerNav}>

         <NavLink to="/" className={getNavClass}>
        Home
      </NavLink>
      <NavLink to="/Movies" className={getNavClass}>Movies</NavLink>
   
        </nav>
    )
  
}