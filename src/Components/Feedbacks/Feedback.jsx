import React, { useRef } from 'react'
import './Feedback.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import Kento from '../../assets/kento.jpg'
import James from '../../assets/james.webp'
import Karen from '../../assets/karen.jpg'
import amelia from '../../assets/amel.jpeg'

const Food = () => {


    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () =>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
  return (
    <div className='feedback' id='feedback'>
        <img src={next} alt="" className='next-button' onClick=
        {slideForward}/>
        <img src={back} alt="" className='back-button' onClick=
        {slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="feed-info">
                            <img src={Karen} alt="" />
                            <div>
                                <h3>Stacy Kyle</h3>
                                <span>United Kingdom</span>
                            </div>
                        </div>
                        <p>I absolutely loved my visit to Penang! The street food was 
                            out of this world especially the char kway teow and cendol. 
                            The mix of cultures here is fascinating, and exploring George Town’s 
                            street art and heritage sites was a highlight of my trip.
                             I’ll definitely be coming back!</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="feed-info">
                            <img src={Kento} alt="" />
                            <div>
                                <h3>Kento Yamazaki</h3>
                                <span>Japan</span>
                            </div>
                        </div>
                        <p>Penang has so much to offer, from the vibrant markets to 
                            stunning beaches like Batu Ferringhi. I enjoyed hiking 
                            at Penang Hill and visiting the Kek Lok Si Temple. The 
                            locals were incredibly friendly, and I felt welcomed everywhere I went. 
                            Highly recommended for a well-rounded vacation</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="feed-info">
                            <img src={amelia} alt="" />
                            <div>
                                <h3>Adelia Amelia</h3>
                                <span>Indonesia</span>
                            </div>
                        </div>
                        <p>Penang’s food scene is unparalleled! Every meal was an adventure, from the hawker stalls 
                            to high-end restaurants. The blend of modern and historic architecture gave George Town 
                            such a unique vibe. It’s a great destination for both relaxation and exploration.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="feed-info">
                            <img src={James} alt="" />
                            <div>
                                <h3>James Arthur</h3>
                                <span>Australia</span>
                            </div>
                        </div>
                        <p>While Penang is beautiful and rich in history, I wish there were better 
                            public transport options. That said, the trishaw rides and Grab made 
                            getting around manageable. The Peranakan Mansion was a highlight, and 
                            the night markets offered a fantastic local experience.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Food