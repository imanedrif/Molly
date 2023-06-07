import UserCard from "@/components/UserCard";
import Header from "@/components/cors/Header";
import PetCard from "@/components/homePage/imports/PetCard";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginationComponent from "@/components/pets/PaginationComponent";
import Footer from "@/components/cors/Footer";

const Wishlist = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    return (
        <div className="wishlist">
            <Header />
            <h1>Wishlist</h1>
            <div className="wishlist-content">
                <div className="left">
                    <div className="Wishlist-slide">
                        <Slider {...settings}>
                            {/* <div><PetCard/></div>
                <div><PetCard/></div>
                <div><PetCard/></div>
                <div><PetCard/></div> */}
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <UserCard />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
