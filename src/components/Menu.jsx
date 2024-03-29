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
function Menu() {

  //bg-gray-900

  return (
    <div className= 'w-full h-15 fixed bg-gray-900 rounded-b-2xl z-50 cursor-pointer z-index-10'>
      <div className='flex p-5 justify-between'>
        <a className=' pl-32 leading-5 text-2xl text-teal-500'>Andres</a>
        <div>
          <ul className='flex'>
              <a href="home" className='ml-9 transition-all ease-in-out hover:text-teal-500 hover:text-lg' ><li>Home</li></a>
              <a href="about" className='ml-9 transition-all ease-in-out hover:text-teal-500 hover:text-lg' ><li>About</li></a>
              <a href="skills" className='ml-9 transition-all ease-in-out hover:text-teal-500 hover:text-lg' ><li>Skills</li></a>
              <a href="portafolio" className='ml-9 transition-all ease-in-out hover:text-teal-500 hover:text-lg' ><li>Portfolio</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu