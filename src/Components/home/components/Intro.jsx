import React from 'react'
import image from '../../assets/image.png'
const Intro = () => {
  return (
    <>
    <div className="w-[1933px] h-[703px] absolute  left-[-5.5px] top-[83.5px] bg-[#dceaf5]" >
      <p className="w-[576px] text-[64px] justify-content  font-semibold text-left text-[#1d3444] w-[576px] absolute left-80 top-[100px]  font-semibold text-left text-[#1d3444]">
        Prosper with our bespoke solutions
      </p>
      <p className="w-[571px] absolute left-[321px] top-[257px] text-lg font-medium text-left text-[#5b5b5b] mt-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique
      </p>
      <div className="w-[199px] h-[54px]">
        <div className="w-[199px] h-[54px] absolute left-[319.5px] top-[378px] rounded-[27px] bg-[#f58a07] mb-4" />
        <p className="absolute left-[352px] top-[393px] text-base font-semibold text-left capitalize text-white">
          See our services
        </p>
      </div>
      <p className="absolute left-80 top-[480px] text-lg text-left text-[#394149]/50">Worked with 100+ Companies</p>
   
    </div>
    <img src="image.png" className="w-[995px] h-[618px] object-none" />;
    </>
  )
}

export default Intro