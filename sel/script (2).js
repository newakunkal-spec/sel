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
    'lisosom': {
        name: 'Lisosom',
        subtitle: 'Tempat Pembuangan dan Daur Ulang Sel',
        icon: '🗑️',
        color: '#db2777',
        pengertian: [
            'Lisosom adalah organel kecil yang berisi enzim pencernaan (enzim hidrolitik) yang mampu memecah berbagai macam biomolekul termasuk protein, lipid, karbohidrat, dan asam nukleat. Lisosom sering disebut sebagai "kantong pencernaan" atau "tempat pembuangan" sel karena fungsinya dalam mendegradasi materi yang tidak lagi diperlukan.',
            'Lisosom ditemukan oleh ilmuwan Belgia Christian de Duve pada tahun 1955. Nama "lisosom" berasal dari bahasa Yunani "lysis" (pemecahan) dan "soma" (tubuh), yang secara harfiah berarti "tubuh yang memecah". Lisosom memiliki membran yang sangat khusus untuk melindungi sel dari enzim-enzim pencernaan yang berbahaya di dalamnya.',
            'Membran lisosom unik karena sangat kaya akan glikoprotein yang melindungi membran dari degradasi oleh enzim-enzimnya sendiri. pH di dalam lisosom sangat asam (sekitar 4.5-5.0), yang merupakan kondisi optimal untuk aktivitas enzim hidrolitik. Jika membran lisosom pecah dan enzimnya bocor ke sitoplasma, sel dapat mengalami autolisis (pencernaan diri).',
            'Lisosom memiliki beberapa jenis berdasarkan fungsinya: lisosom primer (baru terbentuk dari badan Golgi), lisosom sekunder (telah bergabung dengan materi yang akan dicerna), dan sisa badan (lisosom yang telah selesai bekerja dan mengandung sisa pencernaan). Beberapa sisa badan tetap ada dalam sel sebagai lipofuscin (pigmen penuaan).'
        ],
        fungsi: [
            'Mencerna materi asing yang masuk ke sel melalui fagositosis',
            'Mendegradasi organel tua dan rusak melalui autofagi',
            'Mencerna nutrisi yang diambil sel melalui pinositosis',
            'Membantu pembentukan tulang melalui proses remodeling',
            'Berperan dalam apoptosis (kematian sel terprogram)'
        ],
        caraKerja: 'Lisosom bekerja dengan menggabungkan diri dengan vesikel yang mengandung materi yang akan dicerna. Enzim hidrolitik di dalam lisosom memecah materi menjadi komponen-komponen sederhana yang dapat didaur ulang oleh sel. Pada autofagi, lisosom menyelimuti organel tua dengan membrannya dan mencernanya. Hasil pencernaan yang berguna diserap kembali, sementara limbah disimpan atau dikeluarkan.',
        struktur: 'Lisosom berbentuk bulat atau oval dengan diameter 0.1-1.2 mikrometer. Membran lisosom tunggal mengandung protein transport proton (V-ATPase) yang memompa H+ ke dalam untuk menjaga pH asam. Di dalamnya terdapat lebih dari 50 jenis enzim hidrolitik termasuk protease, lipase, nuklease, dan glikosidase.',
        letak: 'Lisosom tersebar di seluruh sitoplasma, biasanya bergerak menuju area di mana pencernaan diperlukan. Pada fagosit, lisosom terkonsentrasi di dekat membran sel tempat fagositosis terjadi. Pada sel yang aktif secara metabolisme, lisosom lebih banyak ditemukan di dekat mitokondria dan REK.',
        fakta: [
            'Ada lebih dari 50 jenis enzim hidrolitik di dalam setiap lisosom',
            'Penyakit penyimpanan lisosom seperti Tay-Sachs terjadi ketika enzim lisosom tertentu tidak berfungsi',
            'Lisosom dapat hidup selama beberapa hari hingga beberapa minggu dalam sel',
            'Sisa badan lisosom yang menumpuk menyebabkan bintik-bintik penuaan (lipofuscin)',
            'Beberapa sel, seperti fagosit, memiliki ratusan lisosom untuk melawan infeksi'
        ],
        analogi: 'Lisosom seperti fasilitas daur ulang dan tempat pembuangan sampah kota. Truk sampah (vesikel) mengangkut sampah (materi tak terpakai) ke fasilitas, di mana mesin-mesin canggih (enzim hidrolitik) memilah dan mendaur ulang material yang masih berguna, sementara limbah tidak berbahaya disimpan di tempat pembuangan akhir.',
        ringkasan: 'Lisosom adalah kantung enzim pencernaan yang mendegradasi materi asing, organel tua, dan limbah sel. Dengan pH asam dan membran pelindung, lisosom menjaga kebersihan dan kesehatan sel.',
        quiz: [
            { q: 'Apa enzim utama dalam lisosom?', options: ['Enzim hidrolitik', 'Enzim respirasi', 'Enzim fotosintesis', 'Enzim transkripsi'], correct: 0 },
            { q: 'pH di dalam lisosom bersifat?', options: ['Netral', 'Basa', 'Asam', 'Sangat basa'], correct: 2 },
            { q: 'Proses pencernaan organel tua oleh lisosom disebut?', options: ['Fagositosis', 'Autofagi', 'Pinositosis', 'Eksositosis'], correct: 1 }
        ]
    },
    'sentriol': {
        name: 'Sentriol',
        subtitle: 'Pengatur Pembelahan Sel',
        icon: '🧭',
        color: '#7c3aed',
        pengertian: [
            'Sentriol adalah struktur silindris kecil yang terdapat dalam sel hewan dan berperan penting dalam pembelahan sel. Setiap sel hewan yang normal memiliki sepasang sentriol yang disusun secara tegak lurus satu sama lain, membentuk apa yang disebut sentrosom. Sentriol tidak ditemukan pada sel tumbuhan tingkat tinggi, yang menggunakan mekanisme berbeda untuk pembelahan sel.',
            'Setiap sentriol memiliki struktur yang sangat teratur, tersusun dari 9 set triple mikrotubulus yang disusun dalam pola silinder. Struktur ini sering digambarkan sebagai "9+0" karena tidak memiliki mikrotubulus di tengahnya, berbeda dengan flagela dan silia yang memiliki struktur "9+2".',
            'Sentriol berfungsi sebagai pusat organisasi mikrotubulus (MTOC) selama interfase dan membentuk gelendong pembelah selama mitosis dan meiosis. Gelendong pembelah terdiri dari serat-serat protein yang menarik kromosom ke kutub yang berlawanan selama pembelahan sel. Tanpa sentriol yang berfungsi dengan baik, pembelahan sel dapat menjadi tidak normal.',
            'Selain peranannya dalam pembelahan sel, sentriol juga merupakan dasar pembentukan silia dan flagela. Sentriol yang bermigrasi ke membran sel akan berfungsi sebagai basal body, tempat silia dan flagela tumbuh. Ini menjelaskan mengapa sel dengan silia atau flagela memiliki sentriol yang lebih banyak.'
        ],
        fungsi: [
            'Membentuk gelendong pembelah selama mitosis dan meiosis',
            'Berfungsi sebagai pusat organisasi mikrotubulus (MTOC)',
            'Membentuk basal body untuk silia dan flagela',
            'Mengatur posisi organel dalam sel',
            'Berperan dalam sinyal seluler dan regulasi siklus sel'
        ],
        caraKerja: 'Selama pembelahan sel, pasangan sentriol memisah diri dan masing-masing bergerak ke kutub yang berlawanan. Dari setiap sentriol, mikrotubulus tumbuh membentuk gelendong pembelah. Serat kinetokor dari gelendong menempel pada sentromer kromosom dan menariknya ke kutub. Setelah pembelahan selesai, setiap sel anak menerima satu pasang sentriol.',
        struktur: 'Sentriol berbentuk silinder dengan diameter sekitar 0.2-0.5 mikrometer dan panjang 0.3-0.7 mikrometer. Tersusun dari 9 set triple mikrotubulus yang disusun melingkar. Setiap triple terdiri dari tiga mikrotubulus (A, B, dan C). Sentriol berpasangan dalam sentrosom, disusun tegak lurus satu sama lain, dikelilingi oleh materi perisentriolar.',
        letak: 'Sentriol terletak di dekat nukleus dalam sentrosom. Selama interfase, sentrosom berada di dekat nukleus. Saat sel memasuki mitosis, sentrosom bergerak ke kutub yang berlawanan. Pada sel dengan silia, sentriol tambahan (basal body) terletak di dekat membran sel.',
        fakta: [
            'Sentriol pertama kali diamati oleh Theodor Boveri pada tahun 1888',
            'Sebagian besar sel hewan memiliki tepat satu pasang sentriol, tetapi beberapa sel memiliki banyak pasang',
            'Sentriol tidak dapat dibuat baru dari nol; mereka harus bereplikasi dari sentriol yang sudah ada',
            'Sel tumbuhan tingkat tinggi tidak memiliki sentriol tetapi masih dapat membelah dengan normal',
            'Kelebihan sentriol dapat menyebabkan pembelahan sel yang abnormal dan berkontribusi pada kanker'
        ],
        analogi: 'Sentriol seperti pengatur lalu lintas di persimpangan jalan raya. Saat waktu pembelahan (jam sibuk), pengatur lalu lintas (sentriol) berpindah ke ujung jalan (kutub sel) dan mengarahkan mobil (kromosom) ke jalur yang benar sehingga lalu lintas berjalan lancar tanpa tabrakan.',
        ringkasan: 'Sentriol adalah struktur silindris yang membentuk gelendong pembelah selama mitosis dan berfungsi sebagai pusat organisasi mikrotubulus. Terdiri dari 9 triple mikrotubulus, sentriol memastikan pembelahan sel berlangsung dengan teratur.',
        quiz: [
            { q: 'Berapa pasang sentriol dalam satu sel hewan?', options: ['1', '2', '3', '4'], correct: 0 },
            { q: 'Apa fungsi sentriol selama pembelahan sel?', options: ['Menghasilkan energi', 'Membentuk gelendong pembelah', 'Mensintesis protein', 'Mencerna makanan'], correct: 1 },
            { q: 'Sentriol tersusun dari berapa triple mikrotubulus?', options: ['6', '7', '8', '9'], correct: 3 }
        ]
    },
    'peroksisom': {
        name: 'Peroksisom',
        subtitle: 'Pembersih Toksin Sel',
        icon: '🧪',
        color: '#4f46e5',
        pengertian: [
            'Peroksisom adalah organel kecil yang dibatasi membran tunggal dan berisi enzim oksidatif. Nama "peroksisom" berasal dari fakta bahwa enzim-enzim di dalamnya sering menggunakan oksigen molekuler untuk menghasilkan hidrogen peroksida (H2O2) sebagai produk sampingan. Peroksisom ditemukan oleh Christian de Duve pada tahun 1967, orang yang sama yang menemukan lisosom.',
            'Fungsi utama peroksisom adalah melakukan reaksi oksidatif yang melibatkan transfer hidrogen dari substrat ke oksigen, menghasilkan hidrogen peroksida. Meskipun hidrogen peroksida bersifat racun, peroksisom juga mengandung enzim katalase yang dengan cepat mengubah H2O2 menjadi air dan oksigen, sehingga melindungi sel dari kerusakan oksidatif.',
            'Pada sel hewan, peroksisom berperan penting dalam metabolisme asam lemak rantai sangat panjang dan asam amino. Mereka juga membantu dalam sintesis lipid khusus seperti plasmalogen yang merupakan komponen penting membran saraf dan otak. Selain itu, peroksisom berperan dalam metabolisme kolesterol dan asam empedu.',
            'Peroksisom berbeda dari mitokondria dalam hal bahwa mereka tidak menghasilkan ATP. Sebaliknya, energi yang dilepaskan dari reaksi oksidatif di peroksisom disimpan dalam bentuk panas. Peroksisom juga tidak memiliki DNA atau ribosom sendiri; semua protein peroksisom disintesis di ribosom bebas di sitoplasma dan kemudian diimpor ke peroksisom.'
        ],
        fungsi: [
            'Mengoksidasi asam lemak rantai sangat panjang dan asam amino',
            'Mendetoksifikasi hidrogen peroksida menggunakan enzim katalase',
            'Membantu sintesis lipid khusus seperti plasmalogen',
            'Berperan dalam metabolisme kolesterol dan asam empedu',
            'Menguraikan purin menjadi asam urat'
        ],
        caraKerja: 'Peroksisom bekerja dengan mengimpor substrat melalui protein transport membran. Enzim oksidase mengoksidasi substrat dan menghasilkan H2O2. Enzim katalase kemudian mengubah H2O2 yang berbahaya menjadi air dan oksigen yang tidak berbahaya. Reaksi ini sangat efisien: satu molekul katalase dapat menguraikan jutaan molekul H2O2 per detik.',
        struktur: 'Peroksisom berbentuk bulat atau oval dengan diameter 0.1-1.5 mikrometer. Membran tunggal mengandung protein transport untuk mengimpor protein dan substrat. Di dalamnya terdapat matriks yang mengandung enzim oksidase, katalase, dan enzim metabolisme lainnya. Peroksisom tidak memiliki DNA atau ribosom sendiri.',
        letak: 'Peroksisom tersebar di seluruh sitoplasma, biasanya berjumlah ratusan hingga ribuan per sel. Pada sel hati dan ginjal, peroksisom sangat melimpah karena peranannya dalam detoksifikasi. Peroksisom juga banyak ditemukan pada sel otak dan jaringan saraf.',
        fakta: [
            'Peroksisom dapat berkembang biak dengan membelah diri seperti bakteri',
            'Penyakit adrenoleukodistrofi (ALD) disebabkan oleh kerusakan peroksisom',
            'Katalase dalam peroksisom adalah salah satu enzim paling efisien di alam',
            'Peroksisom pada tumbuhan memiliki peran tambahan dalam fotorespirasi',
            'Jumlah peroksisom dapat meningkat ketika sel terpapar alkohol atau obat-obatan'
        ],
        analogi: 'Peroksisom seperti stasiun pemurnian air di kota. Air kotor yang mengandung kontaminan (asam lemak, racun) masuk ke stasiun, diolah dengan proses oksidasi, dan kontaminan berbahaya diubah menjadi air bersih (H2O) dan oksigen yang aman menggunakan filter khusus (katalase).',
        ringkasan: 'Peroksisom adalah organel yang mengoksidasi asam lemak dan racun menggunakan oksigen, kemudian menguraikan hidrogen peroksida berbahaya dengan katalase. Organel vital untuk metabolisme lipid dan detoksifikasi.',
        quiz: [
            { q: 'Enzim apa yang menguraikan H2O2 dalam peroksisom?', options: ['Amilase', 'Katalase', 'Lipase', 'Protease'], correct: 1 },
            { q: 'Produk sampingan utama reaksi di peroksisom adalah?', options: ['CO2', 'H2O2', 'O2', 'ATP'], correct: 1 },
            { q: 'Peroksisom tidak memiliki?', options: ['Membran', 'Enzim', 'DNA', 'Protein'], correct: 2 }
        ]
    },
    'vesikel': {
        name: 'Vesikel',
        subtitle: 'Kurir Pengangkut Sel',
        icon: '📨',
        color: '#fbbf24',
        pengertian: [
            'Vesikel adalah kantung-kantung kecil yang dibatasi membran lipid dan berfungsi sebagai sistem transportasi internal sel. Vesikel dapat dibayangkan sebagai truk-truk kecil yang mengangkut barang dari satu lokasi ke lokasi lain di dalam sel. Tanpa vesikel, materi yang diproduksi di satu bagian sel tidak akan dapat sampai ke tujuannya.',
            'Vesikel terbentuk melalui proses budding (bertunas) dari membran organel seperti REK, Badan Golgi, atau membran plasma. Proses ini melibatkan pelengkungan membran dan pemisahan vesikel yang baru terbentuk. Vesikel kemudian bergerak di sepanjang sitoskeleton menuju tujuannya dengan bantuan motor protein.',
            'Ada berbagai jenis vesikel dengan fungsi spesifik: vesikel transport (mengangkut protein dan lipid antar organel), vesikel sekretori (mengangkut materi untuk diekskresi), vesikel endositik (membawa materi dari luar ke dalam sel), dan vesikel sinaptik (mengangkut neurotransmitter di sel saraf). Setiap jenis memiliki protein permukaan spesifik yang menentukan tujuannya.',
            'Proses pembentukan dan fusi vesikel sangat teratur. Protein pada permukaan vesikel (v-SNARE) berinteraksi dengan protein pada membran target (t-SNARE) untuk memastikan vesikel berfusi dengan organel atau membran yang benar. Mekanisme ini seperti sistem kunci dan kunci pas yang sangat presisi.'
        ],
        fungsi: [
            'Mengangkut protein dan lipid antar organel dalam sel',
            'Mengemas dan mengirim materi untuk ekskresi keluar sel',
            'Membawa materi dari luar sel ke dalam melalui endositosis',
            'Menyimpan dan melepaskan neurotransmitter di sel saraf',
            'Berpartisipasi dalam daur ulang membran sel'
        ],
        caraKerja: 'Vesikel terbentuk dari membran organel melalui proses budding yang didorong oleh protein pelengkung seperti klatrin. Setelah terbentuk, vesikel bergerak di sepanjang mikrotubulus dengan bantuan motor protein (kinesin dan dinein). Ketika sampai di tujuan, vesikel berfusi dengan membran target melalui interaksi SNARE, melepaskan muatannya.',
        struktur: 'Vesikel berbentuk bulat atau oval dengan diameter 50-200 nanometer. Membran vesikel tersusun dari lapisan ganda fosfolipid dengan protein spesifik (v-SNARE) di permukaan luar. Beberapa vesikel memiliki lapisan protein pelengkung seperti klatrin atau COPI/COPII di permukaan luar. Muatan vesikel berada di dalam lumen.',
        letak: 'Vesikel tersebar di seluruh sitoplasma, bergerak aktif di antara organel. Vesikel transport umumnya ditemukan di dekat REK, Badan Golgi, dan membran plasma. Vesikel sinaptik terkonsentrasi di ujung akson neuron.',
        fakta: [
            'Sebuah sel dapat menghasilkan ribuan vesikel setiap menit',
            'Vesikel bergerak dengan kecepatan sekitar 1-4 mikrometer per detik di sepanjang mikrotubulus',
            'Neurotransmitter dilepaskan dari vesikel sinaptik dalam waktu kurang dari 1 milidetik',
            'Virus seperti influenza menggunakan vesikel sel untuk keluar dari sel inang',
            'Penyakit seperti diabetes tipe 1 terkait dengan gangguan vesikel insulin'
        ],
        analogi: 'Vesikel seperti kurir pengantar paket dalam kota. Kurir mengambil barang dari gudang (REK/Badan Golgi), mengangkutnya melalui jalan raya (sitoskeleton) menggunakan kendaraan (motor protein), dan mengantarkannya ke alamat yang tepat dengan menunjukkan ID pengiriman (SNARE) untuk konfirmasi.',
        ringkasan: 'Vesikel adalah kantung membran yang mengangkut materi antar organel dan ke luar sel. Terbentuk dari budding membran dan bergerak menggunakan motor protein, vesikel memastikan distribusi materi yang efisien.',
        quiz: [
            { q: 'Vesikel terbentuk dari proses apa?', options: ['Fusi', 'Budding', 'Difusi', 'Osmosis'], correct: 1 },
            { q: 'Apa fungsi vesikel sekretori?', options: ['Mencerna makanan', 'Mengangkut materi untuk diekskresi', 'Menyimpan energi', 'Mensintesis DNA'], correct: 1 },
            { q: 'Protein apa yang membantu vesikel berfusi dengan target?', options: ['Klatrin', 'SNARE', 'Kinesin', 'Aktin'], correct: 1 }
        ]
    },
    'vakuola': {
        name: 'Vakuola Kecil',
        subtitle: 'Kantong Penyimpanan Sel',
        icon: '💼',
        color: '#06b6d4',
        pengertian: [
            'Vakuola pada sel hewan jauh lebih kecil dan lebih banyak jumlahnya dibandingkan dengan vakuola besar pada sel tumbuhan. Vakuola hewan sering disebut vakuola kecil atau vesikel vakuolar. Meskipun ukurannya kecil, vakuola memainkan peran penting dalam penyimpanan, transport, dan homeostasis sel hewan.',
            'Vakuola hewan dapat memiliki berbagai fungsi tergantung pada jenis sel. Vakuola makanan (fagosom) terbentuk saat sel menelan partikel makanan. Vakuola kontraktil pada organisme protozoa seperti paramecium berfungsi untuk memompa kelebihan air keluar dari sel. Vakuola autolag juga ada untuk mendegradasi komponen sel yang tidak diperlukan.',
            'Berbeda dengan vakuola tumbuhan yang memiliki dinding sel untuk memberikan tekanan turgor, vakuola hewan lebih fleksibel dan dinamis. Vakuola hewan dapat bergerak, berubah ukuran, dan berfusi dengan organel lain dengan cepat sesuai kebutuhan sel. Fleksibilitas ini penting untuk sel hewan yang sering berubah bentuk.',
            'Vakuola juga berperan dalam proses endositosis dan eksositosis. Vakuola makanan yang terbentuk dari fagositosis akan bergabung dengan lisosom untuk pencernaan. Vakuola sekretori mengangkut materi dari badan Golgi ke membran sel untuk diekskresi. Beberapa vakuola juga berfungsi sebagai tempat penyimpanan ion, pigmen, atau racun.'
        ],
        fungsi: [
            'Menyimpan nutrisi, ion, dan molekul lainnya',
            'Membantu dalam pencernaan melalui fagositosis dan pinositosis',
            'Mengatur tekanan osmotik dan homeostasis air',
            'Menyimpan produk limbah sementara',
            'Berperan dalam ekskresi dan sekresi materi'
        ],
        caraKerja: 'Vakuola terbentuk dari invaginasi membran sel (endositosis) atau dari badan Golgi. Vakuola makanan bergabung dengan lisosom untuk pencernaan. Vakuola kontraktil mengumpulkan kelebihan air dan secara berkala memompa air keluar melalui kontraksi. Vakuola penyimpanan menahan materi hingga dibutuhkan atau dikeluarkan.',
        struktur: 'Vakuola hewan berbentuk bulat atau oval dengan diameter bervariasi dari 0.1 hingga beberapa mikrometer. Dibatasi oleh membran tunggal yang disebut tonoplas. Membran vakuola mengandung protein transport untuk mengatur masuk dan keluarnya zat. Isi vakuola dapat berupa cairan, partikel padat, atau kombinasi keduanya.',
        letak: 'Vakuola tersebar di seluruh sitoplasma sel hewan. Pada sel yang aktif secara endositosis, vakuola lebih banyak ditemukan di dekat membran sel. Pada protozoa, vakuola kontraktil terletak di dekat membran sel dengan saluran pengeluaran ke luar.',
        fakta: [
            'Vakuola pada sel hewan jauh lebih kecil dan lebih banyak jumlahnya dibandingkan sel tumbuhan',
            'Paramecium memiliki vakuola kontraktil yang memompa air setiap 10-20 detik',
            'Vakuola makanan dapat memiliki pH yang sangat asam untuk membunuh bakteri',
            'Beberapa sel hewan menggunakan vakuola untuk menyimpan pigmen warna',
            'Vakuola dapat berfusi satu sama lain untuk membentuk vakuola yang lebih besar'
        ],
        analogi: 'Vakuola seperti kantong-kantong plastik berbagai ukuran yang digunakan di rumah. Ada kantong untuk menyimpan makanan (penyimpanan nutrisi), kantong sampah sementara (limbah), dan kantong untuk barang-barang yang akan didaur ulang (autofagi). Kantong-kantong ini fleksibel dan dapat digabungkan sesuai kebutuhan.',
        ringkasan: 'Vakuola pada sel hewan adalah kantung-kantung kecil untuk penyimpanan, pencernaan, dan homeostasis. Meskipun lebih kecil dari vakuola tumbuhan, vakuola hewan sangat dinamis dan berperan penting dalam berbagai proses seluler.',
        quiz: [
            { q: 'Bagaimana ukuran vakuola hewan dibandingkan tumbuhan?', options: ['Lebih besar', 'Lebih kecil dan lebih banyak', 'Sama besar', 'Tidak ada vakuola'], correct: 1 },
            { q: 'Apa fungsi vakuola kontraktil pada protozoa?', options: ['Menyimpan makanan', 'Memompa kelebihan air', 'Menghasilkan energi', 'Mensintesis protein'], correct: 1 },
            { q: 'Membran vakuola disebut?', options: ['Membran plasma', 'Tonoplas', 'Membran nukleus', 'Kapsid'], correct: 1 }
        ]
    }
};

