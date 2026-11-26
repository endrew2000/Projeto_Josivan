Este documento centraliza as interações com a Inteligência Artificial durante a construção da interface do projeto. A IA foi operada estritamente no modelo "Mentor-Mentee" (Sênior para Júnior), focando no aprendizado da arquitetura React, tipagem com TypeScript e componentização, rejeitando a cópia direta de código.

---

## Fase 1: Configuração de Ambiente e Entendimento de Frameworks
* **Prompt:** *"Fiz através do NotebookLM esse projeto, já tenho o VS Code, porém, não sei implementar o ambiente do React, poderia ajudar?"*
  * **Objetivo:** Inicializar o projeto utilizando Vite e React, estruturando as pastas iniciais.
* **Prompt:** *"tailwindcss, o que seria? Como funciona? E porque foi colocado aqui?"*
  * **Objetivo:** Compreender a adoção de classes utilitárias em oposição ao CSS tradicional para prevenir *merge conflicts* no GitHub.
* **Prompt:** *"Como saber qual usar? Você está me dando essas fontes e estilização mas... como saber, caso precise, sem IA."*
  * **Ação Executada:** Instalação do *Tailwind CSS IntelliSense* e leitura da documentação oficial.

## Fase 2: Tipagem Estrita e Versionamento
* **Prompt:** *"Teríamos como alterar para typescript ou seria loucura nesse momento? (...) o professor está usando o Typescript + react..."*
  * **Ação Executada:** Migração do JavaScript para TypeScript (arquivos `.tsx`), alinhando com as exigências da disciplina.
* **Prompt:** *"Não entendi bem o erro... [Envio de imagem com erros 'any' e 'props']"*
  * **Ação Executada:** Criação da primeira `interface` para definir o contrato de dados (Tipagem estrita de Propriedades).
* **Prompt:** *"Preciso atualizar os arquivos do GITHUB, como devo proceder?"*
  * **Ação Executada:** Prática de comandos Git (`add`, `commit`, `push`).

## Fase 3: Dados Dinâmicos e Componentização
* **Prompt:** *"Gostaria então de prosseguir com a criação/edição desse site, por gentileza, não me dê o código pronto, me direcione..."*
  * **Ação Executada:** Desenvolvimento isolado do componente de Card.
* **Prompt:** *"Certo, feito mais essa etapa e qual deve ser o próximo passo?"*
  * **Ação Executada:** Simulação de um banco de dados via array de objetos e uso do método iterativo `.map()` no `App.tsx`.

## Fase 4: Integração de Design UI/UX
* **Prompt:** *"Pedi ao FRAGMA para realizar um esboço. Gostaria da sua avaliação para melhorar ainda mais o que já criamos. O que achou?"*
  * **Ação Executada:** Evolução da interface para um layout profissional de Tabela Acadêmica, refatorando o Card para `LinhaMaterial.tsx` utilizando `CSS Grid` (`grid-cols-5`).

## Fase 5: Estruturação dos Filtros, Flexbox e Desafios de Sintaxe (MVP)
* **Prompt:** *"Partindo do início, o que falta, em termos de front-end? (...) item 1 [Filtros]. Não me vomite código mas instrua-me como um sênior para júnior."*
  * **Objetivo:** Iniciar o componente `Filtros.tsx` usando semântica HTML e Tailwind.
* **Prompt:** *"[Envio de código com a sintaxe incorreta: style={'p-4' 'bg-white'...}]"*
  * **Objetivo/Correção:** Entender a diferença entre a propriedade `style` (CSS in JS) e a propriedade `className` no ecossistema React.
* **Prompt:** *"Não está aparecendo a atualização."*
  * **Objetivo/Correção:** Compreender o ciclo de renderização do React, movendo a chamada `<Filtros />` dos "bastidores" (escopo da função) para o "palco" (dentro do bloco `return`).
* **Prompt:** *"Onde está o erro? Não está bem 'encaixado' na visibilidade. [Envio de imagem]"*
  * **Objetivo/Correção:** Depurar o DOM e corrigir erros de formatação de classes (como o uso da letra "e" para separar classes do Tailwind) e tags HTML não fechadas.
* **Prompt:** *"O texto é muito grande no placeholder ele não fica completo, o que posso fazer para lidar com isso?"*
  * **Ação Executada:** Aplicação de conceitos de UX Mobile-first, diminuindo a fonte (`text-sm`) e tratando o corte de texto de forma elegante (`text-ellipsis`).
* **Prompt:** *"Como faço para fazer uma pequena separação? No CSS puro, usando apenas o MARGIN: 2PX, por exemplo. Mas nesse CSS TAILWIND, como faço?"*
  * **Ação Executada:** Substituição da lógica de margens tradicionais (`ml`, `mr`) pelo uso inteligente da propriedade `gap-4` dentro de contêineres `flex`.
* **Prompt:** *"Ficou uma caixa dentro da outra, muito longa... Teria como diminuir essa caixa?"*
  * **Ação Executada:** Ajuste do *Box Model*, removendo divs aninhadas desnecessárias e limitando a largura do componente (`max-w-2xl` / redução de `padding`).
* **Prompt:** *"Gostaria de pesquisar também por: Formato, Período ou Disciplina. Como fazer isso?"*
  * **Ação Executada:** Implementação da linha secundária de filtros através das tags `<select>` e `<option>`, organizadas lado a lado através de um `grid-cols-3`.

---
**Conclusão do MVP Front-end:**
A aplicação possui agora uma arquitetura componentizada (`App.tsx` gerenciando `Navbar.tsx`, `Filtros.tsx` e `LinhaMaterial.tsx`), tipagem rigorosa para evitar quebras em tempo de execução, e um layout responsivo estruturado puramente via Tailwind CSS, preparado para receber a lógica de estado (`useState`) e o backend em PostgreSQL.

## Fase 6: Versionamento Colaborativo e Arquitetura de Autenticação
* **Prompt:** *"Na verdade, todo esse trabalho não foi adicionado aos colaboradores do projeto. Já fiz o commit e sincronizei."*
  * **Objetivo/Solução:** Compreender o fluxo de trabalho no GitHub em equipe, focando na necessidade de permissões no repositório (Collaborators) e no comando `git pull` para atualizar o ambiente local dos colegas.
* **Prompt:** *"Preciso de duas informações: Qual o BD será usado no REACT? Além disso, caso não haja poderá ser usado o POSTGREESQL?"*
  * **Objetivo:** Definir a arquitetura do sistema. Compreensão de que o React (Front-end) não se conecta diretamente ao PostgreSQL por segurança, necessitando de um intermediário (API ou BaaS como Supabase).
