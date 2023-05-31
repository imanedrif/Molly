import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PrimaryButton, UserButton } from "../cors/buttons";

const DesktopHeader = () => {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);
    const [userData, setUserData]: any = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            console.log(user);
            setUserData(user);
        }
    }, []);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };
    return (
        <div className="Header">
            <div className="Logo">
                <Link href="/">
                    <Image src="/logo.svg" width={100} height={40} alt="logo" />
                </Link>
            </div>
            <div className="Menu">
                {router.pathname == "/" ? (
                    <>
                        <Link href="/">Home</Link>
                        <Link href="#pets">Pets</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#about">About</Link>
                        <Link href="#tips">Tips</Link>
                    </>
                ) : (
                    // <div className={`Menu ${showDropdown ? 'openMenu' : ''}`}>
                    <>
                        <Link href="/">Home</Link>
                        <Link href="/pets">Pets</Link>
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="Dropdown"
                        >
                            <a>Services</a>
                            {showDropdown && (
                                <div className="DropdownMenu">
                                    <Link href="/pets">Service Adoption</Link>
                                    <Link href="/sos">SOS Service</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/about">About</Link>
                        <Link href="/tips">Tips</Link>
                    </>
                )}
            </div>
            <div className="Actions">
                {userData ? (
                    <UserButton
                        user={userData}
                        logOut={() => {
                            localStorage.removeItem("user");
                            setUserData(null);
                            router.push("/");
                        }}
                    />
                ) : (
                    <>
                        <Link href="/Login">
                            <PrimaryButton text="Login" />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default DesktopHeader;
