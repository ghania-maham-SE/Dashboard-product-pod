import React from 'react'

const Home = React.lazy(() => import('./webView/pages/Home.js'))
const Favourite = React.lazy(() => import('./webView/pages/Favourite.js'))

const routes = [
    { path: '/', exact: true, name: 'Home', element: <Home /> }, 
    { path: '/home', name: 'Products', exact: true },
    { path: '/home/favourite', exact: true, name: 'Favourite', element: <Home /> },// Wrap <Home /> inside element property
 
  ];
export default routes
