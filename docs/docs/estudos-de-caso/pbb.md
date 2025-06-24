# PBB - HealthNet

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/XPeVgJPTD6q8R6sIRLqCTv/PBB?node-id=0-1&embed-host=share" allowfullscreen></iframe>

# BDD - HealthNet
O BDD (Behavior Driven Development) é uma abordagem de desenvolvimento de software que enfatiza a colaboração entre desenvolvedores, testadores e não programadores. O objetivo é garantir que todos os envolvidos tenham uma compreensão clara dos requisitos e do comportamento esperado do sistema.

## US01: Buscar e acessar o cadastro de um paciente

**Cenário 1: Busca bem-sucedida por nome completo**

* Dado que o recepcionista está logado no sistema.

* E existe um paciente cadastrado com o nome "José da Silva" em uma das unidades da rede.

* Quando o recepcionista insere "José da Silva" na barra de busca.

* Então o sistema deve exibir "José da Silva" na lista de pacientes correspondentes.

**Cenário 2: Busca bem-sucedida por CPF:**

* Dado que o recepcionista está logado no sistema.

* E existe um paciente cadastrado com o CPF "123.456.789-00".

* Quando o recepcionista insere "123.456.789-00" na barra de busca.

* Então o sistema deve exibir o paciente correspondente a esse CPF na lista.

## US02: Cadastrar um novo paciente

**Cenário 1: Preenchimento do formulário de cadastro:**

* Dado que o recepcionista está na tela de cadastro de novo paciente.

* Quando ele preenche todos os campos essenciais (nome completo, CPF, data de nascimento, contato, endereço) em uma única página.

* E clica no botão "Salvar".

* Então o novo paciente deve ser criado com sucesso.

* E uma mensagem de sucesso deve ser exibida.

**Cenário 2: Validação de CPF e data de nascimento em tempo real:**

* Dado que o recepcionista está preenchendo o formulário de cadastro.

* Quando ele insere um CPF com formato inválido.

* Então o sistema deve indicar um erro de preenchimento para o campo CPF em tempo real.

* Quando ele insere uma data de nascimento com formato inválido.

* Então o sistema deve indicar um erro de preenchimento para o campo de data de nascimento em tempo real.

## US03: Marcar uma consulta para um paciente

**Cenário 1: Acesso rápido ao agendamento**

* Dado que o recepcionista acessou o cadastro de um paciente.

* Quando ele clica no botão para agendar uma consulta.

* Então o sistema deve levá-lo para a funcionalidade de agendamento com um único clique.
**Cenário 2: Marcação de consulta em horário vago** 
* Dado que o recepcionista está na tela de agendamento para um paciente.

* E ele selecionou um médico.

* Quando ele visualiza a agenda do médico com os horários disponíveis claramente marcados.

* E seleciona um horário vago.

* Então a consulta deve ser marcada e confirmada instantaneamente.

## US04: Acessar o prontuário eletrônico unificado

**Cenário 1: Visualização do prontuário completo** 

* Dado que o médico está logado e tem um paciente agendado.

* Quando ele seleciona o paciente agendado.

* Então o sistema deve exibir o prontuário eletrônico completo do paciente, consolidando informações de todas as unidades.

* E o prontuário deve ser carregado em no máximo 5 segundos.

**Cenário 2: Histórico em ordem cronológica**

* Dado que o médico está visualizando o prontuário de um paciente.

* Quando ele acessa o histórico do paciente.

* Então o prontuário deve apresentar o histórico de consultas, exames, diagnósticos e prescrições em ordem cronológica.

## US05: Adicionar informações no prontuário eletrônico

**Cenário 1: Registrar nova informação clínica** 

* Dado que o médico está com o prontuário de um paciente aberto.

* Quando ele adiciona uma nota clínica na seção correspondente.

* E registra um diagnóstico utilizando o CID-10.

* E solicita um novo exame.

* E salva as informações.

* Então as informações salvas devem ser registradas com a data, hora e a identificação do médico responsável.
E as novas informações devem ser imediatamente visíveis para outros profissionais autorizados.

## US06: Criar prescrições digitais com alertas

**Cenário 1: Alerta de alergia a medicamento** 

* Dado que o paciente possui um registro de alergia a "penicilina".

* Quando o médico tenta prescrever um medicamento que contém "penicilina".

