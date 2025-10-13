# 📋 Buger Eats - Cypress

Esse é um projeto prático direto ao ponto de Cypress Discovery Degustação com o Papito.
Nesse projeto eu adicionei mais alguns cenários de testes e também trabalhei com o faker para auxiliar criação de dados. 

## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/                        # Arquivos de teste
│   │   ├── cadastro.cy.js         # Testes de cadastro
│   │   └── home.cy.js            # Testes da página inicial
│   │
│   ├── fixtures/                   # Dados para testes
│   │   ├── cadastroData.json     # Dados para testes de cadastro
│   │   ├── homeData.json        # Dados para testes da home
│   │   ├── arquivos/            # Arquivos diversos
│   │   │   └── teste_csv.csv
│   │   └── images/             # Imagens para testes
│   │
│   ├── results/                    # Relatórios de execução
│   │   ├── mochawesome_*.html    # Relatórios de teste
│   │   └── assets/              # Recursos do relatório
│   │
│   ├── screenshots/                # Screenshots de falhas
│   │   └── cadastro.cy.js/
│   │
│   └── support/                    # Arquivos de suporte
│       ├── commands.js           # Comandos customizados
│       ├── e2e.js               # Configurações de e2e
│       └── pages/               # Page Objects
│           ├── cadastro/        # PO - Cadastro
│           │   ├── elements.js
│           │   └── index.js
│           └── home/           # PO - Home
│               ├── elements.js
│               └── index.js
│
├── spec-docs-folder/               # Documentação
│   └── cypress-e2e.md
│
├── cypress.config.js               # Configuração do Cypress
└── package.json                    # Dependências do projeto
```

## ⚙️ Pré-requisitos

```bash
- Node.js
- npm 
```

## ⚙️ Instalação

Para instalar todas as dependências do projeto, execute:

```bash
npm install
```

Isso instalará automaticamente:
- Cypress v13.15.0
- @faker-js/faker v9.8.0 (geração de dados de teste)
- faker-br v0.4.1 (dados específicos para o Brasil)
- cypress-file-upload v5.0.8 (upload de arquivos)
- mochawesome v7.1.3 (relatórios)
- cypress-docgen v1.0.0 (documentação)
- @bahmutov/cy-grep v2.0.35 (filtragem de testes)

## 🚀 Execução dos Testes

O projeto possui os seguintes scripts configurados no `package.json`:

```bash
# Abrir o Cypress no modo interativo
npm run cyOpen

# Executar testes com geração de relatório Mochawesome
npm run cyRunReport

# Gerar documentação dos testes
npm run docgen
```

### � Comandos Adicionais

```bash
# Executar testes no modo headless
npx cypress run

# Executar testes específicos usando tags
npx cypress run --env grep="@tag"

# Executar testes e gerar vídeos
npx cypress run --record
```

### 📝 Relatórios

Os relatórios são gerados automaticamente nas seguintes localizações:
- Relatórios Mochawesome: `cypress/results/`
- Screenshots de falhas: `cypress/screenshots/`
- Documentação gerada: `spec-docs-folder/`

## 💡 Testes

### Home
- ✅ Validar o título do app.
- ✅ Validar o subtítulo do app.
- ✅ Validar a frase do app.
- ✅ Validar o botão de Cadastre-se.
- ✅ Validar o direcionamento do botão Cadastre-se.

### Cadastro
- ✅ Validar acesso a tela de Cadastro
- ✅ Validar o campo Nome Completo como obrigatório.
- ✅ Validar o campo CPF como obrigatório.
- ✅ Validar o campo E-mail como obrigatório.
- ✅ Validar o campo CEP como obrigatório.
- ✅ Validar o campo Número como obrigatório.
- ✅ Validar o campo Método de Entrega como obrigatório.
- ✅ Validar o campo Foto da CNH como obrigatório.
- ✅ Validar o campo CPF com 12 dígitos.
- ✅ Validar o campo CPF com 10 dígitos.
- ✅ Validar o cadastro apenas com campos obrigatórios informados.
- ✅ Validar cadastro com CPF inválido.
- ✅ Validar a busca por CEP.
- ✅ Validar cadastro com E-mail inválido.
- ✅ Validar cadastro com método de entrega Moto.
- ✅ Validar cadastro com método de entrega Bicicleta.
- ✅ Validar cadastro com método de entrega Van/Carro.
- ✅ Validar envio de arquivo PDF em Foto da CNH.
- ✅ Validar envio de arquivo CSV em Foto da CNH.