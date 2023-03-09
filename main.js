let islami = document.querySelector('.islami');
const bukuIslami = document.querySelector('.jumlahBukuIslami');

let informatika = document.querySelector('.informatika');
const bukuInformatika = document.querySelector('.jumlahBukuInformatika');

let cerita = document.querySelector('.cerita');
const bukuCerita = document.querySelector('.jumlahBukuCerita');

let hasil = document.querySelector('#total');

let diskon = document.querySelector('#diskon');

let discount = document.querySelector('#after-discount');

let totalHarga = document.querySelector('#total-harga')

let tax = document.querySelector('#tax')

const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click', function () {
  if (islami.checked === false && informatika.checked === false && cerita.checked === false) {
    alert('Check barang terlebih dahulu!');
  }

  let hargaBukuIslami = 25000;
  if (islami.checked === true) {
    hargaBukuIslami *= bukuIslami.value;
    hasil.value = hargaBukuIslami;
  }

  let hargaBukuInformatika = 50000;
  if (informatika.checked === true) {
    hargaBukuInformatika *= bukuInformatika.value;
    hasil.value = hargaBukuInformatika;
  }

  let hargaBukuCerita = 15000;
  if (cerita.checked === true) {
    hargaBukuCerita *= bukuCerita.value;
    hasil.value = hargaBukuCerita;
  }



  if (islami.checked === true && informatika.checked === true && cerita.checked === true) {
    hasil.value = hargaBukuIslami + hargaBukuInformatika + hargaBukuCerita;

  } else if (islami.checked === true && informatika.checked === true) {
    hasil.value = hargaBukuIslami + hargaBukuInformatika;

  } else if (islami.checked === true && cerita.checked === true) {
    hasil.value = hargaBukuIslami + hargaBukuCerita;

  } else if (informatika.checked === true && cerita.checked === true) {
    hasil.value = hargaBukuInformatika + hargaBukuCerita;
  }


  if (hasil.value >= 150000) {
    diskon.value = 30
  } else if (hasil.value >= 100000) {
    diskon.value = 25;
  } else if (hasil.value >= 75000) {
    diskon.value = 20;
  } else if (hasil.value >= 50000) {
    diskon.value = 10;
  }

  if (hasil.value >= 150000) {
    potongan = hasil.value * 30 / 100;
    discount.value = hasil.value - potongan;
  } else if (hasil.value >= 100000) {
    potongan = hasil.value * 25 / 100;
    discount.value = hasil.value - potongan;
  } else if (hasil.value >= 75000) {
    potongan = hasil.value * 20 / 100;
    discount.value = hasil.value - potongan;
  } else if (hasil.value >= 50000) {
    potongan = hasil.value * 10 / 100;
    discount.value = hasil.value - potongan;
  }

  tax.value = hasil.value * 10 / 100

  if (diskon.value > 5) {
    return totalHarga.value = parseFloat(discount.value) + parseFloat(tax.value)
  } else {
    return totalHarga.value = parseFloat(hasil.value) + parseFloat(tax.value)

  }

}
);

