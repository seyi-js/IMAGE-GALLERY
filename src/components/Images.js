import React,{useState,useEffect} from 'react'
import Popup from './Popup';
import Image from './Image'
const Images = () => {
    const [ enlargeImage, setEnlargeImage ] = useState( false);
    const [ image, setImage ] = useState( {
        url: ''
    } );
    const [ images, setImages ] = useState( [] );

    useEffect( () => {
        loadImagesFromBackend()
    },[]);


    const loadImagesFromBackend = async () => {

        let skip = Math.floor( Math.random() * 100 ) + 1 //between 1 and 100
        let limit = Math.floor( Math.random() * 198 ) + 30//Between 30 and 198
    
        let response = await fetch(`https://endsars-archive.herokuapp.com/api/files?skip=${skip}&&limit=${limit}`);
        response = await response.json();
        setImages(response.message.files)
    }

    const handleClick = (url) => {
        setImage( {
            url
        } );
        setEnlargeImage(true)
    }

    return (
        <>
            
            {enlargeImage ? <Popup image={image} setEnlargeImage={ setEnlargeImage}/> : null}
            
        <section className="images">
            
            
                { images && images.map( (image, i) => (
                    <>
                        { image.type === 'image/jpg' || image.type === 'image/png' ? <Image key={ i} image={image} handleClick={handleClick} /> : null}
                    </>
                        
            ))}
               
            </section>
            </>
    )
}

export default Images
