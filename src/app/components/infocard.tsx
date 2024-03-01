import React from 'react'
import Image from 'next/image'

function Infocard({infos}) {
    //styles...
    const containerStyle = {
        "display":"flex",
        "flex-direction":"column",
        "align-items":"center",
        "width":"400px",
        "height":"480px",
        "padding-top":"45px",
        "padding-bottom":"15px",
        "margin":"20px",
        "font-family":"sans-serif",
        "border":"1px solid #79edc4",
        "background":"linear-gradient(to bottom, transparent, #071c09 #0000e1",
        "color":"#fff",
        "border-radius":"15px",
    } 
    const descStyle = {
        "padding":"20px",
    }
  return (
    <div style={containerStyle}>
        <div>
            <Image src={infos.image} alt='image' width={400} height={300} />
        </div>
        <div style={descStyle}>
            <h2>{infos.title}</h2>
            <p>{infos.desc} </p>
        </div>
    </div>
  )
}

export default Infocard