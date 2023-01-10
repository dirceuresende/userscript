// ==UserScript==
// @name         Burlesco
// @namespace    https://burles.co/
// @version      11.20
// @description  Leia notícias sem ser assinante, burle o paywall
// @author       rodorgas & AugustoResende
// @supportURL   https://burles.co
// @icon         https://raw.githubusercontent.com/burlesco/site/master/logo_semfundo.png
// Atenção:      Caso algum site não funcione logo após a instalação, limpe o cache do navegador.
// @grant        GM_webRequest
// @grant        GM_xmlhttpRequest
// @connect      gauchazh.clicrbs.com.br
// @connect      static.infoglobo.com.br
// @connect      cdn.tinypass.com
// @match        *://www.bloomberg.com/*
// @match        *://correio.rac.com.br/*
// @match        *://*.nsctotal.com.br/*
// @match        *://www.economist.com/*
// @match        *://*.estadao.com.br/*
// @match        *://foreignpolicy.com/*
// @match        *://*.fivewall.com.br/*
// @match        *://*.folha.uol.com.br/*
// @match        *://*.folha.com.br/*
// @match        *://gauchazh.clicrbs.com.br/*
// @match        *://*.zh.clicrbs.com.br/*
// @match        *://api.clicrbs.com.br/*
// @match        *://*.gazetadopovo.com.br/*
// @match        *://ogjs.infoglobo.com.br/*
// @match        *://*.jota.info/*
// @match        *://www.jornalnh.com.br/*
// @match        *://www.netdeal.com.br/*
// @match        *://*.nytimes.com/*
// @match        *://*.nyt.com/*
// @match        *://*.globo.com/*
// @match        *://*.oglobo.globo.com/*
// @match        *://*.epoca.globo.com/*
// @match        *://*.valor.globo.com/*
// @match        *://*.revistacrescer.globo.com/*
// @match        *://*.epocanegocios.globo.com/*
// @match        *://*.vogue.globo.com/*
// @match        *://www.rbsonline.com.br/*
// @match        *://api.tinypass.com/*
// @match        *://cdn.tinypass.com/*
// @match        *://dashboard.tinypass.com/*
// @match        *://*.washingtonpost.com/*
// @match        *://*.exame.com/*
// @match        *://www.eltiempo.com/*
// @match        *://super.abril.com.br/*
// @match        *://veja.abril.com.br/*
// @match        *://quatrorodas.abril.com.br/*
// @match        *://*.uol.com.br/*
// @match        *://www.uol/*
// @match        *://*.wsj.com/*
// @match        *://*.ft.com/*
// @match        *://*.gramophone.co.uk/*
// @match        *://*.folhadelondrina.com.br/*
// @match        *://*.wired.com/*
// @match        *://www.jornalvs.com.br/*
// @match        *://*.br18.com.br/*
// @match        *://*.diariopopular.com.br/*
// @match        *://*.haaretz.com/*
// @match        *://*.haaretz.co.il/*
// @match        *://*.diarinho.com.br/*
// @match        *://*.diariodaregiao.com.br/*
// @match        *://*.correio24horas.com.br/*
// @match        *://*.dgabc.com.br/*
// @match        *://crusoe.com.br/*
// @match        *://*.em.com.br/*
// @match        *://*.forbes.pl/*
// @match        *://*.newsweek.pl/*
// @match        *://*.seudinheiro.com/*
// @match        *://*.diariodecanoas.com.br/*
// @match        *://*.superlutas.com.br/*
// @match        *://*.agazeta.com.br/*
// @match        *://*.poder360.com.br/*
// @match        *://*.r7.com/*
// @match        *://*.elpais.com/*
// @match        *://*.opopular.com.br/*
// @run-at       document-start
// @noframes
// ==/UserScript==

// run_at: document_start
if (/gauchazh\.clicrbs\.com\.br/.test(document.location.host)) {
    gauchazh_clicrbs_com_br();
}

else if (/jota\.info/.test(document.location.host)) {
    jota_info();
}

else if (/crusoe\.com\.br/.test(document.location.host)) {
    document.cookie = 'crs_subscriber=1';
}

else if (/folha\.uol\.com\.br/.test(document.location.host)) {
    folha_uol_com_br();
}

else if (/superlutas\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, .swal2-container { display: none !important }
    `;

    blockByCss(css);
}

else if (/agazeta\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, .fc-ab-root, .box-aviso-cookies {display: none !important}
    `;

    blockByCss(css);

}
else if (/globo\.com/.test(document.location.host)) {

    let css=`
#burlesco, body { overflow: auto !important; }
#burlesco, #detecta-adblock, #onesignal-slidedown-container, #cookie-banner-lgpd, #banner-assinatura-header, #ad-container-top-placeholder, .banner-bottom-fixed-cpnt { display: none !important; }
    `;

    blockByCss(css);
}
else if (/poder360\.com/.test(document.location.host)) {

    let css=`
#burlesco, body { overflow: auto !important; }
#burlesco, .jquery-modal.blocker, #cookie-notice, .btn.bt-continuar {display: none !important; }
#burlesco, .single .content.wp.cropped { max-height: inherit !important; }
#burlesco, .single .content.wp.cropped:after { background: inherit !important; }
    `;

    blockByCss(css);
}
else if (/estadao\.com.br/.test(document.location.host)) {

    let css=`
#burlesco, body, html, html body section.n--noticia { overflow: auto !important; }
#burlesco, html { position: relative !important; top: 0 !important; }
#burlesco, body div.push, body div.fc-ab-root, body div.lgpd-modal-content, #assine-bottom-banner-component, body div.whatsapp-floating-component, #push-notification-prompt-container, body section.publi-sticky-banner-container, div.form-agora, div.cta-fim-materia, div.related-content-title, div.related-content, #paywall-wrapper-iframe-estadao, section.mold-assine, #container-proximas-materias { display: none !important; }
    `;

    blockByCss(css);
}

else if (/uol\.com.br/.test(document.location.host)) {

    let css=`
#burlesco, .webalert_container, .banner-lgpd-consent-container { display: none !important; }
    `;

    blockByCss(css);
}

else if (/em\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, .news-blocked, #onesignal-slidedown-container, body div.fc-ab-root, #bannerLGPD { display: none !important }
#burlesco, .news-blocked-no-scroll { overflow: auto !important; width: auto !important; position: unset !important; }
#burlesco, div[itemprop="articleBody"] { height: auto !important; }
    `;

    blockByCss(css);
}

else if (/seudinheiro\.com/.test(document.location.host)) {

    let css=`
#burlesco, #premium-paywall, #onesignal-slidedown-container, .chetek-c-canvas, .agreement-cookies, .chetek-campaign { display: none !important; }
#burlesco, html.om-position-popup body.om-effect-overlay { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/foreignpolicy\.com/.test(document.location.host)) {

    let css=`
#burlesco, .tp-modal, .tp-backdrop, .view-offer, .post-content--after { display: none !important; }
#burlesco, html body.site-root { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/r7\.com/.test(document.location.host)) {

    let css=`
#burlesco, .toolkit-privacy-box, .L3cNZe2Sr4nBkrAfyZhZe_prompt { display: none !important; }
    `;

    blockByCss(css);
}
else if (/elpais\.com/.test(document.location.host)) {

    let css=`
#burlesco, #didomi-notice, #acceptationCMPWall, #paywallOfferSmall { display: none !important; }
#burlesco, html body { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/opopular\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, html body .L3cNZe2Sr4nBkrAfyZhZe_pushmail, html body #notification-ajude-ab { display: none !important; }
#burlesco, html body { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/nsctotal\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, html body #onesignal-slidedown-container, html body #onetrust-banner-sdk { display: none !important; }
#burlesco, html body { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/umdoisesportes\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, html body #byRemovePortal, html body .tp-backdrop.tp-active { display: none !important; }
#burlesco, html body { overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/nytimes\.com/.test(document.location.host)) {

    let css=`
#burlesco, #gateway-content, #app > div .css-gx5sib { display: none !important; }
#burlesco, #app > div > div:first-child{ overflow: auto !important; }
    `;

    blockByCss(css);
}
else if (/gazetadopovo\.com\.br/.test(document.location.host)) {

    let css=`
#burlesco, .tp-backdrop, .tp-modal { display: none !important; }
#burlesco, body.tp-modal-open, html { overflow: auto !important; }
    `;

    blockByCss(css);
}



