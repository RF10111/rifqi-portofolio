/**
 * Portfolio Data Configuration
 * ────────────────────────────
 * All portfolio content is defined here for easy maintenance.
 * To add a new skill, project, or certificate, simply add an
 * entry to the appropriate array below.
 */

const PORTFOLIO_DATA = {
  /* ──────────── Personal Info ──────────── */
  personal: {
    name: "Rifqi Fauzan",
    title: "Back End Developer",
    email: "rifqi101003@gmail.com",
    phone: "+62 812 8964 3811",
    location: "Depok, Jawa Barat, Indonesia",
    education: "Bachelor of Informatic, Gunadarma University",
    photo: "image/pp.jpg",
    cvFile: "file/CV_Rifqi Fauzan.pdf",
    bio: `Informatics graduate from Gunadarma University (2025), certified as a 
    BNSP Junior Web Programmer, with a specialization in Back-End Development and Cloud 
    Computing (Bangkit Academy alumnus). Experienced in designing, optimizing, and 
    integrating RESTful APIs for enterprise systems (such as MES and ERP). Possesses strong 
    proficiency in modern frameworks (NestJS, Laravel, Express.js) and complex relational 
    database management (PostgreSQL, SQL Server, Prisma). Committed to continuously building 
    efficient, scalable backend architectures and cloud infrastructures that deliver direct 
    impact on business operations.`,
    social: {
      github: "https://github.com/RF10111",
      linkedin: "https://www.linkedin.com/in/rifqifauzan-rf10/",
      instagram: "https://www.instagram.com/rifqi_fauzan10?igsh=bmhxYXplYjV2eTFr",
    },
  },

  /* ──────────── Navigation ──────────── */
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ],

  /* ──────────── Technical Skills ──────────── */
  skillCategories: [
    { id: "all", label: "All" },
    { id: "language", label: "Languages" },
    { id: "framework", label: "Frameworks" },
    { id: "database", label: "Databases" },
    { id: "tool", label: "Tools & Cloud" },
  ],

  skills: [
    // Languages (A → Z)
    { name: "CSS3", icon: "devicon-css3-plain-wordmark", gradient: "from-blue-400 to-blue-600", category: "language" },
    { name: "Go", icon: "devicon-go-original-wordmark", gradient: "from-cyan-400 to-blue-500", category: "language" },
    { name: "HTML5", icon: "devicon-html5-plain-wordmark", gradient: "from-orange-400 to-red-500", category: "language" },
    { name: "JavaScript", icon: "devicon-javascript-plain", gradient: "from-yellow-400 to-yellow-600", category: "language" },
    { name: "PHP", icon: "fa-brands fa-php", gradient: "from-indigo-500 to-purple-700", category: "language", isFA: true },
    { name: "TypeScript", icon: "devicon-typescript-plain", gradient: "from-blue-500 to-blue-700", category: "language" },
    { name: "SQL", icon: "fa-solid fa-database", gradient: "from-slate-600 to-gray-800", category: "language", isFA: true },
    

    // Frameworks & Runtime (A → Z)
    { name: "CodeIgniter", icon: "devicon-codeigniter-plain", gradient: "from-red-600 to-orange-500", category: "framework" },
    { name: "Express.js", icon: "devicon-express-original", gradient: "from-gray-600 to-gray-800", category: "framework" },
    { name: "Laravel", icon: "fa-brands fa-laravel", gradient: "from-red-500 to-orange-500", category: "framework", isFA: true },
    { name: "NestJS", icon: "devicon-nestjs-original", gradient: "from-red-500 to-pink-600", category: "framework" },
    { name: "Node.js", icon: "devicon-nodejs-plain", gradient: "from-green-500 to-green-700", category: "framework" },

    // Databases (A → Z)
    { name: "MySQL", icon: "devicon-mysql-plain-wordmark", gradient: "from-blue-500 to-orange-400", category: "database" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain-wordmark", gradient: "from-blue-600 to-indigo-800", category: "database" },
    { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", gradient: "from-red-500 to-gray-700", category: "database" },

    // Tools & Cloud (A → Z)
    { name: "Antigravity", icon: "fa-solid fa-rocket", gradient: "from-violet-500 to-fuchsia-600", category: "tool", isFA: true },
    { name: "Docker", icon: "devicon-docker-plain", gradient: "from-blue-400 to-blue-600", category: "tool" },
    { name: "Figma", icon: "", gradient: "from-pink-500 to-purple-600", category: "tool", imgSrc: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "GCP", icon: "devicon-googlecloud-plain", gradient: "from-blue-400 to-green-400", category: "tool" },
    { name: "Git", icon: "devicon-git-plain", gradient: "from-orange-500 to-red-600", category: "tool" },
    { name: "GitHub", icon: "devicon-github-original", gradient: "from-gray-600 to-black", category: "tool" },
    { name: "Postman", icon: "devicon-postman-plain", gradient: "from-orange-400 to-orange-600", category: "tool" },
    { name: "VS Code", icon: "devicon-vscode-plain", gradient: "from-blue-500 to-blue-700", category: "tool" },
  ],

  /* ──────────── Projects ──────────── */
  projects: [
    {
      title: "Website Point Of Sale",
      description: "A web-based POS application designed to simplify the administrative and operational processes of car repair shops. This system replaces conventional record-keeping using Excel files with an integrated, efficient, and easily accessible system, thereby improving data accuracy and the effectiveness of repair shop operations.",
      image: "image/POS.png",
      badge: { text: "Website", color: "#3b82f6" },
      tags: [
        { label: "HTML", gradient: "from-orange-400 to-orange-600" },
        { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
      ],
      code: "https://github.com/RF10111/Website-Point-Of-Sale-Bengkel-Mobil",
    },
    {
      title: "Website Pemesanan Jasa Service Alat Elektronik",
      description: "This website is designed to make it easier for customers to order electronic device repair services online. The system simplifies the ordering and service process, making communication between customers and service providers more efficient and coordinated.",
      image: "image/jasa service.png",
      badge: { text: "Website", color: "#3b82f6" },
      tags: [
        { label: "HTML", gradient: "from-orange-400 to-orange-600" },
        { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
        { label: "CodeIgniter", gradient: "from-red-600 to-orange-400" },
      ],
      code: "https://github.com/RF10111/Website-Pemesanan-Jasa-Service-Online",
    },
    {
      title: "Website To-Do List",
      description: "This website is designed to help users manage and organize their to-do lists efficiently. The system makes it easier for users to plan their daily activities in a more structured, monitored, and productive manner.",
      image: "image/Todo-list.png",
      badge: { text: "Website", color: "#3b82f6" },
      tags: [
        { label: "HTML", gradient: "from-orange-400 to-orange-600" },
        { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        { label: "Node.js", gradient: "from-green-400 to-green-600" },
        { label: "Express.js", gradient: "from-gray-700 to-gray-900" },
      ],
      code: "https://github.com/RF10111/ToDo-List",
    },
    {
      title: "Website Pemesanan Layanan Photobooth",
      description: "This website is designed to make it easier for customers to order photobooth services in a practical and organized manner. Through this system, the process of ordering and managing photobooth services becomes more efficient.",
      image: "image/Photobox.png",
      badge: { text: "Website", color: "#3b82f6" },
      tags: [
        { label: "HTML", gradient: "from-orange-400 to-orange-600" },
        { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
      ],
      code: "https://github.com/RF10111/Website_Pemesanan_Photobox",
    },
    {
      title: "Website Sistem Administrasi Perpustakaan",
      description: "This website is designed to simplify the process of recording, managing, and monitoring data on library operations. This system helps administrators organize book data, members, and borrowing transactions efficiently and in a structured manner.",
      image: "image/perpus.png",
      badge: { text: "Website", color: "#3b82f6" },
      tags: [
        { label: "HTML", gradient: "from-orange-400 to-orange-600" },
        { label: "CSS", gradient: "from-blue-400 to-blue-600" },
        { label: "JavaScript", gradient: "from-yellow-400 to-yellow-600" },
        { label: "PHP", gradient: "from-indigo-500 to-purple-600" },
        { label: "Laravel", gradient: "from-red-600 to-orange-500" },
      ],
      code: "https://github.com/RF10111/Website-Sistem-Administrasi-Perpustakaan",
    },
    {
      title: "Game Ular Tangga Kuis",
      description: "This game is designed as an interactive learning medium that combines the classic concept of snakes and ladders with educational quiz elements. Through this game, players can learn while playing by answering questions.",
      image: "image/Ular Tangga Kuis.png",
      badge: { text: "Game", color: "#f97316" },
      tags: [
        { label: "Unity", gradient: "from-blue-800 to-blue-500" },
        { label: "C#", gradient: "from-purple-700 to-purple-500" },
      ],
      code: "https://github.com/RF10111/Ular-Tangga-Kuis",
    },
  ],

  /* ──────────── Certificates ──────────── */
  certificateCategories: [
    { id: "all", label: "All" },
    { id: "bnsp", label: "BNSP" },
    { id: "gcsb", label: "Google Cloud Skill Boost" },
    { id: "coursera", label: "Coursera" },
    { id: "dicoding", label: "Dicoding Indonesia" },
    { id: "lepkom", label: "Lepkom Gunadarma" },
    { id: "tbi", label: "The British Institute" },
  ],

  certificates: [
    { title: "Okupasi Junior Web Programmer", category: "bnsp", year: "2024", issuerLabel: "BNSP", issuerColor: "#92400e", image: "image/bnsp.jpg", link: "https://drive.google.com/file/d/1aLpJv8YsUYymxP1h9o9LX0CVwglfmyO2/view?usp=sharing" },
    { title: "Preparing for Your Associate Cloud Engineer Journey", category: "gcsb", year: "2025", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Preparing for Your Associate Cloud Engineer Journey.png", link: "https://www.skills.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8431341" },
    { title: "Google Cloud Computing Foundations Certificate", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Computing Foundations Certificate.png", link: "https://www.credly.com/badges/714a8eca-7334-404a-944d-0d99a06f1425/linked_in_profile" },
    { title: "Develop Serverless Applications on Cloud Run", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Develop Serverless Applications on Cloud Run.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/9190411" },
    { title: "ML Infrastructure", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/ML Infrastructure.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/9189547" },
    { title: "Deploy Kubernetes Applications on Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Deploy Kubernetes Applications on Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/9176125" },
    { title: "Hybrid Cloud Modernizing Applications with Anthos", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Hybrid Cloud Modernizing Applications with Anthos.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/9176073" },
    { title: "Application Development with Cloud Run", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Application Development with Cloud Run.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/9175911" },
    { title: "Build Infrastructure with Terraform on Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Build Infrastructure with Terraform on Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8691416" },
    { title: "Develop Your Google Cloud Network", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Develop Your Google Cloud Network.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8680826" },
    { title: "Getting Started with Terraform for Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Getting Started with Terraform for Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8680663" },
    { title: "Logging and Monitoring in Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Logging and Monitoring in Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8680600" },
    { title: "Getting Started with Google Kubernetes Engine", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Getting Started with Google Kubernetes Engine.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8671085" },
    { title: "Elastic Google Cloud Infrastructure Scaling and Automation", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Elastic Google Cloud Infrastructure Scaling and Automation.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8520491" },
    { title: "Essential Google Cloud Infrastructure Core Services", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Essential Google Cloud Infrastructure Core Services.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8512022" },
    { title: "Essential Google Cloud Infrastructure Foundation", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Essential Google Cloud Infrastructure Foundation.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8510016" },
    { title: "Google Cloud Fundamentals Core Infrastructure", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Fundamentals Core Infrastructure.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8489064" },
    { title: "Prepare Data for ML APIs on Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Prepare Data for ML APIs on Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8315766" },
    { title: "Build a Secure Google Cloud Network", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Build a Secure Google Cloud Network.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8313396" },
    { title: "Set Up an App Dev Environment on Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Set Up an App Dev Environment on Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8312786" },
    { title: "Create and Manage Cloud Resources", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Create and Manage Cloud Resources.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8312738" },
    { title: "Google Cloud Computing Foundations Data, ML, and AI in Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Computing Foundations Data, ML, and AI in Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8312649" },
    { title: "Google Cloud Computing Foundations Networking & Security in Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Computing Foundations Networking & Security in Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8302044" },
    { title: "Google Cloud Computing Foundations Infrastructure in Google Cloud", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Computing Foundations Infrastructure in Google Cloud.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8301354" },
    { title: "Google Cloud Computing Foundations Cloud Computing Fundamentals", category: "gcsb", year: "2024", issuerLabel: "GCSB", issuerColor: "#ef4444", image: "image/Google Cloud Computing Foundations Cloud Computing Fundamentals.png", link: "https://www.cloudskillsboost.google/public_profiles/7bac8c77-7f88-49b6-941a-2f588214bd53/badges/8291046" },
    { title: "System Administration and IT Infrastructure Services", category: "coursera", year: "2024", issuerLabel: "Coursera", issuerColor: "#22c55e", image: "image/System Administration and IT Infrastructure Services.jpeg", link: "https://www.coursera.org/account/accomplishments/verify/48C882GJXY7B" },
    { title: "The Bits and Bytes of Computer Networking", category: "coursera", year: "2024", issuerLabel: "Coursera", issuerColor: "#22c55e", image: "image/The Bits and Bytes of Computer Networking.jpeg", link: "https://www.coursera.org/account/accomplishments/verify/AT6BN8552WY9" },
    { title: "Belajar Dasar Cloud dan Gen AI di AWS", category: "dicoding", year: "2025", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Dasar Cloud dan Gen AI di AWS.png", link: "https://drive.google.com/file/d/1QJ7N2S6esFhHlTwowC3dpeWAXeD4cXPP/view?usp=drive_link" },
    { title: "Belajar Penerapan Machine Learning dengan Google Cloud", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Penerapan Machine Learning dengan Google Cloud.png", link: "https://drive.google.com/file/d/1bO8mjfU28U22TwbRgifbXxrrTvKt74ii/view?usp=sharing" },
    { title: "Belajar Dasar AI", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Dasar AI.png", link: "https://drive.google.com/file/d/168lfjIB2KEOiiuRUCWRZoY0jKMaRrUjV/view?usp=sharing" },
    { title: "Menjadi Google Cloud Engineer", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Menjadi Google Cloud Engineer.png", link: "https://drive.google.com/file/d/1kDImOp3kto127qO9H4lhuQq7ZF1tJGyu/view?usp=sharing" },
    { title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Membuat Aplikasi BE.png", link: "https://drive.google.com/file/d/1LjkYHRqWE4iUGLkIRZnUpCTWZ7tYyR8U/view?usp=sharing" },
    { title: "Belajar Dasar Pemrograman JavaScript", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Dasar Pemrograman JavaScript.png", link: "https://drive.google.com/file/d/1REAeyfv-dwIZR6cRcN-_B_kxLIyAyFn4/view?usp=sharing" },
    { title: "Belajar Dasar Pemrograman Web", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Dasar Pemrograman Web.png", link: "https://drive.google.com/file/d/1bdycjwx1ekgf1KaC050P8fNWO-hr4Jqh/view?usp=sharing" },
    { title: "Belajar Dasar Git dengan GitHub", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Belajar Dasar Git dengan GitHub.png", link: "https://drive.google.com/file/d/1BJ6Bz96NmTy7Vnh3UgfcvaporOlaV7x4/view?usp=sharing" },
    { title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Pengenalan ke Logika Pemrograman (Programming Logic 101).png", link: "https://drive.google.com/file/d/1HIaKvOooq-YacjVLpbd1sD8VNdz2vQl9/view?usp=sharing" },
    { title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", category: "dicoding", year: "2024", issuerLabel: "Dicoding", issuerColor: "#3b82f6", image: "image/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.png", link: "https://drive.google.com/file/d/1PMSBSRpp0vE_Jq-DaB_p4mcUxbhMtB8e/view?usp=sharing" },
    { title: "Basic Web Application Development", category: "lepkom", year: "2025", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/Basic Web Application Development.png", link: "https://drive.google.com/file/d/1-LJ0k7uHvbuZrLwi2eKV8RizW9TR88G8/view?usp=sharing" },
    { title: "Building Website using HTML 5", category: "lepkom", year: "2024", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/Building Website using HTML 5.png", link: "https://drive.google.com/file/d/1TzivPSvVJT4uYSVVbLqXm_OiJ_rxj4Wd/view?usp=drive_link" },
    { title: "Basic Web Application Design", category: "lepkom", year: "2024", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/Basic Web Application Design.png", link: "https://drive.google.com/file/d/13KuBNKBSksAHDIG451CSjHbQtWIrE2l4/view?usp=sharing" },
    { title: "SQL Server For Intermediate", category: "lepkom", year: "2024", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/SQL SERVER FOR INTERMEDIATE.png", link: "https://drive.google.com/file/d/13NQ3NXN4PG3emAJSfutu2oJapDVqryY_/view?usp=drive_link" },
    { title: "Java For Intermediate", category: "lepkom", year: "2024", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/JAVA FOR INTERMEDIATE.png", link: "https://drive.google.com/file/d/1mhA_YqLPR0PaIVKuspKnSpst1Zvwt13P/view?usp=drive_link" },
    { title: "SQL Server For Beginner", category: "lepkom", year: "2023", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/SQL SERVER FOR BEGINNER.png", link: "https://drive.google.com/file/d/1_gTZ4JPgTARFhph2eL-flm0lNoATfBwX/view?usp=sharing" },
    { title: "Java Programming For Beginner", category: "lepkom", year: "2023", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/JAVA PROGRAMMING FOR BEGINNER.png", link: "https://drive.google.com/file/d/14YGmwOkqKRrawqVdWyAMt2cSqWkCfYWa/view?usp=sharing" },
    { title: "Fundamental DBMS", category: "lepkom", year: "2022", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/FUNDAMENTAL DBMS.png", link: "https://drive.google.com/file/d/1eGLAPqeGV9XUtLnA5B_28YZrXgbbBK5-/view?usp=sharing" },
    { title: "Fundamental Desktop Programming", category: "lepkom", year: "2022", issuerLabel: "Lepkom", issuerColor: "#a855f7", image: "image/FUNDAMENTAL DESKTOP PROGRAMMING.png", link: "https://drive.google.com/file/d/1FXeOpuIXQoISeULLN7cTpSczlSrf_XVb/view?usp=sharing" },
    { title: "English for Business Communication", category: "tbi", year: "2024", issuerLabel: "TBI", issuerColor: "#eab308", image: "image/English for Business Communication.png", link: "https://drive.google.com/file/d/11j3JnOATgCquokfYJFt64Fpx99D1WhxI/view?usp=sharing" },
  ],

  /* ──────────── EmailJS Config ──────────── */
  emailjs: {
    publicKey: "vLpz8OvcK0XXxGXUv",
    serviceId: "service_sbejj5z",
    templateId: "template_hgwwjxl",
  },
};
