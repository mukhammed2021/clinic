"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const salesData = [
  {
    title: '"С заботой о вашем здоровье!"',
    description: '– скидки на первичные консультации или обследования.'
  },
  {
    title: '"Улыбка года"',
    description: '– скидки на стоматологическое лечение и отбеливание.'
  },
  {
    title: 'Весь декабрь',
    description: '- Скидка 20% на анализы'
  },
  {
    title: '"Здоровье каждому!"',
    description: '– специальная цена на комплексные программы лечения.'
  },
  {
    title: '"Малышам – лучшее"',
    description: '– сниженные цены на услуги для детей (педиатрия, вакцинация и т.д.).'
  }
];

const SalesCard = ({ title, description }: { title: string; description: string }) => (
  <div 
    style={{
      backdropFilter: 'blur(44.5px)',
      boxShadow: '0px 0px 19.8px 6px #E0E0E06B inset',
      maxWidth: '424px',
      height: '162px',
      width: '100%',
      borderRadius: '15px'
    }}
    className="bg-white p-6"
  >
    <h3 className="sales-card-title mb-4">{title}</h3>
    <p className="sales-card-text">{description}</p>
  </div>
);

export default function Sales() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Навигационная цепочка */}
          <div className="mb-8">
            <p className="text-gray-600">
              <Link href="/" className="hover:underline">Главная страница</Link>
              <span className="mx-2">/</span>
              <span>Акции</span>
            </p>
          </div>
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 
                style={{ 
                  fontFamily: 'Montserrat',
                  fontSize: '32px',
                  fontWeight: 200,
                  lineHeight: '39.01px',
                  textAlign: 'left',
                  background: 'transparent'
                }}
                className="mb-8"
              >
                Акции в нашей клинике
              </h1>
              <p 
                style={{ 
                  fontFamily: 'Montserrat',
                  fontSize: '24px',
                  fontWeight: 200,
                  lineHeight: '29.26px',
                  textAlign: 'left'
                }}
              >
                Мы заботимся о вашем здоровье и стремимся сделать наши услуги еще доступнее! Поэтому в клинике регулярно действуют акции, которые помогут вам сэкономить на диагностике, лечении и профилактике заболеваний. Вот некоторые из наших актуальных предложений.
              </p>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/sales/image.png"
                alt="Акции и скидки"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Интегрированный компонент Offers */}
      <section className="bg-neutral-100 pb-[1.125rem] pt-[3.75rem]">
        <div className="container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">
              <div>
                <h2 className="mb-12 text-2xl sm:text-3xl md:mb-[4.625rem] md:text-5xl">
                  Акции и специальные предложения
                </h2>
                <div className="text-base sm:text-lg md:text-2xl">
                  <p>Первичная консультация со скидкой</p>
                  <ul>
                    <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
                      Описание: Получите скидку 20% на первую консультацию у
                      любого специалиста клиники!
                    </li>
                    <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
                      Детали: Акция доступна новым пациентам. Узнайте о своем
                      здоровье и получите профессиональные рекомендации по
                      специальной цене.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">2</SwiperSlide>
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">3</SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Блок с карточками акций */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 
            style={{ 
              fontFamily: 'Montserrat',
              fontSize: '24px',
              fontWeight: 300,
              lineHeight: '29.26px'
            }}
            className="mb-8"
          >
            Всего акции
          </h2>
          <p className="mb-12">4</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesData.map((sale, index) => (
              <SalesCard 
                key={index}
                title={sale.title}
                description={sale.description}
              />
            ))}
          </div>

          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p 
              className="mb-12"
              style={{ 
                fontFamily: 'Montserrat',
                fontSize: '24px',
                fontWeight: 300,
                lineHeight: '29.26px',
                textAlign: 'center'
              }}
            >
              Наши акции — это возможность позаботиться о здоровье всей семьи с комфортом и выгодой. 
              Следите за обновлениями на сайте клиники или звоните нам, чтобы узнать больше о текущих 
              предложениях и акциях.
            </p>

            <div className="flex justify-center gap-6">
              <Link 
                href="/appointment" 
                className="px-8 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                style={{
                  background: '#7EC4E5',
                  borderRadius: '15px',
                  padding: '20px 40px'
                }}
              >
                Записаться по акции
              </Link>
              <Link 
                href="/consultation" 
                className="px-8 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
                style={{
                  background: '#7EC4E5',
                  borderRadius: '15px',
                  padding: '20px 40px'
                }}
              >
                Проконсультироваться
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
