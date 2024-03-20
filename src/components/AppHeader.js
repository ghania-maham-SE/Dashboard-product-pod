import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMenu } from '@coreui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AppBreadcrumb } from './index';
import { logo } from 'src/assets/brand/logo';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMessage } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/changeState/changeStateSlice';
// import { fetchChatList, selectChatList } from '../features/userChat/userChatSlice';
import { startTransition } from 'react';
const AppHeader = () => {
  const dispatch = useDispatch();
  // const userMessageList = useSelector(selectChatList);
  // const totalUnseenMessages = userMessageList.filter((message) => !message.seen).length;
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);

  // useEffect(() => {
  //   dispatch(fetchChatList());
  // }, [dispatch]);

  const toggleSidebarFunc = () => {
    dispatch(toggleSidebar());
  };
  const Navigate = useNavigate();
  const logOut = () => {
    startTransition(() => {
      localStorage.clear();
      Navigate('/home/user/Login');
    });
  };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler onClick={toggleSidebarFunc} className="ps-1" >
          <CIcon  icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex align-items-center me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>Users</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="d-flex align-items-center">
          <CNavItem className="me-4 mt-3">
            <Link className="nav-link position-relative mt-0 pt-0 pe-0" to={`/chat/users`}>
              <MdOutlineMessage className="text-primary" style={{ fontSize: '30px' }} />
              {/* {totalUnseenMessages === 0 ? (
                <></>
              ) : (
                <span className="badge position-absolute top-0 ms-0 text-danger start-100 translate-middle">
                  {totalUnseenMessages}
                </span>
              )} */}
            </Link>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <FontAwesomeIcon onClick={logOut} icon={faPowerOff} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  );
};

export default AppHeader;