* Então o sistema deve exibir um alerta sobre o risco de alergia.

**Cenário 2: Alerta de interação medicamentosa** 

* Dado que o paciente já faz uso de um medicamento "A".

* Quando o médico tenta prescrever um medicamento "B" que tem interação perigosa com "A".

* Então o sistema deve alertar sobre a possível interação medicamentosa.

**Cenário 3: Confirmação de leitura dos alertas** 

* Dado que o sistema exibiu um ou mais alertas de segurança.

* Quando o médico tenta finalizar a prescrição.

* Então a prescrição só pode ser finalizada após o médico confirmar que leu e está ciente dos alertas exibidos.

## US07: Envio automático da prescrição digital

**Cenário 1: Envio automático bem-sucedido** 

* Dado que o médico finalizou uma prescrição digital.

* Quando a prescrição é salva.

* Então o sistema deve enviá-la automaticamente para a farmácia conveniada e para o portal do paciente.

* E o paciente deve receber uma notificação (email ou SMS) sobre a nova prescrição.

* E o status "Enviado com sucesso" deve ser registrado no prontuário.

## US08: Ter uma visão unificada das agendas

**Cenário 1: Visualização consolidada de agendas** 

* Dado que o coordenador de agendamento está logado no sistema.

* Quando ele acessa o painel de agendamento.

* Então o painel deve exibir uma visualização diária, semanal e mensal das agendas de todos os médicos e salas lado a lado.

**Cenário 2: Prevenção de agendamento duplo** 

* Dado que o médico "Dr. João" já tem um horário agendado às 10:00.

* Quando o coordenador tenta marcar outra consulta para "Dr. João" no mesmo horário.

* Então o sistema deve impedir o agendamento.

* E deve exibir uma mensagem de erro informando o conflito.

**Cenário 3:  Atualização em tempo real**

* Dado que o coordenador está com o painel de agendas aberto.

* Quando um recepcionista cancela uma consulta.

* Então o cancelamento deve ser refletido em tempo real no painel do coordenador.

## US09: Enviar lembretes automáticos aos pacientes

**Cenário 1: Envio de lembrete 24 horas antes** 

* Dado que um paciente tem uma consulta agendada para amanhã.

* Quando o sistema verifica os agendamentos do dia seguinte.

* Então o sistema deve enviar automaticamente um lembrete via SMS e/ou e-mail para o paciente 24 horas antes do horário.

* E o lembrete deve conter o nome do paciente, nome do médico, data, hora e local da consulta.

* E o sistema deve registrar no prontuário do paciente que o lembrete foi enviado.

## US10: Bloquear/desbloquear horários na agenda dos médicos

**Cenário 1: Bloquear um horário vago com sucesso**

* Dado que eu sou um Coordenador de Agendamento e estou logado no sistema

* E estou visualizando a agenda do Dr. João, que possui um horário vago às 14:00

* Quando eu seleciono o horário das 14:00 e escolho a opção "Bloquear Horário"

* E informo o motivo "Reunião de equipe"

* Então o horário das 14:00 na agenda do Dr. João deve ser exibido como "Bloqueado"

* E não deve ser possível agendar uma nova consulta neste horário.

**Cenário 2: Tentar agendar em um horário bloqueado** 

* Dado que eu sou uma Recepcionista e estou logada no sistema

* E a agenda do Dr. João tem um bloqueio às 14:00

* Quando eu tento marcar uma nova consulta para um paciente às 14:00 com o Dr. João

* Então o sistema deve exibir uma mensagem de erro informando "Este horário está bloqueado"

* E a consulta não deve ser agendada.

**Cenário 3: Desbloquear um horário com sucesso** 

* Dado que eu sou um Coordenador de Agendamento e estou logado no sistema

* E a agenda do Dr. João possui um horário bloqueado às 14:00

* Quando eu seleciono o horário das 14:00 e escolho a opção "Desbloquear Horário"

* Então o horário das 14:00 na agenda do Dr. João deve voltar a ser exibido como "Disponível"

* E deve ser possível agendar uma nova consulta neste horário.

## US11: Monitorar a saúde e o desempenho do sistema

**Cenário 1: Visualização de métricas em tempo real**

* Dado que o Diretor de TI está logado no sistema.

* Quando ele acessa o dashboard de monitoramento.

