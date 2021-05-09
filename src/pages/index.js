import * as React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

import '../assets/styles/global.scss'
import '../assets/styles/bootstrap-grid.css'

const IndexPage = () => (
  <main>
    <div className="bg-home">
      <Header />
      <Home />
    </div>
  </main>
)

export default IndexPage
