import { BsExclamationCircleFill } from 'react-icons/bs'
import './left_menu.css'
import { CiUser } from 'react-icons/ci'
import { MdModeEdit } from 'react-icons/md'
import { FaCalendarDay, FaUsers } from 'react-icons/fa'

export default function Menu() {

  return (
    <>
        <div className="menu">
            <p className='title'>
                Menu
            </p>
            <ul>
                <li className='active'>
                    <CiUser size={24}/>
                    <p>
                        Dashboard
                    </p>
                </li>
                <li>
                    <MdModeEdit size={24}/>
                    <p>
                        Course Information Management
                    </p>
                </li>
                <li>
                    <BsExclamationCircleFill size={24}/>
                    <p>
                        Admin Reporting
                    </p>
                </li>
                <li>
                    <FaCalendarDay size={24}/>
                    <p>
                        Scheduling
                    </p>
                </li>
                <li>
                    <FaUsers size={24}/>
                    <p>
                        Assessment and Evaluation
                    </p>
                </li>
            </ul>
        </div>
    </>
  )
}

