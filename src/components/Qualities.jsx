import React, { Children } from 'react'
import {HiUserGroup} from 'react-icons/hi'
import {FaNetworkWired} from 'react-icons/fa'
import  {GiOrganigram} from 'react-icons/gi'

function ButtonQualities({children , textButton = ''}){
    return (
        <div className='p-3 bg-stone-900 w-20 rounded-xl ml-3 mt-2'>
            <h3 className='text-center text-xs '>{textButton}</h3>
            {children}
        </div>
    )
}

function Qualities() {
  return (
    <div className='w-72 ml-72'>
        <h2 className='text-2xl text-center text-teal-500 font-bold'>Mis Cualidades</h2>
        <div className='flex mt-2 flex-wrap'>
            <ButtonQualities textButton='Liderasgo'><HiUserGroup size={'30px'} className='m-auto'/></ButtonQualities>
            <ButtonQualities textButton='Eficiente'><FaNetworkWired size={'30px'} className='m-auto'/></ButtonQualities>
            <ButtonQualities textButton='Organizado'><GiOrganigram size={'30px'} className='m-auto'/></ButtonQualities>

        </div>
    </div>
  )
}

export {Qualities , ButtonQualities}
