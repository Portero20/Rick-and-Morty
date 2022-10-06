import React from 'react'

const Character = ({prod}) => {
    return (
        <div className='text-center p-5'>

            <h3>{prod.name} </h3>
            <img className='img-fluid rounded-pill' src={prod.image} alt="" />
            <p>{prod.origin.name}</p>

        </div>
    )
}

export default Character