# Requisitos Funcionais
**RF-01: Cadastrar usuário:** Permitir que o usuário realize cadastro na plataforma via NextAuth/JWT.</br>
**RF-02: Realizar login:** Permitir que o usuário autentique-se na plataforma via NextAuth/JWT.</br>
**RF-03: Recuperar senha:** Permitir que o usuário solicite recuperação de senha por e-mail.</br>
**RF-04: Efetuar logout:** Permitir que o usuário deslogue do sistema.</br>
**RF-05: Definir níveis de acesso:** Permitir atribuir diferentes níveis de acesso de acordo com a função do usuário.</br>
**RF-06: Criar projeto:** Permitir que o usuário crie um projeto informando nome, descrição, data de início, data de fim, e anexando documentos.</br>
**RF-07: Editar projeto:** Permitir que o usuário edite dados de um projeto existente.</br>
**RF-08: Excluir projetos:** Permitir que o usuário exclua permanentemente um projeto do sistema.</br>
**RF-09: Listar projetos:** Permitir que o usuário visualize lista de projetos com informações básicas e status.</br>
**RF-10: Criar tarefa:** Permitir que o usuário crie tarefa, atribuindo-a a um projeto e a um ou mais responsáveis.</br>
**RF-11: Editar tarefas:** Permitir que o usuário edite tarefa existente.</br>
**RF-12: Excluir tarefas:** Permitir que o usuário exclua permanentemente tarefa do sistema.</br>
**RF-13: Definir dependências entre tarefas:** Permitir indicar que uma tarefa depende da conclusão de outra.</br>
**RF-14: Atribuir prioridade às tarefas:** Permitir classificar tarefas em níveis.</br>
**RF-15: Comentar em tarefas:** Permitir discussões entre o gestor e o atribuído a cada tarefa.</br>
**RF-16: Adicionar tags em tarefas:** Permitir organizar e filtrar tarefas por etiquetas personalizadas.</br>
**RF-17: Definir status da tarefas:** Permitir que o usuário altere status de tarefa (ex.: Não iniciada, em andamento, concluída).</br>
**RF-18: Documentar data das tarefas:** Permitir que o usuário registre  data de início, prazo e conclusão da tarefa.</br>
**RF-19: Adicionar descrições:** Permitir que o usuário inclua descrições em cada tarefa.</br>
**RF-20: Adicionar observações:** Permitir que o usuário inclua observações em cada tarefa.</br>
**RF-21: Filtrar tarefas:** Permitir que o usuário filtre tarefas por nome, status, responsável ou prazo.</br>
**RF-22: Notificar atribuição de tarefa:** Enviar e-mail ao usuário ao atribuir-lhe tarefa.</br>
**RF-23: Notificar prazo de tarefa:** Enviar e-mail ao usuário quando o prazo de conclusão da tarefa se aproximar.</br>
**RF-24: Exibir dashboard:**  Permitir que usuário visualize dashboard com gráficos de progresso por projeto, tarefas por status e tarefas vencidas.</br>
**RF-25: Exportar dashboard para PDF:** Permitir que o usuário exporte dashboard em formato PDF.</br>


# Requisitos não funcionais
**RnF-01: Fornecer interface responsiva**</br>
    Permitir acesso via desktop, notebook e celular.</br>
**RnF-02: Encerrar sessão por inatividade**</br>
    Deslogar automaticamente usuário após 30 minutos de inatividade.</br>
**RnF-03: Realizar backup de dados**</br>
    Executar backup completo do banco de dados semanalmente.</br>
**RnF-04: Suportar alta carga de usuários**</br>
    Manter performance estável com até 50 equipes e 5.000 tarefas simultâneas.</br>
**RnF-05: Planejar arquitetura modular**</br>
    Permitir inclusão de novos módulos (ex.: financeiro) sem refatoração significativa.</br>
**RnF-06: Garantir usabilidade**</br>
    Oferecer interface simples, intuitiva e veloz, com curva de aprendizado inferior a 1 dia.</br>
**RnF-07: Implementar drag-and-drop**</br>
    Permitir arrastar e soltar tarefas sempre que viável.</br>
**RnF-08: Documentar a API**</br>
    Fornecer documentação da API em Swagger.</br>


