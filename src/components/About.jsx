import React from 'react'
import img1 from '../assets/bg-profile.jpg'
import img2 from '../assets/andres.jpg'


function About() {
  return (
    <div className='p-5 w-100 flex'>
      <div className=''>
        <h2 className='text-center mt-10 text-2xl' >About</h2>
        <hr className='w-20 m-auto border-teal-500 '/>
        <hr className='w-10 m-auto mt-2 border-teal-500 '/>
        <p className='mt-5 px-20'><span className='text-teal-500'>Hello, my name is Andres Narvaez </span>quiere que te ayude a mejorar tu presencia online y optimizar procesos para mejorar tu rendimiento y atraer mas clientes ? descubre como 👇</p>
        <p className='px-20'>¿Qué puedo hacer por ti o por tu empresa?</p>
        <p className='px-20 mt-2'>✅Gestor de contenidos: puedo ayudarte a crear y implementar contenidos optimizados, para tu empresa o marca, donde se busca mejorar las estrategia de marketing, encargándome de su producción con técnicas de SEO, copywriter y CTA</p>
        <p className='px-20 mt-2'>✅Programador Web: Puedo ayudarte a automatizar tareas, en crear Landi Pages, Paginas Web, Funcionalidades Adicionales, gestor de proyectos, etc</p>
        <p className='px-20 mt-2'>Después de 4 años acumulando experiencia en la creación de contenido para las redes sociales, en proyectos informáticos ya anterior mente vistos, tengo la capacidad de adaptarme a cualquier entorno y la exigencia es un estimulo a seguir mejorando </p>
      </div>
      <div className='w-full relative'>
        <img src={img1} alt="" className='object-cover w-96 absolute h-96 mt-16 z-0' />
        <img src={img2} alt="" className='object-cover w-96 absolute h-5/6 mt-16 z-10 right-10 -mt-10 translate-y-10' />
      </div>
    </div>
    
  )
}

export default About
