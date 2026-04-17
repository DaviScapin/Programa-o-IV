const modal = document.getElementById("modal-galeria");
const imgAmpliada = document.getElementById("img-ampliada");
function abrirModal(caminhoDaImagem) {
  imgAmpliada.src = caminhoDaImagem; 
  modal.showModal(); 
}
function fecharModal() {
  modal.close(); 
}


function enviarFormulario(event) {
  event.preventDefault(); 

  alert("🎀 Mensagem enviada com muito amor e sucesso!");

  event.target.reset(); 
}