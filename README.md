# Manufatura

`CURSO: Sistemas de Informação`

`DISCIPLINA: Projeto - Projeto de Infraestrutura`

`Eixo: 5`

## Integrantes

* Nicolas Cleiton Basilio Viana
* João Pedro Reis Martins

## Orientador

* Alexandre Teixeira

# Sobre

Sistema backend feito para o gerenciamento de um CRUD simples no projeto de redes do eixo 5.

## Como executar

Para executar o projeto, tenha a certeza de que o ```docker``` e ```docker compose``` estão devidamente instalados no seu sistema operacional, ou instale manualmente o banco de dados ```PostgreSQL``` e altere os valores das variáveis no arquivo ```.env``` para apontar a este banco de dados gerenciado manualmente.

Se optar por usar o docker compose, execute o comando abaixo:
```bash
docker compose up
```

Logo em seguida, instale todas as dependências do projeto executando o comando abaixo com base no seu gerenciador de pacotes node favorito:
```
npm install
```

Após a instalação, execute o comando abaixo para iniciar a execução do servidor:
```
npm run start:dev
```

## Documentação

Acesse a url ```http://localhost:3000/api``` para consultar todas as rotas disponíveis nesta API.
