import React, { useState } from 'react';
import { useForm,  SubmitHandler  } from 'react-hook-form';
import { useSignInWithEmailAndPassword,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { toast } from 'react-toastify';
import NavBar from '../../shared/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/PageTitle/PageTitle';
import AdminRegistation from './AdminRegistation';
import useAdminToken from '../../../hooks/useAdminToken';
type Inputs = {
    email: string,
    password: string,
    state: {
      from: Location;
    }
    
  };
const AdminLogin = () => {
 
  let navigate = useNavigate();
  const location = useLocation() as unknown as Inputs;
  const from = location.state?.from?.pathname || '/home';
  const [email, setEmail] = useState();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [adminToken] = useAdminToken(user, ' ');
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { register, handleSubmit,reset, formState: { errors } } = useForm<Inputs>({mode: "onBlur"})
  
  
    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
        const email = data.email;
        const password =data.password;
        if (email && password) {
          await signInWithEmailAndPassword(email, password);
          reset();
        }
        
    }
    if (error) {

      return (
        <>
        {
          toast.error(error.message)
        }
        </>
        )

    }
    if (loading || sending) {
      return <div className='h-40 mt-10'>{<Loading />}</div>
      
    };

   if(adminToken){
     toast.success('Thank You! Login SuccessFull')
     navigate(from, { replace: true })
   
  
   }


    if(adminToken){
      navigate(from, { replace: true })
    return(
      <>
        {
         toast.success('Thank You! Login Successfull')
        }
      </>
      )
 }


   const resetPassword = async() => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Please, Check Your Email");
    }else{
      toast.error('Please, Enter Email');
    }
  }
   
    return (
      <>
      <PageTitle title="Login/Registation" />
      <NavBar />
        <div id='container'>
        <div className="forms-container">
          <div className="signin-signup">

            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
             <p className=' text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span> }
             </p>
              <div className="input-field">
                <input type="email"  placeholder="Email" {...register("email", { required: {
                    value: true,
                    message: 'Email is required*',
                },
                 pattern: {
                    value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                },
                // onBlur: (e) => setEmail(e.target.value)
                  })} />
              </div>
              <p className='text-left text-red-500'>
                {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span>{errors.password.message}</span> } 
                </p>
              <div className="input-field">
                <input  type="password" placeholder="Password" {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required*'
                    },
                    minLength: {
                        value: 8,
                        message: 'Enter At Least 8 Character'
                    }
                    })} />
              </div>
              
            <p className='text-lg text-secondary'> Forgot Password?<button className="text-primary" onClick={resetPassword}> Please Reset</button> </p>

            <input type="submit" value="Login" className="btn solid" />
            </form>
          </div>
        </div>
  
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h2 className='text-3xl font-bold'>Are You Admin?</h2>
              <h6 className='text-md'>
              Please Login, This is Admin Login Page..

              </h6>
        
            </div>
          </div>
          
        </div>
      </div>
</>
    );
};
export default AdminLogin;