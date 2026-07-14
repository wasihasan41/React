import Header from './components/Header'
import MainSection from './components/MainSection'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'
import FullContent from './components/FullContent'
import Card from './components/Card'
import Naruto from './assets/naruto.webp'
import Mitsuki from './assets/mitsuki.webp'
import Orochimaru from './assets/orochimaru.webp'
import Deidara from './assets/deidara.webp'
import Gaara from './assets/gaara.webp'
import Kakashi from './assets/kakashi.webp'

function App() {

  const data = [
    { 
      num: 1,
      img: Kakashi, 
      desc: "Copy Ninja from the Hidden Leaf, skilled in over a thousand jutsu and a former ANBU captain",
      tag: "Kakashi" 
    }, 
    { 
      num: 2,
      img: Gaara,
      desc: "Kazekage of the Hidden Sand, former jinchūriki who mastered his inner beast through bonds",
      tag: "Gaara"
    },
    { 
      num: 3,
      img: Deidara,
      desc: "Rogue Akatsuki member known for explosive clay art and a deep rivalry with Sasori",
      tag: "Deidara"
    },
    { 
      num: 4,
      img: Mitsuki,
      desc: "Young shinobi from the Hidden Leaf, created with unique origins and shape-shifting abilities",
      tag: "Mitsuki"
    },
    { 
      num: 5,
      img: Orochimaru,
      desc: "Former Sannin turned outlaw, driven by forbidden jutsu and a pursuit of eternal knowledge",
      tag: "Orochimaru"
    },
    { 
      num: 6,
      img: Naruto,
      desc: "Seventh Hokage of the Hidden Leaf, former jinchūriki who united villages through perseverance",
      tag: "Naruto"
    }
  ]
  return (
    <>
      <FullContent>
        <Header />
        <MainSection>
          <LeftSection/>
          <RightSection>
            {data.map((card, index)=>{
              return <Card key={card.index} img={card.img} num={card.num} data={card.desc} tag={card.tag}/>
            })}            
          </RightSection>
        </MainSection>
      </FullContent>
    </>
  )
}

export default App