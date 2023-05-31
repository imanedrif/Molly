import React, { useState, useEffect } from "react";
import PetsForAdoption from "@/components/homePage/PetsForAdoption";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PetCard from "@/components/homePage/imports/PetCard";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

export default function PaginationComponent(props: any) {
    const { data } = props;
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="PagnationContainer">
            <div className="Pets">
                {currentItems.map((pet: any, index: any) => {
                    return <PetCard pet={pet} />;
                })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowCircleRightOutlinedIcon />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={0}
                pageCount={pageCount}
                previousLabel={<ArrowCircleLeftOutlinedIcon />}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}
