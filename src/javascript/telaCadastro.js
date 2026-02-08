import axios from 'axios';

import { init } from './main';

export function telaCadastro() {
  const root = document.querySelector('.root');
  
  root.innerHTML = `
    <section class=" min-h-screen flex flex-col items-center justify-center ">
      <div 
      class="bg-amber-200 p-12 rounded-2xl flex flex-col justify-center">
        <form id="form" class=" flex flex-col justify-center bg-white rounded-2xl p-6">

          <label class="text-black p-2 " 
          for="post-name">Nome:</label>
          <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
          type="text" name="nome" id="post-name"  placeholder="Digite o nome" required>

          <label class="text-black p-2" 
          for="post-lastname">Sobrenome:</label>
          <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
          name="sobrenome" id="post-lastname"  placeholder="Digite o sobrenome" required>

          <label class="text-black p-2" 
          for="post-email">E-mail:</label>
          <input class="border border-white bg-amber-300 text-black p-3.5 rounded-md" 
          type="email" name="email" id="post-email"  placeholder="Digite o e-mail" required>

          <button type="submit" id="post-button" 
          class=" border-2 bg-amber-400 mt-9 rounded-md p-3.5 hover:cursor-pointer hover:bg-amber-500
          text-white font-bold"
          >Cadastrar</button>
        </form>

        <!-- Botão de voltar para usuários-->
        <input type="button" id="back-users" value="Voltar para usuários"
        class=" border-2 bg-cyan-500 mt-9 rounded-md p-3.5 hover:cursor-pointer hover:bg-cyan-800
        text-white font-bold text-center"
        ></input>
      </div>
    </section> 
  `;

  // Evento no botão para voltar a tele de inicio
  const backButton = document.querySelector('#back-users');
  backButton.addEventListener('click', () => {
    init();
  });

  // Seleciona o fomulário de cadastro
  const form = document.querySelector('#form');
  form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    console.log('Clicou no botão de cadastro!');

    // Captura os valores dos inputs
    const newUser = {
       name: document.querySelector('#post-name').value,
       lastname: document.querySelector('#post-lastname').value,
       email: document.querySelector('#post-email').value
    }

    // Envia os dados para a API(servidor)
    try {
      await axios.post(`http://localhost:3000/users`, newUser);
      alert('Usuário cadastrado!');
      form.reset();
    }
    catch (err) {
      console.error('Erro ao cadastrar:', err.message);
    }

  });

}



