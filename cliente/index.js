const _0x4b0066=_0xd9b2;(function(_0x20e0c1,_0x117cf5){const _0x650618=_0xd9b2,_0x1436fe=_0x20e0c1();while(!![]){try{const _0x463944=parseInt(_0x650618(0x18f))/0x1+parseInt(_0x650618(0x165))/0x2+-parseInt(_0x650618(0x133))/0x3*(-parseInt(_0x650618(0x126))/0x4)+parseInt(_0x650618(0x12d))/0x5+-parseInt(_0x650618(0x1bd))/0x6*(-parseInt(_0x650618(0x17b))/0x7)+-parseInt(_0x650618(0x104))/0x8*(parseInt(_0x650618(0x178))/0x9)+parseInt(_0x650618(0x111))/0xa*(-parseInt(_0x650618(0x135))/0xb);if(_0x463944===_0x117cf5)break;else _0x1436fe['push'](_0x1436fe['shift']());}catch(_0x226e80){_0x1436fe['push'](_0x1436fe['shift']());}}}(_0x15d0,0x89008));const historico=JSON[_0x4b0066(0x160)](sessionStorage[_0x4b0066(0x1b8)](_0x4b0066(0x10b)))||[],anunciado=JSON[_0x4b0066(0x160)](sessionStorage['getItem'](_0x4b0066(0x157)))||{};async function fetchData(){const _0x2c8861=_0x4b0066;try{const _0x3ab703=new Date()[_0x2c8861(0x110)](),_0x1f6120=await fetch('data.json?timestamp='+_0x3ab703),_0x30dac2=await fetch(_0x2c8861(0x189)+_0x3ab703),_0x6cc13b=await _0x1f6120['json'](),_0x3dec79=await _0x30dac2[_0x2c8861(0xe3)]();return{'resData':_0x6cc13b,'resConfig':_0x3dec79};}catch(_0x3e8243){throw new Error(_0x2c8861(0x10f),_0x3e8243);}};function _0xd9b2(_0x183f41,_0x377d33){const _0x15d012=_0x15d0();return _0xd9b2=function(_0xd9b20,_0x3d8512){_0xd9b20=_0xd9b20-0xe1;let _0x4afc19=_0x15d012[_0xd9b20];return _0x4afc19;},_0xd9b2(_0x183f41,_0x377d33);}window[_0x4b0066(0x118)]=![],window['addEventListener'](_0x4b0066(0x151),async function(){const _0x842b53=_0x4b0066;try{const {resData:_0x278cb7,resConfig:_0x4e13d0}=await fetchData();window[_0x842b53(0x1b4)]=_0x278cb7,window['config']=_0x4e13d0,window[_0x842b53(0xe5)]=_0x4e13d0[_0x842b53(0xfb)],window['client_pin']=_0x4e13d0[_0x842b53(0x14d)],window['client_id']=window[_0x842b53(0x179)][_0x842b53(0x172)],window[_0x842b53(0x1a9)]['show_clock']&&setInterval(()=>{getHours();},0x3e8),!window['config'][_0x842b53(0x12a)]&&(document[_0x842b53(0x148)]('a')?document['getElementById']('a')[_0x842b53(0x185)]():null,document[_0x842b53(0x148)]('l')?document[_0x842b53(0x148)]('l')['remove']():null),!window[_0x842b53(0x1a9)]['show_listaEspera']&&!window[_0x842b53(0x1a9)][_0x842b53(0x153)]&&(document[_0x842b53(0x148)](_0x842b53(0x184))?document[_0x842b53(0x148)](_0x842b53(0x184))['remove']():null,document[_0x842b53(0x148)](_0x842b53(0xef))?document[_0x842b53(0x148)](_0x842b53(0xef))['classList']['remove'](_0x842b53(0x15a)):null),!window[_0x842b53(0x1a9)][_0x842b53(0x164)]&&(document[_0x842b53(0x148)]('s')?document[_0x842b53(0x148)]('s')[_0x842b53(0x185)]():null,document['getElementById']('h')?document[_0x842b53(0x148)]('h')[_0x842b53(0x185)]():null),!window[_0x842b53(0x1a9)][_0x842b53(0x1ad)]&&(document['getElementById']('b')?document['getElementById']('b')[_0x842b53(0x185)]():null),await connect();}catch(_0x5bf252){console[_0x842b53(0x1c2)](_0x842b53(0x11c),_0x5bf252);}});const getHours=()=>{const _0x5e69f1=_0x4b0066,_0x413b10=document[_0x5e69f1(0x130)](_0x5e69f1(0x112))[0x0],_0x40fa04=new Date(),_0x5ac6bc=_0x40fa04[_0x5e69f1(0x1a7)](),_0x1b44ce=_0x40fa04[_0x5e69f1(0x182)](),_0x388232=_0x40fa04[_0x5e69f1(0x12e)](),_0xb2e5f0=_0x5ac6bc<0xa?'0'+_0x5ac6bc:_0x5ac6bc,_0xeaa7d7=_0x1b44ce<0xa?'0'+_0x1b44ce:_0x1b44ce,_0xc3fa0c=_0x388232<0xa?'0'+_0x388232:_0x388232;_0x413b10&&(_0x413b10[_0x5e69f1(0x17d)]=_0xb2e5f0+':'+_0xeaa7d7+':'+_0xc3fa0c);};function calcularDiferencaSegundos(_0x540c73,_0x585e45){const _0x1fd1a7=_0x4b0066;var [_0xc64a4c,_0x1ab867,_0x2bc5ed]=_0x540c73['split'](':'),[_0x4fe364,_0x100e7a,_0x74452a]=_0x585e45[_0x1fd1a7(0x131)](':'),_0x23073b=Number(_0xc64a4c)*0xe10+Number(_0x1ab867)*0x3c+Number(_0x2bc5ed),_0x10905d=Number(_0x4fe364)*0xe10+Number(_0x100e7a)*0x3c+Number(_0x74452a);return _0x10905d-_0x23073b;}const tag=document[_0x4b0066(0x117)](_0x4b0066(0x113));tag['src']=_0x4b0066(0x115);const firstScriptTag=document['getElementsByTagName'](_0x4b0066(0x113))[0x0];firstScriptTag[_0x4b0066(0x15b)][_0x4b0066(0x1b3)](tag,firstScriptTag);var player;function createYouTubePlayer(){const _0x53ea34=_0x4b0066;let _0x44c57b=window['config'][_0x53ea34(0x1b6)];player=new YT[(_0x53ea34(0xe9))](_0x53ea34(0x174),{'height':'100%','width':_0x53ea34(0x19d),'videoId':_0x44c57b,'events':{'onReady':_0x5cea9d},'playerVars':{'autoplay':0x1,'controls':0x0,'enablejsapi':0x1,'origin':window[_0x53ea34(0xf2)],'fs':0x0,'iv_load_policy':0x3,'loop':0x1,'modestbranding':0x1,'rel':0x0,'showinfo':0x0}});function _0x5cea9d(_0x1a8e7c){const _0x3b3bfc=_0x53ea34;_0x1a8e7c[_0x3b3bfc(0x19e)]['setVolume'](window[_0x3b3bfc(0x1a9)][_0x3b3bfc(0x11d)]),_0x1a8e7c['target'][_0x3b3bfc(0x1c4)]();}}function createLocalPlayer(){const _0x2f1589=_0x4b0066,_0x57fa2d=document[_0x2f1589(0x148)](_0x2f1589(0x174)),_0x5c76b9=window[_0x2f1589(0x1a9)][_0x2f1589(0xf4)],_0xe4b430=_0x5c76b9['split'](',')[_0x2f1589(0xe7)](_0x3ebfa4=>_0x3ebfa4[_0x2f1589(0x102)]());_0x57fa2d['innerHTML']=_0x2f1589(0x18e)+_0xe4b430+'\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Este\x20recurso\x20de\x20mídia\x20é\x20incompatível\x20com\x20esse\x20dispositivo!\x0a\x20\x20\x20\x20</video>\x0a\x20\x20\x20\x20';const _0x3c7fe9=document[_0x2f1589(0x148)](_0x2f1589(0x16e));_0x3c7fe9['volume']=window[_0x2f1589(0x1a9)][_0x2f1589(0x11d)]/0x64,_0x3c7fe9[_0x2f1589(0x183)]();let _0x4de506=0x0;_0x3c7fe9['addEventListener'](_0x2f1589(0x100),_0x40ce08);function _0x40ce08(){const _0x2ce1b1=_0x2f1589;_0x4de506++,_0x4de506>=_0xe4b430[_0x2ce1b1(0x16d)]&&(_0x4de506=0x0),_0x3c7fe9['src']=_0xe4b430[_0x4de506],_0x3c7fe9['play']();}}function createCarousel(){const _0x50af1a=_0x4b0066,_0x2e98e2=document['getElementById'](_0x50af1a(0x174));_0x2e98e2[_0x50af1a(0x17d)]='\x0a\x20\x20\x20\x20<div\x20class=\x22carousel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22carousel-slide\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';const _0x2fa8ec=_0x2e98e2[_0x50af1a(0x147)](_0x50af1a(0x136)),_0x1edbad=_0x2e98e2[_0x50af1a(0x147)](_0x50af1a(0x199)),_0x58d630=window['config'][_0x50af1a(0xe6)][_0x50af1a(0x131)](',');_0x58d630[_0x50af1a(0x162)](_0xa63353=>{const _0x57b8c1=_0x50af1a,_0x5f5d48=document['createElement'](_0x57b8c1(0x12f));_0x5f5d48['src']=_0xa63353,_0x1edbad['appendChild'](_0x5f5d48);});let _0x1d2f5=0x0;function _0x15163d(_0x1aeb0f){const _0x5ddc8d=_0x50af1a,_0x1ea631=_0x2fa8ec[_0x5ddc8d(0xe8)],_0x17ece8=-_0x1aeb0f*_0x1ea631;_0x1edbad[_0x5ddc8d(0x1a6)][_0x5ddc8d(0x181)]=_0x5ddc8d(0x195)+_0x17ece8+_0x5ddc8d(0x106);}function _0x4a6487(){const _0xa6d448=_0x50af1a;_0x1d2f5=(_0x1d2f5+0x1)%_0x58d630[_0xa6d448(0x16d)],_0x15163d(_0x1d2f5);}setInterval(_0x4a6487,0x1388),_0x15163d(_0x1d2f5);}let socket=null,msg=0x0;const newUrl=new URL(window[_0x4b0066(0xf2)]);function sendButton(_0x30582f,_0x4b4d30){const _0xb329c4=_0x4b0066;newUrl[_0xb329c4(0x1a0)][_0xb329c4(0x1b7)]('id',_0x30582f),history[_0xb329c4(0xeb)](null,'',newUrl),msg=_0x30582f;socket&&socket[_0xb329c4(0x17e)]===WebSocket['OPEN']?socket[_0xb329c4(0x120)](JSON[_0xb329c4(0x139)]({'co_unidade':msg,'client_pin':window[_0xb329c4(0x14d)],'in_pin':window[_0xb329c4(0x118)],'client_id':window['client_id']})):console[_0xb329c4(0x1c2)](_0xb329c4(0x154));$('#r')['html'](_0xb329c4(0x155)),$('#change')['html'](_0xb329c4(0x121));let _0x30df8e=_0x4b4d30;$('#u')[_0xb329c4(0x11e)](_0xb329c4(0x1b1)+_0x30df8e+_0xb329c4(0x1a3));};function pacienteJaAnunciado(_0x439adc){const _0x500a03=_0x4b0066,_0x3655c2=sessionStorage[_0x500a03(0x1b8)]('anunciado');if(_0x3655c2){const _0x4c13c8=JSON[_0x500a03(0x160)](_0x3655c2);return _0x4c13c8[''+_0x439adc]===!![];}return![];}function marcarPacienteComoAnunciado(_0x33b8ec){const _0x54ef59=_0x4b0066;anunciado[''+_0x33b8ec]=!![];const _0x55c73c=Object[_0x54ef59(0x1c3)](anunciado);_0x55c73c[_0x54ef59(0x16d)]>0x32&&delete anunciado[_0x55c73c[_0x55c73c[_0x54ef59(0x16d)]-0x1]],sessionStorage['setItem']('anunciado',JSON['stringify'](anunciado));}function pausarVideo(){const _0x41c441=_0x4b0066;if(player)player[_0x41c441(0x180)]()===YT[_0x41c441(0xfc)][_0x41c441(0x13f)]&&player[_0x41c441(0x19c)]();else{if(window[_0x41c441(0x1a9)]['show_ads']&&window['config']['ads_type']===_0x41c441(0xf0)){const _0x10f432=document['getElementById'](_0x41c441(0x16e));_0x10f432[_0x41c441(0x193)]();}}}function reiniciarVideo(){const _0x17af13=_0x4b0066;if(player)player[_0x17af13(0x180)]()!==YT[_0x17af13(0xfc)]['PLAYING']&&player[_0x17af13(0x1c4)]();else{if(window[_0x17af13(0x1a9)][_0x17af13(0x153)]&&window[_0x17af13(0x1a9)][_0x17af13(0xf1)]===_0x17af13(0xf0)){const _0x3ff9c5=document[_0x17af13(0x148)](_0x17af13(0x16e));_0x3ff9c5['play']();}}}let pacienteIndex=0x0;async function chamarPaciente(){const _0x53d767=_0x4b0066;pacienteIndex>=historico[_0x53d767(0x16d)]&&(pacienteIndex=0x0);if(historico[_0x53d767(0x16d)]>0x0){const _0x1093fa=historico[pacienteIndex],_0x2e7394=_0x1093fa[_0x53d767(0x159)]+'_'+_0x1093fa[_0x53d767(0x17f)];if(!pacienteJaAnunciado(_0x2e7394)){pausarVideo(),marcarPacienteComoAnunciado(_0x2e7394);const _0x1f9094=window[_0x53d767(0x1b4)][_0x53d767(0x15f)](_0x4794ea=>_0x4794ea[_0x53d767(0x109)]===_0x1093fa[_0x53d767(0x15d)]);let _0x529398='';_0x1f9094&&(_0x529398=_0x1f9094['ligacao']+'\x20'+_0x1f9094[_0x53d767(0xf0)]);var _0x27b4fa=new Date(),_0x58090e=_0x27b4fa['getHours']()+':'+_0x27b4fa[_0x53d767(0x182)]()+':'+_0x27b4fa[_0x53d767(0x12e)](),_0x6b15ef=calcularDiferencaSegundos(_0x1093fa[_0x53d767(0x17f)],_0x58090e);if(_0x6b15ef<=window[_0x53d767(0x1a9)][_0x53d767(0x17a)]){if(_0x1093fa[_0x53d767(0x1ac)]===0x2||_0x1093fa['st_atend']===0x3||_0x1093fa[_0x53d767(0x1ac)]===0x7){var _0x447682='';window[_0x53d767(0x1a9)][_0x53d767(0x101)]?_0x447682+=_0x1093fa[_0x53d767(0x159)]+'\x20':'',window[_0x53d767(0x1a9)]['anunciar_nome']?_0x447682+=_0x1093fa[_0x53d767(0x196)]+'\x20':'',window['config'][_0x53d767(0x13e)]?_0x447682+=_0x1093fa[_0x53d767(0x177)]+'\x20':'',_0x447682+=window[_0x53d767(0x1a9)][_0x53d767(0x1aa)]+'\x20',_0x447682+=_0x529398;for(let _0xd92854=0x0;_0xd92854<window['config'][_0x53d767(0x158)];_0xd92854++){var _0x52c692=new SpeechSynthesisUtterance(_0x447682);_0x52c692['voice']=speechSynthesis[_0x53d767(0x194)]()[window[_0x53d767(0x1a9)][_0x53d767(0x1bf)]],await new Promise(_0x2d6238=>{const _0x55815e=_0x53d767;_0x52c692[_0x55815e(0x137)]=_0x2d6238,speechSynthesis[_0x55815e(0x114)](_0x52c692);});}}}!speechSynthesis['speaking']&&reiniciarVideo();}pacienteIndex++;}}setInterval(chamarPaciente,0x3e8);function _0x15d0(){const _0x443c39=['Carregando\x20informações...','pt-2','anunciado','qtd_chamadas','co_seq_atend','w60','parentNode','add','co_seq_prof','\x20loca_hora\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','find','parse','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','forEach','col-6','show_historico','1100552WtZcbO','pop','max','no_tipo_atend_prof','ligacao[]','ligacao','hide','d-flex','length','video','addEventListener','error','includes','userAgent','ArrowDown','video-container',')</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27','requestFullscreen','no_social','376983wCOlSW','navigator','tolerancia','6419FdUFJQ','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22','innerHTML','readyState','hour_init','getPlayerState','transform','getMinutes','play','right','remove','risco0','value','history','config.json?timestamp=','</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20local_tipo_hora\x20justify-content-center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22local\x22>','#pinModal','Conexão\x20estabelecida.','_0_no_atend','\x0a\x20\x20\x20\x20<video\x20id=\x27video\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<source\x20src=\x27','1025178wQmrEl','mostrat_tipoAtendimento','alert\x20alert-warning','name[]','pause','getVoices','translateX(','no_cidadao','Erro\x20na\x20conexão:','_0_st_atend','.carousel-slide','risco8',')</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pb-1\x20profissional\x20w-100\x22>','pauseVideo','100%','target','message','searchParams','min','onopen','</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20','row','risco7','style','getHours','onmessage','config','texto_aposNome','unset','st_atend','show_destaque2','onclose','unshift','focus','\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22row\x20w-100\x20h-100\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22w-100\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22d-flex\x20h-100\x20justify-content-center\x20align-items-center\x20text-center\x22>','\x20(#','insertBefore','data','setAttribute','ads_src_yt','set','getItem','name','Conexão\x20fechada.\x20Tentando\x20reconectar\x20em\x205\x20segundos...','local[]','show','3324JfFOBN','querySelectorAll','voz_deChamadas','col-12','modal','log','keys','playVideo','HISTÓRICO\x20DE\x20CHAMADOS','paciente_','json','div','serverUrl','ads_src_sl','map','offsetWidth','Player','pinInput','replaceState','click','msRequestFullscreen','.keyboard-delete','left','local','ads_type','location','_hour_init','ads_src_lc','justify-content-center','ArrowRight','key','pb-2','unidades','co_seq_unidade_saude','server_host','PlayerState','select_id','input','pin','ended','anunciar_senha','trim','_0\x20.paciente_','80fUBCKf','mostrar_nome','px)','from','no_status_atend','cod','form-control','historico','<i\x20class=\x22fa\x20fa-user-md\x22></i>\x20','dispositivo','classList','Erro\x20ao\x20carregar\x20os\x20arquivos\x20JSON:','getTime','100AkbXcv','clock','script','speak','https://www.youtube.com/iframe_api','indexOf','createElement','in_pin','text','carousel','client_id','Erro\x20ao\x20carregar\x20o\x20arquivo\x20data.json:','ads_src_volume','html','hidden','send','<a\x20href=\x22index.php\x22><i\x20class=\x22fa\x20fa-sign-out\x22\x20aria-hidden=\x22true\x22></i></a>','.keyboard-key','_st_atend','btn-click','slice','155164EbKJTL','type','risco9','documentElement','show_listaEspera','alert\x20alert-danger','Serviço\x20indisponível.','3208650cLKTjX','getSeconds','img','getElementsByClassName','split','no_profissional','54keTdeO','tipo','2687751jtQPec','.carousel-container','onend','.keyboard-empty','stringify','co_classificacao_risco','mozRequestFullScreen','mostrar_nome_social','risco6','anunciar_nome_social','PLAYING','\x22></span>#','.number-click','.select_id','</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22hora\x22><div\x20id=\x22hora\x22><i\x20class=\x22fa\x20fa-clock-o\x22\x20aria-hidden=\x22true\x22></i>\x20','status','ArrowLeft','appendChild','querySelector','getElementById','quantidade_destaque1','webkitRequestFullscreen','profissionais','no_unidade_saude','client_pin','#confirmPinBtn','alert\x20alert-success','ArrowUp','DOMContentLoaded','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22card\x20w-100\x20justify-content-center\x20mt-1\x20mb-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pt-1\x20cidadao\x20w-100\x22>','show_ads','A\x20conexão\x20não\x20está\x20aberta.\x20Mensagem\x20não\x20enviada.'];_0x15d0=function(){return _0x443c39;};return _0x15d0();}async function connect(){const _0x1a4a28=_0x4b0066;socket=new WebSocket(window[_0x1a4a28(0xe5)]),socket[_0x1a4a28(0x1a2)]=function(_0xd05de4){const _0xac81ee=_0x1a4a28;$('#r')[_0xac81ee(0x11e)]('Selecione\x20uma\x20Unidade\x20de\x20Saúde.'),console['log'](_0xac81ee(0x18c)),msg!==0x0&&socket[_0xac81ee(0x120)](JSON['stringify']({'co_unidade':msg,'client_pin':window[_0xac81ee(0x14d)],'in_pin':window[_0xac81ee(0x118)],'client_id':window[_0xac81ee(0x11b)]}));},socket[_0x1a4a28(0x1a8)]=function(_0x20d68a){const _0x2bae4f=_0x1a4a28,_0x522922=_0x20d68a[_0x2bae4f(0x1b4)],_0x1a6771=JSON[_0x2bae4f(0x160)](_0x522922);let _0x297e61=document['createElement'](_0x2bae4f(0xe4));_0x297e61[_0x2bae4f(0x10e)][_0x2bae4f(0x15c)]('row',_0x2bae4f(0x156),_0x2bae4f(0xf8));let _0x4371d6=document[_0x2bae4f(0x117)](_0x2bae4f(0xe4));_0x4371d6[_0x2bae4f(0x10e)][_0x2bae4f(0x15c)](_0x2bae4f(0x1a4),_0x2bae4f(0xf8));let _0x5022f5=document[_0x2bae4f(0x117)]('div');_0x5022f5[_0x2bae4f(0x10e)][_0x2bae4f(0x15c)](_0x2bae4f(0x188),_0x2bae4f(0x1a4),'pb-2');let _0x45f3a5=document[_0x2bae4f(0x117)](_0x2bae4f(0xe4));_0x45f3a5['classList'][_0x2bae4f(0x15c)]('row','pb-1');const _0x529c84={};async function _0x50a789(_0x32defb){const _0x38acfc=_0x2bae4f;let _0x5814a8=0x0;for(const [_0x18a132,_0xc79e9e]of _0x32defb['entries']()){const _0x2ad813=window[_0x38acfc(0x1b4)][_0x38acfc(0x15f)](_0x37dd24=>_0x37dd24[_0x38acfc(0x109)]===_0xc79e9e[_0x38acfc(0x15d)]);let _0x26e4b9='';_0x2ad813&&(_0x26e4b9=_0x2ad813['local']);function _0x20e89a(_0x2674ea,_0x50d0e,_0x2b96c1,_0xcaa97c,_0x3d48db,_0x54b140,_0x2e951d){const _0x2bc8e9=_0x38acfc;let _0xa58f3c='',_0x4c95ce='';_0x2674ea[_0x2bc8e9(0x132)]===null?'':_0xa58f3c=_0x2bc8e9(0x10c)+_0x2674ea[_0x2bc8e9(0x132)],_0x2674ea['no_tipo_atend_prof']===null?'':_0x4c95ce=_0x2674ea[_0x2bc8e9(0x168)];let _0x3853ef='';_0x2674ea[_0x2bc8e9(0x177)]===null?_0x2674ea['no_social']='':'',window['config']['mostrar_nome']&&window[_0x2bc8e9(0x1a9)][_0x2bc8e9(0x13c)]?_0x3853ef=_0x2674ea[_0x2bc8e9(0x196)]+'</br>'+_0x2674ea[_0x2bc8e9(0x177)]:'',window[_0x2bc8e9(0x1a9)][_0x2bc8e9(0x105)]&&!window[_0x2bc8e9(0x1a9)]['mostrar_nome_social']?_0x3853ef=_0x2674ea[_0x2bc8e9(0x196)]:'',!window[_0x2bc8e9(0x1a9)][_0x2bc8e9(0x105)]&&window[_0x2bc8e9(0x1a9)]['mostrar_nome_social']?_0x3853ef=_0x2674ea['no_social']:'';let _0x30d344;window[_0x2bc8e9(0x1a9)][_0x2bc8e9(0x190)]?_0x30d344=_0x4c95ce:_0x30d344='';let _0x2bb75f=document[_0x2bc8e9(0x117)](_0x2bc8e9(0xe4));return _0x2674ea['st_atend']!=0x1&&_0x2674ea[_0x2bc8e9(0x1ac)]!=0x6?_0x2bb75f[_0x2bc8e9(0x10e)][_0x2bc8e9(0x15c)](_0x2bc8e9(0x16c),'col-6',_0x2bc8e9(0xf5)):_0x2bb75f[_0x2bc8e9(0x10e)][_0x2bc8e9(0x15c)](_0x2bc8e9(0x16c),_0x2bc8e9(0x1c0),'justify-content-center'),_0x2bb75f[_0x2bc8e9(0x17d)]=_0x2bc8e9(0x17c)+_0x50d0e+'\x22\x20class=\x22card\x20w-100\x20p-2\x20justify-content-center\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22d-flex\x20risco_senha\x20pb-1\x22><span\x20class=\x22borda_senha\x22><span\x20class=\x22'+_0x54b140+_0x2bc8e9(0x140)+_0x2e951d+'</span></span>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cidadao\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22fa\x20fa-user\x22></i>\x20'+_0x3853ef+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22profissional\x22>'+_0xa58f3c+_0x2bc8e9(0x18a)+_0x26e4b9+'</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22tipo\x22>'+_0x30d344+_0x2bc8e9(0x143)+_0x2674ea[_0x2bc8e9(0x17f)]+'</div></div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x2bb75f;}let _0x46fcf1=_0x38acfc(0x1ab);_0xc79e9e[_0x38acfc(0x13a)]===0x0?_0x46fcf1=_0x38acfc(0x186):_0x46fcf1=_0x46fcf1,_0xc79e9e[_0x38acfc(0x13a)]===0x6?_0x46fcf1=_0x38acfc(0x13d):_0x46fcf1=_0x46fcf1,_0xc79e9e[_0x38acfc(0x13a)]===0x7?_0x46fcf1=_0x38acfc(0x1a5):_0x46fcf1=_0x46fcf1,_0xc79e9e[_0x38acfc(0x13a)]===0x8?_0x46fcf1=_0x38acfc(0x19a):_0x46fcf1=_0x46fcf1,_0xc79e9e[_0x38acfc(0x13a)]===0x9?_0x46fcf1=_0x38acfc(0x128):_0x46fcf1=_0x46fcf1;let _0x5a06d2=_0xc79e9e[_0x38acfc(0x159)];window[_0x38acfc(0x1a9)][_0x38acfc(0x12a)]&&((_0xc79e9e[_0x38acfc(0x1ac)]===0x1||_0xc79e9e[_0x38acfc(0x1ac)]===0x6)&&_0x45f3a5[_0x38acfc(0x146)](_0x20e89a(_0xc79e9e,_0x18a132,null,null,null,_0x46fcf1,_0x5a06d2)));let _0x4b1dfa=window[_0x38acfc(0x1a9)][_0x38acfc(0x149)],_0x43f23d=window[_0x38acfc(0x1a9)]['quantidade_destaque2'],_0x215f10=_0x4b1dfa+_0x43f23d;if(_0xc79e9e[_0x38acfc(0x1ac)]===0x2||_0xc79e9e[_0x38acfc(0x1ac)]===0x3||_0xc79e9e[_0x38acfc(0x1ac)]===0x7){if(_0x5814a8<_0x4b1dfa)_0x297e61[_0x38acfc(0x146)](_0x20e89a(_0xc79e9e,_0x18a132,_0x5814a8,_0x4b1dfa,null,_0x46fcf1,_0x5a06d2)),_0x5814a8++;else _0x5814a8<_0x215f10&&window[_0x38acfc(0x1a9)][_0x38acfc(0x1ad)]&&(_0x4371d6['appendChild'](_0x20e89a(_0xc79e9e,_0x18a132,_0x5814a8,null,_0x215f10,_0x46fcf1,_0x5a06d2)),_0x5814a8++);}const _0x2c297e='#paciente_'+_0xc79e9e['co_seq_atend']+_0x38acfc(0x103)+_0xc79e9e[_0x38acfc(0x159)]+'_0',_0x292f53=document[_0x38acfc(0x147)](_0x2c297e);_0x292f53&&(_0x529c84[_0x38acfc(0xe2)+_0xc79e9e[_0x38acfc(0x159)]+_0x38acfc(0x198)]=_0xc79e9e[_0x38acfc(0x1ac)],_0x529c84[_0x38acfc(0xe2)+_0xc79e9e['co_seq_atend']+_0x38acfc(0x18d)]=_0xc79e9e[_0x38acfc(0x108)],_0x529c84[_0x38acfc(0xe2)+_0xc79e9e[_0x38acfc(0x159)]+'_0_hour_init']=_0xc79e9e[_0x38acfc(0x17f)]),[0x2,0x3,0x7][_0x38acfc(0x171)](_0xc79e9e[_0x38acfc(0x1ac)])&&await _0x54e4ee(_0xc79e9e);}}async function _0x54e4ee(_0x3ec10f){const _0x4bb023=_0x2bae4f,_0x4ed3a7=historico['find'](_0x2c5e80=>_0x2c5e80['co_seq_atend']===_0x3ec10f[_0x4bb023(0x159)]);(!_0x4ed3a7||_0x4ed3a7['hour_init']!==_0x3ec10f[_0x4bb023(0x17f)]||_0x4ed3a7[_0x4bb023(0x17f)]===_0x3ec10f['hour_init']&&_0x4ed3a7[_0x4bb023(0x1ac)]!==_0x3ec10f['st_atend'])&&(historico[_0x4bb023(0x1af)](_0x3ec10f),historico['length']>0x32&&historico[_0x4bb023(0x166)](),sessionStorage['setItem'](_0x4bb023(0x10b),JSON[_0x4bb023(0x139)](historico)));}async function _0x2bd30e(){const _0x28af0c=_0x2bae4f,_0x58db0c={};historico[_0x28af0c(0x162)]((_0x11c5aa,_0x5c229c)=>{const _0x364d8a=_0x28af0c;!_0x58db0c[_0x11c5aa[_0x364d8a(0x159)]]&&(_0x58db0c[_0x11c5aa[_0x364d8a(0x159)]]=0x0);const _0x28e6a4=_0x364d8a(0xe2)+_0x11c5aa[_0x364d8a(0x159)]+'_'+_0x58db0c[_0x11c5aa[_0x364d8a(0x159)]];function _0x4e9b91(_0x290dc4){const _0x1c3678=_0x364d8a,_0x2f7a7=document[_0x1c3678(0x117)](_0x1c3678(0xe4));_0x2f7a7[_0x1c3678(0x1b5)]('id',_0x28e6a4),_0x2f7a7['classList'][_0x1c3678(0x15c)](_0x1c3678(0x163));let _0x3229f5='';if(_0x290dc4[_0x1c3678(0x1ac)]===0x378)_0x3229f5=_0x1c3678(0x12b);else _0x290dc4[_0x1c3678(0x1ac)]===0x3e7?_0x3229f5=_0x1c3678(0x14f):_0x3229f5=_0x1c3678(0x191);return _0x2f7a7[_0x1c3678(0x17d)]=_0x1c3678(0x152)+_0x290dc4[_0x1c3678(0x196)]+_0x1c3678(0x1b2)+_0x290dc4['co_seq_atend']+_0x1c3678(0x19b)+_0x290dc4[_0x1c3678(0x132)]+'\x20('+_0x290dc4[_0x1c3678(0x168)]+_0x1c3678(0x175)+_0x28e6a4+'\x20'+_0x3229f5+_0x1c3678(0x15e)+_0x290dc4[_0x1c3678(0x108)]+_0x1c3678(0x161)+_0x290dc4[_0x1c3678(0x17f)]+'\x20-\x20CHAMADO\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',_0x2f7a7;}if(window[_0x364d8a(0x1a9)][_0x364d8a(0x164)]){if(_0x58db0c[_0x11c5aa[_0x364d8a(0x159)]]===0x0){_0x5022f5['appendChild'](_0x4e9b91(_0x11c5aa));if(_0x529c84[_0x28e6a4+_0x364d8a(0x123)]&&_0x529c84[_0x28e6a4+_0x364d8a(0x123)]!==0x2&&_0x529c84[_0x28e6a4+_0x364d8a(0x123)]!==0x3&&_0x529c84[_0x28e6a4+_0x364d8a(0x123)]!==0x7){var _0x1bfab9=calcularDiferencaSegundos(_0x11c5aa[_0x364d8a(0x17f)],_0x529c84[_0x28e6a4+_0x364d8a(0xf3)]);_0x1bfab9<=window[_0x364d8a(0x1a9)][_0x364d8a(0x17a)]?(_0x11c5aa['st_atend']=0x378,_0x11c5aa[_0x364d8a(0x108)]=''+_0x529c84[_0x28e6a4+_0x364d8a(0xf3)]+'\x20-\x20NÃO\x20COMPARECEU\x20('+_0x1bfab9+'s)',_0x54e4ee(_0x11c5aa)):(_0x11c5aa[_0x364d8a(0x1ac)]=0x3e7,_0x11c5aa[_0x364d8a(0x108)]=''+_0x529c84[_0x28e6a4+'_hour_init']+'\x20-\x20ATENDIMENTO\x20FINALIZADO',_0x54e4ee(_0x11c5aa));}}else _0x58db0c[_0x11c5aa[_0x364d8a(0x159)]]!=0x0&&(_0x11c5aa[_0x364d8a(0x1ac)]===0x378||_0x11c5aa[_0x364d8a(0x1ac)]===0x3e7)&&_0x5022f5['appendChild'](_0x4e9b91(_0x11c5aa));_0x58db0c[_0x11c5aa['co_seq_atend']]++;}});}async function _0x170d0a(){const _0x21e471=_0x2bae4f;!_0x1a6771[_0x21e471(0xf9)]&&!_0x1a6771[_0x21e471(0x14b)]&&(await _0x50a789(_0x1a6771),await _0x2bd30e());if(_0x1a6771[_0x21e471(0xf9)]){const _0xd595cc=_0x1a6771[_0x21e471(0xf9)],_0x4a4613=document['getElementById']('u');if(_0x4a4613){const _0x8fd780=parseInt(newUrl[_0x21e471(0x1a0)]['get']('id')),_0x2ceeb7=document['getElementById']('card_select');function _0x269c3a(_0x3738ab){const _0xee042c=_0x21e471,_0x341a61=document[_0xee042c(0x117)](_0xee042c(0xe4));_0x341a61['id']='card_select',_0x341a61[_0xee042c(0x10e)][_0xee042c(0x15c)](_0xee042c(0x16c));const _0x39dd0c=document[_0xee042c(0x117)]('button');_0x39dd0c[_0xee042c(0x127)]='button',_0x39dd0c['id']='select_id_'+_0x3738ab[_0xee042c(0xfa)],_0x39dd0c[_0xee042c(0x10e)][_0xee042c(0x15c)](_0xee042c(0xfd),_0xee042c(0x10a),_0xee042c(0x124),'m-4'),_0x39dd0c['textContent']=_0x3738ab['no_unidade_saude'],_0x39dd0c[_0xee042c(0x16f)](_0xee042c(0xec),function(){const _0x268579=_0xee042c;sendButton(_0x3738ab[_0x268579(0xfa)],_0x3738ab[_0x268579(0x14c)]);if(window['config'][_0x268579(0x153)]){if(window[_0x268579(0x1a9)]['ads_type']==='youtube')createYouTubePlayer();else{if(window[_0x268579(0x1a9)][_0x268579(0xf1)]===_0x268579(0xf0))createLocalPlayer();else window[_0x268579(0x1a9)][_0x268579(0xf1)]===_0x268579(0x11a)&&createCarousel();}}var _0x1a7888=document[_0x268579(0x129)];if(_0x1a7888[_0x268579(0x176)])_0x1a7888[_0x268579(0x176)]();else{if(_0x1a7888[_0x268579(0x13b)])_0x1a7888[_0x268579(0x13b)]();else{if(_0x1a7888['webkitRequestFullscreen'])_0x1a7888[_0x268579(0x14a)]();else _0x1a7888['msRequestFullscreen']&&_0x1a7888[_0x268579(0xed)]();}}}),_0x341a61[_0xee042c(0x146)](_0x39dd0c),_0x4a4613['appendChild'](_0x341a61);}if(!_0x2ceeb7){if(_0x8fd780){const _0x2715db=_0xd595cc[_0x21e471(0x15f)](_0x4b5e86=>_0x4b5e86[_0x21e471(0xfa)]===_0x8fd780);_0x2715db&&_0x269c3a(_0x2715db);}else for(const _0x54bf45 of _0xd595cc){_0x269c3a(_0x54bf45);}}}}if(_0x1a6771['profissionais']){const _0x412d9b=_0x1a6771[_0x21e471(0x14b)],_0x2448ce=document[_0x21e471(0x148)](_0x21e471(0x14b));_0x2448ce&&_0x412d9b[_0x21e471(0x162)](_0x48e23e=>{const _0x3d30d5=_0x21e471,_0x4506ec=window['data'][_0x3d30d5(0x15f)](_0x62f27a=>_0x62f27a['cod']===_0x48e23e[_0x3d30d5(0x15d)]),_0x5cc79e=document['createElement']('tr'),_0x3acfd9=document[_0x3d30d5(0x117)](_0x3d30d5(0xfe)),_0x3d7ffa=document[_0x3d30d5(0x117)]('span');_0x3acfd9[_0x3d30d5(0x127)]=_0x3d30d5(0x11f),_0x3acfd9['name']='cod[]',_0x3acfd9[_0x3d30d5(0x187)]=_0x48e23e['co_seq_prof'],_0x3d7ffa[_0x3d30d5(0x17d)]=_0x48e23e[_0x3d30d5(0x15d)];const _0x37b975=document['createElement']('td');_0x37b975[_0x3d30d5(0x146)](_0x3acfd9),_0x37b975[_0x3d30d5(0x146)](_0x3d7ffa),_0x5cc79e[_0x3d30d5(0x146)](_0x37b975);const _0x5284c1=document[_0x3d30d5(0x117)](_0x3d30d5(0xfe)),_0x13055f=document[_0x3d30d5(0x117)]('span');_0x5284c1[_0x3d30d5(0x127)]=_0x3d30d5(0x11f),_0x5284c1[_0x3d30d5(0x1b9)]=_0x3d30d5(0x192),_0x5284c1['value']=_0x48e23e[_0x3d30d5(0x132)],_0x13055f[_0x3d30d5(0x17d)]=_0x48e23e[_0x3d30d5(0x132)];const _0x4980a8=document[_0x3d30d5(0x117)]('td');_0x4980a8[_0x3d30d5(0x146)](_0x5284c1),_0x4980a8[_0x3d30d5(0x146)](_0x13055f),_0x5cc79e[_0x3d30d5(0x146)](_0x4980a8);const _0x509a93=document[_0x3d30d5(0x117)]('input');_0x509a93[_0x3d30d5(0x127)]=_0x3d30d5(0x119),_0x509a93[_0x3d30d5(0x10e)]['add'](_0x3d30d5(0x10a)),_0x509a93[_0x3d30d5(0x1b9)]=_0x3d30d5(0x169);_0x4506ec?_0x509a93['value']=_0x4506ec[_0x3d30d5(0x16a)]:_0x509a93[_0x3d30d5(0x187)]='';const _0x5afa60=document['createElement']('td');_0x5afa60['appendChild'](_0x509a93),_0x5cc79e[_0x3d30d5(0x146)](_0x5afa60);const _0x30438e=document[_0x3d30d5(0x117)]('input');_0x30438e[_0x3d30d5(0x127)]='text',_0x30438e[_0x3d30d5(0x10e)]['add'](_0x3d30d5(0x10a)),_0x30438e[_0x3d30d5(0x1b9)]=_0x3d30d5(0x1bb);_0x4506ec?_0x30438e[_0x3d30d5(0x187)]=_0x4506ec[_0x3d30d5(0xf0)]:_0x30438e[_0x3d30d5(0x187)]='';const _0x471cfa=document[_0x3d30d5(0x117)]('td');_0x471cfa[_0x3d30d5(0x146)](_0x30438e),_0x5cc79e[_0x3d30d5(0x146)](_0x471cfa),_0x2448ce['appendChild'](_0x5cc79e);});}}_0x1a6771[_0x2bae4f(0x144)]===_0x2bae4f(0x170)&&(_0x1a6771['tipo']===_0x2bae4f(0xff)||_0x1a6771[_0x2bae4f(0x134)]===_0x2bae4f(0x10d))?(window[_0x2bae4f(0x14d)]='',document[_0x2bae4f(0x148)]('pinModalLabel')['innerHTML']=_0x1a6771[_0x2bae4f(0x19f)],$(_0x2bae4f(0x18b))[_0x2bae4f(0x1c1)](_0x2bae4f(0x1bc))):_0x170d0a(),!_0x1a6771[_0x2bae4f(0xf9)]&&!_0x1a6771[_0x2bae4f(0x14b)]&&($('#r')[_0x2bae4f(0x11e)]('CHAMADOS\x20RECENTES\x20EM\x20ATENDIMENTO'),$('#s')[_0x2bae4f(0x11e)](_0x2bae4f(0xe1)),$('#a')['html']('LISTA\x20DE\x20ESPERA'),$('#p')[_0x2bae4f(0x11e)](_0x297e61),$('#b')[_0x2bae4f(0x11e)](_0x4371d6),$('#h')[_0x2bae4f(0x11e)](_0x5022f5),$('#l')['html'](_0x45f3a5));},socket['onerror']=function(_0x1ff648){const _0x27eb20=_0x1a4a28;console[_0x27eb20(0x170)](_0x27eb20(0x197),_0x1ff648);},socket[_0x1a4a28(0x1ae)]=function(_0x4361b9){const _0x48b55d=_0x1a4a28;$('#r')['html'](_0x48b55d(0x12c)),console[_0x48b55d(0x1c2)](_0x48b55d(0x1ba)),setTimeout(function(){connect();},0x1388);};};let pin=window[_0x4b0066(0x14d)];var click_number=0x1;const pinInput=document[_0x4b0066(0x148)](_0x4b0066(0xea));$(_0x4b0066(0x141))['on'](_0x4b0066(0xec),function(){const _0x2d3646=_0x4b0066;click_number===0x1&&(pin='');var _0x250fd2=$(this)[_0x2d3646(0x119)]();pin+=_0x250fd2,click_number++,window[_0x2d3646(0x118)]=!![],pinInput[_0x2d3646(0x17d)]=pin;}),$(_0x4b0066(0xee))['on'](_0x4b0066(0xec),function(){const _0x24dd00=_0x4b0066;pin=pin[_0x24dd00(0x125)](0x0,-0x1),pinInput['innerHTML']=pin;}),$(_0x4b0066(0x138))['on'](_0x4b0066(0xec),function(){const _0x1c4cfe=_0x4b0066;pin='',pinInput[_0x1c4cfe(0x17d)]=pin;}),$(_0x4b0066(0x14e))['on'](_0x4b0066(0xec),function(){const _0x53fc8c=_0x4b0066;window[_0x53fc8c(0x14d)]=pin,socket['send'](JSON[_0x53fc8c(0x139)]({'co_unidade':msg,'client_pin':window[_0x53fc8c(0x14d)],'in_pin':window[_0x53fc8c(0x118)],'client_id':window[_0x53fc8c(0x11b)]})),$(_0x53fc8c(0x18b))[_0x53fc8c(0x1c1)](_0x53fc8c(0x16b));});let currentIndex=-0x1,currentIndexN=-0x1;document['addEventListener']('keydown',function(_0x18a935){const _0x4101a4=_0x4b0066;var _0x556d39=document[_0x4101a4(0x1be)](_0x4101a4(0x142)),_0xca256a=document['querySelectorAll'](_0x4101a4(0x122));if(_0x556d39){if(_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0xf6)||_0x18a935['key']===_0x4101a4(0x173))currentIndex=Math[_0x4101a4(0x1a1)](currentIndex+0x1,_0x556d39[_0x4101a4(0x16d)]-0x1);else(_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0x145)||_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0x150))&&(currentIndex=Math[_0x4101a4(0x167)](currentIndex-0x1,0x0));currentIndex!==-0x1&&_0x556d39[currentIndex]['focus'](),_0x556d39[_0x4101a4(0x162)](_0x50ef1c=>{const _0x20cf0c=_0x4101a4;_0x50ef1c[_0x20cf0c(0x16f)](_0x20cf0c(0x1b0),function(){const _0x3e736e=_0x20cf0c;currentIndex=Array[_0x3e736e(0x107)](_0x556d39)[_0x3e736e(0x116)](_0x50ef1c);});});}if(_0xca256a){if(_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0xf6)||_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0x173))currentIndexN=Math[_0x4101a4(0x1a1)](currentIndexN+0x1,_0xca256a[_0x4101a4(0x16d)]-0x1);else(_0x18a935['key']===_0x4101a4(0x145)||_0x18a935[_0x4101a4(0xf7)]===_0x4101a4(0x150))&&(currentIndexN=Math[_0x4101a4(0x167)](currentIndexN-0x1,0x0));currentIndexN!==-0x1&&_0xca256a[currentIndexN][_0x4101a4(0x1b0)](),_0xca256a[_0x4101a4(0x162)](_0x5303ae=>{const _0x55e3fa=_0x4101a4;_0x5303ae[_0x55e3fa(0x16f)](_0x55e3fa(0x1b0),function(){const _0x434e07=_0x55e3fa;currentIndexN=Array[_0x434e07(0x107)](_0xca256a)[_0x434e07(0x116)](_0x5303ae);});});}});