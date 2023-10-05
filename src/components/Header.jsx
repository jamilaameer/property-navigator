import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#1f3e72] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to='/'>
          <div className="font-bold text-sm  sm:text-xl flex flex-wrap ">
            <img src="./z2.png" alt="logo" width={70} />
          </div>
          </Link>
        
        <form  className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input type="text" placeholder='Search...' 
           className='bg-transparent  focus:outline-none w-24 sm:w-64'/>
           <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-6 '>
          <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>
              About
            </li>
          </Link>
          <Link to='/sign-in'>
              <li className=' text-white hover:underline'> Sign in</li>
        
          </Link>
        </ul>
      </div>
    </header>
  );
}
