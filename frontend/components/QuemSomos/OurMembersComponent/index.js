import styles from "./ourmembers.module.css";
import MembersCard from "./MembersCard"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ display: "block", background: "red"  }}
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

        const settings = {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 5, 
          swipeToSlide: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };
        return (
        <section className={styles.section}>
            <div className={styles.title}>Nossos membros</div>
            <Slider {...settings} className={styles.slider}>
              {members.map((member)=> {
                  return (
                    <div>
                      <h3>
                        <MembersCard 
                            id={member.id}
                            nome={member.attributes.nome}
                            cargo={member.attributes.cargo}
                            foto={member.attributes.foto.data.attributes.formats.thumbnail.url}
                          />
                      </h3>
                    </div>
                  )
              })}
              {/* <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3><MembersCard /></h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
              <div>
                <h3>9</h3>
              </div> */}
            </Slider>
          </section>
        );
      }
    }