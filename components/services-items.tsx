import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

interface ServicesItemsProps {
  servicesItems: {
    src: string;
    title: string;
  }[];
}

export default function ServicesItems({ servicesItems }: ServicesItemsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(11.25rem,1fr))] gap-x-8 gap-y-[1.875rem]">
      {servicesItems.map((servicesItem) => (
        <article
          key={servicesItem.title}
          className="rounded-[.9375rem] px-[1.625rem] py-9 shadow-[0_0_20px_0_rgba(3,49,173,0.3)]"
        >
          <AspectRatio ratio={1 / 1} className="mb-[.9375rem]">
            <Link href="/">
              <Image
                src={servicesItem.src}
                width={120}
                height={120}
                alt={servicesItem.title}
                className="size-full object-cover"
              />
            </Link>
          </AspectRatio>
          <h3 className="text-center">
            <Link href="/" className="hover:underline">
              {servicesItem.title}
            </Link>
          </h3>
        </article>
      ))}
    </div>
  );
}
