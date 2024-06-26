# REST Countries + shadcn-ui

Projeto frontend com o intuito de aprimorar as habilidades de desenvolvimento de UI utilizando **Shadcn-ui** + **Reactjs** +**Tailwind**

[>> Link para a aplicação <<](https://restcountries-shadcn-ui.netlify.app/)

## Stack

**Tecnologias:** Reactjs, TypeScript, Tailwindcss e Shadcn-ui.

## Deploy

Instalar dependências e rodar aplicação

```bash
npm install
npm run dev
```

## Documentação da API Consumida

[>>Site para a documentação oficial<<](https://restcountries.com/)

#### Retornar todas os países

```bash
  GET https://restcountries.com/v3.1/all
```

#### Retornar todos os países de uma região

```bash
  GET https://restcountries.com/v3.1/region/${region}
```

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `region`  | `string` | O nome da região |

## Bibliotecas Utilizadas

- [shadcn-ui](https://ui.shadcn.com/)
- [tailwindcss](https://tailwindcss.com/)
- [lucide-icons](https://lucide.dev/)
