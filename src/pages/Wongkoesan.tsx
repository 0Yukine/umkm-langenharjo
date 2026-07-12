import MainLayout from "../layouts/MainLayout";

export default function Wongkoesan() {
  const menuDimsum = [
    {
      nama: "Dimsum Original",
      harga: "Rp15.000",
      foto:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    },

    {
      nama: "Dimsum Mentai",
      harga: "Rp25.000",
      foto:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19",
    },

    {
      nama: "Dimsum Tartar",
      harga: "Rp25.000",
      foto:
        "https://images.unsplash.com/photo-1553621042-f6e147245754",
    },

    {
      nama: "Dimsum Lava",
      harga: "Rp25.000",
      foto:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },

    {
      nama: "Mix Sauce Custom",
      harga: "Rp25.000",
      foto:
        "https://images.unsplash.com/photo-1544025162-d76694265947",
    },

    {
      nama: "Party Size",
      harga: "Rp100.000",
      foto:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    },
  ];

  return (
    <MainLayout>

{/* HERO */}
<section className="bg-gradient-to-r from-[#FFF8EE] to-[#F5E6D3] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Kiri */}
      <div>

        <p className="text-[#8B4513] font-semibold mb-4">
          UMKM Kuliner Desa Langenharjo
        </p>

        <h1 className="text-6xl font-bold text-[#5C3317] leading-tight mb-6">
          Won Dimsum by
          <br />
          Woengkoesan Eatery
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Dimsum homemade dengan berbagai varian rasa yang
          lembut, gurih, dan nagih. Dibuat dari bahan pilihan
          dan 100% homemade.
        </p>

        <a
          href="https://wa.me/628999977667"
          target="_blank"
          rel="noreferrer"
          className="bg-[#8B4513] text-white px-8 py-4 rounded-full"
        >
          Pesan Sekarang
        </a>

      </div>

      {/* Kanan */}
      <div>

        <img
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d"
          alt="Won Dimsum"
          className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
        />

      </div>

    </div>

  </div>

</section>

      {/* TENTANG */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#5C3317] mb-8">
            Tentang Won Dimsum
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Won Dimsum merupakan usaha kuliner lokal Desa
            Langenharjo yang menyediakan berbagai macam dimsum
            homemade dengan cita rasa khas. Produk dibuat
            menggunakan bahan berkualitas, diproses secara
            higienis, dan cocok dinikmati bersama keluarga
            maupun teman.
          </p>

        </div>

      </section>

      {/* PROFIL PEMILIK */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#5C3317] mb-8">
            Profil Pemilik
          </h2>

          <div className="bg-white rounded-3xl shadow-lg p-10">

            <div className="text-6xl mb-4">
              👨‍🍳
            </div>

            <h3 className="text-3xl font-bold text-[#8B4513]">
              Pak Nur Kholis
            </h3>

            <p className="text-gray-600 mt-4">
              Pemilik Won Dimsum by Woengkoesan Eatery
            </p>

          </div>

        </div>

      </section>

      {/* JAM OPERASIONAL */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Jam Operasional
          </h2>

          <div className="bg-[#FFF8EE] rounded-3xl shadow-lg p-10 text-center">

            <p className="text-xl mb-3">
              Senin - Sabtu
            </p>

            <p className="text-3xl font-bold text-[#8B4513] mb-6">
              17.00 - 21.00 WIB
            </p>

            <p className="text-gray-600">
              Minggu Tutup
            </p>

          </div>

        </div>

      </section>
            {/* VIDEO */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Video Profil
          </h2>

          <video
            controls
            className="w-full rounded-3xl shadow-lg"
          >
            <source
              src="/videos/won-dimsum.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </section>

      {/* MENU */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Menu Won Dimsum
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {menuDimsum.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#F1E4D3]"
              >

                <img
                  src={item.foto}
                  alt={item.nama}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#5C3317]">
                    {item.nama}
                  </h3>

                  <p className="text-[#8B4513] text-xl font-bold mt-3">
                    {item.harga}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PARTY SIZE */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Paket Party Size
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-[#8B4513] mb-4">
                Party Size Love ❤️
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Isi 12 pcs dimsum</li>
                <li>✓ Bonus 2 Chili Oil</li>
                <li>✓ Tulisan Custom + Rp5.000</li>
              </ul>

              <p className="text-red-600 text-3xl font-bold mt-6">
                Rp60.000
              </p>

            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">

              <h3 className="text-3xl font-bold text-[#8B4513] mb-4">
                Party Size Lingkaran 🎉
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Isi 20 pcs dimsum</li>
                <li>✓ Bonus 2 Chili Oil</li>
                <li>✓ Tulisan Custom + Rp5.000</li>
              </ul>

              <p className="text-orange-600 text-3xl font-bold mt-6">
                Rp100.000
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Testimoni Pelanggan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow-lg">

              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Dimsumnya enak, lembut dan sausnya mantap.
              </p>

              <p className="mt-4 font-bold">
                - Pelanggan
              </p>

            </div>

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow-lg">

              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Cocok untuk acara keluarga dan ulang tahun.
              </p>

              <p className="mt-4 font-bold">
                - Pelanggan
              </p>

            </div>

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow-lg">

              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Rasanya konsisten dan harga terjangkau.
              </p>

              <p className="mt-4 font-bold">
                - Pelanggan
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* GALERI */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Galeri Produk
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1553621042-f6e147245754"
              alt="dimsum"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d"
              alt="dimsum"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19"
              alt="dimsum"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

          </div>

        </div>

      </section>

      {/* LOKASI */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-4">
            Lokasi Won Dimsum
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Samping Ayam OTI, Jl. Laut No.17,
            Patukangan, Kendal.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Won+Dimsum+By+Woengkoesan+Eatery,+Kendal&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
            />

          </div>

        </div>

      </section>

      {/* KONTAK */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Hubungi Kami
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <h3 className="text-2xl font-bold mb-4">
                WhatsApp 1
              </h3>

              <p className="text-gray-600 mb-6">
                0899 9997 7667
              </p>

              <a
                href="https://wa.me/628999977667?text=Halo%20Won%20Dimsum,%20saya%20ingin%20memesan%20dimsum."
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition"
              >
                Chat Sekarang
              </a>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

              <h3 className="text-2xl font-bold mb-4">
                WhatsApp 2
              </h3>

              <p className="text-gray-600 mb-6">
                0859 4328 1667
              </p>

              <a
                href="https://wa.me/6285943281667?text=Halo%20Won%20Dimsum,%20saya%20ingin%20memesan%20dimsum."
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full inline-block hover:bg-green-600 transition"
              >
                Chat Sekarang
              </a>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}