// ==================== STATE ====================
let currentTheme = localStorage.getItem('biocell-theme') || 'light';
let completedOrganelles = JSON.parse(localStorage.getItem('biocell-completed') || '[]');
let activeOrganelle = null;
let quizScore = 0;
let currentQuizIndex = 0;
let quizAnswered = false;

// ==================== DOM ELEMENTS ====================
const sidebar = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobile-toggle');
const themeToggle = document.getElementById('theme-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const btnSearch = document.getElementById('btn-search');
const searchClose = document.getElementById('search-close');
const infoPanel = document.getElementById('info-panel');
const infoPanelOverlay = document.getElementById('info-panel-overlay');
const infoPanelContent = document.getElementById('info-panel-content');
const infoPanelClose = document.getElementById('info-panel-close');
const progressBar = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const progressOrganelles = document.getElementById('progress-organelles');
const materiGrid = document.getElementById('materi-grid');
const particleCanvas = document.getElementById('particle-canvas');
const mouseGlow = document.getElementById('mouse-glow');

// ==================== PARTICLE SYSTEM ====================
function initParticles() {
    const ctx = particleCanvas.getContext('2d');
    let particles = [];
    let width, height;

    function resize() {
        width = particleCanvas.width = window.innerWidth;
        height = particleCanvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particleCount = window.innerWidth < 768 ? 30 : 60;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[j].x - p.x;
                const dy = particles[j].y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(animate);
    }
    animate();
}

// ==================== MOUSE GLOW ====================
function initMouseGlow() {
    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.left = e.clientX + 'px';
        mouseGlow.style.top = e.clientY + 'px';
    });
}

