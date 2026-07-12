export default function Contact() {
  return (
    <section
      id="kontak"
      className="py-24 bg-[#FFF8EE]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-[#5C3317] mb-6">
          Hubungi Kami
        </h2>

        <p className="text-gray-600 text-lg mb-12">
          Portal UMKM Desa Langenharjo
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Lokasi */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="text-4xl mb-4">
              📍
            </div>

            <h3 className="text-2xl font-bold text-[#5C3317] mb-3">
              Lokasi
            </h3>

            <p className="text-gray-600">
              Desa Langenharjo
              <br />
              Kecamatan Kendal
              <br />
              Kabupaten Kendal
            </p>

          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="text-4xl mb-4">
              📧
            </div>

            <h3 className="text-2xl font-bold text-[#5C3317] mb-3">
              Email
            </h3>

            <p className="text-gray-600">
              umkmlangenharjo@gmail.com
            </p>

          </div>

          {/* WhatsApp */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="text-4xl mb-4">
              📱
            </div>

            <h3 className="text-2xl font-bold text-[#5C3317] mb-3">
              WhatsApp
            </h3>

            <p className="text-gray-600 mb-6">
              Hubungi Tim KKN
            </p>

            <a
              href="https://wa.me/6287820023322?text=Halo%20Tim%20KKN,%20saya%20ingin%20menghubungi%20Anda."
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition"
            >
              Chat WhatsApp
            </a>

          </div>

        </div>

        <div className="mt-16 border-t border-[#E5D3BC] pt-8">

          <p className="text-gray-500">
            © 2026 Portal UMKM Desa Langenharjo
          </p>

          <p className="text-gray-500 mt-2">
            Program KKN Universitas Semarang
          </p>

        </div>

      </div>
    </section>
  );
}