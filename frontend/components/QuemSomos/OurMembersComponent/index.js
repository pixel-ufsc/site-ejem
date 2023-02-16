import React, { Component } from 'react';
import styles from './ourmembers.module.css';
// Components
import MembersCard from './MembersCard';
// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Icons
import { BackwardArrowIcon, ForwardArrowIcon } from '../../../public/icons/icons';

export default class OurMembersComponent extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        const members = this.props.members.data;

        const settings = {
            infinite: false,
            arrows: false,
            slidesToScroll: 1,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1800,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };

        return (
            <section className={styles.sectionContainer}>
                <h1 className={styles.title}>Nossos membros</h1>

                <div className={styles.sliderContainer}>
                    <div className={styles.arrowButtonWrapper}>
                        <button
                            className={styles.arrowButton}
                            style={{ alignSelf: 'flex-end' }}
                            onClick={this.previous}
                        >
                            <BackwardArrowIcon />
                        </button>
                    </div>

                    <Slider ref={(c) => (this.slider = c)} {...settings}>
                        {members.map((member) => {
                            return (
                                <MembersCard
                                    key={member.id}
                                    id={member.id}
                                    nome={member.attributes.nome}
                                    cargo={member.attributes.cargo}
                                    foto={member.attributes.foto.data.attributes.formats.thumbnail.url}
                                />
                            );
                        })}
                    </Slider>

                    <div className={styles.arrowButtonWrapper}>
                        <button className={styles.arrowButton} style={{ alignSelf: 'flex-start' }} onClick={this.next}>
                            <ForwardArrowIcon />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
