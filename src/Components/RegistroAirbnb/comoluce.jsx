import React, { useState } from 'react';
import "./form.css";

function Comoluce({ formData, SetFormdata }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = async (event) => {
    const files = event.target.files;
    const selectedFiles = Array.from(files).slice(0, 4);

    const bufferImages = await Promise.all(
      selectedFiles.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(Buffer.from(e.target.result));
          reader.onerror = (error) => reject(error);
          reader.readAsArrayBuffer(file);
        });
      })
    );

    setSelectedImages(bufferImages);

    const imagesObject = {};
    bufferImages.forEach((bufferImage, index) => {
      imagesObject[`image_${index + 1}`] = bufferImage;
    });

    SetFormdata({ ...formData, ...imagesObject });
  };

  return (
    <div>
      <div className='row'>
        <p className='text'>Selecciona máximo 4 fotos de tu sitio</p>
        <div className='col-md-12'>
          <div>
            <input
              type='file'
              accept='image/*'
              multiple
              onChange={handleImageChange}
              className='input-num'
            />
            {Object.keys(formData).filter((key) => key.startsWith('image_')).length > 0 && (
              <div className="image-preview">
                {Object.keys(formData)
                  .filter((key) => key.startsWith('image_'))
                  .map((key, index) => (
                    <img
                      key={index}
                      src={`data:image/jpeg;base64,${formData[key].toString('base64')}`}
                      alt={`Preview ${index + 1}`}
                      className="preview-image"
                    />
                  ))}
                  </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comoluce;
