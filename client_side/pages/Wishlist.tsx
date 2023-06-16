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
    const [isInList,setIsInList] = useState(true)
    const {data:session,data}=useSession()
    const [pets, setPets] = useState([]);
    const router = useRouter()
    const [isRefresh,setIsRefresh] = useState(false);

    const RefreshData = ()=>{
        setIsRefresh(!isRefresh)
    }
    useEffect(()=>{
        if(session){
            axios
            .get("http://127.0.0.1:8000/api/wishlists", {
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
    },[isRefresh])

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
                    <div className="Wishlist-slide">
                    {pets.map((pet: any, index: any) => {
                    return (
                        <div>
                            <PetCard pet={pet} />
                        </div>
                    );
                    })}
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
