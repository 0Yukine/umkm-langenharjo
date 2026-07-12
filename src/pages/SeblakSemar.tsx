import MainLayout from "../layouts/MainLayout";

export default function SeblakSemar() {
  const toppings = [
    { nama: "Bakso", harga: "Rp2.000" },
    { nama: "Bakso Ikan / Udang", harga: "Rp2.000" },
    { nama: "Bakso Jamur", harga: "Rp2.500" },
    { nama: "Bakso Jumbo", harga: "Rp6.000" },
    { nama: "Balado Puyuh", harga: "Rp4.000" },
    { nama: "Beef", harga: "Rp6.500" },
    { nama: "Dimsum", harga: "Rp3.000" },
    { nama: "Ekor Udang", harga: "Rp3.000" },
    { nama: "Fish Roll", harga: "Rp3.000" },
    { nama: "Kornet", harga: "Rp1.000" },
    { nama: "Naget", harga: "Rp2.000" },
    { nama: "Odeng", harga: "Rp3.000" },
    { nama: "Sosis Besar", harga: "Rp5.000" },
    { nama: "Tahu Aci", harga: "Rp1.000" },
    { nama: "Tofu", harga: "Rp1.000" },
  ];

  return (
    <MainLayout>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#FFF8EE] to-[#F5E6D3] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-[#8B4513] font-semibold mb-4">
                UMKM Kuliner Desa Langenharjo
              </p>

              <h1 className="text-6xl font-bold text-[#5C3317] leading-tight mb-6">
                Seblak
                <br />
                Semar Kendal
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Seblak prasmanan dengan berbagai pilihan topping,
                level pedas yang dapat disesuaikan, serta cita rasa
                khas yang digemari berbagai kalangan.
              </p>

              <a
                href="https://wa.me/6281330377300"
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B4513] text-white px-8 py-4 rounded-full"
              >
                Pesan Sekarang
              </a>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
                alt="Seblak"
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
            Tentang Seblak Semar
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Seblak Semar Kendal merupakan UMKM kuliner yang
            menyediakan konsep seblak prasmanan. Pelanggan dapat
            memilih sendiri topping favorit, tingkat kepedasan,
            serta jenis kuah yang diinginkan sesuai selera.
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
              Pak Umar Kholil
            </h3>

            <p className="text-gray-600 mt-4">
              Pemilik Seblak Semar Kendal
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
              10.00 - 20.00 WIB
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
              src="/videos/seblak-semar.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </section>
            {/* TOPPING */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Daftar Topping
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {toppings.map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF8EE] rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#5C3317] mb-2">
                  {item.nama}
                </h3>

                <p className="text-[#8B4513] font-semibold">
                  {item.harga}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* LEVEL PEDAS */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Pilihan Level Pedas
          </h2>

          <div className="grid md:grid-cols-6 gap-6">

            <div className="bg-green-100 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 0</h3>
              <p>Gratis</p>
            </div>

            <div className="bg-yellow-100 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 1</h3>
              <p>Rp500</p>
            </div>

            <div className="bg-yellow-200 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 2</h3>
              <p>Rp1.000</p>
            </div>

            <div className="bg-orange-200 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 3</h3>
              <p>Rp2.000</p>
            </div>

            <div className="bg-orange-300 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 4</h3>
              <p>Rp3.000</p>
            </div>

            <div className="bg-red-300 rounded-2xl p-6 text-center shadow">
              <h3 className="font-bold text-xl">Level 5</h3>
              <p>Rp4.000</p>
            </div>

          </div>

        </div>

      </section>

      {/* PILIHAN KUAH */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#5C3317] mb-12">
            Pilihan Kuah
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Kuah Nyemek
              </h3>

              <p className="text-gray-600">
                Kuah kental dengan rasa gurih pedas khas seblak.
              </p>

            </div>

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow-lg">

              <h3 className="text-2xl font-bold mb-4">
                Kuah Basah
              </h3>

              <p className="text-gray-600">
                Kuah lebih banyak dan cocok untuk pencinta seblak.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Testimoni Pelanggan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Topping lengkap dan rasa pedasnya pas.
              </p>

              <p className="font-bold mt-4">
                - Pelanggan
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Bisa pilih topping sendiri sesuai selera.
              </p>

              <p className="font-bold mt-4">
                - Pelanggan
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <p className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </p>

              <p className="text-gray-600">
                Harga terjangkau dengan porsi melimpah.
              </p>

              <p className="font-bold mt-4">
                - Pelanggan
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALERI */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Galeri Produk
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
              alt="Seblak"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Seblak"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Seblak"
              className="rounded-3xl h-72 w-full object-cover shadow-lg"
            />

          </div>

        </div>

      </section>

      {/* LOKASI */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-4">
            Lokasi Seblak Semar
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Desa Langenharjo, Kendal
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Seblak+Semar+Kendal&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
            />

          </div>

        </div>

      </section>

      {/* KONTAK */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#5C3317] mb-6">
            Hubungi Kami
          </h2>

          <p className="text-gray-600 mb-8">
            Pesan Seblak Semar melalui WhatsApp
          </p>

          <a
            href="https://wa.me/6281330377300?text=Halo%20Seblak%20Semar,%20saya%20ingin%20memesan%20seblak."
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full text-lg hover:bg-green-600 transition"
          >
            WhatsApp Seblak Semar
          </a>

        </div>

      </section>

    </MainLayout>
  );
}