function Certificates() {
  return (
    <section className="bg-white text-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

      <h2 className="text-2xl font-bold mb-4 border-l-4 border-cyan-500 pl-2">
        Сертифікати
      </h2>

      <div className="space-y-3">

        <div className="p-4 border rounded-xl hover:bg-slate-50 transition flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">Junior Cybersecurity Analyst Career Path</h3>
            <p className="text-slate-500 text-sm mt-0.5">Cisco Networking Academy</p>
          </div>
          <span className="text-xs bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium shrink-0">
            2025
          </span>
        </div>

      </div>
    </section>
  );
}

export default Certificates;
