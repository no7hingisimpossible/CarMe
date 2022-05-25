// import React from 'react';

// const Carousel = () => {
//     return (
//         <div class="carousel w-full">
//             <div id="slide1" class="carousel-item relative w-full">
//                 <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-1.jpg?v=1643197493" class="w-full" alt=""/> 
//                     <div class="absolute lg:left-10 lg:top-[90px] left-5 top-[30px] w-[200px] lg:w-[350px]">
//                         <p class="text-primary lg:text-2xl text-xl-1 font-bold">Get up to 50% off Today Only!</p>
//                         <p class="lg:text-7xl  text-2xl text-neutral font-bold">Summer Sale for Auto Parts!</p>
//                     </div>
//                     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                         <a href="#slide4" class="btn bg-transparent border-0 hover:bg-primary">❮</a>
//                         <a href="#slide2" class="btn bg-transparent  border-0 hover:bg-primary">❯</a>
//                     </div>
//             </div>
//             <div id="slide2" class="carousel-item relative w-full">
                
//                 <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-2_0d7abea0-79ef-425d-8940-ab3a2f483b1e.jpg?v=1643198892" 
//                 class="w-full" alt=""/> /
//                      <div class="absolute left-10 top-[90px] w-[350px]">
//                         <p class="text-secondary text-2xl font-bold">50% off in all products</p>
//                         <p class="text-7xl text-neutral font-bold">Latest & Powerful Engine For You</p>
//                     </div>
//                     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                         <a href="#slide1" class="btn bg-transparent border-0 hover:bg-primary">❮</a>
//                         <a href="#slide3" class="btn bg-transparent border-0 hover:bg-primary">❯</a>
                        
//                     </div>
//             </div>
//             <div id="slide3" class="carousel-item relative w-full">
//                 <img src="https://cdn.shopify.com/s/files/1/0022/7714/6682/files/slider-1-1.jpg?v=1643197493" class="w-full" alt=""/> /
                
//                 <div class="absolute left-10 top-[90px] w-[550px]">
//                         <p class="text-secondary text-2xl font-bold">Get up to 50% off Today Only!</p>
//                         <p class="text-7xl text-neutral font-bold">Summer & Powerful Engine For You</p>
//                     </div>
//                     <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                         <a href="#slide2" class="btn bg-transparent border-0 hover:bg-primary">❮</a>
//                         <a href="#slide4" class="btn bg-transparent border-0 hover:bg-primary">❯</a>
//                     </div>
//             </div>
            
//         </div>



//         // Purchase backup --------------------------------------------------------------------------
//         <div class="hero min-h-screen bg-base-100">
//             <div class="hero-content flex-col lg:flex-row">
//                 <img src={product.image} alt="" class="max-w-sm rounded-lg shadow-2xl" />
//                 <div class="w-50% border">
//                     <h1 class="text-5xl font-bold">{product.name}</h1>
//                     <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <p>MOQ: {product.MOQ}</p>
//                     <p>Available Qunatity: {product.quantity}</p>
//                     <p>Quantity Ordered : {order}</p>
//                     <button class="btn btn-primary mb-5" onClick={purchaseHandler}>Proceed</button>
//                     <div className="col-xl-1">
//                         <div class="input-group">
//                             <div>
//                                 <button class="btn btn-primary" onClick={decreaseQuantity}>-</button>
//                             </div>
//                             <input type="text" class="" value={order} onChange={handleChange} />
//                             <div>
//                                 <button class="btn btn-primary" onClick={increaseQuantity}>+</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// };

// export default Carousel;