import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import  ContextProvider  from '../context/ContextProvider';
function LeftAboutCard() {
    const {darkMode} = useContext(ContextProvider); 
    const auth = getAuth(); 
    return (
        <div className={`shadow w-2/3 mt-2 rounded ml-10 ${darkMode?'bg-slate-900 text-white':null}`}>
            <div className='ml-12 mt-2 '>
               <Link to="/profile"><img src={`${auth.currentUser?auth.currentUser.photoURL:'https://avatars.githubusercontent.com/u/80947662?v=4'}`} alt="" className='w-2/3 content-center rounded-full' /></Link>
            </div>
            <h1 className='mt-1 font-medium text-xl text-center px-5'>{auth.currentUser?`${auth.currentUser.displayName}`:'</Rajan kumar>'}</h1>
            <p className='text-sm text-gray-500 px-5 text-center'>
                Full stack MERN Developer|| CSE Student at NITP || 
                React Fronted Developer
            </p>
            <hr  className='my-2'/>
            <div className='px-5 text-sm'>
             <p >Number of followers <a href="/"> <span className='text-blue-500'> 3.5k</span> </a></p>
             <p>Profile views this month <a href="/"><span className='text-blue-500'>1.5k</span></a> </p>
             <p >Post views this month <a  href="/"><span className='text-blue-500'>33.5k</span></a> </p>
            </div>
        </div>
    )
}

export default LeftAboutCard; 
