import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-poppins)]">
      {/* Container Utama (Geser overflow-hidden agar tidak ada scrollbar aneh) */}
      <div style={{ width: '100%', maxWidth: 1440, height: 4414, margin: '0 auto', position: 'relative', background: '#FAFAFA', overflow: 'hidden' }}>
        
        {/* Background Gradient */}
        <div style={{ width: 1440, height: 638, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #737373 41%, #737373 41%, rgba(217, 217, 217, 0) 100%)' }} />
        
        {/* Hero Image */}
        <img 
          style={{ width: 1464.11, height: 658.10, left: -7.99, top: -21.09, position: 'absolute', opacity: 0.60, boxShadow: '7.4px 7.4px 7.4px ', filter: 'blur(3.70px)' }} 
          src="https://placehold.co/1464x658" 
          alt="Hero Background"
        />

        {/* Dots (Slider Indicator) */}
        <div style={{ width: 36, height: 9, left: 669, top: 614, position: 'absolute', background: '#8EC63F', borderRadius: 4.50 }} />
        <div style={{ width: 9, height: 9, left: 709, top: 614, position: 'absolute', background: '#737373', borderRadius: 9999 }} />
        <div style={{ width: 9, height: 9, left: 722, top: 614, position: 'absolute', background: '#737373', borderRadius: 9999 }} />
        <div style={{ width: 9, height: 9, left: 735, top: 614, position: 'absolute', background: '#737373', borderRadius: 9999 }} />
        <div style={{ width: 9, height: 9, left: 748, top: 614, position: 'absolute', background: '#737373', borderRadius: 9999 }} />
        <div style={{ width: 9, height: 9, left: 761, top: 614, position: 'absolute', background: '#737373', borderRadius: 9999 }} />

        {/* Hero Title */}
        <div style={{ left: 153, top: 319, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#274920', fontSize: 58.01, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '51.03px', wordWrap: 'break-word', textShadow: '0px 0px 19px rgba(255, 255, 255, 1.00)' }}>
          Oase Kesehatan di Tengah Purwodadi
        </div>

        {/* Green Section Background */}
        <div style={{ width: 1467, height: 2301, left: -13, top: 1166, position: 'absolute', background: '#294035' }} />
        
        {/* White Section Background */}
        <div style={{ width: 1440, height: 413.18, left: 0, top: 947, position: 'absolute', background: '#FAFAFA' }} />
        
        {/* Subtitle */}
        <div style={{ width: 807, height: 51.45, left: 317, top: 389, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 30.80, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '27.10px', wordWrap: 'break-word' }}>
          Tumbuh dan dirawat dengan sepenuh hati di tanah Purwodadi, untuk kesehatan keluarga Indonesia.
        </div>

        {/* Section: Apa Itu TOGA */}
        <div style={{ left: 100, top: 760, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <span>
            <span style={{ color: 'black', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '49.98px', wordWrap: 'break-word' }}>Apa Itu </span>
            <span style={{ color: '#298547', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '49.98px', wordWrap: 'break-word' }}>TOGA</span>
            <span style={{ color: 'black', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '49.98px', wordWrap: 'break-word' }}>?</span>
          </span>
        </div>

        {/* Description Text */}
        <div style={{ width: 632, left: 100, top: 844, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <span>
            <span style={{ color: '#298547', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}>TOGA</span>
            <span style={{ color: 'black', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}> adalah singkatan dari Tanaman Obat Keluarga. Yang mana merupakan sebidang tanah, baik di halaman rumah, kebun, atau ladang, yang dibudidayakan khusus dengan tanaman-tanaman yang berkhasiat sebagai obat.<br /><br />Secara esensi, </span>
            <span style={{ color: '#298547', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}>TOGA</span>
            <span style={{ color: 'black', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}> berfungsi sebagai '</span>
            <span style={{ color: '#298547', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}>Apotek Hidup</span>
            <span style={{ color: 'black', fontSize: 24, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '24px', letterSpacing: 0.48, wordWrap: 'break-word' }}>' bagi keluarga. Tujuannya adalah untuk memenuhi kebutuhan obat-obatan ringan sehari-hari secara mandiri, mempromosikan gaya hidup sehat dengan bahan alami, serta memperindah lingkungan sekitar rumah.</span>
          </span>
        </div>

        {/* Image Box */}
        <div style={{ width: 509, height: 358, left: 831, top: 770, position: 'absolute', background: '#B88A61', borderRadius: 10 }} />
        <img style={{ width: 477, height: 337, left: 847, top: 780, position: 'absolute' }} src="https://placehold.co/477x337" alt="Toga Image" />

        {/* Section Title: Koleksi */}
        <div style={{ width: 738, left: 352, top: 1445, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <span>
            <span style={{ color: 'white', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '49.98px', wordWrap: 'break-word' }}>Koleksi Tanaman </span>
            <span style={{ color: '#DFFFB1', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '49.98px', wordWrap: 'break-word' }}>TOGA</span>
            <span style={{ color: 'white', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '49.98px', wordWrap: 'break-word' }}> di Purwodadi</span>
          </span>
        </div>

        {/* Cards & Content */}
        {/* --- Card 1 --- */}
        <div style={{ width: 393, height: 543, left: 100, top: 1655, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <div style={{ width: 393, height: 339, left: 100, top: 1655, position: 'absolute', background: '#87C23F', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} />
        <img style={{ width: 414, height: 463, left: 90, top: 1644, position: 'absolute' }} src="https://placehold.co/414x463" alt="Kumis Kucing" />
        
        <div style={{ width: 355, left: 120, top: 2026, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Kumis Kucing</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Tanaman kumis kucing merupakan tanaman semak dengan tinggi sekitar 50–150 cm. Daunnya berbentuk bulat ...</div>
        </div>
        <div style={{ width: 150, left: 112, top: 2160, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 100, top: 2142, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* --- Card 2 --- */}
        <div style={{ width: 393, height: 543, left: 524, top: 1655, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 524, top: 1655, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Tempuyung" />
        <div style={{ width: 355, left: 542, top: 2026, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Tempuyung</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Tanaman tempuyung merupakan tanaman obat yang tumbuh liar dan mudah ditemukan di berbagai lingkungan. Tanaman ini tumbuh ...</div>
        </div>
        <div style={{ width: 150, left: 536, top: 2160, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 524, top: 2142, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* --- Card 3 --- */}
        <div style={{ width: 393, height: 543, left: 947, top: 1655, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 947, top: 1655, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Jahe" />
        <div style={{ width: 355, left: 966, top: 2026, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Jahe</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Tanaman jahe merupakan tanaman rimpang yang mudah tumbuh di daerah tropis. Batangnya berupa rimpang yang  ...</div>
        </div>
        <div style={{ width: 150, left: 959, top: 2160, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 947, top: 2142, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* --- Row 2 Cards (Daun Salam, Bunga Telang, Lidah Buaya) --- */}
        {/* Card 4 (Daun Salam) */}
        <div style={{ width: 393, height: 543, left: 102, top: 2256, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 102, top: 2256, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Daun Salam" />
        <div style={{ width: 355, left: 121, top: 2627, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Daun Salam</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Daun salam adalah tanaman berupa pohon yang memiliki daun berwarna hijau mengilap dengan bentuk lonjong dan aroma khas. Tanaman ...</div>
        </div>
        <div style={{ width: 150, left: 114, top: 2761, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 102, top: 2743, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* Card 5 (Bunga Telang) */}
        <div style={{ width: 393, height: 543, left: 526, top: 2256, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 526, top: 2256, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Bunga Telang" />
        <div style={{ width: 355, left: 545, top: 2627, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Bunga Telang</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Bunga telang merupakan tanaman merambat yang dikenal dengan bunganya yang berwarna biru cerah, meskipun terdapat pula varietas  ...</div>
        </div>
        <div style={{ width: 150, left: 538, top: 2761, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 526, top: 2743, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* Card 6 (Lidah Buaya) */}
        <div style={{ width: 393, height: 543, left: 945, top: 2256, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 945, top: 2256, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Lidah Buaya" />
        <div style={{ width: 355, left: 964, top: 2627, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Lidah Buaya</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Lidah buaya merupakan tanaman dengan daun yang tebal dan berdaging, berfungsi sebagai tempat penyimpanan air. Daunnya  ...</div>
        </div>
        <div style={{ width: 150, left: 957, top: 2761, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 945, top: 2743, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* Card 7 (Lavender) */}
        <div style={{ width: 393, height: 543, left: 102, top: 2857, position: 'absolute', background: 'white', boxShadow: '0px 0px 13px rgba(255, 253.50, 245.54, 0.45)', borderRadius: 15 }} />
        <img style={{ width: 393, height: 339, left: 102, top: 2857, position: 'absolute', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} src="https://placehold.co/393x339" alt="Lavender" />
        <div style={{ width: 355, left: 121, top: 3227, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5, display: 'inline-flex' }}>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 23.33, fontFamily: 'var(--font-poppins)', fontWeight: '700', lineHeight: '20.52px', wordWrap: 'break-word' }}>Lavender</div>
          <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '19.74px', wordWrap: 'break-word' }}>Lavender merupakan tanaman herbal aromatik yang mudah dikenali dari bunganya yang berwarna ungu keabu-abuan serta  ...</div>
        </div>
        <div style={{ width: 150, left: 114, top: 3362, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 14, fontFamily: 'var(--font-poppins)', fontWeight: '500', lineHeight: '19.74px', wordWrap: 'break-word' }}>Baca Selengkapnya</div>
        <div style={{ width: 393, height: 0, left: 102, top: 3344, position: 'absolute', boxShadow: '0px 2px 1.7px rgba(0, 0, 0, 0.17)', outline: '0.50px rgba(0.47, 0.47, 0.47, 0.50) solid', outlineOffset: '-0.25px' }}></div>

        {/* Section: Letak Taman */}
        <div style={{ width: 738, left: 340, top: 3591, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <span>
            <span style={{ color: 'black', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '49.98px', wordWrap: 'break-word' }}>Letak Taman </span>
            <span style={{ color: '#298547', fontSize: 56.82, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '49.98px', wordWrap: 'break-word' }}>TOGA</span>
          </span>
        </div>

        {/* Map & Location Info */}
        <img style={{ width: 953, height: 526, left: 246, top: 3688, position: 'absolute', borderRadius: 15 }} src="https://placehold.co/953x526" alt="Map" />
        
        {/* Map Card Info */}
        <div style={{ width: 332, height: 123, left: 269, top: 3719, position: 'absolute', background: 'white' }} />
        <div style={{ left: 286, top: 3736, position: 'absolute', textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 16.08, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '14.15px', wordWrap: 'break-word' }}>Taman TOGA KKN T - 47 ITERA</div>
        <div style={{ width: 243, left: 286, top: 3757, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 12, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '10.56px', wordWrap: 'break-word' }}>GH4C+R89, Purwodadi, Kec. Way Sulan, Kabupaten Lampung Selatan, Lampung 35356</div>
        <div style={{ width: 105, left: 286, top: 3815, position: 'absolute', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#077AD2', fontSize: 12, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '10.56px', wordWrap: 'break-word' }}>View larger map</div>
        
        {/* Map Icons */}
        <div style={{ width: 39, height: 39, left: 544, top: 3736, position: 'absolute', overflow: 'hidden' }}>
          <div style={{ width: 31.69, height: 31.69, left: 3.65, top: 3.66, position: 'absolute', background: '#737373' }} />
        </div>
        <div style={{ width: 39, height: 84, left: 1095, top: 4055, position: 'absolute', background: 'white' }} />
        <div style={{ width: 39, height: 0, left: 1095, top: 4099, position: 'absolute', outline: '0.50px rgba(0, 0, 0, 0.30) solid', outlineOffset: '-0.25px' }}></div>
        <div style={{ width: 18, height: 19, left: 1106, top: 4068, position: 'absolute', overflow: 'hidden' }}>
          <div style={{ width: 12, height: 12.67, left: 3, top: 3.17, position: 'absolute', background: 'rgba(0.47, 0.47, 0.47, 0.50)' }} />
        </div>
        <div style={{ width: 12, height: 3, left: 1109, top: 4118, position: 'absolute', background: 'rgba(0.47, 0.47, 0.47, 0.50)' }} />
        <div style={{ width: 55, height: 55, left: 716, top: 3937, position: 'absolute', overflow: 'hidden' }}>
          <div style={{ width: 32.08, height: 45.83, left: 11.46, top: 4.58, position: 'absolute', background: '#822621' }} />
        </div>

        {/* Footer */}
        <div style={{ width: 1440, height: 108, left: 0, top: 4306, position: 'absolute', background: '#2F251C' }} />
        <div style={{ left: 579, top: 4332, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18.78, fontFamily: 'var(--font-poppins)', fontWeight: '400', wordWrap: 'break-word' }}>
          About TogaPedia • Contact Us<br />© 2025 KKN T - Purwodadi
        </div>

        {/* Navbar */}
        <div style={{ width: 1440, height: 100, left: 0, top: 0, position: 'absolute' }}>
          <div style={{ width: 1440, height: 84, paddingLeft: 100, paddingRight: 100, paddingTop: 22, paddingBottom: 22, left: 0, top: 0, position: 'absolute', background: '#386642', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
              <div style={{ width: 42.36, height: 44.07, position: 'relative' }}>
                  {/* Logo Icon Placeholder */}
              </div>
              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 30.72, fontFamily: 'var(--font-poppins)', fontWeight: '600', lineHeight: '27.02px', wordWrap: 'break-word' }}>TogaPedia</div>
            </div>
            <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'flex' }}>
              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 15, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '13.19px', wordWrap: 'break-word', cursor: 'pointer' }}>Beranda</div>
              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 15, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '13.19px', wordWrap: 'break-word', cursor: 'pointer' }}>Koleksi</div>
              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 15, fontFamily: 'var(--font-poppins)', fontWeight: '400', lineHeight: '13.19px', wordWrap: 'break-word', cursor: 'pointer' }}>Lokasi</div>
            </div>
          </div>
          {/* Logo Graphic */}
          <div style={{ width: 35, height: 36.41, left: 100, top: 24, position: 'absolute' }}>
            <div style={{ width: 16.89, height: 16.22, left: 0, top: 0.06, position: 'absolute', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)' }} />
            <div style={{ width: 17.59, height: 9.15, left: 17.42, top: 18.78, position: 'absolute', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)' }} />
            <div style={{ width: 5.46, height: 5.94, left: 6.54, top: 18.78, position: 'absolute', transform: 'rotate(34deg)', transformOrigin: 'top left', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)', border: '2.42px white solid' }} />
            <div style={{ width: 12.49, height: 7.04, left: 2.78, top: 26.77, position: 'absolute', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)', border: '2.42px white solid' }} />
            <div style={{ width: 6.80, height: 6.67, left: 4.93, top: 26.10, position: 'absolute', transform: 'rotate(-13deg)', transformOrigin: 'top left', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)', outline: '0.04px white solid', outlineOffset: '-0.02px' }} />
            <div style={{ width: 12.40, height: 11.56, left: 20.11, top: 24.85, position: 'absolute', background: 'white', boxShadow: '0.28px 0.22px 0.54px rgba(0, 0, 0, 0.25)', borderRadius: 0.40 }} />
          </div>
        </div>

      </div>
    </main>
  );
}