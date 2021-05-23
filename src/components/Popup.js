import React from 'react'

const Popup = ({image,setEnlargeImage}) => {
    return (
        <section className="bg">
           
            <section  className="popup">
            <img  onLoad={console.log('hhhhh')} src={image.url} alt="#EndSars Archive Gallery"/>
           
            </section>
            <p onClick={()=>setEnlargeImage(false)} className="cancel">X</p>
        </section>
    )
}

export default Popup
