import React, { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {

const [images, setImages] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4000/')
    .then(res=>{
      // console.log(res.data);
      setImages(res.data);
    }).catch(err=>{
      console.error('Error fetching data:', err);
    })
  },[])  

  const totalImages = images.length;
  const missingAltCount = images.filter(img => !img.alt).length;

  const generateAlt = (id) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, alt: 'Generated alt text example.' } : img
      )
    );
  };




  return (
    <div className="bg-gray-100 h-screen w-screen p-8 max-w-6xl mx-auto">
      <div className="text-3xl font-semibold">Alt Audit Dashboard</div>

      <Header totalImages={totalImages} missingAltCount={missingAltCount} />
      <Table images={images}/>
     
    </div>
  )
}

export default App