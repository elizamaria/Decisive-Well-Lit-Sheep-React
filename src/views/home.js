import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Decisive Well Lit Sheep</title>
        <meta property="og:title" content="Decisive Well Lit Sheep" />
      </Helmet>
      <div className="home-container1 bg-blue-100"></div>
      <Link to="/" className="home-navlink button">
        Button
      </Link>
    </div>
  )
}

export default Home
