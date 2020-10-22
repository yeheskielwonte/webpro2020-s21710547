/*
 Asynchronous
  Jika pada sync, kode diproses baris perbaris, maka di async kode diproses secara baris perbaris juga. 
  Hah..., maksudnya, lantas perbedaannya apa?

  Dalam skenario-nya, sebenarnya kode async telah diproses, hanya saja sebatas penjadwalan untuk dieksekusi pada tahapan berikutnya. 
  Artinya, kode yang berperilaku async tidak akan langsung dieksekusi, tetapi di skip dan akan melakukan eksekusi baris perintah berikutnya.

 Kapan Menggunakan Async?
  Pemanfaatan async sangat berguna pada saat melakukan operasi-operasi yang tidak harus menunggu proses yang lainnya. 
  Misalnya, memanipulasi DOM ketika melakukan proses ajax.

  Agar bisa memahami, kita perlu mengetahui cara menghandle kode async tersebut dengan cara callback ataupun promises.

 Kesimpulan
  Yang perlu digarisbawahi adalah bagaimana cara kita untuk mengurutkan setiap baris-baris perintah agar dapat diproses dan dieksekusi sesuai tujuan.

  Setiap kode yang akan dituliskan tidak selalu menggunakan synchronous ataupun asynchronous, itu selalu bergantung pada kebutuhan sebuah proses program.
*/

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
