// tara.js — Scripts personalizados do site Naruto Wiki

// tara.js — Scripts personalizados do site Naruto Wiki

// ═══════════════════════════════════════
// EFEITO DO CURSOR PERSONALIZADO
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const trail = document.querySelector('.cursor-trail');
    
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        setTimeout(() => {
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
        }, 80);
    });

    document.querySelectorAll('a, button, .personagem-card, .modal-close, .img-capa-fixa, .img-infobox, .img-char-card, .img-galeria').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
});

// ═══════════════════════════════════════
// SISTEMA DE ABAS (MENU DE PERSONAGENS)
// ═══════════════════════════════════════
function abrirPersonagem(charId) {
    const paineis = document.querySelectorAll('.char-panel');
    paineis.forEach(painel => {
        painel.classList.remove('active-panel');
    });

    const botoes = document.querySelectorAll('.char-nav-btn');
    botoes.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(charId).classList.add('active-panel');
    event.currentTarget.classList.add('active');
}

// ═══════════════════════════════════════
// ALTERNADOR DE IMAGENS DOS PERSONAGENS
// ═══════════════════════════════════════
function alternarImagem(btn) {
    const imgElement = btn.previousElementSibling;
    const tipoAtual = imgElement.getAttribute('data-current-type') || 'anime';
    
    const imgAnime = imgElement.getAttribute('data-anime');
    const imgManga = imgElement.getAttribute('data-manga');

    if (tipoAtual === 'anime') {
        imgElement.setAttribute('data-current-type', 'manga');
        imgElement.src = imgManga; 
        btn.textContent = 'Ver Anime';
    } else {
        imgElement.setAttribute('data-current-type', 'anime');
        imgElement.src = imgAnime; 
        btn.textContent = 'Ver Mangá';
    }
}

// ═══════════════════════════════════════
// ALTERNADOR DE IMAGEM DA INFOBOX (SOBRE)
// ═══════════════════════════════════════
function alternarBox(btn) {
    const boxImg = document.getElementById('naruto-box-img');
    const tipoAtual = boxImg.getAttribute('data-current-type') || 'anime';
    
    const imgAnime = boxImg.getAttribute('data-anime');
    const imgManga = boxImg.getAttribute('data-manga');

    if (tipoAtual === 'anime') {
        boxImg.setAttribute('data-current-type', 'manga');
        boxImg.src = imgManga;
        btn.textContent = 'Ver Anime';
    } else {
        boxImg.setAttribute('data-current-type', 'anime');
        boxImg.src = imgAnime;
        btn.textContent = 'Ver Mangá';
    }
}

// ═══════════════════════════════════════
// SISTEMA DE EXPANDIR IMAGENS (MODAL FANDOM)
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    
    // Seleciona as imagens que podem ser expandidas
    const imagens = document.querySelectorAll('.img-capa-fixa, .img-infobox, .img-char-card, .img-galeria');

    imagens.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src; // Pega o link exato da imagem clicada
        });
    });

    // Fecha o modal se clicar fora da imagem ou no 'X'
    modal.addEventListener('click', function(e) {
        if (e.target !== modalImg) {
            fecharModal();
        }
    });
});

function fecharModal() {
    const modal = document.getElementById("image-modal");
    modal.classList.remove('show');
}