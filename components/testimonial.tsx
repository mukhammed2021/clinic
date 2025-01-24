import Image from "next/image";
import avatar from "/public/testimonials/avatar.jpg";
import stars from "/public/testimonials/icons/stars.svg";
import like from "/public/testimonials/icons/like.png";
import comment from "/public/testimonials/icons/comment.png";

interface TestimonialProps {
  name: string;
  description: string;
  feedback: string;
}

export default function Testimonial({
  name,
  description,
  feedback,
}: TestimonialProps) {
  return (
    <div className="flex flex-col gap-x-7 gap-y-3 rounded-[.9375rem] px-7 py-8 shadow-[0_0_20px_0_rgba(3,49,173,0.3)] min-[480px]:flex-row min-[480px]:items-center">
      <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
        <div className="mb-[.875rem]">
          <Image
            src={avatar}
            alt="avatar"
            className="size-[3.125rem] rounded-full object-cover"
          />
        </div>
        <h3 className="mb-[.8125rem]">{name}</h3>
        <p className="text-[.6875rem]">{description}</p>
      </div>
      <div>
        <Image src={stars} alt="stars" className="mb-[.875rem] inline-block" />
        <p className="mb-[.875rem] flex items-center gap-1 text-[.625rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
          Приду на повторный прием
        </p>
        <p className="mb-[.625rem] border-b border-[#d0cdcd] pb-[.625rem] text-[.8125rem]">
          &quot;{feedback}&quot;
        </p>
        <div className="flex items-center gap-[1.125rem]">
          <div className="flex items-center gap-[.1875rem]">
            <Image src={like} alt="лайк" />
            <span className="text-[.6875rem]">5</span>
          </div>
          <Image src={comment} alt="коммент" />
        </div>
      </div>
    </div>
  );
}
