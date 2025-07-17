# 🚀 Clone Twitter

<p align="center">
  <img src="public/logo.png" width="120" alt="Logo" />
</p>

<h1 align="center">Clone Twitter</h1>

## 🌎 Projeto Online

[🔗 Acesse aqui](https://projecttweet.netlify.app)

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
├── public/               # Arquivos estáticos (imagens, favicon, etc)
├── src/
│   ├── app/              # Páginas e rotas do Next.js (autenticação, feed, perfil, busca, etc)
│   ├── components/       # Componentes reutilizáveis (UI, navegação, tweet, perfil, etc)
│   ├── data/             # Dados mockados para usuários e tweets
│   ├── types/            # Tipagens TypeScript para entidades do projeto
│   └── utils/            # Funções utilitárias (ex: formatação de datas)
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.ts    # Configuração do Tailwind CSS
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Documentação do projeto
```

### Descrição das principais pastas:
- **/src/app/**: Onde ficam as páginas e rotas do projeto, organizadas por contexto (ex: autenticação, feed, perfil, busca, tweet).
- **/src/components/**: Componentes reutilizáveis, separados por domínio (auth, home, nav, profile, tweet, ui).
- **/src/data/**: Dados mockados para simular usuários e tweets.
- **/src/types/**: Tipos TypeScript para garantir tipagem forte e segurança.
- **/src/utils/**: Funções utilitárias, como formatação de datas.

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

- **Next.js** (React 18)
- **TypeScript**
- **Tailwind CSS**
- **FontAwesome** (ícones)
- **PostCSS**
- **Git**

---

## 🏁 Como Rodar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/micas-tsx/clone-twitter.git
cd clone-twitter
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador:**
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