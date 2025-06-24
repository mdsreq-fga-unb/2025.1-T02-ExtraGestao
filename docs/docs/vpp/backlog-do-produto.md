## 0. Introdução
O backlog do Extra Gestão é um artefato dinâmico e evolutivo, revisado de forma contínua. Novas demandas, sugestões de stakeholders ou necessidades identificadas durante o desenvolvimento são discutidas em reuniões de refinamento e incorporadas ao backlog de maneira incremental, mantendo a aderência às necessidades do negócio e a flexibilidade no planejamento das entregas

## 1. Critérios de priorização
### 1.1 Critérios de priorização
A priorização do backlog segue critérios consagrados em engenharia de requisitos:

* Valor de negócio: Impacto direto do requisito para geração de valor ou satisfação do usuário/patrocinador.
* Dependências técnicas: Pré-requisitos técnicos e integrações necessárias.
* Complexidade e esforço: Avaliação de tempo, recursos e riscos envolvidos.
* Prioridade do cliente/stakeholder: Demandas explícitas ou contratuais.
* Conhecimento, incerteza e risco: Priorização do que é mais incerto, arriscado ou pouco conhecido.

### 1.2 Framework de Priorização MoSCoW
Adotado conforme recomendações do Scrum

* Must Have (M): Essenciais, o sistema não funciona sem.
* Should Have (S): Importantes, mas possíveis de adiar temporariamente.
* Could Have (C): Desejáveis, agregam valor, mas não são críticos.
* Won’t Have (W): Fora do escopo do ciclo atual, mas documentados.

**Justificativa de uso:** O método MoSCoW permite equilibrar valor, risco, esforço e evolução contínua, alinhando o backlog à estratégia do projeto e à realidade do cliente.

## 2. Definição de pronto (DoR) e Definição de feito (DoD)
### 2.1 Definição de pronto (DoR)
Uma história de usuário está pronta para desenvolvimento quando:

* Clara e objetiva: A descrição da história não deixa margem para interpretações ambíguas. “Clara” significa que qualquer membro do time consegue compreendê-la sem dúvidas; “objetiva” significa que o texto é direto e focado no valor a ser entregue, sem rodeios.
* Possuir critérios de aceitação objetivos, escritos de maneira colaborativa.  Os critérios são criados junto com o Product Owner, desenvolvedores e, se possível, stakeholders. Isso garante que todos tenham o mesmo entendimento sobre quando a história será considerada aceita.
* Não tiver impedimentos técnicos (acessos, dependências, recursos).  Por exemplo, a equipe tem credenciais, ambientes, APIs e dependências externas resolvidas, evitando bloqueios na execução.
* Estiver estimada, priorizada e refinada progressivamente (pronta para sprint).  A história passou por sessões de refinamento, está priorizada no backlog e já foi estimada em pontos. O "refinamento progressivo" se refere à prática de ir amadurecendo a história aos poucos até que ela esteja pronta para desenvolvimento.
* Permite práticas de qualidade desde o início: A história está formulada de modo a permitir práticas como TDD (Test Driven Development), CI/CD (Integração e Entrega Contínua) e técnicas do XP (eXtreme Programming), o que garante qualidade contínua e entrega sustentável.

### 2.2 Definição de feito (DoD)
Uma funcionalidade ou tarefa é considerada concluída quando atende a todos os critérios abaixo:

* Atende todos os critérios de aceitação definidos na DoR.
  Os critérios de aceitação pertencem a cada história de usuário e são definidos no refinamento, geralmente junto ao PO. 
* Código revisado e aprovado.
 Antes de ser mergeado, o código passa por revisão entre membros da equipe, garantindo qualidade, padrões de codificação e entendimento coletivo. A validação é feita entre desenvolvedores, com o apoio do PO.
* Testes automatizados passam no CI/CD.
* Documentação técnica e de uso foi atualizada.
  Caso a funcionalidade impacte o uso do sistema, toda a documentação de uso (como o GitPages e demais documentações desenvolvidas durante a disciplina, por exemplo) deve ser atualizada. Caso haja alterações relevantes na lógica ou arquitetura, a documentação técnica também deve refletir essas mudanças.
