import React from 'react';

const ProductBox = ({
  itemName,
  itemPrice,
  itemLikes,
  itemIsSoldOut,
  itemImg
}) => {
  return (
    <div>
      <h5 className="border">
        Product Box
      </h5>
      <img width="100%" src={`${itemImg}`} />
      <h3>{itemName}</h3>
      <h5>${itemPrice}</h5>
      <h5>Likes: {itemLikes}</h5>
      <h5>Is sold out? {(itemIsSoldOut) ? <span>Yes</span> : <span>No</span>}</h5>
    </div>
  );
};

export default ProductBox;