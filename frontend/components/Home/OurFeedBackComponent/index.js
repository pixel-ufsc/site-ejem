import styles from "./ourfeedback.module.css";
import FeedBackCard from "./FeedBackCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";

// import Image from 'next/image'
// import email from '../../../public/home/contact/email.png'


export default class OurFeedBackComponent extends Component {
    // pegar imagem e descrição 

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <section>
            <section className={styles.section1}>
                <div className={styles.title}>
                    Feedback de clientes    
                </div>
            </section>
            <Slider {...settings}>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
            </Slider>
            <section className={styles.section3}/>
        </section>
      );
    }
  }


// export default function OurFeedBackComponent() {
//     return(
//         <section>
//             <section className={styles.section1}>
//                 <div className={styles.title}>
//                     Feedback de clientes    
//                 </div>
//             </section>
//             {/* passar imagem e descrição */}
//             <FeedBackCard />
            
//             <section className={styles.section3}/>
//         </section>
//         )
// }

