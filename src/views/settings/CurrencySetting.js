import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, } from 'antd';
import axios from 'axios';
import { Modal as AntdModal } from 'antd';

import '../../assets/Table.css';
import '../../assets/CSS/Category.css';
import {
    Table,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    CardHeader, Card, CardBody, FormGroup, Input,
    Row, Form, Label,
    Modal, ModalHeader, ModalBody, ModalFooter, Badge
} from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../Products/Inputfields/InputField';

const CurrencySetting = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [product, setProduct] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [modal, setModal] = useState(false);
    const [country, setCountry] = useState('')
    const [currency, setcatCurrencyName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [Err, setErr] = useState(false)
    const [Updatemodal, setUpdateModal] = useState(false);
    const [ID, setID] = useState('')
    const [selectForUpdate, setselectForUpdate] = useState([])
    const Navigate = useNavigate();
    const validateForm = (props) => {
        const errors = {};
        if (!country) {
            errors.country = "Country is required";
        }
        if (!currency) {
            errors.currency = "Currency is required";
        }
        if (!symbol) {
            errors.symbol = "Symbol code is required";
        }
        return Object.keys(errors).length === 0 ? null : errors;
    };
    useEffect(() => {
    }, [])
    const handleOnSubmit = async (event) => {
        event.preventDefault()
        
        const errors = validateForm();
        if (errors) {
            setErr(errors);
            return;
        }
        const formData = new FormData();
        formData.append('symbol', symbol);
        formData.append('country', country);
        formData.append('currency', currency);
        try {
            let response = await fetch(`http://localhost:400/currencySetting/add`, {
                method: 'POST',
                body: formData,
            })
            response = await response.json()
            console.log(response)
            if (response) {
                setModal(!modal)
                Navigate(`/setings/currencySetting`)
                getAllProduct();
            }
        } catch (error) {
            console.log(error)
        }
    }
 

    const getAllProduct = async () => {
        try {
            const response = await fetch('http://localhost:400/currencySetting/all');
            const result = await response.json();
            console.log(result);
            setProduct(result);
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };
        const toggleModal=()=>setModal(!modal);
        const toggleUpdateMoal=(id, item)=>{
        setID(id)
        setselectForUpdate(item)
    
        console.log(id)
        setUpdateModal(!Updatemodal)
    };
        const handleOnSubmitUpdate = async (event) => {
        event.preventDefault()
        setUpdateModal(!Updatemodal)
        const formData = new FormData();
        formData.append('symbol', symbol);
        formData.append('country', country);
        formData.append('currency', currency);
        try {
            let response = await fetch(`http://localhost:400/currencySetting/updateCurrency/${ID}`, {
                method: 'PUT',
                body: formData,
            })
            response = await response.json()
            console.log(response)
            if (response) {
                Navigate(`/setings/currencySetting`)
                getAllProduct();
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleCheckboxChange = (event, id) => {
        if (event.target.checked) {
            setSelectedIds((prevIds) => [...prevIds, id]);
        } else {
            setSelectedIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                'http://localhost:400/currencySetting/delMultiCuureny',
                { data: { ids: selectedIds } }
            );
            console.log(response.data);
            // Refresh the user list or update the state as needed
        } catch (error) {
            console.error(error);
            // Handle error
        }
        getAllProduct();
    };

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const getByID = async (id) => {
        let result = await fetch(`http://localhost:400/currencySetting/${id}`)
        result = await result.json()
        setCountry(result.country)
        setcatCurrencyName(result.currency)
        setSymbol(result.symbol)
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    const { confirm } = AntdModal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure want to delete selected users?',
            icon: <ExclamationCircleFilled />,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                handleDelete();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const externalCloseBtn = (
        <button
            type="button"
            className="close"
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={toggleModal}
        >
            &times;
        </button>

    );
    const externalCloseBtn1 = (
        <button
            type="button"
            className="close"
            style={{ position: 'absolute', top: '15px', right: '15px' }}
            onClick={toggleUpdateMoal}
        >
            &times;
        </button>

    );


    return (
        <>
            <CRow>
                <Col xs={12} className=''>
                    <CCard className='mb-4 m-3'>
                        <CardHeader className='Table'>
                            <Row className='d-flex align-items-center justify-content-around'>
                                <Col className='justify-content-start d-flex' sm={9}>
                                    <div>
                                        <strong className='text-info'>Product: All</strong>
                                    </div>
                                </Col>
                                <Col className='d-flex justify-content-end' sm={3}>
                                    <Dropdown style={{ background: 'none' }} isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle
                                            className='text-info'
                                            style={{ background: 'none', border: 'none' }}
                                            caret
                                        >
                                            Actions
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <Link>
                                                <DropdownItem onClick={toggleModal}>Add</DropdownItem>
                                            </Link>
                                            <DropdownItem onClick={showDeleteConfirm}>Delete</DropdownItem>
                                            <DropdownItem divider />
                                        </DropdownMenu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CCardBody>
                            <Table className='text-center' responsive>
                                <thead>
                                    <tr className='text-info'>
                                        <th>#</th>
                                        <th>Country</th>
                                        <th>Currency</th>
                                        <th>Symbol</th>
                                        <th>Edit</th>
                                       
                                        < th>Select</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(product) &&
                                        product.length > 0 &&
                                        product.map((item, index) => {
                                            return (
                                                <tr key={index + 1}>
                                                    <th scope='row'>{index + 1}</th>                                                  
                                                    <th scope='row'>{item.country}</th>
                                                    <th scope='row'>{item.currency}</th>
                                                    <th scope='row'>{item.symbol}</th>
                                                    <td>
                                                        <Badge color='info' style={{cursor:"pointer"}} onClick={
                                                            ()=>{
                                                                toggleUpdateMoal(item._id, item)
                                                                getByID(item._id)
                                                            }
                                                        } className='text-white'>
                                                            Edit
                                                        </Badge >
                                                    </td>
                                                   
                                                    <td key={index + 1}>
                                                        <input
                                                            type='checkbox'
                                                            checked={selectedIds.includes(item._id)}
                                                            onChange={(event) => {
                                                                console.log(item._id);
                                                                handleCheckboxChange(event, item._id);
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </Table>
                        </CCardBody>

                    </CCard>
                </Col>
            </CRow>
            <Row >
                <Col sm={10}>
                    <Modal isOpen={modal} toggle={toggleModal} className="custom-modal"
                        external={externalCloseBtn} size="lg">
                        <ModalHeader>Add New Currency Details</ModalHeader>
                        <ModalBody className=''>
                            <Row>
                                <Form onSubmit={handleOnSubmit}>
                                    <Row>
                                        <Col lg={12} md={12} sm={10} className=''>
                                            <Card className="mb-4 m-3" >
                                                <CardHeader className='Table'>
                                                    <Row className='d-flex align-items-center justify-content-start'>
                                                        <Col className='justify-content-start d-flex' sm={9}  >
                                                            <strong className='text-info'>Currency: Add</strong>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row className=' align-items-center'>
                                                        <FormGroup className='d-flex justify-content-center' >
                                                            <Col sm={10}>
                                                                <InputField
                                                                type={`text`}
                                                                placeholder={`USA etc`}
                                                                label={'Country'}
                                                           
                                                                onChangeEvent={(e) => {
                                                                    setCountry(e.target.value);
                                                                    if (Err && Err.country) {
                                                                        setErr({ ...Err, country: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.country ? true : false}
                                                                errorMessage={Err && Err.country ? Err.country : null}
                                                            />
                                                               
                                                            </Col>
                                                        </FormGroup>
                                                    </Row>
                                                    <Row className='d-flex justify-content-center align-items-center'>
                                                        <Col sm={10} >
                                                            <InputField
                                                                type={`text`}
                                                                placeholder={`dollors etc.`}
                                                                label={'Currency'}
                                                            
                                                                onChangeEvent={(e) => {
                                                                    setcatCurrencyName(e.target.value);
                                                                    if (Err && Err.country) {
                                                                        setErr({ ...Err, country: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.country ? true : false}
                                                                errorMessage={Err && Err.country ? Err.country : null}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className='d-flex justify-content-center align-items-center mt-3'>
                                                        <Col sm={10} >
                                                            <InputField
                                                                placeholder={`$ etc.`}
                                                                type={`text`}
                                                                label={'Symbol'}
                                                            
                                                                onChangeEvent={(e) => {
                                                                    setSymbol(e.target.value);
                                                                    if (Err && Err.currency) {
                                                                        setErr({ ...Err, currency: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.currency ? true : false}
                                                                errorMessage={Err && Err.currency ? Err.currency : null}
                                                            />
                                                        </Col>
                                                    </Row>
                                                   
                                                </CardBody>
                                                <ModalFooter>
                                                    <Button color="danger" onClick={toggleModal}>
                                                        Cancel
                                                    </Button>
                                                    <button className='btn btn-success text-white' onAuxClick={handleOnSubmit} type='submit'>
                                                        upload</button>
                                                </ModalFooter>
                                            </Card>

                                        </Col>
                                    </Row>
                                </Form>
                            </Row>


                        </ModalBody>
                     
                    </Modal>
                </Col>

            </Row>

            <Row >
                <Col sm={10}>
                    <Modal isOpen={Updatemodal} toggle={toggleUpdateMoal} className="custom-modal"
                        external={externalCloseBtn1} size="lg">
                        <ModalHeader>Currency: Setting</ModalHeader>
                        <ModalBody className=''>
                        <Row>
                                <Form onSubmit={handleOnSubmitUpdate}>
                                    <Row>
                                        <Col lg={12} md={12} sm={10} className=''>
                                            <Card className="mb-4 m-3" >
                                                <CardHeader className='Table'>
                                                    <Row className='d-flex align-items-center justify-content-start'>
                                                        <Col className='justify-content-start d-flex' sm={9}  >
                                                            <strong className='text-info'>Currency: Update</strong>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row className=' align-items-center'>
                                                        <FormGroup className='d-flex justify-content-center' >
                                                            <Col sm={10}>
                                                               
                                                               
                                                                <InputField
                                                                type={`text`}
                                                                placeholder={`USA etc`}
                                                                label={'Country'}
                                                                value={country}
                                                                onChangeEvent={(e) => {
                                                                    setCountry(e.target.value);
                                                                    if (Err && Err.country) {
                                                                        setErr({ ...Err, country: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.country ? true : false}
                                                                errorMessage={Err && Err.country ? Err.country : null}
                                                            />
                                                               
                                                        
                                                            </Col>
                                                        </FormGroup>
                                                    </Row>
                                                    <Row className='d-flex justify-content-center align-items-center'>
                                                        <Col sm={10} >
                                                            <InputField
                                                                type={`text`}
                                                                placeholder={`dollors etc.`}
                                                                label={'Currency'}
                                                                value={currency}
                                                                
                                                                onChangeEvent={(e) => {
                                                                    setcatCurrencyName(e.target.value);
                                                                    if (Err && Err.currency) {
                                                                        setErr({ ...Err, currency: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.currency ? true : false}
                                                                errorMessage={Err && Err.currency ? Err.currency : null}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className='d-flex justify-content-center align-items-center mt-3'>
                                                        <Col sm={10} >
                                                            <InputField
                                                                placeholder={`shirt22`}
                                                                type={`text`}
                                                                label={'symbol'}
                                                                value={symbol}
                                                                
                                                                onChangeEvent={(e) => {
                                                                    setSymbol(e.target.value);
                                                                    if (Err && Err.symbol) {
                                                                        setErr({ ...Err, symbol: null });
                                                                    }
                                                                }}
                                                                invalid={Err && Err.symbol ? true : false}
                                                                errorMessage={Err && Err.symbol ? Err.symbol : null}
                                                            />
                                                        </Col>
                                                    </Row>
                                                     
                                                </CardBody>

                                                <ModalFooter>
                                                    <Button color="danger" onClick={toggleUpdateMoal}>
                                                        Cancel
                                                    </Button>
                                                    <button className='btn btn-success text-white' onClick={handleOnSubmitUpdate} type='submit'>
                                                        update</button>
                                                </ModalFooter>
                                            </Card>

                                        </Col>
                                    </Row>
                                </Form>
                            </Row>
                        </ModalBody>
                       
                    </Modal>
                </Col>

            </Row>
        </>
    );
};

export default CurrencySetting;
