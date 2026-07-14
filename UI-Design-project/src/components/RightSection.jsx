function RightSection({children}){
    return(
        <>
        <div className="flex bg-white scrollbar-hide overflow-auto  ">
            {children}
        </div>
        </>
    )
}

export default RightSection