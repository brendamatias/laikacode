import * as React from 'react'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo.svg'

const Header = () => {
  const [offset, setOffset] = React.useState(0)
  const links = ['Início', 'Sobre', 'Serviços', 'Projetos']

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <nav className={`navbar ${offset > 10 ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <img src={logoLaikaCode} alt="Logo LaikaCode" />
        <ul>
          {links.map((link) => (
            <li>
              <a href="/#">{link}</a>
            </li>
          ))}

          <li>
            <button className={offset > 10 ? '' : 'btn-light'} type="button">
              Traga seu projeto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
