import { plants } from '../../../data/plants';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PlantDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) return notFound();

  return (
    <main className="min-h-screen bg-[#F3F4F6] py-8 md:py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-6 md:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
            aria-label="Kembali ke beranda"
          >
            <span className="text-xl">←</span>
            <span className="text-sm font-medium">Kembali</span>
          </Link>
        </div>

        <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Image area */}
            <div className="lg:col-span-6">
              <div className="w-full h-[300px] md:h-[560px] relative">
                <img
                  src={plant.img}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay nama tanaman yang responsif */}
                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:bottom-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <h1 className="text-xl md:text-3xl font-bold text-black">{plant.name}</h1>
                  <p className="text-xs md:text-sm text-gray-700 line-clamp-1 md:line-clamp-none">{plant.descShort}</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 p-6 md:p-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3 border-b-2 border-green-500 inline-block">Deskripsi</h2>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">{plant.descFull}</p>
                </section>

                <section>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">Cara Budidaya</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base bg-green-50/50 p-4 rounded-xl border border-green-100">{plant.cultivation}</p>
                </section>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-gray-50 p-5 rounded-xl border">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Taksonomi</h4>
                    <ul className="text-xs md:text-sm text-gray-800 space-y-1.5">
                      <li><strong>Kingdom:</strong> {plant.taxonomy.kingdom}</li>
                      <li><strong>Divisi:</strong> {plant.taxonomy.divisi}</li>
                      <li><strong>Kelas:</strong> {plant.taxonomy.kelas}</li>
                      <li><strong>Ordo:</strong> {plant.taxonomy.ordo}</li>
                      <li><strong>Famili:</strong> {plant.taxonomy.famili}</li>
                      <li><strong>Genus:</strong> {plant.taxonomy.genus}</li>
                      <li><strong>Spesies:</strong> <em className="text-gray-600">{plant.taxonomy.spesies}</em></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-xl border">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Khasiat</h4>
                    <p className="text-xs md:text-sm text-gray-700 mb-3 font-medium">Bagian digunakan: <span className="text-black">{plant.partsUsed}</span></p>
                    <div className="flex flex-wrap gap-2">
                      {plant.benefits.map((b, i) => (
                        <span key={i} className="text-[10px] md:text-xs bg-white text-green-700 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">{b}</span>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}