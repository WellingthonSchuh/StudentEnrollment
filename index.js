function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.dadosAlunos');
    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        const nome = form.querySelector('#first-name');
        const sobrenome = form.querySelector('#last-name');
        const email = form.querySelector('#email');
        const phoneNumber = form.querySelector('#phone-number');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            phoneNumber: phoneNumber.value

        });

        console.log(pessoas);

        resultado.innerHTML += `<tr><td>${nome.value}</td><td> ${sobrenome.value}</td><td>${email.value}</td><td> ${phoneNumber.value}</td>`;
        
    }
    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();