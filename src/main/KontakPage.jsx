import React from "react";
import Layout from "../layouts/Layout";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  User,
  MessageSquare,
  Send,
  Globe,
  Code,
  Heart,
  Shield,
  Info,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

const KontakPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera."
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-12 md:py-16">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Hubungi Kami
              </h1>
              <p className="text-lg md:text-xl text-emerald-100">
                Kami siap melayani dan mendengar masukan dari jamaah
              </p>
            </div>
          </div>
        </section>

        {/* Kontak & Form Section */}
        <section className="py-10 md:py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
                {/* Informasi Kontak */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Informasi Kontak
                  </h2>

                  <div className="space-y-6">
                    {/* Alamat */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          Alamat Masjid
                        </h4>
                        <p className="text-gray-600">
                          Jalan Cisokan Raya, RW 014
                          <br />
                          Kelurahan Abadijaya, Kecamatan Sukmajaya
                          <br />
                          Kota Depok, Jawa Barat 16417
                        </p>
                        <a
                          href="https://maps.app.goo.gl/LVAvN6sXprFCSoLY6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 mt-2 text-sm font-medium"
                        >
                          Lihat di Google Maps <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Telepon */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          Telepon
                        </h4>
                        <p className="text-gray-600">+62 818-0886-1551</p>
                        <p className="text-gray-500 text-sm mt-1">
                          Jam operasional: 08:00 - 17:00 WIB
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          Email
                        </h4>
                        <p className="text-gray-600 break-all">
                          masjidnurulhudadepok14@gmail.com
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          Untuk urusan administrasi dan informasi
                        </p>
                      </div>
                    </div>

                    {/* Jam Operasional */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">
                          Jam Operasional
                        </h4>
                        <p className="text-gray-600">
                          Senin - Minggu: 24 Jam
                          <br />
                          Sekretariat: 08:00 - 17:00 WIB
                          <br />
                          Shalat Jumat: 11:30 - 13:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">
                      Ikuti Kami
                    </h4>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61581768106162"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 transition"
                        aria-label="Facebook"
                      >
                        <Facebook size={20} />
                      </a>
                      <a
                        href="https://www.instagram.com/risma_nurulhuda14/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 transition"
                        aria-label="Instagram"
                      >
                        <Instagram size={20} />
                      </a>
                      <a
                        href="https://www.youtube.com/@MasjidNurulHudaDepok"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-emerald-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 transition"
                        aria-label="YouTube"
                      >
                        <Youtube size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Form Kontak */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Kirim Pesan
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Nama Lengkap *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            required
                            className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            required
                            className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                            placeholder="Masukkan email"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nomor Telepon
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                          placeholder="Masukkan nomor telepon"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subjek *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MessageSquare size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          required
                          className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                          placeholder="Subjek pesan"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Kirim Pesan
                    </button>

                    <p className="text-gray-500 text-xs text-center">
                      * Data Anda akan dijaga kerahasiaannya
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Website */}
        <section className="py-10 md:py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Tentang Website Ini
                </h2>
                <p className="text-gray-600">
                  Informasi mengenai pengembangan dan tujuan website Masjid
                  Nurul Huda
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="text-emerald-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    Tujuan Website
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Sebagai media informasi digital untuk meningkatkan pelayanan
                    kepada jamaah dan menyebarkan dakwah Islam secara modern.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Code className="text-emerald-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    Teknologi
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Dibangun dengan React.js, Tailwind CSS, dan teknologi web
                    modern untuk performa optimal dan pengalaman pengguna
                    terbaik.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="text-emerald-600" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">
                    Open Source
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Website ini dikembangkan dengan semangat berbagi untuk
                    kepentingan dakwah dan dapat digunakan oleh masjid-masjid
                    lain.
                  </p>
                </div>
              </div>

              {/* Fitur Website */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fitur Utama Website
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-emerald-600" size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        Jadwal Sholat Real-time
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Update otomatis dengan API myQuran
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="text-emerald-600" size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        Profil Pengurus
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Struktur organisasi lengkap DKM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-emerald-600" size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        Kontak Interaktif
                      </h5>
                      <p className="text-gray-600 text-sm">
                        Form kontak dan peta lokasi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="text-emerald-600" size={16} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Responsif</h5>
                      <p className="text-gray-600 text-sm">
                        Akses optimal di semua perangkat
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontak Pengembang */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">
                      Kontak Pengembang
                    </h3>
                    <p className="text-emerald-100">
                      Untuk pertanyaan teknis, saran pengembangan, atau
                      kerjasama pengembangan website masjid.
                    </p>
                  </div>
                  <a
                    href="mailto:riwayatdev@gmail.com"
                    className="bg-white text-emerald-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Mail size={18} />
                    Hubungi Pengembang
                  </a>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                  <Info size={14} />
                  <span>
                    Website ini dikelola oleh DKM Masjid Nurul Huda Depok
                  </span>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  © {new Date().getFullYear()} Masjid Nurul Huda Depok. Semua
                  hak dilindungi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Lokasi Masjid
              </h2>
              <div className="rounded-xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4734.289410183863!2d106.853067!3d-6.389931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb8ff890ae59%3A0xb1f728b148a565b0!2sMasjid%20Jami&#39;%20Nurul%20Huda!5e1!3m2!1sid!2sid!4v1767355239422!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Masjid Nurul Huda Depok"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Jalan Cisokan Raya, RW 014, Abadijaya, Sukmajaya, Kota Depok,
                  Jawa Barat
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default KontakPage;