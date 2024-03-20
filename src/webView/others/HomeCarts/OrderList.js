import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react';
import Rating from 'react-rating-stars-component';
import { Modal } from 'antd';
// import axios from 'axios'; // Import axios for making API requests
import axios from 'axios';
import '../../../assets/CSS/webCSS/editprofile.css'
import {
    Table,
    Col,
    CardHeader,
    Row,
    Badge,
} from 'reactstrap';
const UserOrderList = () => {
    return (

            <CCard style={{ width: "100%", border: "none" }} className="mb-4 p-0 " >
                <pre>
                    <CCardBody>
                        <Table className='text-center' responsive>
                            <thead>
                                <tr className=' order-table-head'>
                                    <td>Product Name</td>
                                    <td>Unit Price</td>
                                    <td>Quantity</td>
                                    <td>Status</td>
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
                                <tr>
                                    <td><div className=' d-flex align-items-center '>
                                        <div className='order-img-container'><img src={require(`../../../assets/images/webiamges/image 11.png`)} /></div>
                                        <div className='ps-4'>
                                            <h6 className="text-start mb-0">Shirts Sale for mens By<br /><span className='fw-bolder'>Tommy Hilfiger</span>20 % off</h6>
                                            <div className='d-flex '>  <Rating
                                                count={5} // Number of stars
                                                size={24} // Size of each star (in pixels)
                                                value={4} // The actual rating value
                                                edit={false} // Set to true to allow users to interactively change the rating
                                                activeColor="#ffd700" // Color of the selected (active) stars
                                            /></div>
                                        </div>
                                    </div></td>
                                    <td className='pt-3'><div className='mt-4 mb-0 pt-1 pb-0'>$20</div></td>
                                    <td className='pt-3'><div className='mt-4 mb-0 pt-1 pb-0'>$20</div></td>
                                    <td className='pt-3'><div className='mt-4 mb-0 pt-1 pb-0'> 
                                    <Badge color="warning">orderStatus</Badge>
                                    {/* {item?.orderStatus === 'In Progress' && (<Badge color="warning">{item?.orderStatus}</Badge>)} */}
                                    </div></td>
                                </tr>
                            </tbody>
                        </Table>
                    </CCardBody>

                </pre>
            </CCard>


    )
}

export default UserOrderList