* Interface validada (usabilidade, responsividade).
Funcionalidades com impacto visual devem ser testadas para garantir que estejam responsivas (em diferentes tamanhos de tela) e com boa usabilidade, considerando o público-alvo. O foco aqui é prevenir problemas de acessibilidade e navegação.
* Mergeada na branch principal e validada em ambiente de homologação.
Após passar pela revisão e testes, a feature é mergeada na `main` e automaticamente implantada no ambiente de homologação via CI/CD, onde pode ser validada pelo PO antes do release.
* Sem bugs críticos conhecidos.
 Bugs críticos são falhas que impedem o uso da funcionalidade ou causam efeitos colaterais graves em outras áreas do sistema. A funcionalidade não pode ser considerada feita enquanto esses bugs estiverem presentes.

## 3. Processo de Engenharia de Requisitos
| Atividade | Prática no Projeto| Técnica |
| ----- | ----- | ----- |
| Elicitação e Descoberta | Conversa com cliente, brainstorm | Entrevista, user story |
| Declaração | Criação de histórias de usuário, casos de uso | User story, casos de uso, especificação |
| Análise e Consenso | Discussão entre equipe e cliente | Decomposição/categorização, brainstorming |
| Representação | Criação de protótipos, modelagem | Prototipação, user story, modelagem |
| Validação e Verificação | Testes de aceitação, revisão, feedback de usuário | Testes de usabilidade, revisão por pares, DoR, DoD, prototipação |
| Organização e Atualização | Controle e rastreamento de mudanças, versionamento, reuniões de refinamento | Jira/Trello, versionamento, reuniões de refinamento contínuas |
Tabela 1: Processo de Engenharia de Requisitos

## 4. Backlog do Produto
### 4.1 Temas e Épicos
| Tema                    | Épico                                       | Descrição do Épico                                                                                           |
|-------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Gestão de Usuários      | E1 - Cadastro e Autenticação de Usuários          | Criação de conta, login, recuperação de senha e logout com autenticação segura (NextAuth/JWT).               |
| Gestão de Usuários      | E2 - Gerenciamento de Perfis e Níveis de Acesso   | Controle das permissões e perfis de acesso (usuário, gestor, admin) para uso adequado da plataforma.          |
| Gestão de Projetos      | E3 - Cadastro e Gerenciamento de Projetos         | Criar, editar, excluir, listar e visualizar projetos, com dados completos e documentos anexos.               |
| Gestão de Projetos      | E4 - Visualização de Projetos                     | Exibição de status, progresso e informações relevantes de projetos de forma clara e centralizada.             |
| Gestão de Tarefas       | E5 - Cadastro e Gerenciamento de Tarefas          | Criar, editar, excluir tarefas, atribuir responsáveis, definir prioridade, status, datas e observações.      |
| Gestão de Tarefas       | E6 - Organização, Filtragem e Relacionamento      | Definir dependências, adicionar tags, filtrar tarefas por critérios e organizar o fluxo de execução.         |
| Gestão de Tarefas       | E7 - Colaboração em Tarefas                       | Permitir comentários, trocas de informações e acompanhamento do andamento pelas partes envolvidas.           |
| Notificações e Alertas  | E8 Notificações de Atribuição e Prazo           | Enviar e-mails automáticos ao atribuir tarefas ou ao se aproximar de prazos importantes.                     |
| Visualização e Relatórios | E9 Dashboard de Progresso                    | Visualizar, em formato gráfico, o andamento de projetos e tarefas, status e pendências.                      |
| Visualização e Relatórios | E10 Exportação e Compartilhamento de Relatórios| Gerar relatórios em PDF dos dashboards para compartilhamento e arquivamento.                                 |

Tabela 2: Temas e Épicos do Backlog do Produto

