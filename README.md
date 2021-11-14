# Github Stalker 🕶️

Teste de página de perfil para o Apto.

![](/public/img/octocat-detective.png)

## Premissa

Esse projeto utiliza a API do Github para retornar informações sobre uma determinada organização e seus repositórios.

Há uma tela inicial onde o usuário pode pesqisar pelo nome da organização. Na página da organização encontramos uma breve bio e uma lista de repositórios ordenada pela data de atualização. São mostrados 12 cards por vez, sendo possível ver mais resultados clicando no botão ao final da página.

Caso o usuário digite um nome inválido (isto é, que não haja nenhuma organização cadastrada no Github com aquele nome), será exibida uma página de 404, também com a opção de fazer uma nova busca.

O resultado do projeto pode ser acessado através [deste](https://github-stalker.mitestainer.com/) link, ou localmente pelo servidor do Next.

## Stack

O Github Stalker foi feito com as seguintes tecnologias, frameworks e bibliotecas:

- Next.js
- Styled-components
- TypeScript
- Jest
- React Testing Library
- Cypress

## Inicializando o projeto

Siga o procedimento tradicional do React, clonando o repositório para a sua máquina e instalando as dependências:


```
git clone

cd github-stalker

yarn
// ou
npm install
```

Em seguida, suba o servidor e acesse-o em `http://localhost:3000`:

```
yarn dev
// ou
npm run dev
```

## Comandos úteis

- `yarn test` para rodar todos os testes
- `yarn test:watch` para rodar e seguir escutando os testes nos componentes
- `yarn test:e2e` para rodar os testes de integração no browser

## Decisões durante a concepção

### Dependências

A estrutura do projeto segue um boilerplate que já traz a maioria das dependências que gosto de utilizar (confira o repositório do boilerplate [aqui](https://github.com/React-Avancado/boilerplate)). Mantive algumas coisas que acho válidas para qualquer projeto de nível profissional, como o ESLint e o Husky, para garantir que haverá uma boa entrega nos commits que subirão para remote. Porém, decidi remover para esse projeto em específico o seguinte:

- Storybook: não foram criados muitos componentes então não achei necessário fazer uma documentação de estilo. Sendo assim, removi do projeto para não ocupar espaço. Num projeto maior, com vários componentes, torna-se mais viável manter a ferramenta.

- Plop: acho muito bacana por automatizar o processo de criação dos componentes e já entregar todos os arquivos com um boilerplate inicial. Mas, novamente, por serem poucos componentes decidi remover para não subutilizar.

- Dependabot: apenas para não receber as notificações de update das dependências, visto que esse é um projeto de teste técnico.

### Estrutura de pastas

Deixo não apenas os componentes separados numa pasta específica, mas também os templates das páginas. Dentro do diretório `pages` gosto de manter apenas os arquivos com códigos relacionados ao Next.

Também criei uma pasta `utils` para manter todos os helpers que podem ser reutilizados em várias partes do projeto.

### Queries dos resultados

Inicialmente pensei em utilizar o GraphQL mas encontrei dois pontos a se pensar:

- A API do Github possui um client de GraphQL mas para utilizá-lo é necessária uma authorization token. Não seria problema criar uma key para um deploy, mas para rodar localmente o avaliador/usuário teria que por conta própria criar a sua própria key e incluí-la no projeto como uma varável ambiente.

- Mesmo que eu seguisse com o GraphQL do Github, eu utilizaria alguma biblioteca menor para realizar as queries, como o [graphql-request](https://github.com/prisma-labs/graphql-request), por conta do contexto do projeto - por ser um teste técnico e GraphQL não ser um requisito. Mas a simplicidade dessa lib tornaria o processo de desenvolvimento menos ágil se comparado com o Apollo, por exemplo. Gostaria de ter utilizado o Apollo tanto por já ter tido contato prévio quanto pela integração bacana que ele traz num projeto com Typescript (gerando tipagens para as queries, por exemplo) e React (como o hook `useQuery` que expõe valores de loading e paginação que tornariam a feature de 'Load more' bem simples de implementar)

### Geração de páginas

Optei apenas pelo `getServerSideProps` por depender dos resultados da API para poder exibir a página. Uma pré-geração estática poderia ser subutilizada no projeto, já que as opções de escolha de um handle de organização são inúmeras e desnecessárias de se prever. Essas opções (`getStaticProps` e `getStaticPaths`) são mais viáveis em blogs, por exemplo, cujas páginas das postagens devem sempre ser geradas estaticamente por dependerem bastante do SEO.

### Testes unitários

Alguns testes possuem snapshots para acompanhar e validar as mudanças do CSS. Também usei alguns mocks, tanto de valores representando as informações e repositórios da organização quanto mocks do prório jest, para deixar os testes um pouco mais performáticos. Por exemplo, quando temos componentes a serem exibidos dentro de um template, podemos passar um mock desse componente e não renderizá-lo nesse teste. Isso porque ele já foi validado no seu próprio teste, sendo que o que será validado do teste do template é a sua presença ou não em tela.

```
jest.mock('components/SearchBar', () => {
  return {
    __esModule: true,
    default: function () {
      return <div data-testid="Mock SearchBar"></div>
    }
  }
})
```

### Testes E2E

Os testes e2e são o meu conhecimento mais recente (nov/21), portanto pode ser que eu tenha deixado algum insight passar. Decidi fazer alguns testes mesmo assim, baseado no que aprendi: são testes para verificar a interção na página a partir do input na caixa de texto ou do click no botão para carregar mais resultados, por exemplo.

## Oportunidades de melhoria

### Tratamento de páginas com base no status da response

A página de 404 é exibida quando o resultado da busca na API retorna um status 404. Mas caso o código do status seja outro (5xx ou mesmo outro 4xx) a página provavelmente quebrará. Fiz assim puramente para ganhar tempo na realização do teste, mas numa abordagem mais ampla poderíamos ter diferentes páginas para exibir no caso de algum erro no servidor ("estamos com dificuldades técnicas" ou algo do tipo).

### Biblioteca para responsividade

Escrevi media queires convencionais para conseguir a responsividade porque usei apenas 1 breakpoint: `768px`. Para casos em que o design possua mais de um breakpoint, é interessante usar uma biblioteca como [styled-media-query](https://github.com/morajabi/styled-media-query) para manter todas as declarações de tamanho em um único arquivo (semelhante ao theme), além de ter uma sintaxe mais curta e colaborar com a clareza do código.

### Testes para responsividade

Não encontrei uma forma de testar a responsividade através do React Testing Library. Aparentemente não é possível no momento, como descrito nas discussões [aqui](https://stackoverflow.com/a/64393276) e [aqui](https://spectrum.chat/testing-library/help/how-to-test-in-different-screen-sizes-media-query~880bae6f-6bc9-460a-a397-85cbb8fd637e). É provável que a solução ficasse por conta do teste E2E.
