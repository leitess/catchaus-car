CATCHAUS CAR
============
Script para popular uma tabela de banco de 
dados no MySQL usando o Sequelize.

Este script foi escrito para a disciplina
de Mineração de dados. Ele busca um arquivo
do tipo json que está na pasta data, para
poder então, popular o banco dados com um
array de dados.

O método bulkCreate do Sequelize, permite
realizar um INSERT MANY no banco de dados.

Para rodar o script, primeiro descomente a
linha 12 e use o comando: 

  npm run dev

Por fim, comente a linha 12 e descomente a
linha 13 use o comando:
  
  npm run dev

novamente.

A linha 12 irá sincronizar o banco de dados,
enquanto a linha 13, irá ler o arquivo .json
fornecido na atividade e depois popular o 
banco da dados.

Referências
===========
https://parvez1487.medium.com/how-to-add-multiple-rows-using-sequelize-bulkcreate-method-b5cc032eabc5