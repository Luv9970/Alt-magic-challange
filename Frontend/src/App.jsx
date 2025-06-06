import React, { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'

const App = () => {

  const imageData = [
  {
    id: 1,
    src: 'https://via.placeholder.com/50x50?text=👗',
    createdAt: '2025-05-28',
    alt: 'Red summer dress on mannequin',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/50x50?text=🖼️',
    createdAt: '2025-05-27',
    alt: '',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/50x50?text=🗻',
    createdAt: '2025-05-26',
    alt: 'Hero banner with mountains',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/50x50?text=☕',
    createdAt: '2025-05-25',
    alt: 'Cup of coffee on desk',
  },
  {
    id: 5,
    src: 'https://via.placeholder.com/50x50?text=☕',
    createdAt: '2025-05-24',
    alt: 'Cup of coffee on desk',
  },
  {
    id: 6,
    src: 'https://via.placeholder.com/50x50?text=☕',
    createdAt: '2026-05-24',
    alt: 'Cup of tea on desk',
  },
   {
    id: 7,
    src: 'https://via.placeholder.com/50x50?text=☕',
    createdAt: '2025-05-24',
    alt: 'Cup of cold drink on desk',
  },
   {
    id: 8,
    src: 'https://via.placeholder.com/50x50?text=☕',
    createdAt: '2025-05-24',
    alt: 'Cup of juice on desk',
  },
];  

  const [images, setImages] = useState(imageData);

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