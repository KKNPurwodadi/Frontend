import { plants } from '../../../data/plants';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Tambahkan async pada fungsi komponen
export default async function PlantDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Unwrap params menggunakan await
  const { slug } = await params;
  
  // Cari tanaman berdasarkan slug yang sudah di-unwrap
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) return notFound();

  return (
    <main className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] shadow-sm relative overflow-hidden">
        
        {/* Tombol Back */}
        <Link 
          href="/" 
          className="absolute top-8 right-8 text-4xl text-gray-400 hover:text-black transition-colors"
        >
          &times;
        </Link>

        <div className="p-8 md:p-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-10">{plant.name}</h1>
          
          <div className="w-full h-[400px] md:h-[550px] overflow-hidden rounded-3xl mb-12">
            <img src={plant.img} alt={plant.name} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Kolom Kiri: Deskripsi & Cara Budidaya */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Deskripsi Tanaman:</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{plant.descFull}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-black mb-4">Cara Budidaya:</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{plant.cultivation}</p>
              </section>
            </div>

            {/* Kolom Kanan: Taksonomi, Bagian, Khasiat */}
            <div className="space-y-12 bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <section>
                <h2 className="text-xl font-bold text-black mb-4">Taksonomi Tanaman:</h2>
                <ul className="space-y-2 text-sm text-gray-800">
                  <li>• <strong>Kingdom:</strong> {plant.taxonomy.kingdom}</li>
                  <li>• <strong>Divisi:</strong> {plant.taxonomy.divisi}</li>
                  <li>• <strong>Kelas:</strong> {plant.taxonomy.kelas}</li>
                  <li>• <strong>Ordo:</strong> {plant.taxonomy.ordo}</li>
                  <li>• <strong>Famili:</strong> {plant.taxonomy.famili}</li>
                  <li>• <strong>Genus:</strong> {plant.taxonomy.genus}</li>
                  <li>• <strong>Spesies:</strong> <em className="text-gray-600">{plant.taxonomy.spesies}</em></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-2">Bagian Dimanfaatkan:</h2>
                <p className="text-gray-700">{plant.partsUsed}</p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-black mb-4">Khasiat Utama:</h2>
                <ul className="space-y-3">
                  {plant.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}