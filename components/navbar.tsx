import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isMenuOpen: boolean;
}

const menuList = [
  {
    id: 1,
    name: "О клинике",
    href: "/about-us",
  },
  {
    id: 2,
    name: "Услуги",
    href: "/services",
  },
  {
    id: 3,
    name: "Акции",
    href: "/sales",
  },
  {
    id: 4,
    name: "Врачи",
    href: "/doctors",
  },
  {
    id: 5,
    name: "Отзывы",
    href: "/reviews",
  },
  {
    id: 6,
    name: "Контакты",
    href: "/contacts",
  },
  {
    id: 7,
    name: "Адрес",
    href: "/address",
  },
];

export default function Navbar({ isMenuOpen }: NavbarProps) {
  return (
    <div
      className={cn("hidden md:block md:shadow-xl", {
        "fixed inset-0 block w-full overflow-auto bg-white pb-4 pt-[7.375rem] md:hidden":
          isMenuOpen,
      })}
    >
      <div className="container !max-w-[73.25rem] space-y-5">
        <nav>
          <ul className="flex min-h-[4.375rem] flex-col items-center justify-between gap-4 md:flex-row">
            {menuList.map((menuItem) => (
              <li key={menuItem.id}>
                <Link href={menuItem.href} className="hover:underline">
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="text-center">
            <p className="text-sm">
              Круглосуточная запись и консультация по телефону:
            </p>
            <a
              href="tel:+77070700077"
              className="text-sm font-normal underline lg:text-base"
            >
              +7 707 070 00 77
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
