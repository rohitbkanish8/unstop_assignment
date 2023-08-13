import React, { useContext } from 'react'
import NavCard from './nav/card'
import RoundStatusIcon from '../assets/icons/roundStatusIcon'
import DashboardIcon from '../assets/icons/dashboardIcon'
import AssessmentIcon from '../assets/icons/assessmentIcon'
import MyLibraryIcon from '../assets/icons/myLibraryIcon'
import { LayoutContext } from '../App'

const navs = [
  {
    id: 1,
    url: <DashboardIcon />,
    title: 'Dashboard'
  },
  {
    id: 2,
    url: <AssessmentIcon />,
    title: 'Assessment'
  },
  {
    id: 3,
    url: <MyLibraryIcon />,
    title: 'My Library'
  }
]

const obj = {
  id: 1,
  url: <RoundStatusIcon />,
  title: 'Round Status'
}

const Layout = ({ children }) => {
  const { viewToggle, drawer, setDrawer } = useContext(LayoutContext)
  return (
    <div className={`h-screen lg:bg-background bg-gray-400 flex gap-8 relative text-blue2 ${viewToggle ? 'w-full' : 'w-94'}`}>
      <div className={`bg-white lg:w-36 h-full pt-4 pb-5 pl-6 pr-5 ${!drawer ? 'hidden w-0' : 'block w-full'} lg:block lg:relative absolute z-50`}>
        <div className='flex justify-between items-center mb-4'>
          <h1>Menu</h1>
          <button onClick={() => setDrawer(false)}><img src='/icons/cut.svg' alt='close' /></button>
        </div>
        {navs.map((item) =>
          <NavCard key={item.id} item={item} />
        )}
        <div className="border w-full text-gray-400 border-dashed my-4" />
        <NavCard item={obj} admin={true} />
      </div>
      <div className='bg-white border lg:rounded-l-xl w-full overflow-y-auto'>
        {children}
      </div>
    </div>
  )
}

export default Layout