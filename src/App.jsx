import { FaArrowRight, FaCode, FaDatabase, FaDownload, FaGraduationCap, FaLinkedinIn, FaLock, FaPaperPlane, FaServer, FaTools, FaUser } from 'react-icons/fa'
import krLogo from './images/kr_logo.png'
import mainImage from './images/main_image.png'
// import mainImage from './images/m2.png'
import codeDetailImage from './images/code_details.png'
import './App.css'
import { FaCalendarDays, FaCartShopping, FaComputer, FaDesktop, FaDisplay, FaEnvelope, FaFolderOpen, FaGithub, FaLaptopCode, FaLocationDot, FaPhone, FaPhoneFlip, FaShip, FaUserGroup, FaVolleyball } from 'react-icons/fa6'
import resume from '../public/Karan_Resume.pdf'
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

// bg- #0B141C, #050a0f
// highlight - #00ADB5
// card - #141d2a
// text - white
// experience text - #CAD4DA


function App() {
  
  const form = useRef();

  const [disabled, setDisabled] = useState(false);

const sendEmail = async (e) => {
  e.preventDefault();

  setDisabled(true);

  try {
    await emailjs.sendForm(
      "service_at_karan",
      "template_pn28d4g",
      form.current,
      "lk2vjeWBygmTXXIQF"
    );

    alert("Message sent successfully!");
    form.current.reset();
  } catch (error) {
    console.log(error);
  }

  setTimeout(() => {
    setDisabled(false);
  }, 5000);
};

  
 

  return (
    <div className='bg-[#050a0f] text-white'>

      <nav className='flex items-center justify-center sticky top-0 backdrop-blur-md scroll-smooth'>
        <div className='w-[95%] h-15 bg-[#141d2a] border-[#222831] shadow-lg rounded-xl flex items-center justify-between px-4 mt-2 max-sm:full max-sm:justify-between max-sm:gap-5'>
          <div className='border-0 w-[15%] pl-2 max-sm:w-[10%] max-sm:pl-0'> <img src= { krLogo } alt="KR Logo" className='h-10'/> </div>
          <div className='flex items-center justify-around w-[85%] border-0 text-[17px] max-sm:w-[70%] max-sm:overflow-y-hidden'>
            <ul className='flex gap-10'>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="/#"> Home </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="#about"> About </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="#skills"> Skills </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="#projects"> Projects </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="#experience"> Experience </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
              <li className='text-white py-2 hover:text-[#00ADB5] cursor-pointer relative group transition-all duration-200'>
                <a href="#contact"> Contact </a>
                <div className='absolute bottom-0 bg-[#00ADB5] w-full h-0.5 hidden group-hover:block transition-all duration-200'></div>
              </li>
            </ul>
          </div>
          <div className='w-[20%] border-0 flex items-center justify-center max-sm:w-[10%] sm:w-60'>
            <a href={resume} download>
              <button className='flex items-center gap-2 border-0 rounded-md bg-[#00ADB5] p-2 px-4 hover:cursor-pointer'> <span className='max-sm:hidden'> Download resume </span> <FaDownload/> </button>
            </a>
          </div>
        </div>
      </nav>


      {/* ........... Home section ............. */}

      <div className='h-100 flex justify-center max-sm:h-auto'>

        <div className='mt-7 w-[93%] flex max-sm:flex-col'>
          
          <div className='w-[50%] pl-5 py-5 border-0 max-sm:w-full'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#00ADB5] text-xl font-medium'> Hi, I'm</p>
              <h1 className='text-5xl font-bold'> Karan <span className='text-[#00ADB5]'> Rathod </span> </h1>
              <p className='text-2xl font-semibold'> Full stack Developer </p>
            </div>
            <div className='mt-5 text-base w-[50%] max-sm:w-full'>
              <p> I build modern website and web applications with clean code and great user experience. </p>
            </div>
            <div className='mt-5 flex gap-5'>
              <a href="#projects">
                <button className='border-0 w-35 h-10 rounded-lg flex items-center justify-center gap-2 bg-[#00ADB5] text-sm hover:text-[#00ADB5] hover:bg-[#050a0f] hover:border-2 hover:border-[#00ADB5] hover:cursor-pointer'> View Projects <FaArrowRight/> </button>
              </a>
              <a href="#contact">
                <button className='border-2 border-[#00ADB5] text-[#00ADB5] w-35 h-10 rounded-lg flex items-center justify-center gap-2 text-sm hover:cursor-pointer hover:bg-[#00ADB5] hover:text-white'> Contact Me <FaPaperPlane/> </button>
              </a>
            </div>
          </div>
          
          <div className='pl-20 flex max-sm:pl-0 max-sm:items-center max-sm:justify-center max-sm:mt-5'>
            <img src={mainImage} alt="" className='h-85 max-sm:h-60'/>
            {/*  drop-shadow-[0_0_10px_#00ADB5] */}
          </div>

        </div>

      </div>



      {/* .......... About section ............... */}

      <div className='flex justify-center scroll-mt-24' id='about'>

        <div className='w-[93%] border-0 flex max-sm:flex-col'>

          <div className='w-[50%] flex flex-col py-5 pl-5 border-0 max-sm:w-full max-sm:mt-5'>

            <div className=''>
              <h2 className='flex flex-row text-2xl font-medium items-center gap-3'> <FaUser className='text-[#00ADB5]'/> About Me </h2>
              <p className='mt-3 ml-9 text-lg text-[#CAD4DA]'> I'm a web developer with hands-on experience building dynamic and responsive web applications. Skilled in HTML, CSS, JavaScript, PHP, MySQL, and Laravel, I enjoy turning ideas into real-world projects that solve problems, enhance user experiences, and deliver meaningful value. I focus on creating efficient, user-friendly solutions through clean, maintainable, and scalable code. </p>
            </div>

            <div className='py-10'>
              <h2 className='flex flex-row text-2xl font-medium items-center gap-3'> <FaGraduationCap className='text-[#00ADB5] text-2xl'/> Education </h2>
              <p className='mt-3 ml-9 text-lg text-[#CAD4DA]'> B.E. in Computer Engineering </p>
              <p className='mt-2 ml-9 text-lg text-[#CAD4DA]'> 2022 - 2026 </p>
            </div>

            {/* ............. Skill section .......... */} 
            
            <div className='py-5 scroll-mt-22 border-0' id='skills'>
              <h2 className='flex flex-row text-2xl font-medium items-center gap-3'> <FaCode className='text-[#00ADB5]'/> Skills </h2>
              <div className='grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1 max-sm:mt-2'>

                <div className='w-[90%] bg-[#141d2a] border border-[#00ADB5] rounded-xl p-5 ml-5 my-3 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5]'>
                  <h3 className='flex flex-row text-xl items-center gap-3'> <FaLaptopCode className='text-[#00ADB5] text-2xl'/> Frontend </h3>
                  <ul className='mt-3 ml-9 text-lg text-[#CAD4DA] list-disc marker:text-[#00ADB5]'>
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> JavaScript </li>
                    <li> React.js </li>
                    <li> Tailwind CSS </li>
                  </ul>
                </div>
                <div className='w-[90%] bg-[#141d2a] border border-[#00ADB5] rounded-xl p-5 ml-5 my-3 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5]'>
                  <h3 className='flex flex-row text-xl items-center gap-3'> <FaServer className='text-[#00ADB5] text-2xl'/> Backend </h3>
                  <ul className='mt-3 ml-9 text-lg text-[#CAD4DA] list-disc marker:text-[#00ADB5]'>
                    <li> PHP </li>
                    <li> Laravel </li>
                  </ul>
                </div>
                <div className='w-[90%] bg-[#141d2a] h-40 border border-[#00ADB5] rounded-xl p-5 ml-5 my-2 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] sm:h-47'>
                  <h3 className='flex flex-row text-xl items-center gap-3'> <FaDatabase className='text-[#00ADB5] text-2xl'/> Database </h3>
                  <ul className='mt-3 ml-9 text-lg text-[#CAD4DA] list-disc marker:text-[#00ADB5]'>
                    <li> MySQL </li>
                  </ul>
                </div>
                <div className='w-[90%] bg-[#141d2a] h-40 border border-[#00ADB5] rounded-xl p-5 ml-5 my-2 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] sm:h-47'>
                  <h3 className='flex flex-row text-xl items-center gap-3'> <FaTools className='text-[#00ADB5] text-2xl'/> Tools & Platforms </h3>
                  <ul className='mt-3 ml-9 text-lg text-[#CAD4DA] list-disc marker:text-[#00ADB5]'>
                    <li> Git </li>
                    <li> GitHub </li>
                    <li> VS Code </li>
                  </ul>
                </div>

              </div>

            </div>

          </div>

          <div className='w-[50%] flex items-center justify-center max-sm:w-full'>
            <img src={codeDetailImage} alt="" className='mt-10'/>
          </div>

        </div>

      </div>


      {/* ............ Project section ................ */}

      <div className='flex justify-center scroll-mt-24' id='projects'>

        <div className='h-150 w-[93%] border-0 flex max-sm:h-full sm:h-full'>

          <div className='w-full flex flex-col py-5 pl-5 border-0'>
            <h2 className='flex flex-row text-2xl  font-medium items-center gap-3'> <FaFolderOpen className='text-[#00ADB5]'/> Projects </h2>
            
            <div className='my-2 py-5 pl-10 grid grid-cols-2 grid-rows-2 max-sm:grid-cols-1'>

              <div className='border border-[#00ADB5] rounded-lg bg-[#141d2a] w-[90%] h-55 p-5 flex gap-7 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-full max-sm:p-3 max-sm:h-80 sm:h-full'>
                <div className='border border-[#00ADB5] py-4 w-[13%] h-16 flex items-center justify-center rounded-md max-sm:w-15 max-sm:h-15'>     
                  <FaLock className='text-[#00ADB5] text-3xl'/> 
                </div>
                <div className='border-0 w-[80%]'>
                  <h3 className='text-2xl'> e-Locker </h3>
                  <p className='text-[#00ADB5]'> Document Management System </p>
                  <div className='border-t border-[#00ADB5] my-2'></div>
                  <ul className='list-disc text-lg text-[#CAD4DA] mx-5 marker:text-[#00ADB5] max-sm:text-base max-sm:mx-1'>
                    <li>
                      Built a secure web-based document storage system with email OTP–based user registration.
                    </li>
                    <li>
                      Enabled users to upload documents and share them via email in PDF format.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='border border-[#00ADB5] rounded-lg bg-[#141d2a] w-[90%] h-55 p-5 flex gap-7 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-full max-sm:p-3 max-sm:mt-5 max-sm:h-80 sm:h-full'>
                <div className='border border-[#00ADB5] py-4 w-[13%] h-16 flex items-center justify-center rounded-md max-sm:w-15 max-sm:h-15'>     
                  <FaCartShopping className='text-[#00ADB5] text-3xl'/> 
                </div>
                <div className='border-0 w-[80%]'>
                  <h3 className='text-2xl'> SuperMall </h3>
                  <p className='text-[#00ADB5]'> Vendor & Shop Management System </p>
                  <div className='border-t border-[#00ADB5] my-2'></div>
                  <ul className='list-disc text-lg text-[#CAD4DA] mx-5 marker:text-[#00ADB5] max-sm:text-base max-sm:mx-1'>
                    <li>
                      Developed a platform where vendors can add and manage shop details.
                    </li>
                    <li>
                      Implemented admin control and user-side filtering to view shop information.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='border border-[#00ADB5] rounded-lg bg-[#141d2a] w-[90%] h-55 p-5 my-2 flex gap-7 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-full max-sm:p-3 max-sm:mt-10 max-sm:h-95 sm:h-full sm:mt-5'>
                <div className='border border-[#00ADB5] py-4 w-[13%] h-16 flex items-center justify-center rounded-md max-sm:w-15 max-sm:h-15'>     
                  <FaShip className='text-[#00ADB5] text-3xl'/> 
                </div>
                <div className='border-0 w-[80%]'>
                  <h3 className='text-2xl'> Cruise Ship Management System </h3>
                  <p className='text-[#00ADB5]'> Booking & Order Management </p>
                  <div className='border-t border-[#00ADB5] my-2'></div>
                  <ul className='list-disc text-lg text-[#CAD4DA] mx-5 marker:text-[#00ADB5] max-sm:text-base max-sm:mx-1'>
                    <li>
                      Created a system for voyagers to book shows and place orders during a cruise.
                    </li>
                    <li>
                      Allowed staff and managers to track orders and bookings by voyager and room.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='border border-[#00ADB5] rounded-lg bg-[#141d2a] w-[90%] h-55 p-5 my-2 flex gap-7 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-full max-sm:p-3 max-sm:mt-7 max-sm:h-70 sm:h-full sm:mt-5'>
                <div className='border border-[#00ADB5] py-4 w-[13%] h-16 flex items-center justify-center rounded-md max-sm:w-15 max-sm:h-15'>     
                  <FaVolleyball className='text-[#00ADB5] text-3xl'/> 
                </div>
                <div className='border-0 w-[80%]'>
                  <h3 className='text-2xl'> Sports Buddy </h3>
                  <p className='text-[#00ADB5]'> Sports Event Management Platform </p>
                  <div className='border-t border-[#00ADB5] my-2'></div>
                  <ul className='list-disc text-lg text-[#CAD4DA] mx-5 marker:text-[#00ADB5] max-sm:text-base max-sm:mx-1'>
                    <li>
                      Built a platform where users can add sports event details.
                    </li>
                    <li>
                      Enabled visitors to view event location and schedule easily.
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>

          </div>

        </div>

      </div>



      {/* ................. Experience section ................. */}

      <div className='flex justify-center scroll-mt-24' id='experience'>
        
        <div className='h-155 w-[93%] border-0 flex max-sm:h-full sm:h-full'>

          <div className='w-full flex flex-col py-5 pl-5 border-0'>
            <h2 className='flex flex-row text-2xl  font-medium items-center gap-3'> <FaFolderOpen className='text-[#00ADB5]'/> Experience </h2>

            <div className='flex max-sm:gap-5'>

              <div className='border-0 w-[15%] my-5 flex items-center justify-center flex-col'>

                <div className='text-[#00ADB5] border border-[#00ADB5] bg-[#141d2a] h-15 w-20 flex items-center justify-center text-2xl rounded-lg shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-10 max-sm:h-10'>
                  <FaCode/>
                </div>
                {/* <div className='border border-[#00ADB5] h-30'></div> */}
                <div className="relative flex justify-center">
                    {/* Vertical Line */}
                    <div className="w-0.5 h-30 bg-[#00ADB5] rounded-full shadow-[0_0_8px_#00ADB5] max-sm:h-40"></div>
                    {/* Center Dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00ADB5]"></div>
                </div>
                <div className='text-[#00ADB5] border border-[#00ADB5] bg-[#141d2a] h-15 w-20 flex items-center justify-center text-2xl rounded-lg shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-10 max-sm:h-10'>
                  <FaDisplay/>
                </div>
                {/* <div className='border border-[#00ADB5] h-30 rounded-full shadow-[0_0_8px_#00ADB5]'></div> */}
                <div className="relative flex justify-center">
                    {/* Vertical Line */}
                    <div className="w-0.5 h-30 bg-[#00ADB5] rounded-full shadow-[0_0_8px_#00ADB5] max-sm:h-40"></div>
                    {/* Center Dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00ADB5]"></div>
                </div>
                <div className='text-[#00ADB5] border border-[#00ADB5] bg-[#141d2a] h-15 w-20 flex items-center justify-center text-2xl rounded-lg shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-10 max-sm:h-10'>
                  <FaGraduationCap/>
                </div>

              </div>

              <div>

                <div className='border border-[#00ADB5] bg-[#141d2a] w-[85%] flex gap-10 my-5 p-5 rounded-xl h-40 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-70 max-sm:h-45 max-xl:w-full'>
                  <div className='w-100'>
                    <h3 className='text-lg'> Full Stack Web Developer Intern (Online) </h3>
                    <p className='text-[#00ADB5]'> Unified Mentor </p>
                    <p className='text-[#00ADB5]'> (ISO-Certified & AICTE-Approved) </p>
                    <p className='text-[#CAD4DA] flex items-center gap-3 my-2'> <FaCalendarDays/> Oct 2025 - Jan 2026 </p>
                  </div>
                  <div className='w-130 text-[17px] max-xl:hidden'>
                    <ul className='list-disc text-[#CAD4DA] marker:text-[#00ADB5]'>
                      <li> Built full-stack web applications using HTML, CSS, JavaScript, PHP, MySQL. </li>
                      <li> Worked on authentication, CRUD operations, and admin panels. </li>
                      <li> Letter of Recommendation (LOR) received. </li>
                    </ul>
                  </div>
                </div>
                <div className='border border-[#00ADB5] bg-[#141d2a] w-[85%] flex gap-10 my-5 p-5 rounded-xl h-40 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-70 max-sm:h-50 max-xl:w-full'>
                  <div className='w-100'>
                    <h3 className='text-lg'> Web Technology (PHP)– Offline Training </h3>
                    <p className='text-[#00ADB5]'> ROBERT F SMITH TECHNOLOGY CENTER, </p>
                    <p className='text-[#00ADB5]'> Sarjan Foundation </p>
                    <p className='text-[#CAD4DA] flex items-center gap-3 my-2'> <FaCalendarDays/> Nov 2024 - Mar 2025 </p>
                  </div>
                  <div className='w-130 text-[17px] max-xl:hidden'>
                    <ul className='list-disc text-[#CAD4DA] marker:text-[#00ADB5]'>
                      <li> PHP &MySQL backend development and server-side logic. </li>
                    </ul>
                  </div>
                </div>
                <div className='border border-[#00ADB5] bg-[#141d2a] w-[85%] flex gap-10 my-5 p-5 rounded-xl h-40 shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] max-sm:w-70 max-sm:h-45 max-xl:w-full'>
                  <div className='w-100'>
                    <h3 className='text-lg'> Web Development Intern (Online) </h3>
                    <p className='text-[#00ADB5]'> Acmegrade </p>
                    <p className='text-[#00ADB5] invisible'> (ISO-Certified & AICTE-Approved) </p>
                    <p className='text-[#CAD4DA] flex items-center gap-3 my-2'> <FaCalendarDays/> Nov 2024– Dec 2024 </p>
                  </div>
                  <div className='w-130 text-[17px] max-xl:hidden'>
                    <ul className='list-disc text-[#CAD4DA] marker:text-[#00ADB5]'>
                      <li> Web development fundamentals (HTML, CSS, JS, PHP). </li>
                    </ul>
                  </div>
                </div>
                
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ............ Contact section ............. */}

      <div className='flex justify-center scroll-mt-24' id='contact'>
        
        <div className='h-250 w-[93%] border-0 flex max-sm:h-full max-xl:h-full'>

          <div className='w-full flex flex-col py-5 pl-5 border-0'>
            <h2 className='flex flex-row text-2xl  font-medium items-center gap-3'> <FaEnvelope className='text-[#00ADB5]'/> Contact </h2>

            <div className='my-5 pl-10 border-0 flex gap-15 max-sm:flex-col max-sm:pl-0 max-xl:flex-col max-xl:'>

              <div>
                <h3> Have a project in mind or want to work together?</h3>
                <h3> Feel free to reach out. I'll get back to you as soon as possible. </h3>
                <div className='py-5'>
                  <div className='border border-[#141d2a] bg-[#141d2a] w-125 flex items-center p-5 mt-0.5 rounded-lg gap-7 max-sm:w-full max-sm:p-3'>
                    <div className='text-[#00ADB5] h-15 w-15 flex items-center justify-center rounded-lg text-3xl border max-sm:p-3'> <FaEnvelope/> </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[17px]'> Email </h3>
                      <p className='text-[#00ADB5] text-[17px]'> 
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karanrathod8225@gmail.com" target='_blank'>
                          karanrathod8225@gmail.com
                        </a> 
                      </p>
                    </div>
                  </div>
                  <div className='border border-[#141d2a] bg-[#141d2a] w-125 flex items-center p-5 mt-0.5 rounded-lg gap-7 max-sm:w-full max-sm:p-3'>
                    <div className='text-[#00ADB5] h-15 w-15 flex items-center justify-center rounded-lg text-3xl border max-sm:p-3'> <FaPhone/> </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[17px]'> Phone </h3>
                      <p className='text-[#00ADB5] text-[17px]'>
                        <a href={`tel:${+917228845156}`}>
                          +91 72288 45156
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='border border-[#141d2a] bg-[#141d2a] w-125 flex items-center p-5 mt-0.5 rounded-lg gap-7 max-sm:w-full max-sm:p-3'>
                    <div className='text-[#00ADB5] h-15 w-15 flex items-center justify-center rounded-lg text-3xl border max-sm:p-3'> <FaLocationDot/> </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[17px]'> Location </h3>
                      <p className='text-[#00ADB5] text-[17px]'> Palanpur, Gujarat, India </p>
                    </div>
                  </div>
                  <div className='border border-[#141d2a] bg-[#141d2a] w-125 flex items-center p-5 mt-0.5 rounded-lg gap-7 max-sm:w-full max-sm:p-3'>
                    <div className='text-[#00ADB5] h-15 w-15 flex items-center justify-center rounded-lg text-3xl border max-sm:p-3'> <FaLinkedinIn/> </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[17px]'> LinkedIn </h3>
                      <p className='text-[#00ADB5] text-[17px]'>
                        <a href="https://www.linkedin.com/in/karan-rathod-045180300/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxLhvUOwQTpKYzwn8su%2FoOA%3D%3D" target="_blank">
                          linkedin.com/in/karan-rathod
                        </a>  
                      </p>
                    </div>
                  </div>
                  <div className='border border-[#141d2a] bg-[#141d2a] w-125 flex items-center p-5 mt-0.5 rounded-lg gap-7 max-sm:w-full max-sm:p-3'>
                    <div className='text-[#00ADB5] h-15 w-15 flex items-center justify-center rounded-lg text-3xl border max-sm:p-4'> <FaGithub/> </div>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-[17px]'> Github </h3>
                      <p className='text-[#00ADB5] text-[17px] max-sm:w-50.5 max-sm:overflow-y-hidden'>
                        <a href="https://github.com/karanrathod110504" target="_blank">
                          github.com/karanrathod110504
                        </a> 
                      </p>
                    </div>
                  </div>
                </div>

                <div className='w-125 border rounded-lg p-5 flex flex-col gap-3 border-[#141d2a] bg-[#141d2a] max-sm:w-full'>
                  <div className='text-[#00ADB5] flex items-center gap-2'>
                    <h3 className='text-xl w-40 flex gap-3 items-center'> <FaUserGroup/> <span className=' font-medium'> Let's Connect </span> </h3>
                    <div className='border-b w-75 max-sm:hidden'></div>
                  </div>
                  <p> I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. </p>
                  <div className='mt-2 flex gap-7 text-2xl text-[#00ADB5]'>
                    <div className='h-12 w-12 border border-[#00ADB5] rounded-full flex items-center justify-center shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] bg-[#141d2a]'>
                      <a href="https://www.linkedin.com/in/karan-rathod-045180300/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxLhvUOwQTpKYzwn8su%2FoOA%3D%3D" target="_blank">
                        <FaLinkedinIn/> 
                      </a> 
                    </div>
                    <div className='h-12 w-12 border border-[#00ADB5] rounded-full flex items-center justify-center shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] bg-[#141d2a]'> 
                      <a href="https://github.com/karanrathod110504" target='_blank'> 
                        <FaGithub/>
                      </a> 
                    </div>
                    <div className='h-12 w-12 border border-[#00ADB5] rounded-full flex items-center justify-center shadow-[0_0_3px_#00ADB5] hover:drop-shadow-[0_0_5px_#00ADB5] bg-[#141d2a]'>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=karanrathod8225@gmail.com" target='_blank'>
                        <FaEnvelope/> 
                      </a> 
                    </div>
                  </div>
                </div>
              </div>

              <div className='border mt-17 w-175 h-184 rounded-xl border-[#141d2a] bg-[#141d2a] p-10 max-sm:w-full max-xl:w-full'>
                <h3 className='flex items-center text-xl gap-3 text-[#00ADB5] font-medium'> <FaPaperPlane/> Send Me a Message </h3>
                <form action="" ref={form} onSubmit={sendEmail} className='border-0 my-6'>
                  <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='text-[#CAD4DA]'> Your Name </label>
                    <input type="text" name='name' placeholder='Enter your name' className='border-0 rounded-lg text-lg pl-5 h-11 border-[#1d2738] bg-[#1d2738]' required/>
                  </div>
                  <div className='flex flex-col gap-3 mt-7'>
                    <label htmlFor="" className='text-[#CAD4DA]'> Your Email </label>
                    <input type="text" name='email' placeholder='Enter your email' className='border-0 rounded-lg text-lg pl-5 h-11 border-[#1d2738] bg-[#1d2738]' required/>
                  </div>
                  <div className='flex flex-col gap-3 mt-7'>
                    <label htmlFor="" className='text-[#CAD4DA]'> Subject </label>
                    <input type="text" name='subject' placeholder='Enter subject' className='border-0 rounded-lg text-lg pl-5 h-11 border-[#1d2738] bg-[#1d2738]' required/>
                  </div>
                  <div className='flex flex-col gap-3 mt-7'>
                    <label htmlFor="" className='text-[#CAD4DA]'> Your Message </label>
                    <textarea name="message" rows={7} id=""  placeholder='Type your message here...' className='border-0 rounded-lg text-lg pl-5 pt-2 border-[#1d2738] bg-[#1d2738]' required></textarea>
                  </div>
                    <button type='submit' disabled={disabled} className='text-white bg-[#00ADB5] w-40 flex items-center justify-center h-10 rounded-lg mt-5 hover:text-[#00ADB5] hover:bg-transparent hover:border hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'> <FaPaperPlane/> Send Message </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      
      </div>







    </div>
  )
}

export default App



// animation
