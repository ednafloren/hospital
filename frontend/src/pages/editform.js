import React, { useState, useEffect } from 'react';



const MedicalItemDetail = ({ itemId }) => {
  const [medicalItem, setMedicalItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicalItem = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/medicines/get/${itemId}`);
        if (response.ok) {
          const data = await response.json();
          setMedicalItem(data);
        } else {
          setError('Medical item not found');
        }
      } catch (error) {
        setError('Error fetching medical item');
      }
    };

    fetchMedicalItem();
  }, [itemId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!medicalItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{medicalItem.name}</h1>
      <p>Description: {medicalItem.description}</p>
      <p>Price: {medicalItem.price}</p>
    </div>
  );
};

export default MedicalItemDetail;