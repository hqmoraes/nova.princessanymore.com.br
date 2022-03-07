var url = 'http://nova.princessanymore.com.br';
/*
document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        document.querySelector('#masthead .nasa-login-register-ajax.inline-block').href= url + '/login-registro';
    }
});
try{
    document.getElementById('nasa-input-mobile-search').placeholder = 'Digite aqui o produto ou a categoria';
    var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-shop').innerHTML;
    document.querySelector('.nasa-bot-icons.nasa-bot-icon-shop').innerHTML = rp.replace('Shop','Loja');

    var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-categories').innerHTML;
    document.querySelector('.nasa-bot-icons.nasa-bot-icon-categories').innerHTML = rp.replace('Categories','Categorias');

    var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-search').innerHTML;
    document.querySelector('.nasa-bot-icons.nasa-bot-icon-search').innerHTML = rp.replace('Search','Pesquisar');

    var rp = document.querySelector('.nasa-bot-icons.nasa-bot-icon-wishlist').innerHTML;
    document.querySelector('.nasa-bot-icons.nasa-bot-icon-wishlist').innerHTML = rp.replace('Wishlist','Favoritos');
    jQuery('.nasa-tit-wishlist.nasa-sidebar-tit.text-center')[0].innerText = 'Favoritos';

    document.querySelector('.nasa-tit-filter-cat').innerText = 'Categorias';
    document.querySelector('.nasa-tit-viewed.nasa-sidebar-tit.text-center').innerText = 'Visualizações Recentes';
}
catch(err){}    

try {
    document.querySelector('#main-content .um-field-block div').innerText = 'Enviamos uma mensagem para o seu e-mail. Por favor siga as etapas descritas no e-mail para trocar a sua senha.';
    document.querySelector('#main-content .um-field-block div').classList.add('formatarMensagem');
}
catch (e) {
   // declarações para manipular quaisquer exceções

}
try {    
    var formLogin = document.getElementById('formLogin');
    if(formLogin){
        document.getElementById('btnFazerLogin').onclick = function () {tratarLogin("fazerLogin")};
        document.getElementById('btnCadastrarConta').onclick = function () {tratarLogin("cadastrarConta")};
        document.getElementById('cadastrarConta').style.display = 'none';


        function tratarLogin(tratar){
            if (tratar == 'fazerLogin'){
                document.getElementById('fazerLogin').style.display = 'block';
                document.getElementById('cadastrarConta').style.display = 'none';
            }
            else if (tratar == 'cadastrarConta'){
                document.getElementById('cadastrarConta').style.display = 'block';
                document.getElementById('fazerLogin').style.display = 'none';
            }
        }
        
        document.querySelector('.um-field.um-field-c').style.display = 'none';
        document.querySelector('.um-col-alt-b a').innerHTML = '<span class=uppercase>Esqueci minha senha</span> <span class=lowercase>(again!)</span>';

        var erroEmail = document.querySelector('.um-notice.err.um-error-code-user_email').innerHTML;
        document.querySelector('.um-notice.err.um-error-code-user_email').innerHTML = erroEmail.replace('The email you entered is incorrect','O e-mail que você informou está errado ou ainda não foi cadastrado.');
    }
    else if (document.getElementById('_um_password_reset')){
        document.querySelector('.um-field-block .um-field-block div').innerText = 'Para trocar a sua senha, informe o seu e-mail cadastrado.'
        document.getElementById('username_b').placeholder = 'Digite o seu e-mail';
        document.getElementById('um-submit-btn').value = 'Trocar minha senha';
    }
}
 catch (e) {
    console.log(e); 
 }

try{
    document.getElementById('um-submit-btn').value = 'enviar';
    var btnLogins = document.getElementById('um-submit-btn').parentElement;
    for (i = 1; i <=2 ; i++){
        var novoBtn = document.createElement('input');
        novoBtn.classList.add('um-button');
        novoBtn.classList.add('btnLogin');
        novoBtn.setAttribute('type','submit');
        novoBtn.id = 'btn' + i;
        btnLogins.appendChild(novoBtn);
    }

    document.getElementById('btn1').value = 'google';
    document.getElementById('btn2').value = 'facebook';
}
catch(err){
    console.log(err);
}

try {
    document.querySelector('form .um-col-alt-b').parentElement.id='formLogin';
} catch (error) {
    
}
*/