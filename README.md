<h1>Descrição do projeto Backend em Node JS</h1>
<p>A API consiste em validar uma senha de String com nove caracteres conforme descritivo abaixo:</p>
<ul>
  <li>Nove ou mais caracteres</li>
  <li>Ao menos 1 dígito</li>
  <li>Ao menos 1 letra minúscula</li>
  <li>Ao menos 1 letra maiúscula</li>
  <li>Considere como especial os seguintes caracteres: !@#$%^&*()-+</li>
  <li>Não possuir caracteres repetidos dentro do conjunto</li>
</ul>
<h1>Libs usadas</h1>
<ul>
  <li>Nodemon</li>
  <li>Express</li>
  <li>Mongoose</li>
  <li>JWT</li>
  <li>Bcrypt</li>
  <li>Cors</li>
</ul>
<p>A API em si valida se o usuário mandou uma senha com mais de 9 carácteres sem repetição de caractere, se tentar salvar uma senha com menos de 9 digitos a API manda status code 400.<br>
Caso satisfaça a condição a senha é persistida no mongoDB via conexão em CLOUD (Atlas).<br>
Se mandar senha vazia a API da 400, se tentar mandar email já persistido ela da status 401.<br>
O request tem 2 campos para persistir em Database, campo email e campo password.
</p>



