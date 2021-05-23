import React from 'react'






const Image = ( { handleClick, image } ) => {

   
    return (
        <div className="image" onClick={()=>handleClick(image.url)}>
                <img  src={image.url} alt="#EndSars Archive Gallery"/>
        </div>
    )
}

export default Image