### 4.2 Backlog do projeto priorizado com MoSCoW
| ID | User Story | MoSCoW | Justificativa | RFs Cobertos | Epico |
| ----- | ----- | ----- | ----- | ----- | ----- |
| US01 | Como novo usuário, quero me cadastrar | Must Have | Controle essencial de acesso à plataforma | RF-01| E1 |
| US02 | Como usuário, quero fazer login na plataforma. | Must Have | Segurança e proteção de dados | RF-02 | E1 |
| US03 | Como usuário, quero recuperar a minha senha em caso de esquecimento | Must Have| Controle essencial de acesso à plataforma | RF-03 | E1 | 
| US04 | Como usuário logado, quero fazer logout da plataforma | Must Have | Controle essencial de acesso à plataforma | RF-04 | E1 |
| US05 | Como administrador, quero definir níveis de acesso para diferenciar permissões entre gestores e usuários comuns. | Should Have | Escalabilidade e governança de acesso | RF-05 | E2 |
| US06 | Como gestor, quero criar, editar e excluir projetos para que eu possa organizar o trabalho, definir escopo e prazos, e iniciar o planejamento de tarefas. | Must Have | Gestão central do ciclo de vida dos projetos | RF-06, RF-07, RF-08| E3 |
| US07 | Como gestor, quero visualizar e listar projetos, informando dados completos, para organizar e acompanhar todas as iniciativas do time. | Must Have | Gestão central do ciclo de vida dos projetos | RF-09 | E4 |
| US08 | Como usuário comum, quero visualizar a lista de projetos em que estou envolvido, com informações básicas e status | Must Have |Gestão central do ciclo de vida dos projetos | RF-09 | E4 |
| US09 | Como gestor, eu quero gerenciar o ciclo de vida básico das tarefas (criar, editar e excluir) vinculadas a um projeto, para que eu possa definir o trabalho a ser feito, mantê-lo atualizado e remover itens obsoletos, assegurando a organização inicial do fluxo de trabalho. | Must Have | Gestão central do ciclo de vida das tarefas | RF-10, RF-11, RF-12| E5 |
| US10 | Como gestor, eu quero definir dependências entre tarefas para que eu possa garantir a sequência correta de execução e visualizar o impacto de atrasos. | Must Have | Gestão central do ciclo de vida de tarefas | RF-13| E6 |
| US11 | Como gestor, eu quero atribuir um nível de prioridade (ex: alta, média, baixa) a uma tarefa para que a equipe possa focar nos itens mais críticos primeiro e otimizar o fluxo de trabalho. | Must Have | Gestão central do ciclo de vida das tarefas | RF-14| E5 |
| US12 | Como gestor, eu quero enriquecer as tarefas com informações detalhadas e contextuais, como descrições completas, observações adicionais e tags para categorização, para que cada tarefa seja claramente compreendida, facilmente encontrável e bem organizada dentro do projeto. | Must Have | Gestão central do ciclo de vida das tarefas | RF-16, RF-19, RF-20| E5 |
| US13 | Como gestor, eu quero alterar o status de uma tarefa para que eu possa acompanhar o progresso do trabalho e identificar gargalos. | Must Have | Gestão central do ciclo de vida dos projetos | RF-17| E5 |
| US14 |Como gestor, eu quero registrar datas de início, prazo e conclusão para uma tarefa para que eu possa planejar o cronograma, monitorar o cumprimento de prazos e controlar o tempo do projeto. | Must Have | Gestão central do ciclo de vida das tarefas | RF-18 | E6 |
| US15 | Como gestor, quero filtrar tarefas por nome, status, responsável ou prazo, facilitando a localização rápida das atividades e pontos críticos. | Should Have | Melhora de navegação e acompanhamento | RF-21 | E6 |
| US16 | Como usuário, quero receber notificações por e-mail ao ser atribuído em uma tarefa e quando o prazo estiver próximo, para não perder prazos e acompanhar demandas. | Should Have | Engajamento, evita atrasos e desinformação | RF-22, RF-23 | E8 |
| US17 | Como gestor, quero visualizar dashboards com gráficos de progresso por projeto, status das tarefas e tarefas vencidas, para analisar resultados de maneira visual. | Could Have | Suporte gerencial e visão estratégica | RF-24 | E9 |
| US18 | Como gestor, quero exportar o dashboard para PDF, facilitando o compartilhamento de relatórios de desempenho. | Won't Have | Valor agregado, não essencial no MVP | RF-25 | E10 |
| US19 | Como usuário, quero me comunicar na tarefa com comentários, para discutir detalhes e esclarecer dúvidas diretamente no contexto da atividade. | Should Have | Colaboração e transparência | RF-15 | E7 |

Tabela 3: Backlog do projeto priorizado com MoSCoW

### 4.3 Requisitos não funcionais (RnFs)
| ID | Requisito Não Funcional | Categoria | Observação |
| ----- | ----- | ----- | ----- |
| RNF01 | Interface responsiva | Usabilidade | Desktop, notebook e celular |
| RNF02 | Sessão expira após 30 minutos | Segurança | JWT token |
| RNF03 | Backup semanal do banco | Operação |  |
| RNF04 | Suportar até 50 equipes e 5.000 tarefas | Desempenho |  |
| RNF05 | Arquitetura modular | Suportabilidade | Facilidade de novos módulos |
| RNF06 | Documentação de API em Swagger | Suportabilidade |  |
| RNF07 | Compatível com Safari e Chrome | Suportabilidade |  |
| RNF08 | Código versionado em Git | Suportabilidade |  |
| RNF09 | Uso de Typescript, Next.js (front) e NestJS (back) | Implementação |  |

