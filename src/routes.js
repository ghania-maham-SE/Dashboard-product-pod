import React from 'react'
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// Base Products


//settings
const genSetting =React.lazy(() => import('./views/settings/GeneralSetting'))
const currencySetting =React.lazy(() => import('./views/settings/CurrencySetting'))
// Icons
// import userList from './views/users/Users'

const Chat = React.lazy(() => import('./views/chat/Chat'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  // { path: '/login', name: 'Dashboard', element: Dashboard },


  //settings
 
  { path: '/setings/genSetting', name: 'Genral Setting',  element: genSetting },
  { path: '/setings/currencySetting', name: 'Genral Setting',  element: currencySetting},

  { path:"*", name :"404 Error", element:Page404},

  // { path: '/chat', name: 'Chat',  exact: true },
  // { path: '/chat/users', name: 'Chat',  element: Chat},
]
export default routes
