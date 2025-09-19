
import ProductContext from '../context/Context'
import React,{ useContext } from 'react'

function Alert() {
    const { alertMsg } = useContext(ProductContext)
  return <div className='notification'>{alertMsg}</div>
}

export default Alert