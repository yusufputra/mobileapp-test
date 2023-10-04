This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Answer

## Pertanyaan point A
1. Apakah user dapat melakukan upvote/downvote lebih dari satu di masing masing post?
2. berapa batas maksimal character post yang diperbolehkan?
3. berapa panjang maksimal character comment yang diberikan dari masing masing post?
4. bagaimana susunan post yang tampil di halaman utama? apakah berdasarkan waktu? jumlah upvote/downvote? atau ada faktor lain?

## Pertanyaan point C1

Untuk menerapkan fitur yang menyarankan "orang yang mungkin Anda kenal" berdasarkan koneksi dan komunitas pengguna, ada beberapa pendekatan yang efisien dan dapat diterapkan dalam skala besar dengan mudah. Berikut adalah pendekatan yang dapat diambil:

1. Struktur Data:

Graf Sosial: Gunakan struktur data graf sosial untuk merepresentasikan koneksi antara pengguna. Setiap pengguna akan menjadi simpul dalam graf, dan sisi-sisi menghubungkan pengguna yang saling terhubung.
Daftar Komunitas: Simpan daftar komunitas yang diikuti oleh setiap pengguna. Ini bisa menjadi daftar ID komunitas atau referensi langsung ke objek komunitas.

2. Sistem Rekomendasi:

- Rekomendasikan "orang yang mungkin Anda kenal" berdasarkan beberapa faktor, seperti:

   - Koneksi Langsung: Rekomendasikan pengguna yang terhubung langsung dengan pengguna saat ini.
   - Koneksi Kedua: Rekomendasikan pengguna yang terhubung dengan pengguna saat ini melalui koneksi kedua, yaitu teman dari teman.
   - Komunitas yang Sama: Rekomendasikan pengguna yang juga mengikuti komunitas yang sama dengan pengguna saat ini.
- Berikan bobot pada setiap faktor berdasarkan preferensi pengguna atau sejarah interaksi sebelumnya.

3. Kasus-kasus Ekstrim:

- Tidak ada pengguna/komunitas yang terkait/terkoneksi: Jika tidak ada koneksi atau komunitas yang terkait, maka fitur ini mungkin tidak memberikan rekomendasi yang relevan. Dalam kasus ini, Anda dapat memberikan pilihan umum atau pilihan populer kepada pengguna.

- Terlalu banyak pengguna/komunitas yang terkait/terkoneksi: Jika ada terlalu banyak pengguna atau komunitas yang terkait, gunakan algoritma pemfilteran dan peringkat untuk memprioritaskan rekomendasi yang paling relevan berdasarkan faktor-faktor yang dijelaskan sebelumnya.

4. Pengujian Fitur:

- Uji Akurasi: Evaluasi fitur dengan menggunakan data pengujian yang telah dikumpulkan sebelumnya. Gunakan metrik seperti precision, recall, atau F1-score untuk mengevaluasi performa rekomendasi dan memperbaikinya sesuai kebutuhan.

- Uji A/B: Lakukan percobaan A/B untuk membandingkan kinerja fitur dengan kelompok pengguna kontrol dan eksperimental. Ini akan membantu mencari tahu sejauh mana fitur ini meningkatkan keterlibatan pengguna.

- Pemantauan Penggunaan: Pantau penggunaan fitur secara real-time dan dapatkan umpan balik dari pengguna melalui alat pelaporan atau survei. Hal ini dapat membantu kita dalam meningkatkan kualitas dan relevansi rekomendasi fitur ini.

Dengan mengikuti pendekatan ini, kita akan dapat menerapkan fitur "orang yang mungkin Anda kenal" dengan efisien dan dapat diterapkan dalam skala besar dengan mudah.

## Pertanyaan point C2
1. Membangun Graf Sosial:

- Mulailah dengan membangun graf sosial yang mencakup semua pengguna dan koneksi mereka. Setiap pengguna adalah simpul dalam graf, dan setiap sisi menghubungkan pengguna yang saling terhubung.

- Simpan informasi tentang pengguna dan koneksi mereka, seperti ID pengguna, informasi profil, dan relasi sosial di setiap simpul dan sisi graf.

2. Identifikasi Koneksi Langsung:

- Untuk memberikan saran "orang yang mungkin Anda kenal" berdasarkan koneksi langsung, iterasi melalui setiap sisi graf yang terhubung ke pengguna saat ini.

- Ambil informasi pengguna terhubung dan prioritasnya berdasarkan preferensi pengguna atau aktivitas sebelumnya.

3. Identifikasi Koneksi Kedua:

- Untuk memberikan saran "orang yang mungkin Anda kenal" berdasarkan koneksi kedua, iterasi lagi melalui setiap sisi graf yang terhubung dengan pengguna saat ini.

- Ambil pengguna yang terhubung dengan pengguna terhubung ini sebagai rekomendasi, dan prioritasnya juga berdasarkan preferensi pengguna atau aktivitas sebelumnya.

4. Identifikasi Komunitas yang Sama:

- Untuk memberikan saran "orang yang mungkin Anda kenal" berdasarkan komunitas yang sama, periksa daftar komunitas pengguna saat ini.

- Iterasi melalui pengguna yang mengikuti komunitas yang sama, dan prioritasnya berdasarkan preferensi pengguna atau aktivitas sebelumnya.

5. Pemfilteran dan Peringkat:

- Gunakan algoritma pemfilteran dan peringkat untuk memperbaiki rekomendasi yang dihasilkan berdasarkan preferensi pengguna atau sejarah interaksi sebelumnya.

- Berikan bobot pada setiap faktor rekomendasi, seperti koneksi langsung, koneksi kedua, dan komunitas yang sama.

- Urutkan rekomendasi berdasarkan bobot tertinggi dari faktor-faktor ini atau gunakan metode peringkat lainnya, seperti penggunaan algoritma Machine Learning.

Seluruh algoritma ini dapat dijalankan sebagai sebuah proses otomatis pada backend aplikasi. Ketika pengguna mengakses fitur "orang yang mungkin Anda kenal", aplikasi akan menjalankan algoritma ini dan menghasilkan rekomendasi yang sesuai. Perlu diingat untuk mempertimbangkan efisiensi dan skala saat mengimplementasikan algoritma ini, seperti dengan memanfaatkan teknik indexasi, caching, dan pengolahan paralel untuk meningkatkan kinerja dan skalabilitas.


