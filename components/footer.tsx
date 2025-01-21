import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-between gap-4 pb-6 pt-[1.875rem] text-xs max-[953px]:text-center min-[953px]:flex-row min-[1082px]:text-base">
        <div>
          <p>Согласие на обработку персональных данных</p>
          <p>
            Пользуясь нашим сайтом, вы соглашаетесь с [Политикой
            конфиденциальности].
          </p>
        </div>
        <div className="min-[953px]:text-right">
          <p>
            &copy; {new Date().getFullYear()}, Центр Здоровья, все права
            защищены
          </p>
          <Link href="/" className="underline">
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
}
