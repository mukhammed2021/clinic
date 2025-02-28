import Image from "next/image";
import avatar from "/public/testimonials/avatar.jpg";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
  {
    avatar,
    name: "Анна Сергеевна Морозова",
    position: "терапевт, врач высшей категории",
    description:
      'Специализация "лечение хронических заболеваний, гастроэнтерология"',
    experience: "Опыт работы: 15 лет",
    schedule: "График приема: Пн/Пт: 09:00",
  },
];

export default function Doctors() {
  return (
    <div className="py-14 pt-9 lg:py-[7.5rem] lg:pt-[4.5rem]">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 min-[584px]:grid-cols-2 min-[870px]:grid-cols-3 lg:gap-8 min-[1150px]:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="rounded-[.9375rem] bg-[#F5F5F5] p-5 md:p-7"
            >
              <div className="mb-[1.125rem] flex flex-col items-center">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="size-[6.25rem] rounded-full object-cover"
                />
              </div>
              <h3 className="mb-[1.0625rem] text-center text-[1.375rem]">
                {doctor.name}
              </h3>
              <p className="mb-8 text-center text-base">{doctor.position}</p>
              <p className="mb-2">{doctor.description}</p>
              <p>{doctor.experience}</p>
              <p className="mb-9">{doctor.schedule}</p>
              <div className="text-center">
                <Button className="h-auto bg-[#648EFFB3] px-[2.5rem] py-[.875rem] text-xl font-medium text-white hover:bg-[#648dff]">
                  Записаться
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
