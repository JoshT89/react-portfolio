'use client'
import Link from 'next/link';
import { Button } from "./ui/button";

// import swiper raect components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import require modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Lyriks website',
        description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'TurnEround Fitness website',
        description: 'My dream project of owning my own gym one day and this is the website for it',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'Sik Wolf website',
        description: 'Website for a friend of mine who is a designer and photographer, this is a website for his designs',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Lyriks website',
        description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
        link: '/',
        github: '/',
    },
     {
        image: '/work/3.png',
        category: 'react js',
        name: 'Lyriks website',
        description: 'A website that keeps up to date with current song charts in all categories and gives you a free snippet of the song',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/* text */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center 
                xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Put relevant imnformation here when ready</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* show only the first 4 projects for the slides */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
  </section>
    )
};

export default Work;