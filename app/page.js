import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import Image from 'next/image'
import Levid from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/work1.png'
import web2 from '../public/work2.png'
import web3 from '../public/work3.png'
import web4 from '../public/work4.png'

export default function Home() {
  return (
    <div>
      <head>
        <title>Levid Lima Portifolio</title>
        <meta name='description' />
        <link rel="icon" href="favicon.ico" />
      </head>

      <main className='bg-white px-10 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='p-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyLevid</h1>
            <ul className='flex items-center'>
              <li><a className=' bg-gradient-to-r from-purple-600 to-purple-950 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-700 font-medium md:text-6xl'>Levid Lima</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Freelancer providing services for programming needs. Join me down below and let´s get cracking!
            </p>
          </div>
          <div className=' text-5xl flex justify-center gap-6 py-3 text-gray-600'>
            <a href="https://github.com/DEVLevid"> <AiFillGithub className='cursor-pointer text-purple-700' /> </a>
            <a href="https://www.linkedin.com/in/levid-lima-326311260"> <AiFillLinkedin className='cursor-pointer text-purple-700'/> </a>
            <a href="https://www.instagram.com/levidlima/"> <AiFillInstagram className='cursor-pointer text-purple-700' /> </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-purple-700 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={Levid} alt={'Levid'}  layout='fill' objectFit='cover'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since the beginning of my journay as a freelancer developer,
              I´ve done remote work for
              <span className='text-purple-700'> agencies </span> consulted for
              <span className='text-purple-700'> startups </span>and collaborated with
              talanted people to creat digital products for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1'>
              <Image src={design} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs following the design core theory.</p>
              <h4 className='py-4 text-purple-700'>Design tools i use</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>photoshop</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={code} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful WebSites</h3>
              <p className='py-2'>Creating elegant Websites following the UI/UX theory.</p>
              <h4 className='py-4 text-purple-700'>Dev tools i use</h4>
              <p className='text-gray-800 py-1'>WebStorm</p>
              <p className='text-gray-800 py-1'>Visual Studio Code</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <Image src={consulting} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful mobile apps</h3>
              <p className='py-2'>I also create beautiful interactive mobile apps.</p>
              <h4 className='py-4 text-purple-700'>Mobile dev tools i use</h4>
              <p className='text-gray-800 py-1'>ReactNative</p>
              <p className='text-gray-800 py-1'>Flutter/Dart</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-purple-700"> agencies </span>
              consulted for <span className="text-purple-700">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="grid flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 h-200 w-200 shadow-lg p-10 rounded-xl my-10">
              <Image
                  className="rounded-lg object-cover"
                  width={"10%"}
                  height={"10%"}
                  layout="responsive"
                  src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1 h-200 w-200 shadow-lg p-10 rounded-xl my-10">
              <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1 h-200 w-200 shadow-lg p-10 rounded-xl my-10">
              <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1 h-200 w-200 shadow-lg p-10 rounded-xl my-10">
              <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
