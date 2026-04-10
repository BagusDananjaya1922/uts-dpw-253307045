const btn = document.getElementById("btn");

if(btn){
btn.onclick = function(){

    let nama = document.getElementById("nama").value;
    let nik = document.getElementById("nik").value;
    let jalur = document.getElementById("jalur").value;

    if(nama.length < 3){
        show("Nama kurang");
        return;
    }

    if(!/^\d{16}$/.test(nik)){
        show("NIK harus 16 digit");
        return;
    }

    if(jalur == ""){
        show("Pilih jalur");
        return;
    }

    show("Berhasil daftar ✅");
}
}

function show(msg){
    let t = document.getElementById("toast");
    t.innerText = msg;
    t.className = "show";

    setTimeout(()=> t.className="",3000);
}

const form = document.getElementById("formPPDB");
const notif = document.getElementById("notif");

function showNotif(message, type){
    notif.innerText = message;
    notif.className = "notif show " + type;

    setTimeout(() => {
        notif.classList.remove("show");
    }, 3000);
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nik = document.getElementById("nik").value.trim();
    const sekolah = document.getElementById("sekolah").value.trim();
    const wa = document.getElementById("wa").value.trim();

    // VALIDASI
    if(nama === "" || nik === "" || sekolah === "" || wa === ""){
        showNotif("Semua field wajib diisi!", "error");
        return;
    }

    if(nik.length !== 16 || isNaN(nik)){
        showNotif("NIK harus 16 digit angka!", "error");
        return;
    }

    if(wa.length < 10){
        showNotif("Nomor WhatsApp tidak valid!", "error");
        return;
    }

    // SUKSES
    showNotif("Pendaftaran berhasil dikirim!", "success");

    form.reset();
});