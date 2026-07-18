# Smart Hub Frontend

## Summary

Smart Hub Frontend adalah aplikasi web berbasis React yang digunakan sebagai antarmuka pengguna untuk Smart Hub Management System. Aplikasi ini memungkinkan pengguna mengelola data peralatan (equipment) melalui integrasi REST API dengan backend Laravel menggunakan antarmuka yang responsif dan mudah digunakan.

---

# Technology Stack

## Frontend

- React 19
- Vite
- JavaScript (ES6+)
- React Router DOM
- Axios
- Bootstrap 5
- Bootstrap Icons

## Backend API

- REST API (Laravel)

## Database

- PostgreSQL (diakses melalui REST API Backend)

## AI Recommendation

- Tidak menggunakan fitur AI maupun layanan OpenAI.

---

# Application Flow

Secara umum alur aplikasi adalah sebagai berikut:

1. Pengguna membuka aplikasi melalui browser.
2. Pengguna melakukan proses login.
3. Sistem melakukan autentikasi melalui REST API backend.
4. Setelah berhasil login, pengguna diarahkan ke Dashboard.
5. Pengguna dapat mengakses menu Equipment.
6. Sistem mengambil data equipment dari backend menggunakan REST API.
7. Pengguna dapat melakukan pencarian data equipment.
8. Pengguna dapat menambahkan data equipment baru.
9. Sistem melakukan validasi data melalui backend.
10. Data yang valid disimpan ke database PostgreSQL.
11. Pengguna dapat mengubah informasi equipment yang sudah ada.
12. Setelah proses berhasil, daftar equipment diperbarui sesuai data terbaru.

---

# Main Features

- Authentication (Login)
- Dashboard
- Equipment Management
  - View Equipment List
  - Search Equipment
  - Pagination
  - Add Equipment
  - Edit Equipment
- Form Validation
- Responsive User Interface

---

# Project Structure

```
src
├── api
├── components
├── context
├── hooks
├── layouts
├── pages
│   ├── auth
│   ├── dashboard
│   └── equipment
├── routes
└── services
```

---

# Development Notes

- Frontend berkomunikasi dengan backend menggunakan REST API.
- Seluruh validasi data dilakukan oleh backend Laravel.
- Frontend menampilkan pesan validasi yang dikembalikan oleh API.
- Seluruh proses CRUD menggunakan komunikasi HTTP melalui Axios.

---

# Programming Language

- JavaScript

---

# API Communication

| Method | Endpoint           | Description                                                                                     |
| ------ | ------------------ | ----------------------------------------------------------------------------------------------- |
| POST   | `/login`           | User Authentication                                                                             |
| GET    | `/equipments`      | Get Equipment List                                                                              |
| GET    | `/equipments/{id}` | Get Equipment Detail                                                                            |
| POST   | `/equipments`      | Create Equipment                                                                                |
| PUT    | `/equipments/{id}` | Update Equipment                                                                                |
| DELETE | `/equipments/{id}` | Delete Equipment _(endpoint tersedia, implementasi frontend mengikuti pengembangan berikutnya)_ |

---

# Author

Smart Hub Management System Frontend

Developed for Full Stack Programming Course.
