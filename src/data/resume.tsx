import { HomeIcon, Instagram, Mail, NotebookIcon, Youtube } from "lucide-react";

export const DATA = {
  name: "KKN PPM XXXI UNUD",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Desa Bebalang, Bangli, Bali, Indonesia.",
  summary:
    "KKN PPM (Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat) merupakan salah satu kegiatan dalam pendidikan tinggi. Hal ini sesuai dengan salah satu amanat pada pembukaan UUD 1945 yaitu mencerdaskan kehidupan bangsa dan Undang-Undang No 20 Tahun 2003 tentang Sistem Pendidikan Nasional bahwa pendidikan adalah usaha sadar dan terencana untuk mewujudkan suasana belajar serta proses pembelajaran agar peserta didik secara aktif mengembangkan potensi dirinya untuk memiliki kekuatan spiritual keagamaan, pengendalian diri, kepribadian, kecerdasan, akhlak mulia, serta keterampilan yang diperlukan dirinya, masyarakat, bangsa dan negara. Pendidikan pada dasarnya merupakan proses pendewasaan dan pemandirian manusia secaras sistematis, agar siap menjalani kehidupan secara bertanggungjawab. Menjalani kehidupan secara bertanggungjawab berarti berani mengambil keputusan yang bijaksana sekaligus berani menanggung segala konsekuensi yang ditimbulkannya.",
  avatarUrl: "/images/logo.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "kknbebalang2025@gmail.com",
    tel: "+123456789",
    social: {
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/kknbebalang2025",
        icon: Instagram,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:kknbebalang2025@gmail.com",
        icon: Mail,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Youtube,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Inti",
      title: "Inti",
      logoUrl: "/images/logo.png",
      description:
        "Inti bertanggung jawab atas segala kegiatan yang berhubungan dengan pengelolaan dan pengembangan desa, termasuk dalam hal ini adalah pengelolaan sumber daya alam, pembangunan infrastruktur, pemberdayaan masyarakat, dan peningkatan kualitas hidup masyarakat desa.",
    },
    {
      company: "Kesehatan Masyarakat",
      title: "Kesmas",
      logoUrl: "/images/logo.png",
      description:
        "Kesehatan Masyarakat (Kesmas) adalah salah satu bidang yang bertanggung jawab dalam meningkatkan kesehatan masyarakat di desa. Hal ini dilakukan melalui berbagai program dan kegiatan yang bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya kesehatan, serta memberikan akses yang lebih baik terhadap layanan kesehatan.",
    },
    {
      company: "Sosial Budaya",
      title: "Sosbud",
      logoUrl: "/images/logo.png",
      description:
        "Sosial Budaya (Sosbud) adalah salah satu bidang yang bertanggung jawab dalam mengembangkan dan memelihara budaya dan tradisi masyarakat desa. Hal ini dilakukan melalui berbagai program dan kegiatan yang bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya budaya, serta memberikan akses yang lebih baik terhadap layanan budaya.",
    },
    {
      company: "Peningkatan Produksi",
      title: "Penpro",
      logoUrl: "/images/logo.png",
      description:
        "Peningkatan Produksi (Penpro) adalah salah satu bidang yang bertanggung jawab dalam meningkatkan produksi pertanian, perikanan, dan peternakan di desa. Hal ini dilakukan melalui berbagai program dan kegiatan yang bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya produksi, serta memberikan akses yang lebih baik terhadap layanan produksi.",
    },
    {
      company: "Prasarana Fisik",
      title: "Prafis",
      logoUrl: "/images/logo.png",
      description:
        "Prasarana Fisik (Prafis) adalah salah satu bidang yang bertanggung jawab dalam meningkatkan prasarana fisik di desa. Hal ini dilakukan melalui berbagai program dan kegiatan yang bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya prasarana fisik, serta memberikan akses yang lebih baik terhadap layanan prasarana fisik.",
    },
  ],
  members: [
    {
      title: "Kordes",
      description: "Deskripsi kordes",
      image: "/images/profil.png",
    },
    {
      title: "Wakordes",
      description: "Deskripsi kordes",
      image: "/images/profil.png",
    },
    {
      title: "Anggota",
      description: "Deskripsi kordes",
      image: "/images/profil.png",
    },
  ],
} as const;