// run_at: document_idle
document.addEventListener('DOMContentLoaded', function() {
    var code = null;

    if (/www\.economist\.com/.test(document.location.host)) {
        code = 'document.cookie = "ec_limit=allow";';
    }

    else if (/ft\.com/.test(document.location.host) && document.querySelector('.barrier')) {
        ft_com();
    }

    else if(/correio24horas\.com\.br/.test(document.location.host)) {
        // remover tudo relacionado ao paywall e remover limite de altura no div do conteúdo da matéria
        // verificar se a altura não buga com a mudança de largura da página (layout responsivo, né)
        code=`
      jQuery('[class^=paywall]').remove();
      jQuery('[class^=blocked]').removeClass();
      jQuery('[id^=paywall]').removeClass('hide').removeClass('is-active');
      jQuery('.noticias-single__content__text').attr('style', 'height:auto;');
      jQuery('[id^=paywall]').remove();
      setInterval(function() { jQuery('[itemprop^=articleBody]').css('height', '100%'); console.log('Burlesco: forçando altura...'); }, 1000);

    `;
    }

    else if (/nytimes\.com/.test(document.location.host)) {
        eraseAllCookies();
    }

    else if (/wsj\.com/.test(document.location.host) && document.querySelector('.wsj-snippet-login')) {
        wsj_com();
    }

    else if (/bloomberg\.com/.test(document.location.host)) {
        localStorage.clear();
        sessionStorage.clear();
    }

    else if (/diariodaregiao\.com\.br/.test(document.location.host))
    {
        document.getElementsByClassName('noticia-texto')[0].style.display = 'block';
        document.querySelector('.conteudo > .row').style.display = 'none';
    }

    else if (/diariopopular\.com\.br/.test(document.location.host)) {
        eraseAllCookies();
    }

    else if (/wired\.com/.test(document.location.host)) {
        code = `
      window.onload = function() {
        style = document.createElement('style');
        style.type = 'text/css';
        css='.paywall-container-component {display: none !important}';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      }
      document.cookie = "";
      localStorage.clear();
      sessionStorage.clear();
    `;
        eraseAllCookies();
    }

    else if (/haaretz\.com/.test(document.location.host) || (/haaretz\.co\.il/.test(document.location.host))) {
        haaretz_com();
    }

    else if (/dgabc\.com\.br/.test(document.location.host)) {
        code = `
      var email = 'colaborador@dgabc.com.br';
      var senha = '';
      localStorage.emailNoticiaExclusiva = email;
      $('.NoticiaExclusivaNaoLogado').hide();
      $('.NoticiaExclusivaLogadoSemPermissao').hide();
      $('.linhaSuperBanner').show();
      $('.footer').show();
      $('.NoticiaExclusivaLogado').show();
    `;
    }

    else if (/newsweek\.pl|forbes\.pl/.test(document.location.host)) {
        let contentPremium = document.querySelector('.contentPremium');
        if (contentPremium) {
            contentPremium.classList.remove('contentPremium');
        }
    }
    else if (/abril\.com\.br/.test(document.location.host)) {

        code = `
      window.stop();

      window.setTimeout(function() {
        document.querySelector('body').classList.remove('disabledByPaywall');
        document.querySelector('body').classList.remove('disabledByPaywall');
        document.querySelector('.piano-offer-overlay').remove();
        document.querySelector('#piano_offer').remove();
        document.getElementById("paywall-ofertas_js-js").remove();
        document.getElementById("/assets/js/abril_lgpd.js-js").remove();
        document.getElementById("script-block-content-js").remove();
        document.getElementById("swg_js_oferta_paywall-js").remove();
        document.getElementById("abril-swg-js").remove();
      }, 10000)
    `;
    }
    else if (/nsctotal\.com\.br/.test(document.location.host)) {

        code = `
      window.stop();
    `;
    }

    if (code !== null) {
        var script = document.createElement('script');
        script.textContent = code;
        (document.head||document.documentElement).appendChild(script);
        script.parentNode.removeChild(script);
    }
});


function eraseAllCookies() {
    var cookieList = document.cookie.split (/;\s*/);
    for (var J = cookieList.length - 1; J >= 0; --J) {
        var cookieName = cookieList[J].replace (/\s*(\w+)=.+$/, '$1');
        eraseCookie (cookieName);
    }
    localStorage.clear();
    sessionStorage.clear();
}


function eraseCookie (cookieName) {
    // https://stackoverflow.com/a/28081337/1840019
    //--- ONE-TIME INITS:
    //--- Set possible domains. Omits some rare edge cases.?.
    var domain = document.domain;
    var domain2 = document.domain.replace (/^www\./, '');
    var domain3 = document.domain.replace (/^(\w+\.)+?(\w+\.\w+)$/, '$2');

    //--- Get possible paths for the current page:
    var pathNodes = location.pathname.split ('/').map ( function (pathWord) {
        return '/' + pathWord;
    } );
    var cookPaths = [''].concat (pathNodes.map ( function (pathNode) {
        if (this.pathStr) {
            this.pathStr += pathNode;
        }
        else {
            this.pathStr = '; path=';
            return (this.pathStr + pathNode);
        }
        return (this.pathStr);
    } ) );

    // eslint-disable-next-line no-func-assign
    ( eraseCookie = function (cookieName) {
        //--- For each path, attempt to delete the cookie.
        cookPaths.forEach ( function (pathStr) {
            //--- To delete a cookie, set its expiration date to a past value.
            var diagStr = cookieName + '=' + pathStr + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
            document.cookie = diagStr;

            document.cookie = cookieName + '=' + pathStr + '; domain=' + domain + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
            document.cookie = cookieName + '=' + pathStr + '; domain=' + domain2 + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
            document.cookie = cookieName + '=' + pathStr + '; domain=' + domain3 + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
        } );
    } ) (cookieName);
}


