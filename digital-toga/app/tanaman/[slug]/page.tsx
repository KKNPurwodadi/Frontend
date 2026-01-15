
import { plants } from '../../../data/plants';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Tambahkan async pada fungsi komponen
export default async function PlantDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // Unwrap params using await
  const { slug } = await params;

  // Find plant by slug
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) return notFound();

  return (
    <main className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md transition"
            aria-label="Kembali ke beranda"
          >
            <span className="text-2xl">←</span>
            <span className="text-sm font-medium">Kembali</span>
          </Link>
        </div>

        <div className="bg-white rounded-[32px] shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Image area */}
            <div className="lg:col-span-6">
              <div className="w-full h-[420px] md:h-[560px] relative">
                <img
                  src={plant.img}
                  alt={plant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-6 bottom-6 bg-white/80 backdrop-blur rounded-lg px-4 py-3 shadow">
                  <h1 className="text-2xl md:text-3xl font-bold text-black">{plant.name}</h1>
                  <p className="text-sm text-gray-700">{plant.descShort}</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6 p-8 md:p-12">
              <div className="space-y-6">
                <section>
                  <h2 className="text-3xl font-extrabold text-black mb-3">Deskripsi</h2>
                  <p className="text-gray-700 leading-relaxed">{plant.descFull}</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-black mb-3">Cara Budidaya</h3>
                  <p className="text-gray-700 leading-relaxed">{plant.cultivation}</p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3">Taksonomi</h4>
                    <ul className="text-sm text-gray-800 space-y-1">
                      <li><strong>Kingdom:</strong> {plant.taxonomy.kingdom}</li>
                      <li><strong>Divisi:</strong> {plant.taxonomy.divisi}</li>
                      <li><strong>Kelas:</strong> {plant.taxonomy.kelas}</li>
                      <li><strong>Ordo:</strong> {plant.taxonomy.ordo}</li>
                      <li><strong>Famili:</strong> {plant.taxonomy.famili}</li>
                      <li><strong>Genus:</strong> {plant.taxonomy.genus}</li>
                      <li><strong>Spesies:</strong> <em className="text-gray-600">{plant.taxonomy.spesies}</em></li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-3">Bagian & Khasiat</h4>
                    <p className="text-sm text-gray-700 mb-3"><strong>Bagian dimanfaatkan:</strong> {plant.partsUsed}</p>
                    <div className="flex flex-wrap gap-2">
                      {plant.benefits.map((b, i) => (
                        <span key={i} className="text-sm bg-green-50 text-green-800 px-3 py-1 rounded-full border border-green-100">{b}</span>
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