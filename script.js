var a = document.getElementById('beranda');
var b = document.getElementById('prepare');
var c = document.getElementById('piliJawa');


function cariNilaiCom() {
    var comp = Math.floor(Math.random() * 10);

    if (comp <= 3) {
        comp = 'batu';
    } else if (comp > 3 && comp <= 6) {
        comp = 'kertas';
    } else {
        comp = 'gunting';
    }

    return comp;
}

function mulaiPermainan() {
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';

}

function pilihJawaban() {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
}

function guntingPiliJawa() {
    console.log(cariNilaiCom());
    document.getElementById('batuPiliJawa').style.display = 'none';
    document.getElementById('kertasPiliJawa').style.display = 'none';
    document.getElementById('guntingPiliJawa').style.display = 'none';


    switch (cariNilaiCom()) {
        case 'gunting':
            document.getElementById('hasilPiliJawaGunt').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaGunt').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-kuning">Anda Seri</h3>`;
            break;
        case 'batu':
            document.getElementById('hasilPiliJawaGunt').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaBatu').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-merah">Anda Kalah</h3>`;
            break;
        case 'kertas':
            document.getElementById('hasilPiliJawaGunt').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaKert').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-hijau">Anda Menang</h3>`;
            break;
    }
}

function batuPiliJawa() {
    console.log(cariNilaiCom());
    document.getElementById('batuPiliJawa').style.display = 'none';
    document.getElementById('kertasPiliJawa').style.display = 'none';
    document.getElementById('guntingPiliJawa').style.display = 'none';


    switch (cariNilaiCom()) {
        case 'batu':
            document.getElementById('hasilPiliJawaBatu').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaBatu').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-kuning" >Anda Seri</h3>`;
            break;
        case 'gunting':
            document.getElementById('hasilPiliJawaBatu').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaGunt').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-hijau">Anda Menang</h3>`;
            break;
        case 'kertas':
            document.getElementById('hasilPiliJawaBatu').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaKert').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-merah">Anda Kalah</h3>`;
            break;
    }
}

function kertasPiliJawa() {
    console.log(cariNilaiCom());
    document.getElementById('batuPiliJawa').style.display = 'none';
    document.getElementById('kertasPiliJawa').style.display = 'none';
    document.getElementById('guntingPiliJawa').style.display = 'none';


    switch (cariNilaiCom()) {
        case 'kertas':
            document.getElementById('hasilPiliJawaKert').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaKert').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-kuning" >Anda Seri</h3>`;
            break;
        case 'gunting':
            document.getElementById('hasilPiliJawaKert').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaGunt').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-merah">Anda Kalah</h3>`;
            break;
        case 'batu':
            document.getElementById('hasilPiliJawaKert').style.display = `block`;
            document.getElementById('resetHasil').style.display = `block`;
            document.getElementById('hasilHeadComp').style.display = `block`;
            document.getElementById('hasilCompJawaBatu').style.display = `block`;
            document.getElementById('pembHasil').style.display = `block`;
            document.getElementById('pembHasil').innerHTML = `<h3 class="text-hijau">Anda Menang</h3>`;
            break;
    }
}

function resetPermainan() {
    document.getElementById('batuPiliJawa').style.display = 'block';
    document.getElementById('kertasPiliJawa').style.display = 'block';
    document.getElementById('guntingPiliJawa').style.display = 'block';


    document.getElementById('hasilPiliJawaGunt').style.display = `none`;
    document.getElementById('hasilPiliJawaBatu').style.display = `none`;
    document.getElementById('hasilPiliJawaKert').style.display = `none`;

    document.getElementById('resetHasil').style.display = `none`;
    document.getElementById('hasilHeadComp').style.display = `none`;

    document.getElementById('pembHasil').style.display = `none`;
    
    document.getElementById('hasilCompJawaKert').style.display = `none`;
    document.getElementById('hasilCompJawaBatu').style.display = `none`;
    document.getElementById('hasilCompJawaGunt').style.display = `none`;
}



// var looping = true;
// while (looping) {


//     // menampilkan pilihan player
//     var p = prompt('Pilih: batu, gunting atau kertas ?');


//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.floor(Math.random() * 10);

//     if (comp <= 3) {
//         comp = 'batu';
//     } else if (comp > 3 && comp <= 6) {
//         comp = 'gunting';
//     } else {
//         comp = 'kertas';
//     }

//     // menentukan peraturan
//     var hasil;

//     if (p === comp) {
//         hasil = 'Seri';
//     } else if (p == 'batu') {
//         hasil = (comp == 'gunting') ? 'Menang' : 'Kalah';
//     } else if (p == 'kertas') {
//         hasil = (comp == 'gunting') ? 'Menang' : 'Kalah';
//     } else if (p == 'gunting') {
//         hasil = (comp == 'batu') ? 'Menang' : 'Kalah';
//     } else {
//         hasil = 'Tidak bisa menampilkan hasil, masukan inputan batu, gunting atau kertas!';
//     }

//     // tampilkan hasilnya
//     alert(`Pilihan anda : ${p}
// Pilihan user : ${comp}
// Hasil : ${hasil}.`);

//     //looping
//     looping = confirm('Apakah anda ingin bermain kembali ?');
// }

// alert('Terimakasih sudah bermain.');