* **Prompt:** *"Como fazer a validação do email? Front ou back? E também como seria o processo?"* / *"E no cadastro, se seria um e-mail válido!?"*
  * **Objetivo:** Estabelecer a estratégia de segurança (Back-end) vs Experiência do Usuário (Front-end). Definição do uso de Single Sign-On (OAuth/Google Auth) focado no domínio acadêmico institucional para evitar cadastros falsos.

## Fase 7: Correções de Árvore DOM (JSX) e Planejamento Final do MVP
* **Prompt:** *"Como resolvo esse problema? [Envio de erro Vite 'Adjacent JSX elements']"*
  * **Objetivo/Correção:** Entender a regra absoluta do React de retornar um único elemento pai por componente, aplicando o uso de Fragmentos React (`<> ... </>`).
* **Prompt:** *"E agora? [Envio de erro 'O elemento JSX div não tem uma marcação de fechamento']"*
  * **Objetivo/Correção:** Depuração de código residual (tags órfãs). Limpeza da árvore DOM para que o Vite pudesse voltar a renderizar a aplicação.
* **Prompt:** *"Certo, preciso dar continuidade, no front-end. Quais são os últimos passos para finalizarmos?"*
  * **Ação Executada:** Definição do *Sprint Backlog* final: 1) Abas de Categoria (Tabs), 2) Gerenciamento de Estado (useState), 3) Modal de Envio e 4) Rodapé.

## Fase 8: Identidade Visual Institucional, Z-Index e Contraste UI/UX
* **Prompt:** *"Certo, façamos o primeiro passo desse projeto. O que será preciso fazer?"*
  * **Ação Executada:** Criação e componentização do arquivo `Tabs.tsx` focado em design condicional (aba ativa vs inativa).
* **Prompt:** *"Preciso dar uma distância maior entre o tabs, filtros e entre Filtros a frase..."*
  * **Ação Executada:** Ajustes de espaçamento usando `margin-bottom` (`mb-8`) do Tailwind CSS.
* **Prompt:** *"Preciso adicionar as cores da universidade UNINASSAU (...) E adicionar essa imagem de modo que fique bem centralizado e distribuído no fundo da tela."*
  * **Objetivo:** Inserir a identidade visual do cliente (Brasão e paleta HEX `#1E3A8A` / `#DC2626`).
* **Prompt:** *"Esse é o script, não houve alterações sobre o fundo da tela. O que houve? Como consertar?"*
  * **Objetivo/Correção:** Resolução de conflitos de Contexto de Empilhamento (*Stacking Context*). Ajuste das propriedades `z-index`, `relative`, `absolute` e `pointer-events-none` para criar a camada de marca d'água corretamente.
* **Prompt:** *"O nome estava errado realmente, porém, preciso dar um destaque maior, está muito apagado. Como fazer isso?"*
  * **Ação Executada:** Manipulação da propriedade `opacity` (opacidade) no Tailwind para equilibrar a visibilidade da marca d'água.
* **Prompt:** *"Preciso destacar os textos da imagem ao fundo. Essa alteração seria das fontes ou apenas nas cores? Ambas? Como proceder?"*
  * **Objetivo:** Refinar a legibilidade e acessibilidade (UX) sobrepondo textos em fundos com imagem, aumentando o "peso" da fonte (`font-medium`) e escurecendo os tons (`text-gray-900`).
* **Prompt:** *"Certo, preciso adicionar as cores da uninassau nesse local [Tabs], o que fazer?"* / *"O itens só aparecem ao passar o mouse por cima, isso está coerente?"*
  * **Objetivo/Correção:** Refatoração do componente `Tabs.tsx` para remover fundos escuros conflitantes e resolver a falha de contraste (texto branco em fundo claro), garantindo a acessibilidade das abas inativas.

  ## Fase 9: Gerenciamento de Estado (useState), Interatividade e Microcopy
* **Prompt:** *"Assim e o que cada coisa faz? [Envio de código inicial do useState]"*
  * **Objetivo/Solução:** Compreender a mecânica do *Hook* `useState`. Definição de como a memória do componente é lida (`abaAtiva`) e como ela deve ser obrigatoriamente atualizada através do *setter* (`setAbaAtiva`), respeitando a imutabilidade do React. Correção da convenção de nomenclatura de variáveis de *snake_case* (`aba_Ativa`) para o padrão da indústria *camelCase* (`abaAtiva`).
* **Prompt:** *"Coloquei conforme instruído e ficou todo em branco. [Envio de erro 'Tela Branca da Morte' do React]"*
  * **Objetivo/Correção:** Resolução de erro fatal de referência (ReferenceError). Entender que o JavaScript é *case-sensitive* e que a divergência de nomenclatura entre a declaração do estado e a sua chamada no `onClick` quebra a árvore de renderização.
* **Prompt:** *"Funcionou, parabéns. Porém, para que isso exatamente? Qual a ideia de se utilizar esse procedimento? E preciso que me explique cada linha..."*
  * **Ação Executada:** Aprofundamento no conceito de injeção dinâmica de CSS. Utilização de *Template Literals* (crases) combinada com o Operador Ternário (`condição ? true : false`) dentro da propriedade `className` para permitir que a interface reaja em tempo real ao clique do usuário, alternando classes do Tailwind CSS sem recarregar a página.
* **Prompt:** *"Prossigamos! / Ao preencher o APP.tsx isso apareceu. [Erro de tipagem no componente pai]"*
  * **Objetivo/Correção:** Implementação do conceito de Elevação de Estado (*Lifting State Up*). Migração da memória do componente filho (`Tabs.tsx`) para o palco principal (`App.tsx`), passando o estado e a função de atualização através de propriedades (*props*). Resolução de erro TypeScript `ts(2322)` ao substituir a passagem incorreta de props por *strings* (aspas) pela correta injeção de variáveis (chaves `{}`). Transformação de `<Tabs/>` em um *Dumb Component* (Componente de Apresentação).
* **Prompt:** *"Preciso alterar esse nome e imagem, para a logo do que já possuo em public e aceito sugestões, ideias para colocar como nome."*
  * **Ação Executada:** Refatoração do arquivo raiz `index.html`. Edição das tags `<title>` e `<link rel="icon">` (Favicon) no `<head>` do documento.
* **Prompt:** *"Preciso que ilustre a ideia de comunidade, dos estudantes como criadores/mantedores."*
  * **Ação Executada:** Aplicação de conceitos de UX Writing através de *Microcopy de Pertencimento*. Criação de um Banner de Comunidade com *Call to Action* (Chamada para Ação) no topo do painel principal para incentivar a colaboração orgânica dos alunos no sistema *Open Source*.
