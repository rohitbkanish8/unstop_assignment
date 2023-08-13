import React, { useContext, useState } from 'react'
import AssessmentCard from '../components/myassessment/assessmentCard'
import NewAssessmentCard from '../components/myassessment/newAssessmentCard'
import { LayoutContext } from '../App'
import Modal from '../components/myassessment/modal'

const Assessment = () => {
  const { viewToggle, setViewToggle, setDrawer } = useContext(LayoutContext)
  const [open, setOpen] = useState(false)
  const [overview, setOverview] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <div>
        <div className='flex gap-2.5 border-b px-5 lg:h-18 justify-between items-center'>
          <div className='flex lg:gap-2.5 lg:flex-row flex-col items-center h-full'>
            <div className='flex gap-2.5 justify-start items-center w-full lg:pt-0 pt-2.5'>
              <div className='w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center cursor-pointer'
                onClick={() => setDrawer(true)}>
                <img src="/icons/segment.svg" alt="responsive" />
              </div>
              <h1 className='text-lg whitespace-nowrapfont-medium'>Assessment</h1>
            </div>
            <div className='divider divider-horizontal m-0 w-0 py-2.5' />
            <div className="tabs h-full text-sm font-medium">
              <a className="tab tab-bordered h-full border-blue1 text-blue1">My Assessments</a>
              <a className="tab tab-bordered h-full text-blue2 border-none">Unstop Assessments</a>
            </div>
          </div>
          <div className='cursor-pointer lg:block hidden' onClick={() => setViewToggle(!viewToggle)}>
            {viewToggle ?
              <img src="/icons/mobile_screen_share.svg" alt="mobile" />
              :
              <img src="/icons/laptop_mac.svg" alt="laptop" />
            }
          </div>
        </div>
        <div className='p-5'>
          {overview &&
            <div className='mb-10'>
              <h2 className='text-lg whitespace-nowrap font-medium mb-4'>Assessments Overview</h2>
              <div className='flex xl:flex-row flex-col border rounded-xl w-fit'>
                <div className='grid grid-cols-2 gap-2.5 items-center xl:border-none border-b'>
                  <div className='flex flex-col gap-4 px-5 py-4 order-1'>
                    <h3 className='text-sm whitespace-nowrap font-semibold'>Total Assessment</h3>
                    <div className='flex gap-2.5 items-center'>
                      <img src='/icons/agenda.svg' alt='agenda' />
                      <h4 className='text-xl whitespace-nowrap font-bold'>34</h4>
                    </div>
                  </div>
                  {/* <div className='divider divider-horizontal m-0 w-0' /> */}
                  <div className='flex flex-col gap-4 px-5 py-4'>
                    <h3 className='text-sm whitespace-nowrap font-semibold'>Total Purpose</h3>
                    <div className='flex gap-2.5 items-center'>
                      <img src='/icons/totalpurpose.svg' alt='purpose' />
                      <h4 className='text-xl whitespace-nowrap font-bold'>11</h4>
                    </div>
                  </div>
                </div>
                <div className='flex lg:flex-row flex-col gap-2.5 xl:order-2 order-3'>
                  <div className='flex flex-col gap-4 px-5 py-4'>
                    <h3 className='text-sm whitespace-nowrap font-semibold'>Candidates</h3>
                    <div className='flex gap-5 mr-6'>
                      <div className='flex gap-2.5 flex-wrap items-center'>
                        <img src='/icons/candidates.svg' alt='candidates' />
                        <div className='flex flex-col gap-0.5'>
                          <h4 className='text-xl whitespace-nowrap font-bold flex gap-1 items-center'>11,145 <span className='text-sm whitespace-nowrap font-medium text-green-500'>+ 89</span></h4>
                          <p className='text-xs whitespace-nowrap font-medium'>Total Candidates</p>
                        </div>
                        <div className='divider divider-horizontal' />
                        <div className='flex flex-col gap-0.5'>
                          <h4 className='text-xl whitespace-nowrap font-bold flex gap-1 items-center'>114 <span className='text-sm whitespace-nowrap font-medium text-green-500'>+ 89</span></h4>
                          <p className='text-xs whitespace-nowrap font-medium'>Who Attamped</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='divider divider-horizontal m-0 w-0' />
                  <div className='flex flex-col gap-4 px-5 py-4'>
                    <h3 className='text-sm whitespace-nowrap font-semibold'>Candidates Source</h3>
                    <div className='flex gap-5 mr-6'>
                      <div className='flex gap-2.5 flex-wrap items-center'>
                        <img src='/icons/candidate-source.svg' alt='candidates' />
                        <div className='flex flex-col gap-0.5'>
                          <h4 className='text-xl whitespace-nowrap font-bold flex gap-1 items-center'>11,000 <span className='text-sm whitespace-nowrap font-medium text-green-500'>+ 89</span></h4>
                          <p className='text-xs whitespace-nowrap font-medium'>E-mail</p>
                        </div>
                        <div className='divider divider-horizontal m-0 w-0' />
                        <div className='flex flex-col gap-0.5'>
                          <h4 className='text-xl whitespace-nowrap font-bold flex gap-1 items-center'>145 <span className='text-sm whitespace-nowrap font-medium text-green-500'>+ 89</span></h4>
                          <p className='text-xs whitespace-nowrap font-medium'>Social Share</p>
                        </div>
                        <div className='divider divider-horizontal m-0 w-0' />
                        <div className='flex flex-col gap-0.5'>
                          <h4 className='text-xl whitespace-nowrap font-bold flex gap-1 items-center'>145 <span className='text-sm whitespace-nowrap font-medium text-green-500'>+ 89</span></h4>
                          <p className='text-xs whitespace-nowrap font-medium'>Unique Link</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className='divider divider-horizontal m-0 w-0' /> */}
                <div className='xl:flex hidden flex-col gap-4 px-5 py-4 border-l'>
                  <h3 className='text-sm whitespace-nowrap font-semibold'>Total Purpose</h3>
                  <div className='flex gap-2.5 items-center'>
                    <img src='/icons/totalpurpose.svg' alt='purpose' />
                    <h4 className='text-xl whitespace-nowrap font-bold'>11</h4>
                  </div>
                </div>
              </div>
            </div>
          }
          <div className='mb-10'>
            <div className='flex justify-between items-center gap-4 mb-4'>
              <h2 className='text-lg whitespace-nowrapfont-medium'>My Assessment</h2>
              <div className='lg:hidden flex justify-center items-center gap-2.5'>
                <button className={`w-10 h-10 grid place-content-center rounded-full`}>
                  <img src='/icons/search.svg' alt='search' />
                </button>
                <button className={`w-10 h-10 grid place-content-center rounded-full`}>
                  <img src='/icons/filter_list_alt.svg' alt='filter' />
                </button>
                <button className={`${overview ? 'border border-blue1 bg-blue-100' : ''} w-10 h-10 grid place-content-center rounded-full`} onClick={() => setOverview(!overview)}>
                  <img src='/icons/bar_chart.svg' alt='bar' />
                </button>
              </div>
            </div>
          </div>
          <div className='grid desktop:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8'>
            <NewAssessmentCard handleMethod={() => window.my_modal_5.showModal()} />
            <AssessmentCard />
            <AssessmentCard />
            <AssessmentCard />
            <AssessmentCard />
          </div>
          <div className='grid place-content-center bg-blue1 rounded-full p-2 absolute bottom-4 right-4'
            onClick={() => window.my_modal_5.showModal()}>
            <img src='/icons/add_white.svg' alt='add' className='w-7 h-7' />
          </div>
        </div>
        {/* </div> */}
        {/* Open the modal using ID.showModal() method */}
        {/* <button className="btn" onClick={() => window.my_modal_2.showModal()}>open modal</button> */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box max-w-5xl p-0">
            <div className='flex justify-between items-center gap-4 border-b p-5'>
              <h3 className="font-bold text-xl">Create new assessment</h3>
              <button className="btn bg-transparent border-none text-xl">
                <img src='/icons/cut.svg' alt='close' />
              </button>
            </div>
            <div className='p-5 flex flex-col gap-5'>
              <div className='flex flex-col gap-3 w-full'>
                <label className='font-medium'>Name of assessment</label>
                <input type="text" placeholder="Type here" className="font-medium input input-bordered placeholder:text-blue2" />
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <label className='font-medium'>Purpose of the test is</label>
                <select className="select select-bordered">
                  <option className='text-lg'>Select</option>
                  <option className='text-lg'>One</option>
                  <option className='text-lg'>Two</option>
                </select>
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <label className='font-medium'>Description</label>
                <select className="select select-bordered">
                  <option className='text-lg'>Select</option>
                  <option className='text-lg'>One</option>
                  <option className='text-lg'>Two</option>
                </select>
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <label className='font-medium'>Skills</label>
                <input type="text" placeholder="Type here" className="font-medium input input-bordered placeholder:text-blue2" />
              </div>
              <div className='flex flex-col gap-3 w-full'>
                <label className='font-medium'>Duration of assessment</label>
                <input type="time" placeholder="Type here" className="font-medium input input-bordered placeholder:text-blue2" />
              </div>
            </div>
            <div className="modal-action p-5">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary w-full">Save</button>
            </div>
          </form>
        </dialog>
      </div >
      <Modal open={open} close={() => handleClose()}>
        <div className='rounded-xl relative border bg-white border-gray-500 border-opacity-40'>
          <div className="absolute group left-4 top-4 z-50">
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Assessment