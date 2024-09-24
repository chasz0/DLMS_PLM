import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import './nav.css'

export default function Navigation(){

    return (
        <div className='navigation'>
            <h2>
                Welcome, Hitler!
            </h2>
            <div className="right">
                <h2>
                    PH Standard Time: 9:11:00 PM
                </h2>
                <button>
                    <FaRegUserCircle size={30}/>
                    <IoMdArrowDropdown size={30}/>
                </button>
            </div>
        </div>
    );
    
}