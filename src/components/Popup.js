import React,{useState} from 'react'

const Popup = ( { image, setEnlargeImage } ) => {
    const [ isLoading, setIsLoading ] = useState( true )
    return (
        <section className="bg">
            {isLoading ?
                <div className="loading">
                    <i className="fa fa-spinner"></i>
                </div>
            
                : null}
        
        
                <section className="popup">
                    <img src={ image.url } onLoad={ () => setIsLoading( false ) } alt="#EndSars Archive Gallery" />
           
                </section>
        
            
           
           
            <p onClick={ () => setEnlargeImage( false ) } className="cancel">X</p>
        </section>
    )
};

export default Popup
