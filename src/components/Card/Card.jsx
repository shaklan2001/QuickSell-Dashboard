import React from 'react'
import './Card.css';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '3.5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "35px", height : "35px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src=" https://github.com/shaklan2001/broschat/assets/90901154/958867d1-3f53-4a1c-8003-e0793955215c" alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle" style={{fontWeight : 100}} >
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> ... </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;