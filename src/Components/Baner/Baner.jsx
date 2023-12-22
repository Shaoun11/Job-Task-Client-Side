import React from 'react';

const Banner = () => {
    return (
        <div>
             <div >
            <div className="carousel sm:w-full w-[370px] h-[500px] sm:h-[775px] ">
  <div id="slide1" className="carousel-item relative sm:w-full w-[370px] h-[500px] sm:h-[775px] ">
    <img src='https://geekbot.com/blog/wp-content/uploads/2021/04/3_-7-hard-to-get-tips-for-effortless-task-management-in-Slack-1920x1080.jpg' className="sm:w-full object-cover w-[370px] h-[500px] sm:h-[775px]  " />
    <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16  lg:w-1/2 md:w-1/2 w-5/6'>
    <h2 className='lg:text-6xl md:text-3xl text-2xl lg:pb-5  pb-3 text-white  font-bold' >Efficiency Empowered Managing Tasks, Maximizing Results!</h2>
     <p className='lg:text-lg lg:pb-3 pb-2 text-base font-medium text-[#FFF]'>A Comprehensive Guide to Managing Tasks Effectively in 20 Simple Steps</p>
     <button className='btn btn-outline btn-secondary ' >Let’s Explore</button>
    </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative sm:w-full w-[370px] h-[500px] sm:h-[775px] ">
    <img src='https://i.ibb.co/znNshfL/Untitled-design-7.png' className="sm:w-full object-cover w-[370px] h-[500px] sm:h-[775px] " />
    <div className="absolute bg-gradient-to-r from-[#151519] to-rgba(21, 21, 21, 0.00) 100%)  flex h-full  top-0 left-0 items-center  ">
    <div className=' pl-16  lg:w-1/2 w-5/6'>
    <h2 className='lg:text-6xl md:text-3xl lg:pb-5 pb-3 text-xl text-white font-bold' >Efficiency Empowered Managing Tasks, Maximizing Results!</h2>
     <p className='lg:text-lg text-base lg:pb-5 pb-3 font-medium text-[#FFF]'>A Comprehensive Guide to Managing Tasks Effectively in 20 Simple Steps</p>
     <button className='btn btn-outline btn-secondary ' >Let’s Explore</button>
     </div>
    </div>
    <div className="absolute flex bottom-0 justify-end gap-5 transform -translate-y-1/2 left-5 right-5 ">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 

</div>
            </div>
        </div>
    );
};

export default Banner;