import React from 'react'

const FeedCard = (props) => {

    const {nam, img, txt} = props.data

    return(
        <div className='feed-card flex flex-col'>
            <div className='meta flex aic'>
                <div className='img' style={{backgroundImage: `url(${img})`}}/>
                <div className='nam font s18 b7 c000'>{nam}</div>
            </div> 
            <div className='flex'>
                <div className='font quo'>&ldquo;</div>
                <div className='msg font s13 b5 c000'>{txt}</div>
            </div>
        </div>
    )
}

export default FeedCard