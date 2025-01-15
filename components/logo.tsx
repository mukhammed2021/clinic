import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0 basis-16 lg:basis-[5.625rem]">
      <Image
        src="/logo.png"
        width={90}
        height={90}
        alt="логотип"
        placeholder="blur"
        blurDataURL="/logo.png"
      />
    </Link>
  );
}