* **Prompt:** *"Achei, muito obrigado. Mas a imagem não foi alterada, apenas o nome. / Ficou bem ruim a visualização, teria um formato adequado?"*
  * **Objetivo/Correção:** Entendimento de engenharia de *assets* para web. Correção do erro de apontamento na propriedade `href` da imagem e adequação da proporção do *Favicon*. Compreensão da necessidade de utilizar arquivos quadrados puros (proporção 1:1, focados apenas no brasão, sem textos anexos) no formato `.png` com fundo transparente para garantir a legibilidade do ícone nas abas dos navegadores.
  ## Fase 10: Lógica do Modal, Renderização Condicional e Resolução de Bugs (Tela Branca)
* **Prompt:** *"Realizado. E agora? E também, o que esse componente está fazendo?"* / *"Eu clico em adicionar materiais e nada acontece. Está corretoe?"*
* **Objetivo/Solução:** Explicação da arquitetura de *Overlay* (sobreposição com `z-index`) do Modal. Religação do fluxo de estado (`abrirModal`) entre o gatilho de clique no componente filho (`Filtros.tsx`) e a renderização condicional (`modalAberto &&`) no componente pai (`App.tsx`).
* **Prompt:** *"[Envio de erro 'Tela Branca da Morte']"* / *"Mudei apenas o nome para Modal e funcionou... porém, eis o resultado [Layout quebrado]"*
* **Objetivo/Correção:** Resolução de erro fatal de referência (*ReferenceError*) no React causado por divergência na nomenclatura de importação de arquivos (`ModalEnvio` vs `Modal.tsx`). Refatoração completa da UI da janela flutuante, aplicando `flex-col` para o empilhamento correto dos elementos e `backdrop-blur` para desfoque de fundo, aprimorando a UX.

## Fase 11: Finalização do Layout (Rodapé) e Tratamento de Conflitos Visuais
* **Prompt:** *"Funcionou perfeitamente, porém, a uma linha em cima do nome UNINASSAU e está atrapalhando... Removendo ou abaixando essa linha?"* / *"Na verdade, aumentou ainda mais a cor."*
* **Objetivo/Correção:** Criação do componente estático `Rodape.tsx`. Resolução de comportamento padrão do Tailwind CSS, onde a remoção da classe de cor mantendo o eixo (`border-t`) gerava uma linha sólida preta indesejada. Discussão técnica sobre design responsivo e o conflito entre o redimensionamento fluido de imagens de fundo (`bg-contain`) e elementos fixos do DOM, optando por um design *borderless* (sem linha) para máxima compatibilidade entre telas.

## Fase 12: Planejamento de Rotas (React Router) e Refatoração da Navbar
* **Prompt:** *"A tela de login que será a primeira... não é front end? Se for ser usada, no componente navbar, não deverá haver login, apenas o nome repositório, não é?"*
* **Objetivo/Solução:** Planejamento arquitetural para a transição de SPA simples para múltiplas rotas utilizando *React Router*, separando Layout de Autenticação (público) do Layout do Acervo (privado).
* **Prompt:** *"tenho o link oficial, do portal do aluno da instituição..."* / *"Ao invés do entrar com o Google, usar o link para acessar o portal."*
* **Ação Executada:** Refatoração do componente `Navbar.tsx` com foco em minimalismo e integração ao ecossistema institucional. Implementação de um botão de redirecionamento seguro (`target="_blank" rel="noopener noreferrer"`) para o ADFS oficial da faculdade.
## Fase 13: Controle de Versão (GitHub), Instalação do React Router e Reestruturação de Pastas
* **Prompt:** *"Como vejo as versões, no caso, de cada commit e conseguiria acessar as versões antes de cada commit? No ambiente GITHUB."*
* **Objetivo/Solução:** Compreensão do fluxo de rastreabilidade no GitHub, incluindo a consulta ao histórico de *commits*, análise de alterações (*diffs*) e navegação em versões anteriores do código através da opção de visualização do repositório por *commit* (`< >`).
* **Prompt:** *"Certo, creio que será necessário a instalação do react-router agora, certo? Afinal, para finalizarmos o front, antes será preciso a criação da tela de login/cadastro."* / *"No caso, devo apagar o App.tsx? já copiei e também adicionei os pontos extras no apontamento dos respectivos diretórios."*
* **Ação Executada:** Instalação da biblioteca `react-router-dom` e reorganização arquitetural do projeto, separando blocos reutilizáveis (`src/components`) de telas completas (`src/Pages`). Migração da interface do acervo para `Repositorio.tsx` e criação da página `Login.tsx`.
* **Prompt:** *"Está dando erro, embora já tenha corrigido e colocado a primeira maiúscula. [Envio de erros TypeScript ts(2307) e ts(2614)]"*
* **Objetivo/Correção:** Resolução de conflito de *case-sensitivity* no ambiente Linux (GitHub Codespaces), corrigindo a extensão do arquivo de `Login.Tsx` para `Login.tsx`, além da padronização da exportação nomeada (`export function Repositorio`) para corrigir a importação no roteador.

## Fase 14: Construção da Tela de Login, Navegação Programática e Identidade Visual
* **Prompt:** *"Funcionou, ao colocar: /login e /repositório, fui redirecionado para as páginas."* / *"Preciso fazer o mesmo que o repositório, tenho que colocar a imagem da universidade ao fundo."*
* **Ação Executada:** Implementação do formulário de autenticação em `Login.tsx` (campos de matrícula e senha) utilizando o *Hook* `useNavigate` no evento `onSubmit` para redirecionamento automático ao `/repositorio`. Aplicação da marca d'água institucional em camada de fundo (`absolute`, `opacity-10`, `pointer-events-none`) com destaque e legibilidade do cartão via `backdrop-blur-sm` e `z-10`.
* **Prompt:** *"[Envio de erro Vite/OXC: PARSE_ERROR Unexpected token na linha 76]"*
* **Objetivo/Correção:** Correção de erro de sintaxe JSX causado pelo fechamento incompleto das tags finais (`</div>`, `);`, `}`) ao atualizar a estrutura do `<main>` em `Login.tsx`.

