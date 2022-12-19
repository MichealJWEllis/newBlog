import React from 'react';
import Link from 'next/link';
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid"

const StudioNavbar = (props: any) => {
  return (
    <><div className='flex items-center justify-between p-5'>
    <div><Link href="/" className="text-[#00d800] flex items-center"><ArrowUturnLeftIcon className="h-6 w-6 text-[#00d800] mr-2"/>Go To Website</Link></div>
   
</div>
<>{props.renderDefault(props)}</></>
  )
}

export default StudioNavbar
