const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","/","*","-","+","="];
let output = "";

//Menampilkan fungsi/function untuk menghasilkan kalkulasi dari tombol yang di pencet.
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        //Kalo output memiliki %, akan digantikan menjadi bagi 100 sebelum mengevaluasikan.
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue === "DEL"){
        //Kalo DEL dipencet, akan menghilangkan/menghapus 1 karakter terakhir dari output terakhir yang di pencet.
        output = output.toString().slice(0, -1);
    }else {
        //Kalo outputnya sudah kosong dan mengklik tombol specialCHats maka akan melakukan return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
    console.log(btnValue);
}

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})