## Fase 15: Refatoração para `Rotas.tsx`, Rota de Fallback (`<Navigate />`) e Conclusão do Front-end
* **Prompt:** *"Ao não colocar nada, sou direcionado a tela de login, porém, ao colocar/login, a tela fica em branco."* / *"Tá tudo tela branca agora [Envio de prints de Rotas.tsx e tela branca]"*
* **Objetivo/Correção:** Reestruturação de `App.tsx` para `Rotas.tsx` e atualização da importação nomeada no ponto de entrada `main.tsx` (eliminando a tela branca). Inclusão da rota explícita `/login` e da rota de segurança coringa (`path="*"`) com `<Navigate to="/" />` para impedir telas vazias em URLs inválidas.
* **Prompt:** *"[Envio de print com erro de referência no componente Navigate em Rotas.tsx]"*
* **Objetivo/Correção:** Adição do componente `Navigate` à declaração de importação do `react-router-dom` na primeira linha de `Rotas.tsx`.
* **Prompt:** *"Certo, o que o navegate faz exatamente?"* / *"Em outras palavras, o uso do Navigate, assegura que por um erro de digitação e/ou erro na paginação, o usuário seja levado sempre para a primeira tela..."* / *"Bom, coloquei o /repositório e fui direcionado para a tela, creio que deva ser feito o back-end para validar essa segurança..."*
* **Objetivo/Solução:** Alinhamento conceitual entre `<Navigate />` (redirecionamento declarativo de rotas) e `useNavigate()` (navegação programática acionada por eventos). Definição da separação de responsabilidades entre bloqueio de interface (Front-end) e validação real de credenciais/tokens (Back-end + PostgreSQL), encerrando a etapa estrutural do Front-end.

## Fase 16: Encerramento do Front-end e Passagem de Bastão (Handoff para Back-end)
* **Prompt:** *"A partir de agora, será dado o sistema/projeto a outro integrante. Ele será o responsável direto e completo de toda a parte back-end. Preciso que crie um prompt detalhando tudo o que foi feito, por exemplo: Linguagem, IDE, Frameworks, Bibliotecas, tudo que pode e foi usado até agora... Coloque esse prompt que está sendo pedido também no resumo a ser entregue ao professor, preciso que ele saiba que a partir de agora, outro irá assumir o controle da 'embarcação'."*
* **Objetivo/Ação Executada:** Conclusão formal do ciclo de desenvolvimento do Front-end e transição de liderança técnica (*Handoff*) para o integrante responsável pela arquitetura de Back-end e Banco de Dados (PostgreSQL). Elaboração de um *Prompt de Transferência de Contexto* contendo todo o inventário tecnológico utilizado (GitHub Codespaces, Vite, React, TypeScript, Tailwind CSS e React Router), o mapeamento completo de diretórios (`Rotas.tsx`, `Pages` e `components`), o estado atual dos dados simulados e as diretrizes pedagógicas de co-criação com a IA. Registro oficial da divisão de responsabilidades no projeto acadêmico, documentando que as próximas fases (API, autenticação, persistência de dados e integração) serão conduzidas sob nova autoria.


---

# Trilha Banco de Dados (Supabase)

## Fase 17: Planejamento do Banco de Dados e Modelo Relacional

### Resumo dos prompts e respostas

* **Prompt do usuário:** Solicitação para analisar o projeto acadêmico, identificar as entidades, os relacionamentos e estruturar um banco de dados antes de qualquer alteração no código.
* **Retorno:** Foi identificado que o projeto tinha uma versão de front-end em React/Vite e que a estrutura de banco ainda precisava ser planejada. Foi recomendado separar a análise do banco das futuras etapas de front-end e back-end.

* **Prompt do usuário:** Pedido para criar um modelo relacional tradicional, semelhante ao modelo visual enviado, com tabelas em caixas, campos, tipos, chaves primárias, chaves estrangeiras e cardinalidades.
* **Retorno:** Foi elaborado um modelo inicial com as entidades `USUARIO`, `CURSO`, `DISCIPLINA`, `TURMA`, `MATRICULA`, `MATERIAL`, `ARQUIVO`, `CATEGORIA` e `MODERACAO`, incluindo tabelas associativas e explicação das cardinalidades.

* **Prompt do usuário:** Solicitação para considerar que alunos e professores também podem ser moderadores e que uma pessoa pode possuir mais de um papel.
* **Retorno:** O campo único de perfil foi substituído pelas tabelas `PAPEL` e `USUARIO_PAPEL`, criando uma relação muitos-para-muitos entre usuários e papéis. Foram considerados exemplos como aluno + moderador, professor + moderador e professor + administrador.

* **Prompt do usuário:** Definição das regras do projeto: banco PostgreSQL no Supabase, arquivos em armazenamento, login por matrícula e senha ou conta Google/Gmail, materiais visíveis para toda a faculdade, aprovação obrigatória e formatos iniciais PDF, JPG/JPEG, PNG e TXT.
* **Retorno:** O modelo passou a considerar PostgreSQL/Supabase, autenticação relacionada ao usuário acadêmico, histórico de aprovação e armazenamento dos metadados dos arquivos no banco, mantendo os arquivos físicos fora das tabelas.

* **Prompt do usuário:** Esclarecimento de que o trabalho atual deve tratar exclusivamente do banco de dados, sem alterações no front-end ou no back-end.
* **Retorno:** O escopo foi limitado a entidades, atributos, tipos, chaves, relacionamentos, cardinalidades, restrições, status, datas, script SQL e futura criação controlada das tabelas no Supabase.

* **Prompt do usuário:** Definição de que o usuário não deve escolher manualmente se é aluno ou professor e de que um mesmo material pode ser relacionado a várias turmas, disciplinas ou contextos acadêmicos.
* **Retorno:** A tabela `MATRICULA` passou a registrar `tipo_participacao` como `ALUNO` ou `PROFESSOR`, obtido a partir do cadastro acadêmico. Foi criada a tabela intermediária `MATERIAL_TURMA`, transformando o relacionamento entre `MATERIAL` e `TURMA` em muitos-para-muitos.

* **Prompt do usuário:** Confirmação dos status `PENDENTE`, `APROVADO`, `REJEITADO` e `ARQUIVADO`, com fluxo de moderação e registro das datas do histórico.
* **Retorno:** A tabela `MODERACAO` foi definida para registrar material, moderador, status anterior, status novo, motivo e data/hora da decisão. O fluxo considerado é `PENDENTE → APROVADO`, `PENDENTE → REJEITADO`, `REJEITADO → PENDENTE` e `APROVADO → ARQUIVADO`.

* **Prompt do usuário:** Pedido para preparar primeiro um script SQL revisável e somente depois executar a estrutura no Supabase.
* **Retorno:** Foi preparado o arquivo `schema-repositorio-academico.sql` com tipos enumerados, tabelas, chaves primárias, chaves estrangeiras, índices, restrições e dados iniciais de papéis e categorias. O script ainda não foi executado no Supabase.

### Modelo de banco definido para revisão

As tabelas planejadas são:

```text
USUARIO
PAPEL
USUARIO_PAPEL
CURSO
DISCIPLINA
TURMA
MATRICULA
MATERIAL
MATERIAL_TURMA
ARQUIVO
CATEGORIA
MATERIAL_CATEGORIA
MODERACAO
```

### Decisões importantes registradas

