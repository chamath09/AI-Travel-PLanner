import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const HotelCardItem = ({ hotel }) => {

    const [photoUrl, SetPhotoUrl]=useState();
      useEffect(()=>{
       hotel&&GetPlacePhoto();
      },[hotel])
    
      const GetPlacePhoto = async()=>{
        const data={
          textQuery:hotel?.hotelName
        }
        const result= await GetPlaceDetails(data).then(resp=>{
          console.log(resp.data.places[0].photos[3].name);
    
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
          SetPhotoUrl(PhotoUrl);
        })
      }

  return (
    <div  >
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          hotel.hotelName +
          "," +
          hotel?.hotelAddress
        }
        target="_blank"
      >
        <div className="hover:scale-105 transition-all cursor-pointer shadow-md h-full  ">
          <img
            src={photoUrl?photoUrl:"/placeholder.jpg"}
            className="rounded-xl h-[180px] w-full object-cover"
          />
          <div className="my-2 flex flex-col gap-2">
            <h2 className="font-medium text-black">{hotel?.hotelName}</h2>
            <h2 className="text-xs text-gray-500 ">📍 {hotel?.hotelAddress}</h2>
            <h2 className="text-sm text-gray-700">
              💸 ${hotel?.price.high} - ${hotel?.price.low} per night
            </h2>
            <h2 className="text-sm text-gray-800">⭐ {hotel?.rating}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotelCardItem;