# 🚀 Clone Twitter

<p align="center">
  <img src="frontend/public/logo.png" width="120" alt="Logo" />
</p>

<h1 align="center">Clone Twitter</h1>

## 🌎 Projeto Online

[🔗 Acesse aqui](https://zprojeto.netlify.app)

---

## 📑 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Stacks e Ferramentas](#-stacks-e-ferramentas)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Como Contribuir](#-como-contribuir)
- [Licença](#-licença)

---

## 📕 Sobre o Projeto

O **Clone Twitter** é um projeto desenvolvido durante meus estudos em React, com o objetivo de replicar a experiência do antigo Twitter, incluindo as principais funcionalidades da plataforma, interface moderna e responsiva, e boas práticas de desenvolvimento front-end.

---

## 🗂️ Estrutura do Projeto

```
clone-twitter/
├── frontend/                # Frontend Next.js (interface, rotas, componentes, etc)
│   ├── public/              # Arquivos estáticos (imagens, favicon, etc)
│   └── src/
│       ├── app/             # Páginas e rotas do Next.js
│       ├── components/      # Componentes reutilizáveis
│       ├── data/            # Dados mockados
│       ├── types/           # Tipagens TypeScript
│       └── utils/           # Funções utilitárias
├── backend/                 # Backend Node.js (API REST, autenticação, banco de dados)
│   ├── src/
│   │   ├── controllers/     # Controllers das rotas
│   │   ├── routers/         # Definição das rotas
│   │   ├── services/        # Lógica de negócio
│   │   ├── schemas/         # Schemas de validação (Zod)
│   │   ├── types/           # Tipos TypeScript
│   │   └── utils/           # Funções utilitárias
│   ├── prisma/              # Migrations e schema do banco (Prisma)
│   ├── package.json         # Dependências do backend
│   └── tsconfig.json        # Configuração TypeScript backend
├── .gitignore               # Ignora node_modules e .env em todos os diretórios
├── package.json             # Dependências e scripts do monorepo
└── README.md                # Documentação do projeto
```

### Observações importantes:
- **.env** e **node_modules** de qualquer subdiretório são ignorados pelo git (não vão para o repositório).
- O backend utiliza **Prisma** para ORM e migrations, e **Zod** para validação de dados.
- O frontend é um app Next.js moderno, com Tailwind CSS e tipagem forte.

---

## ✨ Funcionalidades

- Autenticação de usuário (login e cadastro)
- Feed de tweets
- Postagem de novos tweets
- Visualização de tweet individual
- Perfil de usuário (com edição)
- Busca de tweets
- Área de tendências e recomendações
- Interface responsiva e moderna

---

## 🛠️ Stacks e Ferramentas

### Frontend
- **Next.js** (React 18)
- **TypeScript**
- **Tailwind CSS**
- **FontAwesome** (ícones)
- **PostCSS**
- **Git**

### Backend
- **Node.js** + **Express**
- **TypeScript**
- **Prisma** (ORM e migrations)
- **SQLite** (banco local, fácil de rodar)
- **Zod** (validação de dados)
- **JWT** (autenticação)
- **Bcrypt** (hash de senha)
- **Helmet** (segurança)
- **CORS**

---

## 🏁 Como Rodar Localmente

### 1. Clone o repositório
```bash
git clone https://github.com/micas-tsx/clone-twitter.git
cd clone-twitter
```

### 2. Instale as dependências do frontend e backend
```bash
cd frontend && npm install # ou yarn install
cd ../backend && npm install # ou yarn install
```

### 3. Configure o banco e variáveis de ambiente
- Copie o arquivo `.env.example` para `.env` em `backend/` e ajuste as variáveis conforme necessário.
- Rode as migrations do Prisma:
```bash
cd backend
npx prisma migrate dev
```

### 4. Inicie o backend
```bash
cd backend
npm run dev
```

### 5. Inicie o frontend
```bash
cd frontend
npm run dev
```

### 6. Acesse no navegador
```
http://localhost:3000
```

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature/ajuste: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'feat: minha nova feature'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

<p align="center">Feito com 💙 por Micael Abud</p>
