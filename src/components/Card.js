/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Card = ({name,email,id}) => {

  return (
      //eslint-disable-next-line 
    <div className='bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 tc'>
       
            <img src={"https://robohash.org/"+id+"?200x200"} alt='Photo' />
        <div>
            
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
            

    </div>
   
  );
}

export default Card;
