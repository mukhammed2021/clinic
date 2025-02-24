import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from "/public/testimonials/avatar.jpg";


interface Doctor {
    name: string;
    position: string;
    specialization: string;
    experience: string;
    schedule: string;
    image: any; // или StaticImageData из next/image
}

const doctors: Doctor[] = [
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    }
];

interface Direction {
    title: string;
    description: string;
}

const directions: Direction[] = [
    {
        title: 'Терапевтическая стоматология',
        description: 'Это лечение заболеваний зубов, таких как кариес, пульпит и периодонтит.'
    },
    {
        title: 'Ортопедическая стоматология',
        description: 'Она направлена на восстановление утраченных зубов и исправление дефектов зубного ряда с помощью протезов, коронок, мостов и имплантатов.'
    },
    {
        title: 'Ортодонтия',
        description: 'Сфера, связанная с исправлением прикуса и выравниванием зубов. Ортодонты используют брекеты, элайнеры и другие устройства.'
    },
    {
        title: 'Хирургическая стоматология',
        description: 'Здесь проводится удаление зубов, операции по имплантации и лечение воспалительных процессов в полости рта.'
    },
    {
        title: 'Детская стоматология',
        description: 'Забота о здоровье зубов у детей, начиная с момента появления первых зубов.'
    }
];

interface DentalCare {
    tip: string;
}

const dentalCareAdvices: DentalCare[] = [
    {
        tip: 'Чистите зубы дважды в день щеткой средней жесткости.'
    },
    {
        tip: 'Используйте зубную нить и ополаскиватели для рта.'
    },
    {
        tip: 'Ограничьте употребление сахара и газированных напитков.'
    },
    {
        tip: 'Посещайте стоматолога не реже двух раз в год для профилактики.'
    }
];

const Stomatology: React.FC = () => {
    return (
        <>
            <section className="bg-[#F5F5F5] rounded-[15px] max-w-[1340px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
                    <div className="w-full lg:w-[44%] p-4 lg:p-[45px_0_45px_45px]">
                        <h1 className="font-montserrat text-[20px] leading-[24.38px] font-light mb-[60px]">
                            Стоматология: забота о здоровье зубов и десен
                        </h1>

                        <p className="font-montserrat text-[20px] leading-[24.38px] font-extralight text-gray-600 mb-6 ">
                            Стоматология — это отрасль медицины, посвященная диагностике, лечению и профилактике заболеваний зубов, десен и полости рта.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/appointment"
                                className="max-w-[189px] h-[41px] w-full flex items-center justify-center bg-[#82A4FF] text-white rounded-[15px] hover:bg-blue-500 transition-colors"
                            >
                                Записаться
                            </a>

                            <a
                                href="/consultation"
                                className="max-w-[189px] h-[41px] w-full flex items-center justify-center bg-[#82A4FF] text-white rounded-[15px] hover:bg-blue-500 transition-colors"
                            >
                                Консультация
                            </a>
                        </div>
                    </div>

                    <div className="relative w-full lg:w-[56%] h-[280px]">
                        <img
                            src="/stamatology/slide-Photoroom.png"
                            alt="Стоматологические инструменты"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </section>


            <section className="mt-16 px-4 sm:px-6">
                <h2 className="text-[20px] leading-[24.38px] mb-8 font-montserrat font-extralight">
                    Наши специалисты по стоматологии
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-[#F5F5F5] p-6 rounded-[15px] flex flex-col items-center w-full max-w-[300px] h-auto lg:h-[527px]">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={100}
                                height={100}
                                className="rounded-full mb-4 object-cover w-[100px] h-[100px]"
                            />

                            <h3 className="font-montserrat font-extralight text-[22px] leading-[26.82px] text-center mb-2">
                                {doctor.name}
                            </h3>

                            <p className="font-montserrat font-extralight text-[16px] leading-[19.5px] text-gray-600 text-center mb-2 doctor-position">
                                {doctor.position}
                            </p>

                            <p className="font-montserrat font-extralight text-[16px] leading-[19.5px] text-gray-600 text-center mb-2 doctor-specialization mt-[20px]">
                                {doctor.specialization}
                            </p>

                            <p className="font-montserrat font-extralight text-[16px] leading-[19.5px] text-gray-600 text-center mb-2 doctor-experience">
                                {doctor.experience}
                            </p>

                            <p className="font-montserrat font-extralight text-[16px] leading-[19.5px] text-gray-600 text-center mb-4">
                                {doctor.schedule}
                            </p>

                            <a
                                href="/appointment"
                                className="max-w-[198px] h-[51px] w-full flex items-center justify-center bg-[#648EFFB2] text-white rounded-[10px] hover:bg-blue-500 transition-colors mt-[37px]"
                            >
                                Записаться
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 px-4 sm:px-6">
                <h2 className="font-montserrat font-extralight text-[20px] leading-[24.38px] mb-8">
                    Основные направления стоматологии:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
                    {directions.map((direction, index) => (
                        <div key={index} className="bg-[#F4F4F4] p-6 rounded-[15px] w-full max-w-[238px] h-auto lg:h-[294px] shadow-[0px_4px_4px_0px_#00000040]">
                            <h3 className="font-montserrat font-extralight text-[16px] leading-[19.5px] mb-3">
                                {direction.title}
                            </h3>

                            <p className="font-montserrat font-extralight text-[16px] leading-[19.5px] text-gray-600">
                                {direction.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 mb-[120px] px-4 sm:px-6">
                <h2 className="font-montserrat font-extralight text-[20px] leading-[24.38px] mb-8">
                    Советы по уходу за зубами:
                </h2>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[3.51%]">
                    <div className="w-full lg:w-[41.3%] flex justify-center lg:justify-start">
                        <Image
                            src="/stamatology/teeth.png"
                            alt="Уход за зубами"
                            width={750}
                            height={280}
                            className="object-contain w-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-4 lg:gap-[20px]">
                            {dentalCareAdvices.map((advice, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-50 p-4 rounded-[10px] flex items-start w-full max-w-[759px] min-h-[62px]"
                                >
                                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                                    <p className="text-gray-600 font-montserrat font-extralight">{advice.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Stomatology;