1. O PostgreSQL do Supabase é o banco planejado para esta etapa.
2. `USUARIO_PAPEL` permite múltiplos papéis para uma mesma pessoa.
3. `MATRICULA` define a participação acadêmica como `ALUNO` ou `PROFESSOR`.
4. O usuário não deve escolher manualmente seu tipo de participação.
5. `MATERIAL_TURMA` permite que um material seja associado a várias turmas.
6. Todo material começa com status `PENDENTE`.
7. Todo material deve passar por aprovação antes de aparecer no acervo aprovado.
8. `MODERACAO` preserva o histórico das alterações de status e suas datas.
9. Os arquivos aceitos inicialmente são PDF, JPG/JPEG, PNG e TXT.
10. O script SQL deve ser revisado antes de qualquer execução no Supabase.
11. Nesta etapa não foram alterados o front-end, o back-end ou as telas da aplicação.
12. O diagrama visual e a documentação relacional foram preparados separadamente para avaliação da equipe.

### Arquivos de apoio produzidos

* `modelo-banco-acervo-academico.png`: diagrama visual do modelo relacional.
* `modelo-banco-acervo-academico.dot`: fonte editável do diagrama Graphviz.
* `modelo-relacional-tradicional-acervo-academico.md`: explicação das tabelas, campos e cardinalidades.
* `schema-repositorio-academico.sql`: script PostgreSQL preparado para revisão, ainda não executado.


## Fase 18: Criação do Banco no Supabase e Verificação do Schema

### Prompt do usuário

* **Prompt:** *"Então... vou usar o meu próprio Supabase para subir o banco. Do que você precisa agora?"*
* **Prompt:** *"Já consegue ver por aqui?"* — confirmação do projeto `Projeto Repositório Alunos` no painel do Supabase.
* **Prompt:** *"Pode tentar executar."*
* **Prompt posterior:** autorização para registrar no GitHub as informações feitas, detalhando os comandos e observações.

### Projeto Supabase utilizado

A execução foi feita no projeto autorizado pelo usuário:

```text
Nome: Projeto Repositório Alunos
Organização: ropositorio_academico
Project ID: vmuoeyiedmprkshzoqvx
Região: us-east-1 — East US (North Virginia)
Plano/tamanho: Free / Nano
Status observado antes da execução: Healthy
Migrations observadas antes da execução: nenhuma
```

Nenhuma senha, chave privada, `service_role key` ou arquivo `.env` foi solicitado ou exposto.

### Comandos e ações realizados

1. Acessado o painel do Supabase pelo projeto informado.
2. Confirmada a autenticação manual do usuário no painel.
3. Aberto o caminho do SQL Editor:

```text
https://supabase.com/dashboard/project/vmuoeyiedmprkshzoqvx/sql/new
```

4. O schema PostgreSQL preparado anteriormente foi inserido no editor Monaco do SQL Editor.
5. O conteúdo completo foi conferido antes da execução. O modelo carregado no editor tinha aproximadamente 7.060 caracteres e 159 linhas SQL.
6. Foi acionado o comando **Run** do SQL Editor.
7. O Supabase retornou:

```text
Success. No rows returned
```

Esse resultado é esperado para comandos `CREATE`, `CREATE INDEX` e `INSERT` que não retornam linhas diretamente.

### Comandos SQL executados

O schema executado continha os seguintes grupos de comandos:

#### Extensão e tipos enumerados

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE tipo_participacao AS ENUM ('ALUNO', 'PROFESSOR');
CREATE TYPE tipo_material AS ENUM ('PDF', 'IMAGEM', 'TEXTO');
CREATE TYPE status_material AS ENUM ('PENDENTE', 'APROVADO', 'REJEITADO', 'ARQUIVADO');
```

#### Tabelas criadas

```text
usuario
papel
usuario_papel
curso
disciplina
turma
matricula
material
material_turma
arquivo
categoria
material_categoria
moderacao
```

#### Índices criados

```sql
idx_matricula_usuario
idx_matricula_turma
idx_material_autor
idx_material_status
idx_material_turma_turma
idx_arquivo_material
idx_moderacao_material_data
```

#### Dados iniciais inseridos

Foram inseridos, usando `ON CONFLICT (nome) DO NOTHING`, os papéis:

```text
ALUNO
PROFESSOR
MODERADOR
ADMINISTRADOR
```

Também foram inseridas as categorias:

```text
SLIDES
EXERCICIO
PROVA
RESUMO
AULA
```

### Consulta de verificação executada

Depois da criação, foi executada uma consulta de conferência no SQL Editor:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name;
```

### Resultado da consulta de verificação

O Supabase retornou 13 tabelas no schema público:

```text
arquivo
categoria
curso
disciplina
material
material_categoria
material_turma
matricula
moderacao
papel
turma
usuario
usuario_papel
```

A tabela `MATERIAL_TURMA` foi confirmada no banco, assim como as tabelas associativas `MATERIAL_CATEGORIA` e `USUARIO_PAPEL`.

### Observações importantes da execução

1. O banco foi criado no projeto próprio do usuário no Supabase.
2. A execução foi feita pelo SQL Editor com a conta autenticada do usuário.
3. O schema não foi executado no projeto Manus nem em outro banco.
4. O front-end e o back-end não foram alterados nesta execução.
5. Nenhum usuário real foi inserido.
6. Nenhum arquivo foi enviado ao Storage.
7. Nenhuma senha foi armazenada.
8. O campo `id_auth` foi criado como `UUID UNIQUE`, mas ainda não possui FK direta para `auth.users`.
9. As regras de autorização por papel ainda precisam de RLS, funções, triggers ou implementação posterior.
10. A regra de que todo material deve possuir pelo menos uma associação em `MATERIAL_TURMA` ainda deve ser garantida por fluxo transacional ou trigger.
11. A tabela `MODERACAO` registra a estrutura histórica, mas o fluxo de moderação ainda não foi implementado no front-end ou back-end.
12. O Supabase Storage ainda precisa ser configurado posteriormente para guardar os arquivos físicos.
13. O modelo atual cria a estrutura do banco, mas não representa ainda a integração da aplicação com o banco.

### Estado após a execução

```text
Banco PostgreSQL: criado
Projeto Supabase: Projeto Repositório Alunos
Tabelas públicas criadas: 13
Script SQL executado: sim
Resultado: Success. No rows returned
Front-end alterado: não
Back-end alterado: não
Migrations do repositório: não criadas
Storage configurado para os materiais: não
RLS final configurado: não
Usuários reais cadastrados: não
```

### Próximas etapas do banco

As próximas etapas devem ser feitas separadamente e com revisão:

