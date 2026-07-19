function Footer({data, setPage,page}) {
  return (
    <div className="flex justify-center w-full mt-4">
      <button className="bg-black text-white w-20 mr-4 rounded" onClick={()=>{setPage(page - 1)}}>Prev</button>
      <h1 className="text-black">{page}</h1>
      <button className="bg-black text-white w-20 ml-4 rounded" onClick={()=>{setPage(page + 1)}}>Next</button>
    </div>
  );
} 

export default Footer;