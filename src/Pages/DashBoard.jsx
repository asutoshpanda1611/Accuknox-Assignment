import React from 'react'
import Searchbar from '../Navbar/Searchbar'
import Tools from '../Header/Tools'
import Cards from '../components/Cards'



function DashBoard() {


  return (
    <div > 
      <div>
        <Searchbar></Searchbar>
        <Tools></Tools>
        <div className='mb-6'>
          <Cards></Cards>
        </div>
        
      </div>      
    </div>
  )
}

export default DashBoard