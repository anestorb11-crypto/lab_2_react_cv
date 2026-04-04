function Experience() {
  return (
    <section className="bg-white text-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

      <h2 className="text-2xl font-bold mb-4 border-l-4 border-cyan-500 pl-2">
        Досвід та проєкти
      </h2>

      <div className="space-y-4">

        <div className="p-4 border rounded-xl hover:bg-slate-50 transition">
          <h3 className="font-semibold text-lg">
            Курсовий проєкт
          </h3>
          <p>
            Розробка веб-сайту з інтеграцією бази даних.
            Проєктування структури БД та взаємодії з інтерфейсом.
          </p>
        </div>

        <div className="p-4 border rounded-xl hover:bg-slate-50 transition">
          <h3 className="font-semibold text-lg">
            Мережеві проєкти
          </h3>
          <p>
            Конфігурація мереж у Cisco Packet Tracer
            (маршрутизація, комутація).
          </p>
        </div>

      </div>
    </section>
  )
}

export default Experience