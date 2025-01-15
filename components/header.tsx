import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import Navbar from "./navbar";
import Logo from "./logo";

export default function Header() {
  return (
    <header>
      <div className="bg-neutral-100">
        <div className="container flex min-h-[7.375rem] items-center justify-between gap-4">
          <div className="flex items-center gap-x-[3.125rem]">
            <Logo />
            <div>
              <p className="text-sm">
                Круглосуточная запись и консультация по телефону:
              </p>
              <a href="tel:+77070700077" className="font-normal underline">
                +7 707 070 00 77
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-[2.3125rem]">
            <div className="relative w-[22.25rem]">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cfcdcd]" />
              <Input
                placeholder="введите запрос"
                className="h-[2.8125rem] rounded-[.9375rem] bg-[#ebebeb] pl-14 text-xs font-normal placeholder:text-xs placeholder:uppercase placeholder:text-[#a8a5a5]"
              />
            </div>
            <Link
              href="/"
              className="inline-block rounded-[.9375rem] bg-[#2a5adb]/[.56] px-[1.625rem] py-[.875rem] text-sm font-semibold uppercase text-white shadow-inner drop-shadow-xl"
            >
              личный кабинет
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
