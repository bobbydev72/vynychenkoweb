export default function Home() {
  return (
    <section className="relative min-h-screen before:absolute before:inset-0 before:w-full before:h-full before:bg-white/80 before:z-40">
      <div className="container mx-auto px-4 md:px-0">
        <div className="relative py-6 md:py-0 flex flex-col items-center justify-center min-h-screen my-auto text-center z-50">
          <h2 className="text-5xl md:text-6xl mb-5 md:mb-12">
            Студія декору{' '}
            <span className="text-blue-600 font-bold font-sans">
              &#8221;Я Можу ВСЕ&#8221;
            </span>
          </h2>
          {/* FIXME: change text after deploy to PRODUCTION */}
          <div className="w-full max-w-[900px] [&>*:nth-child(n+2)]:mt-7 font-serif text-lg">
            <p>Ласкаво просимо на наш веб-сайт!</p>
            <p>
              Ми раді вас вітати на нашому порталі, де розгортається невимовно цікавий
              процес розробки. Наразі ми працюємо над створенням унікального простору,
              який відповідатиме вашим очікуванням і вимогам.
            </p>
            <p>
              Щоб забезпечити вам найкращий досвід користування, наша команда фахівців
              пильно вдосконалює кожен аспект сайту. Будь ласка, залишайтеся на
              зв&apos;язку та слідкуйте за нашими оновленнями, оскільки ми плануємо
              додавати нові функції та зміни, щоб зробити ваше перебування тут ще більш
              комфортним та захопливим.
            </p>
            <p>
              Дякуємо за ваше терпіння та розуміння. Завітайте до нас знову найближчим
              часом, коли наш сайт буде повністю готовий!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <a
                href="tel:+380661904811"
                className="w-full md:w-auto py-2.5 px-5 bg-transparent hover:bg-white/20 border-2 border-black/70 text-black rounded-sm transition-all duration-200 ease-in-out md:mr-3 mb-3 md:mb-0"
              >
                Зв&apos;язатися з нами
              </a>
              <a
                href="https://www.instagram.com/vinichenko_ludmila/"
                className="w-full md:w-auto py-2.5 px-5 bg-transparent hover:bg-white/20 border-2 border-black/70 text-black rounded-sm transition-all duration-200 ease-in-out"
              >
                Подивитися Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <video
        src="/video/introducing.mp4"
        muted
        autoPlay
        loop
        preload="auto"
        width={1}
        height={1}
        className="w-full h-full object-cover absolute inset-0"
      />
    </section>
  );
}
