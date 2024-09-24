import { PiNotebookBold, PiStudent } from 'react-icons/pi'
import './right_menu.css'
import { LiaChalkboardTeacherSolid } from 'react-icons/lia'

export default function MainScreen() {

  return (
    <>
        <div className="screen">
            <div className="options">
                <ul>
                    <li>
                        <div className="icon">
                            <PiStudent size={40} color='white'/>
                        </div>
                        <p>Student <br /><span>911</span></p>
                    </li>
                    <li>
                        <div className="icon">
                            <LiaChalkboardTeacherSolid size={40} color='white'/>
                        </div>
                        <p>Faculty <br /><span>420</span></p>
                    </li>
                    <li>
                        <div className="icon">
                            <PiNotebookBold size={40} color='white'/>
                        </div>
                        <p>Courses <br /><span>80085</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

