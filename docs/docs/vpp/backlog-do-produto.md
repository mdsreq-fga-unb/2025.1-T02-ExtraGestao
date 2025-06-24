## 0. Introdução
O backlog do Extra Gestão é um artefato dinâmico e evolutivo, revisado de forma contínua. Novas demandas, sugestões de stakeholders ou necessidades identificadas durante o desenvolvimento são discutidas em reuniões de refinamento e incorporadas ao backlog de maneira incremental, mantendo a aderência às necessidades do negócio e a flexibilidade no planejamento das entregas

## 1. Definição de pronto (DoR) e Definição de feito (DoD)
### 1.1 Definição de pronto (DoR)
Uma história de usuário está pronta para desenvolvimento quando:
 
* Clara e objetiva: A descrição da história não deixa margem para interpretações ambíguas. “Clara” significa que qualquer membro do time consegue compreendê-la sem dúvidas; “objetiva” significa que o texto é direto e focado no valor a ser entregue, sem rodeios.
* Possuir critérios de aceitação objetivos, escritos de maneira colaborativa.  Os critérios são criados junto com o Product Owner, desenvolvedores e, se possível, stakeholders. Isso garante que todos tenham o mesmo entendimento sobre quando a história será considerada aceita.
* Não tiver impedimentos técnicos (acessos, dependências, recursos).  Por exemplo, a equipe tem credenciais, ambientes, APIs e dependências externas resolvidas, evitando bloqueios na execução.
* Estiver estimada, priorizada e refinada progressivamente (pronta para sprint).  A história passou por sessões de refinamento, está priorizada no backlog e já foi estimada em pontos. O "refinamento progressivo" se refere à prática de ir amadurecendo a história aos poucos até que ela esteja pronta para desenvolvimento.
* Permite práticas de qualidade desde o início: A história está formulada de modo a permitir práticas como TDD (Test Driven Development), CI/CD (Integração e Entrega Contínua) e técnicas do XP (eXtreme Programming), o que garante qualidade contínua e entrega sustentável.
 
### 1.2 Definição de feito (DoD)
Uma funcionalidade ou tarefa é considerada concluída quando atende a todos os critérios abaixo:
 
* Atende todos os critérios de aceitação definidos na DoR.
  Os critérios de aceitação pertencem a cada história de usuário e são definidos no refinamento, geralmente junto ao PO.
* Código revisado e aprovado.
 Antes de ser mergeado, o código passa por revisão entre membros da equipe, garantindo qualidade, padrões de codificação e entendimento coletivo. A validação é feita entre desenvolvedores, com o apoio do PO.
* Testes automatizados passam no CI/CD.
  Toda nova funcionalidade deve conter testes automatizados compatíveis com seu impacto. Não é exigido 100% de cobertura, mas sim cobertura suficiente para garantir que a lógica principal esteja validada por testes de unidade e/ou integração, com execução em pipelines CI/CD.
* Documentação técnica e de uso foi atualizada.
  Caso a funcionalidade impacte o uso do sistema, toda a documentação de uso (como o GitPages e demais documentações desenvolvidas durante a disciplina, por exemplo) deve ser atualizada. Caso haja alterações relevantes na lógica ou arquitetura, a documentação técnica também deve refletir essas mudanças.
* Interface validada (usabilidade, responsividade).
Funcionalidades com impacto visual devem ser testadas para garantir que estejam responsivas (em diferentes tamanhos de tela) e com boa usabilidade, considerando o público-alvo. O foco aqui é prevenir problemas de acessibilidade e navegação.
* Mergeada na branch principal e validada em ambiente de homologação.
Após passar pela revisão e testes, a feature é mergeada na `main` e automaticamente implantada no ambiente de homologação via CI/CD, onde pode ser validada pelo PO antes do release.
* Sem bugs críticos conhecidos.
 Bugs críticos são falhas que impedem o uso da funcionalidade ou causam efeitos colaterais graves em outras áreas do sistema. A funcionalidade não pode ser considerada feita enquanto esses bugs estiverem presentes.

## 2 Critérios de Priorização

### 2.1 Critérios de Priorização

A priorização do backlog segue critérios consagrados em engenharia de requisitos:

- **Valor de negócio**: Impacto direto do requisito para geração de valor ou satisfação do usuário/patrocinador.
- **Dependências técnicas**: Pré-requisitos técnicos e integrações necessárias.
- **Complexidade e esforço**: Avaliação de tempo, recursos e riscos envolvidos.
- **Prioridade do cliente/stakeholder**: Demandas explícitas ou contratuais.
- **Conhecimento, incerteza e risco**: Priorização do que é mais incerto, arriscado ou pouco conhecido.

---

### 2.2 Framework de Priorização MoSCoW

Adotado conforme recomendações do Scrum:

- **Must Have (M)**: Essenciais, o sistema não funciona sem.
- **Should Have (S)**: Importantes, mas possíveis de adiar temporariamente.
- **Could Have (C)**: Desejáveis, agregam valor, mas não são críticos.
- **Won’t Have (W)**: Fora do escopo do ciclo atual, mas documentados.

> **Justificativa de uso:**  
O método MoSCoW permite equilibrar valor, risco, esforço e evolução contínua, alinhando o backlog à estratégia do projeto e à realidade do cliente.

---

### 2.3 Método BUC

Para cada critério será definida uma escala de valor de 1 a 10. Algumas perguntas podem ajudar a avaliar cada um dos critérios:

- **Benefícios de negócio (Business Benefits):**  
  Quanta receita essa funcionalidade poderá gerar? Reduzirá os custos da empresa? Trará mais clientes?

- **Benefícios para o usuário (User Benefits):**  
  A experiência do usuário será melhor? Ele ficará mais satisfeito? Ele quer utilizar essa funcionalidade? Ele conseguirá utilizar essa funcionalidade?

- **Custo (Cost):**  
  Quanto tempo será necessário? Quanto dinheiro irá custar? Quantos recursos irá precisar?

> **Justificativa:**  
O método BUC auxilia na tomada de decisões sobre quais tarefas ou projetos devem ser priorizados, considerando a importância do benefício, a necessidade de urgência e a viabilidade da complexidade.

---

## 3 Tabela de User Stories, Priorização e Cobertura de Requisitos

| ID   | User Story                                                                                              | MoSCoW    | BUC   | Justificativa                                | RFs Cobertos        | Épico |
|------|---------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------|---------------------|-------|
| US01 | Como novo usuário, quero me cadastrar                                                                   | Must Have | 18    | Controle essencial de acesso à plataforma    | RF-01               | E1    |
| US02 | Como usuário quero fazer login na plataforma                                                            | Must Have | 18    | Segurança e proteção de dados                | RF-02               | E1    |
| US03 | Como usuário, quero recuperar a minha senha em caso de esquecimento.                                    | Should    | 12    | Controle essencial de acesso à plataforma    | RF-03               | E1    |
| US04 | Como usuário logado, quero fazer logout da plataforma.                                                  | Must Have | 16.5  | Controle essencial de acesso à plataforma    | RF-04               | E1    |
| US05 | Como administrador, quero definir níveis de acesso para diferenciar permissões entre gestores e usuários comuns. | Must Have | 12.5  | Escalabilidade e governança de acesso        | RF-05               | E2    |
| US06 | Como gestor, quero criar, editar e excluir projetos para que eu possa organizar o trabalho, definir escopo e prazos, e iniciar o planejamento de tarefas. | Must Have | 15    | Gestão central do ciclo de vida dos projetos | RF-06, RF-07, RF-08 | E3    |
| US07 | Como gestor, quero visualizar e listar projetos, mostrando nome e status, para organizar e acompanhar todas as iniciativas do time. | Must Have | 13.5  | Gestão central do ciclo de vida dos projetos | RF-09               | E4    |
| US08 | Como gestor, eu quero gerenciar o ciclo de vida básico das tarefas (criar, editar e excluir) vinculadas a um projeto, para que eu possa definir o trabalho a ser feito, mantê-lo atualizado e remover itens obsoletos, assegurando a organização inicial do fluxo de trabalho. | Must Have | 13    | Gestão central do ciclo de vida das tarefas  | RF-10, RF-11, RF-12 | E5    |
| US09 | Como usuário do sistema, quero concluir uma tarefa, para que ela seja marcada como finalizada, impedindo edições posteriores e registrando a data de conclusão. | Should    | 12.5  | Gestão central do ciclo de vida das tarefas  | RF-13               | E5    |
| US10 | Como gestor ou atribuído a uma tarefa, eu quero comentar diretamente na tarefa, para que possamos discutir e alinhar o andamento, esclarecer dúvidas e manter o histórico de comunicação vinculado à tarefa | Must Have | 13.5  | Gestão central do ciclo de vida das tarefas  | RF-14               | E3    |
| US11 | Como usuário do sistema, quero alterar o status de uma tarefa para que eu possa gerenciar facilmente o andamento das tarefas. | Must Have | 14    | Gestão central do ciclo de vida das tarefas  | RF-15               | E6    |
| US12 | Eu quero filtrar as tarefas por nome, status, responsável ou prazo, para que eu possa localizar rapidamente as tarefas relevantes e focar nas que são mais importantes no momento. | Should    | 12    | Gestão central do ciclo de vida das tarefas  | RF-16               | E3    |
| US13 | Como usuário do sistema, quero visualizar gráficos que representam o progresso dos projetos e a distribuição das tarefas por status, para que eu possa acompanhar facilmente o andamento e a carga de trabalho dos projetos. | Won't Have| 7.5   | Dashboard de progressos                      | RF-17, RF-18        | E9    |
| US14 | Como gestor, quero exportar o dashboard para PDF, para compartilhar o progresso dos projetos de forma prática. | Won't Have| 7.5   | Dashboard de progressos                      | RF-19               | E10   |
| US15 | Como usuário, quero ser notificado por e-mail quando o prazo de conclusão de uma tarefa estiver próximo, para não perder prazos importantes. | Could Have| 8.5   | Notificações                                 | RF-20               | E8    |

