# 0. Introdução
O backlog do Extra Gestão é um artefato dinâmico e evolutivo, revisado de forma contínua. Novas demandas, sugestões de stakeholders ou necessidades identificadas durante o desenvolvimento são discutidas em reuniões de refinamento e incorporadas ao backlog de maneira incremental, mantendo a aderência às necessidades do negócio e a flexibilidade no planejamento das entregas

# 1. Critérios de priorização 
## 1.1 Critérios de priorização
A priorização do backlog segue critérios consagrados em engenharia de requisitos:

* Valor de negócio: Impacto direto do requisito para geração de valor ou satisfação do usuário/patrocinador.
* Dependências técnicas: Pré-requisitos técnicos e integrações necessárias.
* Complexidade e esforço: Avaliação de tempo, recursos e riscos envolvidos.
* Prioridade do cliente/stakeholder: Demandas explícitas ou contratuais.
* Conhecimento, incerteza e risco: Priorização do que é mais incerto, arriscado ou pouco conhecido.

## 1.2 Framework de Priorização MoSCoW
Adotado conforme recomendações do Scrum

* Must Have (M): Essenciais, o sistema não funciona sem.
* Should Have (S): Importantes, mas possíveis de adiar temporariamente.
* Could Have (C): Desejáveis, agregam valor, mas não são críticos.
* Won’t Have (W): Fora do escopo do ciclo atual, mas documentados. </br>

**Justificativa de uso:** O método MoSCoW permite equilibrar valor, risco, esforço e evolução contínua, alinhando o backlog à estratégia do projeto e à realidade do cliente.

# 2. Definição de pronto (DoR) e Definição de feito (DoD)
## 2.1 Definição de pronto (DoR)
Uma história de usuário está pronta para desenvolvimento quando: 

* Estiver clara, objetiva, entendida e alinhada com o time (evite ambiguidades).
* Possuir critérios de aceitação objetivos, escritos de maneira colaborativa.
* Não tiver impedimentos técnicos (acessos, dependências, recursos).
* Estiver estimada, priorizada e refinada progressivamente (pronta para sprint).
* Permitir práticas de qualidade (XP, TDD, CI/CD) desde o início.

## 2.2 Definição de feito (DoD)
Uma funcionalidade ou tarefa é considerada concluída quando atende a todos os critérios abaixo:

* Atende todos os critérios de aceitação definidos na DoR.
* Código revisado e aprovado.
* Testes automatizados passam no CI/CD.
* Documentação técnica e de uso foi atualizada.
* Interface validada (usabilidade, responsividade).
* Mergeada na branch principal e validada em ambiente de homologação.
* Sem bugs críticos conhecidos.
* Validada com o PO/cliente (Sprint Review).

# 3. Processo de Engenharia de Requisitos
| Atividade | Prática | Técnica |
| ----- | ----- | ----- |
| Análise e Consenso | Análise dos requisitos | Decomposição/categorização, brainstorming |
| Elicitação | Conversa com cliente, brainstorm | Entrevista, prototipação |
| Validação e Verificação | Feedback do usuário, testes | Testes de usabilidade, revisão por pares, prototipagem |
| Gerenciamento | Controlar mudanças | Jira/Trello, versionamento |
Tabela 1: Processo de Engenharia de Requisitos

