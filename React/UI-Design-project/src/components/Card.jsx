function Card({img, num, data, tag}) {
    return(
        <div className=" border border-gray-200 text-black rounded-4xl p-6  flex flex-col w-80 mr-4   shrink-0 bg-cover bg-center " style={{backgroundImage: `url(${img})`, }}>
            <h1 className=" flex bg-gray-200 h-6 w-6 text-black rounded-xl justify-center items-center font-black mb-[80%]">{num}</h1>
            <p className="flex mb-[20%] ">{data}</p>
            <h6 className="bg-gray-200 font-medium text-sm rounded-2xl px-5 h-fit w-[50%] p-2">{tag}</h6>
        </div>
    )    
}

export default Card