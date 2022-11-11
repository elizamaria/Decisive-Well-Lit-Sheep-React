import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Decisive Well Lit Sheep</title>
        <meta property="og:title" content="Page - Decisive Well Lit Sheep" />
      </Helmet>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Page
