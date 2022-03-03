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
                    className="d-block w-100 carImg"
                    src="https://lospostresdekelly.com/wp-content/uploads/2020/02/IMG_5637-1.jpeg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 carImg"
                    src="https://lospostresdekelly.com/wp-content/uploads/2020/02/IMG_7557-1.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption >
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 carImg"
                    src="https://lospostresdekelly.com/wp-content/uploads/2020/02/IMG_3664.jpeg"
                    alt="Third slide"
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