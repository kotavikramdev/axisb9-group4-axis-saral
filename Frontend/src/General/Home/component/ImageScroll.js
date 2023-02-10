import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import classes from '../style/ImageScroll.module.css';

function ImageScroll(props) {
    return (
        <div>
            <Carousel variant="dark" >
                <Carousel.Item>
                    <img
                        className={classes.imagescroll}
                        src="https://media.istockphoto.com/id/1369199360/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ujyGdu8jKI2UB5515XZA33Tt4DBhDU19dKSTUTMZvrg="
                        alt="Second slide"
                        width='1000rem'
                        height='500rem'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.imagescroll}
                        src="https://www.imageconsultinginstitute.com/wp-content/uploads/2022/07/soft-skill-activities-for-employees.jpg"
                        alt="First slide"
                        width='1000rem'
                        height='500rem'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={classes.imagescroll}
                        src="https://cdn.georgiatechbootcamp.com/wp-content/uploads/sites/95/2020/11/tes_dta_blog_image_6-800x412.jpg"
                        alt="Second slide"
                        width='1000rem'
                        height='500rem'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageScroll;