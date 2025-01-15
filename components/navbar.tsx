import Link from "next/link";

const menuList = [
  {
    id: 1,
    name: "О клинике",
    href: "/",
  },
  {
    id: 2,
    name: "Услуги",
    href: "/",
  },
  {
    id: 3,
    name: "Акции",
    href: "/",
  },
  {
    id: 4,
    name: "Врачи",
    href: "/",
  },
  {
    id: 5,
    name: "Отзывы",
    href: "/",
  },
  {
    id: 6,
    name: "Контакты",
    href: "/",
  },
  {
    id: 7,
    name: "Адрес",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <div className="shadow-xl">
      <div className="container !max-w-[73.25rem]">
        <nav>
          <ul className="flex min-h-[4.375rem] items-center justify-between gap-4">
            {menuList.map((menuItem) => (
              <li key={menuItem.id}>
                <Link href={menuItem.href} className="hover:underline">
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