function blockByCss(cssCode) {
    let style = document.createElement('style');
    style.type = 'text/css';

    style.appendChild(document.createTextNode(cssCode));
    document.head.appendChild(style);

    eraseAllCookies();
}


function gauchazh_clicrbs_com_br() {
    document.addEventListener('DOMContentLoaded', function() {
        function patchJs(jsurl) {
            GM_xmlhttpRequest({
                method: 'GET',
                url: jsurl,
                onload: function(response) {
                    var injectme = response.responseText;
                    injectme = injectme.replace(/[a-z].showLoginPaywall,/g, 'false,');
                    injectme = injectme.replace(/[a-z].showPaywall,/g, 'false,');
                    injectme = injectme.replace(/[a-z].requestCPF\|\|!1,/g, 'false,');
                    injectme = injectme.replace(
                        /![a-z].showLoginPaywall&&![a-z].showPaywall\|\|!1/g, 'true');
                    injectme = injectme.replace('throw new Error("only one instance of babel-polyfill is allowed");', '');
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    var textNode = document.createTextNode(injectme);
                    script.appendChild(textNode);
                    document.head.appendChild(script);
                }
            });
        }

        var scripts = Array.from(document.getElementsByTagName('script'));
        var script = scripts.find((el) => { return el.src.includes('static/main'); });
        if (script) {
            patchJs(script.src);
        }
    });

    window.onload = function() {
        function check(){
            if(document.getElementsByClassName('wrapper-paid-content')[0]){
                document.getElementsByClassName('wrapper-paid-content')[0].innerHTML = '<p>Por favor aperte Ctrl-F5 para carregar o restante da notícia!</p>';
            }
            setTimeout(function(){ check(); }, 1000);
        }
        check();
    };
}


function jota_info() {
    var page_url = window.location.href;
    if (page_url.search('paywall') >= 0) { // Só ativa em urls com paywall
        var new_page_url = window.location.href.replace('www.jota.info/paywall?redirect_to=//', '');
        GM_xmlhttpRequest({
            method: 'GET',
            url: new_page_url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
            },
            anonymous: true,
            onload: function(response) {
                var parser = new DOMParser();
                var newDocument = parser.parseFromString(response.responseText,'text/html');
                newDocument.getElementsByClassName('jota-paywall')[0].remove(); // Já remove o anúncio do paywall antes de inserir
                if (newDocument) {
                    document.open();
                    history.pushState({urlPath: new_page_url}, '', new_page_url); // Atualiza a url sem fazer um novo refresh
                    document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
                    document.close();
                }
            }
        });
    }
}


function folha_uol_com_br() {
    let style = document.createElement('style');
    style.type = 'text/css';

    let css=`
      #burlesco, .c-push-notification, .c-top-signup {display: none !important}
    `;

    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);

    eraseAllCookies();
}


function ft_com() {
    eraseAllCookies();

    document.cookie = '';
    localStorage.clear();
    sessionStorage.clear();
    indexedDB.deleteDatabase('next-flags');
    indexedDB.deleteDatabase('next:ads');

    GM_xmlhttpRequest({
        method: 'GET',
        url: window.location.href,
        headers: {
            'Referer': 'https://www.google.com.br/'
        },
        anonymous: true,
        onload: function(response) {
            var parser = new DOMParser();
            var newDocument = parser.parseFromString(response.responseText,'text/html');
            if (newDocument.getElementsByClassName('article__content')[0]) {
                document.open();
                document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
                document.close();
            }
        }
    });
}


function wsj_com() {
    eraseAllCookies();

    document.cookie = '';
    localStorage.clear();
    sessionStorage.clear();

    GM_xmlhttpRequest({
        method: 'GET',
        url: window.location.href,
        headers: {
            'Referer': 'https://www.facebook.com/'
        },
        anonymous: true,
        onload: function(response) {
            var parser = new DOMParser();
            var newDocument = parser.parseFromString(response.responseText,'text/html');
            if (newDocument.querySelector('article')) {
                document.body = newDocument.body;
            }
        }
    });
}


function haaretz_com() {
    GM_xmlhttpRequest({
        method: 'GET',
        url: window.location.href,
        headers: {
            'User-Agent': 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)'
        },
        anonymous: true,
        onload: function(response) {
            var parser = new DOMParser();
            var newDocument = parser.parseFromString(response.responseText,'text/html');
            if (newDocument) {
                document.open();
                document.write(newDocument.getElementsByTagName('html')[0].innerHTML);
                document.close();
            }
        }
    });
}
