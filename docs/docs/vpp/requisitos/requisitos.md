# Requisitos funcionais

**RF-01: Cadastrar usuário:** Permitir que o usuário realize cadastro na plataforma. <br>
**RF-02: Realizar login:** Permitir que o usuário autentique-se na plataforma. <br>
**RF-03: Recuperar senha:** Permitir que o usuário solicite recuperação de senha por e-mail.<br>
**RF-04: Efetuar logout:** Permitir que o usuário deslogue do sistema.<br>
**RF-05: Definir níveis de acesso:** Permitir atribuir diferentes níveis de acesso de acordo com a função do usuário.<br>
**RF-06: Criar projeto:** Permitir que o usuário crie um projeto informando nome, descrição, data de início, data de fim, e anexando documentos.<br>
**RF-07: Editar projeto:** Permitir que o usuário edite dados de um projeto existente.<br>
**RF-08: Excluir projetos:** Permitir que o usuário exclua permanentemente um projeto do sistema.<br>
**RF-09: Listar projetos:** Permitir que o usuário visualize lista de projetos em que está envolvido com nome, descrição e status.<br>
**RF-10: Criar tarefa:** Permitir que o usuário crie tarefas, contendo: Título, descrições, prioridade, dependências, data de início, prazo e tags, atribuindo-a a um projeto e a um ou mais responsáveis. <br>
**RF-11: Editar tarefas:** Permitir que o usuário edite todos os atributos de uma tarefa existente.<br>
**RF-12: Excluir tarefas:** Permitir que o usuário exclua permanentemente tarefas do sistema.<br>
**RF-13: Concluir tarefa:** Permitir que o usuário conclua uma tarefa, trancando a edição da tarefa e definindo o status como concluído, além de adicionar uma data de conclusão. <br>
**RF-14: Comentar em tarefas:** Permitir discussões entre o gestor e o atribuído a cada tarefa.<br>
**RF-15: Alterar status de tarefas:** Permitir que o usuário altere status de tarefa. (ex.: Não iniciada, em andamento, concluída). <br>
**RF-16: Filtrar tarefas:** Permitir que o usuário filtre tarefas por nome, status, responsável ou prazo.<br>
**RF-17: Exibir gráfico de progresso por projeto:** Exibir gráfico sobre o progresso de cada projeto. <br>
**RF-18: Exibir gráfico de tarefas por status:** Exibir gráfico que indica a distribuição das tarefas por status, podendo ser filtrado por projeto. <br>
**RF-19: Exportar dashboard para PDF:** Permitir que o usuário exporte a página de dashboards completa em formato PDF.<br>
**RF-20: Notificar prazo de tarefa:** Enviar e-mail ao usuário quando o prazo de conclusão da tarefa se aproximar em 1 semana e 1 dia, com verificação diária. <br>

## Regras de negócio
**RF-10:**<br>
**RN-1: Notificar atribuição de tarefa:** Enviar e-mail ao usuário ao atribuir-lhe tarefa.


# Requisitos não funcionais
**RNF-01: Interface Responsiva**<br>
O sistema deve adaptar corretamente sua interface aos seguintes tamanhos de tela: 360x640 (mobile), 768x1024 (tablet), 1366x768 (notebook) e 1920x1080 (desktop), sem sobreposição de elementos ou perda de funcionalidades.<br>
**RNF-02: Suporte a Alta Carga de Usuários**<br>
O sistema deve manter tempo de resposta inferior a 2 segundos com até 10 equipes cadastradas, 50 tarefas abertas simultaneamente.<br>
**RNF-03: Arquitetura Modular**<br>
A adição de um novo módulo (ex: financeiro) não deve exigir alteração em mais de dois arquivos já existentes, e o sistema deve continuar operando normalmente.<br>
**RNF-04: Usabilidade Técnica**
O sistema deve permitir que um novo usuário execute as funções de criar projeto, criar tarefa e alterar status em até 15 minutos sem treinamento formal. A navegação entre telas principais deve ocorrer em até 1 segundo em conexão de 10 Mbps.<br>
**RNF-05: Drag-and-Drop Funcional**<br>
O sistema deve permitir que o usuário arraste tarefas entre colunas de status (por exemplo: “A Fazer”, “Em andamento”, “Concluído”), com atualização no banco de dados em até 1 segundo após o movimento.<br>
**RNF-06: Suportabilidade de Navegadores**
O sistema deve funcionar corretamente, sem falhas visuais ou erros de execução, nas versões mais recentes dos navegadores Google Chrome, Mozilla Firefox, Microsoft Edge e Safari.<br>
**RNF-07: Tecnologias de Implementação**<br>
O sistema deve ser desenvolvido em TypeScript, utilizando Next.js no frontend, NestJS no backend e PostgreSQL como banco de dados.
**RNF-08: Dashboard**<br>
Os gráficos devem ficar agrupados visualmente em uma página dedicada.<br>


