
const credenciais = {
    usuario: 'Ana Paula',
    senha: '1234'
}

const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    event.preventDefault()
    
    if (credenciais.usuario != 'Ana' || credenciais.senha != '1234'){
        console.log('Credenciais incorretas');
    }else{
        console.log('Logado');
    }
})