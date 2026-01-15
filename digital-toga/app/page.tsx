import Link from 'next/link';
import { plants } from '../data/plants';

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      {/* Hero Section */}
      <section 
        className="flex flex-col items-center justify-center min-h-[600px] bg-cover bg-center text-center px-4"
        style={{ backgroundImage: `url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/n41a7cjj_expires_30_days.png')` }}
      >
        <h1 className="text-[#27491F] text-4xl md:text-6xl font-bold max-w-4xl mb-6">
          Oase Kesehatan di Tengah Purwodadi
        </h1>
        <p className="text-black text-xl md:text-2xl max-w-2xl mb-10">
          Tumbuh dan dirawat dengan sepenuh hati untuk kesehatan keluarga Indonesia.
        </p>
      </section>

      {/* Deskripsi TOGA */}
      <section className="py-20 px-6 md:px-[100px] bg-[#F9F9F9]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-black">Apa Itu TOGA?</h2>
            <p className="text-[#298547] text-lg leading-relaxed">
              TOGA adalah singkatan dari Tanaman Obat Keluarga. Berfungsi sebagai 'Apotek Hidup' untuk memenuhi kebutuhan obat-obatan ringan sehari-hari secara mandiri.
            </p>
          </div>
          <div className="bg-[#B78960] p-4 rounded-2xl shadow-xl">
            <img 
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/srircqvn_expires_30_days.png" 
              className="w-full rounded-lg" 
              alt="TOGA" 
            />
          </div>
        </div>
      </section>

      {/* Koleksi Section */}
      <section id="koleksi" className="bg-[#293F34] py-20 px-6 md:px-[100px]">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">Koleksi Tanaman</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plants.map((plant) => (
            <div key={plant.slug} className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <img src={plant.img} className="h-64 w-full object-cover" alt={plant.name} />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{plant.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plant.descShort}</p>
                <Link 
                  href={`/tanaman/${plant.slug}`}
                  className="inline-block text-[#067AD2] font-bold border-t border-gray-100 pt-4 w-full hover:underline"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lokasi Section */}
      <section id="lokasi" className="py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-black">Letak Taman TOGA</h2>
        <div 
          className="w-full max-w-5xl h-[400px] bg-cover bg-center rounded-3xl p-8 flex items-start shadow-lg"
          style={{ backgroundImage: `url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/l2jfPHCa6W/9vp0s1m2_expires_30_days.png')` }}
        >
          <div className="bg-white p-5 rounded-lg shadow-md max-w-xs">
            <h4 className="font-bold text-black">Taman TOGA KKN T - 47 ITERA</h4>
            <p className="text-xs text-gray-600 mt-2">Purwodadi, Kec. Way Sulan, Lampung Selatan.</p>
            <p className="text-[#067AD2] text-xs mt-4 font-bold cursor-pointer">View larger map</p>
          </div>
        </div>
      </section>
    </main>
  );
}