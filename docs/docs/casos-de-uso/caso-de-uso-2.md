**Caso** **de** **Uso:** **Gerenciar** **Usuários** **(ConnectCare)**

**1.** **Descrição**

Este caso de uso permite ao Administrador do Sistema gerenciar as contas
de todos os tipos de usuários da plataforma "ConnectCare" (Pacientes,
Profissionais de Saúde, Organizações Parceiras). As funcionalidades
incluem pesquisar, visualizar, atualizar informações, criar novas contas
e desativar contas existentes, garantindo a segurança, a organização e a
integridade dos dados do sistema.

**2.** **Atores**

> ● Administrador do Sistema

**3.** **Fluxo** **Principal** **(Exemplo:** **Desativar** **uma**
**conta** **de** **usuário)**

3.1. O Administrador seleciona a opção "Gerenciamento de Usuários" no
painel administrativo. 3.2. O sistema apresenta uma interface para
pesquisar e listar os usuários.

3.3. O Administrador utiliza os filtros de busca para encontrar o
usuário desejado \[RN04\]. 3.4. O sistema exibe uma lista com os
resultados correspondentes à busca \[FE01\].

3.5. O Administrador seleciona o usuário que deseja gerenciar na lista.

3.6. O sistema exibe os detalhes completos da conta do usuário
selecionado.

3.7. O Administrador clica na opção "Desativar Conta". O sistema
verifica se a ação é permitida \[RN01\].

3.8. O sistema exibe uma mensagem de confirmação para a desativação
\[FA01\]. 3.9. O Administrador confirma a ação.

3.10. O sistema atualiza o status do usuário para "inativo", bloqueando
seu acesso à plataforma \[RN03\], e registra a operação em um log de
auditoria \[RS02\].

3.11. O sistema exibe a mensagem: "Usuário desativado com sucesso."
**4.** **Fluxos** **Alternativos**

> ● **\[FA01\]** **Cancelar** **Operação**
>
> ○ Em qualquer etapa que exija confirmação (como desativar ou apagar),
> se o Administrador escolher "Cancelar", o sistema interrompe a
> operação e retorna à tela anterior sem salvar alterações.
>
> ● **\[FA02\]** **Criar** **Novo** **Usuário**
>
> ○ 4.1. No passo 3.2, o Administrador seleciona a opção "Criar Novo
> Usuário". ○ 4.2. O sistema exibe um formulário para a criação de
> conta.
>
> ○ 4.3. O Administrador seleciona o tipo de perfil (Paciente,
> Profissional, Organização) e preenche os dados necessários **\[RN02,**
> **RN05,** **RN06\]**.
>
> ○ 4.4. O Administrador salva o novo usuário.
>
> ○ 4.5. O sistema valida os dados de acordo com as regras **\[RN05,**
> **RN06\]**, cria a nova conta com status "ativo" e exibe uma mensagem
> de sucesso. O fluxo
>
> então se encerra.
>
> ● **\[FA03\]** **Atualizar** **Dados** **de** **Usuário**
>
> ○ 4.1. No passo 3.6, o Administrador escolhe a opção "Editar Perfil".
>
> ○ 4.2. O sistema abre o formulário com os dados do usuário em modo de
> edição.
>
> ○ 4.3. O Administrador modifica as informações desejadas **\[RN07\]**.
> ○ 4.4. O Administrador salva as alterações.
>
> ○ 4.5. O sistema valida os novos dados **\[RN05,** **RN06\]**,
> atualiza o perfil do usuário e exibe uma mensagem de sucesso. O fluxo
> retorna ao passo 3.6.

**5.** **Fluxos** **de** **Exceção**

