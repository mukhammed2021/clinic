import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
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
