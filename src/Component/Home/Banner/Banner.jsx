import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/banners/banner5.jpg'
import img2 from '../../../assets/images/banners/banner2.jpg'
import img3 from '../../../assets/images/banners/banner3.jpg'
import img4 from '../../../assets/images/banners/banner4.jpg'
const Banner = () => {



    return (
        <Carousel showArrows={true} autoPlay={true} >
            <div className="h-[400px]">
                <img className="h-full " src={img1} />
            </div>
            <div className="h-[400px]">
                <img className="h-full " src={img2} />
            </div>
            <div className="h-[400px]">
                <img className="h-full " src={img3} />
            </div>
            <div className="h-[400px]">
                <img className="h-full " src={img4} />
            </div>
        </Carousel>
    );
};

export default Banner;