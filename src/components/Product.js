// Product.js
import React, { useState, useRef } from 'react';
import './styles/Product.css';

const Product = ({ models }) => {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const productRef = useRef(null);

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <div>
      <div className="product-showcase" ref={productRef}>
        <h1>iPhone 15</h1>
        <div className="details-container">
          <div className="blog-post">
            <div className="product-info">
              <div className="product-image">
                <img src={selectedModel.image} alt={selectedModel.model} />
              </div>
            </div>
              <div className="technical-specs">
                <h3>Technical Specifications</h3>
                <ul>
                  <li><strong>Display:</strong> {selectedModel.display}</li>
                  <li><strong>Camera:</strong> {selectedModel.camera}</li>
                  <li><strong>Chip:</strong> {selectedModel.chip}</li>
                  <li><strong>Features:</strong> {selectedModel.features.join(', ')}</li>
                  <li><strong>Storage Options:</strong> {selectedModel.storage.join(', ')}</li>
                  <li><strong>Colors:</strong> {selectedModel.colors.join(', ')}</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="model-selector">
                {models.map((model) => (
                  <button
                    key={model.model}
                    onMouseEnter={() => { handleModelChange(model); }}
                  >
                    {model.model}
                  </button>
                ))}
              </div>
      <div className="details">
          <h2>{selectedModel.model}</h2>
          <p className="description">{selectedModel.description}</p>
        </div>
    </div>
  );
};

export default Product;
