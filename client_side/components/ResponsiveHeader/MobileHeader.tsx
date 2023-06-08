import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Router, useRouter } from 'next/router';
import { PrimaryButton } from '../cors/buttons';
import {motion, AnimatePresence} from "framer-motion";

const MobileHeader = () => {
    const router = useRouter()
    const [isMenuOpen, setIsopened] = useState(false)
    const handleToggleMenu = () => {
        setIsopened(!isMenuOpen)
    }
    const item={
        exit:{
          opacity:0,
          height:0,
          transition:{
            ease:"easeInOut",
            duration:0.3,
            delay:1.2
          }
        }
      }
    return (
        // <Box
        //     sx={{
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "space-beteen",
        //         flexDirection: "row",
        //         padding: "1rem 3rem",
        //         width: "100%",
        //         maxHeight: "100px",
        //         "& .Menu": {
        //             a: {
        //                 textDecoration: "none",
        //             },
        //         },
        //         "& .MuiMenu-paper": {
        //             top: "3rem",
        //         },

        //     }}
        // >
            <div className="mobile-container">
                <div className="Logo">
                    <Link href="/">
                        <Image src="/logo.svg" width={90} height={40} alt="logo" />
                    </Link>
                </div>
                <MenuIcon onClick={handleToggleMenu} className='icon' fontSize='large'/>
                <AnimatePresence>
                    {
                        isMenuOpen && (
                            <motion.div className="menu_container"
                                variants={item}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "100vh", opacity: 1 }}
                                transition={{ duration: .5 }}
                                exit="exit"
                            >
                                <div className="btn_close" onClick={handleToggleMenu}>X</div>
                                <motion.a href="/"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .8 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: 1
                                        }
                                    }}
                                >
                                    Home
                                </motion.a>
                                <motion.a href="/AddAnnounce"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .7 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: .8
                                        }
                                    }}
                                >
                                    Services
                                </motion.a>
                                <motion.a href="/pets"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .6 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: .6
                                        }
                                    }}
                                >Pets</motion.a>
                                <motion.a href="/about"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .5 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: .4
                                        }
                                    }}
                                >About</motion.a>
                                <motion.a href="/Login"
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: .4 }}
                                    exit={{
                                        opacity: 0,
                                        y: 90,
                                        transition: {
                                            ease: "easeInOut",
                                            delay: .2
                                        }
                                    }}
                                >Login</motion.a>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                {/* <div className="content_wrapper">
                    <p>Animated Navigation</p>
                </div> */}
            </div>
        // </Box>
    )
}

export default MobileHeader
{/* <IconButton
    size="large"
    edge="end"
    color="inherit"
    aria-label="menu"
    sx={{ p: 0, ml: 'auto' }}
    onClick={handleToggleMenu}
>
    <MenuIcon />
</IconButton>
<div className='openMenu'>
    <Menu
    className='openMenu'
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        anchorEl={isMenuOpen ? document.body : undefined}
        open={isMenuOpen}
        onClose={handleToggleMenu}
        sx={{
            top: '3rem',
            backgroundColor:''
        }}
    >
        <MenuItem>
            <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
            <Link href="#pets">Pets</Link>
        </MenuItem>
        <MenuItem>
            <Link href="#services">Services</Link>
        </MenuItem>
        <MenuItem>
            <Link href="#about">About</Link>
        </MenuItem>
        <MenuItem>
            <Link href="#tips">Tips</Link>
        </MenuItem>
        <MenuItem>
            <Link href="/Login">
                <PrimaryButton text="Login" />
            </Link>
        </MenuItem>
    </Menu>
</div> */}