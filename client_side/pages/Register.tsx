import Header from '@/components/cors/Header'
import { FormControl, IconButton, InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { SecondaryButton } from '@/components/cors/buttons';
import Link from 'next/link';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
  return (
    <div className='register'>
      <div className="Shape1"></div>
      <Header />
      <div className='container'>
        <div className="left">
          <Image src='/img/authimg.svg' width={500} height={400} alt='auth-img' />
        </div>
        <div className="right">
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
              sx={{
                width: '35%',
              }}
            />
            <TextField
              size="small"
              label="Phone number"
              sx={{
                width: '35%',
              }}
            />
            <TextField
              size="small"
              label="Email"
              sx={{
                width: '35%',
              }}
            />
            <TextField
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
        </div>
        <div className="shape2"></div>
      </div>
    </div>
  )
}

export default Register