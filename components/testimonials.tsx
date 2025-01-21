"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import avatar from "/public/testimonials/avatar.jpg";
import stars from "/public/testimonials/icons/stars.svg";
import like from "/public/testimonials/icons/like.png";
import comment from "/public/testimonials/icons/comment.png";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container flex flex-col justify-between gap-4 min-[582px]:flex-row min-[582px]:items-center">
        <h2 className="min-[650px]::text-2xl text-xl uppercase">
          отзывы наших пациентов
        </h2>
        <Link
          href="/"
          className="w-full rounded-[.9375rem] bg-[#82a4ff] px-[2.8125rem] py-3 text-center text-xl font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25),inset_0_-3px_6px_3px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-none min-[475px]:w-auto"
        >
          Все отзывы
        </Link>
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={2.5}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          870: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
        }}
        centeredSlides
        loop
        className="!pb-56 !pt-20"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-x-7 gap-y-3 rounded-[.9375rem] px-7 py-8 shadow-[0_0_20px_0_rgba(3,49,173,0.3)] min-[480px]:flex-row min-[480px]:items-center">
            <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
              <div className="mb-[.875rem]">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="size-[3.125rem] rounded-full object-cover"
                />
              </div>
              <h3 className="mb-[.8125rem]">Анна Иванова</h3>
              <p className="text-[.6875rem]">Пациент, 24 года</p>
            </div>
            <div>
              <Image
                src={stars}
                alt="stars"
                className="mb-[.875rem] inline-block"
              />
              <p className="mb-[.875rem] flex items-center gap-1 text-[.625rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
                Приду на повторный прием
              </p>
              <p className="mb-[.625rem] border-b border-[#d0cdcd] pb-[.625rem] text-[.8125rem]">
                &quot;Очень довольна визитом! Врачи внимательные и компетентные.
                Персонал заботливый и вежливый.&quot;
              </p>
              <div className="flex items-center gap-[1.125rem]">
                <div className="flex items-center gap-[.1875rem]">
                  <Image src={like} alt="лайк" />
                  <span className="text-[.6875rem]">5</span>
                </div>
                <Image src={comment} alt="коммент" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-x-7 gap-y-3 rounded-[.9375rem] px-7 py-8 shadow-[0_0_20px_0_rgba(3,49,173,0.3)] min-[480px]:flex-row min-[480px]:items-center">
            <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
              <div className="mb-[.875rem]">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="size-[3.125rem] rounded-full object-cover"
                />
              </div>
              <h3 className="mb-[.8125rem]">Анна Иванова</h3>
              <p className="text-[.6875rem]">Пациент, 24 года</p>
            </div>
            <div>
              <Image
                src={stars}
                alt="stars"
                className="mb-[.875rem] inline-block"
              />
              <p className="mb-[.875rem] flex items-center gap-1 text-[.625rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
                Приду на повторный прием
              </p>
              <p className="mb-[.625rem] border-b border-[#d0cdcd] pb-[.625rem] text-[.8125rem]">
                &quot;Очень довольна визитом! Врачи внимательные и компетентные.
                Персонал заботливый и вежливый.&quot;
              </p>
              <div className="flex items-center gap-[1.125rem]">
                <div className="flex items-center gap-[.1875rem]">
                  <Image src={like} alt="лайк" />
                  <span className="text-[.6875rem]">5</span>
                </div>
                <Image src={comment} alt="коммент" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-x-7 gap-y-3 rounded-[.9375rem] px-7 py-8 shadow-[0_0_20px_0_rgba(3,49,173,0.3)] min-[480px]:flex-row min-[480px]:items-center">
            <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
              <div className="mb-[.875rem]">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="size-[3.125rem] rounded-full object-cover"
                />
              </div>
              <h3 className="mb-[.8125rem]">Анна Иванова</h3>
              <p className="text-[.6875rem]">Пациент, 24 года</p>
            </div>
            <div>
              <Image
                src={stars}
                alt="stars"
                className="mb-[.875rem] inline-block"
              />
              <p className="mb-[.875rem] flex items-center gap-1 text-[.625rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
                Приду на повторный прием
              </p>
              <p className="mb-[.625rem] border-b border-[#d0cdcd] pb-[.625rem] text-[.8125rem]">
                &quot;Очень довольна визитом! Врачи внимательные и компетентные.
                Персонал заботливый и вежливый.&quot;
              </p>
              <div className="flex items-center gap-[1.125rem]">
                <div className="flex items-center gap-[.1875rem]">
                  <Image src={like} alt="лайк" />
                  <span className="text-[.6875rem]">5</span>
                </div>
                <Image src={comment} alt="коммент" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-x-7 gap-y-3 rounded-[.9375rem] px-7 py-8 shadow-[0_0_20px_0_rgba(3,49,173,0.3)] min-[480px]:flex-row min-[480px]:items-center">
            <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
              <div className="mb-[.875rem]">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="size-[3.125rem] rounded-full object-cover"
                />
              </div>
              <h3 className="mb-[.8125rem]">Анна Иванова</h3>
              <p className="text-[.6875rem]">Пациент, 24 года</p>
            </div>
            <div>
              <Image
                src={stars}
                alt="stars"
                className="mb-[.875rem] inline-block"
              />
              <p className="mb-[.875rem] flex items-center gap-1 text-[.625rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
                Приду на повторный прием
              </p>
              <p className="mb-[.625rem] border-b border-[#d0cdcd] pb-[.625rem] text-[.8125rem]">
                &quot;Очень довольна визитом! Врачи внимательные и компетентные.
                Персонал заботливый и вежливый.&quot;
              </p>
              <div className="flex items-center gap-[1.125rem]">
                <div className="flex items-center gap-[.1875rem]">
                  <Image src={like} alt="лайк" />
                  <span className="text-[.6875rem]">5</span>
                </div>
                <Image src={comment} alt="коммент" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
