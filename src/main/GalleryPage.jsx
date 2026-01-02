import React, { useState } from "react";
import Layout from "../layouts/Layout";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  X as CloseIcon,
  Download,
} from "lucide-react";
import tampakDepan from "../assets/tampak-depan.jpg";

const GalleryPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const galleryCategories = [
    { id: "all", name: "Semua" },
    { id: "acara", name: "Acara Masjid" },
    { id: "sholat", name: "Sholat Berjamaah" },
    { id: "kegiatan", name: "Kegiatan Sosial" },
    { id: "bangunan", name: "Bangunan Masjid" },
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Tampak Depan Masjid Nurul Huda Depok",
      description:
        "Suasana khidmat Shalat Idul Fitri di halaman Masjid Nurul Huda",
      category: "acara",
      date: "21 April 2023",
      image: tampakDepan,
      tags: ["Idul Fitri", "Shalat", "Hari Raya"],
    },
    {
      id: 2,
      title: "Renovasi Mimbar Masjid",
      description: "Proses renovasi mimbar baru untuk kenyamanan khatib",
      category: "bangunan",
      date: "15 Maret 2023",
      image:
        "https://images.unsplash.com/photo-1564769610726-4bbdd02b3afe?w=800",
      tags: ["Renovasi", "Mimbar", "Perbaikan"],
    },
    {
      id: 3,
      title: "Buka Puasa Bersama",
      description: "Kegiatan buka puasa bersama anak yatim dan dhuafa",
      category: "kegiatan",
      date: "12 April 2023",
      image:
        "https://images.unsplash.com/photo-1584552023990-f6723f5e6925?w=800",
      tags: ["Ramadhan", "Buka Puasa", "Sosial"],
    },
    {
      id: 4,
      title: "Kajian Rutin Jumat",
      description: "Kajian ilmu agama setiap Jumat sore",
      category: "acara",
      date: "5 Mei 2023",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800",
      tags: ["Kajian", "Ilmu", "Agama"],
    },
    {
      id: 5,
      title: "Shalat Subuh Berjamaah",
      description: "Keindahan fajar dan kekhusyuan shalat Subuh",
      category: "sholat",
      date: "20 Juni 2023",
      image:
        "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800",
      tags: ["Subuh", "Berjamaah", "Fajar"],
    },
    {
      id: 6,
      title: "Pembagian Zakat Fitrah",
      description: "Penyaluran zakat fitrah kepada mustahik",
      category: "kegiatan",
      date: "20 April 2023",
      image: "https://images.unsplash.com/photo-1551191187-5d7c6c223f51?w=800",
      tags: ["Zakat", "Fitrah", "Sedekah"],
    },
    {
      id: 7,
      title: "Malam Lailatul Qadar",
      description: "I'tikaf dan qiyamul lail di 10 malam terakhir Ramadhan",
      category: "acara",
      date: "28 April 2023",
      image:
        "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=800",
      tags: ["Ramadhan", "I'tikaf", "Qiyamul Lail"],
    },
    {
      id: 8,
      title: "Pintu Masuk Utama",
      description: "Pintu gerbang utama Masjid Nurul Huda setelah renovasi",
      category: "bangunan",
      date: "10 Februari 2023",
      image:
        "https://images.unsplash.com/photo-1580338841594-8c897e53d6e2?w=800",
      tags: ["Arsitektur", "Pintu", "Renovasi"],
    },
    {
      id: 9,
      title: "Shalat Jumat",
      description: "Jamaah memadati masjid untuk shalat Jumat",
      category: "sholat",
      date: "14 Juli 2023",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      tags: ["Jumat", "Khutbah", "Berjamaah"],
    },
    {
      id: 10,
      title: "Santunan Anak Yatim",
      description: "Program santunan bulanan untuk anak yatim binaan masjid",
      category: "kegiatan",
      date: "5 Agustus 2023",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800",
      tags: ["Santunan", "Anak Yatim", "Sosial"],
    },
    {
      id: 11,
      title: "Kubah Masjid",
      description: "Pemandangan indah kubah masjid di sore hari",
      category: "bangunan",
      date: "22 September 2023",
      image: "https://images.unsplash.com/photo-1544896479-5c4058cc2d5d?w=800",
      tags: ["Kubah", "Arsitektur", "Islami"],
    },
    {
      id: 12,
      title: "Tadarus Al-Quran",
      description: "Kegiatan tadarus Al-Quran selama bulan Ramadhan",
      category: "acara",
      date: "3 April 2023",
      image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?w=800",
      tags: ["Tadarus", "Al-Quran", "Ramadhan"],
    },
  ];

  const filteredImages =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const scrollToSection = (section) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  const downloadImage = (imageUrl, imageTitle) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `masjid-nurul-huda-${imageTitle
      .toLowerCase()
      .replace(/\s+/g, "-")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Galeri Masjid
              </h1>
              <p className="text-lg md:text-xl text-emerald-100">
                Dokumentasi kegiatan, acara, dan perkembangan Masjid Nurul Huda
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filter === category.id
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {galleryCategories.find((c) => c.id === filter)?.name}
                <span className="text-emerald-600 ml-2">
                  ({filteredImages.length} foto)
                </span>
              </h3>
              <p className="text-gray-600">
                Dokumentasi visual kegiatan Masjid Nurul Huda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm hover:bg-white/30 transition">
                          Lihat Detail
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
                        {image.category === "acara" && "Acara"}
                        {image.category === "sholat" && "Sholat"}
                        {image.category === "kegiatan" && "Sosial"}
                        {image.category === "bangunan" && "Bangunan"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
                      {image.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {image.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {image.date}
                      </span>
                      <div className="flex gap-2">
                        {image.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📷</div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  Tidak ada foto dalam kategori ini
                </h4>
                <p className="text-gray-500">
                  Pilih kategori lain untuk melihat foto
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  📸 Dokumentasi Visual Masjid
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Galeri ini menampilkan berbagai momen penting dan kegiatan di
                  Masjid Nurul Huda. Setiap foto merefleksikan kekhidmatan
                  ibadah, kebersamaan jamaah, dan perkembangan fisik masjid
                  sebagai pusat kegiatan umat Islam.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {galleryImages.length}
                    </div>
                    <div className="text-gray-700">Total Foto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      4
                    </div>
                    <div className="text-gray-700">Kategori</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      2023
                    </div>
                    <div className="text-gray-700">Tahun Aktif</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h5 className="text-xl font-bold mb-4">Masjid Nurul Huda</h5>
                <p className="text-gray-400 text-sm">
                  ABADIJAYA, SUKMAJAYA, KOTA DEPOK, JAWA BARAT
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Link Cepat</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Galeri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Kategori Galeri</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button
                      onClick={() => setFilter("acara")}
                      className="text-gray-400 hover:text-white transition"
                    >
                      Acara Masjid
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setFilter("sholat")}
                      className="text-gray-400 hover:text-white transition"
                    >
                      Sholat Berjamaah
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setFilter("kegiatan")}
                      className="text-gray-400 hover:text-white transition"
                    >
                      Kegiatan Sosial
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Ikuti Kami</h5>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>
                Copyright © 2023 by{" "}
                <a href="/" className="font-bold hover:text-white transition">
                  Masjid Nurul Huda Depok
                </a>
              </p>
            </div>
          </div>
        </footer>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition"
            >
              <CloseIcon size={28} />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition"
            >
              <ChevronRight size={32} />
            </button>

            <div className="max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="md:w-96 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedImage.title}
                  </h3>
                  <button
                    onClick={() =>
                      downloadImage(selectedImage.image, selectedImage.title)
                    }
                    className="text-white hover:text-emerald-300 transition flex items-center gap-2"
                  >
                    <Download size={20} />
                    <span className="text-sm">Download</span>
                  </button>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-emerald-600 text-white text-sm px-3 py-1 rounded-full mb-3">
                    {selectedImage.category === "acara" && "Acara Masjid"}
                    {selectedImage.category === "sholat" && "Sholat Berjamaah"}
                    {selectedImage.category === "kegiatan" && "Kegiatan Sosial"}
                    {selectedImage.category === "bangunan" && "Bangunan Masjid"}
                  </span>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-gray-400 text-sm mb-2">Tanggal:</div>
                  <div className="text-white">{selectedImage.date}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <div className="text-gray-400 text-sm mb-2">
                    {filteredImages.findIndex(
                      (img) => img.id === selectedImage.id
                    ) + 1}{" "}
                    dari {filteredImages.length} foto
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => navigateImage("prev")}
                      className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      Sebelumnya
                    </button>
                    <button
                      onClick={() => navigateImage("next")}
                      className="flex-1 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
                    >
                      Selanjutnya
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GalleryPage;