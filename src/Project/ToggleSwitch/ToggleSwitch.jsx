import './ToggleSwitch.css'
import { useState } from 'react'
import { MdCameraswitch } from 'react-icons/md'
import { RiShieldUserFill } from "react-icons/ri";


export const ToggleSwitch = () => {

  const [ isOn, setIsOn ] = useState(false)

  const handleToggleSwitch = () => {
    setIsOn(!isOn)
  }
  const checkIsOn = isOn ? 'on' : 'off'
  const toggleBGColor = { backgroundColor: isOn ? '#4caf50' : '#f44336' }
  return (
      <>
        <h1 style={{
          color: '#000',
          textAlign: 'center'
        }}>Toggle Switch <MdCameraswitch/> <RiShieldUserFill />

        </h1>
        <div className="toggle-switch"
             onClick={handleToggleSwitch}
             style={toggleBGColor}>
          <div className={`switch ${checkIsOn}`}>
            <span className="switch-state">{checkIsOn}</span>
          </div>
        </div>
      </>
  )
}