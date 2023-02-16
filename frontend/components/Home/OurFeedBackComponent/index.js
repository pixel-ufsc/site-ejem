import styles from './ourfeedback.module.css';
import FeedBackCard from './FeedBackCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component, useState, useEffect } from 'react';
import Slider from 'react-slick';
import LargeCard from '../../Shared/LargeCard';

export default class OurFeedBackComponent extends Component {
    render() {
        const feedbacks = this.props.feedback.data;

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className={styles.sectionContainer}>
                <h1 className={styles.title}>Depoimentos</h1>

                <Slider {...settings}>
                    {feedbacks.map((feedback) => {
                        return (
                            <LargeCard
                                key={feedback.id}
                                id={feedback.id}
                                title={feedback.attributes.nome}
                                description={feedback.attributes.textoFeedback}
                                imageUrl={feedback.attributes.foto.data.attributes.formats.thumbnail.url}
                            />
                        );
                    })}
                </Slider>
            </section>
        );
    }
}

/*   render() {
    const feedbacks = this.props.feedback.data
    // console.log(feedbacks)
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
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
                  <div
                    key={feedback.id}
                  >
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
          </Slider> */
