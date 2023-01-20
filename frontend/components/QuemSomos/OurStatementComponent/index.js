import styles from "./ourstatement.module.css";
import StatementCard from "./StatementCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class OurStatementComponent extends Component {
    render() {
      const statements = this.props.statements.data
      console.log(statements)
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
                {statements.map((statement)=>{
                    return (
                        <StatementCard 
                            id={statement.id}
                            nome={statement.attributes.nome}
                            cargo={statement.attributes.cargo}
                            textoDepoimento={statement.attributes.textoDepoimento}
                            foto={statement.attributes.foto.data[0].attributes.formats.thumbnail.url}
                          />
                    )
                }) }
                {/* <div>
                    <StatementCard></StatementCard>
                </div>
                <div>
                    <StatementCard></StatementCard>
                </div>
                <div>
                    <StatementCard></StatementCard>
                </div> */}
            </Slider>
            {/* <Slider {...settings} className={styles.slider}>
              {statements.map((statement)=> {
                  return (
                    <div>
                        <StatementCard 
                            id={statement.id}
                            nome={statement.attributes.nome}
                            cargo={statement.attributes.cargo}
                            textoDepoimento={statement.attributes.textoDepoimento}
                            foto={statement.attributes.foto.data.attributes.formats.thumbnail.url}
                          />
                    </div>
                  )
              })}
            </Slider> */}
            <section className={styles.section3}/>
        </section>
      );
    }
  }