Tabela 4: Requisitos não funcionais (RnFs)

### 4.4 Checklist DEEP do Backlog
O checklist DEEP é um guia prático utilizado para avaliar a saúde e a qualidade do backlog do projeto. Ele ajuda a garantir que o backlog seja útil de verdade para a equipe de desenvolvimento, funcionando como um filtro para saber se os itens estão bem organizados, fáceis de entender e prontos para serem trabalhados.

* Detalhado conforme a necessidade: As histórias de usuário que estão mais próximas de serem desenvolvidas são descritas com todos os detalhes necessários. Já os itens mais distantes (épicos ou temas) são mantidos em um nível mais macro, permitindo ajustes futuros.
* Estimado: Cada item do backlog recebe uma estimativa de esforço, seja em pontos de história, horas ou dias ideais, para apoiar o planejamento e a tomada de decisão.
* Emergente: O backlog nunca é estático. Ele está sempre em evolução, recebendo novos itens, refinando requisitos e se adaptando conforme surgem novas demandas, oportunidades ou mudanças de direção.
* Prioritizado: Os itens estão organizados por ordem de importância, considerando o valor para o negócio, os riscos envolvidos e as dependências técnicas. O que é mais importante para o sucesso do projeto sempre vem primeiro.

### 4.5 Minimo Produto Viável (MVP)
O Mínimo Produto Viável (MVP) deste projeto foi cuidadosamente definido para garantir que, já nas primeiras entregas, o sistema atenda às principais necessidades dos usuários, cliente e stakeholders.

Itens do MVP do Extra Gestão:

* Cadastro e login de usuários (autenticação via NextAuth/JWT)
    * MoSCoW: Must Have</br>
    Essencial para permitir o acesso seguro de novos usuários e garantir a entrada no sistema.
* Criação, edição e visualização de projetos
    * MoSCoW: Must Have</br>
    Fundamental para dar início ao controle de projetos e registrar o progresso de cada iniciativa.
* Cadastro, edição e alteração de status das tarefas vinculadas a projetos
    * MoSCoW: Must Have</br>
    Permite organizar o trabalho da equipe, acompanhar atividades e garantir que cada tarefa tenha responsáveis definidos.
* Visualização geral de projetos e tarefas (dashboard simples)
    * MoSCoW: Must Have</br>
    Proporciona visão consolidada do andamento dos projetos e das tarefas em execução, facilitando o acompanhamento.
* Interface responsiva para acesso por desktop e mobile
    * MoSCoW: Must Have</br>
    Garante que o sistema seja utilizado em diferentes dispositivos, aumentando o alcance e a usabilidade.
* Sessão expirada por inatividade e segurança básica no controle de acesso
    * MoSCoW: Must Have</br>
    Mantém a plataforma segura, evitando acessos não autorizados e protegendo informações sensíveis.

De acordo com a abordagem MoSCoW, itens classificados como Should Have também podem ser incluídos no MVP, desde que não comprometam o prazo ou a entrega das funcionalidades essenciais. Ou seja, se houver tempo disponível no ciclo de desenvolvimento, funcionalidades Should Have, como filtros avançados, exclusão de projetos/tarefas ou notificações, podem ser antecipadas e integradas ao MVP, agregando ainda mais valor ao produto inicial.

Funcionalidades fora do MVP inicial
Itens Could Have e Won’t Have permanecem reservados para futuras iterações.

