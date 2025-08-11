import React from 'react'
import HeaderTwo from './HeaderTwo'
import { Outlet } from 'react-router-dom'
import FooterOne from './FooterOne'

const LayoutTwo = () => {
  return (
    <>
        <HeaderTwo />
        <main>
          <Outlet />
        </main>
        <FooterOne />
    </>
  )
}

export default LayoutTwo