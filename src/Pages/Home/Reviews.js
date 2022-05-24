import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import people1 from '../../Asseets/Images/people1.png'

const Reviews = () => {
     const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("reviews.json").then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div  className="px-16 mx-auto my-16">
            <p className="text-center text-2xl mb-4">Have a look at what our <span className="text-secondary">clients</span> say!</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide><div className="card w-86 shadow text-primary-content mx-auto ">
                        <div className="card-body">
                            <p className='mb-5'>{review.comment}</p>
                            <div className="flex items-center">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={people1} alt="" />
                                    </div>
                                </div>
                                <div className='ml-3'>
                                    <h2 className="card-title">{review.name}</h2>


                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;