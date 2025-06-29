// components/ThreeColumns.js
import React from 'react';

const ThreeColumns = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full bg-cardigan px-4 py-6 rounded-lg">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-start p-4 mb-4 sm:w-1/3 sm:mb-0">
          <div className="flex justify-start items-start">
            
            <img src={item.icon} alt={item.title} className="w-24 h-18 mr-3" />
           
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-left">{item.title}</h3>
             
              <p className="mt-2 text-lg sm:text-xl text-white-600 text-left">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeColumns;
