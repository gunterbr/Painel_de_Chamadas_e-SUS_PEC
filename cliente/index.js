//Relógio
const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0];
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hour = hours < 10 ? `0${hours}` : hours;
    const minute = minutes < 10 ? `0${minutes}` : minutes;
    const second = seconds < 10 ? `0${seconds}` : seconds;
    clock.innerHTML = `${hour}:${minute}:${second}`;
};
setInterval(() => {
      getHours()
}, 1000);

//Carregamento do JSON data.json com o local de atendimento
async function fetchData() {
    try {
        const timestamp = new Date().getTime();// Obtém o timestamp atual
        const data = await fetch(`data.json?timestamp=${timestamp}`);// Adiciona o parâmetro de consulta único
        const config = await fetch(`config.json?timestamp=${timestamp}`);// Adiciona o parâmetro de consulta único
        const resData = await data.json();
        const resConfig = await config.json();
        return { resData, resConfig };
    } catch (error) {
        throw new Error('Erro ao carregar os arquivos JSON:', error);
    }
};
//Armazenamento da variável
window.addEventListener('DOMContentLoaded', async function() {
    try {
        const { resData, resConfig } = await fetchData();
        window.data = resData;
        window.config = resConfig;

        // URL do servidor WebSocket
        window.serverUrl = 'ws://' + resConfig.server_host + ':' + resConfig.server_port;
        connect();
    } catch (error) {
        console.log('Erro ao carregar o arquivo data.json:', error);
    }
});

// Função para calcular a diferença de segundos entre duas horas
function calcularDiferencaSegundos(i, j) {
    var [horas1, minutos1, segundos1] = i.split(":");
    var [horas2, minutos2, segundos2] = j.split(":");
    var totalSegundos1 = Number(horas1) * 3600 + Number(minutos1) * 60 + Number(segundos1);
    var totalSegundos2 = Number(horas2) * 3600 + Number(minutos2) * 60 + Number(segundos2);
    return totalSegundos2 - totalSegundos1;
}

// Cria uma instância do WebSocket
let socket = null;
let msg = 0;

//Click send Unidade
function sendButton(q) {
    msg = q;
    if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(q);
    } else {
        console.log('A conexão não está aberta. Mensagem não enviada.');
    }

    //Carregando...
    $('#r').html('Carregando informações...');
    
    //Botão mudar unidade
    $('#change').html('<a href=""><i class="fa fa-sign-out" aria-hidden="true"></i></a>');
    
    //Unidade
    let unidade = document.getElementById('co_seq_unidade_'+q).value;
    $('#u').html('\
        <div class="row w-100 h-100">\
            <div class="col-12 w-100">\
                <div class="d-flex h-100 justify-content-center align-items-center text-center">'+unidade+'</div>\
            </div>\
        </div>\
    ');
};

