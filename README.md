## Desafio Corelab:

### Os repositórios

O [repositório frontend](https://github.com/MatheusDalia/corelab-web-challenge-dalia)

O [repositório de backend](https://github.com/MatheusDalia/corelab-api-challenge-dalia)

### Como rodar o Backend

Lembre-se de rodar o front em outro terminal.

### Prerequisites

- Docker

  You can install Docker from [here](https://docs.docker.com/get-docker/)

  You also need to install Docker Compose from [here](https://docs.docker.com/compose/install/)

  > If you not want to use Docker, you can install PostgreSQL for your OS and change the database connection in the `.env` file

- Node

  You can install Node from [here](https://nodejs.org/en/download/)

### Installation

1. Clone the repo or download the zip file

   ```sh
   git clone https://github.com/MatheusDalia/corelab-api-challenge-dalia
   ```

2. Enter the project folder

   ```sh
   cd corelab-api-challenge-dalia
   ```

3. Install NPM packages

   ```sh
   npm install
   ```

4. Create a `.env` file based on `.env.example` file

   ```sh
   cp .env.example .env
   ```

5. Compose the Docker containers

   ```sh
   docker-compose up -d
   ```

6. Open the Nest.js container

   ```sh
   docker exec -it nestjs bash
   ```

7. Inside the Nest.js container, run the migrations:

   ```sh
   npx prisma migrate dev --name init
   ```
   ```sh
   npx prisma migrate deploy
    ```
   ```sh
   npx prisma generate
    ```
7. Run the project

   ```sh
     docker-compose up
   ```

   Open [http://localhost:3333/docs](http://localhost:3333/docs) with your browser to see the docs.

### O aplicativo tem as seguintes funcionalidades:

1. Os usuários são capazes de criar, ler, atualizar e excluir Notas.
2. Os usuários conseguem marcar um item como favorito.
3. Os usuários conseguem definir uma cor para cada item de tarefa.
4. O front-end do React deve exibir a lista de tarefas do usuário de maneira responsiva e visualmente atraente, com a capacidade de filtrar por itens e cores favoritos.
5. Os itens favoritos devem ser exibidos no topo da lista.
6. Os usuário conseguem pesquisar as Notas pelo título na barra de busca.

### Requerimentos técnicos:

1. A API de back-end foi construída na estrutura Node.js, utilizando Nest.js, Prisma, Docker e um banco de dados PostgreSQL.
2. O front-end foi construído em React.

### Entregáveis:

1. Um link para um repositório GitHub contendo o código-fonte completo do projeto.
2. Uma descrição por escrito de como configurar e executar o aplicativo localmente.

### Backend

Repositório:

1. Node: ^16.15.0
2. NPM: ^8.5.5
3. Framework: Nest.js
4. Banco de dados: PostgreSQL

### Frontend

Repositório:

1. Node: ^16.15.0
2. NPM: ^8.5.5
3. Framework: React TS
4. Sass ou outro pré-processador
