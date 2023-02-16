import styles from './ourstatement.module.css';
import LargeCard from '../../Shared/LargeCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

export default class OurStatementComponent extends Component {
    render() {
        const statements = this.props.statementsData?.data ? this.props.statementsData.data : [];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };

        return (
            <section className={styles.sectionContainer}>
                <h1 className={styles.title}>Depoimentos</h1>

                <Slider {...settings}>
                    {statements.map((statement) => {
                        return (
                            <LargeCard
                                key={statement.id}
                                id={statement.id}
                                title={statement.attributes.nome}
                                subtitle={statement.attributes.cargo}
                                description={statement.attributes.textoDepoimento}
                                imageUrl={statement.attributes.foto.data[0].attributes.formats.thumbnail.url}
                            />
                        );
                    })}
                </Slider>
            </section>
        );
    }
}
