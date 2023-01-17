import styles from "./ourstatement.module.css";
import StatementCard from "./StatementCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class OurStatementComponent extends Component {
    render() {
      const statement = this.props.statements.data
      console.log(statement)
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
                    Depoimentos    
                </div>
            </section>
            <Slider {...settings}>
                <div>
                    <StatementCard></StatementCard>
                </div>
                <div>
                    <StatementCard></StatementCard>
                </div>
                <div>
                    <StatementCard></StatementCard>
                </div>
            </Slider>
            <section className={styles.section3}/>
        </section>
      );
    }
  }