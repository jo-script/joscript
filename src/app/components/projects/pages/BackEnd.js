import React from 'react';
import noData from '../img/No-data-cuate.svg';
import Image from 'next/image';


const BackEnd = () => { 
 

  return (
    <div id='#backEnd'>
      <Image src={noData} alt='' className='opacity-[.7]' />
      {/* <video src={vid} controls ></video> */}
    </div>
  )
};

export default BackEnd;
  