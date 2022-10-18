import mongoose from "mongoose";
import { useRouter } from "next/router";
import { useState } from "react";
import {hostname} from '../../lib/AppConsts'
import Product from "../../models/Product";

const Post = ({ addToCart, product, variants }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const checkServiceAbility = async () => {
    let pins = await fetch(hostname+"/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };
  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const refreshVariant = (newSize, newColor) => {
    let url = `${hostname}/product/${variants[newColor][newSize]["slug"]}`;
    console.log(url);
    // alert(variants[newColor][newSize]['slug'])
    window.location = url;
    // setColor(newColor)
    // setSize(newSize)
  };

  return (
    <>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-16 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded'
              src={product.img}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                CODESWEAR
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {product.title} ({product.size}/{product.color})
              </h1>
              <div className='flex mb-4'>
              </div>
              <p className='leading-relaxed'>
                {product.desc}
              </p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3'>Color</span>
                  {Object.keys(variants).includes("Blue") &&
                    Object.keys(variants["Blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Blue");
                        }}
                        className={`border-2  ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Blue" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Black") &&
                    Object.keys(variants["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Black");
                        }}
                        className={`border-2  ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color === "Black" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Yellow") &&
                    Object.keys(variants["Yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Yellow");
                        }}
                        className={`border-2  ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Yellow"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("White") &&
                    Object.keys(variants["White"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "White");
                        }}
                        className={`border-2  ml-1 bg-white-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "White" ? "border-black" : "border-blue-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(variants).includes("Pink") &&
                    Object.keys(variants["Pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Pink");
                        }}
                        className={`border-2  ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Pink" ? "border-black" : "border-blue-300"
                        }`}
                      ></button>
                    )}
                </div>
                <div className='flex ml-6 items-center'>
                  <span className='mr-3'>Size</span>
                  <div className='relative'>
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                      }}
                      className='rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10'
                    >
                      {Object.keys(variants[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(variants[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(variants[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(variants[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                    </select>
                    <span
                      onChange={() => refreshVariant()}
                      className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  Rs 499.00
                </span>
                <button className='flex ml-4 text-white bg-pink-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded'>
                  Bay Now
                </button>
                <button
                  onClick={() =>
                    addToCart(slug, 1, 499, product.title, size, color)
                  }
                  className='flex ml-4 text-white bg-pink-500 border-0 py-2 md:px-6 focus:outline-none hover:bg-pink-600 rounded'
                >
                  Add to Cart
                </button>
              </div>
              <div className='pin mt-6 flex space-x-2 text-sm'>
                <input
                  placeholder='Enter Your Pin Code'
                  onChange={onChangePin}
                  className='px-2 border-2 border-gray-400 rounded-md'
                  type='text'
                />
                <button
                  onClick={checkServiceAbility}
                  className='text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded'
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className='text-red-700 text-sm mt-3'>
                  Sorry! We do not deliver to this pin code.
                </div>
              )}

              {service && service != null && (
                <div className='text-green-700 text-sm mt-3'>
                  Yay! This pin code is servicable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let product = await Product.findOne({ slug: context.query.slug });
  let variants = await Product.find({ title: product.title });
  // console.log(variants)
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Post;
