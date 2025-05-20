# Plataforma de Turismo
Este projeto consiste no desenvolvimento de uma API REST robusta e escalável para uma plataforma de turismo, que conecta turistas a empreendimentos turísticos, facilitando a gestão e descoberta de destinos de forma segura e eficiente.

### Objetivo Geral
O principal objetivo da API é fornecer um backend confiável para que diferentes tipos de usuários possam interagir com a plataforma conforme seus privilégios, possibilitando experiências personalizadas e controle administrativo completo sobre os locais turísticos cadastrados.

## Tecnologias utilizadas
- **Node.js**: Plataforma de desenvolvimento.
- **Bcrypt**: Biblioteca para hashing de senhas.
- **Express.js**: Framework para criação de APIs.
- **Dotenv**: Gerenciamento de variáveis de ambiente.
- **JWT (jsonwebtoken)**: Autenticação baseada em tokens JWT.
- **SQLite**: Banco de dados leve e fácil de usar.
- **Prisma**: ORM para facilitar a interação com o banco de dados.
- **Zod**: Biblioteca para validação de esquemas de dados.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Maira-castro/Plataforma-de-Turismo.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso
Para iniciar o servidor em modo de desenvolvimento, execute:
```bash
npm run dev
```

## Estrutura do Projeto 
- `src/`
  - `controllers/`: Controladores das rotas.
  - `database/`: Banco de dados.
  - `middleware/`: Função intermediária.
  - `routes/`: Definição das rotas da API.
  - `schemas/`: Esquemas de validação de dados com Zod.
  - `services/`: Lógica de negócios da aplicação.
  - `utils/`: Funções utilitárias reutilizáveis.

### Rotas da API - 

#### Locais
- **GET /place/places**: Retorna os detalhes de todos os locais cadastrados.
- **GET /place/search**: Retorna os detalhes de um local específico pelo tipo.
- **POST /place/places**: Cria um novo local.
- **PUT /place/places/:id**: Atualiza um local.
- **DELETE /place/places/:id**: Remove um local.

#### Login
- **POST /login/auth/login**: Autentica um usuário e retorna um token JWT.

#### Registro
- **POST /register/auth/register**: Registra um usuario comum.
- **POST /register/auth/register-adm**: Registra um administrador.


## Funcionalidades
- **Autenticação**: Implementação de JWT para autenticação de usuários.
- **Criptografia**: Utilização do Bcrypt para hashing seguro de senhas.
- **CRUD**: Operações de Create, Read, Update e Delete para os locais.
- **Validação**: Validação de dados de entrada utilizando o zod.

## Desenvolvedor
- **[Maira Stefane Nunes Castro](https://github.com/Maira-castro)**