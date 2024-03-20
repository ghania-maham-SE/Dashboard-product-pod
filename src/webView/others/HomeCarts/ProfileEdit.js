import React, {useEffect, useState} from 'react';
import '../../../assets/CSS/webCSS/profileForm.css'
import { Button, Modal } from 'antd';
import { AiFillCamera } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfle, selectUserProfile } from '../../../features/users/userSlice';
import { Link, useNavigate } from 'react-router-dom';
const ProfileEdit = () => {
  const userI = JSON.parse(localStorage.getItem('clientUser'));
  const _id = userI?._id;
  const dispatch = useDispatch()
  const user = useSelector(selectUserProfile)
  useEffect(() => {
    dispatch(fetchUserProfle(_id))
    getData()
}, [dispatch]);
const navigate=useNavigate()
const [profilePhoto, setprofilePhoto] = useState(null)
const [firstName, setfirstName] = useState("")
const [lastName, setlastName] = useState("")
const [Contact, setContact] = useState("")
const getData=()=>{
setfirstName(user.firstName)
setlastName(user.lastName)
setContact(user.Contact)
}
const handleonSave = async(event)=>{
  event.preventDefault()
  const formData = new FormData();
  formData.append('image', profilePhoto);
  formData.append('firstName', firstName);
  formData.append('lastName', lastName); 
  formData.append('Contact', Contact); 
  try {
    let response = await fetch(`http://localhost:400/usersDetails/Update/${_id}`, {
      method: 'PUT',
      body: formData,
    })
    if (response.status===200) {
      countDown()
   response = await response.json()
  
    }
  } catch (error) {
    console.log(error)
  }
  dispatch(fetchUserProfle(_id))
}
const handleImageChange = (event) => {
  setprofilePhoto(event.target.files[0]);
};
const [modal, contextHolder] = Modal.useModal();
const countDown = () => {
    let secondsToGo = 1.3;
    const instance = modal.success({
        title: 'Update Message',
        content: <div className='text-primary'>Detail Updated Successfully</div>,
    });
    const timer = setInterval(() => {
        secondsToGo -= 1.3;
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        instance.destroy();
    }, secondsToGo * 1000);
};
  return (
    <form onSubmit={handleonSave}>
   <div className='row justify-content-center text-start'>
    <div className='col-3 img-profile-container'>
      <div className='profile-img-edit-container '>
      { user.profilePhoto ===`http://localhost:400/uploads/undefined` ? 
        <img src={require(`../../../assets/images/userIcon.png`)} alt ="icon"/>:
        <img src={user.profilePhoto}  alt='user profile'/>
  }
      </div>
    <div className="d-flex justify-content-center img-position file-input-container">
  <input type="file" id="fileInput" style={{display: "none"}}
  onChange={handleImageChange}
  />
  <label htmlFor="fileInput" className="custom-icon">
    <AiFillCamera  className='camera-icon' />
  </label>
</div>
    </div>
    {contextHolder}
    <div className='mt-2'>
    <label htmlFor="exampleFormControlInput1">Email</label>
   <input type="email" className="form-control" id="exampleFormControlInput1" 
   value={user?.email}  disabled
   />
    </div>
    <div className='mt-2'>
    <label htmlFor="exampleFormControlInput1">username</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" 
   value={user.username} disabled
   />
    </div>
    <div className='mt-2'>
    <label htmlFor="exampleFormControlInput1">Fisrt Name</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" 
 value={firstName}
   onChange={(e)=>setfirstName(e.target.value)}
   />
    </div>
    <div className='mt-2'>
    <label htmlFor="exampleFormControlInput1">Last Name</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" 
   value={lastName}
   onChange={(e)=>setlastName(e.target.value)}
   />
    </div>
    <div className='mt-2 mb-3'>
    <label htmlFor="exampleFormControlInput1">Contact No.</label>
   <input type="text" className="form-control" id="exampleFormControlInput1" 
 value={Contact}
   onChange={(e)=>setContact(e.target.value)}
   />
    </div>
   </div>
   <div className='row justify-content-end'>
    <div className='col-2 '>
    <Link  className="btn btn-secondary">Cancel</Link> 
    </div>
    <div className='col-2 d-flex justify-content-center'>
    <button type="submit" className="btn btn-primary">Save</button> 
    </div>

   </div>
    </form>
  );
};

export default ProfileEdit;
