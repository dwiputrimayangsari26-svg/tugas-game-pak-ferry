function produk(nama) {
    return function (harga, spek) {
        console.log(`Produk: ${nama}, dengan spesifikasi ${spek}, dan dijual dengan harga Rp ${harga}`);
    }
}

let LaptopAsus = produk('Asus');
let LaptopAcer = produk('Acer');
let LaptopLenovo = produk('Lenovo');


LaptopAsus('5.000.000', 'Core i3');
LaptopAcer('7.500.000', 'Core i5 - 8GB RAM - SSD 256GB');
LaptopLenovo('10.000.000', 'Ryzen 5 - 16GB RAM - SSD 512GB');
