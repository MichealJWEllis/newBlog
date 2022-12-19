import React from 'react'
import Image from 'next/image';

const Logo = (props: any) => {

    const {renderDefault, title} = props;

  return (
    <div className="flex items-center space-x-2"><Image 
    className="rounded-full"
    height={50}
    width={50}
    src={require('../public/images/Screenshot 2022-12-17 152014.png').default}
    alt="logo"/></div>
  )
}

export default Logo