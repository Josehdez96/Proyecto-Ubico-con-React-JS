import React from "react"

import Footer from "../components/Footer.jsx"


const Layout = (props) => (
  <React.Fragment>
    {props.children}
    <Footer />
  </React.Fragment>
)

export default Layout