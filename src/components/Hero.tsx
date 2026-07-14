export default function Hero() {
  return (
    <section className="bg-linear-to-r from-[#FFF8EE] to-[#F5E6D3] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Kiri */}
          <div>

            <p className="uppercase tracking-[5px] text-[#A66A3F] font-semibold mb-4">
              Portal UMKM Desa Langenharjo
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#5C3317] leading-tight mb-6">
              Produk Lokal
              <br />
              Kualitas Unggul
            </h1>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Portal UMKM Desa Langenharjo hadir untuk membantu
              memperkenalkan produk unggulan UMKM lokal kepada
              masyarakat luas melalui platform digital yang modern,
              informatif, dan mudah diakses.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#umkm"
                className="bg-[#8B4513] text-white px-8 py-4 rounded-full hover:bg-[#6B3410] transition duration-300"
              >
                Jelajahi UMKM
              </a>

              <a
                href="#kontak"
                className="border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 rounded-full hover:bg-[#8B4513] hover:text-white transition duration-300"
              >
                Hubungi Kami
              </a>

            </div>

          </div>

          {/* Kanan */}
          <div>

            <img
              src="/images/hero-umkm.png"
              alt="UMKM Langenharjo"
              className="rounded-3xl shadow-2xl w-full h-96 object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}