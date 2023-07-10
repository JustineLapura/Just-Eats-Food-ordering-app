"use client"
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {
    const {mode, toggle} = useContext(ThemeContext)
  return (
    <div onClick={toggle} className='w-10 h-5 border border-gray-300 rounded-xl flex justify-around items-center p-1 relative cursor-pointer'>
      <div className="text-sm">🌜</div>
      <div className="text-sm">🌞</div>
      <div className={`w-4 h-4 rounded-full bg-gray-500 absolute ${mode === "light" ? "left-[2px]" : "right-[2px]"}`} />
    </div>
  )
}

export default DarkModeToggle

// style={mode === "light" ? {left: "5px"} : {right: "5px"}}