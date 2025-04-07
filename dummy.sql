-- PROJECTS UNTUK USER 1
INSERT INTO projects (id, title, description, icon, priority, status, visibility, deadline, user_id, created_at, updated_at, deleted_at)
VALUES
(1, 'Website Portfolio', 'Membangun website pribadi untuk menampilkan karya dan profil profesional.', '💼', 'high', 'in_progress', 'public', '2025-05-01', 1, NOW(), NOW(), NULL),
(2, 'Aplikasi To-Do', 'Aplikasi sederhana untuk mengatur tugas harian dengan fitur drag-and-drop.', '✅', 'medium', 'pending', 'private', '2025-05-10', 1, NOW(), NOW(), NULL),
(3, 'Toko Online Mini', 'Membuat e-commerce sederhana dengan Laravel dan Vue.', '🛒', 'high', 'review', 'public', '2025-06-01', 1, NOW(), NOW(), NULL),
(4, 'Landing Page Event', 'Desain dan koding halaman event workshop coding.', '📢', 'low', 'completed', 'public', '2025-04-25', 1, NOW(), NOW(), NULL),
(5, 'Blog Pribadi', 'Sistem blogging dengan fitur Markdown dan tag.', '📝', 'medium', 'pending', 'private', '2025-05-15', 1, NOW(), NOW(), NULL),
(6, 'Dashboard Admin', 'Buat dashboard admin untuk manajemen data pengguna.', '📊', 'urgent', 'in_progress', 'private', '2025-05-03', 1, NOW(), NOW(), NULL),
(7, 'API Mahasiswa', 'REST API CRUD data mahasiswa untuk tugas sekolah.', '🔧', 'medium', 'completed', 'public', '2025-04-28', 1, NOW(), NOW(), NULL),
(8, 'Sistem Login Register', 'Modul autentikasi lengkap menggunakan Laravel Breeze.', '🔐', 'medium', 'pending', 'private', '2025-05-06', 1, NOW(), NOW(), NULL),
(9, 'Website Portofolio Klien', 'Project freelance untuk buat website klien UKM.', '🖥️', 'high', 'review', 'public', '2025-05-30', 1, NOW(), NOW(), NULL),
(10, 'Aplikasi Pengingat Jadwal', 'Aplikasi berbasis web untuk mengingatkan jadwal harian.', '⏰', 'medium', 'pending', 'private', '2025-05-20', 1, NOW(), NOW(), NULL);

INSERT INTO tasks (title, description, icon, priority, status, visibility, deadline, project_id, created_at, updated_at, deleted_at)
VALUES
('Buat Wireframe', 'Desain wireframe awal untuk halaman utama dan kontak.', '🧩', 'medium', 'completed', 'private', '2025-04-10', 1, NOW(), NOW(), NULL),
('Implementasi Halaman Utama', 'Koding halaman utama dengan HTML, Tailwind CSS, dan animasi dasar.', '💻', 'high', 'in_progress', 'public', '2025-04-15', 1, NOW(), NOW(), NULL),
('Integrasi Form Kontak', 'Gunakan Laravel untuk mengirim data kontak via email.', '📨', 'high', 'pending', 'private', '2025-04-20', 1, NOW(), NOW(), NULL);