* Então o dashboard deve exibir métricas como tempo de resposta, uso de CPU e memória em tempo real.

* E deve mostrar o status de disponibilidade dos principais serviços.

**Cenário 2: Recebimento de alertas de desempenho** 

* Dado que um limite de uso de CPU foi pré-definido em 90%.

* Quando o uso de CPU do sistema ultrapassa 90%.

* Então o sistema deve enviar um alerta automático para o Diretor de TI.

## US12: Gerar relatórios de auditoria e conformidade

**Cenário 1: Geração de relatório de acesso a dados** 

* Dado que o Diretor de TI precisa auditar o acesso aos dados de um paciente específico.

* Quando ele utiliza a função de gerar relatórios de auditoria.

* E filtra por um paciente e período específico.

* Então o sistema deve gerar um relatório que registre quem acessou, inseriu, alterou ou excluiu os dados daquele paciente, com data e hora.

* E o relatório deve ser exportável em PDF e CSV.

## US13: Gerenciar os perfis de acesso dos usuários

**Cenário 1: Acesso restrito para recepcionista** 

* Dado que um usuário está logado com o perfil "Recepcionista".

* Quando ele acessa o prontuário de um paciente.

* Então ele NÃO deve ter acesso a informações clínicas detalhadas, como notas de evolução e diagnósticos.

**Cenário 2: Acesso completo para médico**

* Dado que um usuário está logado com o perfil "Médico".

* Quando ele acessa o prontuário de um paciente.

* Então ele deve ter acesso completo ao prontuário clínico.

* Mas NÃO deve ter permissão para gerenciar perfis de outros usuários.

**Cenário 3: Permissões de Administrador**

* Dado que o Diretor de TI está logado com um perfil de administrador.

* Quando ele acessa a área de gerenciamento de usuários.

* Então ele deve ser capaz de criar, editar ou remover contas de usuário e atribuir perfis.

# PBB — Funcionalidades e User Stories


| ID   | Eu, como             | Quero                                                         | Para                                                    |
|------|----------------------|---------------------------------------------------------------|---------------------------------------------------------|
| US01 | Recepcionista        | buscar e acessar o cadastro de um paciente de qualquer unidade da rede | agilizar o processo de check-in e reduzir o tempo de espera |
| US02 | Recepcionista        | cadastrar um novo paciente em um formulário único e simplificado | realizar o registro de forma rápida e sem erros         |
| US03 | Recepcionista        | marcar uma consulta para um paciente de forma rápida          | o atendimento no balcão seja mais eficiente             |
| US04 | Médico               | acessar o prontuário eletrônico unificado de um paciente      | tomar decisões clínicas mais seguras e informadas       |
| US05 | Médico               | adicionar notas, diagnósticos e solicitar exames diretamente no prontuário eletrônico | toda a informação fique registrada em tempo real e de forma organizada |
| US06 | Médico               | criar prescrições digitais que alertem sobre possíveis alergias e interações medicamentosas | garantir a segurança do tratamento                     |
| US07 | Médico               | prescrição digital seja enviada automaticamente para a farmácia e para o portal do paciente | processo seja transparente e integrado                 |
| US08 | Coord. Agendamento   | ter uma visão unificada e em tempo real da agenda de todos os médicos e recursos (salas) | melhor compreensão/organização de horários              |
| US09 | Coord. Agendamento   | envie lembretes automáticos (SMS/email) aos pacientes         | a taxa de não comparecimento seja reduzida              |
| US10 | Coord. Agendamento   | bloquear/desbloquear horários na agenda dos médicos           | evitar conflitos e otimizar a alocação de horários      |
| US11 | Diretor de TI        | ter um painel de controle (dashboard) para monitorar a saúde e o desempenho do sistema | garantir sua estabilidade e segurança                  |
| US12 | Diretor de TI        | gerar relatórios de auditoria e conformidade de forma automatizada | HealthNet possa atender às regulamentações (como a LGPD) com facilidade |
| US13 | Diretor de TI        | gerenciar os perfis de acesso dos usuários (médicos, recepcionistas, etc.) | cada um veja apenas as informações pertinentes à sua função |

---

## Perfil: Recepcionista

### US01: Buscar e acessar o cadastro de um paciente de qualquer unidade da rede para agilizar o processo de check-in e reduzir o tempo de espera.

