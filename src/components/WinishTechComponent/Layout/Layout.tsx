import Main from '../Main/Main'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='flex mt-5 gap-5'><Sidebar/> <Main/></div>
    </div>
  )
}

export default Layout