
import axios from 'axios';

const url = 'http://localhost:3000/users';

//Pega os dados da API
export async function getUsers(){
    try{
        const response = await axios.get(url);
        const {data} = response;
        render(data);
    }
    catch(err){
        console.error(err.message);
    }
}

//A função cria os elementos HTML e injeta eles na main já com os dados da API
function render(data){
    data.forEach(({id, name, lastname, email}) =>{
        // console.log(id, name, lastname, email);
        //Seleciona a Div na tela principal
        const section = document.querySelector('.app');

        //Cria elementos via js
        const div = document.createElement('div');
        div.classList.add('user','bg-white', 'p-2.5', 'rounded-2xl', 'p-2');

        const span1 = document.createElement('span');
        span1.classList.add('font-bold');
        span1.innerHTML = 'Id: ';

        const span2 = document.createElement('span');
        span2.classList.add('font-bold');
        span2.textContent = 'Nome: ';

        const span3 = document.createElement('span');
        span3.classList.add('font-bold');
        span3.textContent = 'Sobrenome: ';

        const span4 = document.createElement('span');
        span4.classList.add('font-bold');
        span4.textContent = 'Email: ';

        const p1 = document.createElement('p');
        p1.classList.add('id', 'p-3.5', 'm-1.5', 'bg-amber-200', 'rounded-2xl');
                

        const p2 = document.createElement('p');
        p2.classList.add('name', 'p-3.5', 'm-1.5', 'bg-amber-200', 'rounded-2xl',);
        

        const p3 = document.createElement('p');
        p3.classList.add('lastname', 'p-3.5', 'm-1.5', 'bg-amber-200', 'rounded-2xl');
        

        const p4 = document.createElement('p');
        p4.classList.add('email', 'p-3.5', 'm-1.5', 'bg-amber-200', 'rounded-2xl');
        

        const span5 = document.createElement('span');
        span5.classList.add('container-button', 'flex', 'justify-center');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button','p-3', 'm-2.5', 'bg-green-400', 'rounded-2xl',
                                    'font-bold', 'text-white','hover:bg-green-500', 'hover:cursor-pointer');
        editButton.textContent = 'Editar';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button','p-3', 'm-2.5', 'bg-red-400', 'rounded-2xl',
                                    'font-bold', 'text-white', 'hover:bg-red-500', 'hover:cursor-pointer' );
        deleteButton.textContent = 'Excluir';
        deleteButton.dataset.id = id;

        //inserir itens
        span5.append(editButton, deleteButton);
        p1.append(span1, id);
        p2.append(span2, name);
        p3.append(span3, lastname);
        p4.append(span4, email);
        div.append(p1, p2, p3, p4, span5);
        section.append(div);
    });
}
