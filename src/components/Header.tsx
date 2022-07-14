import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <ul className="header__list">
        <li><Link to={'/'}>Salary</Link></li>
        <li><Link to={'/employee'}>Employee</Link></li>
      </ul>
    </header>
  )
}

export default Header
