import React from 'react'

function Card({username, btnText="if props not passed"}) {  //destructuring to avoid
  //function Card(props){
  //<h1>props.username</h1>}
  return (
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMZ4_6RUVcm5y7wcVZtjI3CRM8Vb0jKbk7A&s" alt="" className="z-0 h-full w-full rounded-md object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati perspiciatis sunt nostrum voluptas! Sit eum, nostrum pariatur officia atque in incidunt.</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black"> {btnText}</button>
        </div>
      </div>
    </>
  )
}

export default Card;