let todoList = []; // array vazio para armazenar tarefas

function addItem(title) { // função que recebe um "title" como parâmetro
    todoList.push({
        title: title, // Atribuir o parâmetro "title" à propriedade "title" do novo objeto
        done: false // propriedade "done" como "false" por padrão
    });
    refreshUI(); // Chamar a função "refreshUI" para atualizar a interface do usuário
}

function refreshUI() { // função "refreshUI" para atualizar a interface do usuário
    let htmlData = ''; // string vazia para armazenar conteúdo do HTML
    let i = 0; // variável "i" com 0 para usar como índice

    while (i < todoList.length) { // loop para iterar pelos itens "todoList"
         /* Acrescenta código HTML à string 'htmlData' usando literais de modelo */
        htmlData += `
    <div> 
        <label>
            <input type="checkbox" name="done" value="${todoList[i].done}" />
            <span style="${todoList[i].done ? 'text-decoration: line-through' : ''}">
            ${todoList[i].title}
            </span>
        </label>
    </div>
    `; // Constrói HTML para cada item de tarefa com uma caixa de seleção e um título
        i++; // Incrementa 'i' para passar para o próximo item em "todoList"
    }

    document.getElementById('todoList').innerHTML = htmlData; // Atualiza o elemento "todoList" no HTML com o novo conteúdo
}

document.getElementById('addButton').addEventListener('click', function () { // addEventListener de clique ao elemento "addButton"
    const todoInput = document.getElementById('todo'); // pega o elemento de entrada "todo"
    const todoText = todoInput.value; // pega o texto digitado no campo de entrada "todo"
    if (todoText) { // se "todoText" não está vazio
        addItem(todoText); // Chama a função "addItem" com o texto inserido
        todoInput.value = ''; // Limpar o campo de entrada após adicionar uma tarefa
    }
});

window.addEventListener('load', function () { // addEventListener de carregamento à janela
    refreshUI(); // Chamar "refreshUI" para inicializar a interface do usuário quando a página é carregada
});
