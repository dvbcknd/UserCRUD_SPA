import '../css/output.css';
import './getUsers';
import './telaCadastro';
import './postUser';

import axios from 'axios';
import { telaCadastro } from './telaCadastro';
import { getUsers } from './getUsers';

// Insere a tela inicial do programa, aonde tem a lista dos usuários da API
 export function init(){
    const mainContainerPrincipal = document.querySelector('.main-container');
    if (!mainContainerPrincipal) {
        console.error("ERRO: O elemento .main-container não foi encontrado!");
        return;
    }

    console.log("Container encontrado! Injetando HTML...");
    mainContainerPrincipal.innerHTML = `
     <!-- Pesquisa de usuário -->
    <nav class="flex justify-center items-center ">
        <!-- Pesquisa do usuário -->
        <form class=" container-search bg-white p-6 m-6 rounded-2xl">
          <h1 class="font-bold text-2xl justify-self-center">Pesquisa de usuário</h1>
          <input type="text" name="name" id="" placeholder="Nome" from="add-user"
              class=" name-input bg-amber-200 p-2.5 m-2.5 rounded-xl">
          <input type="text" name="name" id="" placeholder="Sobrenome" from="add-user"
          class=" lastname-input bg-amber-200 p-2.5 m-2.5 rounded-xl">
          <button type=""
          class=" search-user p-3 m-2.5 bg-cyan-400 rounded-2xl hover:bg-cyan-500 hover:cursor-pointer
                  font-bold text-white">Pesquisar Usuário</button>
       </form>

       <section class=" container-add bg-white p-6 m-6 rounded-2xl flex flex-col justify-center items-center ">
        <h1 class="font-bold text-2xl justify-self-center" >Cadastrar usuário</h1>
        <button id="add-user" class=" p-3 m-2 bg-cyan-800 rounded-2xl hover:bg-cyan-500 hover:cursor-pointer
                  font-bold text-white ">Cadastre aqui</button>
       </section>
      </nav>

    
    <section class="app rounded-2xl bg-amber-100 flex flex-wrap justify-center content-center gap-5 p-10 m-10">
    </section>
    `;

    //Chama a função que pega os usuários da API
    getUsers();

    // Evento de chamar a tela de cadastro de usuário!
    const addButton = document.querySelector('#add-user');
    addButton.addEventListener('click', (e) =>{
        e.preventDefault();
        console.log('Clicou no adicionar usuário!');
        telaCadastro(); //Chama a função que imprime a tela de cadastro;

    });


    // Evento para excluir o usuário do banco de dados
   document.addEventListener('click', async (e) =>{
    if( e.target.classList.contains('delete-button')){
        console.log('O botão ecluir foi clicado!');

        const idParaDeletar = e.target.dataset.id; 
        console.log("Deletando o ID:", idParaDeletar);

        await axios.delete(`http://localhost:3000/users/${idParaDeletar}`);

        //Pega o elemento clicado e procuta o pai e remove o card indicado em closest() da tela do front
        e.target.closest('.user').remove();

    }
   });


}
init();