---

## 4 Checklist DEEP do Backlog

O checklist DEEP é um guia prático utilizado para avaliar a saúde e a qualidade do backlog do projeto. Ele ajuda a garantir que o backlog seja útil de verdade para a equipe de desenvolvimento, funcionando como um filtro para saber se os itens estão bem organizados, fáceis de entender e prontos para serem trabalhados.

- **Detalhado conforme a necessidade**: As histórias de usuário que estão mais próximas de serem desenvolvidas são descritas com todos os detalhes necessários. Já os itens mais distantes (épicos ou temas) são mantidos em um nível mais macro, permitindo ajustes futuros.
- **Estimado**: Cada item do backlog recebe uma estimativa de esforço, seja em pontos de história, horas ou dias ideais, para apoiar o planejamento e a tomada de decisão.
- **Emergente**: O backlog nunca é estático. Ele está sempre em evolução, recebendo novos itens, refinando requisitos e se adaptando conforme surgem novas demandas, oportunidades ou mudanças de direção.
- **Prioritizado**: Os itens estão organizados por ordem de importância, considerando o valor para o negócio, os riscos envolvidos e as dependências técnicas. O que é mais importante para o sucesso do projeto sempre vem primeiro.


## 5 Mínimo Produto Viável (MVP)

O Mínimo Produto Viável (MVP) deste projeto foi cuidadosamente definido para garantir que, já nas primeiras entregas, o sistema atenda às principais necessidades dos usuários, clientes e stakeholders.

Para o MVP, foram escolhidos itens que são **MoSCoW Must have** e incluídos itens cujo **BUC é igual ou superior a 12** por agregar aceitável valor de negócio com médio custo de desenvolvimento.

## Itens do MVP do Extra Gestão

- **Cadastro e login de usuários**
  - MoSCoW: Must Have
  - BUC: 18
  - Essencial para permitir o acesso seguro de novos usuários e garantir a entrada no sistema.

- **Recuperação de senha**
  - MoSCoW: Should Have
  - BUC: 12
  - Facilita a alteração da senha de um usuário.

- **Níveis de acesso**
  - MoSCoW: Must Have
  - BUC: 12.5

- **Criação, edição e exclusão de projetos**
  - MoSCoW: Must Have
  - BUC: 15
  - Fundamental para dar início ao controle de projetos e registrar o progresso de cada iniciativa.

- **Visualização de lista de projetos**
  - MoSCoW: Must Have
  - BUC: 13.5
  - Permite checar rapidamente os projetos ativos e inativos.

- **Cadastro, edição e exclusão das tarefas vinculadas a projetos**
  - MoSCoW: Must Have
  - BUC: 13
  - Permite organizar o trabalho da equipe, acompanhar atividades e garantir que cada tarefa tenha responsáveis definidos.

- **Concluir tarefa**
  - MoSCoW: Should Have
  - BUC: 12.5
  - Permite facilitar a conclusão das tarefas e impedir que seja alterada após a conclusão.

- **Comentários em tarefas**
  - MoSCoW: Must Have
  - BUC: 13.5
  - Permite a comunicação entre gestor e usuário para melhor desenvolvimento da tarefa.

- **Alterar o status da tarefa**
  - MoSCoW: Must Have
  - BUC: 14
  - Permite alterar o status das tarefas para o acompanhamento de progresso.

- **Realizar logout**
  - MoSCoW: Must Have
  - BUC: 16.5
  - Permite sair da plataforma, mantendo segurança e integridade do sistema.

- **Filtrar tarefas**
  - MoSCoW: Should Have
  - BUC: 12
  - Permite uma melhor visualização da lista de tarefas.

