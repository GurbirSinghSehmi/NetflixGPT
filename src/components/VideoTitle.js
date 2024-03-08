import React from 'react'

export const VideoTitle = (props) => {
  return (
    <div className = "w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className = "text-6xl font-bold">
            {props.title}
        </h1>
        <p className = "py-6 text-lg w-1/4">{props.overview}</p>
        <div>
            <button className = "bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">▶️ Play</button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
        </div>
    </div>
  )
}
