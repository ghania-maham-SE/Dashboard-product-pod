import React from 'react'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBoxOpen, faCartShopping,  faGears, faHeart, faLayerGroup, faList12, faListAlt, faPeopleCarryBox, faTags, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons'
import './assets/CSS/sideBar.css'
import {

  cilSpeedometer,

} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} style={{marginRight:'10px'}}/>,
   
  },

  {
    component: CNavGroup,
    name: 'Products',
    to: '/products',
    icon: <FontAwesomeIcon icon={faBoxOpen} style={{marginRight:'10px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Products List',
        icon: <FontAwesomeIcon icon={faList12} style={{marginRight:'10px'}} />,
        to: '/products/productList',
      },

      {
        
        component: CNavItem,
        name: 'Tag Products',
        icon: <FontAwesomeIcon icon={faTags} style={{marginRight:'10px'}} />,
        to: '/products/tagProducts',
      },
        
    ],
  },
  {
    component: CNavGroup,
    name: 'Brands',
    to: '/brands',
    icon: <FontAwesomeIcon icon={faPeopleCarryBox} style={{marginRight:'10px'}} />,
    items: [
      {
        component: CNavItem,
        name: 'Brand List',
        icon: <FontAwesomeIcon icon={faList12} style={{marginRight:'10px'}} />,
        to: '/brands/list',
      },

        
    ],
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/products',
    icon: <FontAwesomeIcon icon={faLayerGroup} style={{marginRight:'10px'}} />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Caegories',
      //   to: '/categaries',
      // },
      {
        component: CNavItem,
        name: 'Categories List',
        to: '/categaries/list',
        icon: <FontAwesomeIcon icon={faListAlt} style={{marginRight:'10px'}} />,
      },
        
    ],
  },

  {
    component: CNavGroup,
    name: 'Favourites',
    to: '/favoirites',
    icon: <FontAwesomeIcon icon={faHeart} style={{marginRight:'10px'}}/>,
    items: [
      {
        component: CNavItem,
        name: 'Favourites',
        icon: <FontAwesomeIcon icon={faHeart} style={{marginRight:'10px'}}/>,
        to: '/favoirites/list',
      },
  
    ],
  },

  {
    component: CNavGroup,
    name: 'Orders',
    to: '/oders',
    icon: <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'10px'}}/>,
    items: [
      {
        component: CNavItem,
        name: 'Orders List',
        icon: <FontAwesomeIcon icon={faCartShopping} style={{marginRight:'10px'}}/>,
        to: '/orders/orderslist',
      },
  
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <FontAwesomeIcon icon={faUsers} style={{marginRight:'10px'}}/>,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        icon: <FontAwesomeIcon icon={faUserGroup} style={{marginRight:'10px'}}/>,
        to: '/users/usersList',
      },
    
    ],
  },


  {
    component: CNavGroup,
    name: 'Settings',
    to: '/setings',
    icon: <FontAwesomeIcon icon={faGears} style={{marginRight:'10px'}}/>,
    items: [
      {
        component: CNavItem,
        name: 'General Setting',
        to: '/setings/genSetting',
      },

      {
        component: CNavItem,
        name: 'Currency Setting',
        to: '/setings/currencySetting',
      },
    
    ],
  },
 
]

export default _nav
