import UserCard from "@/components/UserCard";
import Header from "@/components/cors/Header";
import PetCard from "@/components/homePage/imports/PetCard";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginationComponent from "@/components/pets/PaginationComponent";
import Footer from "@/components/cors/Footer";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

const Wishlist = () => {
    const {data:session,data}=useSession()
    const [pets, setPets] = React.useState([] as any);
    const router = useRouter()
    useEffect(()=>{
        if(session){
            axios
            .get("http://localhost:8000/api/wishlists", {
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Authorization": `Bearer ${data?.user.token}`,
                },
            })
            .then((response) => {
                setPets(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            router.push('/Login')
        }
    },[])

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
                    {pets.length > 0 ? (
                        <Slider {...settings}>
                            {pets.map((pet: any) => (
                            <PetCard key={pet.id} pet={pet} />
                            ))}
                        </Slider>
                    ) : (
                        <p>No pets found in the wishlist.</p>
                    )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