1. Conferir colunas, chaves e constraints no Table Editor;
2. Confirmar se `id_auth` deverá receber FK direta para `auth.users`;
3. Configurar políticas RLS;
4. Definir a função ou trigger para validar o papel de moderador;
5. Definir a regra de associação obrigatória em `MATERIAL_TURMA`;
6. Criar e configurar o bucket do Supabase Storage;
7. Definir limites de tamanho e tipos de arquivo no Storage;
8. Criar dados acadêmicos de teste, sem inserir dados reais ainda;
9. Planejar migrations no repositório;
10. Somente depois iniciar a integração com back-end.

**Status da Fase 18:** schema criado e verificado no Supabase. A integração da aplicação e as políticas de segurança ainda não foram implementadas.


## Fase 19: Análise do Projeto e Planejamento da Integração do Banco

* **Prompt:** *"projeto que está aberto agora veja o projeto, analise bem o projeto e não adicione nem altere nada até que eu fale."*
  * **Objetivo/Solução:** Leitura completa do repositório sem nenhuma alteração. Mapeamento da stack (Vite 8, React 19, TypeScript 7, Tailwind 4, React Router 7), da estrutura de pastas (`Pages`, `components`, `Rotas.tsx`) e do histórico Git. Levantamento de pontos de atenção: `.gitignore` não ignorava o arquivo `.env`, ESLint configurado apenas para `.js/.jsx`, divergência entre os formatos aceitos no banco (`PDF/IMAGEM/TEXTO`), nas abas do front e no Modal, rota `/repositorio` sem proteção e arquivos SQL citados na Fase 17 ausentes do repositório.
* **Prompt:** *"Minha parte que eu estou fazendo é dividido em três partes, né? Cada um foi com uma parte, um back, um front e um banco. Eu sou o banco, então eu preciso estruturar o projeto com o banco de dados. O banco ele está no Supabase, ele é o Postgre. Então eu preciso que você faça a ligação do banco de dados com o front-end e o back-end. Consegue fazer isso? Mas ainda não edite nada, só me diga o que você vai alterar."*
  * **Objetivo/Solução:** Elaboração de um plano em três partes — (1) Banco: migrations versionadas, ligação com o Supabase Auth, RLS, Storage, view e dados de teste; (2) Front-end: cliente Supabase, serviços e rota protegida; (3) Back-end: dependente da decisão de arquitetura da equipe. Nenhum arquivo foi alterado nesta etapa.

## Fase 20: Migrations Versionadas, Conexão com o Supabase e Teste a Seco

* **Prompt:** *"faça a parte . se puder ir sempre comentando os codigos, eu agradeço."*
  * **Ação Executada:** Criação da pasta `supabase/` com migrations SQL comentadas linha a linha: `0001_schema_inicial` (linha de base), `0002_usuario_auth`, `0003_fluxo_material`, `0004_rls`, `0005_storage`, `0006_view_materiais`, `0007_login_matricula` (opcional), além de `seed.sql` e `conferencia.sql`. Nenhum comando foi executado no banco nesta etapa.
* **Prompt:** *"como faço pra conectar com o supabase? o que voce precisa ?"*
  * **Objetivo/Solução:** Diferenciação entre a conexão da ferramenta de IA com o Supabase (autorização do plugin via `/mcp`) e a conexão do site com o banco (`Project URL` + `anon key`). Reforço de que a `service_role key` e a senha do banco nunca devem ser compartilhadas no chat nem colocadas no front-end.
* **Prompt:** *"autorizado."* / *"ele ja esta concetado e com as contas corretoas. pode verificar ?"* / *"agora esta correto"*
  * **Objetivo/Correção:** A primeira autorização deu acesso a outra organização (`Bernardino-jr's Org`), sem permissão sobre o projeto do banco. Após nova autorização com a organização `ropositorio_academico`, o projeto **Projeto Repositório Alunos** ficou acessível.
  * **Ação Executada:** Leitura do banco real (somente consultas). Foram encontradas diferenças em relação ao diagrama inicial: IDs `BIGINT` (e não `INT`), coluna `nome_completo` (e não `nome`), coluna `matricula` já existente em `usuario`, ausência de `senha_hash`, colunas `data_atualizacao`, `data_inicio`/`data_fim`, `data_associacao`, CHECKs de motivo obrigatório na rejeição e `tamanho_bytes > 0`. A migration `0001` foi reescrita para ficar idêntica ao banco real e as demais foram corrigidas.
* **Prompt:** *"faz o teste."* / *"aprovar teste"*
  * **Objetivo/Correção:** O teste a seco (migrations + seed dentro de `BEGIN ... ROLLBACK`) foi recusado pela ferramenta de IA, pois a janela de confirmação de comandos de alteração do Supabase não aparecia na extensão do VS Code.
  * **Ação Executada:** O script de teste foi executado manualmente no SQL Editor. Resultado: `TESTE_OK (tudo desfeito)` — 3 materiais visíveis na view, aluno sem papel sem acesso a histórico de moderação nem a dados de outros usuários, 22 policies, 3 regras de Storage, 1 bucket, 3 triggers e 9 funções. Consulta posterior confirmou que nada ficou gravado.

## Fase 21: Aplicação das Migrations, Supabase Advisor, Seed e Versionamento

* **Prompt:** *"letra A. pode fazer."*
  * **Objetivo/Correção:** A aplicação automática via ferramenta (`apply_migration`) também foi recusada pelo mesmo motivo da fase anterior. Optou-se pela aplicação manual, arquivo por arquivo, no SQL Editor.
* **Prompt:** *"o primeiro"* [print com "Success. No rows returned"] / *"clico em salvar ?"* / [prints das migrations 0003, 0004, 0005 e 0006]
  * **Objetivo/Solução:** Esclarecido que o botão **Run** já aplica as mudanças no banco e que o **Save** apenas guarda o texto da consulta no painel. Após cada execução, uma consulta de leitura confirmou o resultado: coluna `periodo`, FK `fk_usuario_auth` e 3 triggers (0002); funções de envio/moderação e bloqueio de escrita direta nas tabelas (0003); 22 policies nas 13 tabelas (0004); bucket privado `materiais` com 10 MB e PDF/JPG/PNG/TXT (0005); view `vw_materiais` com `security_invoker` (0006).
  * **Ação Executada:** Execução do **Supabase Advisor** (segurança e desempenho) e criação da migration `0008_ajustes_advisor`: bloqueio da função interna `rls_auto_enable` na API, 4 índices em chaves estrangeiras e separação das policies de administrador por operação. Nova verificação confirmou que não restaram problemas reais (36 policies; avisos restantes são intencionais).
* **Prompt:** *"ok para o 01 e para o 04."*
  * **Ação Executada:** Aplicação do `seed.sql` (curso ADS, 3 disciplinas com período, 3 turmas 2026/2, 1 usuário fictício e 3 materiais aprovados) e commit da pasta `supabase/` na branch `banco/integracao-supabase`, sem alterar arquivos do front-end ou do back-end.