// ==================== THEME TOGGLE ====================
function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('biocell-theme', currentTheme);
        updateThemeIcon();
    });
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('.theme-icon');
    const label = themeToggle.querySelector('.theme-label');
    if (currentTheme === 'dark') {
        icon.textContent = '☀️';
        label.textContent = 'Mode Terang';
    } else {
        icon.textContent = '🌙';
        label.textContent = 'Mode Gelap';
    }
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        sidebar.classList.toggle('open');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileToggle.classList.remove('active');
                sidebar.classList.remove('open');
            }
        });
    });
}

// ==================== SEARCH ====================
function initSearch() {
    btnSearch.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
    });

    searchInput.addEventListener('input', handleSearch);
}

function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    searchInput.focus();
    searchResults.innerHTML = '';
}

function closeSearch() {
    searchOverlay.classList.remove('active');
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
        searchResults.innerHTML = '';
        return;
    }

    const matches = Object.entries(organelleData).filter(([id, data]) => {
        return data.name.toLowerCase().includes(query) || 
               data.subtitle.toLowerCase().includes(query) ||
               id.toLowerCase().includes(query);
    });

    if (matches.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">Tidak ada hasil ditemukan</div>';
        return;
    }

    searchResults.innerHTML = matches.map(([id, data]) => `
        <div class="search-result-item" data-id="${id}">
            <span class="search-result-color" style="background:${data.color}"></span>
            <div>
                <div class="search-result-name">${data.name}</div>
                <div class="search-result-desc">${data.subtitle}</div>
            </div>
        </div>
    `).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const id = item.dataset.id;
            closeSearch();
            openOrganellePanel(id);
            document.getElementById('cell-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ==================== PROGRESS TRACKING ====================
function initProgress() {
    updateProgress();
}

function updateProgress() {
    const total = Object.keys(organelleData).length;
    const completed = completedOrganelles.length;
    const percent = Math.round((completed / total) * 100);

    progressBar.style.width = percent + '%';
    progressPercent.textContent = percent + '%';

    progressOrganelles.innerHTML = Object.keys(organelleData).map(id => {
        const isCompleted = completedOrganelles.includes(id);
        return `<div class="progress-dot ${isCompleted ? 'completed' : ''}" data-id="${id}" title="${organelleData[id].name}"></div>`;
    }).join('');

    progressOrganelles.querySelectorAll('.progress-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const id = dot.dataset.id;
            openOrganellePanel(id);
        });
    });
}

