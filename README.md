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
- Cypress v15.18.1
- Allure Cypress v3.10.2 (relatórios detalhados)
- Allure Commandline v2.43.0 (geração de relatórios HTML)
- @faker-js/faker v9.8.0 (geração de dados de teste)
- faker-br v0.4.1 (dados específicos para o Brasil)
- cypress-file-upload v5.0.8 (upload de arquivos)
- cypress-docgen v1.0.0 (documentação)
- @bahmutov/cy-grep v2.0.35 (filtragem de testes)
- cypress-plugin-grep-boxes v1.1.1 (interface de filtragem)

**Pré-requisito:** Java instalado no sistema (necessário para Allure Report)

## 🚀 Execução dos Testes

O projeto possui os seguintes scripts configurados no `package.json`:

```bash
# Abrir o Cypress no modo interativo
npm run cyOpen

# Executar testes no modo headless
npm run cyRun

# Executar testes com geração de relatório Allure
npm run cuRunReport

# Gerar documentação dos testes
npm run docgen
```

### � Comandos Adicionais

```bash
# Executar testes com tags específicas
npx cypress run --env grep="@tag"

# Gerar apenas o relatório Allure (sem executar testes)
npx allure generate allure-results -o allure-report

# Abrir relatório gerado anteriormente
npx allure open allure-report
```

### � Relatórios Allure

O script `npm run cuRunReport` automatiza todo o fluxo:
1. Executa todos os testes Cypress
2. Salva os resultados em `allure-results/`
3. Gera um relatório HTML interativo em `allure-report/`
4. Abre o relatório automaticamente no navegador

### 📁 Locais dos Arquivos Gerados

- Resultados dos testes: `allure-results/`
- Relatórios Allure: `allure-report/`
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