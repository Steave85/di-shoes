import React from 'react'

export default function Title({name, title}) {
    return (
        <div className='raw'>
            <div className='col-10 mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold'>
                    <strong className='text-yellow'> {name}</strong>
                    <strong className='text-dark'> {title}</strong>
                </h1>
            </div>
            
        </div>
    )
}
