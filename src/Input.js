import React from 'react'

export default function Input(props) {
    return (
        <input className=' w-5/6 border-2 border-gray-400 bg-red-white z-1 rounded-md h-[50px]' type={props.type} name='id' placeholder={props.ph} />
    )
}
