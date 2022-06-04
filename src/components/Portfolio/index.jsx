import classNames from 'classnames/bind';
import Slider from 'react-slick/lib/slider';

// Fontawesome
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { itemsAPI } from './ItemAPI';
import styles from './Portfolio.module.scss';
import Item from './components/Item';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Portfolio() {
    const slideRef = useRef(null);

    const config = {
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3.5,
        initialSlide: 2,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        cssEase: 'linear',
        touchMove: true,
        arrows: true,
        ref: slideRef,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Slider {...config}>
                {itemsAPI.map((item, index) => (
                    <Item key={index} image={item.image} title={item.title} desc={item.desc} tags={item.tags} />
                ))}
            </Slider>
            <div className={cx('navigation')}>
                <button className={classNames('button-border button-primary', styles.btn)}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={cx('arrow-icon')}
                        onClick={() => slideRef.current.slickPrev()}
                    />
                </button>
                <button className={classNames('button-border button-primary', styles.btn)}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className={cx('arrow-icon')}
                        onClick={() => slideRef.current.slickNext()}
                    />
                </button>
            </div>
        </div>
    );
}

export default Portfolio;