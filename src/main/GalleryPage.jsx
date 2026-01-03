import React, { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import { ChevronLeft, ChevronRight, X as CloseIcon } from "lucide-react";
import tampakDepan from "../assets/tampak-depan.jpg";
import tampakDepanMalam from "../assets/foto-malam.jpeg";
import tampakKiri from "../assets/tampak-kiri.jpg";
import tampakSudutKiri from "../assets/tampak-sudut-kiri.jpg";
import tampakSudutKanan from "../assets/tampak-sudut-kanan.jpg";
import gedungGs from "../assets/gedung-gs.jpg";
import gedungTpa from "../assets/gedung-tpa.jpg";
import tempatWudhu from "../assets/tempat-wudhu.jpg";
import interior1 from "../assets/interior1.jpg";
import interior2 from "../assets/interior2.jpg";
import interior3 from "../assets/interior3.jpg";
import tempatWudhuDepan1 from "../assets/tempat-wudhu-depan1.jpg";
import tempatWudhuDepan2 from "../assets/tempat-wudhu-depan2.jpg";
import teras1 from "../assets/teras1.jpg";
import teras2 from "../assets/teras2.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("semua");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const galleryCategories = [
    { id: "semua", name: "Semua Foto" },
    { id: "eksterior", name: "Eksterior" },
    { id: "interior", name: "Interior" },
    { id: "gedung", name: "Gedung" },
    { id: "fasilitas", name: "Fasilitas" },
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Tampak Depan Masjid",
      category: "eksterior",
      image: tampakDepan,
    },
    {
      id: 2,
      title: "Tampak Depan Masjid (Malam)",
      category: "eksterior",
      image: tampakDepanMalam,
    },
    {
      id: 3,
      title: "Tampak Samping Kiri",
      category: "eksterior",
      image: tampakKiri,
    },
    {
      id: 4,
      title: "Tampak Sudut Kiri",
      category: "eksterior",
      image: tampakSudutKiri,
    },
    {
      id: 5,
      title: "Tampak Sudut Kanan",
      category: "eksterior",
      image: tampakSudutKanan,
    },
    {
      id: 6,
      title: "Gedung Serbaguna",
      category: "gedung",
      image: gedungGs,
    },
    {
      id: 7,
      title: "Gedung TPA",
      category: "gedung",
      image: gedungTpa,
    },
    {
      id: 8,
      title: "Tempat Wudhu",
      category: "fasilitas",
      image: tempatWudhu,
    },
    {
      id: 9,
      title: "Tempat Wudhu Depan",
      category: "fasilitas",
      image: tempatWudhuDepan1,
    },
    {
      id: 10,
      title: "Tempat Wudhu Depan",
      category: "fasilitas",
      image: tempatWudhuDepan2,
    },
    {
      id: 11,
      title: "Interior Utama",
      category: "interior",
      image: interior1,
    },
    {
      id: 12,
      title: "Interior Utama",
      category: "interior",
      image: interior2,
    },
    {
      id: 13,
      title: "Interior Utama",
      category: "interior",
      image: interior3,
    },
    {
      id: 14,
      title: "Teras Masjid",
      category: "eksterior",
      image: teras1,
    },
    {
      id: 15,
      title: "Teras Masjid",
      category: "eksterior",
      image: teras2,
    },
  ];

  const filteredImages =
    activeCategory === "semua"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 relative">
            <div className="max-w-4xl mx-auto text-center text-white pt-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                Galeri Foto
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-100">
                Koleksi foto Masjid Nurul Huda Depok
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="flex overflow-x-auto py-3 sm:py-4 gap-2 sm:gap-3 no-scrollbar">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap text-xs sm:text-sm transition-all flex-shrink-0 ${
                    activeCategory === category.id
                      ? "bg-emerald-600 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-1 sm:ml-2 text-xs opacity-80">
                    (
                    {category.id === "semua"
                      ? galleryImages.length
                      : galleryImages.filter(
                          (img) => img.category === category.id
                        ).length}
                    )
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-50">
          <div className="container mx-auto px-3 sm:px-4">
            {filteredImages.length === 0 ? (
              <div className="text-center py-10 sm:py-12">
                <div className="text-4xl sm:text-5xl mb-4">📷</div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Tidak ada foto dalam kategori ini
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-white shadow-sm hover:shadow-lg md:hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                      <p className="text-white text-xs sm:text-sm font-medium truncate">
                        {image.title}
                      </p>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {image.category === "eksterior" && "Eksterior"}
                        {image.category === "interior" && "Interior"}
                        {image.category === "gedung" && "Gedung"}
                        {image.category === "fasilitas" && "Fasilitas"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Info */}
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                {filteredImages.length} foto • Klik foto untuk melihat detail
                {!isMobile && " • Gunakan tombol panah untuk navigasi"}
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={closeLightbox}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* Close button - Mobile: bottom center, Desktop: top right */}
            <button
              onClick={closeLightbox}
              className="absolute sm:top-6 sm:right-6 bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-0 sm:bg-transparent sm:hover:text-emerald-300 transition z-10"
            >
              {isMobile ? (
                <span className="flex items-center gap-1 text-sm">
                  <CloseIcon size={16} />
                  Tutup
                </span>
              ) : (
                <CloseIcon size={32} />
              )}
            </button>

            {/* Navigation buttons - Hidden on mobile */}
            {!isMobile && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 hover:text-emerald-300 transition z-10"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 hover:text-emerald-300 transition z-10"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              className="relative max-w-4xl lg:max-w-5xl w-full h-full flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center p-2">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Image info */}
              <div className="mt-4 sm:mt-6 w-full px-2 sm:px-0">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold mb-1 truncate">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-emerald-300 text-xs sm:text-sm">
                          {selectedImage.category === "eksterior" &&
                            "Eksterior Masjid"}
                          {selectedImage.category === "interior" && "Interior"}
                          {selectedImage.category === "gedung" &&
                            "Gedung Pendukung"}
                          {selectedImage.category === "fasilitas" &&
                            "Fasilitas"}
                        </span>
                        <span className="text-gray-300 text-xs sm:text-sm">
                          {filteredImages.findIndex(
                            (img) => img.id === selectedImage.id
                          ) + 1}
                          /{filteredImages.length}
                        </span>
                      </div>
                    </div>

                    {/* Mobile navigation */}
                    {isMobile && (
                      <div className="flex justify-center gap-4 pt-2 border-t border-gray-600/50 sm:hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateImage("prev");
                          }}
                          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateImage("next");
                          }}
                          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (min-width: 375px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </Layout>
  );
};

export default GalleryPage;