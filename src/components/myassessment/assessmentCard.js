import React from 'react'

const AssessmentCard = () => {
  return (
    <div className='rounded-xl border p-4 flex flex-col gap-2'>
      <div className='flex justify-between items-start gap-4'>
        <img src='/icons/briefcase.svg' alt='briefcase' />
        <img src='/icons/share.svg' alt='share' className='cursor-pointer' />
      </div>
      <h2 className='text-lg font-medium'>Math Assessment</h2>
      <div className='flex gap-2 items-center'>
        <h3 className='text-sm font-semibold'>Job</h3>
        <div className='divider divider-horizontal m-0 w-0' />
        <div className='flex gap-1'>
          <img src='/icons/calendar_today.svg' alt='calendar' />
          <p className='text-xs font-medium text-gray-400'>20 Apr 2023</p>
        </div>
      </div>
      <div className='border border-dashed w-full my-4' />
      <div className='flex justify-between items-center gap-2'>
        <div className='flex gap-3.5 items-center'>
          <div className='flex flex-col gap-0.5'>
            <h3 className='text-sm font-semibold'>00</h3>
            <p className='text-xs font-medium'>Duration</p>
          </div>
          <div className='flex flex-col gap-0.5'>
            <h3 className='text-sm font-semibold'>00</h3>
            <p className='text-xs font-medium'>Questions</p>
          </div>
        </div>
        <div className='flex gap-2.5 items-center text-sm'>
          <button className="px-2 py-1 border rounded-full text-blue2 border-blue2 text-sm flex gap-1 items-center">
            <img src='/icons/link.svg' alt='link' /> <span>Share</span>
          </button>
          <div className='avatar-group -space-x-5 text-white font-semibold'>
            <div className='avatar w-10 h-10 flex justify-center items-center bg-indigo-500'>
              <span className='uppercase'>lm</span>
            </div>
            <div className='avatar w-10 h-10 flex justify-center items-center bg-blue-500'>
              <span className='uppercase'>lm</span>
            </div>
            <div className='avatar w-10 h-10 flex justify-center items-center bg-pink-500'>
              <span className='uppercase'>lm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssessmentCard