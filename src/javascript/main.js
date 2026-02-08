import '../css/output.css';
import './getUsers';
import './telaCadastro';
import './postUser';

import axios from 'axios';
import { telaCadastro } from './telaCadastro';
import { getUsers } from './getUsers';

// Insere a tela inicial do programa, aonde tem a lista dos usuários da API
export function init(){
    const root = document.querySelector('.root');
    if (!root) {
        console.error("ERRO: O elemento .root não foi encontrado!");
        return;
    }

    console.log("root encontrado! Injetando HTML...");
    root.innerHTML = `
        <!-- Menu pesquisa do usuário -->
        <nav class=" w-screen bg-amber-400  p-4 flex items-center justify-between">

            <ul class=" w-1xl flex flex-wrap justify-center items-center bg-white m-2.5 p-1 rounded-2xl">

                <li><input type="text" placeholder="Digite o nome"
                class="name-input bg-amber-200 p-2.5 m-2.5 rounded-xl text-center"
                ></li>

                <li><input type="text" placeholder="Digite o sobrenome"
                class="lastname-input bg-amber-200 p-2.5 m-2.5 rounded-xl text-center"
                ></li>

                <li><input type="button" value="Pesquisar"
                class="btn-search-user p-3 m-2.5 text-white font-bold bg-cyan-800 rounded-2xl hover:bg-cyan-600 hover:cursor-pointer"
                ></li>
                
            </ul>
            <!-- Botão cadastro usuário -->
            <ul class=" p-1">
                <li><input type="button" value="Cadastrar Usuário" id="add-user"
                class="p-3 m-2 bg-cyan-800 rounded-2xl hover:bg-cyan-500 hover:cursor-pointer font-bold text-white"
                ></li>
            </ul>

        </nav>
    `;
    
    // Evento de chamar a tela de cadastro de usuário!
    const addButton = document.querySelector('#add-user');
    addButton.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log('Clicou no adicionar usuário!');
        telaCadastro(); //Chama a função que imprime a tela de cadastro;
    });

    //Chama a função que pega os usuários da API
    getUsers();

    // Evento para excluir o usuário do banco de dados
    document.addEventListener('click', async (e) =>{
        if( e.target.classList.contains('delete-button')){
            console.log('O botão excluir foi clicado!');

            const idDelete = e.target.dataset.id; 
            console.log("Deletando o ID:", idDelete);

            await axios.delete(`http://localhost:3000/users/${idDelete}`);

            //Pega o elemento clicado e procuta o pai e remove o card indicado em closest() da tela do front
            e.target.closest('.user').remove();
        }
    });
}

init();