function markOrganelleComplete(id) {
    if (!completedOrganelles.includes(id)) {
        completedOrganelles.push(id);
        localStorage.setItem('biocell-completed', JSON.stringify(completedOrganelles));
        updateProgress();
        updateMateriCards();
    }
}

// ==================== ORGANELLE INTERACTIONS ====================
function initOrganelleInteractions() {
    const organelles = document.querySelectorAll('.organelle');
    const tooltip = document.getElementById('organelle-tooltip');
    const cellWrapper = document.getElementById('cell-wrapper');

    organelles.forEach(organelle => {
        const id = organelle.id;
        const data = organelleData[id];
        if (!data) return;

        organelle.addEventListener('mouseenter', (e) => {
            if (activeOrganelle) return;

            tooltip.querySelector('.tooltip-name').textContent = data.name;
            tooltip.classList.add('visible');

            const rect = organelle.getBoundingClientRect();
            const wrapperRect = cellWrapper.getBoundingClientRect();
            tooltip.style.left = (rect.left - wrapperRect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top - wrapperRect.top - tooltip.offsetHeight - 10) + 'px';
        });

        organelle.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible');
        });

        organelle.addEventListener('click', (e) => {
            e.stopPropagation();
            openOrganellePanel(id);
        });
    });

    infoPanelOverlay.addEventListener('click', closeOrganellePanel);
    infoPanelClose.addEventListener('click', closeOrganellePanel);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeOrganellePanel();
    });
}

