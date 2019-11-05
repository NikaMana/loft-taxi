import React, { useContext } from 'react';
import { AuthContext } from "./Auth.Context";

const Layout = () => {
  const {isAuth} = useContext()
  return <div>hello</div>
}

export default Layout;