import styles from "./ourmembers.module.css";
import MembersCard from "./MembersCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useEffect } from "react";
import Slider from "react-slick"; 

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red"  }}
        onClick={onClick}
      />
    );
  }


export default class OurMembersComponent extends Component{
    render() {
      const members = this.props.members.data
      // console.log(members[0].attributes.nome)  //nome
      // console.log(members[0].attributes.cargo) //cargo
      // console.log(members[0].attributes.foto.data.attributes.formats.thumbnail.url) //foto

      var settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5, 
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };

      // if (typeof window !== "undefined") {
      //   if (window.screen.availWidth < 880) {
      //     settings = {
      //       className: "center",
      //       infinite: true,
      //       centerPadding: "60px",
      //       slidesToShow: 1, 
      //       swipeToSlide: true,
      //       nextArrow: <SampleNextArrow />,
      //       prevArrow: <SamplePrevArrow />
      //     };
      //   }
      //   }
  
        return (
        <section className={styles.section}>
            <div className={styles.title}>Nossos membros</div>
            <Slider {...settings}>
              {members.map((member)=> {
                  return (
                        <MembersCard 
                            key={member.id}
                            id={member.id}
                            nome={member.attributes.nome}
                            cargo={member.attributes.cargo}
                            foto={member.attributes.foto.data.attributes.formats.thumbnail.url}
                          />
                  )
              })}
            </Slider>
          </section>
        );
      }
    }