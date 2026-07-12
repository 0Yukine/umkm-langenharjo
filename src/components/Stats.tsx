export default function Stats() {
  const stats = [
    {
      number: "3",
      label: "UMKM Mitra",
    },
    {
      number: "100+",
      label: "Produk UMKM",
    },
    {
      number: "3",
      label: "Lokasi Usaha",
    },
    {
      number: "100%",
      label: "Produk Lokal",
    },
  ];

  return (
    <section className="py-24 bg-[#FFF8EE]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#5C3317] mb-16">
          Statistik UMKM
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-10 text-center hover:shadow-xl transition"
            >

              <h3 className="text-5xl font-bold text-[#8B4513] mb-3">
                {item.number}
              </h3>

              <p className="text-gray-600">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}