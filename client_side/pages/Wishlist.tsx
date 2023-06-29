import UserCard from "@/components/UserCard";
import Header from "@/components/cors/Header";
import PetCard from "@/components/homePage/imports/PetCard";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaginationComponent from "@/components/pets/PaginationComponent";
import Footer from "@/components/cors/footer";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Wishlist = () => {
    const [isInList, setIsInList] = useState(true)
    const { data: session, data } = useSession()
    const [pets, setPets] = useState([]);
    const router = useRouter()
    const [isRefresh, setIsRefresh] = useState(false);

    const RefreshData = () => {
        setIsRefresh(!isRefresh)
    }
    useEffect(() => {
        if (session) {
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
        else {
            router.push('/Login')
        }
    }, [isRefresh])
    return (
        <div className="wishlist">
            <Header />
            <h1>Wishlist</h1>
            <div className="wishlist-content">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        {pets.map((pet: any, index: any) => {
                            return (
                                <div key={index}>
                                    <PetCard pet={pet} />
                                </div>
                            );
                        })}
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </div>
    );
};

export default Wishlist;
