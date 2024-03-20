import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  UncontrolledAlert,
} from 'reactstrap';
const LogIn = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [Err, setErr] = useState(false);
  const Navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault()
    setErr(false); // reset the error state
    const result = await fetch('http://localhost:400/Admin/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await result.json();
    if (data.token) {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      Navigate('/');
    } else if (result.status === 401) {
      setErr('danger');
      console.log('Err:', Err);
      alert('Invalid email or password');
      return false;
    } else {
      alert('An error occurred');
    }
  };

  return (< >
  
<section className="h-100"  style={{backgroundColor: "hsl(0, 0%, 90%)"}}>

  <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span className="text-primary">htmlFor your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
             <Form onSubmit={handleClick} className=" p-5 form">
            <h2 className="text-center text-info ">Admin Login</h2>
            {Err && (
              <UncontrolledAlert color={Err}>
                {Err === 'danger' ? 'Invalid email or password!' : 'Login Successful!'}
              </UncontrolledAlert>
            )}
            <FormGroup>
              <Label htmlFor="exampleEmail">Username or email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="example@example.com"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </FormGroup>
            <Button type ="submit" color="primary">Login</Button>
          </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default LogIn;
