import React, { useState } from "react";
import Layout from "../layouts/Layout";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Moon,
  Sun,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const KajianRutin = () => {
  // Data kajian rutin (hanya 3 kajian)
  const [kajianData] = useState([
    {
      id: 1,
      judul: "Kajian Rutin Rabu Malam",
      pemateri: "Ustadz Aswar Abu Sofwan",
      hari: "Rabu",
      waktu: "Ba'da Maghrib - Waktu Isya'",
      tempat: "Aula Utama Masjid",
      kategori: "Tahsin Al-Quran",
      deskripsi:
        "Tahsin Al-Quran agar bacaan lebih baik dan memahami maknanya secara mendalam",
      status: "Aktif",
      peserta: "Khusus Ikhwan",
      periode: "Mingguan",
      highlight: true,
    },
    {
      id: 2,
      judul: "Kajian Rutin Jumat Malam",
      pemateri: "Ustadz Hizbullah Al Mubarrak, Lc.",
      hari: "Jumat",
      waktu: "Ba'da Maghrib - Waktu Isya'",
      tempat: "Aula Utama Masjid",
      kategori: "Kitab Riyadhus Shalihin",
      deskripsi:
        "Pengajian Kitab Riyadhus Shalihin dan Fiqih Praktis untuk kehidupan sehari-hari",
      status: "Aktif",
      peserta: "Semua Jamaah",
      periode: "Mingguan",
      highlight: true,
    },
    {
      id: 3,
      judul: "Kajian Subuh Bulanan",
      pemateri: "Ust. Dr. Ahmad Syafii, M.A.",
      hari: "Minggu Ketiga Setiap Bulan",
      waktu: "Ba'da Subuh - 05:30 WIB",
      tempat: "Aula Utama Masjid",
      kategori: "Spiritualitas Islam",
      deskripsi:
        "Kajian Bulanan setelah Shalat Subuh untuk meningkatkan spiritualitas dan pemahaman agama",
      status: "Aktif",
      peserta: "Jamaah Shalat Subuh",
      periode: "Bulanan",
      highlight: true,
    },
  ]);

  // Informasi tambahan
  const [informasiTambahan] = useState([
    {
      icon: <Clock className="text-emerald-600" size={24} />,
      title: "Ketepatan Waktu",
      desc: "Hadir 15 menit sebelum kajian dimulai. Kajian mulai tepat waktu.",
    },
    {
      icon: <Users className="text-emerald-600" size={24} />,
      title: "Tata Tertib",
      desc: "Matikan ponsel, jaga kebersihan, wanita wajib hijab syar'i.",
    },
    {
      icon: <BookOpen className="text-emerald-600" size={24} />,
      title: "Gratis & Terbuka",
      desc: "Kajian terbuka untuk umum tanpa biaya. Free booklet materi.",
    },
  ]);

  // Jadwal mingguan untuk tabel
  const jadwalMingguan = [
    { hari: "Senin", kegiatan: "-", keterangan: "Tidak ada kajian" },
    { hari: "Selasa", kegiatan: "-", keterangan: "Tidak ada kajian" },
    {
      hari: "Rabu",
      kegiatan: "Tahsin Al-Quran",
      waktu: "Ba'da Maghrib - Waktu Isya'",
      pemateri: "Ustadz Aswar Abu Sofwan",
      adaKajian: true,
    },
    { hari: "Kamis", kegiatan: "-", keterangan: "Tidak ada kajian" },
    {
      hari: "Jumat",
      kegiatan: "Pengajian Kitab Riyadhus Shalihin",
      waktu: "Ba'da Maghrib - Waktu Isya'",
      pemateri: "Ustadz Hizbullah Al Mubarrak, Lc.",
      adaKajian: true,
    },
    { hari: "Sabtu", kegiatan: "-", keterangan: "Tidak ada kajian" },
    {
      hari: "Minggu",
      kegiatan: "Tadarus Al-Quran",
      waktu: "Ba'da Subuh - selesai",
      keterangan: "Setiap Minggu pagi",
      adaKajian: true,
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white pt-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Jadwal Kajian Rutin Masjid
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-emerald-100 mb-6">
                "Menuntut ilmu adalah kewajiban bagi setiap muslim" (HR. Ibnu
                Majah)
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full">
                <Calendar size={18} />
                <span className="font-semibold text-sm sm:text-base">
                  Total 3 Kajian Rutin
                </span>
              </div>
            </div>
          </div>

          {/* Ornament */}
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-10 bg-white translate-y-px"></div>
        </section>

        {/* Highlight Kajian - FIXED SECTION */}
        <section className="pt-0 pb-12 md:pb-16 -mt-8 md:-mt-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Kajian Rutin Masjid
                </h2>
                <p className="text-gray-600">
                  Jadwal tetap kegiatan keilmuan di Masjid Nurul Huda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {kajianData.map((kajian) => (
                  <div
                    key={kajian.id}
                    className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    {/* Header dengan Badge */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 md:p-8 relative">
                      {/* Badge Periode - FIXED POSITION */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            kajian.periode === "Mingguan"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {kajian.periode}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-4 right-4">
                        {kajian.hari.includes("Subuh") ? (
                          <Sun className="text-white/30" size={28} />
                        ) : (
                          <Moon className="text-white/30" size={28} />
                        )}
                      </div>

                      <div className="pt-6 text-white">
                        <div className="text-sm font-semibold text-emerald-100 mb-2">
                          {kajian.hari}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2">
                          {kajian.judul}
                        </h3>
                        <p className="text-emerald-100 text-sm">
                          {kajian.pemateri}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      {/* Info Grid */}
                      <div className="space-y-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="text-emerald-600" size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-500">Waktu</p>
                            <p className="font-bold text-gray-900 truncate">
                              {kajian.waktu}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="text-emerald-600" size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-500">Tempat</p>
                            <p className="font-bold text-gray-900 truncate">
                              {kajian.tempat}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="text-emerald-600" size={18} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-500">Peserta</p>
                            <p className="font-bold text-gray-900">
                              {kajian.peserta}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Deskripsi */}
                      <div className="mb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {kajian.deskripsi}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {kajian.kategori}
                        </span>
                        <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1">
                          <span>Detail</span>
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Jadwal Mingguan */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Jadwal Mingguan Masjid
                </h2>
                <p className="text-gray-600">
                  Ringkasan kegiatan kajian sepekan
                </p>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px]">
                    <thead>
                      <tr className="bg-gradient-to-r from-emerald-600 to-teal-600">
                        <th className="text-left p-4 font-bold text-white">
                          Hari
                        </th>
                        <th className="text-left p-4 font-bold text-white">
                          Kegiatan Kajian
                        </th>
                        <th className="text-left p-4 font-bold text-white">
                          Waktu
                        </th>
                        <th className="text-left p-4 font-bold text-white">
                          Keterangan
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {jadwalMingguan.map((jadwal, index) => (
                        <tr
                          key={index}
                          className={`hover:bg-gray-50 transition ${
                            jadwal.adaKajian ? "bg-emerald-50/50" : ""
                          }`}
                        >
                          <td className="p-4">
                            <div className="font-bold text-gray-900">
                              {jadwal.hari}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-semibold text-gray-900">
                              {jadwal.kegiatan}
                              {jadwal.pemateri && (
                                <div className="text-sm text-gray-500 mt-1">
                                  {jadwal.pemateri}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div
                              className={`font-medium ${
                                jadwal.adaKajian
                                  ? "text-emerald-700"
                                  : "text-gray-500"
                              }`}
                            >
                              {jadwal.waktu || "-"}
                            </div>
                          </td>
                          <td className="p-4">
                            <div
                              className={`text-sm ${
                                jadwal.adaKajian
                                  ? "text-emerald-600 font-semibold"
                                  : "text-gray-500"
                              }`}
                            >
                              {jadwal.keterangan}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Catatan */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  * Kajian Subuh Bulanan: Minggu ketiga setiap bulan setelah
                  shalat Subuh
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Penting */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Informasi Penting
                </h2>
                <p className="text-gray-600">
                  Perhatikan hal-hal berikut sebelum mengikuti kajian
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {informasiTambahan.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.desc}</p>
                  </div>
                ))}
              </div>

              {/* Pengumuman */}
              <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">
                      Informasi Perubahan Jadwal
                    </h4>
                    <p className="text-emerald-100">
                      Jadwal dapat berubah sesuai kondisi. Untuk informasi
                      terupdate, silakan cek pengumuman di papan informasi
                      masjid atau follow media sosial kami. Kajian tetap akan
                      dilaksanakan meskipun dengan jumlah peserta sedikit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Simple */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-6">
                <span className="text-emerald-700 font-semibold">
                  Mari Menuntut Ilmu
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Jadilah Bagian dari Keluarga Ilmu Masjid Nurul Huda
              </h3>

              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Meskipun hanya 3 kajian rutin, kami berkomitmen memberikan yang
                terbaik. Setiap kajian dirancang untuk memberikan manfaat
                maksimal bagi peserta.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.app.goo.gl/LVAvN6sXprFCSoLY6"
                  target="_blank"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <MapPin size={18} />
                  Datang Langsung ke Masjid
                </a>
                <a
                  href="/#beranda"
                  className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition inline-flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Lihat Jadwal Lainnya
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-600/10 via-teal-600/10 to-emerald-600/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-emerald-600/20 mb-4">"</div>
              <blockquote className="text-xl italic text-gray-700 mb-4">
                Ilmu yang sedikit tapi diamalkan lebih baik daripada ilmu yang
                banyak tapi tidak diamalkan. Mari kita mulai dari yang sedikit,
                tapi konsisten dan ikhlas.
              </blockquote>
              <p className="text-gray-600 font-semibold">
                — Pengurus DKM Masjid Nurul Huda
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default KajianRutin;