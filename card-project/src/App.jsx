import Card from "./component/card.jsx"
import amazon from '../src/assets/amazon.jpg'
import meta from '../src/assets/meta.png'
import google from '../src/assets/google.jpg'
import netflix from '../src/assets/netflix.png'
import airbnb from '../src/assets/airbnb.png'
import microsoft from '../src/assets/microsoft.png'

function App(){
    const jobOpening = [
    {
        brandLogo: amazon,
        companyName: "Meta",
        datePosted: "5 days ago",
        location: "Menlo Park, CA",
        pay: "$56/hr",
        post: "Frontend Engineer",
        tag1: "Full Time",
        tag2: "Remote"
    },
    {
        brandLogo: google,
        companyName: "Google",
        datePosted: "2 days ago",
        location: "Mountain View, CA",
        pay: "$62/hr",
        post: "Backend Engineer",
        tag1: "Full Time",
        tag2: "On-site"
    },
    {
        brandLogo: netflix,
        companyName: "Netflix",
        datePosted: "1 week ago",
        location: "Los Gatos, CA",
        pay: "$70/hr",
        post: "Senior Software Engineer",
        tag1: "Full Time",
        tag2: "Hybrid"
    },
    {
        brandLogo: airbnb,
        companyName: "Airbnb",
        datePosted: "3 days ago",
        location: "San Francisco, CA",
        pay: "$48/hr",
        post: "UI/UX Designer",
        tag1: "Part Time",
        tag2: "Remote"
    },
    {
        brandLogo: amazon,
        companyName: "Amazon",
        datePosted: "4 days ago",
        location: "Seattle, WA",
        pay: "$54/hr",
        post: "Data Analyst",
        tag1: "Contract",
        tag2: "On-site"
    },
    {
        brandLogo: microsoft,
        companyName: "Microsoft",
        datePosted: "6 days ago",
        location: "Redmond, WA",
        pay: "$65/hr",
        post: "Product Manager",
        tag1: "Full Time",
        tag2: "Hybrid"
    }
    ];
    return(
        <>
        <div className="parent">
        {jobOpening.map(function(job){
            return <Card key={job.companyName} img={job.brandLogo} company={job.companyName} date={job.datePosted} loc={job.location} pay={job.pay} post={job.post} tag1={job.tag1} tag2={job.tag2}/>
        })}
        </div>
        </>
    )
}

export default App