function openOrganellePanel(id) {
    console.log('Opening panel for:', id);
    const data = organelleData[id];
    if (!data) {
        console.error('No data found for organelle:', id);
        return;
    }

    activeOrganelle = id;

    // Highlight active organelle, dim others
    document.querySelectorAll('.organelle').forEach(el => {
        if (el.id === id) {
            el.classList.add('active');
            el.classList.remove('dimmed');
        } else {
            el.classList.remove('active');
            el.classList.add('dimmed');
        }
    });

    // Build panel content using DOM methods instead of template literals
    let pengertianHtml = '';
    for (let i = 0; i < data.pengertian.length; i++) {
        pengertianHtml += '<p class="panel-text">' + escapeHtml(data.pengertian[i]) + '</p>';
    }

    let fungsiHtml = '';
    for (let i = 0; i < data.fungsi.length; i++) {
        fungsiHtml += '<li>' + escapeHtml(data.fungsi[i]) + '</li>';
    }

    let faktaHtml = '';
    for (let i = 0; i < data.fakta.length; i++) {
        faktaHtml += '<div class="panel-fact"><span class="fact-number">' + (i+1) + '</span><span class="fact-text">' + escapeHtml(data.fakta[i]) + '</span></div>';
    }

    let quizHtml = '';
    for (let qi = 0; qi < data.quiz.length; qi++) {
        let q = data.quiz[qi];
        let optionsHtml = '';
        for (let oi = 0; oi < q.options.length; oi++) {
            optionsHtml += '<button class="quiz-mini-option" data-correct="' + (oi === q.correct) + '">' + escapeHtml(q.options[oi]) + '</button>';
        }
        quizHtml += '<div class="quiz-mini"><div class="quiz-mini-question">' + (qi+1) + '. ' + escapeHtml(q.q) + '</div><div class="quiz-mini-options">' + optionsHtml + '</div></div>';
    }

    infoPanelContent.innerHTML = 
        '<div class="panel-header">' +
            '<div class="panel-icon" style="background: linear-gradient(135deg, ' + data.color + ', ' + data.color + '88)">' + data.icon + '</div>' +
            '<h2 class="panel-title">' + escapeHtml(data.name) + '</h2>' +
            '<p class="panel-subtitle">' + escapeHtml(data.subtitle) + '</p>' +
        '</div>' +
        '<div class="panel-section"><div class="panel-section-title">Pengertian</div>' + pengertianHtml + '</div>' +
        '<div class="panel-section"><div class="panel-section-title">Fungsi</div><ul class="panel-list">' + fungsiHtml + '</ul></div>' +
        '<div class="panel-section"><div class="panel-section-title">Cara Kerja</div><p class="panel-text">' + escapeHtml(data.caraKerja) + '</p></div>' +
        '<div class="panel-section"><div class="panel-section-title">Struktur</div><p class="panel-text">' + escapeHtml(data.struktur) + '</p></div>' +
        '<div class="panel-section"><div class="panel-section-title">Letak</div><p class="panel-text">' + escapeHtml(data.letak) + '</p></div>' +
        '<div class="panel-section"><div class="panel-section-title">Analogi</div><div class="panel-analogy"><div class="panel-analogy-label">Analogi Kehidupan</div><div class="panel-analogy-text">' + escapeHtml(data.analogi) + '</div></div></div>' +
        '<div class="panel-section"><div class="panel-section-title">Fakta Menarik</div><div class="panel-facts">' + faktaHtml + '</div></div>' +
        '<div class="panel-section"><div class="panel-section-title">Ringkasan</div><div class="panel-summary"><div class="panel-summary-title">Poin Penting</div><div class="panel-summary-text">' + escapeHtml(data.ringkasan) + '</div></div></div>' +
        '<div class="panel-section panel-quiz"><div class="panel-section-title">Quiz Mini</div>' + quizHtml + '</div>';

    // Add quiz listeners
    infoPanelContent.querySelectorAll('.quiz-mini-option').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.closest('.quiz-mini-options');
            const isCorrect = this.dataset.correct === 'true';

            parent.querySelectorAll('.quiz-mini-option').forEach(b => {
                b.disabled = true;
                if (b.dataset.correct === 'true') b.classList.add('correct');
            });

            if (!isCorrect) this.classList.add('wrong');
        });
    });

    // Show panel
    infoPanelOverlay.classList.add('active');
    infoPanel.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Mark as read after 5 seconds
    setTimeout(() => markOrganelleComplete(id), 5000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function closeOrganellePanel() {
    activeOrganelle = null;

    document.querySelectorAll('.organelle').forEach(el => {
        el.classList.remove('active', 'dimmed');
    });

    infoPanelOverlay.classList.remove('active');
    infoPanel.classList.remove('active');
    document.body.style.overflow = '';
}

// ==================== MATERI GRID ====================
function initMateriGrid() {
    materiGrid.innerHTML = Object.entries(organelleData).map(([id, data]) => {
        const isCompleted = completedOrganelles.includes(id);
        return `
            <div class="materi-card ${isCompleted ? 'completed' : ''}" data-id="${id}" style="--card-color: ${data.color}">
                <div class="materi-card-header">
                    <div class="materi-card-icon" style="background: ${data.color}22; color: ${data.color}">${data.icon}</div>
                    <h3 class="materi-card-title">${data.name}</h3>
                </div>
                <p class="materi-card-desc">${data.subtitle}</p>
                <div class="materi-card-meta">
                    <span>${data.fungsi.length} fungsi</span>
                    <span>•</span>
                    <span>${data.fakta.length} fakta</span>
                    <span class="materi-card-arrow">→</span>
                </div>
            </div>
        `;
    }).join('');

    materiGrid.querySelectorAll('.materi-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            openOrganellePanel(id);
        });
    });
}

