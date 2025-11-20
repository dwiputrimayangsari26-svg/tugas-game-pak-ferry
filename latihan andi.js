function pemain(nama, energi) {
    let p = {};
    p.nama = nama;
    p.energi = energi;

    p.makan = function(porsi) {
        this.energi += porsi;
        tulisLog(`${this.nama} makan +${porsi} energi 🍗`);
    }

    p.damage = function(attack) {
        this.energi -= attack;
        tulisLog(`${this.nama} diserang -${attack} energi 💥`);
    }

    return p;
}

let pemain1 = pemain("Mas", 100);
let pemain2 = pemain("Abang", 100);

window.onload = () => updateUI();

function updateUI() {
    document.getElementById("nama1").innerText = pemain1.nama;
    document.getElementById("energi1").innerText = pemain1.energi;

    document.getElementById("nama2").innerText = pemain2.nama;
    document.getElementById("energi2").innerText = pemain2.energi;

    document.getElementById("hp1").style.width = pemain1.energi + "%";
    document.getElementById("hp2").style.width = pemain2.energi + "%";
}

function tulisLog(teks) {
    let log = document.getElementById("log");
    log.innerHTML += teks + "<br>";
    log.scrollTop = log.scrollHeight;
}

function efekKena(id) {
    let box = document.getElementById(id);
    box.classList.add("hit-effect");
    setTimeout(() => box.classList.remove("hit-effect"), 300);
}

// Player 1 actions
function makan1() {
    pemain1.makan(10);
    updateUI();
}

function serang1() {
    pemain2.damage(15);
    efekKena("box2");
    updateUI();
}

// Player 2 actions
function makan2() {
    pemain2.makan(10);
    updateUI();
}

function serang2() {
    pemain1.damage(15);
    efekKena("box1");
    updateUI();
}
