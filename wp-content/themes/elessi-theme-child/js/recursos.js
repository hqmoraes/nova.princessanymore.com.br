var url = 'http://nova.princessanymore.com.br';
var headerIcons = document.querySelectorAll('ul.header-icons');

/*
try {
    document.querySelector('.top-bar').style.display = 'block';
} catch (error) {
    
}
*/

var cnt = 0;
var links = document.querySelectorAll('a');
links.forEach(lk =>{
    lk.id = 'link-' + cnt;
    cnt++;
})


    try {
        setInterval(fm =>{
        var formsId = document.querySelectorAll('form');
        var cnt = 1;
        formsId.forEach(fr =>{
            fr.id = 'form-' + cnt;
            cnt++;
        })    
        try {
				document.querySelector('#form-3 a.lost_password').href = 'https://nova.princessanymore.com.br/password-reset'
        } catch (error) {
            
        }
        try {
            document.querySelector(`[for=reg_sr_firstname]`).innerText = 'Nome';
            document.querySelector(`[for=reg_sr_lastname]`).innerText = 'Sobrenome';
            document.querySelector('.woocommerce-privacy-policy-text p').innerHTML = '<p>Os dados pessoais armazenados pelo nosso site nos ajudam a compreender melhor os interesses de nossos clientes e estão em total segurança conforme descritos na nossa <a id="registroPolicy" href="/privacy-policy">política de privacidade</a></p>'
			document.querySelector('.wc-social-login.form-row-wide p').innerText = 'Utilize a sua conta social para fazer login.'
        } catch (error) {
            
        }
    }, 1000);
    } catch (error) {
        
    }

try {
    ct = 1;
    headerIcons.forEach(hd =>{
        hd.id = 'headerIcons-' + ct;
        ct++;
    })
    
    document.getElementById('headerIcons-1').childNodes[1].style.display = 'none';
    document.getElementById('headerIcons-1').childNodes[2].style.display = 'none';
    document.querySelector('#site-navigation li:nth-child(3)').style.display='none'
    'none';
    document.querySelector('#site-navigation li:nth-child(4)').style.display='none'
    'none';    
} catch (error) {
    
}

try {
    document.getElementById('link-3').setAttribute('onclick','criaIdForms()');
} catch (error) {
    console.log(error);
}


const tagsHTML = ['address','article','aside','footer','header','h1','h2','h3','h4','h5','h6','main','nav','section','blockquote','dd','div',
'dl','dt','figcaption','figure','hr','li','ol','menu','p','pre','ul','a','abbr','b','bdi','bdo','br','cite','code','data',
'dfn','em','i','kbd','mark','q','rp','rt','ruby','s','samp','small','span','strong','sub','sup','time','u','var','wbr','area',
'audio','img','map','track','video','embed','iframe','object','param','picture','portal','source','canvas','del','ins','caption',
'col','colgroup','table','tbody','td','tfoot','th','thead','tr','form','button','datalist','fieldset','input','label','legend','meter',
'optgroup','option','output','progress','select','textarea','details','dialog','summary','content','shadow','slot','template'];

function createTags(){
    tagsHTML.forEach(tag =>{
        var cont = 1;
        try{
            document.querySelectorAll(tag).forEach(tg =>{
            tg.setAttribute('data-tag',tag + '-' + cont);
            cont++;
            })
        } catch (error) {
        }
    });
}

createTags();

function ocultar(tags){
    tags.forEach(oct =>{
        try {
            document.querySelector(`[data-tag=` + oct + `]`).style.display = 'none';            
        } catch (error) {
            
        }
    })
}



        try {
            document.querySelector(`[data-tag=a-1]`).setAttribute('onclick','criaIdForms()');
        } catch (error) {

        }

try {
    switch (true){
        case document.body.classList.contains('home'):
            ocultar(['a-95','a-96','div-9']);
            break;
        case document.body.classList.contains('quemSomos'):
            ocultar(['a-95','a-96','div-9','div-157']);
            break;
        case document.body.classList.contains('trocas'):
            ocultar(['a-95','a-96','div-9','div-68']);
            break;
        case document.body.classList.contains('pagamentos'):
            ocultar(['a-95','a-96','div-9','div-68']);
            break;
        case document.body.classList.contains('termosUso'):            
            ocultar(['a-95','a-96','div-9','div-68']);
            break;
            case document.body.classList.contains('privacidade'):            
            ocultar(['a-95','a-96','div-9','div-68']);
            break;            
            case document.body.classList.contains('passwordReset'):
            ocultar(['a-95','a-96','div-9']);
            break;            			
    }
} catch (error) {
    
}

    try {
        let textoForm = document.querySelector(`wrapper-mobile-search [data-tag=form-1]`).innerText;
        let buscado = document.querySelector(`[data-tag=input-1]`).ariaValueMax;
        let trocar = textForm.replace('$$search',buscado);
    } catch (error) {
        
    }