# 4. Backlog do Produto
## 4.1 Temas e Épicos 
| Tema                    | Épico                                       | Descrição do Épico                                                                                           |
|-------------------------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Gestão de Usuários      | Cadastro e Autenticação de Usuários          | Criação de conta, login, recuperação de senha e logout com autenticação segura (NextAuth/JWT).               |
| Gestão de Usuários      | Gerenciamento de Perfis e Níveis de Acesso   | Controle das permissões e perfis de acesso (usuário, gestor, admin) para uso adequado da plataforma.          |
| Gestão de Projetos      | Cadastro e Gerenciamento de Projetos         | Criar, editar, excluir, listar e visualizar projetos, com dados completos e documentos anexos.               |
| Gestão de Projetos      | Visualização de Projetos                     | Exibição de status, progresso e informações relevantes de projetos de forma clara e centralizada.             |
| Gestão de Tarefas       | Cadastro e Gerenciamento de Tarefas          | Criar, editar, excluir tarefas, atribuir responsáveis, definir prioridade, status, datas e observações.      |
| Gestão de Tarefas       | Organização, Filtragem e Relacionamento      | Definir dependências, adicionar tags, filtrar tarefas por critérios e organizar o fluxo de execução.         |
| Gestão de Tarefas       | Colaboração em Tarefas                       | Permitir comentários, trocas de informações e acompanhamento do andamento pelas partes envolvidas.           |
| Notificações e Alertas  | Notificações de Atribuição e Prazo           | Enviar e-mails automáticos ao atribuir tarefas ou ao se aproximar de prazos importantes.                     |
| Visualização e Relatórios | Dashboard de Progresso                    | Visualizar, em formato gráfico, o andamento de projetos e tarefas, status e pendências.                      |
| Visualização e Relatórios | Exportação e Compartilhamento de Relatórios| Gerar relatórios em PDF dos dashboards para compartilhamento e arquivamento.                                 |


## 4.2 Backlog do projeto priorizado com MoSCoW
| ID | User Story | MoSCoW | Justificativa | RFs Cobertos | Perfil |
| ----- | ----- | ----- | ----- | ----- | ----- |
| US01 | Como novo usuário, quero me cadastrar, fazer login, recuperar minha senha e sair da plataforma com segurança, para acessar meus dados a qualquer momento. | Must Have | Controle essencial de acesso à plataforma | RF-01, RF-02, RF-03, RF-04 | Usuário/Gestor |
| US02 | Como administrador, quero definir níveis de acesso para diferenciar permissões entre gestores e usuários comuns. | Should Have | Escalabilidade e governança de acesso | RF-05 | Admin |
| US03 | Como gestor, quero criar, editar, excluir, visualizar e listar projetos, informando dados completos, para organizar e acompanhar todas as iniciativas do time. | Must Have | Gestão central do ciclo de vida dos projetos | RF-06, RF-07, RF-08, RF-09 | Gestor |
| US04 | Como gestor, quero criar, editar e excluir tarefas vinculadas a projetos, atribuir responsáveis, definir dependências, prioridade, status, datas, tags, descrições e observações, para detalhar, organizar e controlar o fluxo de trabalho. | Must Have | Controle e detalhamento das tarefas e equipes | RF-10, RF-11, RF-12, RF-13, RF-14, RF-16, RF-17, RF-18, RF-19, RF-20 | Gestor |
| US05 | Como gestor, quero filtrar tarefas por nome, status, responsável ou prazo, facilitando a localização rápida das atividades e pontos críticos. | Should Have | Melhora de navegação e acompanhamento | RF-21 | Gestor |
| US06 | Como usuário comum, quero visualizar apenas as tarefas que me foram atribuídas, acompanhando seu status, prazos e podendo adicionar comentários e observações para colaborar com o gestor. | Must Have | Foco do usuário, colaboração e acompanhamento | RF-15, RF-17, RF-18, RF-19, RF-20 | Usuário |
| US07 | Como usuário, quero receber notificações por e-mail ao ser atribuído em uma tarefa e quando o prazo estiver próximo, para não perder prazos e acompanhar demandas. | Should Have | Engajamento, evita atrasos e desinformação | RF-22, RF-23 | Usuário |
| US08 | Como gestor, quero visualizar dashboards com gráficos de progresso por projeto, status das tarefas e tarefas vencidas, para analisar resultados de maneira visual. | Could Have | Suporte gerencial e visão estratégica | RF-24 | Gestor |
| US09 | Como gestor, quero exportar o dashboard para PDF, facilitando o compartilhamento de relatórios de desempenho. | Won't Have | Valor agregado, não essencial no MVP | RF-25 | Gestor |
Tabela 3: Backlog do projeto priorizado com MoSCoW

## 4.3 Requisitos não funcionais (RnFs)
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


## 4.4 Checklist DEEP do Backlog
O checklist DEEP é um guia prático utilizado para avaliar a saúde e a qualidade do backlog do projeto. Ele ajuda a garantir que o backlog seja útil de verdade para a equipe de desenvolvimento, funcionando como um filtro para saber se os itens estão bem organizados, fáceis de entender e prontos para serem trabalhados.

