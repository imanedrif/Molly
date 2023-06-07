import Header from "@/components/cors/Header";
import { SecondaryButton } from "@/components/cors/buttons";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    FormControl,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
    const router = useRouter();
    const { data: session, status } = useSession()
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [loginInput, setLogininput] = useState({
        email: "",
        password: "",
    });
    const handleInput = (e: any) => {
        setLogininput({ ...loginInput, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password,
          };
          const res:any = await signIn('credentials', {
            redirect: false,
            username: data.email,
            password: data.password,
          });
          console.log(res)
        //   if (res?.status===401) {
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Oops...',
        //       text: 'Something is wrong!',
        //     });
        //   } else {
        //     router.push('/pets');
        //   }
    };

    return (
        <div className="login">
            <div className="Shape1"></div>
            <Header />
            <div className="content">
                <div className="container">
                    <motion.div
                        className="Motion"
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -1000, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="right">
                                <div className="head">
                                    <h1>
                                        Login
                                        <Image
                                            src="/vectors/vector5.svg"
                                            width={100}
                                            height={100}
                                            alt="vector"
                                            className="shape3"
                                        />
                                    </h1>
                                </div>
                                <FormControl
                                    className="form"
                                    fullWidth
                                    sx={{ s: 1 }}
                                >
                                    <TextField
                                        size="small"
                                        label="Email"
                                        name="email"
                                        value={loginInput.email}
                                        onChange={handleInput}
                                        sx={{
                                            width: "35%",
                                        }}
                                    />
                                    <TextField
                                        size="small"
                                        label="password"
                                        name="password"
                                        value={loginInput.password}
                                        onChange={handleInput}
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <Visibility />
                                                        ) : (
                                                            <VisibilityOff />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{
                                            width: "35%",
                                        }}
                                    />
                                </FormControl>
                                <div className="buttom">
                                    <div className="text">
                                        <p>If you dont't have an account yet</p>
                                        <Link href="/Register">
                                            <span>Register here</span>
                                        </Link>
                                    </div>
                                    <div className="button">
                                        <SecondaryButton text="Login" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                    <motion.div
                        className="Motion"
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="left">
                            <Image
                                src="/img/authimg.svg"
                                width={500}
                                height={400}
                                alt="auth-img"
                            />
                        </div>
                    </motion.div>
                    <div className="shape2"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
