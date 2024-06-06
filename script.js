const checkNoturno = document.getElementById("check-noturno");
const ativar = document.getElementById("ativar");
const localStorageCheck = localStorage.getItem("modo-noturno-salvar");
checkNoturno.checked = JSON.parse(localStorageCheck);

checkNoturno.addEventListener("change", alterarModo);

function alterarModo() {
    if(checkNoturno.checked === true){
        document.body.classList.add("modo-noturno");
        ativar.textContent = "Ativado";
        }
        else {
        document.body.classList.remove("modo-noturno");
        ativar.textContent = "Desativado";
        }
        localStorage.setItem("modo-noturno-salvar", checkNoturno.checked);
}

alterarModo();