* **Prompt:** [print do erro `npm error enoent Could not read package.json`] / [print do erro `fatal: not a git repository`]
  * **Objetivo/Correção:** Os comandos estavam sendo executados na pasta `PROJETO_JOSIVAN\`, enquanto o projeto fica em `PROJETO_JOSIVAN\Projeto_Josivan\Projeto_Josivan\`. Orientação para usar `cd` até a pasta correta, executar `npm install` antes do `npm run dev` e digitar o nome da branch em uma única linha no `git push`.

## Fase 22: Pull Request e Alinhamento com o Back-end

* **Prompt:** *"faz uma descrição com tudo."* [print da tela de criação do Pull Request]
  * **Objetivo/Solução:** Investigação do aviso "Não é possível mesclar automaticamente": o conflito ocorre no próprio `fase1-setup.md`, pois banco e back-end registraram fases com a mesma numeração. A leitura da API do back-end (`backend/`) revelou que ela foi escrita com base no diagrama inicial e usa colunas inexistentes no banco real (`nome`, `senha_hash`, `material.id_turma`), bucket com outro nome (`materiais-ads`) e `getPublicUrl` em bucket privado.
  * **Ação Executada:** Redação da descrição completa do Pull Request: resumo, tabela de migrations, forma de validação, estado do banco, tabela de incompatibilidades com a API, decisão de arquitetura pendente (Supabase Auth × JWT próprio), conflito de merge, instruções de uso para o front-end e checklist de pendências.
* **Prompt:** *"preciso dessas informações:"* [print com as dúvidas do colega do back-end: `service_role key`, nome do bucket, colunas de `usuario` e `id_turma` para teste]
  * **Objetivo/Solução:** Resposta direcionada ao colega do back-end: a `service_role` deve ir apenas para o `backend/.env` (preferencialmente convidando o colega para a organização no Supabase em vez de enviar a chave); o bucket se chama `materiais` e é privado, devendo-se salvar o caminho e gerar links temporários com `createSignedUrl`; a tabela `usuario` usa `nome_completo` e `email` obrigatório e não possui `senha_hash`; as turmas existentes são `id_turma` 4, 5 e 6, e a ligação material–turma é feita pela tabela `material_turma`.
* **Prompt:** *"preciso que voce resuma todos os primpts dados até aqui, para fazer um novo commit com a atualização do documento fase1-setup.md. as nos prompts tem que estar la. sem sobrepor o que ja tem."*
  * **Ação Executada:** Registro das Fases 19 a 22 ao final deste documento, preservando todo o conteúdo anterior, e commit da atualização na branch `banco/integracao-supabase`.

### Estado ao final da Fase 22

```text
Migrations aplicadas no Supabase: 0002, 0003, 0004, 0005, 0006, 0008
Migration opcional não aplicada: 0007 (login por matrícula)
Seed de teste: aplicado (3 materiais aprovados)
RLS: ativo nas 13 tabelas (36 policies) + 3 regras no Storage
Bucket: materiais (privado, 10 MB, PDF/JPG/PNG/TXT)
View para o acervo: vw_materiais
Front-end alterado: não
Back-end alterado: não
Pendente: decisão de autenticação (Supabase Auth x JWT próprio),
          ajuste da API aos nomes reais das colunas e
          resolução do conflito de numeração neste documento