* Detalhado conforme a necessidade: As histórias de usuário que estão mais próximas de serem desenvolvidas são descritas com todos os detalhes necessários. Já os itens mais distantes (épicos ou temas) são mantidos em um nível mais macro, permitindo ajustes futuros.
* Estimado: Cada item do backlog recebe uma estimativa de esforço, seja em pontos de história, horas ou dias ideais, para apoiar o planejamento e a tomada de decisão.
* Emergente: O backlog nunca é estático. Ele está sempre em evolução, recebendo novos itens, refinando requisitos e se adaptando conforme surgem novas demandas, oportunidades ou mudanças de direção.
* Prioritizado: Os itens estão organizados por ordem de importância, considerando o valor para o negócio, os riscos envolvidos e as dependências técnicas. O que é mais importante para o sucesso do projeto sempre vem primeiro.

## 4.5 
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

## 4.6 Critérios de aceitação para o MVP
## US01 – Cadastro, login, recuperação de senha e logout
Critérios de aceitação:

* Só é possível concluir o cadastro se todos os dados obrigatórios estiverem preenchidos, e o sistema não permite cadastrar e-mail já existente.
* Após cadastro, o usuário já pode fazer login com as informações escolhidas.
* Caso esqueça a senha, o usuário pode pedir recuperação e recebe por e-mail um link seguro para redefinir.
* O botão de logout está disponível nas telas protegidas e, ao sair, a sessão é encerrada na hora.
* Sempre que o usuário faz qualquer uma dessas ações, o sistema mostra uma mensagem clara de sucesso ou de erro.
## US03 – Criar, editar, excluir, visualizar e listar projetos
Critérios de aceitação:

* Para criar um projeto, é obrigatório informar nome, descrição, data de início e data de fim.
* Projetos criados aparecem na lista de projetos do gestor automaticamente.
* Só dá para editar projetos que ainda não foram concluídos.
* Ao excluir um projeto, o sistema pede confirmação e retira o projeto da listagem.
* O sistema bloqueia tentativas de criar projetos com nomes repetidos, mostrando um aviso.
## US04 – Criar, editar e excluir tarefas (Gestor)
Critérios de aceitação:

* Cada tarefa obrigatoriamente precisa estar vinculada a um projeto, com nome, responsável e prazo definidos.
* Não é possível editar ou excluir tarefas que já estão finalizadas.
* O gestor pode definir prioridade, status, dependências e tags ao criar ou editar a tarefa.
* O campo de descrição e de observações pode ser preenchido ou alterado sempre que o gestor precisar.
* Assim que uma tarefa é criada, editada ou excluída, todos os envolvidos já veem a alteração na plataforma.
## US06 – Visualizar e comentar tarefas atribuídas (Usuário)
Critérios de aceitação:

* O usuário só visualiza tarefas para as quais foi designado.
* Cada tarefa mostra detalhes: nome, descrição, status, prazo e comentários feitos até o momento.
* O usuário pode comentar livremente enquanto a tarefa estiver em aberto.
* O campo de observação fica disponível enquanto a tarefa não estiver finalizada.
* O usuário não consegue mudar o status da tarefa — essa função é exclusiva do gestor.

# Referências Bibliográficas

* MARSICANO, G. Requisitos de Software: Fundamentos, Evolução e Práticas. v0.3, 2025.
* PRESSMAN, R. S. Engenharia de Software: Uma Abordagem Profissional. 7ª ed. São Paulo: McGraw Hill, 2011.
* RUBIN, K. S. Scrum Essencial: Um Guia Prático para o Processo Ágil Mais Popular. São Paulo: Alta Books, 2014.
* SCHWABER, K.; SUTHERLAND, J. Guia do Scrum: O Guia Definitivo para o Scrum, as Regras do Jogo. Scrum.org, 2020.
* Unidade 2 - Aula - Organização e Atualização - Backlog de Requisitos, Prof. Dr. George Marsicano, 2023.
* Unidade 2 - Aula - Representação de Requisitos, Prof. Dr. George Marsicano, 2023.
