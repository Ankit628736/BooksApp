import React from "react";

const Cart = ({items,key}) => {
    // console.log(items);
    
  return (
    <>
      <div className="m-5 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-100 ease-in-out">
          <figure>
            <img
              src={items.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {items.name}
              <div className="badge badge-secondary">{items.Category}</div>
            </h2>
            <p>{items.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs.{items.price}</div>
              <div className="px-2 py-1 rounded-lg border  hover:bg-pink-500 duration-100 ease-in-out scale-110 hover:text-white p-2">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
