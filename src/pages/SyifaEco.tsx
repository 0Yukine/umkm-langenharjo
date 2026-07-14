import MainLayout from "../layouts/MainLayout";
import heroImg from "../assets/syifa-eco/hero.jpeg";
import nasiboxImg from "../assets/syifa-eco/nasibox.jpeg";
import sekaliImg from "../assets/syifa-eco/sekali.jpg";
import biasaImg from "../assets/syifa-eco/biasa.jpeg";
import spesialImg from "../assets/syifa-eco/spesial.jpeg";
import customImg from "../assets/syifa-eco/custom.jpeg";

export default function SyifaEco() {
  const layanan = [
    {
      nama: "Nasi Box",
      harga: "Rp15.000 - Rp50.000",
      foto: nasiboxImg,
    },

    {
      nama: "Paket Sekali Makan",
      harga: "Rp15.000 - Rp30.000",
      foto: sekaliImg,
    },

    {
      nama: "Gudeg Biasa",
      harga: "Rp10.000",
      foto: biasaImg,
    },

    {
      nama: "Gudeg Spesial",
      harga: "Rp30.000",
      foto: spesialImg,
    },

    {
      nama: "Custom Menu",
      harga: "Sesuai Pesanan",
      foto: customImg,
    },

  ];

  return (
    <MainLayout>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#FFF8EE] to-[#F5E6D3] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-[#8B4513] font-semibold mb-4">
                UMKM Catering Desa Langenharjo
              </p>

              <h1 className="text-6xl font-bold text-[#5C3317] leading-tight mb-6">
                Catering
                <br />
                Syifa Eco
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Melayani catering, nasi box, snack box,
                prasmanan, dan berbagai kebutuhan konsumsi acara
                dengan menu unggulan Gudeg Jogja.
              </p>

              <a
                href="https://wa.me/628156547141"
                target="_blank"
                rel="noreferrer"
                className="bg-[#8B4513] text-white px-8 py-4 rounded-full"
              >
                Pesan Sekarang
              </a>

            </div>

            <div>

              <img
                src={heroImg}
                alt="Syifa Eco"
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
            Tentang Syifa Eco
          </h2>

          <p className="text-lg text-gray-600 leading-8">
            Syifa Eco merupakan UMKM Desa Langenharjo yang
            bergerak di bidang jasa catering dan penyedia
            makanan untuk berbagai acara. Mengutamakan kualitas
            rasa, kebersihan, serta pelayanan terbaik untuk
            setiap pelanggan.
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
              Ibu Khanan
            </h3>

            <p className="text-gray-600 mt-4">
              Pemilik Catering Syifa Eco
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
              Melayani Setiap Hari
            </p>

            <p className="text-3xl font-bold text-[#8B4513] mb-6">
              24 Jam
            </p>

            <p className="text-gray-600">
              Siap melayani pemesanan catering kapan saja
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
              src="/videos/syifa-eco.mp4"
              type="video/mp4"
            />
          </video>

        </div>

      </section>

      {/* MENU UNGGULAN */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <img
              src={spesialImg}
              alt="Gudeg Jogja"
              className="rounded-3xl shadow-xl h-[450px] w-full object-cover"
            />

            <div>

              <h2 className="text-5xl font-bold text-[#5C3317] mb-6">
                Gudeg Jogja
              </h2>

              <p className="text-lg text-gray-600 leading-8">
                Gudeg Jogja merupakan menu khas unggulan dari
                Syifa Eco. Disajikan dengan ayam, telur,
                sambal krecek dan berbagai pelengkap lainnya.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* LAYANAN */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Layanan Catering
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {layanan.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
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

                  <p className="text-[#8B4513] font-bold text-xl mt-3">
                    {item.harga}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PAKET CATERING */}
      <section className="py-20 bg-[#FFF8EE]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Paket Catering
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-4">
                Paket Snack Box
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Aneka jajanan pasar</li>
                <li>✓ Air mineral</li>
                <li>✓ Kemasan rapi</li>
              </ul>

              <p className="text-green-600 text-2xl font-bold mt-6">
                Mulai Rp10.000
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-4">
                Paket Nasi Box
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Nasi</li>
                <li>✓ Lauk utama</li>
                <li>✓ Sayur & pelengkap</li>
              </ul>

              <p className="text-green-600 text-2xl font-bold mt-6">
                Mulai Rp20.000
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-bold mb-4">
                Paket Prasmanan
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Menu menyesuaikan acara</li>
                <li>✓ Cocok untuk hajatan</li>
                <li>✓ Bisa custom menu</li>
              </ul>

              <p className="text-green-600 text-2xl font-bold mt-6">
                Sesuai Pesanan
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-amber-400">

              <h3 className="text-2xl font-bold mb-4 text-[#8B4513]">
                Paket Gudeg Jogja
              </h3>

              <ul className="space-y-2 text-gray-600">
                <li>✓ Gudeg khas Jogja</li>
                <li>✓ Ayam</li>
                <li>✓ Telur</li>
                <li>✓ Sambal Krecek</li>
              </ul>

              <p className="text-green-600 text-2xl font-bold mt-6">
                Sesuai Pesanan
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Testimoni Pelanggan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow">
              <p className="italic text-gray-600">
                "Rasa masakannya enak dan porsinya pas."
              </p>

              <h4 className="font-bold mt-6">
                Pelanggan Catering
              </h4>
            </div>

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow">
              <p className="italic text-gray-600">
                "Snack box cocok untuk rapat dan acara keluarga."
              </p>

              <h4 className="font-bold mt-6">
                Pelanggan Acara
              </h4>
            </div>

            <div className="bg-[#FFF8EE] p-8 rounded-3xl shadow">
              <p className="italic text-gray-600">
                "Gudeg Jogjanya mantap dan autentik."
              </p>

              <h4 className="font-bold mt-6">
                Pelanggan Gudeg
              </h4>
            </div>

          </div>

        </div>

      </section>

      {/* GALERI */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-12">
            Galeri Catering
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="/images/syifa-eco/galeri1.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="/images/syifa-eco/galeri2.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="/images/syifa-eco/galeri3.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="/images/syifa-eco/galeri4.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="/images/syifa-eco/galeri5.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

            <img
              src="/images/syifa-eco/galeri6.jpeg"
              alt="Catering"
              className="rounded-3xl h-72 w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* LOKASI */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#5C3317] mb-4">
            Lokasi Syifa Eco
          </h2>

          <p className="text-center text-gray-600 mb-10">
            Desa Langenharjo, Kendal
          </p>

          <div className="rounded-3xl overflow-hidden shadow-lg">

            <iframe
              src="https://www.google.com/maps?q=Catering+Syifa+Eco,+Kendal&output=embed"
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

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#5C3317] mb-4">
            Hubungi Syifa Eco
          </h2>

          <p className="text-gray-600 mb-4">
            Pemilik: Pak Khanan
          </p>

          <p className="text-gray-600 mb-8">
            WhatsApp: 0815-6547-141
          </p>

          <a
            href="https://wa.me/628156547141?text=Halo%20Syifa%20Eco,%20saya%20ingin%20bertanya%20tentang%20layanan%20catering."
            target="_blank"
            rel="noreferrer"
            className="bg-[#8B4513] text-white px-8 py-4 rounded-full text-lg hover:opacity-90 transition"
          >
            Pesan via WhatsApp
          </a>

        </div>

      </section>

    </MainLayout>
  );
}