try{
	document.querySelector(`[title=Pesquisar]`).setAttribute('onclick','tiraEfeito()');
}
catch(erro){
	
}

	setInterval(e=>{
		try{
			let srch = document.getElementById('nasa-input-1').value;
			let sbst = document.querySelector('.tt-dataset.tt-dataset-search .empty-message.nasa-notice-empty').innerText;
			document.querySelector('.tt-dataset.tt-dataset-search .empty-message.nasa-notice-empty').innerText = sbst.replace('$$search',srch);
		}
		catch(erro){}
	},500)


function tiraEfeito(){
	setInterval(e=>{
		document.getElementById('nasa-input-1').setAttribute('data-suggestions','');
		document.getElementById('nasa-input-1').setAttribute('keydown','sbstVar()');
	},1000);
}

/* Montar página quem somos*/
try {
    for (i=1;i<=8;i++){
    let baseImg = '/wp-content/uploads/2022/03/'
    let ssize = window.outerWidth;
    let img1 = document.querySelector('.quemSomos .elementor-widget-wrap.elementor-element-populated .bloco' + i + ' .elementor-container .elementor-column:nth-child(1) .elementor-widget-wrap');
    let img2 = document.querySelector('.quemSomos .elementor-widget-wrap.elementor-element-populated .bloco' + i + ' .elementor-container .elementor-column:nth-child(2)  .elementor-widget-wrap');
    img1.parentElement.parentElement.classList.add('ancora');
    img1.parentElement.classList.add('ancorado');
    img2.parentElement.classList.add('ancorado');
    let img1c = document.createElement('img');
    let img2c = document.createElement('img');
        switch (true){
            case ssize >=1400:
                img1c.src = baseImg + '1400w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '1400w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 1200 && ssize < 1400):
                img1c.src = baseImg + '1200w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '1200w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 992 && ssize < 1200):
                img1c.src = baseImg + '992w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '992w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 768 && ssize < 992):
                img1c.src = baseImg + '768w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '768w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;                   
            case (ssize >= 576 && ssize < 768):
                img1c.src = baseImg + '576w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '576w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;  
            case ssize < 576:
                img1c.src = baseImg + '400w-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + '400w-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;                        
    }

}
} catch (error) {
    
}

    /* Montar página home*/
try {
    for (i=1;i<=1;i++){
    let baseImg = '/wp-content/uploads/2022/03/'
    let ssize = window.outerWidth;
    let img1 = document.querySelector('.bannerHome .elementor-container .elementor-column:nth-child(1) .elementor-widget-wrap');
    let img2 = document.querySelector('.bannerHome .elementor-container .elementor-column:nth-child(2)  .elementor-widget-wrap');
    img1.parentElement.parentElement.classList.add('ancora');
    img1.parentElement.classList.add('ancorado');
    img2.parentElement.classList.add('ancorado');
    let img1c = document.createElement('img');
    let img2c = document.createElement('img');
        switch (true){
            case ssize >= 1400:
                img1c.src = baseImg + 'x1400-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x1400-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 1200 && ssize < 1400):
                img1c.src = baseImg + 'x1200-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x1200-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 992 && ssize < 1200):
                img1c.src = baseImg + 'x992-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x992-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;
            case (ssize >= 768 && ssize < 992):
                img1c.src = baseImg + 'x768-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x768-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;                   
            case (ssize >= 576 && ssize < 768):
                img1c.src = baseImg + 'x576-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x576-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;  
            case ssize < 576:
                img1c.src = baseImg + 'x400-' + i + '.png';
                img1c.classList.add('img1')
                img2c.src = baseImg + 'x400-' + i + '.svg';
                img2c.classList.add('img2')
                img1.appendChild(img1c);
                img2.appendChild(img2c);
                break;                        
            }
        }
}
catch (error) {
    
}