function updateMateriCards() {
    materiGrid.querySelectorAll('.materi-card').forEach(card => {
        const id = card.dataset.id;
        if (completedOrganelles.includes(id)) {
            card.classList.add('completed');
        }
    });
}

// ==================== QUIZ SECTION ====================
const quizQuestions = [
    {
        q: 'Organel manakah yang disebut sebagai "pembangkit listrik sel"?',
        options: ['Nukleus', 'Mitokondria', 'Ribosom', 'Badan Golgi'],
        correct: 1,
        explanation: 'Mitokondria menghasilkan ATP, molekul energi utama sel, melalui respirasi seluler.'
    },
    {
        q: 'Struktur apa yang membentuk gelendong pembelah selama mitosis?',
        options: ['Lisosom', 'Sentriol', 'Vesikel', 'Peroksisom'],
        correct: 1,
        explanation: 'Sentriol berfungsi sebagai pusat organisasi mikrotubulus dan membentuk gelendong pembelah.'
    },
    {
        q: 'Proses pencernaan organel tua oleh lisosom disebut?',
        options: ['Fagositosis', 'Autofagi', 'Pinositosis', 'Eksositosis'],
        correct: 1,
        explanation: 'Autofagi adalah proses di mana lisosom mendegradasi komponen sel yang rusak atau tua.'
    }
];

