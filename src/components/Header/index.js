import * as React from 'react'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo.svg'

const Header = () => {
  // const path = window.location.href
  const [offset, setOffset] = React.useState(0)
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'projects', label: 'Projetos' },
  ]
  // const { pathname, hash } = window.location
  // React.useEffect(() => {
  //   if (hash) window.location.href = `${pathname}${hash}`
  // }, [hash])

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
            <li key={link.id}>
              <a href={`/#${link.id}`}>{link.label}</a>
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
