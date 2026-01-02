import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Facebook,
  Instagram,
  Youtube,
  Send,
  ChevronDown,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import masjidImage from "../assets/foto-malam.jpeg";

const cities = [
  { id: "1301", name: "Jakarta" },
  { id: "1226", name: "Bekasi" },
  { id: "1225", name: "Depok" },
  { id: "1227", name: "Tangerang" },
  { id: "1221", name: "Bogor" },
  { id: "1224", name: "Bandung" },
  { id: "1434", name: "Surabaya" },
  { id: "1638", name: "Yogyakarta" },
];

const MasjidNurulHuda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [jadwalSholat, setJadwalSholat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState(cities[1]);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: masjidImage,
      title: "Selamat Datang Di Website Resmi Masjid Nurul Huda Depok",
      subtitle: "Pusat Ibadah dan Kebersamaan Umat",
      position: "center top",
    },
  ];

  useEffect(() => {
    fetchPrayerTimes();
  }, [selectedCity]);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const fetchPrayerTimes = async () => {
    setLoading(true);
    setError(null);

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    try {
      const response = await fetch(
        `https://api.myquran.com/v2/sholat/jadwal/${selectedCity.id}/${year}/${month}/${day}`
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil data jadwal sholat");
      }

      const data = await response.json();

      if (data.status && data.data && data.data.jadwal) {
        const jadwal = data.data.jadwal;

        setJadwalSholat([
          { nama: "Subuh", waktu: jadwal.subuh, icon: "🌅" },
          { nama: "Dzuhur", waktu: jadwal.dzuhur, icon: "☀️" },
          { nama: "Ashar", waktu: jadwal.ashar, icon: "🌤️" },
          { nama: "Maghrib", waktu: jadwal.maghrib, icon: "🌆" },
          { nama: "Isya", waktu: jadwal.isya, icon: "🌙" },
        ]);
      } else {
        throw new Error("Format data tidak sesuai");
      }
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      setError("Gagal memuat jadwal sholat. Silakan coba lagi.");

      setJadwalSholat([
        { nama: "Subuh", waktu: "04:30", icon: "🌅" },
        { nama: "Dzuhur", waktu: "12:00", icon: "☀️" },
        { nama: "Ashar", waktu: "15:15", icon: "🌤️" },
        { nama: "Maghrib", waktu: "18:00", icon: "🌆" },
        { nama: "Isya", waktu: "19:15", icon: "🌙" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const beritaTerbaru = [
    {
      judul: "Memahami Makna Kesabaran dalam Islam",
      tanggal: "Jum'at, 02 Januari 2026 03:50 WIB",
      excerpt:
        "Dalam kehidupan ini, cobaan dan ujian tidak dapat dihindari. Namun, sebagai umat Islam, kita diajarkan untuk menghadapi cobaan ini dengan sikap sabar.",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400",
    },
    {
      judul: "Menggapai Kedekatan dengan Allah",
      tanggal: "Jum'at, 02 Januari 2026 03:50 WIB",
      excerpt:
        "Ibadah tidak hanya terbatas pada shalat lima waktu, puasa, dan ibadah ritual lainnya.",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400",
    },
    {
      judul: "Mengasah Kebajikan dalam Kehidupan",
      tanggal: "Jum'at, 02 Januari 2026 03:50 WIB",
      excerpt:
        "Ketika kita berbicara tentang keagamaan, seringkali kita terfokus pada ritual-ritual ibadah.",
      image:
        "https://images.unsplash.com/photo-1584552023990-f6723f5e6925?w=400",
    },
  ];

  const galeriTerbaru = [
    {
      judul: "Suasana Masjid",
      tanggal: "Jum'at, 02 Januari 2026",
      image:
        "https://images.unsplash.com/photo-1564769610726-4bbdd02b3afe?w=400",
    },
    {
      judul: "Shalat Idul Fitri 2023",
      tanggal: "Jum'at, 02 Januari 2026",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400",
    },
  ];

  const pengurus = [
    { nama: "Basuki Achmad", jabatan: "Ketua DKM" },
    { nama: "Sulaiman Rasyid", jabatan: "Wakil Ketua DKM" },
    { nama: "Salahuddin", jabatan: "Bendahara" },
    { nama: "Maryam", jabatan: "Sekretaris" },
  ];

  const scrollToSection = (section) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-3">
              <a href="#" className="hover:text-emerald-200 transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-emerald-200 transition">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-emerald-200 transition">
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-emerald-200 flex items-center gap-1 transition"
              >
                <Send size={16} />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <a
                href="#"
                className="hover:text-emerald-200 flex items-center gap-1 transition"
              >
                <Mail size={16} />
                <span className="hidden md:inline">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#"
              className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition"
            >
              Masjid Nurul Huda
            </a>

            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("beranda")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("berita")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Berita
              </button>
              <button
                onClick={() => scrollToSection("galeri")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection("pengurus")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Pengurus
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition"
              >
                Kontak
              </button>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition shadow-md hover:shadow-lg">
                Masuk
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <button
              onClick={() => scrollToSection("beranda")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("berita")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
            >
              Berita
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("pengurus")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
            >
              Pengurus
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50 transition"
            >
              Kontak
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section with Image Slider */}
      <section
        id="beranda"
        className="relative h-[500px] md:h-[600px] overflow-hidden"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`,
                backgroundPosition: slide.position || "center",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Jadwal Sholat */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">Jadwal Shalat</h3>
                    <p className="text-emerald-100 text-sm">
                      {currentTime.toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="relative">
                      <button
                        onClick={() => setShowCityDropdown(!showCityDropdown)}
                        className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 min-w-[180px] justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-emerald-600" />
                          <span>{selectedCity.name}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            showCityDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showCityDropdown && (
                        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl overflow-hidden z-10 max-h-64 overflow-y-auto">
                          {cities.map((city) => (
                            <button
                              key={city.id}
                              onClick={() => {
                                setSelectedCity(city);
                                setShowCityDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors ${
                                selectedCity.id === city.id
                                  ? "bg-emerald-100 text-emerald-700 font-semibold"
                                  : "text-gray-700"
                              }`}
                            >
                              {city.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={fetchPrayerTimes}
                      disabled={loading}
                      className="bg-white text-emerald-600 p-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:rotate-180 duration-500 disabled:opacity-50"
                      title="Refresh"
                    >
                      <RefreshCw
                        size={20}
                        className={loading ? "animate-spin" : ""}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
                  </div>
                ) : (
                  <>
                    {error && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {jadwalSholat.map((sholat, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105 border border-emerald-100"
                        >
                          <div className="text-3xl mb-2">{sholat.icon}</div>
                          <div className="text-sm font-semibold text-gray-600 mb-2">
                            {sholat.nama}
                          </div>
                          <div className="text-2xl font-bold text-emerald-600">
                            {sholat.waktu}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="text-center mt-4 text-white/90 text-sm">
              <p>
                Waktu shalat untuk wilayah {selectedCity.name} dan sekitarnya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Berita Terbaru */}
      <section id="berita" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Berita Terbaru
            </h3>
            <p className="text-gray-600">Berita terkini hanya untuk Anda</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaTerbaru.map((berita, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={berita.image}
                    alt={berita.judul}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-3 hover:text-emerald-600 transition">
                    {berita.judul}
                  </h5>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {berita.tanggal}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{berita.excerpt}</p>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tausiyah & Galeri */}
      <section id="galeri" className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-6">
                Tausiyah Terbaru
              </h3>
              <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center hover:bg-gray-800 transition cursor-pointer">
                <Youtube size={64} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Galeri Terbaru
              </h3>
              <div className="space-y-4">
                {galeriTerbaru.map((galeri, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={galeri.image}
                        alt={galeri.judul}
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-gray-500">
                        {galeri.tanggal}
                      </div>
                      <h5 className="text-gray-900 font-bold mt-1">
                        {galeri.judul}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dewan Pengurus */}
      <section id="pengurus" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              Dewan Pengurus Masjid
            </h3>
          </div>
          <div className="bg-emerald-600 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pengurus.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-full aspect-square bg-emerald-100 rounded-lg mb-4 flex items-center justify-center text-emerald-600 text-4xl font-bold hover:bg-emerald-200 transition">
                    {person.nama.charAt(0)}
                  </div>
                  <h6 className="text-gray-900 font-bold">{person.nama}</h6>
                  <p className="text-gray-600 text-sm">{person.jabatan}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg">
                Pengurus Lainnya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Hubungi Kami</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Alamat</h4>
                    <p className="text-gray-600">
                      ABADIJAYA, SUKMAJAYA
                      <br />
                      KOTA DEPOK, JAWA BARAT
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Telepon</h4>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">info@masjidnurulhuda.or.id</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4734.289410183863!2d106.853067!3d-6.389931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb8ff890ae59%3A0xb1f728b148a565b0!2sMasjid%20Jami&#39;%20Nurul%20Huda!5e1!3m2!1sid!2sid!4v1767355239422!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Dewan Pengurus
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Jadwal Jumat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Informasi</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Tausiyah
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Berita
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
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Ikuti Kami</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              Copyright © {currentTime.getFullYear()} by{" "}
              <a
                href="https://demasjid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-white transition"
              >
                Masjid Nurul Huda Depok
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasjidNurulHuda;