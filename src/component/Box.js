import React from 'react';

const Box = (props) => {
  return (
      
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src="https://www.amway.co.kr/_ui/responsive/theme-blue/images/akl_product/home-living/visual_top_5037.png"/>
        <h2>WIN</h2>
    </div>
  )
}

export default Box;