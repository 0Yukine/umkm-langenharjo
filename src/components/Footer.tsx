export default function Footer() {
  return (
    <footer className="bg-[#5C3317] text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h3 className="text-3xl font-bold mb-4">
              UMKM Langenharjo
            </h3>

            <p className="text-gray-300">
              Portal digital promosi UMKM Desa Langenharjo.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-4">
              UMKM
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Won Dimsum</li>
              <li>Seblak Semar</li>
              <li>Syifa Eco</li>
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold mb-4">
              Program
            </h3>

            <p className="text-gray-300">
              KKN Universitas Semarang 2026
            </p>

          </div>

        </div>

        <div className="border-t border-[#7A4A26] mt-10 pt-8 text-center text-gray-300">
          © 2026 UMKM Desa Langenharjo
        </div>

      </div>

    </footer>
  );
}