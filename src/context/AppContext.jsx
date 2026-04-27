import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Translations
  const translations = {
    en: {
      search: 'Search Wikipedia',
      searchBtn: 'Search',
      login: 'Log in',
      createAccount: 'Create account',
      mainPage: 'Main page',
      contents: 'Contents',
      currentEvents: 'Current events',
      randomArticle: 'Random article',
      aboutWiki: 'About Wikipedia',
      contactUs: 'Contact us',
      donate: 'Donate',
      tools: 'Tools',
      whatLinksHere: 'What links here',
      relatedChanges: 'Related changes',
      uploadFile: 'Upload file',
      specialPages: 'Special pages',
      permanentLink: 'Permanent link',
      pageInfo: 'Page information',
      citePage: 'Cite this page',
      article: 'Article',
      talk: 'Talk',
      read: 'Read',
      edit: 'Edit',
      viewHistory: 'View history',
      notLoggedIn: 'Not logged in',
      personalTools: 'Personal tools',
      navigation: 'Navigation',
      contribute: 'Contribute',
      languages: 'Languages',
      noResults: 'No results found for',
      logoSubtext: 'Let\'s connect, drop me a message',
      // Profile specific
      name: 'Muhammad Lutfi Pratama',
      subtitle: 'Let\'s connect, drop me a message',
      born: 'Born',
      nationality: 'Nationality',
      occupation: 'Occupation',
      knownFor: 'Known for',
      employer: 'Employer',
      projects: 'Projects',
      aboutMe: 'About Me',
      skills: 'Skills & Tools',
      contact: 'Contact',
      experience: 'Experience',
      // Article Page
      articleIntro: 'is a Software Developer at PT. Bank Rakyat Indonesia, specializing in web and mobile application development. He is the lead developer of the Qlola IB Token mobile application and a contributor to major Internet Banking systems. With a background in Cloud Computing from Bangkit Academy, he is proficient in Flutter, ReactJS, and various mobile and web technologies.',
      viewCV: 'View Curriculum Vitae (PDF)',
      projectScreenshot: 'Project Screenshot',
      projectDesc: 'A brief description of project and the technologies used.',
      contactText1: 'Lutfi can be reached via email at',
      contactText2: 'or through his professional social media profiles. He is always open to discussing new opportunities and collaborating on innovative projects.',
      // Infobox
      role: 'Role',
      topSkills: 'Top Skills',
      location: 'Location',
      contactInfo: 'Contact Information',
      email: 'Email',
      socials: 'Socials',
      downloadCV: 'Download CV',
      lutfiIn: 'Lutfi in',
      softDev: 'Software Developer',
      // Talk Page
      talkTitle: 'Talk: Muhammad Lutfi Pratama',
      welcomeTalk: 'Welcome to the talk page!',
      leaveMsg: 'Feel free to leave a message here.',
      general: 'General',
      talkDesc: 'This is a place to discuss improvements to the article. Please sign your posts with four tildes (~~~~).',
      yourMessage: 'Your Message',
      messagePlaceholder: 'How can I help you? Type your message here...',
      sendMessage: 'Send Message via Gmail',
      talkHint: 'This will open Gmail to compose your message to Muhammad Lutfi Pratama.',
    },
    id: {
      search: 'Cari Wikipedia',
      searchBtn: 'Cari',
      login: 'Masuk log',
      createAccount: 'Buat akun',
      mainPage: 'Halaman Utama',
      contents: 'Daftar isi',
      currentEvents: 'Peristiwa terkini',
      randomArticle: 'Halaman sembarang',
      aboutWiki: 'Tentang Wikipedia',
      contactUs: 'Hubungi kami',
      donate: 'Bakhtiar',
      tools: 'Perkakas',
      whatLinksHere: 'Pranala balik',
      relatedChanges: 'Perubahan terkait',
      uploadFile: 'Unggah berkas',
      specialPages: 'Halaman istimewa',
      permanentLink: 'Pranala permanen',
      pageInfo: 'Informasi halaman',
      citePage: 'Kutip halaman ini',
      article: 'Artikel',
      talk: 'Pembicaraan',
      read: 'Baca',
      edit: 'Sunting',
      viewHistory: 'Lihat riwayat',
      notLoggedIn: 'Belum masuk log',
      personalTools: 'Perkakas pribadi',
      navigation: 'Navigasi',
      contribute: 'Kontribusi',
      languages: 'Bahasa',
      noResults: 'Tidak ada hasil ditemukan untuk',
      logoSubtext: 'Mari terhubung, kirimkan saya pesan',
      // Profile specific
      name: 'Muhammad Lutfi Pratama',
      subtitle: 'Mari terhubung, kirimkan saya pesan',
      born: 'Lahir',
      nationality: 'Kebangsaan',
      occupation: 'Pekerjaan',
      knownFor: 'Dikenal karena',
      employer: 'Pekerjaan',
      projects: 'Proyek',
      aboutMe: 'Tentang Saya',
      skills: 'Keahlian & Alat',
      contact: 'Kontak',
      experience: 'Pengalaman',
      // Article Page
      articleIntro: 'adalah seorang Software Developer di PT. Bank Rakyat Indonesia, yang mengkhususkan diri dalam pengembangan aplikasi web dan seluler. Ia merupakan pengembang utama aplikasi seluler Qlola IB Token dan kontributor pada sistem Internet Banking utama. Dengan latar belakang Cloud Computing dari Bangkit Academy, ia mahir dalam Flutter, ReactJS, dan berbagai teknologi seluler dan web.',
      viewCV: 'Lihat Daftar Riwayat Hidup (PDF)',
      projectScreenshot: 'Cuplikan Proyek',
      projectDesc: 'Deskripsi singkat proyek dan teknologi yang digunakan.',
      contactText1: 'Lutfi dapat dihubungi melalui email di',
      contactText2: 'atau melalui profil media sosial profesionalnya. Ia selalu terbuka untuk mendiskusikan peluang baru dan berkolaborasi dalam proyek inovatif.',
      // Infobox
      role: 'Peran',
      topSkills: 'Keahlian Utama',
      location: 'Lokasi',
      contactInfo: 'Informasi Kontak',
      email: 'Email',
      socials: 'Sosial',
      downloadCV: 'Unduh CV',
      lutfiIn: 'Lutfi di tahun',
      softDev: 'Software Developer',
      // Talk Page
      talkTitle: 'Pembicaraan: Muhammad Lutfi Pratama',
      welcomeTalk: 'Selamat datang di halaman pembicaraan!',
      leaveMsg: 'Jangan ragu untuk meninggalkan pesan di sini.',
      general: 'Umum',
      talkDesc: 'Ini adalah tempat untuk mendiskusikan perbaikan pada artikel. Harap tanda tangani postingan Anda dengan empat tilde (~~~~).',
      yourMessage: 'Pesan Anda',
      messagePlaceholder: 'Bagaimana saya bisa membantu Anda? Ketik pesan Anda di sini...',
      sendMessage: 'Kirim Pesan via Gmail',
      talkHint: 'Ini akan membuka Gmail untuk menyusun pesan Anda kepada Muhammad Lutfi Pratama.',
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, changeLanguage, t, isSidebarOpen, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};
