import React,{useEffect, useState} from 'react'


function FetchData(api) {
    const [state, setState] = useState({});
    useEffect(() =>{
        fetch(api)
            .then(data => data.json())
            .then(res => setState(res))
            .catch(err => console.error('Hubo un Error',err))
    },[state])
    
    return state
}

export default FetchData


