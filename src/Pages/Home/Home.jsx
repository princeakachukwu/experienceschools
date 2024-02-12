// import React from 'react'
import Home1 from "../../assets/IMAGES/home1.jpg";
import Home2 from "../../assets/IMAGES/d1.jpeg";
import Home3 from "../../assets/IMAGES/home3.jpg";
import Home4 from "../../assets/IMAGES/caro1.jpeg";
import Avatar from "../../assets/IMAGES/EXPERIENCE LOGO.png";
import Mon1 from "../../assets/IMAGES/MON1.jpeg";
import Holistic from "../../assets/IMAGES/holistic.jpg";
import ChildCentric from "../../assets/IMAGES/child-centric.jpg";
import Educators from "../../assets/IMAGES/educators.png";
import Global from "../../assets/IMAGES/GlobalPerspective.jpg";
import Community from "../../assets/IMAGES/Community.jpg";


function Home() {
  return (
    < >
      <div className="flex flex-col lg:flex-row items-start justify-start p-0 ">
        <div className="carousel box-border w-full lg:w-[70vw] h-[50vh] lg:h-[100vh]">
          <div id="slide1" className="carousel-item relative w-full"> 
            <img src={Home1} className="w-full h-[50vh] lg:h-[100vh]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
            <img src={Home2} className="w-full h-[50vh] lg:h-[100vh]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Home3} className="w-full h-[50vh] lg:h-[100vh]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Home4} className="w-full h-50vh lg:h-[100vh]" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>  
        <div className="w-full lg:w-[30%] bg-white md:bg-brightBlue h-[50vh] lg:h-[100vh] md:py-24 md:px-14 box-border m-0 flex flex-col items-center justify-center gap-10">
          <h1 className="text-4xl text-center text-darkBlue font-bold">Experierience International Schools</h1>
          <h3 className="text-textOrange text-center text-xl w-full"> We do not do different things, we do things differently.</h3>
          <button className="btn bg-textOrange text-white border-none hover:bg-darkBlue hover:shadow-md "> View More</button>
        </div> 
      </div>
      <div className="flex flex-wrap h-auto  gap-4 items-center justify-between bg-white p-14">
        <div className="pre-school background-set w-full h-[50vh] md:w-[47%] lg:flex-1 flex items-center justify-center rounded-md hover:shadow-md hover:border-4 hover:border-white text-lightBlue font-bold cursor-pointer text-2xl">Pre-School</div>
        <div className="kindergaten background-set w-full h-[50vh] md:w-[47%] lg:flex-1 flex items-center justify-center rounded-md hover:shadow-md hover:border-4 hover:border-white text-lightBlue font-bold cursor-pointer text-2xl">Kindergaten</div>
        <div className="nursery background-set w-full md:w-[47%] lg:flex-1 flex items-center justify-center rounded-md h-[50vh] hover:shadow-md hover:border-4 hover:border-white text-lightBlue font-bold cursor-pointer text-2xl">Basic</div>
        <div className="basic background-set w-full md:w-[47%] lg:flex-1 flex items-center justify-center rounded-md h-[50vh] hover:shadow-md hover:border-4 hover:border-white text-lightBlue font-bold cursor-pointer text-2xl"> Junior Secondary</div>
        <div className="secondary background-set w-full md:w-[47%] lg:flex-1 flex items-center justify-center rounded-md h-[50vh] hover:shadow-md hover:border-4 hover:border-white text-lightBlue font-bold cursor-pointer text-2xl">Senior secondary</div>
      </div> 
      <div className="grad background-set  flex items-center justify-center h-[100vh]"></div>
      <div className="h-[70vh] lg:h-[40vh] bg-white p-14 flex items-center justify-center cursor-pointer">
        <div className="stats shadow h-[100%] flex items-center justify-center flex-col md:flex-row bg-slate-50 w-[70vw]">
          <div className="stat flex flex-col items-center justify-center flex-1">
            <div className="stat-value text-textOrange">3+</div>
            <div className="stat-desc text-darkBlue">Campusses</div>
          </div>
          <div className="stat flex-1 flex flex-col items-center justify-center">
            <div className="stat-value text-textOrange">2000+</div>
            <div className="stat-desc text-darkBlue">Students Enrolled</div>
          </div>
          <div className="stat flex-1 flex flex-col items-center justify-center">
            <div className="stat-figure text-secondary">
            </div>
            <div className=" stat-value text-textOrange">100+</div>
            <div className="stat-desc text-darkBlue ">Teachers</div>
          </div>
          <div className="avata flex-1 flex items-center justify-center">
                <div className="w-20 rounded-full">
                  <img src={Avatar} className="statistics-flip" />
                </div>
              </div>
        </div>
      </div>
      <div className="min-h-[100vh] flex-col flex p-12 gap-14 items-center justify-center bg-white">
        <h1 className="why text-textOrange flex items-center justify-center  text-2xl font-bold font-serif"> WHY CHOOSE EXPERIENCE INTERNATIONAL SCHOOLS?</h1>
        <div className="flex  flex-col lg:flex-row flex-wrap h-auto w-full items-center justify-center p-4 gap-8">
          <div className="card w-full md:w-96  justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure className="h-[50%] w-full"><img src={Mon1} alt="car!" className="h-[100%] w-full" /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Montessori Philosophy</h2>
              <p className="text-slate-700 bg- text-justify text-sm">EMIS follows the Montessori educational philosophy, which emphasizes child-led learning, hands-on experiences, and individualized instruction. This approach fosters independence, creativity, and a love for learning in students.</p>
            </div>
          </div>
          <div className="card w-full md:w-96  justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure className="h-[50%] w-full"><img src={Holistic} alt="car!" className="h-[100%] w-full" /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Holistic Development</h2>
              <p className="text-slate-700 bg- text-justify text-sm">EMIS focuses on the holistic development of children, addressing their cognitive, social, emotional, and physical needs. Through a well-rounded curriculum and enriching activities, students develop into well-balanced individuals.</p>
            </div>
          </div>
          <div className="card w-full md:w-96  justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure  className="h-[50%] w-full flex items-center justify-center "><img src={ChildCentric} alt="car!" className="h-[100%] " /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Child-Centric </h2>
              <p className="text-slate-700 bg- text-justify text-sm"> The learning environment  is carefully designed to meet the needs and interests of each child. Classrooms are prepared with Montessori materials and offer a peaceful, respectful atmosphere where children can thrive.</p>
            </div>
          </div>
          <div className="card w-full md:w-96 justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure  className="h-[50%] w-full"><img src={Educators} alt="car!" className="h-[100%] w-full" /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Qualified Educators</h2>
              <p className="text-slate-700 bg- text-justify text-sm"> EMIS employs trained Montessori educators who are passionate about working with children. These teachers understand the Montessori method and are committed to nurturing the unique potential of each student.</p>
            </div>
          </div>
          <div className="card w-full md:w-96 justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure  className="h-[50%] w-full"><img src={Global} alt="car!" className="h-[100%] w-full" /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Global Perspective</h2>
              <p className="text-slate-700 bg- text-justify text-sm">  As an international school, EMIS provides students with opportunities to explore diverse cultures, languages, and perspectives. This global exposure prepares students to become responsible global citizens in an interconnected world.</p>
            </div>
          </div>
          <div className="card w-full md:w-96  justify-center items-start bg-white h-[70vh] shadow-lg cursor-pointer hover:border-white hover:border-4">
            <figure  className="h-[50%] w-full"><img src={Community} alt="car!" className="h-[100%] w-full" /></figure>
            <div className="card-body h-[50%] items-center justify-center">
              <h2 className="text-textOrange">Community Involvement </h2>
              <p className="text-slate-700 bg- text-justify text-sm"> EMIS values parent involvement and fosters a strong sense of community among students, parents, and staff. Regular communication and collaboration between school and home contribute to the overall success of students.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home