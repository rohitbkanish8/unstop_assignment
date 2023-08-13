import React from 'react'

const NavCard = ({ item, admin }) => {
  return (
    <div className='rounded-lg p-2.5 border border-transparent hover:border-blue1 hover:bg-blue3 text-blue2 hover:text-blue1 cursor-pointer flex flex-row-reverse lg:flex-col lg:justify-center justify-between lg:items-center items-start gap-2 group'>
      {admin && <div className="badge badge-error badge-outline">Admin</div>}
      <div className='flex lg:flex-col lg:justify-center justify-start items-center gap-4 w-full'>
        {item.url}
        <p className='text-xs font-medium text-center'>{item?.title}</p>
      </div>
    </div>
  )
}

export default NavCard