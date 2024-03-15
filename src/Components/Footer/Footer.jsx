import React ,{useEffect} from 'react';
import './footer.css'
import vid2 from '../../Assets/vid2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTripadvisor } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})

  },[])
  return (
    <section className="footer">
      <div  data-aos="fade-up" className="videoDiv">
        <video src={vid2} muted autoPlay loop type='video/mp4'></video>
      </div>

      <div  data-aos="fade-up" className="secContent container">
        <div className='contactDiv flex'>
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input type="text" placeholder='Enter Email Address' />
            <button className="btn flex" tupe='submit'>SEND<FiSend /></button>

          </div>
        </div>

        <div  data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'><MdOutlineTravelExplore  className='icon'/>Travel.</a>
            </div>

            <div className='footerParagraph'>
            The camera makes everyone a tourist in other people's reality, and eventually in one's own.
            </div>

            <div className="footerSocials flex">
            <FaTwitter className="icon"/>
            <FaYoutube className='icon'/>
            <IoLogoInstagram className='icon'/>
            <FaTripadvisor  className='icon'/>
            </div>
          </div>
        

        <div  data-aos="fade-up" className="footerLinks grid">
            <div className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              services
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Insurance
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Agency
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Tourism
              </li>
              <li className='footerList flex'> 
              <FaAngleRight className="icon"/>
              Payment
              </li>
            </div>
            <div className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Bookings
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              RentCars
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              HostelWorld
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Trivago
              </li>
              <li className='footerList flex'> 
              <FaAngleRight className="icon"/>
              TripAdvisor
              </li>
            </div>
            <div className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              London
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              California
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Indonesia
              </li>
              <li className='footerList flex'>
              <FaAngleRight className="icon"/>
              Europe
              </li>
              <li className='footerList flex'> 
              <FaAngleRight className="icon"/>
              Ocenia
              </li>
            </div>
        </div>

        <div  data-aos="fade-up" className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Footer