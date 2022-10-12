import Carousel from 'react-bootstrap/Carousel';
import photo2 from '/Users/George/Documents/Projects/beard/src/image/photo2.jpg'
import photo3 from '/Users/George/Documents/Projects/beard/src/image/photo3.jpg'
function HomeCarousel() {
  return (
 
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo3}
          alt="First slide"
        />
        <Carousel.Caption >
          <h5 bg='secondary'>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}

export default HomeCarousel;