/* ============================================================
   BIOCELL — SEL HEWAN INTERAKTIF
   Premium Educational Website JavaScript
   ============================================================ */

// ==================== DATA ORGANEL ====================
const organelleData = {
    'membran-sel': {
        name: 'Membran Sel',
        subtitle: 'Penjaga Gerbang Sel',
        icon: '🛡️',
        color: '#38bdf8',
        pengertian: [
            'Membran sel, yang juga dikenal sebagai membrane plasma, merupakan struktur vital yang membungkus seluruh isi sel dan memisahkannya dari lingkungan luar. Membran ini tidak hanya berfungsi sebagai pembatas fisik, melainkan juga sebagai pengatur lalu lintas molekul yang sangat canggih. Setiap sel hewan memiliki membran sel yang unik dan spesifik sesuai dengan fungsi sel tersebut.',
            'Struktur membran sel mengikuti model yang dikenal sebagai model mosaic fluid, di mana molekul protein tersebar di dalam lapisan lipid seperti potongan-potongan mosaic. Model ini pertama kali diusulkan oleh S.J. Singer dan Garth Nicolson pada tahun 1972. Membran ini bersifat dinamis, artinya komponen-komponennya dapat bergerak secara lateral di dalam lapisan lipid.',
            'Ketebalan membran sel rata-rata sekitar 7-10 nanometer, yang membuatnya tidak dapat dilihat dengan mikroskop cahaya biasa. Untuk mengamati membran sel, para ilmuwan menggunakan mikroskop elektron yang memiliki pembesaran jauh lebih tinggi. Membran sel juga memiliki sifat selektif permeabel, yang berarti hanya molekul tertentu yang dapat melewatinya.',
            'Membran sel tidak hanya ada di permukaan luar sel, tetapi juga membentuk struktur internal seperti membran nukleus, retikulum endoplasma, badan Golgi, lisosom, dan mitokondria. Semua membran ini memiliki struktur dasar yang sama, yaitu lapisan ganda fosfolipid, yang menunjukkan kesatuan dalam keragaman fungsi sel.'
        ],
        fungsi: [
            'Melindungi sel dari lingkungan luar dan menjaga integritas struktural sel',
            'Mengatur masuk dan keluarnya zat-zat melalui mekanisme difusi, osmosis, dan transport aktif',
            'Berperan dalam komunikasi antar sel melalui reseptor permukaan sel',
            'Memfasilitasi adhesi sel untuk membentuk jaringan dan organ',
            'Berpartisipasi dalam reaksi imun dan pengenalan sel'
        ],
        caraKerja: 'Membran sel bekerja melalui berbagai mekanisme transport. Difusi sederhana memungkinkan molekul kecil seperti oksigen dan karbon dioksida melewati membran tanpa energi. Difusi terfasilitasi menggunakan protein pembawa untuk molekul yang lebih besar. Transport aktif memompa ion melawan gradien konsentrasi menggunakan energi ATP. Endositosis dan eksositosis mengangkut materi besar dengan membentuk vesikel.',
        struktur: 'Membran sel tersusun dari lapisan ganda fosfolipid (bilayer fosfolipid) dengan kepala hidrofilik menghadap keluar dan ekor hidrofobik menghadap ke dalam. Protein integral menembus seluruh membran, sementara protein perifer menempel pada permukaan. Kolesterol tersebar di antara fosfolipid untuk menjaga kelenturan membran. Karbohidrat terikat pada protein (glikoprotein) atau lipid (glikolipid) di permukaan luar membentuk glikokaliks.',
        letak: 'Membran sel terletak di bagian paling luar sel hewan, langsung berbatasan dengan lingkungan ekstraseluler. Tidak seperti sel tumbuhan yang memiliki dinding sel di luar membrannya, sel hewan hanya memiliki membran sel sebagai pelindung terluar.',
        fakta: [
            'Luas total membran sel dalam tubuh manusia mencapai sekitar 10.000 meter persegi, setara dengan lapangan sepak bola!',
            'Membran sel dapat "mengingat" rangsangan melalui mekanisme yang disebut memori membran',
            'Setiap membran sel mengandung sekitar 5 juta molekul fosfolipid',
            'Suhu tubuh yang terlalu tinggi dapat merusak membran sel karena membuatnya terlalu cair',
            'Beberapa racun seperti alkohol dan deterjen dapat melarutkan membran sel karena sifatnya yang mengganggu lapisan lipid'
        ],
        analogi: 'Membran Sel seperti penjaga keamanan gedung perkantoran yang canggih. Dia memeriksa setiap orang yang masuk dan keluar, membiarkan karyawan (nutrisi) masuk, mengusir pengganggu (racun), dan menjaga agar rahasia perusahaan (molekul sel) tidak bocor ke luar.',
        ringkasan: 'Membran sel adalah lapisan ganda fosfolipid yang melindungi sel, mengatur transport zat, dan berkomunikasi dengan lingkungan. Sifat selektif permeabelnya memastikan hanya zat yang diperlukan yang dapat masuk dan keluar dari sel.',
        quiz: [
            { q: 'Apa komponen utama penyusun membran sel?', options: ['Protein dan karbohidrat', 'Fosfolipid dan protein', 'Lemak dan DNA', 'RNA dan glukosa'], correct: 1 },
            { q: 'Sifat membran sel yang hanya membiarkan zat tertentu melewatinya disebut?', options: ['Permeabel', 'Selektif permeabel', 'Impermeabel', 'Semi permeabel'], correct: 1 },
            { q: 'Model apa yang menjelaskan struktur membran sel?', options: ['Model Sandwich', 'Model Mosaic Fluid', 'Model Layer Cake', 'Model Grid'], correct: 1 }
        ]
    },
    'sitoplasma': {
        name: 'Sitoplasma',
        subtitle: 'Lautan Kehidupan Sel',
        icon: '💧',
        color: '#0ea5e9',
        pengertian: [
            'Sitoplasma adalah seluruh isi sel yang terletak di antara membran sel dan membran nukleus. Banyak ahli biologi menyebut sitoplasma sebagai "lautan kehidupan" karena di dalamnya terjadi hampir semua aktivitas metabolisme sel. Sitoplasma terdiri dari sitosol (cairan gel) dan organel-organel yang tersuspensi di dalamnya.',
            'Sitosol merupakan bagian cair dari sitoplasma yang terdiri dari air (sekitar 80%), ion, protein, karbohidrat, lipid, dan molekul-molekul kecil lainnya. Konsistensi sitosol bervariasi dari cair seperti air hingga kental seperti gel, tergantung pada aktivitas sel.',
            'Sitoplasma bukanlah ruang kosong yang hanya berfungsi sebagai "pengisi" sel. Sebaliknya, sitoplasma adalah lingkungan yang sangat terorganisir dengan jaringan protein yang disebut sitoskeleton. Jaringan ini memberikan bentuk dan struktur pada sel.',
            'Dalam sitoplasma terdapat ribosom bebas yang mensintesis protein untuk keperluan sel itu sendiri. Selain itu, berbagai reaksi kimia penting seperti glikolisis terjadi di sitosol. Sitoplasma juga berperan dalam penyimpanan zat-zat seperti glikogen dan lipid.'
        ],
        fungsi: [
            'Tempat berlangsungnya banyak reaksi metabolisme sel seperti glikolisis',
            'Media suspensi untuk organel-organel sel',
            'Tempat penyimpanan sementara nutrisi dan produk limbah',
            'Media transportasi materi di dalam sel melalui aliran sitoplasma',
            'Berperan dalam pembelahan sel dan pergerakan organel'
        ],
        caraKerja: 'Sitoplasma bekerja melalui aliran sitoplasma (sikosis) yang menggerakkan organel dan materi dari satu bagian sel ke bagian lain. Reaksi enzimatik di sitosol mengubah glukosa menjadi energi melalui glikolisis.',
        struktur: 'Sitoplasma terdiri dari sitosol (cairan berbasis air yang mengandung ion terlarut, protein, dan molekul kecil) dan organel-organel. Sitoskeleton yang terdiri dari mikrofilamen, filament intermediet, dan mikrotubulus membentuk kerangka penyangga.',
        letak: 'Sitoplasma mengisi seluruh ruang di dalam membran sel dan di luar membran nukleus. Pada sel hewan, sitoplasma tidak memiliki batas yang jelas karena tidak ada dinding sel dan vakuola besar seperti pada sel tumbuhan.',
        fakta: [
            'Sekitar 70-80% berat sel adalah air, dan sebagian besar air ini terdapat di sitoplasma',
            'Sitoplasma mengalir secara terus-menerus, fenomena yang disebut sikosis',
            'Beberapa bakteri dan virus dapat bergerak aktif di dalam sitoplasma setelah masuk ke sel',
            'Sitoplasma memiliki pH sekitar 7.2, yang merupakan kondisi optimal untuk kebanyakan enzim',
            'Selama pembelahan sel, sitoplasma akan terbagi rata ke kedua sel anak melalui proses sitokinesis'
        ],
        analogi: 'Sitoplasma seperti lautan di dalam sebuah kota apung. Di dalam lautan ini, berbagai "pulau" (organel) mengapung dan melakukan aktivitasnya masing-masing. Lautan ini juga berfungsi sebagai jalan raya yang menghubungkan semua pulau.',
        ringkasan: 'Sitoplasma adalah cairan gel yang mengisi sel dan menjadi tempat berlangsungnya aktivitas metabolisme. Terdiri dari sitosol dan organel, sitoplasma berfungsi sebagai media suspensi, transport, dan reaksi kimia sel.',
        quiz: [
            { q: 'Apa nama cairan gel yang membentuk sitoplasma?', options: ['Nukleoplasma', 'Sitosol', 'Sitoplasma', 'Hialoplasma'], correct: 1 },
            { q: 'Reaksi apa yang terjadi di sitosol?', options: ['Fotosintesis', 'Glikolisis', 'Respirasi sel', 'Transkripsi'], correct: 1 },
            { q: 'Berapa persen air dalam sitoplasma?', options: ['30-40%', '50-60%', '70-80%', '90-95%'], correct: 2 }
        ]
    },
    'nukleus': {
        name: 'Nukleus',
        subtitle: 'Pusat Komando Sel',
        icon: '🧠',
        color: '#7c3aed',
        pengertian: [
            'Nukleus adalah organel terbesar dan paling menonjol dalam sel hewan. Banyak ilmuwan menyebutnya sebagai "otak sel" atau "pusat komando" karena di sinilah semua informasi genetik tersimpan dan diatur. Nukleus mengendalikan semua aktivitas sel mulai dari pertumbuhan, metabolisme, hingga reproduksi.',
            'Struktur nukleus dikelilingi oleh membran nukleus ganda yang disebut envelope nukleus. Membran ini memiliki pori-pori nukleus yang memungkinkan pertukaran materi antara nukleus dan sitoplasma.',
            'Di dalam nukleus terdapat kromatin, yang merupakan DNA yang terbungkus oleh protein histon. Kromatin dapat berupa eukromatin (longgar dan aktif transkripsi) atau heterokromatin (padat dan tidak aktif).',
            'Nukleus juga mengandung nukleolus, struktur kecil yang sangat penting untuk sintesis ribosom. Nukleus adalah ciri khas sel eukariotik; sel prokariotik seperti bakteri tidak memiliki nukleus yang sejati.'
        ],
        fungsi: [
            'Menyimpan materi genetik (DNA) dalam bentuk kromatin',
            'Mengontrol sintesis protein melalui transkripsi RNA',
            'Mengatur pembelahan sel dan replikasi DNA',
            'Menentukan karakteristik turunan melalui ekspresi gen',
            'Menghasilkan ribosom melalui aktivitas nukleolus'
        ],
        caraKerja: 'Nukleus bekerja melalui proses transkripsi, di mana DNA menyalin informasi genetik ke dalam bentuk mRNA. mRNA kemudian keluar dari nukleus melalui pori-pori nukleus menuju ribosom di sitoplasma untuk diterjemahkan menjadi protein.',
        struktur: 'Nukleus memiliki bentuk umum bulat atau oval dengan diameter 5-10 mikrometer. Dikelilingi oleh envelope nukleus ganda dengan pori-pori. Di dalamnya terdapat nukleolus, kromatin, serta nukleoplasma.',
        letak: 'Nukleus biasanya terletak di bagian tengah atau sedikit ke samping sel. Pada sel yang sangat aktif mensintesis protein, nukleus cenderung terletak di pusat sel.',
        fakta: [
            'DNA manusia yang tersimpan dalam nukleus jika direntangkan bisa mencapai panjang 2 meter!',
            'Nukleus manusia mengandung sekitar 3 miliar pasang basa DNA',
            'Sel tubuh manusia memiliki satu nukleus, tetapi sel darah merah dewasa tidak memiliki nukleus sama sekali',
            'Nukleolus adalah struktur paling padat dalam sel dan dapat terlihat tanpa pewarnaan khusus',
            'Pori-pori nukleus memungkinkan pertukaran materi sebanyak 1000 molekul per detik'
        ],
        analogi: 'Nukleus seperti Kepala Sekolah di sebuah sekolah. Kepala Sekolah menyimpan semua data dan peraturan sekolah (DNA), mengatur jadwal dan kegiatan, dan memastikan setiap guru dan staf menjalankan tugasnya dengan benar.',
        ringkasan: 'Nukleus adalah pusat komando sel yang menyimpan DNA, mengontrol aktivitas sel, dan menghasilkan ribosom. Dikelilingi membran ganda dengan pori-pori, nukleus memastikan informasi genetik dikelola dengan baik.',
        quiz: [
            { q: 'Apa fungsi utama nukleus?', options: ['Menghasilkan energi', 'Menyimpan informasi genetik', 'Mencerna makanan', 'Mengangkut protein'], correct: 1 },
            { q: 'Struktur apa yang mengelilingi nukleus?', options: ['Dinding sel', 'Membran nukleus ganda', 'Kapsid', 'Membran tunggal'], correct: 1 },
            { q: 'Di mana ribosom diproduksi?', options: ['Mitokondria', 'Badan Golgi', 'Nukleolus', 'Lisosom'], correct: 2 }
        ]
    },
    'nukleolus': {
        name: 'Nukleolus',
        subtitle: 'Pabrik Ribosom',
        icon: '⚙️',
        color: '#c026d3',
        pengertian: [
            'Nukleolus adalah struktur padat yang terdapat di dalam nukleus sel eukariotik. Meskipun bukan organel yang dibatasi membran, nukleolus memiliki fungsi yang sangat penting dan dapat dengan mudah diamati di bawah mikroskop sebagai bintik gelap di dalam nukleus.',
            'Nukleolus terbentuk di sekitar daerah spesifik kromosom yang disebut organisator nukleolus (NOR). Daerah ini mengandung gen yang menyandi RNA ribosomal (rRNA). Ketika sel membutuhkan lebih banyak ribosom, nukleolus akan membesar dan menjadi lebih aktif.',
            'Struktur nukleolus tidak memiliki membran pembatas, sehingga komponen-komponennya dapat dengan bebas berinteraksi dengan nukleoplasma di sekitarnya. Nukleolus terdiri dari tiga komponen utama: daerah fibrilar, daerah granular, dan daerah padat fibrilar.',
            'Selain memproduksi ribosom, nukleolus juga terlibat dalam berbagai proses seluler lainnya seperti regulasi siklus sel, respons stres, dan bahkan pengaturan usia sel (aging).'
        ],
        fungsi: [
            'Mensintesis RNA ribosomal (rRNA) dari template DNA',
            'Merakit subunit ribosom besar dan kecil',
            'Mengatur produksi ribosom sesuai kebutuhan sel',
            'Berperan dalam respons stres selular',
            'Mengatur siklus sel dan apoptosis'
        ],
        caraKerja: 'Nukleolus bekerja dengan cara mentranskripsi gen rRNA menjadi molekul rRNA precursor. rRNA ini kemudian diproses dan dikombinasikan dengan protein ribosomal yang diimpor dari sitoplasma. Subunit ribosom kecil dan besar dirakit secara terpisah di nukleolus, kemudian diekspor ke sitoplasma.',
        struktur: 'Nukleolus tidak memiliki membran pembatas. Terdiri dari tiga daerah: daerah fibrilar pusat (mengandung DNA rRNA dan enzim transkripsi), daerah fibrilar padat (tempat pemrosesan awal rRNA), dan daerah granular (tempat perakitan subunit ribosom dengan protein).',
        letak: 'Nukleolus terletak di dalam nukleus, biasanya di daerah yang kaya akan kromatin. Tidak dibatasi oleh membran, sehingga posisinya dapat berubah-ubah di dalam nukleoplasma.',
        fakta: [
            'Nukleolus adalah struktur paling padat di dalam sel dan menyerap banyak cahaya',
            'Sel yang aktif mensintesis protein memiliki nukleolus yang lebih besar',
            'Nukleolus menghilang saat sel membelah dan terbentuk kembali setelah pembelahan',
            'Beberapa penyakit kanker ditandai dengan nukleolus yang abnormal besar',
            'Nukleolus dapat menghasilkan ribosom hingga ribuan per menit pada sel yang sangat aktif'
        ],
        analogi: 'Nukleolus seperti pabrik perakitan mesin di dalam kantor pusat perusahaan. Pabrik ini memproduksi dan merakit komponen-komponen mesin (ribosom) yang kemudian dikirim ke berbagai divisi perusahaan (sitoplasma) untuk digunakan dalam produksi barang (protein).',
        ringkasan: 'Nukleolus adalah struktur di dalam nukleus yang bertanggung jawab untuk mensintesis rRNA dan merakit subunit ribosom. Meskipun tidak dibatasi membran, nukleolus memainkan peran vital dalam produksi protein sel.',
        quiz: [
            { q: 'Apa fungsi utama nukleolus?', options: ['Menyimpan DNA', 'Memproduksi ribosom', 'Mencerna limbah', 'Menghasilkan energi'], correct: 1 },
            { q: 'Di mana nukleolus terletak?', options: ['Di sitoplasma', 'Di dalam nukleus', 'Di membran sel', 'Di mitokondria'], correct: 1 },
            { q: 'Apa yang disintesis oleh nukleolus?', options: ['mRNA', 'rRNA', 'tRNA', 'DNA'], correct: 1 }
        ]
    },
    'ribosom': {
        name: 'Ribosom',
        subtitle: 'Pabrik Protein Sel',
        icon: '🏭',
        color: '#34d399',
        pengertian: [
            'Ribosom adalah organel sel yang bertanggung jawab untuk mensintesis protein, proses yang disebut translasi. Ribosom ditemukan di hampir semua sel hidup, baik prokariotik maupun eukariotik, yang menunjukkan betapa pentingnya fungsi ini dalam kehidupan.',
            'Ribosom tidak memiliki membran pembatas, sehingga sering disebut sebagai partikel ribonukleoprotein. Setiap ribosom terdiri dari dua subunit: subunit kecil dan subunit besar, yang masing-masing tersusun dari RNA ribosomal (rRNA) dan protein.',
            'Dalam sel hewan, ribosom dapat ditemukan dalam dua lokasi: bebas di sitoplasma (ribosom bebas) atau menempel pada retikulum endoplasma kasar (ribosom terikat). Ribosom bebas mensintesis protein untuk keperluan sel itu sendiri.',
            'Proses sintesis protein oleh ribosom sangat cepat dan efisien. Sebuah ribosom dapat menambahkan sekitar 15 asam amino per detik ke rantai polipeptida yang sedang dibentuk.'
        ],
        fungsi: [
            'Mensintesis protein melalui proses translasi',
            'Membaca urutan kodon pada mRNA',
            'Mengkatalisis pembentukan ikatan peptida antar asam amino',
            'Membedakan protein untuk penggunaan internal atau ekspor',
            'Berpartisipasi dalam regulasi ekspresi gen'
        ],
        caraKerja: 'Ribosom bekerja dengan membaca mRNA dari ujung 5\' ke 3\'. Subunit kecil mengikat mRNA, sementara subunit besar mengkatalisis pembentukan ikatan peptida. tRNA membawa asam amino spesifik sesuai kodon mRNA. Ribosom bergerak sepanjang mRNA, menambahkan asam amino satu per satu hingga protein lengkap terbentuk.',
        struktur: 'Ribosom terdiri dari dua subunit (kecil dan besar) yang tersusun dari rRNA dan protein. Subunit kecil (40S pada eukariotik) berfungsi membaca mRNA. Subunit besar (60S pada eukariotik) berfungsi mengkatalisis reaksi. Ribosom memiliki tiga situs pengikatan: situs A, situs P, dan situs E.',
        letak: 'Ribosom dapat ditemukan bebas di sitoplasma atau menempel pada membran retikulum endoplasma kasar. Ribosom juga ditemukan di dalam mitokondria. Ribosom bebas biasanya terletak di dekat nukleus.',
        fakta: [
            'Sebuah sel aktif dapat mengandung hingga 10 juta ribosom',
            'Ribosom adalah organel terkecil dengan diameter hanya 20-30 nanometer',
            'Ribosom dapat mensintesis protein dengan kecepatan 15-20 asam amino per detik',
            'Beberapa antibiotik seperti streptomisin bekerja dengan mengganggu fungsi ribosom bakteri',
            'Ribosom pertama kali ditemukan oleh George Palade pada tahun 1955 menggunakan mikroskop elektron'
        ],
        analogi: 'Ribosom seperti pabrik perakitan mobil yang sangat efisien. Pabrik ini menerima blueprint (mRNA), membaca instruksi baris per baris, dan merakit komponen (asam amino) menjadi mobil jadi (protein) dengan kecepatan dan ketepatan yang luar biasa.',
        ringkasan: 'Ribosom adalah pabrik protein sel yang mensintesis protein melalui translasi mRNA. Terdiri dari dua subunit dan tidak dibatasi membran, ribosom dapat ditemukan bebas di sitoplasma atau menempel pada REK.',
        quiz: [
            { q: 'Apa fungsi utama ribosom?', options: ['Menyimpan energi', 'Mensintesis protein', 'Mencerna makanan', 'Mengangkut zat'], correct: 1 },
            { q: 'Ribosom terdiri dari berapa subunit?', options: ['1', '2', '3', '4'], correct: 1 },
            { q: 'Proses apa yang terjadi di ribosom?', options: ['Transkripsi', 'Translasi', 'Replikasi', 'Fotosintesis'], correct: 1 }
        ]
    },
    'rer': {
        name: 'Retikulum Endoplasma Kasar',
        subtitle: 'Jalur Produksi Protein',
        icon: '🧵',
        color: '#059669',
        pengertian: [
            'Retikulum Endoplasma Kasar (REK) adalah jaringan membran yang membentuk sistem kanal dan kantung di dalam sitoplasma sel. Nama "kasar" diberikan karena permukaan luar REK ditempeli oleh ribosom yang membuatnya terlihat kasar ketika diamati dengan mikroskop elektron.',
            'REK terhubung langsung dengan membran nukleus luar, membentuk sistem kontinu yang memungkinkan transport materi dari nukleus ke sitoplasma dan sebaliknya.',
            'Fungsi utama REK adalah mensintesis protein yang akan diekspor keluar sel, dimasukkan ke membran sel, atau dikirim ke organel lain seperti lisosom. Protein yang disintesis di REK mengalami modifikasi awal di dalam lumen REK.',
            'Sel yang sangat aktif dalam produksi protein, seperti sel plasma dan sel pankreas, memiliki REK yang sangat berkembang dan melimpah. Sebaliknya, sel yang tidak aktif memproduksi protein untuk ekspor memiliki REK yang relatif sedikit.'
        ],
        fungsi: [
            'Mensintesis protein untuk ekspor, membran, dan organel',
            'Memodifikasi protein baru melalui proses folding dan glikosilasi',
            'Membentuk vesikel untuk transport protein ke badan Golgi',
            'Menyintesis fosfolipid untuk membran sel',
            'Berperan dalam metabolisme karbohidrat dan detoksifikasi obat'
        ],
        caraKerja: 'REK bekerja dengan ribosom yang menempel pada permukaannya mensintesis protein langsung ke dalam lumen REK. Di dalam lumen, protein mengalami folding (pelipatan) yang benar dan modifikasi seperti penambahan gula (glikosilasi). Protein yang telah dimodifikasi kemudian dikemas ke dalam vesikel transport.',
        struktur: 'REK terdiri dari sisterna (kantung-kantung pipih yang ditumpuk), vesikel transport, dan tubulus (saluran-saluran bercabang). Membran REK bersifat kontinu dengan membran nukleus luar. Ribosom menempel pada sisi sitosolik membran REK, memberikan penampilan "kasar".',
        letak: 'REK tersebar di seluruh sitoplasma, biasanya terkonsentrasi di dekat nukleus karena terhubung dengan membran nukleus. Pada sel yang aktif mensintesis protein, REK dapat membentuk jaringan yang sangat luas.',
        fakta: [
            'REK pertama kali ditemukan oleh Albert Claude pada tahun 1945 menggunakan teknik fraksinasi sel',
            'Sel hati memiliki REK yang sangat berkembang karena peranannya dalam detoksifikasi',
            'Ribosom dapat menempel dan lepas dari REK tergantung pada kebutuhan sel',
            'REK membentuk sekitar separuh dari total membran sel pada sel yang sangat aktif',
            'Protein yang salah lipat di REK akan dihancurkan untuk mencegah kerusakan sel'
        ],
        analogi: 'REK seperti jalur produksi pabrik tekstil yang terhubung langsung dengan kantor desain (nukleus). Di jalur ini, pekerja (ribosom) merakit kain (protein) sesuai desain, kemudian kain diproses dan dilipat dengan rapi sebelum dikemas untuk dikirim ke gudang (badan Golgi).',
        ringkasan: 'REK adalah jaringan membran dengan ribosom menempel yang mensintesis dan memodifikasi protein untuk ekspor. Terhubung dengan nukleus, REK merupakan bagian vital dari sistem endomembran sel.',
        quiz: [
            { q: 'Mengapa REK disebut "kasar"?', options: ['Permukaannya berlubang', 'Ada ribosom yang menempel', 'Teksturnya kasar', 'Banyak protein di dalamnya'], correct: 1 },
            { q: 'Protein di REK akan dikirim ke mana selanjutnya?', options: ['Lisosom', 'Badan Golgi', 'Mitokondria', 'Nukleus'], correct: 1 },
            { q: 'REK terhubung dengan organel apa?', options: ['Mitokondria', 'Membran nukleus', 'Lisosom', 'Sentriol'], correct: 1 }
        ]
    },
    'ser': {
        name: 'Retikulum Endoplasma Halus',
        subtitle: 'Pabrik Lipid dan Detoks',
        icon: '🧴',
        color: '#10b981',
        pengertian: [
            'Retikulum Endoplasma Halus (REH) adalah organel yang memiliki struktur serupa dengan REK tetapi tanpa ribosom yang menempel pada permukaannya, sehingga terlihat "halus" di bawah mikroskop elektron.',
            'Fungsi REH sangat bervariasi tergantung pada jenis sel. Pada sel hati, REH berperan penting dalam detoksifikasi obat-obatan dan racun. Pada sel otot, REH menyimpan kalsium yang penting untuk kontraksi otot.',
            'REH juga bertanggung jawab untuk mensintesis fosfolipid dan kolesterol yang menjadi komponen membran sel. Selain itu, REH membantu dalam metabolisme karbohidrat dan pembentukan glikogen pada sel hati.',
            'Berbeda dengan REK yang terhubung dengan nukleus, REH biasanya tersebar lebih merata di sitoplasma. REH juga dapat berubah menjadi REK ketika sel membutuhkan lebih banyak produksi protein.'
        ],
        fungsi: [
            'Mensintesis lipid, fosfolipid, dan kolesterol',
            'Mendetoksifikasi obat-obatan dan racun di sel hati',
            'Menyimpan dan melepaskan ion kalsium pada sel otot',
            'Membantu metabolisme karbohidrat dan pembentukan glikogen',
            'Mensintesis hormon steroid pada kelenjar endokrin'
        ],
        caraKerja: 'REH bekerja melalui enzim-enzim yang tertanam di membrannya. Enzim sitokrom P450 di sel hati mengoksidasi racun dan obat-obatan menjadi bentuk yang lebih mudah larut dalam air sehingga dapat diekskresi. Pada sel otot, REH (sarkoplasma retikulum) melepaskan kalsium ke sitosol untuk memicu kontraksi.',
        struktur: 'REH terdiri dari jaringan tubulus dan vesikel yang saling berhubungan, mirip dengan REK tetapi tanpa ribosom. Membran REH mengandung enzim spesifik untuk sintesis lipid dan detoksifikasi. Pada sel otot, REH berkembang menjadi sarkoplasma retikulum.',
        letak: 'REH tersebar di seluruh sitoplasma, seringkali berdekatan dengan REK dan mitokondria. Pada sel hati, REH terkonsentrasi di dekat pembuluh darah tempat racun masuk.',
        fakta: [
            'Konsumsi alkohol berlebihan dapat menyebabkan proliferasi REH di sel hati',
            'REH pada sel otot disebut sarkoplasma retikulum dan menyimpan 90% kalsium sel',
            'Enzim sitokrom P450 di REH dapat mendeteksi dan memetabol lebih dari 50.000 senyawa berbeda',
            'REH membentuk sekitar 2-5% dari total membran sel pada sel hati normal',
            'Kekurangan REH dapat menyebabkan gangguan metabolisme lipid dan penyakit hati'
        ],
        analogi: 'REH seperti departemen khusus di pabrik kimia. Departemen ini memproduksi bahan baku (lipid), membersihkan limbah berbahaya (detoksifikasi), dan mengelola persediaan bahan kimia penting (kalsium). Setiap cabang pabrik memiliki departemen ini dengan spesialisasi berbeda.',
        ringkasan: 'REH adalah jaringan membran tanpa ribosom yang mensintesis lipid, mendetoksifikasi racun, dan mengatur kalsium. Fungsinya bervariasi sesuai jenis sel, menjadikannya organel yang sangat adaptif.',
        quiz: [
            { q: 'Apa perbedaan utama REH dan REK?', options: ['Warnanya berbeda', 'REH tidak memiliki ribosom', 'REH lebih besar', 'REH terletak di luar sel'], correct: 1 },
            { q: 'Di organ apa REH berperan dalam detoksifikasi?', options: ['Jantung', 'Hati', 'Paru-paru', 'Ginjal'], correct: 1 },
            { q: 'REH pada sel otot disebut?', options: ['Sarkoplasma Retikulum', 'Miofibril', 'Sarkomer', 'Tubulus T'], correct: 0 }
        ]
    },
    'golgi': {
        name: 'Badan Golgi',
        subtitle: 'Kantor Pos dan Gudang Sel',
        icon: '📦',
        color: '#d97706',
        pengertian: [
            'Badan Golgi, juga dikenal sebagai kompleks Golgi atau aparatus Golgi, adalah organel yang berfungsi sebagai pusat pengolahan, pengemasan, dan distribusi protein dan lipid dalam sel. Badan Golgi ditemukan oleh ilmuwan Italia Camillo Golgi pada tahun 1898.',
            'Struktur Badan Golgi terdiri dari tumpukan sisterna (kantung membran pipih) yang disusun seperti tumpukan piring. Biasanya terdapat 3-20 sisterna dalam satu tumpukan. Setiap tumpukan memiliki sisi cis (menerima) dan sisi trans (mengirim).',
            'Badan Golgi bekerja sebagai stasiun pengolahan akhir untuk protein yang datang dari REK. Di sini, protein mengalami modifikasi lanjutan seperti penambahan gula, pemotongan, dan pengurutan.',
            'Selain memproses protein, Badan Golgi juga mensintesis polisakarida pada sel tumbuhan, serta memproduksi lisosom pada sel hewan. Badan Golgi juga membentuk vesikel sekretori untuk diekskresi keluar sel.'
        ],
        fungsi: [
            'Memodifikasi, mengemas, dan mengurutkan protein dan lipid',
            'Membentuk lisosom yang berisi enzim pencernaan',
            'Memproduksi vesikel sekretori untuk ekskresi',
            'Mensintesis polisakarida pada sel tumbuhan',
            'Membentuk membran plasma baru selama pertumbuhan sel'
        ],
        caraKerja: 'Vesikel dari REK berfusi dengan sisi cis Badan Golgi, melepaskan protein ke dalam lumen. Protein bergerak dari sisterna ke sisterna melalui vesikel transisi, mengalami modifikasi di setiap tahap. Di sisi trans, protein yang telah selesai diproses dikemas ke dalam vesikel yang diberi "label" tujuan.',
        struktur: 'Badan Golgi terdiri dari 3-20 sisterna pipih yang ditumpuk. Sisi cis (entry face) menerima vesikel dari REK. Sisi trans (exit face) mengirim vesikel ke tujuan akhir. Di sekitar tumpukan terdapat vesikel trans-Golgi network (TGN) yang berfungsi sebagai stasiun pengurutan.',
        letak: 'Badan Golgi biasanya terletak di dekat nukleus dan REK, seringkali di antara nukleus dan membran sel. Pada sel yang aktif mensintesis protein, Badan Golgi dapat membentuk beberapa tumpukan yang tersebar di sitoplasma.',
        fakta: [
            'Camillo Golgi awalnya tidak percaya bahwa Badan Golgi adalah struktur nyata',
            'Sel yang aktif mensintesis protein dapat memiliki hingga 1.000 tumpukan Badan Golgi',
            'Badan Golgi memiliki kemampuan untuk "memperbaiki" protein yang salah lipat',
            'Vesikel yang keluar dari Badan Golgi bergerak dengan kecepatan sekitar 1-2 mikrometer per detik',
            'Beberapa virus seperti HIV menggunakan Badan Golgi untuk memodifikasi protein permukaannya'
        ],
        analogi: 'Badan Golgi seperti kantor pos pusat yang sangat efisien. Paket (protein) datang dari pabrik (REK), diperiksa dan dilabeli di kantor pos, kemudian dikemas dalam kotak (vesikel) yang sesuai dan dikirim ke alamat tujuan.',
        ringkasan: 'Badan Golgi adalah pusat pengolahan dan distribusi sel yang memodifikasi, mengemas, dan mengirim protein dan lipid. Terdiri dari tumpukan sisterna, Badan Golgi memastikan setiap molekul sampai di tujuan yang benar.',
        quiz: [
            { q: 'Siapa yang menemukan Badan Golgi?', options: ['Robert Hooke', 'Camillo Golgi', 'Albert Claude', 'George Palade'], correct: 1 },
            { q: 'Dari mana protein datang ke Badan Golgi?', options: ['Mitokondria', 'REK', 'Nukleus', 'Lisosom'], correct: 1 },
            { q: 'Apa fungsi utama Badan Golgi?', options: ['Menghasilkan energi', 'Mengemas dan mengirim protein', 'Mensintesis DNA', 'Menyimpan kalsium'], correct: 1 }
        ]
    },
    'mitokondria': {
        name: 'Mitokondria',
        subtitle: 'Pembangkit Listrik Sel',
        icon: '⚡',
        color: '#ef4444',
        pengertian: [
            'Mitokondria adalah organel yang sering disebut sebagai "pembangkit listrik sel" karena fungsinya yang menghasilkan energi dalam bentuk ATP. Mitokondria adalah organel yang sangat vital; tanpa mitokondria, sel tidak akan memiliki energi yang cukup untuk melakukan aktivitasnya.',
            'Struktur mitokondria sangat unik karena memiliki dua membran: membran luar yang halus dan membran dalam yang berlipat-lipat membentuk struktur yang disebut krista. Lipatan-lipatan ini sangat meningkatkan luas permukaan membran dalam.',
            'Mitokondria memiliki asal-usul yang menarik. Menurut teori endosimbiosis, mitokondria awalnya adalah bakteri yang hidup bebas yang diambil oleh sel nenek moyang kita. Bukti untuk teori ini termasuk fakta bahwa mitokondria memiliki DNA sendiri, ribosom sendiri, dan membran ganda.',
            'Jumlah mitokondria dalam sel bervariasi tergantung pada kebutuhan energi sel. Sel otot jantung dapat memiliki hingga 5.000 mitokondria per sel. Sebaliknya, sel darah merah dewasa tidak memiliki mitokondria sama sekali.'
        ],
        fungsi: [
            'Menghasilkan ATP melalui respirasi seluler',
            'Mengatur metabolisme kalsium dalam sel',
            'Mengontrol apoptosis (kematian sel terprogram)',
            'Memproduksi hormon steroid dan hem',
            'Berperan dalam metabolisme asam lemak dan asam amino'
        ],
        caraKerja: 'Mitokondria menghasilkan ATP melalui respirasi seluler yang terdiri dari tiga tahap: glikolisis di sitosol, siklus Krebs di matriks, dan rantai transpor elektron di membran dalam. Glukosa dipecah menjadi CO2 dan H2O, dan energi yang dilepaskan digunakan untuk memompa proton melintasi membran dalam.',
        struktur: 'Mitokondria memiliki bentuk oval atau batang dengan diameter 0.5-10 mikrometer. Terdiri dari membran luar (halus, mengandung porin), membran dalam (berlipat membentuk krista), matriks (cairan yang mengandung DNA mitokondria, ribosom, dan enzim), dan ruang antar membran.',
        letak: 'Mitokondria tersebar di seluruh sitoplasma, biasanya terkonsentrasi di area yang membutuhkan energi tinggi. Pada sel otot, mitokondria terletak di antara fibril otot. Pada sel saraf, mitokondria terkonsentrasi di ujung akson.',
        fakta: [
            'Mitokondria memiliki DNA sendiri yang diwariskan secara maternal (dari ibu)',
            'Sebuah sel dapat mengandung antara 100 hingga 2.000 mitokondria',
            'Mitokondria dapat berkembang biak sendiri melalui pembelahan biner',
            'Mitokondria bertanggung jawab untuk menghasilkan 90% dari energi yang dibutuhkan sel',
            'Kerusakan mitokondria dikaitkan dengan penuaan dan berbagai penyakit neurodegeneratif'
        ],
        analogi: 'Mitokondria seperti pembangkit listrik tenaga air. Air (proton) dipompa ke atas waduk (ruang antar membran), kemudian dilepaskan melalui turbin (ATP sintase) untuk menghasilkan listrik (ATP). Semakin banyak turbin (krista), semakin banyak listrik yang dihasilkan.',
        ringkasan: 'Mitokondria adalah pembangkit energi sel yang menghasilkan ATP melalui respirasi seluler. Dengan membran ganda dan krista, mitokondria memiliki DNA sendiri dan merupakan hasil endosimbiosis evolusioner.',
        quiz: [
            { q: 'Mengapa mitokondria disebut pembangkit listrik sel?', options: ['Menghasilkan cahaya', 'Menghasilkan ATP', 'Menghasilkan panas', 'Menghasilkan air'], correct: 1 },
            { q: 'Apa nama lipatan membran dalam mitokondria?', options: ['Krista', 'Sisterna', 'Tubulus', 'Vesikel'], correct: 0 },
            { q: 'Mitokondria memiliki DNA yang diwariskan dari?', options: ['Ayah', 'Ibu', 'Keduanya', 'Tidak diwariskan'], correct: 1 }
        ]
    },