### 4.6 Critérios de aceitação para o MVP
#### US01 – Cadastro de Novo Usuário
* O usuário só consegue finalizar o cadastro se preencher todos os campos obrigatórios.
* O sistema impede o cadastro de e-mail já existente, exibindo mensagem clara de erro.
* Após cadastro bem-sucedido, o usuário pode fazer login imediatamente.
* O sistema mostra mensagem de sucesso ao concluir o cadastro.
#### US02 – Login de Usuário
* O login só é aceito se e-mail e senha coincidirem com um usuário existente.
* Senha digitada errada gera mensagem clara de erro, sem expor dados do sistema.
* Ao efetuar login com sucesso, o usuário é redirecionado à página inicial da plataforma.
* O sistema mantém o usuário autenticado até logout ou expiração da sessão.
#### US03 – Recuperação de Senha
* O usuário pode solicitar recuperação informando o e-mail cadastrado.
* O sistema envia um link de redefinição de senha para o e-mail informado, se existir cadastro.
* Links de recuperação são únicos, expiram após um tempo e só permitem redefinir a senha uma vez.
* Ao concluir a redefinição, o sistema confirma a alteração ao usuário.
#### US04 – Logout
* O botão de logout está disponível em todas as telas protegidas para usuários logados.
* Ao clicar em logout, a sessão do usuário é encerrada imediatamente.
* O usuário é redirecionado à tela de login após sair.
* Uma mensagem informa que o logout foi realizado com sucesso.
#### US06 – Criar, Editar e Excluir Projetos (Gestor)
* Só é possível criar um projeto informando nome, descrição, data de início e data de fim.
* Projetos criados aparecem automaticamente na listagem do gestor.
* Projetos só podem ser editados se ainda não estiverem concluídos.
* Ao excluir um projeto, o sistema pede confirmação antes de remover da lista.
* Não é permitido criar dois projetos com o mesmo nome, devendo o sistema avisar o gestor em caso de duplicidade.
#### US07 – Visualizar e Listar Projetos
* O gestor consegue visualizar uma lista de todos os projetos cadastrados.
* Cada item da lista apresenta nome, status, datas e outras informações essenciais.
* É possível acessar detalhes completos de qualquer projeto da lista.
* Alterações nos projetos (edição, exclusão, criação) refletem imediatamente na listagem.
#### US08 – Visualizar Projetos como Usuário Comum
* O usuário só visualiza projetos nos quais está envolvido.
* Para cada projeto listado, exibe-se nome, status e datas principais.
* A listagem é atualizada automaticamente sempre que houver mudanças nos projetos atribuídos ao usuário.
#### US09 – Criar, Editar e Excluir Tarefas (Gestor)
* Cada tarefa obrigatoriamente precisa estar vinculada a um projeto existente.
* Só é possível criar tarefas informando nome, responsável e prazo.
* Tarefas só podem ser editadas ou excluídas se ainda não estiverem finalizadas.
* Toda alteração (criação, edição, exclusão) é imediatamente refletida para os usuários envolvidos.
* O sistema solicita confirmação antes de excluir uma tarefa.
#### US10 – Definir Dependências entre Tarefas
* O gestor pode selecionar tarefas predecessoras ao criar ou editar uma tarefa.
* O sistema exibe claramente as dependências entre tarefas na interface.
* Não é possível criar ciclos de dependências (tarefa A depende de B e B de A).
* Alterações em dependências atualizam a visualização de sequência e impacto de atrasos.
#### US11 – Atribuir Prioridade à Tarefa
* Ao criar ou editar uma tarefa, o gestor pode selecionar o nível de prioridade (alta, média, baixa).
* As tarefas exibem visualmente sua prioridade na listagem.
* O filtro por prioridade deve funcionar corretamente para ajudar na organização.
* Alterações na prioridade são salvas e refletidas imediatamente.
#### US12 – Enriquecer Tarefas com Descrição, Observações e Tags
* Ao criar/editar uma tarefa, o gestor pode inserir uma descrição detalhada, observações e uma ou mais tags.
* Descrições e observações podem ser alteradas a qualquer momento enquanto a tarefa não estiver finalizada.
* Tags podem ser adicionadas, removidas ou editadas para facilitar a busca e categorização.
* Essas informações aparecem visíveis para todos os envolvidos na tarefa.
#### US13 – Alterar Status da Tarefa
* O gestor pode alterar o status de uma tarefa (ex: não iniciada, em andamento, concluída).
* Só é possível mudar o status de tarefas que não estejam finalizadas.
* Toda mudança de status é registrada com data/hora e visível para os usuários envolvidos.
* Mudança de status dispara atualização automática no painel de acompanhamento.
#### US14 – Registrar Datas de Início, Prazo e Conclusão da Tarefa
* Ao criar uma tarefa, o gestor informa data de início e prazo previsto.
* O sistema calcula automaticamente o atraso caso a conclusão ultrapasse o prazo.
* A data de conclusão é registrada quando o status é alterado para “finalizada”.
* Todas essas datas são visíveis para gestor e usuários envolvidos.



## Referências Bibliográficas

* MARSICANO, G. Requisitos de Software: Fundamentos, Evolução e Práticas. v0.3, 2025.
* PRESSMAN, R. S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.
* RUBIN, K. S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.
* SCHWABER, K.; SUTHERLAND, J. Guia do Scrum: O Guia Definitivo para o Scrum, as Regras do Jogo. Scrum.org, 2020.
* Unidade 2 - Aula - Organização e Atualização - Backlog de Requisitos, Prof. Dr. George Marsicano, 2023.
* Unidade 2 - Aula - Representação de Requisitos, Prof. Dr. George Marsicano, 2023.