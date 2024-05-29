Projeto de Cadastro de Usuários

Este projeto é uma aplicação web simples que permite aos usuários se registrarem, fazerem login e visualizarem suas informações de perfil. A aplicação armazena os dados do usuário no localStorage do navegador.

Funcionalidades

Cadastro de novos usuários
Login de usuários existentes
Visualização das informações de perfil do usuário logado
Validação de senha no cadastro
Exibição de mensagens de erro para credenciais incorretas no login
Estrutura do Projeto

O projeto consiste nos seguintes arquivos principais:

index.html: Página de cadastro de usuários
login.html: Página de login de usuários
menu.html: Página de perfil do usuário logado
style.css: Arquivo de estilos CSS para a aplicação
register.js: Arquivo JavaScript para manipulação do cadastro de usuários
login.js: Arquivo JavaScript para manipulação do login de usuários
menu.js: Arquivo JavaScript para manipulação da exibição das informações do usuário
Como Executar o Projeto

Clone o repositório para o seu ambiente local:

bash
Copiar código
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
Copiar código
cd seu-repositorio
Abra o arquivo index.html no navegador para acessar a página de cadastro.

Funcionalidades Detalhadas

Cadastro de Usuários (register.js)
- Captura os dados do formulário de cadastro.
- Verifica se as senhas coincidem e exibe uma mensagem de erro se não coincidirem.
- Valida a força da senha e exibe mensagens informativas sobre os requisitos de senha.
- Armazena os dados do usuário no localStorage.

Login de Usuários (login.js)
- Captura os dados do formulário de login.
- Verifica se as credenciais correspondem a um usuário cadastrado.
- Armazena o email do usuário logado no localStorage e redireciona para a página de perfil.
- Exibe uma mensagem de erro se as credenciais estiverem incorretas.

Exibição das Informações do Usuário (menu.js)
- Recupera o email do usuário logado do localStorage.
- Encontra o usuário correspondente na lista de usuários armazenados.
- Exibe as informações do usuário logado na página de perfil.
