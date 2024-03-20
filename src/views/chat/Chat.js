// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardBody,
//   Input,
//   InputGroup,
// } from 'reactstrap';
// import userIcon from '../../assets/images/userIcon.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch,  faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { Link } from 'react-router-dom';
// import '../../assets/CSS/Chat.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchChatData, selectChatData } from '../../features/userChat/userChatSlice';
// import { fetchChatList, selectChatList } from '../../features/userChat/userChatSlice';
// const Chat = () => {
//   const dispatch = useDispatch()
//   const userMessageList = useSelector(selectChatData)
//   useEffect(() => {
//     dispatch(fetchChatData())
//     dispatch(fetchChatList())
//   }, [dispatch]);

//   const [userMessages, setUserMessages] = useState([]);
//   const [user, setUser] = useState("")
//   const [adminMessage, setAdminMessage] = useState('');
//   let admin = JSON.parse(localStorage.getItem('user'));
//   admin = admin._id;

//   useEffect(() => {
//     getUserMessages(user)
//     handlePutseen(user)

//   }, [userMessages]);
//   const handleuserMessage = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:400/chat/adminMessage', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ admin, adminMessage, user }),
//       });
//       const data = await response.json();
//       console.log(data);
//       if (response.ok) {
//         setAdminMessage('');
//         getUserMessages(user);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   const handlePutseen = async (id) => {

//     try {
//       const response = await fetch(`http://localhost:400/chat/Seen/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ seen: true }),
//       });
//       // const data = await response.json();

//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const getUserMessages = async (id) => {
//     try {
//       setUser(id)
//       let response = await fetch(`http://localhost:400/chat/displayUserMessage/${id}`);

//       if (response.ok)
//         response = await response.json();
//       setUserMessages(response);
//       dispatch(fetchChatList())
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
//   return (
//     <Container fluid className="py-5" style={{ backgroundColor: "#CDC4F9" }}>
//       <Row>
//         <Col md="12">
//           <Card id="chat3" style={{ borderRadius: "15px" }}>
//             <CardBody>
//               <Row>
//                 <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
//                   <div className="p-3">
//                     <InputGroup className="rounded mb-3">
//                       <Input
//                         className="form-control rounded"
//                         placeholder="Search"
//                         type="search"
//                       />
//                       <span
//                         className="input-group-text border-0"
//                         id="search-addon"
//                       >
//                         <FontAwesomeIcon icon={faSearch} />
//                       </span>
//                     </InputGroup>


//                     <div
//                       style={{ position: "relative", height: "400px", overflowY: "auto" }}
//                       className="scrollbar"
//                     >
//                       <ul className="list-unstyled mb-0">

//                         <li className="p-2">
//                           <div className='mb-3' style={{ borderTop: "1px solid grey" }}></div>
//                           {Array.isArray(userMessageList) &&
//                             userMessageList.length > 0 &&
//                             userMessageList.map((item, index) => {
//                               return (
//                                 <Link key={index + 1}
//                                   style={{ borderBottom: "1px solid grey" }}
//                                   className="d-flex align-item-center justify-content-between mb-3 nav-link"
//                                   onClick={() => {
//                                     getUserMessages(item?.user?._id)
//                                     handlePutseen(item?.user?._id)
//                                   }
//                                   }
//                                 >

//                                   <div className="d-flex align-items-center">

//                                     <div>
//                                       {item?.user?.profilePhoto === `http://localhost:400/uploads/undefined` ?
//                                         <img
//                                           src={userIcon}

//                                           style={{ width: "40px", height: "40px", radius: "50%" }}
//                                         />
//                                         :
//                                         <img
//                                           src={item?.user?.profilePhoto}
//                                           alt="avatar"
//                                           className="d-flex align-self-center me-2"
//                                           style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//                                         />
//                                       }
//                                     </div>

