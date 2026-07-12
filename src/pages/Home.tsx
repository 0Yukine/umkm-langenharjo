import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

import { umkmData } from "../data/umkm";
import UmkmCard from "../components/UmkmCard";

export default function Home() {
  return (
    <MainLayout>

      <Hero />

      {/* Tentang Portal */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold text-[#5C3317] mb-8">
      Tentang Portal
    </h2>

    <p className="text-lg text-gray-600 leading-8">
      Portal UMKM Desa Langenharjo merupakan media promosi digital
      yang dikembangkan untuk membantu UMKM lokal memperluas
      jangkauan pemasaran serta memperkenalkan produk unggulan
      kepada masyarakat luas.
    </p>

  </div>
</section>

      {/* UMKM */}
      <section
  id="umkm"
  className="py-24 bg-[#F8F5F0]"
>
        <div className="max-w-7xl mx-auto px-6">

 <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-4">
  UMKM Mitra KKN
</h2>

<p className="text-center text-gray-500 mb-16">
  Produk unggulan yang menjadi mitra KKN Universitas Semarang
</p>

          <div className="grid md:grid-cols-3 gap-8">

            {umkmData.map((item) => (
              <UmkmCard
                key={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                slug={item.slug}
              />
            ))}

          </div>

        </div>
      </section>

      <section className="py-24 bg-white">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-[#8B4513] mb-16">
      Kenapa Memilih UMKM Lokal?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#FFF8EE] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Produk Berkualitas
        </h3>

        <p className="text-gray-600">
          Dibuat menggunakan bahan pilihan dan proses yang terjaga kualitasnya.
        </p>
      </div>

      <div className="bg-[#FFF8EE] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Mendukung UMKM Lokal
        </h3>

        <p className="text-gray-600">
          Setiap pembelian membantu pertumbuhan ekonomi masyarakat desa.
        </p>
      </div>

      <div className="bg-[#FFF8EE] p-8 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">
          Produk Homemade
        </h3>

        <p className="text-gray-600">
          Dikerjakan langsung oleh pelaku usaha dengan cita rasa khas.
        </p>
      </div>

    </div>

  </div>

</section>

      <Stats />

      <Gallery />

      <Contact />

    </MainLayout>
  );
}