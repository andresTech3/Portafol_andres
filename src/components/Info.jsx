import React from 'react'

function Info() {
    const getAgeCurrent = () =>{
        let date = new Date();
        let currentDate = date.getFullYear() - 2002;
        return currentDate;
    }

  return (
    <div className='pl-1'>
        <h2 className='px-20 text-2xl text-teal-500 font-bold'>Informacion Personal</h2>
        <div className='flex flex-col px-20'>
            <div><span className='text-teal-500'>Tel : </span><span>3146880954</span></div>
            <div><span className='text-teal-500'>Email : </span><span>Andresnarvaez304@gmail.com</span></div>
            <div><span className='text-teal-500'>Edad : </span><span>{getAgeCurrent()}</span></div>
            <div><span className='text-teal-500'>Direccion : </span><span>234001, Montelibano - Cordoba</span></div>
        </div>
    </div>
  )
}

export default Info
