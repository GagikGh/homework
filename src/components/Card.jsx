import React, { useEffect, useState } from 'react'


export default function Card() {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(json => {
                setData(json)
                console.log(json); // Process the JSON data here
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    },[])

  return (
    <div>
        {data.map(elem => {
            return(
                <p key={elem.id}>{elem.name}</p>
            )

        })}
    </div>
  )
}
