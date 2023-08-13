import React from 'react'

const NewAssessmentCard = ({ handleMethod }) => {
  return (
    <div className='rounded-xl border border-dashed bg-slate-100 p-8 flex flex-col justify-center items-center gap-3 cursor-pointer' onClick={handleMethod}>
      <div className='bg-white w-18 h-18 rounded-full grid place-content-center'>
        <img src='/icons/add.svg' />
      </div>
      <h2 className='text-lg font-medium'>New Assessment</h2>
      <p className='text-xs font-medium text-center'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
    </div>
  )
}

export default NewAssessmentCard