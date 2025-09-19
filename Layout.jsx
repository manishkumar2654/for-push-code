import {Outlet} from 'react-router-dom';//Outlet ek special component hai jo child routes ko render karta hai.
//Matlab Layout ke andar jo page (Home, Insert, Display, etc.) render karna hai, wo Outlet ke jagah dikhayega.

import Header from './Pages/Header';
//Header component import kiya → Ye top me header dikhayega (jaise navbar).

const Layout = () => {
  return (
    <div>
        <Header/>

        <Outlet />
    </div>
  )
  /*  Layout ek component hai.
    <div> → Ye wrapper hai.
    <Header/> → Hamesha upar header dikhega.
    <Outlet /> → Yahan current page ka content dikhayega (Home, Insert, etc., jo URL ke according render hoga). */
}

export default Layout  //Layout ko dusre files me use kar sakte ho.


/* Short Summary:

Layout = Header + Page Content.

Header → Hamesha dikhega.

Outlet → Current page render karega.  */