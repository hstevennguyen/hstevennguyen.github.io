import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import stevep from '../public/stevep.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import {useState} from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Steven Nguyen Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className='min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-xl font-burtons dark:text-gray-500'>Steven Nguyen</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-400'/>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-800'>Steven Nguyen</h2>
              <h3 className='text-2xl py-2 md:text-3xl text-gray-800 dark:text-gray-500'>Developer and designer.</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>Web developer providing services for websites and web apps currently seeking employment. Join me below to see how we can work together!</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <AiFillGithub className='cursor-pointer ' onClick={() => window.open('https://github.com/hstevennguyen', '_blank')}/>
              <AiFillLinkedin className='cursor-pointer ' onClick={() => window.open('https://www.linkedin.com/in/stevennguyen0196/', '_blank')}/>
            </div>
            <div id="profile" className='relative mx-auto bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 dark:bg-gradient-to-t dark:from-teal-600'>
              <Image src={stevep} alt="Profile picture of Steven" />
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1'>Services I offer</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>
                Since the beginning of my journey as a web developer, I have worked on projects collaboratively as well as by myself. I am always looking for opportunities to improve my own skillset and love implementing new tools into my work.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>
                I offer a wide range of services, including web design, web app creation and mindset coaching.
              </p>
            </div>
            <div className='lg:flex gap-10'>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={design} alt="icon representing design" width={100} height={100} className="mx-auto"/>
                <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-gray-400'>Beautiful designs</h3>
                <p className='py-2 text-gray-800 dark:text-gray-400'>
                  Creating elegant designs suited for your needs following core design theory.
                </p>
                <h4 className='py-4 text-teal-600 dark:text-teal-800'>Design tools I use</h4>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Photoshop</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Canva</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={code} alt="hashtag picture representing code" width={100} height={100} className="mx-auto"/>
                <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-gray-400'>Innovative Code</h3>
                <p className='py-2 text-gray-800 dark:text-gray-400'>
                  With a solid foundation in web development I am able to create responsive web designs.
                </p>
                <h4 className='py-4 text-teal-600 dark:text-teal-800'>Languages and frameworks</h4>
                <p className='text-gray-800 dark:text-gray-500 py-1'>HTML</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>CSS</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Javascript</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Tailwind CSS</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>React and Next JS</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={consulting} alt ="Thumbs up picture" width={100} height={100} className="mx-auto"/>
                <h3 className='text-lg font-medium pt-8 pb-2 text-gray-800 dark:text-gray-400'>Personal Coaching</h3>
                <p className='py-2 text-gray-800 dark:text-gray-400'>
                  With strong knowledge in personal development and fitness I can help with others on their self improvement journey.
                </p>
                <h4 className='py-4 text-teal-600 dark:text-teal-800'>Expertise</h4>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Fitness</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Diet</p>
                <p className='text-gray-800 dark:text-gray-500 py-1'>Mindset</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className='text-3xl py-1 text-gray-800 dark:text-gray-400'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-500'>
                Since the beginning of my journey as a web developer, I have created websites for myself and friends as projects. I am always looking for opportunities to improve my own skillset and love implementing new tools into my work.
              </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              <div className="overflow-hidden bg-red-400 cursor-pointer rounded-xl relative group">
                <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end" onClick={() => window.open('https://hstevennguyen.github.io/tasklist-project/#', '_blank')}>
                  <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">To Do Application</div>

                        <div className="opacity-60 text-sm ">
                        This is a project that I created together with my fellow team members during the Generation Australia Coding Bootcamp. Our application is user-friendly and is built using HTML, JavaScript, React and CSS. Click on the image to visit the site hosted on github.
                        </div>
                    </div>
                  </div>
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web1} alt="sample image of tak list site" className="rounded-lg object-cover w-full h-full" onClick={() => window.open('https://hstevennguyen.github.io/tasklist-project/#', '_blank')}  />
                </div>
              </div>
              <div className="overflow-hidden bg-red-400 cursor-pointer rounded-xl relative group">
              <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                  <div>
                    <div
                        className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                        <div className="font-bold">Shopping Cart App</div>

                        <div className="opacity-60 text-sm ">
                            This is a project I created as a coding challenge during my coding bootcamp with Generation Australia. It is a shopping cart application that uses HTML, CSS, Javascript and React. Click on the image to visit the site hosted on github.
                        </div>
                    </div>
                  </div>
                </div>
                <div className='basis-1/3 flex-1'>
                  <Image src={web2} alt="sample image of shopping cart site" className="rounded-lg object-cover w-full h-full"/>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
  )
}