- **Critério de Aceitação 1.1**: Ao inserir o nome, CPF ou número de identificação do paciente na barra de busca, o sistema deve exibir uma lista de pacientes correspondentes de todas as unidades da rede.
- **Critério de Aceitação 1.2**: Ao selecionar um paciente da lista, o sistema deve carregar o seu cadastro completo em menos de 3 segundos.
- **Critério de Aceitação 1.3**: O sistema deve permitir a busca mesmo com informações parciais (por exemplo, parte do nome).
- **Critério de Aceitação 1.4**: Caso nenhum paciente seja encontrado, o sistema deve exibir a mensagem "Nenhum paciente encontrado" e oferecer um botão para iniciar um novo cadastro.

### US02: Cadastrar um novo paciente em um formulário único e simplificado para realizar o registro de forma rápida e sem erros.

- **Critério de Aceitação 2.1**: O formulário de cadastro deve conter todos os campos essenciais (nome completo, CPF, data de nascimento, contato, endereço) em uma única página.
- **Critério de Aceitação 2.2**: O sistema deve validar o formato do CPF e da data de nascimento em tempo real, indicando erros de preenchimento antes do envio.
- **Critério de Aceitação 2.3**: Após o preenchimento correto e o clique no botão "Salvar", o cadastro do novo paciente deve ser criado e confirmado com uma mensagem de sucesso.
- **Critério de Aceitação 2.4**: O sistema não deve permitir o cadastro de um novo paciente com um CPF já existente na base de dados, alertando o usuário sobre a duplicidade.

### US03: Marcar uma consulta para um paciente de forma rápida para que o atendimento no balcão seja mais eficiente.

- **Critério de Aceitação 3.1**: A partir do cadastro do paciente, deve ser possível acessar a funcionalidade de agendamento de consulta com um único clique.
- **Critério de Aceitação 3.2**: O sistema deve exibir a agenda do médico selecionado, mostrando claramente os horários disponíveis.
- **Critério de Aceitação 3.3**: Ao selecionar um horário vago, a consulta deve ser marcada e confirmada instantaneamente.
- **Critério de Aceitação 3.4**: Após a marcação, o sistema deve oferecer a opção de imprimir um comprovante do agendamento para o paciente.

---

## Perfil: Médico

### US04: Acessar o prontuário eletrônico unificado de um paciente para tomar decisões clínicas mais seguras e informadas.

- **Critério de Aceitação 4.1**: Ao selecionar um paciente agendado, o sistema deve exibir seu prontuário eletrônico completo, consolidando informações de todas as unidades de atendimento.
- **Critério de Aceitação 4.2**: O prontuário deve apresentar o histórico de consultas, exames, diagnósticos e prescrições em ordem cronológica.
- **Critério de Aceitação 4.3**: O tempo de carregamento do prontuário eletrônico não deve exceder 5 segundos.

### US05: Adicionar notas, diagnósticos e solicitar exames diretamente no prontuário eletrônico para que toda a informação fique registrada em tempo real e de forma organizada.

- **Critério de Aceitação 5.1**: Dentro do prontuário, deve haver seções distintas e claramente identificadas para adicionar notas clínicas, registrar diagnósticos (utilizando CID-10) e solicitar exames.
- **Critério de Aceitação 5.2**: As informações salvas devem ser registradas com data, hora e identificação do médico responsável.
- **Critério de Aceitação 5.3**: As novas informações adicionadas devem ser visíveis imediatamente para outros profissionais autorizados que acessem o mesmo prontuário.

### US06: Criar prescrições digitais que alertem sobre possíveis alergias e interações medicamentosas para garantir a segurança do tratamento.

- **Critério de Aceitação 6.1**: Ao prescrever um medicamento, o sistema deve verificar automaticamente o histórico de alergias do paciente e exibir um alerta em caso de risco.
- **Critério de Aceitação 6.2**: O sistema deve analisar a prescrição atual em conjunto com os medicamentos já em uso pelo paciente e alertar sobre possíveis interações medicamentosas perigosas.
- **Critério de Aceitação 6.3**: A prescrição só pode ser finalizada após o médico confirmar que leu e está ciente dos alertas exibidos.

### US07: A prescrição digital deve ser enviada automaticamente para a farmácia e para o portal do paciente para que o processo seja transparente e integrado.

