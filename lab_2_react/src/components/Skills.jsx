function Skills() {
  return (
    <section className="bg-white text-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

      <h2 className="text-2xl font-bold mb-4 border-l-4 border-cyan-500 pl-2">
        Навички
      </h2>

      <div className="space-y-4">

        {/* Технічні навички */}
        <div className="p-4 border rounded-xl hover:bg-slate-50 transition">
          <h3 className="font-semibold text-lg mb-2">Технічні</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Операційні системи: Windows, Linux</li>
            <li>Мережі: IP, TCP/UDP; практичний досвід у Cisco Packet Tracer</li>
            <li>Кібербезпека: Антивірусний захист, Access Controls, Network Hardening, System and Endpoint Protection, Defense-in-Depth</li>
            <li>Бази даних: Проєктування структури та взаємодія з БД</li>
            <li>Програмне забезпечення: Встановлення, конфігурація та підтримка ПЗ</li>
            <li>Cloud Security, Application Security, Firewalls, Linux Basics, Security Policy, Networking Devices and Initial Configuration, Network Defense, Cyber Threat Management</li>
          </ul>
        </div>

        {/* Soft skills */}
        <div className="p-4 border rounded-xl hover:bg-slate-50 transition">
          <h3 className="font-semibold text-lg mb-2">Soft skills</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Командна робота</li>
            <li>Стресостійкість</li>
            <li>Увага до деталей</li>
            <li>Швидке навчання</li>
            <li>Пунктуальність</li>
            <li>Комунікабельність</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
