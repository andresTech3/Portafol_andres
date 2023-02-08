import React from 'react'

function SkillsCard(props) {

    const {text, level} = props

    return (
        <div className='mb-2'>
            <p className='inline-block mr-2'>{text}</p>
            <span className='p-1 bg-teal-500 rounded-3xl'>{level}</span>
        </div>
    )
}

export default SkillsCard

