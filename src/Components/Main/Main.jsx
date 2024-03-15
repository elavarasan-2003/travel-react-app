import React ,{useEffect} from 'react';
import './main.css';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgsrc: img1,
    destTitle: 'Bora Bora',
    location: 'French Polynesia',
    grade: 'Cultural Relax',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },
  {
    id: 2,
    imgsrc: img2,
    destTitle: 'Santorini',
    location: 'Greece',
    grade: 'Scenic Beauty',
    fees: '$1000',
    description: 'Known for its stunning sunsets, white-washed buildings, and crystal-clear waters, Santorini is a must-visit destination for travelers seeking beauty and relaxation.'
  },
  {
    id: 3,
    imgsrc: img3,
    destTitle: 'Kyoto',
    location: 'Japan',
    grade: 'Historical Charm',
    fees: '$600',
    description: 'Experience the traditional culture and breathtaking beauty of Japan in Kyoto. With its ancient temples, serene gardens, and vibrant festivals, Kyoto offers a glimpse into Japan’s rich history.'
  },
  {
    id: 4,
    imgsrc: img4,
    destTitle: 'New York City',
    location: 'USA',
    grade: 'Urban Excitement',
    fees: '$900',
    description: 'Explore the vibrant energy and iconic landmarks of New York City. From Broadway shows to world-class museums, NYC offers endless entertainment and cultural experiences.'
  },
  {
    id: 5,
    imgsrc: img5,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'Historical Wonder',
    fees: '$800',
    description: 'Discover the ancient ruins of Machu Picchu nestled in the Andes Mountains of Peru. This UNESCO World Heritage Site offers breathtaking views and a fascinating glimpse into the Inca civilization.'
  },
  {
    id: 6,
    imgsrc: img6,
    destTitle: 'Paris',
    location: 'France',
    grade: 'Romantic Getaway',
    fees: '$1200',
    description: 'Experience the romance and elegance of Paris, the City of Lights. From the iconic Eiffel Tower to charming cafes, Paris is the perfect destination for a romantic getaway.'
  },
  {
    id: 7,
    imgsrc: img7,
    destTitle: 'Dubai',
    location: 'United Arab Emirates',
    grade: 'Luxury Adventure',
    fees: '$1500',
    description: 'Indulge in luxury and adventure in Dubai, home to extravagant skyscrapers, luxury shopping, and thrilling desert safaris. Dubai offers a unique blend of modernity and tradition.'
  },
  {
    id: 8,
    imgsrc: img8,
    destTitle: 'Rio de Janeiro',
    location: 'Brazil',
    grade: 'Vibrant Culture',
    fees: '$850',
    description: 'Experience the vibrant culture and natural beauty of Rio de Janeiro. From iconic landmarks like Christ the Redeemer to lively samba performances, Rio offers an unforgettable experience.'
  },
  {
    id: 9,
    imgsrc: img9,
    destTitle: 'Amalfi Coast',
    location: 'Italy',
    grade: 'Coastal Paradise',
    fees: '$1100',
    description: 'Explore the stunning beauty of the Amalfi Coast, with its colorful cliffside villages, crystal-clear waters, and delicious Mediterranean cuisine. The Amalfi Coast is a true coastal paradise.'
  }
];

const Main = () => {

    useEffect(()=>{
      Aos.init({duration:2000})
  
    },[])

  
  return (
    <section className='main container section'>
      <div  data-aos="fade-right" className="secTitle">
        <h3 className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgsrc,destTitle,location,grade,fees,description})=>{
            return(
              <div data-aos="fade-up" className="singleDestination" key={id}>
                 <div className="imageDiv">
                   <img src={imgsrc} alt={destTitle}/>
                 </div>
                 <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                        <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                      DETAILS<HiOutlineClipboardDocumentList className="icon"/>
                    </button>

                 </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main;
