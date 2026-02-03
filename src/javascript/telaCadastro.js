import axios from 'axios';

import { init } from './main';

export function telaCadastro() {
  const mainContainer = document.querySelector('.main-container');
  
  mainContainer.innerHTML = `
    <main class=" min-h-screen flex items-center justify-center ">
        <form id="form" class=" flex flex-col justify-center bg-amber-100 p-12 rounded-md">
            <label class="text-black p-2 " 
            for="post-name">Nome:</label>
            <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
            type="text" name="nome" id="post-name"  placeholder="Digite o nome">

            <label class="text-black p-2" 
            for="post-lastname">Sobrenome:</label>
            <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
            name="sobrenome" id="post-lastname"  placeholder="Digite o sobrenome">

            <label class="text-black p-2" 
            for="post-email">E-mail:</label>
            <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
            type="email" name="email" id="post-email"  placeholder="Digite o e-mail">

            <button type="submit" id="post-button" class=" border-2 border-black bg-amber-500 mt-9 rounded-md p-3.5 hover:cursor-pointer hover:bg-amber-600">Cadastrar</button>
        </form>
    </main> 
  `;

  // Seleciona o fomulário de cadastro
  const form = document.querySelector('#form');

  form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    console.log('Clicou no botão de cadastro!');

    const newUser = {
       name: document.querySelector('#post-name').value,
       lastname: document.querySelector('#post-lastname').value,
       email: document.querySelector('#post-email').value
    }

      try {
        await axios.post(`http://localhost:3000/users`, newUser);
        alert('Usuário cadastrado!');
        init();
      }
      catch (err) {
        console.error('Erro ao cadastrar:', err.message);
    }


  });

}



