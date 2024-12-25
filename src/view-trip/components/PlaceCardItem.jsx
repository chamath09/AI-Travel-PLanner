import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

const PlaceCardItem = ({ place }) => {

  const [photoUrl, SetPhotoUrl]=useState();
    useEffect(()=>{
      place&&GetPlacePhoto();
    },[place])
  
    const GetPlacePhoto = async()=>{
      const data={
        textQuery:place.placeName
      }
      const result= await GetPlaceDetails(data).then(resp=>{
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
        SetPhotoUrl(PhotoUrl);
      })
    }
  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${place.placeName}`}
      target="_blank"
    >
      <div className="shadow-md rounded-xl p-4 flex gap-5 hover:scale-105 transition-all hover:shadow-lg cursor-pointer h-[170px]">
        <img
          src={photoUrl?photoUrl:"/placeholder.jpg"}
          alt={place.placeName}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg text-black">{place.placeName}</h2>
          <p className="text-sm text-gray-400 mb-2">{place.placeDetails}</p>

          <div className="flex justify-between">
          <p className="text-sm text-gray-900">🕙 {place.timeToSpend}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;
