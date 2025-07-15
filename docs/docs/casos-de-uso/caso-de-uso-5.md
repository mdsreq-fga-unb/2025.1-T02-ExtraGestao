# Caso de Uso: Receber Pontos de Fidelidade (ConnectCare)

## 1. Nome

**Receber pontos de fidelidade**

---

## 1.1 Descrição Resumida

Este caso de uso permite que o paciente receba pontos de fidelidade como recompensa por avaliar os serviços utilizados na plataforma ConnectCare. Esses pontos incentivam o engajamento do usuário e podem ser futuramente convertidos em benefícios, como descontos ou acesso prioritário a determinados serviços.

---

## 2. Atores

- Paciente

---

## 3. Fluxo Principal

1. O paciente acessa o histórico de atendimentos realizados.  
2. O sistema exibe a opção “Avaliar atendimento” para consultas passadas.  
3. O paciente preenche o formulário de avaliação, informando uma pontuação e, opcionalmente, um comentário.  
4. O paciente envia a avaliação.  
5. O sistema valida as informações inseridas e verifica se todos os campos obrigatórios foram preenchidos corretamente.  
6. O sistema registra o feedback e atribui automaticamente os pontos de fidelidade ao perfil do paciente.  
7. O sistema exibe uma mensagem de sucesso e o novo saldo de pontos acumulados.

---

## 4. Fluxos Alternativos

### 4.1 Avaliação já realizada anteriormente

- O sistema identifica que o atendimento já foi avaliado.  
- A opção “Avaliar atendimento” não é exibida para esse item.  
- O sistema mostra a avaliação anterior enviada pelo paciente.

---

## 5. Fluxos de Exceção

### 5.1 Campos obrigatórios não preenchidos

- Caso o paciente deixe de preencher algum campo obrigatório (como nota ou comentário), o sistema exibe uma mensagem solicitando o preenchimento completo.  
- O fluxo retorna para o preenchimento do formulário.

### 5.2 Erro de conexão com o servidor

- Se houver uma falha de conexão no momento do envio, o sistema exibe uma mensagem informando o erro e orientando a nova tentativa após restabelecimento da conexão.  
- O sistema salva temporariamente os dados e permite o reenvio posterior.

---

## 6. Condições para Início

- O paciente deve ter finalizado pelo menos um atendimento registrado no sistema.  
- O paciente precisa estar autenticado.  
- A avaliação deve ser enviada dentro de um prazo determinado (por exemplo, até 15 dias após o atendimento).

---

## 7. Resultados Esperados

- O feedback do paciente é registrado com sucesso.  
- O sistema atualiza o saldo de pontos de fidelidade do paciente.  
- O paciente é notificado sobre a adição dos pontos.

---

## 8. Pontos de Expansão

- Integração com um programa de recompensas externo, permitindo resgatar os pontos em lojas conveniadas.  
- Gamificação com níveis de engajamento, que desbloqueiam novos benefícios.

---

## 9. Requisitos Especiais

- O sistema deve funcionar mesmo em conexões de rede instáveis, salvando o feedback localmente e enviando quando a conexão for restabelecida.  
- O formulário deve ser responsivo e acessível em diferentes dispositivos móveis.  
- A pontuação deve ser creditada em tempo real, após o envio da avaliação.

---

## 10. Informações Complementares

- O paciente poderá acompanhar o histórico de pontos acumulados e utilizados na seção “Minha Conta”.  
- Cada atendimento só poderá ser avaliado uma única vez por paciente.  
- Os dados da avaliação serão utilizados exclusivamente para fins estatísticos e de melhoria contínua da plataforma.
