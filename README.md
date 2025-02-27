# Laporan Praktikum

|           | Pem. Berbasis Framework 2025 |
| --------- | ---------------------------- |
| **NIM**   | 244107027004                 |
| **Nama**  | Rafio Sadani                 |
| **Kelas** | TI - 4K                      |

## Langkah-Langkah Praktikum

1. Membuat dan menambahkan component `Header`, `Main`, dan `Footer` ke dalam file App.js.
   ![Hasil Tampilan Component Header, Main, dan Footer](public/image-docs/practical-steps/create-header-main-footer.png "Hasil Tampilan Component Header, Main, dan Footer")

2. Membuat component `Counter` interaktif yang menggunakan state untuk menyimpan nilai, di mana setiap kali tombol "Tambah" diklik, nilainya akan meningkat / bertambah.
   ![Hasil Tampilan Component Counter Interaktif menggunakan State](public/image-docs/practical-steps/create-counter-interaktif-with-state.png "Hasil Tampilan Component Counter Interaktif menggunakan State")

3. Membuat component `Greeting` yang menggunakan props untuk meneruskan / mengirim data dari parent ke child component.
   ![Hasil Tampilan Component Greeting menggunakan Props](public/image-docs/practical-steps/create-greeting-with-props.png "Hasil Tampilan Component Counter Interaktif menggunakan State")

4. Membuat compenent `Example` untuk menangani pembaruan dan tampilan state `name`, `age`, dan `email` berdasarkan input yang diberikan.
   ![Hasil Tampilan Component Example menggunakan State](public/image-docs/practical-steps/create-example-update-value-with-state.png "Hasil Tampilan Component Example menggunakan State")

---

## Tugas Praktikum

1. Buat komponen baru bernama TodoList yang menampilkan daftar tugas (todo list). Gunakan state untuk mengelola daftar tugas dan props untuk mengirim data tugas ke komponen anak.
2. Tambahkan fitur untuk menambahkan tugas baru ke dalam daftar menggunakan form input.
3. Implementasikan fitur untuk menghapus tugas dari daftar.

## Jawaban Tugas Praktikum

1. Membuat component `ToDoList` untuk mengelola dan menampilkan daftar tugas, serta component `TaskItem` untuk menampilkan tugas secara terpisah menggunakan Props.
   ![Membuat Component ToDoList](public/image-docs/practical-tests/create-component-todolist.png "Membuat Component ToDoList")
   ***
   ![Membuat Component TaskItem](public/image-docs/practical-tests/create-component-taskitem.png "Membuat Component TaskItem")
2. Menggunakan state di `TodoList` untuk menyimpan daftar tugas dan menambahkan fitur form input agar pengguna dapat menambahkan tugas baru.
   ![Mengelola daftar tugas menggunakan State di Component ToDoList](public/image-docs/practical-tests/manage-state-new-task.png "Mengelola daftar tugas menggunakan State di Component ToDoList")

   ***

   ![Menambahkan Form Input untuk menambah tugas baru](public/image-docs/practical-tests/form-input-new-task.png "Menambahkan Form Input untuk menambah tugas baru")

   ***

   ![Hasil Menambahkan Form Input dan Button Add Task](public/image-docs/practical-tests/result-point-two.png "Hasil Menambahkan Form Input dan Button Add Task")

3. Mengimplementasikan fitur yang memungkinkan pengguna menghapus tugas dari daftar, sehingga daftar tugas tetap terorganisir sesuai kebutuhan.
   ![Menambahkan fitur untuk menghapus tugas dari daftar](public/image-docs/practical-tests/handle-remove-task.png "Menambahkan fitur untuk menghapus tugas dari daftar")

   ***

   ![Mengimplementasikan fitur untuk menghapus tugas dari daftar](public/image-docs/practical-tests/use-handle-remove-task.png "Mengimplementasikan fitur untuk menghapus tugas dari daftar")

   ***

   ![Hasil Implepmentasi fitur hapus tugas dari daftar](public/image-docs/practical-tests/result-point-three.png "Hasil Implepmentasi fitur hapus tugas dari daftar")

---

## Hasil Akhir Tampilan Implementasi Todo List

Component `TodoList` dan `TaskItem` telah diimplementasikan untuk membuat daftar tugas yang dinamis, menggunakan state untuk mengelola tugas dan props untuk meneruskan data. Fitur penambahan dan penghapusan tugas memungkinkan pengguna mengelola daftar dengan lebih mudah. Hasil implementasi dapat dilihat sebagai berikut.
![Hasil Akhir Tampilan Implementasi TodoList](public/image-docs/practical-tests/final-result-todolist.png "Hasil Akhir Tampilan Implementasi TodoList")
