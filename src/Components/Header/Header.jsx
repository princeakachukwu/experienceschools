import { NavLink } from 'react-router-dom'
import Logo from '../../assets/IMAGES/EXPERIENCE LOGO.png';
import { LuUser2 } from "react-icons/lu";


function Header() {


    

  return (
    <div className=' md:h-[25vh] bg-white  items-center m-0 flex justify-center box-border'> 
        <div className='mx-auto w-[100%]  m-0 md:h-[100%] flex flex-row items-center justify-center'>
            <div className='flex flex-col w-[100%] md:h-[25vh] m-0   items-center justify-between '>
                <div className="text-white h-[15vh] w-[100%] px-14 py-5 md:flex justify-between items-center box-border ">
                    <NavLink to={'/'} className='logo-flip  flex items-center justify-center md:h-[25vh] pt-5 box-border ' > <img src={Logo} alt="School logo" className='logo-flip flex items-center justify-center w-[120px] ' /> </NavLink>
                    <div className='hidden  md:flex gap-4 items-center'>
                        <LuUser2   size="3rem" className=' text-textOrange'/>
                        <div className='flex flex-col items-center text-gray-800'>
                            <h1 className='text-xl font-bold text-darkGray'>Chat With Us On <span className='text-green-500 '> Whatsapp</span> </h1>
                            <h1 className='text-3xl font-bold text-darkGray' >+2348056628345</h1>
                        </div>
                    </div>
                </div>
            
                {/* navbar component from daisy ui */}
                <div className="links mx-auto md:sticky top-0 navbar h-[10vh] bg-darkBlue  box-border flex justify-between items-center ">
                    <div className=" navbar-start w-[100vw] h-[10vh] md:px-14  flex justify-start items-center">
                        <div className="mx-auto dropdown ">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-5xl text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 box-border shadow bg-base-100 rounded-box w-52">
                                <li className='nav'> <NavLink to={'/'}> Home </NavLink> </li>
                                <li className='nav'> <NavLink to={'/About'}> About </NavLink> </li>
                                <li className='nav'><a>Campuses</a>
                                <ul className="p-2">
                                    <li><a>Egege Campus</a></li>
                                    <li><a>Emelogu Campus</a></li>
                                    <li><a>Opobo Campus</a></li>
                                </ul>
                                </li>
                                <li className='nav text-white'> <NavLink to={'/Programs'}> Programs </NavLink> </li>
                                <li className='nav'> <NavLink to={'/Staff'}> Staff </NavLink> </li>
                                <li className='nav'> <NavLink to={'/Blog'}> Blog </NavLink> </li>
                                <li className='nav'> <NavLink to={'/Contact'}> Contact </NavLink> </li>
                            </ul>
                        </div>
                        <NavLink to={'/'} className="name h-[100%] flex items-center justify-start text-3xl text-white font-bold w-full ">Experience International Schools</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex gap-2">
                        <ul className="menu menu-horizontal flex gap-3 px-1">
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/'}> Home </NavLink> </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/About'}> About </NavLink> </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'>
                                <details>
                                    <summary>Campuses</summary>
                                    <ul className="p-2">
                                        <li><a>Egege </a></li>
                                        <li><a>Emelogu</a></li>
                                        <li><a>Opobo</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/Programs'}> Programs </NavLink> </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/Staff'}> Staff </NavLink> </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/Blog'}> Blog </NavLink> </li>
                            <li className='nav text-white hover:text-lightBlue hover:font-bold'> <NavLink to={'/Contact'}> Contact </NavLink> </li>
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div> */}
                </div>
            </div>


        </div>
    </div>
  )
}

export default Header