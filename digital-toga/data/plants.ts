export interface Plant {
  slug: string;
  name: string;
  descShort: string;
  descFull: string;
  cultivation: string;
  taxonomy: {
    kingdom: string;
    divisi: string;
    kelas: string;
    ordo: string;
    famili: string;
    genus: string;
    spesies: string;
  };
  partsUsed: string;
  benefits: string[];
  img: string;
}

export const plants: Plant[] = [
  {
    slug: 'kumis-kucing',
    name: 'Kumis Kucing',
    descShort: 'Tanaman semak dengan tinggi sekitar 50–150 cm yang dikenal dengan benang sarinya yang mencolok...',
    descFull: 'Tanaman kumis kucing merupakan tanaman semak dengan tinggi sekitar 50–150 cm. Daunnya berbentuk bulat telur dengan tepi bergerigi. Bunganya berwarna putih dengan benang sari berwarna ungu yang mencolok. Buahnya berukuran kecil-kecil, sedangkan sistem perakarannya berupa akar tunggang yang berwarna putih kusam.',
    cultivation: 'Budidaya tanaman kumis kucing dilakukan dengan menyiapkan media tanam yang subur dan gembur. Perbanyakan dilakukan melalui stek batang yang ditanam pada tanah lembap hingga muncul akar, kemudian dipindahkan ke lokasi yang mendapatkan sinar matahari cukup. Penyiraman dilakukan secara teratur tanpa berlebihan, disertai pemberian pupuk organik secara berkala. Gulma perlu dibersihkan dan tanaman dipangkas agar pertumbuhannya optimal. Daun kumis kucing dapat dipanen setelah berumur sekitar 2-3 bulan untuk dimanfaatkan sebagai bahan herbal.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Spermatophyta',
      kelas: 'Equisetopsida',
      ordo: 'Lamiales',
      famili: 'Lamiaceae',
      genus: 'Orthosiphon',
      spesies: 'Orthosiphon aristatus (Blume) Miq'
    },
    partsUsed: 'Daun dan Bunga',
    benefits: [
      'Menurunkan tekanan darah',
      'Mengontrol gula darah',
      'Menurunkan asam urat',
      'Melancarkan buang air kecil'
    ],
    img: '/kumis-kucing.png',
  },
  {
    slug: 'tempuyung',
    name: 'Tempuyung',
    descShort: 'Tanaman obat yang tumbuh liar dan mudah ditemukan di berbagai lingkungan lembap...',
    descFull: 'Tanaman tempuyung merupakan tanaman obat yang tumbuh liar dan mudah ditemukan di berbagai lingkungan. Tanaman ini tumbuh dengan baik di tempat yang lembap. Daunnya berbentuk panjang, tipis, dan memiliki tepi bergerigi. Batangnya tumbuh tegak dengan bentuk bulat, sedangkan bunganya berwarna kuning dan tersusun secara mengelompok.',
    cultivation: 'Budidaya tempuyung dapat dilakukan dengan menyiapkan lahan atau pot yang berisi media tanam gembur, subur, dan mengandung cukup bahan organik. Perbanyakan tanaman dapat dilakukan menggunakan biji atau bonggol akar dari tanaman yang telah dewasa. Biji sebaiknya disemai terlebih dahulu pada media yang lembap dan teduh hingga berkecambah dan tumbuh cukup kuat sebelum dipindahkan ke pot atau lahan. Tanaman tempuyung diletakkan di area yang lembap dengan pencahayaan matahari tidak langsung. Penyiraman dilakukan secara rutin untuk menjaga kelembapan tanah tanpa menyebabkan genangan air. Pemupukan organik diberikan secara berkala. Daun tempuyung dapat dipanen secara bertahap setelah tanaman cukup dewasa.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Spermatophyta',
      kelas: 'Asteridae',
      ordo: 'Asterales',
      famili: 'Asteraceae',
      genus: 'Sonchus',
      spesies: 'Sonchus arvensis'
    },
    partsUsed: 'Daun',
    benefits: [
      'Membantu menjaga kesehatan ginjal',
      'Melancarkan buang air kecil',
      'Membantu mengatasi batu ginjal'
    ],
    img: '/tempuyung.png',
  },
  {
    slug: 'daun-salam',
    name: 'Daun Salam',
    descShort: 'Tanaman berupa pohon dengan daun hijau mengilap yang populer sebagai bumbu masakan...',
    descFull: 'Daun salam adalah tanaman berupa pohon yang memiliki daun berwarna hijau mengilap dengan bentuk lonjong dan aroma khas. Tanaman ini banyak dimanfaatkan sebagai bumbu masakan dan mengandung minyak atsiri yang berperan dalam memberikan beragam manfaat bagi kesehatan.',
    cultivation: 'Budidaya tanaman daun salam dilakukan dengan menggunakan bibit tanaman salam yang sehat dan tanam pada media tanam gembur dari campuran tanah, kompos, serta sedikit pasir agar pertumbuhan akar optimal. Tanaman diletakkan di area dengan paparan sinar matahari yang cukup, namun tidak terlalu terik. Penyiraman dilakukan secukupnya untuk menjaga kelembapan tanah tanpa menyebabkan genangan. Pupuk organik diberikan secara berkala setiap 1-2 bulan. Pemangkasan ringan perlu dilakukan agar tanaman tetap rimbun. Daun salam dapat dipanen kapan saja setelah tanaman tumbuh besar.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Magnoliophyta',
      kelas: 'Magnoliopsida',
      ordo: 'Myrtales',
      famili: 'Myrtaceae',
      genus: 'Syzygium',
      spesies: 'Syzygium Polyanthum Walp.'
    },
    partsUsed: 'Daun',
    benefits: [
      'Menurunkan tekanan darah',
      'Menurunkan kolesterol',
      'Mengontrol kadar gula darah'
    ],
    img: '/daun-salam.png',
  },
  {
    slug: 'bunga-telang',
    name: 'Bunga Telang',
    descShort: 'Tanaman merambat dengan bunga biru cerah yang kaya akan antioksidan...',
    descFull: 'Bunga telang merupakan tanaman merambat yang dikenal dengan bunganya yang berwarna biru cerah, meskipun terdapat pula varietas berwarna ungu dan putih. Bunganya berbentuk menyerupai corong dan banyak dimanfaatkan sebagai bahan teh, pewarna alami, serta memiliki beragam khasiat bagi kesehatan, seperti sebagai antioksidan dan membantu meredakan peradangan.',
    cultivation: 'Penanaman bunga telang dapat dilakukan menggunakan benih atau stek pada media tanam gembur yang merupakan campuran tanah, kompos, dan sedikit pasir. Tanaman diletakkan di tempat yang memperoleh sinar matahari penuh hingga sebagian hari karena telang tumbuh optimal di lingkungan yang terang. Penyiraman dilakukan secara rutin untuk menjaga kelembapan tanah, disertai pemberian pupuk organik setiap 3-4 minggu guna mendukung pertumbuhan. Karena bersifat merambat, tanaman perlu diberi ajir atau penopang. Bunga dapat dipetik saat mekar sempurna dan dimanfaatkan sebagai teh herbal atau pewarna alami.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Magnoliophyta',
      kelas: 'Magnoliopsida',
      ordo: 'Fabales',
      famili: 'Fabaceae',
      genus: 'Clitoria',
      spesies: 'Clitoria Ternatea L.'
    },
    partsUsed: 'Bunga',
    benefits: [
      'Mengurangi peradangan',
      'Mengatasi depresi',
      'Mengontrol kadar gula darah'
    ],
    img: '/telang.png',
  },
  {
    slug: 'lidah-buaya',
    name: 'Lidah Buaya',
    descShort: 'Tanaman dengan daun tebal berdaging yang kaya akan gel penyembuh...',
    descFull: 'Lidah buaya merupakan tanaman dengan daun yang tebal dan berdaging, berfungsi sebagai tempat penyimpanan air. Daunnya berwarna hijau hingga hijau kebiruan dengan permukaan licin serta tepi yang bergerigi halus. Di bagian dalam daun terdapat gel bening yang kaya akan kandungan air dan berbagai senyawa aktif, sehingga tanaman ini banyak dimanfaatkan untuk keperluan kesehatan dan perawatan kulit.',
    cultivation: 'Budidaya lidah buaya dapat menggunakan lidah buaya yang sehat sebagai bibit, kemudian tanam pada media tanam yang berpori, seperti campuran tanah, pasir, dan sedikit kompos, agar air tidak menggenang di sekitar akar. Tanaman ditempatkan di area dengan pencahayaan matahari yang cukup namun tidak terlalu terik. Penyiraman dilakukan secukupnya karena tanaman ini tidak menyukai tanah yang terlalu lembap dan rentan membusuk jika kelebihan air. Pemupukan organik ringan dapat diberikan setiap 1-2 bulan. Daun yang rusak perlu dipangkas dan pastikan pot memiliki sistem drainase yang baik. Daun lidah buaya dapat dipanen kapan saja dengan memilih daun yang sudah besar dan segar untuk keperluan herbal keluarga.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Magnoliophyta',
      kelas: 'Liliopsida',
      ordo: 'Asparagales',
      famili: 'Asphodelaceae',
      genus: 'Aloe',
      spesies: 'Aloe Vera L.'
    },
    partsUsed: 'Gel dan lateks',
    benefits: [
      'Membantu menyembuhkan luka ringan',
      'Meredakan iritasi kulit',
      'Memiliki efek antioksidan'
    ],
    img: '/lidah-buaya.png',
  },
  {
    slug: 'lavender',
    name: 'Lavender',
    descShort: 'Tanaman herbal aromatik yang dikenal dengan efek menenangkan dan pewangi alami...',
    descFull: 'Lavender merupakan tanaman herbal aromatik yang mudah dikenali dari bunganya yang berwarna ungu keabu-abuan serta batangnya yang berkayu kecil. Tanaman ini tumbuh tegak membentuk semak rendah dan menghasilkan bunga yang tersusun dalam malai memanjang. Aromanya yang khas dan kuat berasal dari kandungan minyak atsiri, sehingga lavender banyak dimanfaatkan sebagai tanaman hias, pewangi alami, maupun bahan aromaterapi.',
    cultivation: 'Lavender tumbuh dengan baik di area yang memperoleh sinar matahari penuh dan ditanam pada tanah yang kering, gembur, serta memiliki drainase yang baik. Penanaman dapat dilakukan menggunakan bibit maupun stek batang. Penyiraman cukup dilakukan secukupnya karena tanaman ini tidak menyukai tanah yang terlalu lembap. Pemangkasan ringan secara rutin diperlukan untuk mempertahankan bentuk tanaman dan merangsang pembungaan. Dengan pencahayaan yang optimal dan kondisi tanah yang tidak tergenang air, lavender dapat tumbuh sehat dan menghasilkan aroma yang khas.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Streptophyta',
      kelas: 'Equisetophyta',
      ordo: 'Lamiales',
      famili: 'Lamiaceae',
      genus: 'Lavandula',
      spesies: 'Lavandula Angustifolia Mill.'
    },
    partsUsed: 'Bunga dan daun',
    benefits: [
      'Mengurangi stres dan kecemasan',
      'Memberikan efek menenangkan',
      'Mengurangi efek peradangan'
    ],
    img: '/lavender.png',
  },
  {
    slug: 'jahe',
    name: 'Jahe',
    descShort: 'Tanaman rimpang tropis yang populer karena aroma khasnya yang kuat dan khasiat menghangatkan...',
    descFull: 'Tanaman jahe merupakan tanaman rimpang yang mudah tumbuh di daerah tropis. Batangnya berupa rimpang yang berkembang di bawah permukaan tanah. Daunnya berbentuk panjang dan sempit, tumbuh menjulang dari rimpang. Tanaman ini juga memiliki aroma khas yang kuat, terutama pada bagian rimpangnya.',
    cultivation: 'Budidaya jahe dilakukan dengan menggunakan rimpang jahe yang sudah tua dan sehat untuk dijadikan bibit, kemudian potong menjadi beberapa bagian dengan masing-masing memiliki 1-2 mata tunas. Rimpang ditanam pada media tanam gembur yang terdiri atas campuran tanah, kompos, dan pasir, lalu diletakkan di area dengan pencahayaan matahari yang cukup. Penyiraman dilakukan secukupnya agar media tetap lembap tanpa tergenang. Pupuk organik atau kompos diberikan setiap 3-4 minggu. Gulma perlu dibersihkan secara rutin dan mulsa dapat ditambahkan untuk mempertahankan kelembapan tanah. Jahe dapat dipanen setelah berumur sekitar 8-10 bulan.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Spermatophyta',
      kelas: 'Monocotyledonae',
      ordo: 'Zingiberales',
      famili: 'Zingiberaceae',
      genus: 'Zingiber',
      spesies: 'Zingiber Officinale'
    },
    partsUsed: 'Rimpang',
    benefits: [
      'Meredakan masuk angin dan batuk',
      'Menghangatkan tubuh',
      'Melancarkan pencernaan'
    ],
    img: '/jahe.png',
  },
  {
    slug: 'kencur',
    name: 'Kencur',
    descShort: 'Tanaman herbal dengan daun lebar yang tumbuh mendatar dan memiliki aroma khas dari rimpangnya.',
    descFull: 'Kencur merupakan tanaman herbal yang memiliki daun lebar, pendek, dan tumbuh mendatar dekat permukaan tanah. Tanaman ini memiliki batang semu yang sangat pendek, sehingga daun seolah muncul langsung dari rimpangnya. Kencur menghasilkan bunga kecil berwarna putih keunguan yang tumbuh dari pangkal tanaman.',
    cultivation: 'Kencur ditanam pada tanah yang gembur, subur, dan kaya bahan organik dengan sistem perairan yang baik. Budidaya dilakukan menggunakan rimpang sehat sebagai bibit yang ditanam dangkal. Penyiraman dilakukan secara rutin untuk menjaga kelembapan, namun hindari genangan air agar rimpang tidak membusuk. Penyiangan gulma dan penggemburan tanah secara berkala diperlukan untuk mendukung pertumbuhan.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Spermatophyta',
      kelas: 'Monocotyledonae',
      ordo: 'Zingiberales',
      famili: 'Zingiberaceae',
      genus: 'Kaempferia',
      spesies: 'Kaempferia galanga L.'
    },
    partsUsed: 'Rimpang',
    benefits: [
      'Mengurangi peradangan dan nyeri',
      'Membantu melancarkan pencernaan',
      'Meredakan batuk dan sakit tenggorokan'
    ],
    img: '/kencur.jpg',
  },
  {
    slug: 'kunyit',
    name: 'Kunyit',
    descShort: 'Tanaman herbal dengan rimpang kuning cerah yang populer sebagai bumbu dapur dan obat tradisional.',
    descFull: 'Kunyit merupakan tanaman herbal yang memiliki daun lebar dan panjang yang tumbuh tegak dari pangkal tanaman. Tanaman ini menghasilkan bunga yang muncul dari bagian tengah dengan warna putih kekuningan. Rimpangnya berwarna kuning cerah dan memiliki aroma serta rasa yang khas.',
    cultivation: 'Kunyit memerlukan tanah yang gembur, subur, dan tidak tergenang air. Penanaman dilakukan menggunakan rimpang yang sudah tua dan sehat dengan kedalaman secukupnya. Selama masa pertumbuhan, kunyit perlu disiram teratur terutama saat musim kemarau. Lakukan penyiangan gulma dan penggemburan tanah agar unsur hara terserap baik. Kunyit dapat dipanen setelah berumur 8 hingga 10 bulan.',
    taxonomy: {
      kingdom: 'Plantae',
      divisi: 'Spermatophyta',
      kelas: 'Monocotyledonae',
      ordo: 'Zingiberales',
      famili: 'Zingiberaceae',
      genus: 'Curcuma',
      spesies: 'Curcuma longa L.'
    },
    partsUsed: 'Rimpang',
    benefits: [
      'Menurunkan kadar kolesterol',
      'Membantu melancarkan pencernaan',
      'Meredakan nyeri dan peradangan'
    ],
    img: '/kunyit.jpg',
  }
];