import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/banners/big-sell.jpg'
import img2 from '../../../assets/images/banners/cash_back.jpg'
import img3 from '../../../assets/images/banners/flash-cell.jpg'
import img4 from '../../../assets/images/banners/Supper-sell.jpg'
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