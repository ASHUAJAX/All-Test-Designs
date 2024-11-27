import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneIcon from '@mui/icons-material/Phone';

function Filters() {
  return (
    <div className='flex items-center gap-6 '>
 <input className='flex-1 border-[2px] p-5 border-black h-[50px] rounded-full placeholder-black'  type='text' placeholder='Search'  />
 <div className='border-[2px] w-[max-content] flex items-center gap-4 text-center border-black px-4 h-[40px] rounded-full'>Filter <SearchIcon/></div>
 <div className='border-[2px] w-[max-content] flex items-center gap-4 text-center border-black px-4 h-[40px] rounded-full'>Date <FilterAltIcon/></div>
   <div className='text-white ml-20 shadow-bottom w-[max-content] flex items-center gap-4 text-center  px-4 h-[40px] rounded-full bg-secondary'>
    <MessageIcon/>
    <SettingsIcon/>
    <PhoneIcon/>
   </div>
    </div>
  )
}

export default Filters