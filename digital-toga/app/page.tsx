import Link from 'next/link';
import { plants } from '../data/plants';

export default function HomePage() {
  const gmapsUrl = "https://www.google.com/maps/search/?api=1&query=GH4C%2BR89%2CPurwodadi%2CWay%20Sulan%2CLampung%20Selatan";

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="flex flex-col items-center justify-center min-h-[600px] bg-cover bg-center text-center px-6"
        style={{ backgroundImage: `url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/n41a7cjj_expires_30_days.png')` }}
      >
        <h1 className="text-[#27491F] text-4xl md:text-6xl font-bold max-w-4xl mb-6 leading-tight">
          Oase Kesehatan di Tengah Purwodadi
        </h1>
        <p className="text-black text-xl md:text-2xl max-w-3xl mb-10">
          Tumbuh dan dirawat dengan sepenuh hati untuk kesehatan keluarga Indonesia.
        </p>
        <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/z44xn4tf_expires_30_days.png" className="w-24" alt="divider" />
      </section>

      {/* Penjelasan TOGA */}
      <section className="py-20 px-6 md:px-[100px] bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Apa Itu TOGA?</h2>
            <p className="text-[#298547] text-lg leading-relaxed mb-4">
              TOGA adalah singkatan dari Tanaman Obat Keluarga. Berfungsi sebagai 'Apotek Hidup' untuk kebutuhan mandiri.
            </p>
            <p className="text-[#298547] text-lg leading-relaxed">
              Tujuannya adalah mempromosikan gaya hidup sehat dengan bahan alami serta memperindah lingkungan rumah.
            </p>
          </div>
          <div className="bg-[#B78960] p-4 rounded-3xl shadow-xl">
            <img src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/srircqvn_expires_30_days.png" className="w-full rounded-2xl" alt="Ilustrasi" />
          </div>
        </div>
      </section>

      {/* Koleksi Section */}
      <section id="koleksi" className="bg-[#293F34] py-20 px-6 md:px-[100px]">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">Koleksi Tanaman</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plants.map((plant) => (
            <div key={plant.slug} className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col group">
              <img src={plant.img} className="h-64 w-full object-cover group-hover:scale-105 transition duration-500" alt={plant.name} />
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-black mb-3">{plant.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{plant.descShort}</p>
                <div className="border-t border-gray-100 pt-5">
                  <Link href={`/tanaman/${plant.slug}`} className="text-[#067AD2] font-bold hover:underline">
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lokasi Section */}
      <section id="lokasi" className="py-24 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 text-black">Letak Taman TOGA</h2>
        <div 
          className="w-full max-w-5xl h-[450px] bg-cover bg-center rounded-[40px] p-8 flex items-start shadow-xl relative overflow-hidden"
          style={{ backgroundImage: `url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/9vp0s1m2_expires_30_days.png')` }}
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm relative z-10">
            <h4 className="font-bold text-black text-lg">Taman TOGA KKN T - 47 ITERA</h4>
            <p className="text-sm text-gray-600 mt-2">GH4C+R89, Purwodadi, Kec. Way Sulan, Lampung Selatan.</p>
            <a 
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#067AD2] text-sm mt-5 font-bold hover:underline"
            >
              View larger map
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}