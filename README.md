# 👗 FancyStyle – App de Moda Feminina

Aplicativo mobile desenvolvido com **React Native + Expo** para uma loja de moda feminina. O objetivo do app é proporcionar uma experiência simples, elegante e funcional para clientes navegarem por produtos, conhecerem a história da marca e acessarem os itens mais recentes.

---

## 📱 Funcionalidades

- 🛍️ **Lista de produtos** com layout em grade (2 por linha)
- 🔎 **Busca por nome** em tempo real
- 🔁 **Rotas dinâmicas** para página de cada produto
- 🧵 **Detalhes de produto** com imagem, descrição, categoria e preço
- 📖 **Tela "Sobre"** com a história da marca **FancyStyle**
- 🆕 **Últimos 5 produtos cadastrados** em destaque
- 💾 **Persistência local** usando **SQLite**
- ✅ **Testes unitários** com **Jest** na função de busca

---

## 🧪 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [Expo Router](https://expo.github.io/router/docs)
- [Jest](https://jestjs.io/)

---

## 🗂️ Estrutura do Projeto

📦 FancyStyleApp
├── 📁 components
│ └── ProductCard.tsx
├── 📁 database
│ └── products.db
├── 📁 screens
│ ├── Home.tsx
│ ├── ProductDetails.tsx
│ ├── About.tsx
├── 📁 assets
│ └── images/
├── App.tsx
└── app.config.js


---

## 📸 Capturas de Tela

> (Insira aqui imagens do app em funcionamento)

![Tela inicial](./assets/screens/home.png)
![Detalhes do produto](./assets/screens/product-details.png)
