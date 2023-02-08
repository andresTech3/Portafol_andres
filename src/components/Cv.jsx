import react from 'react';
import cv_andres from '../pdf/cv_andres.pdf';

function Cv() {

    const downloadcv = () =>{
        window.print();
    }

    return (
        <>
            <a href={cv_andres} download className='p-3 m-auto flex justify-center self-center mt-3 bg-gray-900 transition ease-in-out delay-150 hover:bg-teal-500 rounded-2xl'>
                Descargar mi curriculum 
            </a>
        </>
    )
} 

export default Cv;