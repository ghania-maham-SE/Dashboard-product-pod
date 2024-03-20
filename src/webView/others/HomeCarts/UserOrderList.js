import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';
// import axios from 'axios'; // Import axios for making API requests
import axios from 'axios';
import {
  Table,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader,
  Row,
  Badge,
} from 'reactstrap';
const UserOrderList = () => {
  return (
<div  className='col-10 col-md-4 col-lg-2'>
<CRow>
      <Col xs={12} className=''>
        <CCard className="mb-4 m-3" >
          <CardHeader className='Table'>
            <Row className='d-flex align-items-center justify-content-around'>
              <Col className='justify-content-start d-flex' sm={9}  >
                <div>
                  <strong className='text-info'>Product: All</strong>
              
                </div>
              </Col>
            </Row>
          </CardHeader>
          <pre>
            <CCardBody>
              <Table className='text-center' responsive>
                <thead>
                  <tr className='text-info'>
                    <th>#</th>
                    <th>Product image</th>
                    <th>Product Name</th>
                    <th>Actual Price</th>
                    <th>Discounted Price</th>
                    <th>Category</th>
                    <th>Detail</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {Array.isArray(product) &&
                    product.length > 0 &&
                    product.map((item, index) => {
                      return (
                      <>
                      </>
                      );
                    })} */}
                </tbody>
              </Table>
            </CCardBody>

          </pre>
        </CCard>
      </Col>
    </CRow>
    
</div>
  )
}

export default UserOrderList