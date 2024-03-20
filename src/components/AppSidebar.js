import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import { AppSidebarNav } from './AppSidebarNav';
import logo from '../assets/images/my discount 1 1.png';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../assets/CSS/Category.css';
import navigation from '../_nav';
import { CardTitle } from 'reactstrap';
import { toggleSidebar } from '../features/changeState/changeStateSlice';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow);

  const toggleSidebarFunc = () => {
    dispatch(toggleSidebar());
  };

  return (
    <CSidebar
      className="sideBar"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        if (visible !== sidebarShow) {
          // This ensures that the sidebar visibility change is not handled redundantly
          dispatch(toggleSidebar());
        }
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img className="img-fluid" src={logo} style={{ width: '50px' }} alt="logo" />
        <CardTitle tag="h6">MYDISCOUNT</CardTitle>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
