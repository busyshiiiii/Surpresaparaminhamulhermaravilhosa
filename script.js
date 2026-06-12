
let mensagens = [];
function checkOrientation() {

  const rotateMessage = document.getElementById('rotateMessage');
  const main = document.getElementById('mainContent');

  if (
    window.matchMedia("(max-width: 768px) and (orientation: portrait)").matches
  ) {

    rotateMessage.style.display = 'flex';
    main.style.display = 'none';

  } else {

    rotateMessage.style.display = 'none';
    main.style.display = 'flex';

  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

checkOrientation();





const snoopy = document.getElementById('snoopy');

let podeClicar = true;
snoopy.addEventListener('click', async () => {

  if (!podeClicar) return;
const hint =
  document.getElementById('hintSnoopy');

if (hint) {

  hint.style.animation = 'none';

  hint.style.opacity = '1';

  requestAnimationFrame(() => {

    hint.style.transition = 'opacity 2s ease';

    hint.style.opacity = '0';

  });

  setTimeout(() => {

    hint.remove();

  }, 2000);

}
  podeClicar = false;
snoopy.src = 'snoopy corre.gif';


  snoopy.style.transition = 'transform 1.2s ease';

  snoopy.style.transform = 'translateX(1200px)';



  await new Promise(resolve => setTimeout(resolve, 1400));


snoopy.style.transition = 'none';

snoopy.style.transform = 'translateX(1400px)';

snoopy.style.opacity = '0';

  await new Promise(resolve => setTimeout(resolve, 1200));

snoopy.style.opacity = '0';

  criarCaixa();

});







function criarCaixa() {

  const giftAntigo = document.getElementById('giftBox');

  if (giftAntigo) {

    giftAntigo.remove();

  }



  const gift = document.createElement('div');

  gift.id = 'giftBox';



  gift.innerHTML = `

    <img
      id="giftImage"
      src='caixa fechada.png'
    >

  `;



  document.body.appendChild(gift);



  void gift.offsetWidth;



  gift.classList.add('gift-voando');



  setTimeout(() => {

    document.getElementById('giftImage').src =
      'caixa aberta.png';



    mostrarTexto();

  }, 1800);

}

function mostrarTexto() {
console.log(mensagens);
  const mensagemAleatoria = mensagens[
    Math.floor(Math.random() * mensagens.length)
  ];



  const texto = document.createElement('div');

  texto.id = 'messageText';



  texto.innerHTML = `

    <div>
      ${mensagemAleatoria}
    </div>

    <button id="closeBox">
      Fechar
    </button>

  `;



  document.body.appendChild(texto);



  setTimeout(() => {

    texto.classList.add('active');

  }, 50);





  document.getElementById('closeBox').addEventListener('click', () => {

   texto.remove();



const gift = document.getElementById('giftBox');

if (gift) {

  const imagem = document.getElementById('giftImage');

  

  imagem.classList.add('gift-caindo');



  setTimeout(() => {

    gift.remove();

  }, 1000);

}


    setTimeout(() => {

  snoopy.style.opacity = '1';

snoopy.src = 'snoopy corre.gif';

  snoopy.style.transition = 'none';

  snoopy.style.transform = 'translateX(-1400px)';



  void snoopy.offsetWidth;



  snoopy.style.transition = 'transform 1.2s ease';

  snoopy.style.transform = 'translateX(0px)';

setTimeout(() => {

  snoopy.src = 'snoopy parado (1).gif';

}, 1200);

  podeClicar = true;

}, 1000);

  });

}
setInterval(() => {

  const particle = document.createElement('div');

  particle.classList.add('particle');



  particle.style.left = Math.random() * window.innerWidth + 'px';

  particle.style.bottom = '-10px';



  const tamanho = 1 + Math.random() * 5;

  particle.style.width = tamanho + 'px';

  particle.style.height = tamanho + 'px';



  const duracao = 8 + Math.random() * 10;

  particle.style.animationDuration = duracao + 's';



 const opacidade = 0.03 + Math.random() * 0.35;

  particle.style.background =
    `rgba(255,255,255,${opacidade})`;



  document.body.appendChild(particle);



  setTimeout(() => {

    particle.remove();

  }, duracao * 1000);

}, 120);
const audio = document.getElementById('bgMusic');

const cds = document.querySelectorAll('.cd');
let cdAtual = null;
cds.forEach(cd => {

  cd.addEventListener('click', () => {

    const musica =
      cd.getAttribute('data-musica');

 if (cdAtual && cdAtual !== cd) {

  cdAtual.classList.remove('girando');

  cdAtual.classList.add('cd-parando');

  setTimeout(() => {

    cdAtual.classList.remove('cd-parando');

  }, 700);

}

    cdAtual = cd;

    cd.classList.remove('cd-parando');

    cd.classList.add('cd-tocando');

    audio.src = musica;

    audio.volume = 0.5;

    audio.play();

    criarParticulasCD(cd);

  });

});
function criarParticulasCD(cd) {

  const rect = cd.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {

    const petala = document.createElement('div');

    petala.classList.add('petala');

    petala.style.left =
      rect.left + rect.width / 2 + 'px';

    petala.style.top =
      rect.top + rect.height / 2 + 'px';

    const x =
      (Math.random() - 0.5) * 140 + 'px';

    const y =
      (Math.random() - 0.5) * 140 + 'px';

    petala.style.setProperty('--x', x);

    petala.style.setProperty('--y', y);

    document.body.appendChild(petala);

    setTimeout(() => {

      petala.remove();

    }, 1200);

  }

}

const flores = document.querySelectorAll('.flor');

flores.forEach(flor => {

  flor.addEventListener('click', () => {

    flor.classList.remove('flor-squish');

    void flor.offsetWidth;

    flor.classList.add('flor-squish');



    criarPetalas(flor);

  });

});



function criarPetalas(flor) {

  const rect = flor.getBoundingClientRect();



  for (let i = 0; i < 14; i++) {

    const petala = document.createElement('div');

    petala.classList.add('petala');


petala.style.left =
  rect.left + (rect.width * 0.42) + 'px';

petala.style.top =
  rect.top + (rect.height * 0.42) + 'px';



    const x =
      (Math.random() - 0.5) * 220 + 'px';

    const y =
      (Math.random() - 0.5) * 220 + 'px';



    petala.style.setProperty('--x', x);
    petala.style.setProperty('--y', y);



    document.body.appendChild(petala);



    setTimeout(() => {

      petala.remove();

    }, 1200);

  }
}
function criarParticulasCD(cd) {

  const rect = cd.getBoundingClientRect();

  for (let i = 0; i < 10; i++) {

    const petala = document.createElement('div');

    petala.classList.add('petala');

    petala.style.left =
      rect.left + rect.width / 2 + 'px';

    petala.style.top =
      rect.top + rect.height / 2 + 'px';

    const x =
      (Math.random() - 0.5) * 140 + 'px';

    const y =
      (Math.random() - 0.5) * 140 + 'px';

    petala.style.setProperty('--x', x);
    petala.style.setProperty('--y', y);

    document.body.appendChild(petala);

    setTimeout(() => {

      petala.remove();

    }, 1200);

  }

}
async function carregarMensagens() {

  try {

    const resposta =
      await fetch('mensagens.txt');

    const texto =
      await resposta.text();

    mensagens = texto
      .split(';')
      .map(m => m.trim())
      .filter(m => m.length > 0);

    console.log(mensagens);

  } catch (erro) {

    console.log('Erro ao carregar mensagens:', erro);

  }

}
window.onload = async () => {

  await carregarMensagens();

};
window.onload = async () => {

  console.log('Carregando mensagens...');

  await carregarMensagens();

  console.log('Mensagens carregadas:', mensagens);

};

function verificarTelaCheia() {

  const aviso =
    document.getElementById('fullscreenHint');

  const emTelaCheia =
    window.innerHeight === screen.height;

  if (emTelaCheia) {

    aviso.style.opacity = '0';

  } else {

    aviso.style.opacity = '1';

  }

}
setInterval(verificarTelaCheia, 500);
