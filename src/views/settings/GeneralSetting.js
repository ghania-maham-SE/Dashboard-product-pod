import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, } from 'antd';
import '../../assets/Table.css';
import '../../assets/CSS/Category.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
    Table,
    Col,
    CardHeader,
    Input,
    Row,
    Form,
    Label,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Badge
} from 'reactstrap';
import { useNavigate, Link , useParams} from 'react-router-dom';

import InputField from '../Products/Inputfields/InputField';

const Categories = () => {
    const [genSetting, setGenSetting] = useState([]);
    const [emailAddress, setemailAddress] = useState('')
    const [contact, setContact] = useState('')
    const [imageLgo, setImageLogo] = useState(null)
    const [address, setAddress] = useState('')
    const [currency, setCurrency] = useState('')
    const [faceBook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [description, setdescription] = useState('')

    const [Err, setErr] = useState(false)
    const [Updatemodal, setUpdateModal] = useState(false);
    const [ID, setID] = useState('')
    const [selectForUpdate, setselectForUpdate] = useState([])
    const params = useParams()
    const Navigate = useNavigate();
   

    const getByID = async (id) => {
        let result = await fetch(`http://localhost:400/genSetting/genSettingId/${id}`)
        result = await result.json()
        setemailAddress(result.emailAddress)
        setContact(result.contact)
        setAddress(result.address)
        setCurrency(result.currency)
        setFacebook(result.faceBook)
        setInstagram(result.instagram)
        setTwitter(result.twitter)
        setdescription(result.description)
    }

    useEffect(() => {
    }, [])

    const handleImageChange = (event) => {
        setImageLogo(event.target.files[0]);
        if (Err && Err.garmentPhoto) {
            setErr({ ...Err, imageLgo: null });
        }
    };

    const getAllProduct = async () => {
        try {
            const response = await fetch('http://localhost:400/genSetting/getSettingList');
            const result = await response.json();
            console.log(result);
            setGenSetting(result);
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };
    const toggleUpdateMoal = (id, item) => {
        setID(id)
        setselectForUpdate(item)
        setUpdateModal(!Updatemodal)
        console.log("++" +ID)
        console.log("++" +selectForUpdate)
    };
    const handleOnSubmitUpdate = async (event) => {
        console.log("Zahid")
        event.preventDefault()
        setUpdateModal(!Updatemodal)
        const formData = new FormData();
        formData.append('logo', imageLgo);
        formData.append('emailAddress', emailAddress);
        formData.append('contact', contact);
        formData.append('address', address);
        formData.append('currency', currency);
        formData.append('faceBook', faceBook);
        formData.append('instagram', instagram);
        formData.append('twitter', twitter);
        formData.append('description', description);
        try {
            let response = await fetch(`http://localhost:400/genSetting/genSettUpdate/${ID}`, {
                method: 'PUT',
                body: formData,
            })
            response = await response.json()
            console.log(response)
            if (response) {
                Navigate(`/setings/genSetting`)
                getAllProduct();
            }
        } catch (error) {
            console.log(error)
        }
    }
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    useEffect(() => {
        getAllProduct();
    }, []);

   
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
    const [Product1, setProduct1] = useState([])
    const getAllCurrency = async () => {
        try {
          const response = await fetch('http://localhost:400/currencySetting/all');
          const result = await response.json();
          console.log(result);
          setProduct1(result);
        } catch (error) {
          console.error(error);
          // Handle error
        }
      };
    useEffect(() => {

        getAllCurrency()
    }, [])

    return (
        <>
            <CRow>
                <Col xs={12} className=''>
                    <CCard className='mb-4 m-3'>
                        <CardHeader className='Table'>
                            <Row className='d-flex align-items-center justify-content-around'>
                                <Col className='justify-content-start d-flex' sm={9}>
                                    <div>
                                        <strong className='text-info'>Setting: General</strong>
                                    </div>
                                </Col>
                                
                            </Row>
                        </CardHeader>
                        <CCardBody>
                            <Table className='text-center' responsive>
                                <thead>
                                    <tr className='text-info'>
                                        <th>Sr. No</th>
                                        <th>Brand Logo</th>
                                        <th>Email Address</th>
                                        <th>Contact</th>
                                        <th>Currency</th>
                                        <th>Address</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(genSetting) &&
                                        genSetting.length > 0 &&
                                        genSetting.map((item, index) => {
                                            return (
                                                <tr key={index + 1}>
                                                    <th scope='row'>{index + 1}</th>

                                                    <td>
                                                        <Link>
                                                            <img
                                                                alt='image'
                                                                src={item.imageLgo}
                                                                style={{
                                                                    width: '50px',
                                                                    height: '50px',
                                                                    borderRadius: '50%',
                                                                }}
                                                            />
                                                        </Link>
                                                    </td>
                                                    <th scope='row'>{item.emailAddress}</th>
                                                    <th scope='row'>{item.contact}</th>
                                                    <th scope='row'>{item.currency}</th>
                                                    <th scope='row'>{item.address}</th>
                                                    <td>
                                                        <Link onClick={
                                                            () => {
                                                                toggleUpdateMoal(item._id, item)
                                                                getByID(item._id)
                                                            }
                                                        } className='text-warning'>
                                                            <Badge color='warning p-2'>
                                                            Edit
                                                            </Badge>
                                                           
                                                        </Link>
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
                    <Modal isOpen={Updatemodal} toggle={toggleUpdateMoal} className="custom-modal"
                        external={externalCloseBtn1} size="xl" >
                        <ModalHeader>Modal title</ModalHeader>
                        <ModalBody className=''>
                            <Row>
                                <Form onSubmit={handleOnSubmitUpdate}>
                                    <Row>
                                        <Col lg={12} md={12} sm={10} className=''>


                                            <Row className='d-flex justify-content-center align-items-center'>

                                                <Col sm={4}>
                                                    <InputField
                                                        type={`text`}
                                                        placeholder={`email`}
                                                        label={'email address'}
                                                        value={emailAddress}

                                                        onChangeEvent={(e) => {
                                                            setemailAddress(e.target.value);
                                                            if (Err && Err.emailAddress) {
                                                                setErr({ ...Err, emailAddress: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.emailAddress ? true : false}
                                                        errorMessage={Err && Err.emailAddress ? Err.emailAddress : null}
                                                    />
                                                </Col>
                                                <Col sm ={4} >
                                                <InputField
                                                        type={`text`}
                                                        placeholder={`Contact`}
                                                        label={'contact'}
                                                        value={contact}
                                                        onChangeEvent={(e) => {
                                                            setContact(e.target.value);
                                                            if (Err && Err.concat) {
                                                                setErr({ ...Err, concat: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.concat ? true : false}
                                                        errorMessage={Err && Err.concat ? Err.concat : null}
                                                    />
                                                </Col>
                                                <Col sm={4}  >

                                                    <InputField
                                                        placeholder={`Address`}
                                                        type={`text`}
                                                        label={'Address'}
                                                        value={address}

                                                        onChangeEvent={(e) => {
                                                            setAddress(e.target.value);
                                                            if (Err && Err.address) {
                                                                setErr({ ...Err, address: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.address ? true : false}
                                                        errorMessage={Err && Err.address ? Err.address : null}
                                                    />
                                                </Col>

                                            </Row>



                                            <Row className='d-flex align-items-center justify-content-center'>
                                                <Col sm={4} >
                                                    <Label for="exampleEmail" sm={5}>Currency</Label>
                                                    <Input
                                                        id="exampleSelect"
                                                        name="select"
                                                        type="select"
                                                        className='form-select-sm'
                                                        onChange={(e) => {
                                                            setCurrency(e.target.value);
                                                            if (Err && Err.currency) {
                                                                setErr({ ...Err, currency: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.currency ? true : false}
                                                        value={currency}
                                                    >
                                                        {Array.isArray(Product1) &&
                                                            Product1.length > 0 &&
                                                            Product1.map((item, index) => {
                                                                return (
                                                                    <option key={item._id} value={item.symbol}>{item.symbol}</option>
                                                                );
                                                            })}
                                                    </Input>
                                                    {Err && Err.currency && (<FormFeedback> {Err.currency} </FormFeedback>)}
                                                </Col>
                                                <Col sm={4} >
                                                    <Label for="exampleEmail" sm={8}>File (image, other)</Label>
                                                    <Input
                                                        type="file"
                                                        name="garments"
                                                        className="form-control"
                                                        placeholder='file'

                                                        onChange={handleImageChange}
                                                        invalid={Err && Err.imageLgo ? "true" : undefined}
                                                        {...(Err && Err.imageLgo && { "aria-invalid": "true" })}
                                                    />
                                                    {Err && Err.imageLgo && (<FormFeedback>{Err.imageLgo}</FormFeedback>)}
                                                </Col>
                                                <Col className='d-flex align-items-center' sm ={4}>

                                              
                                                            <img
                                                                alt='image'
                                                                src={selectForUpdate?.imageLgo}
                                                                style={{
                                                                    width: '85px',
                                                                    height:'85px',
                                                                     marginBottom:0, padding:0
                                                                }}
                                                            />
                                                        
                                                </Col>
                                            </Row>

                                            <Row className='d-flex justify-content-center align-items-center mt-3'>
                                                <Col sm={4} >
                                                    <InputField
                                                        placeholder={`Face Book Link`}
                                                        type={`text`}
                                                        label={'faceBook Link'}
                                                        value={faceBook}

                                                        onChangeEvent={(e) => {
                                                            setFacebook(e.target.value);
                                                            if (Err && Err.faceBook) {
                                                                setErr({ ...Err, faceBook: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.faceBook ? true : false}
                                                        errorMessage={Err && Err.faceBook ? Err.faceBook : null}
                                                    />
                                                </Col>
                                                <Col sm={4} >
                                                    <InputField
                                                        placeholder={`instagaram`}
                                                        type={`text`}
                                                        label={'Instagram Link'}
                                                        value={instagram}

                                                        onChangeEvent={(e) => {
                                                            setInstagram(e.target.value);
                                                            if (Err && Err.instagram) {
                                                                setErr({ ...Err, instagram: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.instagram ? true : false}
                                                        errorMessage={Err && Err.instagram ? Err.instagram : null}
                                                    />
                                                </Col>
                                                <Col sm={4} >
                                                    <InputField
                                                        placeholder={`twitter`}
                                                        type={`text`}
                                                        label={'Twitter Link'}
                                                        // value={selectForUpdate?.twitter}
                                                        value ={twitter}
                                                        onChangeEvent={(e) => {
                                                            setTwitter(e.target.value);
                                                            if (Err && Err.twitter) {
                                                                setErr({ ...Err, twitter: null });
                                                            }
                                                        }}
                                                        invalid={Err && Err.twitter ? true : false}
                                                        errorMessage={Err && Err.twitter ? Err.twitter : null}
                                                    />
                                                </Col>
                                            </Row>
                                            <Label for="exampleEmail" sm={5}>Description</Label>
                                            <Row
                                                className=' mb-5 quilRow'>
                                                <ReactQuill
                                    
                                                    value={description}
                                                    onChange={(content) => { setdescription(content) }}
                                                    className='quil '
                                                    modules={{
                                                        toolbar: [
                                                            ['bold', 'italic', 'underline', 'strike'],
                                                            [{ header: [1, 2, false] }],
                                                            [{ align: [] }],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['link'],
                                                            ['clean'],
                                                        ],
                                                    }}
                                                    formats={[
                                                        'header',
                                                        'bold',
                                                        'italic',
                                                        'underline',
                                                        'strike',
                                                        'align',
                                                        'list',
                                                        'bullet',
                                                        'link',
                                                    ]}
                                                    theme='snow'
                                                />
                                            </Row>
                                        </Col>
                                    </Row>

                                    {/* <Row>
                                        <Col sm ={2}>
                                            <Row className='ms-4'>
                                           
                                            </Row>
                                       
                                        </Col>
                                    
                                    </Row> */}
                                    <ModalFooter>
                            <Button color="danger"
                                onClick={toggleUpdateMoal}>
                                Cancel
                            </Button>
                            <button className='btn btn-success text-white' type='submit'>
                                                                update</button>
                           
                        </ModalFooter>
                                </Form>
                            </Row>
                        </ModalBody>
                      
                    </Modal>
                </Col>

            </Row>
        </>
    );
};

export default Categories;