function initQuiz() {
    const btnStart = document.getElementById('btn-start-quiz');
    const btnRetry = document.getElementById('btn-retry-quiz');

    btnStart.addEventListener('click', startQuiz);
    btnRetry.addEventListener('click', startQuiz);
}

function startQuiz() {
    quizScore = 0;
    currentQuizIndex = 0;
    quizAnswered = false;

    document.getElementById('quiz-start').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-game').style.display = 'block';

    showQuizQuestion();
}

function showQuizQuestion() {
    quizAnswered = false;
    const q = quizQuestions[currentQuizIndex];

    document.getElementById('quiz-current').textContent = currentQuizIndex + 1;
    document.getElementById('quiz-total').textContent = quizQuestions.length;
    document.getElementById('quiz-progress-bar').style.width = ((currentQuizIndex / quizQuestions.length) * 100) + '%';
    document.getElementById('quiz-question').textContent = q.q;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">
            <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
            <span>${opt}</span>
        </button>
    `).join('');

    document.getElementById('quiz-feedback').innerHTML = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';

    optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleQuizAnswer(parseInt(btn.dataset.index)));
    });
}

function handleQuizAnswer(selectedIndex) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = quizQuestions[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');

    options.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('correct');
    });

    if (selectedIndex === q.correct) {
        quizScore++;
        feedback.textContent = '✅ Benar! ' + q.explanation;
        feedback.className = 'quiz-feedback correct';
    } else {
        options[selectedIndex].classList.add('wrong');
        feedback.textContent = '❌ Salah. ' + q.explanation;
        feedback.className = 'quiz-feedback wrong';
    }

    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {
            showQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 2500);
}

function showQuizResult() {
    document.getElementById('quiz-game').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'block';

    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultScore = document.getElementById('result-score');

    resultScore.textContent = `${quizScore}/${quizQuestions.length}`;

    if (quizScore === quizQuestions.length) {
        resultIcon.textContent = '🏆';
        resultTitle.textContent = 'Sempurna!';
        resultMessage.textContent = 'Kamu telah menguasai materi sel hewan dengan sangat baik!';
    } else if (quizScore >= quizQuestions.length / 2) {
        resultIcon.textContent = '👏';
        resultTitle.textContent = 'Bagus!';
        resultMessage.textContent = 'Kamu sudah memahami sebagian besar materi. Pelajari lagi yang belum dikuasai!';
    } else {
        resultIcon.textContent = '📚';
        resultTitle.textContent = 'Terus Belajar!';
        resultMessage.textContent = 'Jangan menyerah! Pelajari kembali materi dan coba lagi.';
    }
}

// ==================== SCROLL REVEAL ====================
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.materi-card, .ref-card, .tentang-card, .section-header').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ==================== ACTIVE NAV ====================
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initMouseGlow();
    initTheme();
    initMobileMenu();
    initSearch();
    initProgress();
    initOrganelleInteractions();
    initMateriGrid();
    initQuiz();
    initScrollReveal();
    initActiveNav();
    initSmoothScroll();

    console.log('🧬 BioCell — Sel Hewan Interaktif berhasil dimuat!');
    console.log('📚 14 organel siap dieksplorasi');
    console.log('🔍 Tekan Ctrl+K untuk membuka pencarian');
});
