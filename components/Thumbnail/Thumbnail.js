import { ThumbDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

const Thumbnail = ({ result }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className="group cursor-pointer transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50 p-2">
            <Image layout="responsive" src=
                {
                    `${BASE_URL}${result.backdrop_path || result.poster_path}`
                    || `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p> 

                <h2 className="text-white text-2xl my-2 transition-all duration-100 ease-in-out group-hover: font-bold">{result.title || result.original_name}</h2>

                <p className="flex opacity-0 group-hover:opacity-100 items-center">{result.media_type && `${result.media_type} .`} {" "}
                    {result.release_date || result.first_air_date} .{" "}
                    <ThumbDownIcon className="h-8 mx-2" /> {result.vote_count}
                </p>
            </div>
        </div>
    );
};

export default Thumbnail;