> De acordo com a abordagem MoSCoW, itens classificados como Should Have também podem ser incluídos no MVP, desde que não comprometam o prazo ou a entrega das funcionalidades essenciais. Ou seja, se houver tempo disponível no ciclo de desenvolvimento, funcionalidades Should Have, como filtros avançados, exclusão de projetos/tarefas ou notificações, podem ser antecipadas e integradas ao MVP, agregando ainda mais valor ao produto inicial. O uso do BUC (Business, User e Custo) como critério adicional na definição do MVP garante que as funcionalidades mais importantes sejam entregues primeiro, levando em conta não só o valor para o negócio e o usuário, mas também o custo de desenvolvimento. Assim, priorizamos o que realmente faz diferença no início, equilibrando impacto e viabilidade.

---

## 5.1 Critérios de Aceitação para o MVP

### US01 – Cadastro de Novo Usuário

- O usuário só consegue finalizar o cadastro se preencher todos os campos obrigatórios.
- O sistema impede o cadastro de e-mail ou CPF já existente, exibindo mensagem clara de erro.
- O usuário só consegue apertar o botão de cadastro caso a senha e a senha repetida coincidam.
- Após cadastro bem-sucedido, o usuário pode fazer login imediatamente.
- O sistema mostra mensagem de sucesso ao concluir o cadastro.

### US02 – Login de Usuário

- O login só é aceito se e-mail e senha coincidirem com um usuário existente.
- Senha digitada errada gera mensagem clara de erro, sem expor dados do sistema.
- Ao efetuar login com sucesso, o usuário é redirecionado à página inicial da plataforma.
- O sistema mantém o usuário autenticado até logout ou expiração da sessão.

### US03 – Recuperação de Senha

- O link de recuperação deve ser enviado pelo email do usuário.
- A nova senha não pode ser igual à anterior.
- A nova senha e o repita nova senha devem coincidir.

### US04 – Logout

- O botão de logout está disponível em todas as telas protegidas para usuários logados.
- Ao clicar em logout, a sessão do usuário é encerrada imediatamente.
- O usuário é redirecionado à tela de login após sair.
- Uma mensagem informa que o logout foi realizado com sucesso.

### US05 – Níveis de Acesso (Gestor)

- Somente um gestor consegue gerenciar os níveis de acesso.
- Níveis de acesso diferenciam permissões entre usuários e gestores.

### US06 – Criar, Editar e Excluir Projetos (Gestor)

- Só é possível criar um projeto informando nome, descrição, data de início, data de fim e valor.
- Projetos criados aparecem automaticamente na listagem de todos os usuários.
- Projetos só podem ser editados se ainda não estiverem concluídos.
- Ao excluir um projeto, o sistema pede confirmação antes de remover da lista.
- Não é permitido criar dois projetos com o mesmo nome, devendo o sistema avisar o gestor em caso de duplicidade.

### US07 – Visualizar e Listar Projetos

- Os usuários conseguem visualizar uma lista de todos os projetos cadastrados.
- Cada item da lista apresenta nome, status e data.
- É possível acessar detalhes completos de qualquer projeto da lista.
- Alterações nos projetos (edição, exclusão, criação) refletem imediatamente na listagem.

### US08 – Criar, Editar e Excluir Tarefas (Gestor)

- Cada tarefa obrigatoriamente precisa estar vinculada a um projeto existente.
- Só é possível criar tarefas informando título, descrição, responsáveis, prazo, prioridade, dependências, data de início e tags.
- Tarefas só podem ser editadas ou excluídas se ainda não estiverem finalizadas.
- Toda alteração (criação, edição, exclusão) é imediatamente refletida para os usuários envolvidos.
- O sistema solicita confirmação antes de excluir uma tarefa.

### US09 – Mudar Status de Tarefa para Concluída

- O sistema solicita confirmação antes de concluir uma tarefa.
- A tarefa não pode mais ser editada ou excluída após conclusão.
- Apenas o gestor pode concluir uma tarefa.

### US10 – Comentários nas Tarefas

- O usuário só pode comentar em tarefas atribuídas a ele.
- Há um botão de salvar o comentário.

### US11 – Alterar Status da Tarefa

- O usuário pode alterar o status de tarefas atribuídas a ele.
- Pode fazer isso arrastando a tarefa entre colunas de status.

### US12 – Filtrar Tarefa

- Os usuários em geral podem selecionar a ordenação por data ou por nome.
- Os usuários em geral podem escolher filtrar por status.

## Referências Bibliográficas

* MARSICANO, G. Requisitos de Software: Fundamentos, Evolução e Práticas. v0.3, 2025.
* PRESSMAN, R. S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.
* RUBIN, K. S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.
* SCHWABER, K.; SUTHERLAND, J. Guia do Scrum: O Guia Definitivo para o Scrum, as Regras do Jogo. Scrum.org, 2020.
* Unidade 2 - Aula - Organização e Atualização - Backlog de Requisitos, Prof. Dr. George Marsicano, 2023.
* Unidade 2 - Aula - Representação de Requisitos, Prof. Dr. George Marsicano, 2023.