import mongoose from "mongoose";
import React from "react";
import Product from "../models/Product";
import DisplayItem from "../components/DisplayItem";

const Stickers = ({products}) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4 justify-center'>
         {products.map((item)=>{
          return <DisplayItem key={item._id} item={item}/>
         })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let products = await Product.find({category:'stickers'});
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Stickers;
