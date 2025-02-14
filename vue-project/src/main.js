// Arquivo padrão do Vue 3. Criado automaticamente pelo Vue CLI. | Main file of the Vue 3. Automatically created by Vue CLI.

// Importando o arquivo de estilos globais. | Importing the global styles file.
import './assets/main.css'

// Importando o Vue 3 e o componente principal da aplicação. | Importing Vue 3 and the main component of the application.
import { createApp } from 'vue'

// Importando o componente principal da aplicação. | Importing the main component of the application.
// O arquivo App.vue é o componente principal da aplicação. Aqui é onde a aplicação é montada. Foi comentado para que possamos criar nosso próprio componente. | The App.vue file is the main component of the application. This is where the application is mounted. It was commented so that we can create our own component.
// import App from './App.vue'

// Criando a aplicação Vue 3. O método createApp() cria uma instância do Vue 3. O método mount() monta a aplicação na div com o id app. | Creating the Vue 3 application. The createApp() method creates an instance of Vue 3. The mount() method mounts the application in the div with the id app.
// Foi comentado para que possamos criar nosso próprio componente. | It was commented so that we can create our own component.
// createApp(App).mount('#app')

// Criando um novo componente Vue 3. | Creating a new Vue 3 component.
const myApp = createApp({
    // O método createApp() recebe um objeto com as opções do componente. | The createApp() method receives an object with the component options.

    // Opções. | Options.

    // Propriedades especiais. | Special properties.
});

// Montando o componente Vue 3 na div com o id my-app. | Mounting the Vue 3 component in the div with the id my-app.
myApp.mount('#my-app');
