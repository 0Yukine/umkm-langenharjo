import { Link } from "react-router-dom";

type Props = {
  name: string;
  image: string;
  description: string;
  slug: string;
};

export default function UmkmCard({
  name,
  image,
  description,
  slug,
}: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#F1E4D3]">

      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-[#5C3317] mb-3">
          {name}
        </h3>

        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>

        <Link
          to={`/${slug}`}
          className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-full hover:bg-[#6B3410] transition"
        >
          Lihat Detail →
        </Link>

      </div>

    </div>
  );
}