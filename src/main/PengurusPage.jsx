import React, { useState } from "react";
import Layout from "../layouts/Layout";
import {
  Users,
  Shield,
  Award,
  BookOpen,
  Heart,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  ChevronRight,
  Home,
  School,
  Briefcase,
  Users2,
  Library,
  ShieldCheck,
  HeartHandshake,
  MessageSquare,
  Wrench,
  Lock,
} from "lucide-react";

const PengurusPage = () => {
  const [activeDepartment, setActiveDepartment] = useState("semua");

  const departments = [
    { id: "semua", name: "Semua Bidang", count: 0 },
    { id: "pelindung", name: "Dewan Pelindung", count: 2 },
    { id: "pembina", name: "Pembina", count: 5 },
    { id: "mustasyar", name: "Majelis Mustasyar", count: 3 },
    { id: "pengurus", name: "Pengurus Inti", count: 5 },
    { id: "pendidikan", name: "Pendidikan & Dakwah", count: 7 },
    { id: "ekonomi", name: "Pemberdayaan Ekonomi", count: 2 },
    { id: "pemuda", name: "Pemuda & Remaja", count: 2 },
    { id: "muslimah", name: "Pengembangan Muslimah", count: 2 },
    { id: "perpustakaan", name: "Perpustakaan", count: 2 },
    { id: "kesehatan", name: "Kesehatan & Kebersihan", count: 2 },
    { id: "humas", name: "Humas", count: 2 },
    { id: "pengembangan", name: "Perencanaan & Pengembangan", count: 3 },
    { id: "keamanan", name: "Keamanan & Ketertiban", count: 1 },
  ];

  // Data sesuai struktur yang diberikan
  const dewanPelindung = [
    {
      id: 1,
      nama: "CAMAT SUKMAJAYA",
      jabatan: "Dewan Pelindung",
      divisi: "Dewan Pelindung",
      periode: "2023-2028",
      tugas: "Memberikan perlindungan dan dukungan dalam pengelolaan masjid",
    },
    {
      id: 2,
      nama: "KUA KEC. SUKMAJAYA",
      jabatan: "Dewan Pelindung",
      divisi: "Dewan Pelindung",
      periode: "2023-2028",
      tugas: "Pembinaan keagamaan dan pengawasan kegiatan masjid",
    },
  ];

  const pembina = [
    {
      id: 3,
      nama: "DMI KOTA DEPOK",
      jabatan: "Pembina",
      divisi: "Pembina",
      periode: "2023-2028",
      tugas: "Pembinaan dan pengembangan masjid tingkat kota",
    },
    {
      id: 4,
      nama: "DMI KEC. SUKMAJAYA",
      jabatan: "Pembina",
      divisi: "Pembina",
      periode: "2023-2028",
      tugas: "Pembinaan dan pengembangan masjid tingkat kecamatan",
    },
    {
      id: 5,
      nama: "MUI KEC. SUKMAJAYA",
      jabatan: "Pembina",
      divisi: "Pembina",
      periode: "2023-2028",
      tugas: "Pembinaan syariah dan fatwa keagamaan",
    },
    {
      id: 6,
      nama: "LURAH ABADIJAYA",
      jabatan: "Pembina",
      divisi: "Pembina",
      periode: "2023-2028",
      tugas: "Koordinasi dengan pemerintah kelurahan",
    },
    {
      id: 7,
      nama: "KETUA RW 014",
      jabatan: "Pembina",
      divisi: "Pembina",
      periode: "2023-2028",
      tugas: "Koordinasi dengan masyarakat RW 014",
    },
  ];

  const majelisMustasyar = [
    {
      id: 8,
      nama: "UST. H. M. AYUB",
      jabatan: "Majelis Mustasyar",
      divisi: "Majelis Mustasyar",
      periode: "2023-2028",
      tugas: "Penasehat utama dalam pengambilan keputusan strategis",
    },
    {
      id: 9,
      nama: "UST. H. ABBAS AHMAD BASUNI",
      jabatan: "Majelis Mustasyar",
      divisi: "Majelis Mustasyar",
      periode: "2023-2028",
      tugas: "Penasehat bidang keagamaan dan pendidikan",
    },
    {
      id: 10,
      nama: "H. SUKMA PURWANTO",
      jabatan: "Majelis Mustasyar",
      divisi: "Majelis Mustasyar",
      periode: "2023-2028",
      tugas: "Penasehat bidang pengembangan dan kemasyarakatan",
    },
  ];

  const pengurusInti = [
    {
      id: 11,
      nama: "BASUKI ACHMAD",
      jabatan: "KETUA",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Memimpin dan mengkoordinasikan seluruh kegiatan DKM",
    },
    {
      id: 12,
      nama: "SYAHRIAL ARIFIN",
      jabatan: "WAKIL KETUA",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Mendampingi ketua dalam menjalankan tugas",
    },
    {
      id: 13,
      nama: "WIHARTO",
      jabatan: "SEKRETARIS 1",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Administrasi dan dokumentasi kegiatan DKM",
    },
    {
      id: 14,
      nama: "SAIRIN",
      jabatan: "SEKRETARIS 2",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Membantu sekretaris 1 dalam administrasi",
    },
    {
      id: 15,
      nama: "HADI SUTOMO",
      jabatan: "BENDAHARA 1",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Pengelolaan keuangan dan aset masjid",
    },
    {
      id: 16,
      nama: "H. SUWARTO",
      jabatan: "BENDAHARA 2",
      divisi: "Pengurus Inti",
      periode: "2023-2028",
      tugas: "Membantu bendahara 1 dalam pengelolaan keuangan",
    },
  ];

  const bidangPendidikanDakwah = [
    {
      id: 17,
      nama: "KOKOK DJOKO PURWANTO",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Mengkoordinir kegiatan pendidikan dan dakwah",
    },
    {
      id: 18,
      nama: "H. IMAN GUNARGI",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Pengembangan kurikulum pendidikan",
    },
    {
      id: 19,
      nama: "H. M. HUSIN",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Kegiatan dakwah dan ceramah",
    },
    {
      id: 20,
      nama: "H. ALI ACHMAD",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Pembinaan majelis taklim",
    },
    {
      id: 21,
      nama: "ANIK HIDAYATI",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Pendidikan untuk muslimah",
    },
    {
      id: 22,
      nama: "PIPIT FITRIYANI",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Pengajaran TPA dan madrasah",
    },
    {
      id: 23,
      nama: "ERRY MURNIASIH",
      jabatan: "Bidang Pendidikan & Dakwah",
      divisi: "Pendidikan & Dakwah",
      periode: "2023-2028",
      tugas: "Pengembangan materi pembelajaran",
    },
  ];

  const bidangPemberdayaanEkonomi = [
    {
      id: 24,
      nama: "RATNA",
      jabatan: "Bidang Pemberdayaan Ekonomi",
      divisi: "Pemberdayaan Ekonomi",
      periode: "2023-2028",
      tugas: "Pengembangan ekonomi jamaah masjid",
    },
    {
      id: 25,
      nama: "TATI",
      jabatan: "Bidang Pemberdayaan Ekonomi",
      divisi: "Pemberdayaan Ekonomi",
      periode: "2023-2028",
      tugas: "Program pemberdayaan umat",
    },
  ];

  const bidangPemudaRemaja = [
    {
      id: 26,
      nama: "ZULKIFLI",
      jabatan: "Bidang Pemuda & Remaja Masjid",
      divisi: "Pemuda & Remaja",
      periode: "2023-2028",
      tugas: "Mengkoordinir kegiatan pemuda dan remaja",
    },
    {
      id: 27,
      nama: "MUHAMAD FATHUR A.",
      jabatan: "Bidang Pemuda & Remaja Masjid",
      divisi: "Pemuda & Remaja",
      periode: "2023-2028",
      tugas: "Pengembangan kreativitas remaja masjid",
    },
  ];

  const bidangPengembanganMuslimah = [
    {
      id: 28,
      nama: "AMSIAH SUYOKO",
      jabatan: "Bidang Pengembangan Potensi Muslimah",
      divisi: "Pengembangan Muslimah",
      periode: "2023-2028",
      tugas: "Pengembangan program khusus muslimah",
    },
    {
      id: 29,
      nama: "Hj. YATI ATHIYAH",
      jabatan: "Bidang Pengembangan Potensi Muslimah",
      divisi: "Pengembangan Muslimah",
      periode: "2023-2028",
      tugas: "Pembinaan majelis taklim wanita",
    },
  ];

  const bidangPerpustakaan = [
    {
      id: 30,
      nama: "AZHARI SYAHIDAN",
      jabatan: "Bidang Perpustakaan Masjid",
      divisi: "Perpustakaan",
      periode: "2023-2028",
      tugas: "Pengelolaan perpustakaan masjid",
    },
    {
      id: 31,
      nama: "MUHAMAD ZIDAN",
      jabatan: "Bidang Perpustakaan Masjid",
      divisi: "Perpustakaan",
      periode: "2023-2028",
      tugas: "Pengembangan koleksi buku dan referensi",
    },
  ];

  const bidangKesehatanKebersihan = [
    {
      id: 32,
      nama: "SUWARDI",
      jabatan: "Bidang Kesehatan, Pemeliharaan & Kebersihan",
      divisi: "Kesehatan & Kebersihan",
      periode: "2023-2028",
      tugas: "Penjagaan kebersihan dan kesehatan lingkungan masjid",
    },
    {
      id: 33,
      nama: "EDY WINTORO",
      jabatan: "Bidang Kesehatan, Pemeliharaan & Kebersihan",
      divisi: "Kesehatan & Kebersihan",
      periode: "2023-2028",
      tugas: "Pemeliharaan sarana dan prasarana masjid",
    },
  ];

  const bidangHumas = [
    {
      id: 34,
      nama: "DANU BRATA",
      jabatan: "Bidang Hubungan Masyarakat",
      divisi: "Humas",
      periode: "2023-2028",
      tugas: "Hubungan dengan masyarakat dan instansi terkait",
    },
    {
      id: 35,
      nama: "HENRI NURMAN",
      jabatan: "Bidang Hubungan Masyarakat",
      divisi: "Humas",
      periode: "2023-2028",
      tugas: "Publikasi dan komunikasi eksternal",
    },
  ];

  const bidangPerencanaanPengembangan = [
    {
      id: 36,
      nama: "BAMBANG SUPONO",
      jabatan: "Bidang Perencanaan & Pengembangan Masjid",
      divisi: "Perencanaan & Pengembangan",
      periode: "2023-2028",
      tugas: "Perencanaan pengembangan fisik masjid",
    },
    {
      id: 37,
      nama: "FAHZAR MUCHTAR",
      jabatan: "Bidang Perencanaan & Pengembangan Masjid",
      divisi: "Perencanaan & Pengembangan",
      periode: "2023-2028",
      tugas: "Pengembangan program dan kegiatan masjid",
    },
    {
      id: 38,
      nama: "HARYADI",
      jabatan: "Bidang Perencanaan & Pengembangan Masjid",
      divisi: "Perencanaan & Pengembangan",
      periode: "2023-2028",
      tugas: "Evaluasi dan monitoring program",
    },
  ];

  const bidangKeamananKetertiban = [
    {
      id: 39,
      nama: "SUPRIYADI",
      jabatan: "Bidang Keamanan & Ketertiban",
      divisi: "Keamanan & Ketertiban",
      periode: "2023-2028",
      tugas: "Menjaga keamanan dan ketertiban di lingkungan masjid",
    },
  ];

  // Gabungkan semua data
  const allPengurus = [
    ...dewanPelindung,
    ...pembina,
    ...majelisMustasyar,
    ...pengurusInti,
    ...bidangPendidikanDakwah,
    ...bidangPemberdayaanEkonomi,
    ...bidangPemudaRemaja,
    ...bidangPengembanganMuslimah,
    ...bidangPerpustakaan,
    ...bidangKesehatanKebersihan,
    ...bidangHumas,
    ...bidangPerencanaanPengembangan,
    ...bidangKeamananKetertiban,
  ];

  // Filter pengurus berdasarkan departemen aktif
  const filteredPengurus =
    activeDepartment === "semua"
      ? allPengurus
      : activeDepartment === "pelindung"
      ? dewanPelindung
      : activeDepartment === "pembina"
      ? pembina
      : activeDepartment === "mustasyar"
      ? majelisMustasyar
      : activeDepartment === "pengurus"
      ? pengurusInti
      : activeDepartment === "pendidikan"
      ? bidangPendidikanDakwah
      : activeDepartment === "ekonomi"
      ? bidangPemberdayaanEkonomi
      : activeDepartment === "pemuda"
      ? bidangPemudaRemaja
      : activeDepartment === "muslimah"
      ? bidangPengembanganMuslimah
      : activeDepartment === "perpustakaan"
      ? bidangPerpustakaan
      : activeDepartment === "kesehatan"
      ? bidangKesehatanKebersihan
      : activeDepartment === "humas"
      ? bidangHumas
      : activeDepartment === "pengembangan"
      ? bidangPerencanaanPengembangan
      : bidangKeamananKetertiban;

  // Struktur organisasi lengkap
  const strukturOrganisasi = [
    {
      level: "DEWAN PELINDUNG",
      icon: <Shield className="text-blue-600" size={20} />,
      members: dewanPelindung,
      color: "bg-blue-50 border-blue-200",
    },
    {
      level: "PEMBINA",
      icon: <Award className="text-purple-600" size={20} />,
      members: pembina,
      color: "bg-purple-50 border-purple-200",
    },
    {
      level: "MAJELIS MUSTASYAR & PENASEHAT",
      icon: <Users2 className="text-emerald-600" size={20} />,
      members: majelisMustasyar,
      color: "bg-emerald-50 border-emerald-200",
    },
    {
      level: "PENGURUS INTI DKM",
      icon: <ShieldCheck className="text-red-600" size={20} />,
      members: pengurusInti,
      color: "bg-red-50 border-red-200",
    },
    {
      level: "BIDANG PENDIDIKAN & DAKWAH",
      icon: <School className="text-orange-600" size={20} />,
      members: bidangPendidikanDakwah,
      color: "bg-orange-50 border-orange-200",
    },
    {
      level: "BIDANG PEMBERDAYAAN EKONOMI",
      icon: <Briefcase className="text-amber-600" size={20} />,
      members: bidangPemberdayaanEkonomi,
      color: "bg-amber-50 border-amber-200",
    },
    {
      level: "BIDANG PEMUDA & REMAJA MASJID",
      icon: <Users className="text-cyan-600" size={20} />,
      members: bidangPemudaRemaja,
      color: "bg-cyan-50 border-cyan-200",
    },
    {
      level: "BIDANG PENGEMBANGAN POTENSI MUSLIMAH",
      icon: <Heart className="text-pink-600" size={20} />,
      members: bidangPengembanganMuslimah,
      color: "bg-pink-50 border-pink-200",
    },
    {
      level: "BIDANG PERPUSTAKAAN MASJID",
      icon: <Library className="text-indigo-600" size={20} />,
      members: bidangPerpustakaan,
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      level: "BIDANG KESEHATAN, PEMELIHARAAN & KEBERSIHAN",
      icon: <HeartHandshake className="text-teal-600" size={20} />,
      members: bidangKesehatanKebersihan,
      color: "bg-teal-50 border-teal-200",
    },
    {
      level: "BIDANG HUBUNGAN MASYARAKAT",
      icon: <MessageSquare className="text-lime-600" size={20} />,
      members: bidangHumas,
      color: "bg-lime-50 border-lime-200",
    },
    {
      level: "BIDANG PERENCANAAN & PENGEMBANGAN MASJID",
      icon: <Wrench className="text-gray-600" size={20} />,
      members: bidangPerencanaanPengembangan,
      color: "bg-gray-50 border-gray-200",
    },
    {
      level: "BIDANG KEAMANAN & KETERTIBAN",
      icon: <Lock className="text-slate-600" size={20} />,
      members: bidangKeamananKetertiban,
      color: "bg-slate-50 border-slate-200",
    },
  ];

  // Warna untuk setiap divisi
  const getDivisiColor = (divisi) => {
    switch (divisi) {
      case "Dewan Pelindung":
        return "bg-blue-100 text-blue-700";
      case "Pembina":
        return "bg-purple-100 text-purple-700";
      case "Majelis Mustasyar":
        return "bg-emerald-100 text-emerald-700";
      case "Pengurus Inti":
        return "bg-red-100 text-red-700";
      case "Pendidikan & Dakwah":
        return "bg-orange-100 text-orange-700";
      case "Pemberdayaan Ekonomi":
        return "bg-amber-100 text-amber-700";
      case "Pemuda & Remaja":
        return "bg-cyan-100 text-cyan-700";
      case "Pengembangan Muslimah":
        return "bg-pink-100 text-pink-700";
      case "Perpustakaan":
        return "bg-indigo-100 text-indigo-700";
      case "Kesehatan & Kebersihan":
        return "bg-teal-100 text-teal-700";
      case "Humas":
        return "bg-lime-100 text-lime-700";
      case "Perencanaan & Pengembangan":
        return "bg-gray-100 text-gray-700";
      case "Keamanan & Ketertiban":
        return "bg-slate-100 text-slate-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Icon untuk setiap divisi
  const getDivisiIcon = (divisi) => {
    switch (divisi) {
      case "Dewan Pelindung":
        return <Shield className="text-blue-600" size={16} />;
      case "Pembina":
        return <Award className="text-purple-600" size={16} />;
      case "Majelis Mustasyar":
        return <Users2 className="text-emerald-600" size={16} />;
      case "Pengurus Inti":
        return <ShieldCheck className="text-red-600" size={16} />;
      case "Pendidikan & Dakwah":
        return <School className="text-orange-600" size={16} />;
      case "Pemberdayaan Ekonomi":
        return <Briefcase className="text-amber-600" size={16} />;
      case "Pemuda & Remaja":
        return <Users className="text-cyan-600" size={16} />;
      case "Pengembangan Muslimah":
        return <Heart className="text-pink-600" size={16} />;
      case "Perpustakaan":
        return <Library className="text-indigo-600" size={16} />;
      case "Kesehatan & Kebersihan":
        return <HeartHandshake className="text-teal-600" size={16} />;
      case "Humas":
        return <MessageSquare className="text-lime-600" size={16} />;
      case "Perencanaan & Pengembangan":
        return <Wrench className="text-gray-600" size={16} />;
      case "Keamanan & Ketertiban":
        return <Lock className="text-slate-600" size={16} />;
      default:
        return <Users className="text-gray-600" size={16} />;
    }
  };

  // Informasi periode
  const periodeInfo = {
    masaBakti: "2023-2028",
    alamat:
      "Jl. Cisokan Raya RW 014 Kelurahan Abadijaya, Kecamatan Sukmajaya, Kota Depok",
    totalPengurus: allPengurus.length,
    bidang: strukturOrganisasi.length - 3, // Excluding pelindung, pembina, mustasyar
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 py-12 md:py-16">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Susunan Pengurus dan Personalia
              </h1>
              <p className="text-lg md:text-xl text-emerald-100 mb-4">
                Dewan Kemakmuran Masjid (DKM) Masjid Nurul Huda
              </p>
              <div className="inline-flex flex-wrap gap-2 justify-center">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Masa Bakti: {periodeInfo.masaBakti}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  {periodeInfo.totalPengurus} Pengurus
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Informasi Periode */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6 text-center">
                  <Calendar
                    className="text-emerald-600 mx-auto mb-3"
                    size={32}
                  />
                  <h4 className="font-bold text-gray-900 mb-2">Masa Bakti</h4>
                  <p className="text-2xl font-bold text-emerald-600">
                    {periodeInfo.masaBakti}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <Users className="text-blue-600 mx-auto mb-3" size={32} />
                  <h4 className="font-bold text-gray-900 mb-2">
                    Total Pengurus
                  </h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {periodeInfo.totalPengurus} Orang
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center">
                  <Building
                    className="text-purple-600 mx-auto mb-3"
                    size={32}
                  />
                  <h4 className="font-bold text-gray-900 mb-2">Bidang</h4>
                  <p className="text-2xl font-bold text-purple-600">
                    {periodeInfo.bidang} Bidang
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-2 flex-shrink-0 ${
                    activeDepartment === dept.id
                      ? "bg-emerald-600 text-white font-semibold"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="truncate">{dept.name}</span>
                  <span className="text-xs opacity-80">({dept.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pengurus Grid */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            {filteredPengurus.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">👥</div>
                <p className="text-gray-600">
                  Tidak ada pengurus dalam kategori ini
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {departments.find((d) => d.id === activeDepartment)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {filteredPengurus.length} pengurus ditemukan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPengurus.map((pengurus) => (
                    <div
                      key={pengurus.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                    >
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 relative">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-2xl font-bold">
                            {pengurus.nama
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .substring(0, 2)}
                          </div>
                          <div className="text-white flex-1 min-w-0">
                            <h3 className="text-xl font-bold truncate">
                              {pengurus.nama}
                            </h3>
                            <p className="text-emerald-100 truncate">
                              {pengurus.jabatan}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getDivisiColor(
                              pengurus.divisi
                            )}`}
                          >
                            <span className="flex items-center gap-1">
                              {getDivisiIcon(pengurus.divisi)}
                              {pengurus.divisi}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Calendar
                              className="text-emerald-600 flex-shrink-0 mt-1"
                              size={16}
                            />
                            <div>
                              <p className="text-sm text-gray-500">Periode</p>
                              <p className="font-medium text-gray-900">
                                {pengurus.periode}
                              </p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">
                              Tugas & Tanggung Jawab
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {pengurus.tugas}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Struktur Organisasi Lengkap */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Struktur Organisasi Lengkap
              </h2>
              <p className="text-gray-600">
                Susunan hierarki pengurus DKM Masjid Nurul Huda
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-4">
                {strukturOrganisasi.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow-lg p-6 ${item.color} border`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.level}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.members.length} Anggota
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {item.members.map((member) => (
                        <div
                          key={member.id}
                          className="bg-white/80 hover:bg-white rounded-lg p-4 transition"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="font-bold text-emerald-700 text-sm">
                                {member.nama
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .substring(0, 2)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 truncate">
                                {member.nama}
                              </h4>
                              <p className="text-sm text-gray-600 truncate">
                                {member.jabatan}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alamat dan Kontak */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Lokasi dan Kontak
                </h2>
                <p className="text-gray-600">
                  Alamat resmi DKM Masjid Nurul Huda
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Home className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Alamat DKM
                    </h4>
                    <p className="text-gray-700">{periodeInfo.alamat}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm">
                        <MapPin size={14} />
                        RW 014
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm">
                        <Building size={14} />
                        Kelurahan Abadijaya
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm">
                        <Award size={14} />
                        Kecamatan Sukmajaya
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ingin Berkonsultasi dengan Pengurus?
              </h3>
              <p className="text-emerald-100 mb-8">
                Hubungi sekretariat DKM untuk informasi lebih lanjut
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#kontak"
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Hubungi Sekretariat
                </a>
                <a
                  href="#"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
                >
                  <ChevronRight size={18} />
                  Lihat Jadwal Rapat
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PengurusPage;