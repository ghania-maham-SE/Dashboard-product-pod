import React from 'react';
import { CNavItem } from '@coreui/react';
import './assets/CSS/webCSS/index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBoxOpen, faCartFlatbed, faHeart, faHome} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';

const authering = localStorage.getItem('clientUser');
const userExists = authering ? true : false; // Check if user data exists in localStorage
const userLogin = authering ? false :true;
const _WenNav = [
  {
    component: CNavItem,
    name: 'HOME',
    to: '/home',
    img: <FontAwesomeIcon icon={faHome} className='icon-Navabar' />,
    // ... other properties
  },
  // Conditionally include the FAVOURITE item if the user data exists
  userExists && {
    component: CNavItem,
    name: 'FAVOURITE', // Name should be 'Favourite'
    to: 'my/favourite', // Use the correct path here, should match the one in WebAppContent.js
    // ... other properties
    img: <FontAwesomeIcon className='icon-Navabar' icon={faHeart} />,
  },

  // Conditionally include the CART item if the user data exists
  {
    component: CNavItem,
    name: 'CART', // Name should be 'Favourite'
    to: 'add/cart', // Use the correct path here, should match the one in WebAppContent.js
    // ... other properties
    img: <FontAwesomeIcon className='icon-Navabar' icon={faCartFlatbed} />,
  },
  {
    component: CNavItem,
    name: 'PRODUCTS', // Name should be 'Favourite'
    to: 'product/products', // Use the correct path here, should match the one in WebAppContent.js
    // ... other properties
    img: <AiOutlineShoppingCart className='icon-Navabar' />,
  },
  // Conditionally include the Profile item if the user data exists
  userExists && {
    component: CNavItem,
    name: 'PROFILE', // Name should be 'Favourite'
    to: 'my/profile', // Use the correct path here, should match the one in WebAppContent.js
    // ... other properties
    img: <FontAwesomeIcon className='icon-Navabar' icon={faUser} />,
  },
  userLogin && {
    component: CNavItem,
    name: 'LogIn', // Name should be 'Favourite'
    to: 'user/LogIn', // Use the correct path here, should match the one in WebAppContent.js
    img: <AiOutlineLogin className='icon-Navabar' />,
  },
].filter(Boolean); // Use Array.prototype.filter() to remove falsy values (in this case, the items where the userExists condition is false)

export default _WenNav;
