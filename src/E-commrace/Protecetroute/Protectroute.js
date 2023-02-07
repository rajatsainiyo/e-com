import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Protectroute=(props)=> {
    const {Component} =props
const navigate= useNavigate()

useEffect(() => {
  let user = localStorage.getItem("token")
  if(!user){
    navigate("/signin")
  }

  
}, [props])

    
  return (
   

<Component/>
   
  )
}

export default Protectroute