- **Critério de Aceitação 7.1**: Após a finalização da prescrição digital, o sistema deve enviá-la automaticamente para a farmácia conveniada (se aplicável) e para o portal online do paciente.
- **Critério de Aceitação 7.2**: O sistema deve registrar o status do envio (ex: "Enviado com sucesso", "Falha no envio") no prontuário do paciente.
- **Critério de Aceitação 7.3**: O paciente deve receber uma notificação (email ou SMS) informando que uma nova prescrição está disponível em seu portal.

---

## Perfil: Coordenador de Agendamento

### US08: Ter uma visão unificada e em tempo real da agenda de todos os médicos e recursos (salas) para melhor compreensão/organização de horários.

- **Critério de Aceitação 8.1**: O painel de agendamento deve exibir uma visualização (diária, semanal e mensal) das agendas de todos os médicos e salas de consulta lado a lado.
- **Critério de Aceitação 8.2**: O sistema deve impedir o agendamento duplo para o mesmo médico ou mesma sala no mesmo horário, exibindo uma mensagem de erro.
- **Critério de Aceitação 8.3**: A atualização de um agendamento (marcação, cancelamento ou reagendamento) deve ser refletida em tempo real no painel para todos os usuários.

### US09: O sistema deve enviar lembretes automáticos (SMS/email) aos pacientes para que a taxa de não comparecimento seja reduzida.

- **Critério de Aceitação 9.1**: O sistema deve enviar automaticamente um lembrete de consulta para o paciente via SMS e/ou e-mail 24 horas antes do horário agendado.
- **Critério de Aceitação 9.2**: O lembrete deve conter as informações essenciais: nome do paciente, nome do médico, data, hora e local da consulta.
- **Critério de Aceitação 9.3**: O sistema deve registrar no prontuário do paciente que o lembrete foi enviado e o status da entrega (enviado, falhou).

### US10: Eu quero bloquear e desbloquear horários na agenda dos médicos para que eu possa evitar conflitos (ex: horário de almoço, reuniões) e otimizar a alocação de horários.

- **Critério de Aceitação 10.1**: O sistema deve permitir que um usuário com perfil "Coordenador de Agendamento" ou "Admin" selecione um ou mais blocos de horário na agenda de um médico e os marque como "Bloqueado".
- **Critério de Aceitação 10.2**: Um horário bloqueado deve ser visualmente diferente de um horário vago ou de um horário com uma consulta marcada (ex: cor cinza, com um ícone de cadeado).
- **Critério de Aceitação 10.3**: O sistema não deve permitir que uma nova consulta seja agendada em um horário que já está bloqueado. Uma mensagem de erro clara, como "Este horário está bloqueado", deve ser exibida.
- **Critério de Aceitação 10.4**: O sistema deve permitir que um horário previamente bloqueado seja desbloqueado, tornando-o novamente disponível para agendamento.

---

## Perfil: Diretor de TI

### US11: Ter um painel de controle (dashboard) para monitorar a saúde e o desempenho do sistema para garantir sua estabilidade e segurança.

- **Critério de Aceitação 11.1**: O dashboard deve exibir em tempo real métricas de desempenho do sistema, como tempo de resposta, uso de CPU e memória.
- **Critério de Aceitação 11.2**: O painel deve mostrar o status de disponibilidade dos principais serviços e integrações do sistema.
- **Critério de Aceitação 11.3**: O sistema deve enviar alertas automáticos para o Diretor de TI caso alguma métrica de saúde ultrapasse um limite pré-definido.

### US12: Gerar relatórios de auditoria e conformidade de forma automatizada para que a HealthNet possa atender às regulamentações (como a LGPD) com facilidade.

- **Critério de Aceitação 12.1**: O sistema deve permitir a geração de relatórios de auditoria que registrem quem acessou, inseriu, alterou ou excluiu dados de pacientes, com data e hora.
- **Critério de Aceitação 12.2**: Os relatórios devem ser exportáveis em formatos comuns (como PDF e CSV).
- **Critério de Aceitação 12.3**: Deve ser possível filtrar os logs de auditoria por usuário, paciente, período e tipo de ação para atender a solicitações específicas de conformidade com a LGPD.

### US13: Gerenciar os perfis de acesso dos usuários (médicos, recepcionistas, etc.) para que cada um veja apenas as informações pertinentes à sua função.

