import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { Success } from "./Success";


export const Auth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSuccess = (credentialResponse) => {
    const credentialResponseDecoded = jwt_decode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
    setAuthenticated(true);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <>
      {authenticated ? (
        <Success />
      ) : (
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      )}
    </>
  );
};

// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
// import { Success } from "./Success";
// import React, { useState } from "react"; //to get the passwords used
// import { Login } from "./Login";



// export const Auth = () => {

//     const [auth, setAuth] = useState('true');

   
//    return (
//    <>
//         <GoogleLogin 
//         onSuccess={
//           (credentialResponse) => {
//             const credentialResponseDecoded =
//               jwt_decode(credentialResponse.credential);
//             console.log(credentialResponseDecoded);
//                       <Success />            
//           }
//         }
//           onError={
//             () => {
//               console.log('Login Failed');
//             }
//           } />

//           {
//             <Auth /> === "onSuccess" ? <Success /> : <Login />
//           }
         
//       </ >)
// }
