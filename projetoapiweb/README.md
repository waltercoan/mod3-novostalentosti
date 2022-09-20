# Projeto API WEB NodeJS
Implementação de uma API REST utilizando 
NodeJS e Express
- REST - Representação do estado dos dados
- Formato: JSON Javascript Object Notation

## Criando o projeto
- criar uma pasta com o nome do projeto
- abrir o terminal do VSCode
- entrar na pasta do projeto: cd projetoapiweb
- criar novo projeto: npm init
- o npm irá gerar o arquivo descritor do projeto

## Instalando dependencias
- instalar o express: npm i express --save

## Ferramentas
Utilizadas para testar a API
 - Extensão do VSCode Thunder Client
 - Extensão do VSCode REST Client

## Padrões de nomenclatura
- https://restfulapi.net/resource-naming/

### Endpoint GET /api/v1/clientes
- Verbo GET do protocolo HTTP
- Objetivo: retornar uma lista de objetos cliente
- HTTP Status Code 200 - Sucesso
- Header Resposta
  - Content-Type = application/json (tipo do informação retornada pela API)

### Endpoint GET /api/v1/clientes/{id}
- Verbo GET do protocolo HTTP
- Objetivo: retornar uma única instância do objeto cliente de acordo com o ID informado na URL
- HTTP Status Code 200 - Sucesso
- HTTP Status Code 404 - Not Found
- Header Resposta
    - Content-Type = application/json (tipo do informação retornada pela API)

### Endpoint POST /api/v1/clientes
- Verbo POST do protocolo HTTP
- Objetivo: recebe no corpo (body) da requisição um objeto e insere na lista de dados
- Retorna o objeto inserido no sistema
- HTTP Status Code 201 - Created
- HTTP Status Code 400 - Bad Request - se o corpo não possuir um objeto
- Header Resposta
    - Content-Type = application/json (tipo do informação retornada pela API)