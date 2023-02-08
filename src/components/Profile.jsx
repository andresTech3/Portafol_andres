// Copyright 2023 andres
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import bgProfile from '../assets/bg-profile.jpg'
import profile from '../assets/andres.jpg' 
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

function Profile() {
  return (
    <div className='w-100 h-100 relative'>
      <a href="#"></a>
      <img src={bgProfile} alt="bg-profile" className='absolute w-full h-96 object-cover opacity-20 -z-10'  />
      <div className='w-100 pt-28'>
        <div className='w-80 h-100 p-5 bg-neutral-800 flex flex-col m-auto border-none  rounded-t-full justify-center items-center'>
          <img src={profile} alt="andres-Profile" className='object-cover w-56 h-56 mt-9 shadow-2xl shadow-teal-600 rounded-full'/>
          <h1 className='text-center text-4xl font-bold w-100 mt-2 '>Andres Narvaez</h1>
          <p className='mb-2'>expert web designer & programmer</p>
          <div className='flex flex-row'>
            <a href="#" className='mx-1 border-2 p-2 rounded-full transition ease-in-out delay-150 hover:bg-teal-500'><FaFacebookF className='' size={'15px'}/></a>
            <a href="#" className='mx-1 border-2 p-2 rounded-full transition ease-in-out delay-150 hover:bg-teal-500'><AiFillInstagram className='' size={'15px'}/></a>
            <a href="#" className='mx-1 border-2 p-2 rounded-full transition ease-in-out delay-150 hover:bg-teal-500'><FaLinkedinIn className='' size={'15px'}/></a>
          </div>
        </div> 
      </div>
      
    </div>
  )
}

export default Profile