//Conexão do websocket
function connect() {
    socket = new WebSocket(window.serverUrl);
    
    // Evento disparado quando a conexão é estabelecida
    socket.onopen = function(event) {
        $('#r').html('Selecione uma Unidade de Saúde.');
        console.log('Conexão estabelecida.');
        if(msg !== 0) {
            //Reenvia o id da Unidade em caso de reconexão com o servidor
            socket.send(msg);
        }
    };
    
    // Evento disparado quando uma mensagem é recebida
    socket.onmessage = function(event) {
        const message = event.data;
        //console.log('Mensagem recebida:', message);
        
        // Faz o parsing do JSON para um array de objetos JavaScript
        const dataArray = JSON.parse(message);
        
        //Criando elementos no DOM
        let p = document.createElement('div');
        p.classList.add('row','h-100','pt-2','pb-2');
        let b = document.createElement('div');
        b.classList.add('row','h-100','pt-2','pb-2');
        let l = document.createElement('div');
        l.classList.add('row','pt-2','pb-2');

        //Percorre os dados recebidos por JSON
        dataArray.forEach(function(obj, index) {

            //Relaciona o profissional com o local, do arquivo JSON
            const matchingObj = window.data.find(item => item.cod === obj.co_seq_prof);
            let salaDefault = '';
            if (matchingObj) {
                salaDefault = matchingObj.local;
            }

            // Variável hora1 recebida do servidor
            var hora1 = obj.hour_init;
            // Obtendo a hora atual do cliente
            var dataAtual = new Date();
            var horaAtual = dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();
            // Comparando a diferença de três segundos
            var diff = calcularDiferencaSegundos(hora1, horaAtual);
            
            // Acessa os valores do objeto e os exibe
            let span = document.createElement('div');
            let card = document.createElement('div');
            card.className = 'card w-100 p-2 mt-2 mb-2 justify-content-center';
            span.appendChild(card);
            
            let divCidadao = document.createElement('div');
            divCidadao.className = 'cidadao';
            divCidadao.innerHTML  = '<i class="fa fa-user"></i> ' + obj.no_cidadao;
            card.appendChild(divCidadao);
            
            let divProfissional = document.createElement('div');
            divProfissional.className = 'profissional';
            divProfissional.innerHTML = '<i class="fa fa-user-md"></i> ' + obj.no_profissional;
            card.appendChild(divProfissional);
            
            let divLocal = document.createElement('div');
            divLocal.className = 'card local_tipo_hora justify-content-center p-2';
            divLocal.innerHTML = '\
            <div id="local">' + salaDefault + '</div>\
            <div id="tipo">' + obj.no_tipo_atend_prof + '</div>\
            ';
            card.appendChild(divLocal);
            
            let divHora = document.createElement('div');
            divHora.className = 'hora';
            divHora.innerHTML = '<div id="hora"><i class="fa fa-clock-o" aria-hidden="true"></i> ' + obj.hour_init + '</div>';
            divLocal.appendChild(divHora);
            
            if (index < 2) {
                span.classList.add('p', 'd-flex', 'col-12', 'col-lg-6', 'justify-content-center');
                p.appendChild(span);
                divProfissional.classList.add('p-4');
                divCidadao.classList.add('p-4');

                //Incluir classe para novo cidadão
                //Anunciar chamados
                if (diff > 0 && diff < 6) {
                    card.classList.add('novo-cidadao');
                    var texto = obj.no_cidadao + '. ' + salaDefault + '.';
                    var utterance = new SpeechSynthesisUtterance(texto);
                    // Definir voz (opcional)
                    utterance.voice = speechSynthesis.getVoices()[0]; // Altere o índice para a voz desejada
                    // Iniciar a leitura
                    speechSynthesis.speak(utterance);

                    //Disparo do alerta sonoro
                    //setTimeout(() => {
                    //    // Reproduzir alerta sonoro para cada informação
                    //    var alertaSonoro = new Audio('sound1.mp3');
                    //    alertaSonoro.play();
                    //}, index * 2000);
                }
            } else if (index < 6) {
                span.classList.add('b', 'd-flex', 'col-12', 'col-lg-6', 'justify-content-center');
                b.appendChild(span);
                divProfissional.classList.add('p-1');
                divCidadao.classList.add('p-1');
            } else {
                span.classList.add('l', 'justify-content-center');
                l.appendChild(span);
                divProfissional.classList.add('p-1');
                divCidadao.classList.add('p-1');
            }
        });

        // Insere os grupos no DOM
        $('#r').html('ÚLTIMOS CHAMADOS');
        $('#a').html('CHAMADOS RECENTES E NÃO ENCERRADOS');
        $('#p').html(p);
        $('#b').html(b);
        $('#l').html(l);
    };
    
    // Evento disparado quando ocorre um erro na conexão
    socket.onerror = function(error) {
        console.error('Erro na conexão:', error);
    };
      
    // Evento disparado quando a conexão é fechada
    socket.onclose = function(event) {
        $('#r').html('Serviço indisponível.');
        $('#p').html('');
        $('#b').html('');
        $('#l').html('');
        console.log('Conexão fechada. Tentando reconectar em 5 segundos...');
        setTimeout(function() {
            connect();
        }, 5000);
    };
};