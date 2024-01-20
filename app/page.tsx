export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:bg-white/80 before:z-40">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center h-screen my-auto text-center z-50">
          <h2 className="text-5xl mb-12">
            Студія декору{' '}
            <span className="text-blue-600 font-bold">&#8221;Я Можу ВСЕ&#8221;</span>
          </h2>
          <div className="w-full max-w-[900px] [&>*:nth-child(n+2)]:mt-7">
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
              часом, коли наш сайт буде повністю готовий подарувати вам новий рівень
              віртуального досвіду!
            </p>
          </div>
        </div>
      </div>
      <video
        src="/video/introducing.mp4"
        muted
        autoPlay
        className="w-full h-full object-cover absolute inset-0"
      />
    </section>
  );
}