- **Critério de Aceitação 13.1**: O sistema deve possuir perfis de acesso pré-definidos (ex: Recepcionista, Médico, Coordenador, Admin) com permissões específicas para cada um.
- **Critério de Aceitação 13.2**: Um usuário com perfil "Recepcionista" não deve ter acesso a informações clínicas detalhadas do prontuário, como notas de evolução e diagnósticos.
- **Critério de Aceitação 13.3**: Um usuário com perfil "Médico" deve ter acesso completo ao prontuário clínico, mas não deve ter permissão para gerenciar perfis de outros usuários.
- **Critério de Aceitação 13.4**: Apenas usuários com perfil de administrador (como o Diretor de TI) podem criar, editar ou remover contas de usuário e atribuir perfis.

---

### Perfis

- Perfil: Recepcionista
- Perfil: Médico
- Perfil: Coordenador de Agendamento
- Perfil: Diretor de TI

# Construção de Backlog usando PBB \- HealthNet

## Priorização dos PBI's

Após a decisão dos PBIs, foi realizada a priorização deles por meio do **COORG**. Os PBI's de prioridade mais alta ficam mais em cima, e os de prioridade baixa, em baixo.

###  **O Método de Classificação**

O método se baseia em duas variáveis, e a prioridade final é a soma das duas.

1. **Frequência de Uso:** Mede a frequência com que a persona da história utiliza a funcionalidade.  
   * **5 \- HORA A HORA:** Usado constantemente ao longo do dia de trabalho.  
   * **4 \- DIÁRIO:** Usado ao menos uma vez por dia.  
   * **3 \- SEMANAL:** Usado algumas vezes por semana.  
   * **2 \- MENSAL:** Usado algumas vezes por mês.  
   * **1 \- TRIMESTRAL:** Usado poucas vezes ao ano, geralmente para fins específicos como auditorias.  
2. **Valor de Negócio:** Mede o impacto da funcionalidade para a HealthNet, seja em segurança, eficiência, conformidade legal ou experiência do paciente.  
   * **3 \- ALTO:** Crítico para a operação, segurança do paciente ou conformidade legal. Resolve um problema central.  
   * **2 \- MÉDIO:** Importante para otimizar processos ou melhorar a experiência, mas não é um bloqueador da operação principal.  
   * **1 \- BAIXO:** Funcionalidade de suporte ou conveniência que agrega valor, mas não é essencial no momento.

### **Tabela de Classificação**

A tabela abaixo mostra a pontuação de cada uma das 13 Histórias de Usuário.

| ID | História de Usuário (Resumo) | Persona | Frequência de Uso (Score) | Valor de Negócio (Score) | Prioridade (Soma) |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **US01** | Buscar paciente | Recepcionista | HORA A HORA (5) | ALTO (3) | **8** |
| **US04** | Acessar prontuário | Médico | HORA A HORA (5) | ALTO (3) | **8** |
| **US05** | Adicionar notas/diagnósticos | Médico | HORA A HORA (5) | ALTO (3) | **8** |
| **US08** | Ver agenda unificada | Coord. Agenda | HORA A HORA (5) | ALTO (3) | **8** |
| **US02** | Cadastrar novo paciente | Recepcionista | HORA A HORA (5) | ALTO (3) | **8** |
| **US03** | Marcar consulta rápida | Recepcionista | DIÁRIO (4) | ALTO (3) | **7** |
| **US06** | Criar prescrições com alertas | Médico | DIÁRIO (4) | ALTO (3) | **7** |
| **US07** | Enviar prescrição digital | Médico | DIÁRIO (4) | ALTO (3) | **7** |
| **US09** | Enviar lembretes automáticos | Coord. Agenda | DIÁRIO (4) | ALTO (3) | **7** |
| **US11** | Monitorar saúde do sistema | Diretor de TI | DIÁRIO (4) | ALTO (3) | **7** |
| **US10** | Bloquear/desbloquear horários | Coord. Agenda | SEMANAL (3) | MÉDIO (2) | **5** |
| **US13** | Gerenciar perfis de acesso | Diretor de TI | MENSAL (2) | ALTO (3) | **5** |
| **US12** | Gerar relatórios de conformidade | Diretor de TI | TRIMESTRAL (1) | ALTO (3) | **4** |
| **US13** | Gerenciar perfis de acesso | Diretor de TI | MENSAL (2) | ALTO (3) | **5** |
