let pemain = {
    nama : "Andi",
    energi:10,
    makan: function (porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }
}

let pemain2 = {
    nama : "Donny",
    energi:11,
    makan: function (porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }
}