> ● **\[FE01\]** **Usuário** **Não** **Encontrado**
>
> ○ No passo 3.4, se a busca não retornar nenhum resultado, o sistema
> exibirá a mensagem: "Nenhum usuário encontrado com os critérios
> informados." O fluxo retorna ao passo 3.3.
>
> ● **\[FE02\]** **Dados** **Inválidos** **ou** **Incompletos**
>
> ○ Durante a criação \[FA02\] ou atualização \[FA03\] de um usuário,
> caso alguma regra de validação de dados seja violada, o sistema
> exibirá uma mensagem de erro indicando o campo problemático.
>
> ○ *Exemplo* *de* *mensagem:* "Verifique os campos obrigatórios e o
> formato dos dados. O e-mail informado já está em uso."
>
> ○ *Causa:* Este fluxo é acionado pela falha na validação das regras
> **\[RN02\]**, **\[RN05\]** ou **\[RN06\]**. O fluxo retorna à tela de
> preenchimento do formulário.

**6.** **Pré-condições**

> ● O Administrador do Sistema deve estar autenticado na plataforma com
> privilégios administrativos.

**7.** **Pós-condições**

> ● A conta de usuário é criada, atualizada ou desativada com sucesso no
> banco de dados.
>
> ● As permissões de acesso do usuário são aplicadas ou revogadas
> conforme a ação realizada.
>
> ● Toda ação de gerenciamento é registrada em um log de auditoria.

**8.** **Pontos** **de** **Extensão**

> ● Implementar funcionalidade de gerenciamento em massa (ex: desativar
> múltiplos usuários de uma vez).
>
> ● Criar perfis de administradores com diferentes níveis de permissão
> (ex: um
>
> administrador que só pode gerenciar pacientes).
>
> ● Integrar com um sistema de redefinição de senha automática para os
> usuários.

**9.** **Requisitos** **Especiais**

> ● **RS01:** O sistema deve garantir que dados sensíveis dos usuários
> (ex: CPF, dados de saúde) sejam exibidos de forma mascarada para o
> Administrador, exceto quando estritamente necessário.
>
> ● **RS02:** Todas as ações realizadas neste caso de uso devem ser
> registradas em um log de auditoria com o ID do administrador, data,
> hora e detalhes da ação para fins de segurança e rastreabilidade.

**10.** **Informações** **Adicionais**

> ● A desativação de uma conta é preferível à exclusão permanente para
> manter a integridade dos dados históricos (ex: prontuários e
> agendamentos associados ao usuário).
>
> ● A interface de gerenciamento deve ser robusta, permitindo filtros e
> buscas eficientes para lidar com um grande volume de usuários.

**11.** **Regras** **de** **Negócio**

> ● **RN01:** **\[Auto-Gerenciamento\]** Um administrador não pode
> desativar ou excluir a sua própria conta de usuário. A opção
> "Desativar Conta" deve estar desabilitada ou gerar um erro caso o
> usuário selecionado seja o próprio administrador logado.
>
> ● **RN02:** **\[Dados** **Profissionais\]** Ao criar ou atualizar uma
> conta para um **Profissional** **de** **Saúde**, o sistema deve exigir
> o preenchimento de um campo de identificação profissional (ex: CRM
> para médicos, CRP para psicólogos).
>
> ● **RN03:** **\[Inativação** **vs.** **Exclusão\]** Contas de usuários
> desativadas não podem realizar login. Seus dados devem ser mantidos no
> sistema para preservar a integridade do histórico.
>
> ● **RN04:** **\[Critérios** **de** **Filtragem\]** A pesquisa de
> usuários deve oferecer, no mínimo, os seguintes filtros: Nome
> Completo, E-mail, Tipo de Usuário (Paciente, Profissional,
> Organização) e Status (Ativo, Inativo).
>
> ● **RN05:** **\[Validação** **de** **Campos** **Obrigatórios\]** Para
> criar qualquer usuário, os campos Nome Completo, E-mail (em formato
> válido) e Tipo de Usuário são obrigatórios.
>
> ● **RN06:** **\[Unicidade** **de** **E-mail\]** O endereço de e-mail
> deve ser único para cada usuário no sistema. O sistema não deve
> permitir o cadastro ou a atualização com um e-mail que já esteja em
> uso.
>
> ● **RN07:** **\[Atualização** **de** **Dados\]** O Administrador pode
> atualizar dados cadastrais como nome, contato e status. A alteração do
> **Tipo** **de** **Usuário** é uma operação
>
> de maior impacto e pode estar restrita.
