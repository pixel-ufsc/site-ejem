import styles from "./ourfeedback.module.css";
import FeedBackCard from "./FeedBackCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";


export default class OurFeedBackComponent extends Component {
    render() {
      const feedbacks = this.props.feedback.data
      console.log(feedbacks)
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
            <Slider {...settings} className={styles.slider}>
              {feedbacks.map((feedback)=> {
                  return (
                    <div>
                        <FeedBackCard 
                            id={feedback.id}
                            nome={feedback.attributes.nome}
                            textoFeedback={feedback.attributes.textoFeedback}
                            foto={feedback.attributes.foto.data.attributes.formats.thumbnail.url}
                          />
                    </div>
                  )
              })}
            </Slider>
            {/* <Slider {...settings}>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
                <div>
                    <FeedBackCard></FeedBackCard>
                </div>
            </Slider> */}
            <section className={styles.section3}/>
        </section>
      );
    }
  }
