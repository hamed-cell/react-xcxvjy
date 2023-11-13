import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <div>
      {foodItems.map((foodItem, index) => (
        <MenuItem key={index} {...foodItem} />
      ))}
    </div>
  );
}

export default MenuList;