```

---

# Trilha Back-end (API)

## Fase 17: Alinhamento Arquitetural e Isolamento do Ambiente Back-end
* *Prompt:* "gemini, to fazendo um trabalho da faculdade em grupo. usando a linguagem react + typescript, react router dom. eu fiquei c a parte de back end. estamos usando o codespace (...) eu quero que me ajude apenas com a parte do back end, deixando toda a parte do banco de fora. ela ta sendo feita por outra pessoa."
* *Objetivo/Solução:* Auditoria da estrutura do Front-end (Rotas.tsx, Login.tsx, Repositorio.tsx, Modal.tsx) confrontada com as regras de negócio e o Modelo Relacional. Separação oficial de responsabilidades entre Front-end, Back-end e Banco de Dados (Supabase). Criação da pasta isolada backend/ no GitHub Codespaces para gerenciar dependências e compilação do servidor sem interferir no ambiente Vite/React.
* *Ação Executada:* Inicialização do projeto Node.js (npm init -y), criação do diretório backend/src, instalação das dependências de servidor (express, cors, dotenv, @supabase/supabase-js, bcryptjs, jsonwebtoken, multer) e de tipagem/desenvolvimento (typescript, tsx, @types/*).

## Fase 18: Configuração Estrita do TypeScript, Variáveis de Ambiente e Servidor HTTP
* *Prompt:* "ta certo ? / podemos seguir ? / aq no caso né ? se sim, por favor, consegue me mandar o json limpo dnv ? / ta dando erro / assim ?" [Envio de prints de terminal e configuração de arquivos no VS Code]
* *Objetivo/Correção:* Substituição do tsconfig.json padrão por configuração limpa voltada ao Node.js com strict: true e forceConsistentCasingInFileNames: true (prevenindo erros de case-sensitivity no ambiente Linux do Codespaces). Resolução de duplicação de chaves JSON no backend/package.json e configuração dos scripts dev, build e start. Blindagem do .gitignore na raiz para impedir o versionamento acidental de arquivos .env.
* *Ação Executada:* Criação e configuração dos arquivos .env, .env.example, src/config/supabase.ts (cliente de conexão resiliente com o Supabase) e src/server.ts com middlewares globais (cors e express.json) e endpoint de diagnóstico GET /api/health. Inicialização bem-sucedida do servidor na porta 3333 via tsx watch

## Fase 19: Rotas MVP de Materiais, Upload de Arquivos (Multer + Storage) e Moderação
* **Prompt:** *"ta tudo certo ? [Envio de prints confirmando authMiddleware.ts, authRoutes.ts e server.ts]"*
* **Objetivo/Solução:** Construção das operações centrais do repositório acadêmico seguindo práticas de *Clean Code* (constantes semânticas para regras de negócio, funções auxiliares puras como `gerarNomeUnicoArquivo` e *Early Return*). Garantia de validação rigorosa de tamanho máximo (10 MB) e tipos MIME permitidos (PDF, JPG, JPEG, PNG e TXT), além do fluxo de moderação com histórico.
* **Ação Executada:** Criação do arquivo `src/routes/materialRoutes.ts` com endpoints `GET /api/materiais` (listagem filtrada de materiais aprovados), `POST /api/materiais` (upload protegido via JWT e `multer` com persistência no Supabase Storage e tabelas `material`/`arquivo`) e `PATCH /api/materiais/:id/status` (aprovação/rejeição com registro na tabela `moderacao`). Integração final das rotas no `src/server.ts`.

## Fase 20: Alinhamento de Contrato com o Banco Real (Supabase) e Bucket Privado
* **Prompt:** *"[Repasse da especificação real do esquema Supabase: bucket privado 'materiais', tabela 'usuario' com 'nome_completo' e 'email' obrigatório, relação N:N 'material_turma' (IDs 4, 5 e 6) e regras de moderação]"*
* **Objetivo/Solução:** Adequar a camada de persistência e integração aos nomes reais de colunas e restrições do banco PostgreSQL no Supabase, substituindo URLs públicas por URLs assinadas temporárias (`createSignedUrl`) e respeitando o relacionamento associativo `material_turma` e o histórico fidedigno de moderação.
* **Ação Executada:** Atualização de `backend/src/routes/authRoutes.ts` (`nome_completo` e `email` obrigatório), refatoração de `backend/src/routes/materialRoutes.ts` (bucket privado `materiais`, `createSignedUrl` de 10 minutos, inserção em `material_turma`, leitura prévia de `status_anterior` e exigência de `motivo` na rejeição) e atualização dos IDs reais de turma (`4`, `5`, `6`) em `src/components/Modal.tsx`.

## Fase 21: Configuração de Túnel, Porta do Front-end (Vite) e Validação de Login Ponta a Ponta
* **Prompt:** *"como reinicio ? / dps q me mandou colocar o "port: 4000" pegou abrir. logo apareceu a pagina de login e com isso, teste a matricula e a senha. dando um bom resultado, logo indo para o repositorio."*
* **Objetivo/Solução:** Isolar a porta do servidor Front-end (`4000`) da porta do Back-end (`3333`) no `vite.config.js` com `host: true` e `allowedHosts: true` para estabilizar o roteamento público do GitHub Codespaces, além de configurar `VITE_API_URL` no `.env` da raiz.
* **Ação Executada:** Atualização de `vite.config.js` para a porta `4000`, reinicialização do servidor Vite (`npm run dev`), liberação pública das portas no Codespaces e validação bem-sucedida do fluxo de login com a matrícula `01926669`, geração de token JWT e redirecionamento automático para `/repositorio`.

## Fase 22: Validação do Upload Real para o Supabase Storage e Diagnóstico via DevTools
* **Prompt:** *"aparentemente isso esta pegando. [Print do alerta: Material enviado com sucesso! Aguardando aprovação de um moderador.] / ele fica assim quando aperto, nada acontece [Print da aba Network]"*
* **Objetivo/Solução:** Validar o envio autenticado de arquivos reais (`multipart/form-data`) pelo modal do Front-end e diagnosticar, pela aba `Network` do navegador, o motivo de a barra de busca e o botão `Abrir` não dispararem ações no cliente.
* **Ação Executada:** Envio real do arquivo `Trabalho_Engenharia_de_Requisitos.pdf` validado com retorno HTTP `201` e gravação com status `PENDENTE` no Supabase. Inspeção de rede comprovando que `GET /api/materiais` retornava HTTP `200`, identificando que os componentes `Filtros.tsx` e `LinhaMaterial.tsx` ainda não possuíam eventos de interação conectados.

## Fase 23: Implementação da Busca Textual Combinada e Abertura Segura de Arquivos
* **Prompt:** *"agora quero q me diga como vamos fazer, o pq de cada linha de codigo q vc vai mandar eu fazer e se é a melhor forma. me explique para q possa aprender / pfvr, reescreva todo o codigo ja com isso escrito nele"*
* **Objetivo/Solução:** Aplicar o padrão React *Lifting State Up* para filtrar materiais em tempo real combinando categoria (abas) e pesquisa textual (título, assunto e disciplina), além de conectar o botão `Abrir ↗` às URLs assinadas (`url_download`) já fornecidas pelo Back-end.
* **Ação Executada:** Refatoração de `src/components/Filtros.tsx` (transformação do campo de pesquisa em componente controlado), atualização de `src/Pages/Repositorio.tsx` (estado `termoBusca`, filtro combinado e repasse de `url_download`) e implementação de `handleAbrir` em `src/components/LinhaMaterial.tsx` (`window.open` com `noopener,noreferrer` e alerta informativo para registros iniciais sem anexo no Storage).

---

## Fase 24: Correção do Cadastro pela Tela (25/11/2026)

* **Solicitação:** Verificar e corrigir o problema que impedia novos cadastros pela tela, informar as ações realizadas e registrar o resumo neste arquivo, limitando as alterações ao necessário.
* **Diagnóstico:** O front-end estava ativo na porta 4000, mas o back-end não estava escutando na porta 3333. Além disso, a tela enviava o cadastro para `/api/auth/cadastro`, enquanto a API implementa `/api/auth/register`. O formulário também não coletava o e-mail obrigatório na API e na tabela `usuario`. O tratamento genérico confundia respostas inválidas com falhas de conexão.
* **Correção:** Em `src/Pages/Login.tsx`, alteração do endereço para `/auth/register`, inclusão do campo obrigatório E-mail e envio de `email` no JSON. Respostas que não podem ser interpretadas como JSON agora mostram aviso específico com o status HTTP. O fluxo de login foi preservado.
* **Escopo preservado:** Sem mudanças no esquema do banco, nas credenciais, nas rotas do back-end, no upload ou na busca. O seletor Perfil / Cargo foi mantido; a API atual não salva esse campo nem concede permissões a partir dele.
* **Inicialização:** O back-end foi iniciado com `npm.cmd run dev` dentro de `backend/`. Para usar o projeto localmente, manter dois terminais: na raiz executar `npm.cmd run dev` (front-end, porta 4000); na pasta `backend` executar `npm.cmd run dev` (API, porta 3333). Em shells sem a restrição do PowerShell, pode-se usar `npm run dev`. Não foi alterada a política de execução do Windows. A variável opcional `VITE_API_URL` continua prevalecendo sobre o endereço local padrão.
* **Validação:** Endpoint `/api/health` respondeu HTTP 200. Cadastro real pela API respondeu HTTP 201; login da conta criada respondeu HTTP 200 e gerou token. As contas temporárias utilizadas foram removidas e a ausência foi confirmada no banco. Não foram usados dados pessoais do usuário. Compilações do front-end e do back-end e lint passaram. Testes de regressão em `tests/cadastro.test.cjs` verificam envio da rota/campos, confirmação de sucesso, exibição de erro da API, resposta não JSON e falha de conexão. Executar com `node --test tests/cadastro.test.cjs` após instalar as dependências da raiz e de `backend`. Os testes do formulário isolam rede e hooks; o teste real de persistência foi executado separadamente pela API, sem automação do navegador.
