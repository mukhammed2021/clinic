import Image from 'next/image'
import Link from 'next/link'
import styles from './about-us.module.css'

export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Навигационная цепочка */}
        <div className="mb-8">
          <p className="text-gray-600">
            <Link href="/" className="hover:underline">Главная страница</Link>
            <span className="mx-2">/</span>
            <span>О Клинике</span>
          </p>
        </div>


        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8">
            <h1 className={`${styles.title} mb-8`}>
              О нашей клинике
            </h1>
            <p className={styles.text}>
              Наша клиника — это современный медицинский центр, предоставляющий широкий спектр услуг для вашего здоровья и благополучия. Мы объединяем опытных специалистов, передовые технологии и индивидуальный подход к каждому пациенту. Основные принципы нашей работы — профессионализм, забота о пациентах и постоянное стремление к совершенству в медицинских услугах.
            </p>
          </div>
          <div 
            className="lg:col-span-4 relative mx-auto lg:mx-0" 
            style={{ 
              maxWidth: '402px', 
              maxHeight: '313px', 
              height: '313px',
              width: '100%'  // добавляем для лучшего контроля ширины
            }}
          >
            <Image
              src="/about-us/clinic-reseption.jpg"
              alt="Ресепшн клиники"
              fill
              sizes="(max-width: 768px) 100vw, 32vw"
              quality={100}
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Галерея изображений */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/clinic-corridor.jpg"
              alt="Коридор клиники"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/doctors-office.jpg"
              alt="Кабинет врача"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/clinic-workspace.jpg"
              alt="Рабочее пространство"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Статистика */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative" 
          style={{ 
            padding: '12.5% 0',
           }}
        >
          {/* Эффект свечения */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              background: 'radial-gradient(rgb(126, 196, 229) -200%, transparent 70%)',
            }}
          />

          {/* Контент */}
          <div className="relative z-10">
            <h2 className="text-5xl font-light text-gray-800 mb-2">10+</h2>
            <p className="text-gray-600">лет работы клиники</p>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-light text-gray-800 mb-2">30+</h2>
            <p className="text-gray-600">квалифицированных специалистов</p>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-light text-gray-800 mb-2">5000+</h2>
            <p className="text-gray-600">довольных пациентов</p>
          </div>
        </div>

        {/* Преимущества */}
        <div className="mt-20">
          <h2 className="text-3xl font-light text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Квалифицированные специалисты",
                description: "В нашей команде работают врачи с многолетним опытом и высокой квалификацией. Они регулярно проходят обучение и повышают квалификацию."
              },
              {
                title: "Современное оборудование",
                description: "Клиника оснащена высокотехнологичным оборудованием, позволяющим проводить точную диагностику и эффективное лечение."
              },
              {
                title: "Индивидуальный подход",
                description: "Мы уделяем внимание каждому пациенту, стараемся учитывать все его особенности и предпочтения для эффективного и комфортного лечения."
              },
              {
                title: "Комфортные условия",
                description: "Мы создали уютную атмосферу, чтобы ваше пребывание в клинике было максимально удобным и спокойным."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 mx-auto w-full"
                style={{ 
                  boxShadow: '0px 4px 4.8px 0px rgba(0, 0, 0, 0.25)',
                  maxWidth: '300px',
                  height: '293px',
                  borderRadius: '40px'
                }}
              >
                <h3 
                  className="text-center mb-4"
                  style={{ 
                    fontFamily: 'Montserrat',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '19.5px'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-center"
                  style={{ 
                    fontFamily: 'Montserrat',
                    fontSize: '18px',
                    fontWeight: 300,
                    lineHeight: '19.5px',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная информация с кнопками */}
        <div 
          className={styles.backgroundBlock}
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)), url("about-us/appointment-back.jpg")',
          }}
        >
          <p className={styles.backgroundText}>
            Мы предлагаем услуги в областях терапии, хирургии, стоматологии, диагностики и многих других направлениях.
            <br />            
            Наша цель — помочь вам сохранить и укрепить здоровье, обеспечить качественное медицинское обслуживание и доверительные отношения с каждым пациентом.
          </p>
          
          <p className={`${styles.backgroundText} mb-12`}>
            Приходите к нам за здоровьем, и мы сделаем все, чтобы вы чувствовали себя в надежных руках!
          </p>

          <div className={styles.buttonContainer}>
            <Link 
              href="/appointment" 
              className="flex items-center justify-center text-white button-text"
              style={{
                maxWidth: '331px',
                width: '100%',
                height: '84px',
                borderRadius: '15px',
                background: '#0D8FDF87',
                boxShadow: `
                  0px 4px 10.6px 2px #4A4A4A4F,
                  0px 1px 20.6px 1px #FFFFFF40 inset
                `,
                fontFamily: 'Montserrat',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              Записаться на прием
            </Link>
            <Link 
              href="/consultation" 
              className="flex items-center justify-center text-white button-text"
              style={{
                maxWidth: '331px',
                width: '100%',
                height: '84px',
                borderRadius: '15px',
                background: '#0D8FDF87',
                boxShadow: `
                  0px 4px 10.6px 2px #4A4A4A4F,
                  0px 1px 20.6px 1px #FFFFFF40 inset
                `,
                fontFamily: 'Montserrat',
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              Консультация
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
