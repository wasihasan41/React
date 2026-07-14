import {ArrowUpRight} from "lucide-react"
function LeftSection(){
    return(
        <>
        <div className="flex bg-white flex-col mr-10 ">
            <h1 className="text-black font-extrabold text-5xl pl-4 pb-6">Elite shinobi
            threat classification</h1>
            <h4  className="text-gray-600 font-medium text-sm pl-4 pr-28">Depending on combat history, chakra nature, and village allegiance, notable shinobi can be sorted into distinct groups.</h4>
            <ArrowUpRight className="mt-35" size={60} color="black" strokeWidth={3}/>
        </div>
        </>
    )
}

export default LeftSection