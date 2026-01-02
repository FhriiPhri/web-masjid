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
} from "lucide-react";
import masjidImg from "../assets/foto-malam.jpeg";

const MasjidNurulHuda = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const jadwalSholat = [
    { nama: "Subuh", waktu: "04:18" },
    { nama: "Dzuhur", waktu: "11:59" },
    { nama: "Ashar", waktu: "15:26" },
    { nama: "Maghrib", waktu: "17:59" },
    { nama: "Isya", waktu: "19:25" },
  ];

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
    { nama: "Haji Zakariya", jabatan: "Ketua DKM" },
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
              <a href="#" className="hover:text-emerald-200">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-emerald-200">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-emerald-200">
                <Youtube size={16} />
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-emerald-200 flex items-center gap-1"
              >
                <Send size={16} />
                <span className="hidden md:inline">WhatsApp</span>
              </a>
              <a
                href="#"
                className="hover:text-emerald-200 flex items-center gap-1"
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
            <a href="#" className="text-xl font-bold text-gray-800">
              Masjid Nurul Huda
            </a>

            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("beranda")}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("berita")}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Berita
              </button>
              <button
                onClick={() => scrollToSection("galeri")}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Galeri
              </button>
              <button
                onClick={() => scrollToSection("pengurus")}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Pengurus
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Kontak
              </button>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700">
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
              className="block w-full text-left px-6 py-3 hover:bg-gray-50"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("berita")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50"
            >
              Berita
            </button>
            <button
              onClick={() => scrollToSection("galeri")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50"
            >
              Galeri
            </button>
            <button
              onClick={() => scrollToSection("pengurus")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50"
            >
              Pengurus
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="block w-full text-left px-6 py-3 hover:bg-gray-50"
            >
              Kontak
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative h-96 md:h-[500px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${masjidImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">
              Selamat Datang Di Masjid Nurul Huda Depok
            </h1>
            <p className="text-lg md:text-xl">
              Pusat Ibadah dan Kebersamaan Umat. Menebar Cahaya Ilmu, Membangun
              Masyarakat Sejahtera.
            </p>
          </div>
        </div>
      </section>

      {/* Jadwal Sholat */}
      <section className="bg-emerald-600 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-5 gap-4 text-center">
              {jadwalSholat.map((sholat, idx) => (
                <div key={idx}>
                  <div className="text-sm text-gray-600 mb-1">
                    {sholat.nama}
                  </div>
                  <div className="text-emerald-600 font-bold text-lg">
                    {sholat.waktu}
                  </div>
                </div>
              ))}
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={berita.image}
                  alt={berita.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-lg font-bold text-gray-900 mb-3">
                    {berita.judul}
                  </h5>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    {berita.tanggal}
                  </div>
                  <p className="text-gray-600 text-sm">{berita.excerpt}</p>
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
              <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
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
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={galeri.image}
                      alt={galeri.judul}
                      className="w-full h-32 object-cover"
                    />
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
                  className="bg-white rounded-lg p-6 text-center shadow-lg"
                >
                  <div className="w-full aspect-square bg-emerald-100 rounded-lg mb-4 flex items-center justify-center text-emerald-600 text-4xl font-bold">
                    {person.nama.charAt(0)}
                  </div>
                  <h6 className="text-gray-900 font-bold">{person.nama}</h6>
                  <p className="text-gray-600 text-sm">{person.jabatan}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
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
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <MapPin size={48} className="text-gray-400" />
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
                  <a href="#" className="text-gray-400 hover:text-white">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dewan Pengurus
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Jadwal Jumat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4 opacity-0">.</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tausiyah
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Galeri
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Ikuti Kami</h5>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
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
                className="font-bold hover:text-white"
              >
                Demasjid.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasjidNurulHuda;