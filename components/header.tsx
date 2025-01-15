import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              width={90}
              height={90}
              alt="логотип"
              priority
            />
          </Link>
          <div>
            <p className="text-sm">
              Круглосуточная запись и консультация по телефону:
            </p>
            <a href="tel:+77070700077" className="font-normal underline">
              +7 707 070 00 77
            </a>
          </div>
        </div>
        <div>
          <div>
            <Input
              placeholder="введите запрос"
              className="font-normal placeholder:uppercase"
            />
          </div>
        </div>
      </div>
      <div className="container"></div>
    </header>
  );
}
