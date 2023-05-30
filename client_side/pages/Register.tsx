import Header from '@/components/cors/Header'
import { FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SecondaryButton } from '@/components/cors/buttons';
import Link from 'next/link';
import { motion } from 'framer-motion'
import axios from 'axios';
import { useRouter } from 'next/router';



const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const router = useRouter();
  const [registerInput, setRegisterinput] = useState(
    {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      repeatpassword: '',
    }
  );
  const handleInput = (e:any) => {
    setRegisterinput({ ...registerInput, [e.target.name]: e.target.value })
  }

  
  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
        console.log('CSRF token:', response.data);
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    getCsrfToken();
  }, []);

  const handleSubmit= (e:any)=>{
    e.preventDefault()
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
      phoneNumber: registerInput.phoneNumber,
    }

    // axios.get('http://localhost:8000/sanctum/csrf-cookie').then( ()=>{

    axios.post('http://localhost:8000/api/register',data,{
      headers:{
        'Accept' : 'application/json'
      },
      withCredentials: true
    } )
    .then(res=>{
      console.log(res.data)
      //save data in localstorage
      
      if(res.data.status === 401){
        console.log("There&apos;s an error in your field : ", res.data.message["error"] )
      }
      if(res.data.user){
        console.log("success")
        localStorage.setItem('token', res.data.Auth_token)
        localStorage.setItem('user', res.data.user)
        console.log(
        localStorage.setItem('user', res.data.user)

        )
        router.push('pets');

      }
      if(res.data.status === 409){
        console.log("email already exists")
      }
    })
    .catch((err:any)=>{
      console.log(err)
    })

  // })
}

  const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
  return (
    <div className='register'>
      <div className="Shape1"></div>
      <Header />
      <div className="content">
        <div className='container'>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            transition={{ duration: 0.5 }}
          >
            <div className="left">
              <Image src='/img/authimg.svg' width={500} height={400} alt='auth-img' />
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 1000, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="right">
              <form onSubmit={handleSubmit}>
                <div className="head">
                  <h1>
                    Register
                    <div className="shape"></div>
                  </h1>
                </div>
                <FormControl className='form' fullWidth sx={{ s: 1 }}>
                  <TextField
                    size="small"
                    label="Name"
                    name='name'
                    value={registerInput.name}
                    onChange={handleInput}
                    sx={{
                      width: '35%',
                    }}
                  />
                  <TextField
                    name='phoneNumber'
                    value={registerInput.phoneNumber}
                    onChange={handleInput}
                    size="small"
                    label="Phone number"
                    sx={{
                      width: '35%',
                    }}
                  />
                  <TextField
                    name='email'
                    value={registerInput.email}
                    onChange={handleInput}
                    size="small"
                    label="Email"
                    sx={{
                      width: '35%',
                    }}
                  />
                  <TextField
                    name='password'
                    value={registerInput.password} onChange={handleInput}
                    size="small"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: '35%',
                    }}
                  />
                  <TextField
                    size="small"
                    label="repeat password"
                    name='repeatPassword'
                    // value={registerInput.repeatpassword}
                    // onChange={handleInput}
                    type={showRepeatPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowRepeatPassword}
                            edge="end"
                          >
                            {showRepeatPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: '35%',
                    }}
                  />
                </FormControl>
                <div className='buttom'>
                  <div className="text">
                    <p>If you already have an account</p>
                    <Link href='/Login'>
                      <span>Login here</span>
                    </Link>
                  </div>
                  <div className="button">
                    <SecondaryButton text="Register" />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
          <div className="shape2"></div>
        </div>
      </div>
     </div>
  )
}

export default Register