import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Body() {
  return (
    <div className='mx-auto w-full  p-0 ml-0 box-border'>
        <Header />
        <div className='min-h-[100vh]'> 
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Body