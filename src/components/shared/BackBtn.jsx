import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

function BackBtn() {
    const navigate = useNavigate()
    const backBtnStyle = {
			position: 'absolute',
			top: '6.5rem',
			left: '40px',
			fontSize: '1rem',
			padding: '5px',
            borderRadius:'5px',
			backgroundColor: '#ff6b2c',
            color:'#fff',
			display:'flex',
			alignItems:'center'
		}
  return (
		<button className='back-btn' style={backBtnStyle} onClick={() => navigate(-1)}>
			<IoIosArrowRoundBack color='#fff' size='20'/> Back
		</button>
	)
}

export default BackBtn