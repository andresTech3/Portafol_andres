import React from 'react'
import img1 from '../assets/andres.jpg'
import img2 from '../assets/bg-profile.jpg'


const datos = [
    {
        "img" : img1,
        "desc" : "lorem ipsum dolor sit amet, consectetur adip",
        "url" : "#"
    },
    {
        "img" : img2,
        "desc" : "lorem ipsum dolor sit amet, consectetur adip",
        "url" : "#"
    }
]

function CardProyect(props) {
    return (
        <div className='w-52 h-full p-3 bg-gray-900 flex flex-col mx-3 relative '>
            <img src={props.img} alt="" className='h-64 object-cover' />
            <p className='text-start text-sm my-3'>{props.desc}</p>
            <a href={props.url} className='bg-teal-900 border-none outline-none transition-all ease-in-out hover:bg-violet-900 '>Click aqui !!</a>
        </div>
    )
}

function Proyect(){
    return (
        <div className='my-5 ml-14 text-center'>
            <h1 className='text-3xl text-teal-500 font-bold'>Proyectos Web</h1>
            <p className='mb-4'>Encuentra proyectos completos o complementos aqui 👇👇👇</p>
            <a href="#" className='transition-all ease-in-out text-teal-700 hover:text-teal-500 p-2 bg-teal-200 hover:bg-teal-700 rounded'>GitHub Personal ✅</a>
            <div className='flex'>
                {datos.map(item =>(
                    <CardProyect img = {item.img} desc = {item.desc} url = {item.url}/>
                ))}
            </div>
        </div>
    )
}

export default Proyect

