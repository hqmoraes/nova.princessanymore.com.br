var url = 'http://nova.princessanymore.com.br';
var headerIcons = document.querySelectorAll('ul.header-icons');

var cnt = 0;
var links = document.querySelectorAll('a');
links.forEach(lk =>{
    lk.id = 'link-' + cnt;
    cnt++;
})

function criaIdForms(){
    try {
        setTimeout(fm =>{
        var formsId = document.querySelectorAll('form');
        var cnt = 1;
        formsId.forEach(fr =>{
            fr.id = 'form-' + cnt;
            cnt++;
        })    
        try {
            document.querySelectorAll('#form-3 label')[0].innerText = 'Nome';
            document.querySelectorAll('#form-3 label')[1].innerText = 'Sobrenome';
            document.querySelector('#form-3 .woocommerce-privacy-policy-text').innerHTML = '<p>Os dados pessoais armazenados pelo nosso site nos ajudam a compreender melhor os interesses de nossos clientes e estão em total segurança conforme descritos na nossa <a id="registroPolicy" href="/privacy-policy">política de privacidade</a></p>'
        } catch (error) {
            
        }
    }, 1000);
    } catch (error) {
        
    }
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




try {
    document.querySelector(`[data-tag=a-95`).style.display = 'none';
    document.querySelector(`[data-tag=a-96`).style.display = 'none';
} catch (error) {
    
}
