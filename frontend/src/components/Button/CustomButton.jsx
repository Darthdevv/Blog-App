import React from 'react'

const CustomButton = ({ children, padX, padY }) => {
  return (
    <button className={` flex items-center justify-center ${padX} ${padY} btn btn-ghost border border-[#2D323C] bg-transparent`}>
      {children}
    </button>
  );
}

export default CustomButton