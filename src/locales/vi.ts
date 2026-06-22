/**
 * Bản dịch Tiếng Việt cho website portfolio.
 *
 * Cấu trúc phải HOÀN TOÀN GIỐNG với en.ts để đảm bảo type-safe.
 */
import type { Translations } from './types';

export const vi: Translations = {
  // ── Navbar ──
  nav: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    experience: 'Kinh nghiệm',
    skills: 'Kỹ năng',
    projects: 'Dự án',
    contact: 'Liên hệ',
    cta: 'Liên hệ ngay',
    explore: 'Khám Phá',
  },

  // ── Hero Section ──
  hero: {
    name: 'Đỗ Vân Trường',
    subtitle:
      'Front-end Developer với 3 năm kinh nghiệm phát triển ứng dụng web bằng ReactJS và Next.js. Có kinh nghiệm xây dựng các hệ thống CRM và quản trị doanh nghiệp, tập trung vào hiệu năng, tối ưu trải nghiệm người dùng và chất lượng sản phẩm.',
    cta: 'Khám Phá',
  },

  // ── About Section ──
  about: {
    label: '/ TỔNG QUAN',
    heading: 'Không ngừng học hỏi và tối ưu trải nghiệm người dùng.',
    bio1: 'Front-end Developer với 3 năm kinh nghiệm phát triển ứng dụng web bằng ReactJS và Next.js. Có kinh nghiệm xây dựng các hệ thống CRM và quản trị doanh nghiệp, tập trung vào hiệu năng, tối ưu trải nghiệm người dùng và chất lượng sản phẩm.',
    bio2: 'Chủ động nghiên cứu, ứng dụng AI vào công việc nhằm nâng cao năng suất và hiệu quả phát triển phần mềm, đồng thời liên tục cập nhật các công nghệ mới để tạo ra những sản phẩm hiện đại và đáp ứng tốt nhu cầu người dùng.',
    education: {
      label: 'Học Vấn',
      school: 'Đại Học Công Nghiệp Hồ Chí Minh',
      degree: 'Kỹ thuật phần mềm — GPA 3.3/4',
    },
  },

  // ── Experience Section ──
  experience: {
    label: '/ HÀNH TRÌNH',
    heading: 'Kinh Nghiệm Làm Việc',
    present: 'Hiện tại',
    items: [
      {
        company: 'Vietnix',
        role: 'Fullstack Developer',
        period: '05/2024 - Hiện tại',
        location: 'TP. Hồ Chí Minh',
        highlights: [
          'Xây dựng hệ thống theo dõi, phân tích số liệu chiến dịch marketing theo thời gian thực với ReactJS, Redux, Antd, Tailwind Css, WebSocket, ReChart, NodeJS, RESTful API giúp nhà quản lý dễ dàng theo dõi hiệu quả chiến dịch và đưa ra quyết định nhanh chóng.',
          'Phát triển hệ thống quản lý nội với ReactJS, Redux, Antd và RESTful API, hỗ trợ nhân viên quản lý thông tin công việc và khách hàng cho 120 nhân viên.',
          'Xây dựng nền tảng AI hỗ trợ quản lý tài khoản Facebook, tự động thu thập dữ liệu, đăng tải và tạo nội dung bằng AI với Next.js, Antd, Tailwind Css, NodeJS, Proxy, PostgreSQL, Playwright, OpenAI API và Vector Database, giúp giảm hơn 70% thời gian xử lý nội dung thủ công.',
          'Xây dựng hệ thống theo dõi đối thủ với NextJS, Redux, NodeJS, Playwright, PostgreSQL và BullMQ, hỗ trợ giám sát thay đổi website, lưu trữ lịch sử cập nhật và giúp quản lý nhanh chóng phát hiện các thay đổi quan trọng từ đối thủ.',
          'Triển khai CI/CD pipeline với Git và Docker, hỗ trợ tự động hóa deployment.',
          'Có kinh nghiệm sử dụng AI Coding Agent (Antigravity) kết hợp skill, rule đảm bảo mã nguồn sạch, đúng logic và có khả năng tái sử dụng cao.',
          'Quản lý và tối ưu website doanh nghiệp giúp trải nghiệm người dùng tốt với caching và lazyload. Đảm bảo website đạt uptime trên 99%.',
          'Tối ưu Google PageSpeed đạt trên 90 điểm cho hơn 30 website khách hàng.',
          'Phối hợp BA, Tester và Marketing để phân tích yêu cầu, đề xuất, thiết kế dữ liệu và triển khai các phương án giải quyết vấn đề.',
        ],
      },
      {
        company: 'Chuta',
        role: 'Fullstack Developer',
        period: '02/2023 - 04/2024',
        location: 'TP. Hồ Chí Minh',
        highlights: [
          'Xây dựng ứng dụng quản lý cho thuê phòng trọ với ReactJS, Tailwind Css, Redux, Antd, ReChart, NodeJS, RESTful API.',
          'Lên kế hoạch và phân công nhiệm vụ cho các thành viên.',
          'Tích hợp các API từ các bên đối tác để đồng bộ dữ liệu và tự động hóa quy trình vận hành.',
          'Triển khai CI/CD pipeline với Git và Docker.',
          'Phân tích yêu cầu khách hàng và chuyển đổi thành các tính năng phù hợp với mục tiêu kinh doanh.',
        ],
      },
    ],
  },

  // ── Skills Section ──
  skills: {
    label: '/ NĂNG LỰC',
    heading: 'Kỹ Năng Chuyên Môn',
  },

  // ── Projects Section ──
  projects: {
    label: '/ DỰ ÁN',
    heading: 'Dự Án Cá Nhân',
    viewGithub: 'Xem GitHub',
    viewDemo: 'Xem Demo',
    showMore: 'Xem thêm',
    showLess: 'Thu gọn',
    items: [
      {
        title: 'Hệ thống giao hàng vận chuyển Bengo',
        category: 'Fullstack',
        period: '01/2026 - 05/2026',
        description:
          'Phát triển hệ thống quản lý vận chuyển cho quản lý và tài xế bằng ReactJS, React Native, NodeJS và PostgreSQL. Hỗ trợ cập nhật trạng thái đơn hàng theo thời gian thực, quản lý hồ sơ tài xế, định vị GPS, tích hợp Google Maps, lưu trữ tệp trên AWS S3 và cung cấp RESTful API cho ứng dụng web/mobile.',
        badges: ['ReactJS', 'React Native', 'NodeJS', 'PostgreSQL', 'Google Maps', 'AWS S3'],
        screenshots: ['/pj1_1.jpg', '/pj1_2.jpg', '/pj1_3.jpg'],
      },
      {
        title: 'Hệ thống quản lý công việc Ontask tích hợp AI',
        category: 'Fullstack',
        period: '02/2024 - 05/2024',
        description:
          'Phát triển hệ thống quản lý công việc real-time với ReactJS, Antd, Tailwind, NodeJS, WebSocket, AWS S3 và PostgreSQL, hỗ trợ gợi ý phân công nhiệm vụ, trao đổi trực tiếp trên từng công việc và tối ưu trải nghiệm người dùng. Đạt 10/10 trong khóa luận tốt nghiệp.',
        badges: ['ReactJS', 'Antd', 'Tailwind', 'NodeJS', 'WebSocket', 'AWS S3', 'PostgreSQL'],
        screenshots: ['/pj2_1.png', '/pj2_2.png', '/pj2_3.jpg'],
      },
      {
        title: 'Xây dựng landing page portfolio',
        category: 'Frontend',
        period: '06/2026 - 06/2026',
        description:
          'Xây dựng landing page portfolio cá nhân với ReactJS, Tailwind CSS và Vercel, ứng dụng AI trong thiết kế giao diện hiện đại. Tối ưu SEO và 100 điểm trên tất cả các chỉ số Google PageSpeed.',
        badges: ['ReactJS', 'Tailwind CSS', 'Vercel', 'AI', 'SEO'],
        screenshots: ['/pj3_1.jpg', '/pj3_2.jpg'],
      },
    ],
  },

  // ── Contact Section ──
  contact: {
    label: '/ LIÊN HỆ',
    heading: 'Liên Hệ',
    infoTitle: 'Thông Tin Liên Hệ',
    infoDesc:
      'Đừng ngại liên hệ với tôi để hợp tác, trao đổi về dự án, hoặc đơn giản là gửi lời chào.',
    connectGithub: 'Kết nối GitHub',
    copy: 'Sao chép',
    copied: 'Đã sao chép!',
    callNow: 'Gọi ngay',
    formTitle: 'Gửi Tin Nhắn',
    nameLabel: 'Họ và Tên',
    namePlaceholder: 'Nguyễn Văn A',
    emailLabel: 'Email hoặc SĐT',
    emailPlaceholder: 'example@gmail.com / 0901234567',
    messageLabel: 'Tin Nhắn',
    messagePlaceholder: 'Hãy cho tôi biết về dự án của bạn...',
    submit: 'Gửi Tin Nhắn',
    sending: 'Đang gửi tin nhắn...',
    success: 'Cảm ơn bạn! Tin nhắn đã được gửi thành công.',
    errorEmpty: 'Vui lòng điền đầy đủ thông tin.',
    errorFailed: 'Gửi tin nhắn thất bại. Vui lòng thử lại hoặc sao chép email trực tiếp.',
    copyEmail: 'Sao chép Email',
  },
} as const;
