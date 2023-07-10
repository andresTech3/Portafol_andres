import React from 'react'

function SkillsCard(props) {

    const {text, level} = props

    return (
        <div className='bg-cyan-400  relative my-7 cursor-pointer'>
            <div className='bg-cyan-700 w-52 ml-0 z-10 transition-all hover:ml-3'>
                <h2 className='text-center'>{text}</h2>
                <div className='p-2 bg-cyan-400 z-10 absolute -bottom-2 -right-16 w-20 text-center'>
                    <p className='text-sm'>{level}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsCard

