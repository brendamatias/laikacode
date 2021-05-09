import * as React from 'react'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo.svg'
import logoLaikaCodelLight from '../../assets/images/logo-light.svg'

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
        <img
          src={offset > 10 ? logoLaikaCodelLight : logoLaikaCode}
          alt="Logo LaikaCode"
        />
        <ul>
          {links.map((link) => (
            <li>
              <a href="/#">{link}</a>
            </li>
          ))}

          <li>
            <button className="btn-light" type="button">
              Contato
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
