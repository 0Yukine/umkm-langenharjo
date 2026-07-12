export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1563245372-f21724e3856d",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    "https://images.unsplash.com/photo-1555244162-803834f70033",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1544025162-d76694265947",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#5C3317] mb-16">
          Galeri UMKM
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="UMKM"
              className="rounded-3xl h-72 w-full object-cover shadow-lg hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>

    </section>
  );
}