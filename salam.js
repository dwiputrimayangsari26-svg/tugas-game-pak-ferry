function ucapanSalam(wkt) {
    return function (nama) {
        console.log(`Hallo ${nama}, Selamat ${wkt} semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapanSalam('pagi');
let selamatSiang = ucapanSalam('siang');
let selamatMalam = ucapanSalam('malam');

selamatPagi('Putri');
