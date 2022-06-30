import React, {useState, useEffect} from 'react'

export default function Product({ product }) {
  const [name, setName] = useState([]);
  const [id, setId] = useState([]);

  function generatePrice(){
    return Math.floor((Math.random() * 100) + 1);
  }

  const getGame = () => {
    fetch('https://random-data-api.com/api/app/random_app')
    .then((res) => res.json())
    .then((data) => {
      setName(data.app_name);
      setId(data.id);
    })
  }

  useEffect(() => getGame(), []);

var url = '/#add?product=' + name;

  return (
   <>
        <div className='card'>
            <h1>{name}</h1>
            <p className='price'>{generatePrice()} EUR</p>
            <a href={url}>Add to Cart</a>
        </div>

        <span className='space'>
        </span>
   </> 
  )
}
