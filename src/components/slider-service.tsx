"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules"; // 1. Importa Autoplay
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // 2. Importa el CSS de autoplay (opcional)
import { serviceData } from '@/data';

export default function SliderService() {
  return (
    <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            autoplay={{ // 3. Configura autoplay
                delay: 2500, // 2.5 segundos entre transiciones
                disableOnInteraction: false // Continúa autoplay después de interacción
            }}
            loop={true} // 4. Activa el loop infinito
            modules={[Pagination, Autoplay]} // 5. Añade Autoplay a los módulos
            className="h-[280px] md:h-[390px] w-[270px] md:w-[650px]"
        >
         {serviceData.map((item, index) => (
                <SwiperSlide key={index} >
                    <div className="flex px-6 py-8 h-auto md:h-[240px] rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:border-accent border-2">
                        <div className="mb-4 text-4xl text-accent">{item.icon}</div>
                        <div className='text-white overflow-y-auto'>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm overflow-x-auto">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
    </Swiper>
  )
}