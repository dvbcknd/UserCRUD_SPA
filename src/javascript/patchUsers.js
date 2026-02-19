
import axios from "axios";
import { url } from "./getUsers";
import { init } from "./main";



// Pega o ID do usuário e envia para a função de edição
function getIdForEdit(){

    const root = document.querySelector('.root');

    root.addEventListener('click', (e) =>{
        if(e.target.classList.contains('edit-button')){
            const editId = e.target.dataset.id;
            renderEdit();
            patchUser(editId);
        }
    });

}

// Injata o formulário de edição no root (mesmo formulário do cadastro)
function renderEdit(){
    const root = document.querySelector('.root');
    root.innerHTML = `
    <section class=" min-h-screen flex flex-col items-center justify-center ">
        <div class="bg-amber-200 p-12 rounded-2xl flex flex-col justify-center">

            <h1 class="text-blue-900 font-bold p-3 m-1 self-center text-2xl">
                Editar usuário
            </h1>

            <form id="form" class=" flex flex-col justify-center bg-white rounded-2xl p-6">

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

                <button type="submit" id="post-button" 
                class=" border-2 bg-cyan-400 mt-9 rounded-md p-3.5 hover:cursor-pointer hover:bg-cyan-500
                text-white font-bold"
                >Concluir edição</button>

            </form>

            <!-- Botão de voltar para usuários-->
            <input type="button" id="back-users" value="Cancelar edição"
            class=" border-2 bg-red-500 mt-9 rounded-md p-3.5 hover:cursor-pointer hover:bg-red-800
            text-white font-bold text-center"
            ></input>

        </div>
    </section> 
  `;

  // Evento no botão de cancelar a edição.
    const backButton = document.querySelector('#back-users');
    backButton.addEventListener('click', () => {
      init();
    });
  
}

// Função de envio das auterações para a API
async function patchUser(editId){
    try {
        // Pega os dados do usuário direto da API.
        const response = await axios.get(`${url}/${editId}`);
        const user = response.data;

        // Preencher formulário com os dados do usuário selecionado direto da API.
        document.querySelector('#post-name').value = user.name;
        document.querySelector('#post-lastname').value = user.lastname;
        document.querySelector('#post-email').value = user.email;

        // Evento no formulário para envio das edições.
        const form = document.querySelector('#form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            //Pega os valores dos inputs e atribui as variáveis
            const name = document.querySelector('#post-name').value;
            const lastname = document.querySelector('#post-lastname').value;
            const email = document.querySelector('#post-email').value;

            // Joga os valores dentro do objeto
            const updatedUser = {
                name: name || user.name,
                lastname: lastname || user.lastname,
                email: email || user.email
            };

            // Envia os dos de volta para a API
            await axios.patch(`${url}/${editId}`, updatedUser);
            alert('Edição salva!');

            // volta para o início após a edição
            init(); 
        });

    } catch (err) {
        console.error(err.message);
    }
}

getIdForEdit();
