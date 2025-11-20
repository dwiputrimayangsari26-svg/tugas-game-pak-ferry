function Pemain(nama, energi) {

    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);

    }

    this.damage = function (attack) {

        this.energi -= attack;

        console.log(`Halo ${this.nama}, energi berkurang`);

    }

    setInterval(() => {

        console.log(this.energi++);

    }, 5000);

}

let pemain1 = new Pemain('Andi', 10);

let pemain2 = new Pemain('Donny', 11);