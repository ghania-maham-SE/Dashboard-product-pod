import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/style.scss';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const ClintLaout = React.lazy(() => import('./layout/ClintLaout'));
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Private = React.lazy(() => import('./views/pages/Private/Private'));
const App = () => {
  return (
    <Suspense fallback={loading}>
      <Routes>
         <Route path="/login" name="Login Page" element={<Login />} />
         <Route path="/login" name="Login Page" element={<Login />} />
        <Route path="/register" name="Register Page" element={<Register />} />
        {/* <Route element={<Private />}> */}
          <Route path="*" name="Home" element={<DefaultLayout />} />
        {/* </Route> */}

      </Routes>
    </Suspense>
  );
};

export default App;









