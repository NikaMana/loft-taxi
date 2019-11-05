import React, { useContext } from 'react';
import { AuthContext } from "./Auth.Context";

const Layout = () => {
  const {isAuth, AuthHandler} = useContext(AuthContext);
  return {
    <div>
      {isAuth ? <div>Залогинем</div> : <div>Не залогинен</div>}
      <button onClick={() => AuthHandler()}>Нажми на меня!</button>
    </div>
  };
};

export default Layout;