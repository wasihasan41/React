
import { Bookmark } from 'lucide-react';
function App({img, company, date, loc, pay,post, tag1, tag2}){
    return(
        <>
            <div className="card">
                <div className="flex justify-between items-center">
                    <img src={img} alt="img" />
                    <button className='save'> <span>save</span> <Bookmark className="bookmark-icon"/></button>
                </div>
                <div className="center">
                    <h3>{company} <span>{date}</span></h3>
                    <h2>{post}</h2>
                    <div className="duration">
                        <h4>{tag1}</h4>
                        <h4>{tag2}</h4>
                    </div>
                </div>
                <div className="bottom">
                    <div className='rate-city'>
                        <h3>{pay}</h3>
                        <span>{loc}</span>
                    </div>
                    <button className='apply'>Apply now</button>
                </div>
            </div>
        </>
    )
}
export default App

