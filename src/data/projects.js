import { Smartphone, Globe, Shield, CreditCard, Layout, Zap, Cloud, Code } from 'lucide-react';
import p1_1 from '../assets/projects/project_1-1.png';
import p1_2 from '../assets/projects/project_1-2.png';
import p1_3 from '../assets/projects/project_1-3.png';
import p1_4 from '../assets/projects/project_1-4.png';
import p2_1 from '../assets/projects/project_2-1.png';
import p2_2 from '../assets/projects/project_2-2.png';
import p2_3 from '../assets/projects/project_2-3.png';
import p2_4 from '../assets/projects/project_2-4.png';
import p2_5 from '../assets/projects/project_2-5.png';

export const projects = [
  {
    id: 'qlola-mobile',
    title: 'Qlola Mobile by BRI',
    description: {
      en: 'A secure mobile token application (Qlola IB Token) developed from scratch for iOS and Android. Features biometric authentication and dynamic OTP generation.',
      id: 'Aplikasi token seluler aman (Qlola IB Token) yang dikembangkan dari awal untuk iOS dan Android. Memiliki fitur autentikasi biometrik dan pembuatan OTP dinamis.'
    },
    images: [p1_1, p1_2, p1_3, p1_4],
    tools: [
      { name: 'Flutter', icon: Smartphone },
      { name: 'Firebase', icon: Zap },
      { name: 'Security', icon: Shield }
    ],
    link: '#'
  },
  {
    id: 'bri-internet-banking',
    title: 'Internet Banking BRI',
    description: {
      en: 'Web-based internet banking platform focusing on transfer and payment features, ensuring high availability and secure transactions.',
      id: 'Platform internet banking berbasis web yang berfokus pada fitur transfer dan pembayaran, memastikan ketersediaan tinggi dan transaksi yang aman.'
    },
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    tools: [
      { name: 'ReactJS', icon: Layout },
      { name: 'TypeScript', icon: Code },
      { name: 'Cloud', icon: Cloud }
    ],
    link: '#'
  }
];
