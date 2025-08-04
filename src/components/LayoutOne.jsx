import React from 'react'
import HeaderOne from './HeaderOne'
import { Outlet } from 'react-router-dom'
import FooterOne from './FooterOne'

const LayoutOne = () => {
  return (
    <>
        <HeaderOne />
        <main>
          <Outlet />
        </main>
        <FooterOne />
    </>
  )
}

export default LayoutOne