//                                   </div>
//                                   <div className="d-flex ms-0 row" >
//                                     <div className="pt-1">
//                                       <p className="fw-bold mb-0 text-primary">{item?.user?.username}</p>
//                                       {item.seen === false ? <p className=" mb-0 fontMessage ">
//                                         {item.userMessage}</p> :
//                                         <p className=" text-secondary mb-0 ">
//                                           {item.userMessage}
//                                         </p>
//                                       }
//                                     </div>
//                                     <div className="pt-0">
//                                       <p className=" text-muted timestamp">  {item.timestamp}</p>
//                                     </div>
//                                   </div>

//                                 </Link>
//                               );
//                             })}
//                         </li>
//                       </ul>
//                     </div>

//                   </div>
//                 </Col>
//                 <Col md="6" lg="7" xl="8" sm="11">
//                   <div className='row mb-0 pt-3'>
//                     <h4 className='text-primary mb-1 pb-0'>Chat Messages</h4>
//                   </div>
//                   <hr className='mt-0' />
//                   <div
//                     style={{ position: "relative", height: "400px", overflowY: "auto" }}
//                     className=" pe-3"
//                   >


//                     {Array.isArray(userMessages) &&
//                       userMessages.length > 0 &&
//                       userMessages.map((item, index) => {
//                         return (
//                           <div key={item._id}>
//                             {item.userMessage && (
//                               <div className=" flex-row d-flex  justify-content-start">
//                                 {item?.user?.profilePhoto === `http://localhost:400/uploads/undefined` ?
//                                   <div className='flex-column'>
//                                     <p className='text-muted mb-0'
//                                      style={{ fontSize: "10px" }}>{item.user.username}</p>
//                                     <img
//                                       src={userIcon}

//                                       style={{ width: "40px", height: "40px", radius: "50%" }}
//                                     />
//                                   </div>

//                                   :
//                                   <div className='flex-column'>
//                                     <p className='text-muted mb-0' 
//                                     style={{ fontSize: "10px" }}>{item.user.username}</p>

//                                     <img
//                                       src={item?.user?.profilePhoto}
//                                       alt="avatar"
//                                       className="d-flex mt-0 pt-0 align-self-center "
//                                       style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//                                     />

//                                   </div>
//                                 }

//                                 <div className='mt-1'>
//                                   <p
//                                     className="small p-2  ms-1 mb-1 rounded-3"
//                                     style={{ backgroundColor: "#f5f6f7" }}
//                                   >
//                                     {item.userMessage}
//                                   </p>
//                                   <p style={{ fontSize: "11px" }} 
//                                   className="small ms-1 rounded-3 text-start text-muted ">
//                                     {item.timestamp}
//                                   </p>
//                                 </div>
//                               </div>
//                             )}

//                             {item.adminMessage && (
//                               <div className="d-flex flex-row justify-content-end">
//                                 <div>
//                                   <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
//                                     {item.adminMessage}
//                                   </p>
//                                   <p style={{ fontSize: "11px" }} className="small me-3 text-end rounded-3 text-muted">
//                                     {item.timestamp}
//                                   </p>
//                                 </div>
//                                 <img
//                                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                                   alt="avatar 1"
//                                   style={{ width: "45px", height: "100%" }}
//                                 />
//                               </div>
//                             )}
//                           </div>);
//                       })}
//                   </div>
//                   <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-1 mt-1">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
//                       alt="avatar 3"
//                       style={{ width: "40px", height: "100%" }}
//                     />
//                     <Input
//                       style={{ fontSize: "12px" }}
//                       value={adminMessage}
//                       onChange={(e) => {
//                         setAdminMessage(e.target.value);

//                       }}
//                       type="text"
//                       className="form-control form-control-lg"
//                       id="exampleFormControlInput2"
//                       placeholder="............Type admin Message "
//                     />
//                     <Link className="ms-3" href="#!">
//                       <FontAwesomeIcon

//                         onClick={handleuserMessage}
//                         icon={faPaperPlane} />
//                     </Link>
//                   </div>
//                 </Col>
//               </Row>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Chat;
