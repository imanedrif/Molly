import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { PrimaryButton, UserButton } from "../cors/buttons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSession, signOut } from "next-auth/react";

const DesktopHeader = () => {
    const router = useRouter();
    const { data: session, status } = useSession()
    const [showDropdown, setShowDropdown] = useState(false);
    const { data } = useSession();
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
                                    <Link href="/AddAnnounce">
                                        Service Adoption
                                    </Link>
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
                {data ? (
                    <>
                        <Link href="/Wishlist">
                            <FavoriteBorderIcon
                                sx={{
                                    color: "#297373",
                                }}
                            />
                        </Link>
                        <UserButton
                            user={data.user}
                            logOut={() => {
                                signOut();
                            }}
                        />
                    </>
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
