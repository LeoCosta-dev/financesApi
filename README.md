# Finances API

## Instalando as dependencias do projeto:

Para instalação das dependecias necessárias basta rodar o comando abaixo.

```bash
make setup
```
## Rodando o projeto localmente com o docker

Para essa opção é importante já ter instalado em sua máquina o virtualizador docker. Através dele será criado um container para o banco de dados MongoDB, possibilitando testes locais. As variaveis de ambiente que possibilitam o acesso a esse container já são configuradas durante o script ao rodar o comando abaixo.

```bash
make run-local-docker
```

## Rodando o projeto localmente sem o docker

Sem o auxílio do virtualizador, será necessário já possuir acessos próprios ao mongoDB, uma sugestão é seguir esse <a href="https://blog.cod3r.com.br/como-utilizar-mongodb-atlas/">tutorial</a> para criação de um server gratuito junto a atlas. Com isso em mão configure as variaveis de ambiente conforme <a href="./.env.exemple"> o arquivo .env de exemplo</a>, o funcionamento da aplicação está condicionado ao sucesso na conexão com o mongo.

exemplo de variaveis de ambiente:
```bash
MONGO_URL="mongodb://localhost:27017"
MONGO_USERNAME="local"
MONGO_PASSWORD="local"
```

Com as variáveis configuradas, basta rodar o comando abaixo e o servidor irá iniciar em modo de desenvolvimento.
```bash
make run-local
```

Para fazer deploy do servidor junto a vercel, de maneira pré configurada existe um comando de script, que irá instalar o CLI e inicializar o processo de build, segue abaixo o comando.

```bash
make deploy
```


Url base da aplicação: https://finances-api-node.vercel.app/