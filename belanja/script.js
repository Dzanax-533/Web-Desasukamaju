document.addEventListener('DOMContentLoaded', () => {

    // --- DATA PRODUK DENGAN NOMOR WHATSAPP ---
    const products = [
        {
            id: 1,
            name: 'Telur Asin Aliya Cibeber',
            price: 'Rp3.000',
            rating: 5,
            reviews: 10,
            description: 'Telur asin produksi Aliya Cibeber dibuat dari telur pilihan dengan proses pengasinan alami. Rasanya gurih, asin pas, dan cocok untuk lauk pendamping nasi maupun camilan khas.',
            images: ['../assets/umkm/foto telur asin.JPG'],
            whatsapp: '6285846662066' // Ganti dengan nomor WA penjual
        },
        {
            id: 2,
            name: 'Kerupuk Rambak Do`a Ibu',
            price: 'Rp2.000-5.000',
            rating: 5,
            reviews: 11,
            description: 'Kerupuk rambak khas Do`a Ibu terbuat dari aci pilihan yang diolah higienis hingga menghasilkan kerenyahan istimewa. Nikmat disantap langsung maupun sebagai pelengkap hidangan.',
            images: ['../assets/umkm/foto rambak.jpeg'],
            whatsapp: '6289507620147' // Ganti dengan nomor WA penjual
        },
        {
            id: 3,
            name: 'Keripik Lantak Berkat Do`a Ibu',
            price: 'Rp5.000-10.000',
            rating: 5,
            reviews: 10,
            description: 'Keripik lantak dibuat dari pisang pilihan yang diiris tipis dan digoreng hingga kering. Rasanya gurih asin dengan tekstur renyah, cocok jadi camilan tradisional yang sederhana namun bikin ketagihan.',
            images: ['../assets/umkm/lantak.png'],
            whatsapp: '6281322480741' // Nomor yang sama jika penjualnya sama
        },
        {
            id: 4,
            name: 'Keripik Singkong Berkat Do`a Ibu',
            price: 'Rp5.000-10.000',
            rating: 5,
            reviews: 10,
            description: 'Keripik singkong digoreng dengan teknik khusus agar tetap garing dan gurih. Cocok untuk camilan sehari-hari atau teman minum teh/kopi.',
            images: ['../assets/umkm/singkong.png'],
            whatsapp: '6281322480741'
        },
        {
            id: 5,
            name: 'Keripik Pangsit Berkat Do`a Ibu',
            price: 'Rp2.000-5.000',
            rating: 5,
            reviews: 11,
            description: 'Keripik pangsit dibuat dari adonan kulit pangsit pilihan yang digoreng renyah. Bisa dinikmati langsung atau dijadikan pelengkap hidangan.',
            images: ['../assets/umkm/pangsit.png'],
            whatsapp: '6281322480741'
        },
        {
            id: 6,
            name: 'Keripik Sistik Berkat Do`a Ibu',
            price: 'Rp5.000-10.000',
            rating: 5,
            reviews: 10,
            description: 'Keripik sistik berbentuk stik panjang dengan tekstur renyah. Rasanya gurih pas, cocok untuk teman santai maupun sajian kumpul keluarga.',
            images: ['../assets/umkm/sistik.png'],
            whatsapp: '6281322480741'
        },
        {
            id: 7,
            name: 'Sale Pisang Berkat Do`a Ibu',
            price: 'Rp5.000-10.000',
            rating: 5,
            reviews: 10,
            description: 'Sale pisang dibuat dari pisang pilihan yang diolah secara tradisional hingga menghasilkan rasa manis alami, lembut, dan wangi khas pisang.',
            images: ['../assets/umkm/sale.png'],
            whatsapp: '6281322480741'
        },
        {
            id: 8,
            name: 'Emping Melinjo bee~~ahh',
            price: 'Rp10.000',
            rating: 5,
            reviews: 10,
            description: 'Emping bee~~ahh dibuat dari biji melinjo segar yang diolah secara tradisional. Teksturnya renyah dengan cita rasa khas melinjo, cocok untuk camilan maupun pelengkap berbagai hidangan.',
            images: ['../assets/umkm/emping.jpeg'],
            whatsapp: '6287720483428'
        },
        {
            id: 9,
            name: 'Aneka Manisan Kering Ibu Pipih',
            price: 'Rp15.000',
            rating: 5,
            reviews: 10,
            description: 'Manisan bunga pala dan paladang dibuat dari bahan alami pilihan, menghadirkan perpaduan rasa manis, segar, dan sedikit asam yang menyegarkan. Cocok dijadikan oleh-oleh khas daerah.',
            images: ['../assets/umkm/pala.jpeg'],
            whatsapp: '6287721297010'
        }
    ];

    // --- Ambil Elemen dari DOM ---
    const galleryView = document.getElementById('product-gallery-view');
    const detailView = document.getElementById('product-detail-view');
    const productGrid = document.querySelector('.product-grid');

    // --- Fungsi untuk Render Tampilan ---
    const renderGallery = () => {
        productGrid.innerHTML = ''; // Kosongkan grid
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.productId = product.id;
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="card-body">
                    <h3>${product.name}</h3>
                    <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
                    <div class="price">${product.price}</div>
                </div>
            `;
            card.addEventListener('click', () => showDetailView(product.id));
            productGrid.appendChild(card);
        });
    };

    const renderDetail = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        // Membuat pesan default untuk WhatsApp
        const message = encodeURIComponent(`Halo, saya tertarik dengan produk "${product.name}".`);
        // Membuat link WhatsApp yang dinamis
        const whatsappUrl = `https://wa.me/${product.whatsapp}?text=${message}`;

        let thumbnailsHTML = product.images.map((img, index) => 
            `<img src="${img}" alt="Thumbnail ${index + 1}" class="${index === 0 ? 'active' : ''}" data-index="${index}">`
        ).join('');

        detailView.innerHTML = `
            <button id="back-to-gallery" class="back-button">&larr; Kembali</button>
            <div class="detail-content">
                <div class="product-gallery">
                    <img id="main-product-image" src="${product.images[0]}" alt="Gambar Produk Utama" class="main-image">
                    <div class="thumbnail-container">${thumbnailsHTML}</div>
                </div>
                <div class="product-info">
                    <div class="info-header">
                        <h2 id="product-title">${product.name}</h2>
                        <i class="fa-regular fa-heart like-icon"></i>
                    </div>
                    <div class="info-meta">
                        <span class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</span>
                        <span id="product-reviews-count">Penilaian (${product.reviews})</span>
                        <span><i class="fa-solid fa-store"></i> UMKM</span>
                    </div>
                    <div id="product-price" class="info-price">${product.price}</div>
                    <p id="product-description" class="info-description">${product.description}</p>
                    
                    <!-- Link WhatsApp yang sudah dinamis -->
                    <a href="${whatsappUrl}" target="_blank" class="contact-button">
                        <i class="fa-brands fa-whatsapp"></i> Hubungi Penjual
                    </a>

                    <div class="share-section">
                        <span>Bagikan:</span>
                        <div class="share-icons">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-solid fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-reviews">
                <h3>ULASAN PEMBELI</h3>
                <div class="no-reviews">
                    <i class="fa-solid fa-comment-slash"></i>
                    <span>Tidak ada ulasan untuk saat ini</span>
                </div>
            </div>
        `;

        // Tambah event listener untuk tombol kembali dan thumbnail
        document.getElementById('back-to-gallery').addEventListener('click', showGalleryView);
        document.querySelectorAll('.thumbnail-container img').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                const mainImage = document.getElementById('main-product-image');
                mainImage.src = e.target.src;
                document.querySelector('.thumbnail-container img.active').classList.remove('active');
                e.target.classList.add('active');
            });
        });
    };

    // --- Fungsi untuk Beralih Tampilan ---
    const showDetailView = (productId) => {
        renderDetail(productId);
        galleryView.classList.add('hidden');
        detailView.classList.remove('hidden');
    };

    const showGalleryView = () => {
        detailView.classList.add('hidden');
        galleryView.classList.remove('hidden');
    };

    // --- Inisialisasi ---
    renderGallery();
});
