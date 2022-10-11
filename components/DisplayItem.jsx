import React from 'react'
import Link from "next/link";
const DisplayItem = ({item}) => {
  const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];
  return (
    <Link passHref={true} href={`/product/${item.slug}`} key={item._id}>
    <div className='lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5 hover:translate-y-2'>
      <a className='block relative  rounded overflow-hidden'>
        <img
          alt='ecommerce'
          className='m-auto  h-[30vh] md:h-[36vh] block'
          src={item.img}
        />
      </a>
      <div className='mt-4 text-center'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
         {item.category}
        </h3>
        <h2 className='text-gray-900 title-font text-lg font-medium'>
         {item.title}
        </h2>
        <p className='mt-1'>₨ {item.price}</p>
        {/* <p className='mt-1'>{item.size} </p> */}
        <div className="mt-1">
          {item.size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span> }
          {item.size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span> }
          {item.size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span> }
          {item.size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span> }
        </div>
        <div className="mt-1">
          {/* {CSS_COLOR_NAMES.forEach(Color_name => {
            item.color.includes(Color_name) &&  <button className='border-2 border-black-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none'></button>
          })} */}
          {item.color.includes('Blue') &&  <button className='border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none'></button>}
          {item.color.includes('Black') &&  <button className='border-2 border-black-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none'></button> }
          {item.color.includes('Orange') &&  <button className='border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none'></button> }
          {item.color.includes('Pink') &&  <button className='border-2 border-pink-300 ml-1 bg-pink-900 rounded-full w-6 h-6 focus:outline-none'></button>}
          {item.color.includes('Yellow') &&  <button className='border-2 border-yellow-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none'></button>}
          {item.color.includes('White') &&  <button className='border-2 border-black-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none'></button>}
        </div>
      </div>
    </div>
  </Link>
  )
}

export default DisplayItem
