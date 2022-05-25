# API Book
 
> Esse projeto consiste em uma aplicação responsável por cadastrar, alterar, atualizar, listar e excluir livros. Utilizando o banco de dados MongoDB.
 
## Rotas
 
> A API possui 6 rotas:
 
### Status
#### GET /book/status
> Essa rota é para verificar se a aplicação está funcionando.
 
### Cadastro de um livro
#### POST /book
> Essa rota é para cadastrar um livro, precisa passar um body com os campos para cadastrar um livro, por exemplo:
```
{
   "sbn": "123",
   "name": "mario bros volume 3",
   "description": "game",
   "author": "nintendo",
   "inventory": 10
}
```
 
### Visualizar todos os livros
#### GET /book?page=?&limit=
> Essa rota é responsável por todos os livros de forma paginada e precisa passar dois parâmetros via query:
```
page: número da página
limit: a quantidade máxima de livros por página
```
Obs: caso não for informado esses parâmetros por default irá mostrar os dez primeiros itens da primeira página.
 
### Visualizar um único livro
#### GET /book/:sbn
> Essa rota é responsável por mostrar um único item de forma detalhada.
Para visualizar basta passar como parâmetro o sbn do livro.
 
### Alterar um livro
#### PATCH /book/:sbn
>Essa rota é responsável por atualizar os dados de um livro, somente o sbn nunca é alterado. Para atualizar um livro precisa informar o sbn como parâmetro e informar no body as atualiçōes, por exemplo:
```
{
   "name": "mario bros volume 2",
   "description": "game",
   "author": "nintendo",
   "inventory": 10
}
```
### Excluir um livro
#### DELETE /book/:sbn
> Essa rota é responsável por deletar um livro. Basta passar o sbn do livro na rota para fazer a exclusão.
 
## Build
 
>Existe duas formas de executar a aplicação:
```
1) Após baixar e instalar as dependências, crie o arquivo .env e configure as variáveis de ambiente e por último rode o comando npm run start.
 
2) Com o docker instalado execute o comando docker-compose up, que irá subir a aplicação com o banco de dados configurado.
```
