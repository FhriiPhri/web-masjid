import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { ChevronLeft, ChevronRight, X as CloseIcon } from "lucide-react";
import tampakDepan from "../assets/tampak-depan.jpg";
import tampakKiri from "../assets/tampak-kiri.jpg";
import tampakSudutKiri from "../assets/tampak-sudut-kiri.jpg";
import tampakSudutKanan from "../assets/tampak-sudut-kanan.jpg";
import gedungGs from "../assets/gedung-gs.jpg";
import gedungTpa from "../assets/gedung-tpa.jpg";
import tempatWudhu from "../assets/tempat-wudhu.jpg";
import interior1 from "../assets/interior1.jpg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("semua");

  const galleryCategories = [
    { id: "semua", name: "Semua Foto" },
    { id: "eksterior", name: "Eksterior Masjid" },
    { id: "interior", name: "Interior" },
    { id: "gedung", name: "Gedung Pendukung" },
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
      title: "Tampak Samping Kiri",
      category: "eksterior",
      image: tampakKiri,
    },
    {
      id: 3,
      title: "Tampak Sudut Kiri",
      category: "eksterior",
      image: tampakSudutKiri,
    },
    {
      id: 4,
      title: "Tampak Sudut Kanan",
      category: "eksterior",
      image: tampakSudutKanan,
    },
    {
      id: 5,
      title: "Gedung Serbaguna",
      category: "gedung",
      image: gedungGs,
    },
    {
      id: 6,
      title: "Gedung TPA",
      category: "gedung",
      image: gedungTpa,
    },
    {
      id: 7,
      title: "Tempat Wudhu",
      category: "fasilitas",
      image: tempatWudhu,
    },
    {
      id: 8,
      title: "Interior Utama",
      category: "interior",
      image: interior1,
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

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-12 md:py-16">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Galeri Foto
              </h1>
              <p className="text-lg md:text-xl text-emerald-100">
                Koleksi foto Masjid Nurul Huda Depok
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-80">
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
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📷</div>
                <p className="text-gray-600">
                  Tidak ada foto dalam kategori ini
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {image.title}
                      </p>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded">
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
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm">
                {filteredImages.length} foto • Klik foto untuk melihat detail
              </p>
            </div>
          </div>
        </section>

        {/* Simple Lightbox - FIXED */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-black/90"></div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-emerald-300 transition z-10"
            >
              <CloseIcon size={32} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 transition z-10"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 transition z-10"
            >
              <ChevronRight size={40} />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-5xl w-full h-full flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Image info - FIXED POSITION */}
              <div className="mt-6 w-full">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-white text-lg font-semibold mb-1">
                        {selectedImage.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-emerald-300 text-sm">
                          {selectedImage.category === "eksterior" &&
                            "Eksterior Masjid"}
                          {selectedImage.category === "interior" && "Interior"}
                          {selectedImage.category === "gedung" &&
                            "Gedung Pendukung"}
                          {selectedImage.category === "fasilitas" &&
                            "Fasilitas"}
                        </span>
                        <span className="text-gray-300 text-sm">
                          {filteredImages.findIndex(
                            (img) => img.id === selectedImage.id
                          ) + 1}
                          /{filteredImages.length}
                        </span>
                      </div>
                    </div>
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