import "./Carousels.css"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={1000}>
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6840.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6842.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6843.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption >
                    <h3> slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className=" carImg"
                    src="../imagenes/IMG_6841.jpg"
                    alt="Four slide"
                />


                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel