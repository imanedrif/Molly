import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Router, useRouter } from 'next/router';
import { PrimaryButton } from '../cors/buttons';

const MobileHeader = () => {
    const router = useRouter()
    const [isMenuOpen, setIsopened] = useState(false)
    const handleToggleMenu = () => {
        setIsopened(!isMenuOpen)
    }
    return (
        <Box
            sx={{
                width: "100%",
                maxHeight: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: "1rem 3rem",
                "& .Menu": {
                    a: {
                      textDecoration: "none",
                    },
                  },
                  "& .MuiMenu-paper": {
                    top: "3rem",
                  },

            }}
        >
            <div className="Logo">
                <Link href="/">
                    <Image src="/logo.svg" width={90} height={40} alt="logo" />
                </Link>
            </div>
            <IconButton
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
            </div>
        </Box>
    )
}

export default MobileHeader