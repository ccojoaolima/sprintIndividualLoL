let login_usuario;
let nome_usuario;
let main_usuario1;
let main_usuario2;
let main_usuario3;
let campeao1;
let campeao2;
let campeao3;
let verificaOtp;

var listaCampeoes =["Aatrox","Akali","Camille","Dr. Mundo","Fiora"
,"Gangplank","Garen","Gnar","Gragas","Gwen","Heimerdinger","Illaoi"
,"Irelia","Jax","Jayce","Kayle","Kennen","Kled","Malphite","Maokai"
,"Mordekaiser","Nasus","Ornn","Pantheon","Poppy","Quinn"
,"Renekton","Rengar","Rumble","Sett","Shen","Singed","Sion"
,"Sylas","Teemo","Trundle","Tryndamere","Vayne","Vladimir","Volibear","Wukong"
,"Yasuo","Yone","Yorick"];

function redirecionar_login() {
    window.location.href = 'login.html';
}

function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    main_usuario1 = sessionStorage.maestria1;
    main_usuario2 = sessionStorage.maestria2;
    main_usuario3 = sessionStorage.maestria3;
    campeao1 = sessionStorage.campeao1;
    campeao2 = sessionStorage.campeao2;
    campeao3 = sessionStorage.campeao3;
    verificaOtp = sessionStorage.verificaOtp;
    
    
    var posicaoVetorCampeao1 = campeao1 -3 ;
    var posicaoVetorCampeao2 = campeao2 -3;
    var posicaoVetorCampeao3 = campeao3 -3;
    
    //com base no vetor puxaremos o nome do campeao
    var nomeChamp1 = listaCampeoes[posicaoVetorCampeao1];
    var nomeChamp2 = listaCampeoes[posicaoVetorCampeao2];
    var nomeChamp3 = listaCampeoes[posicaoVetorCampeao3];

    
    if (login_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = login_usuario;
        tdMain1.innerHTML = main_usuario1;
        tdMain2.innerHTML = main_usuario2;
        tdMain3.innerHTML = main_usuario3;
       
        tdChamp1.innerHTML = nomeChamp1;
        tdChamp2.innerHTML = nomeChamp2;
        tdChamp3.innerHTML = nomeChamp3;
        
        // divUser.innerHTML =app.use(express.static('../public/campeoes/rumble.jpg'));

        tdOtp.innerHTML = verificaOtp;
        


        


        validar_sessao();
    }
    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });    
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}