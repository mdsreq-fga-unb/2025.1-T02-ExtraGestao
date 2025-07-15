# Caso de Uso: Localizar Serviços de Saúde

## 1. Descrição Resumida
O caso de uso **"Localizar Serviços de Saúde"** possibilita que moradores da Vila Esperança encontrem rapidamente serviços de saúde próximos usando o aplicativo **ConnectCare**. A ideia central é facilitar o acesso a postos, campanhas de saúde e agentes comunitários, reduzindo obstáculos geográficos e tecnológicos.

## 2. Atores Envolvidos
- **Usuário (Paciente)**

## 3. Condições Iniciais
- O app está instalado e devidamente configurado no celular do usuário.
- O paciente já possui cadastro ativo no ConnectCare.

## 4. Fluxo Principal de Eventos
1. O paciente abre o ConnectCare.
2. O sistema solicita alguns dados essenciais, como nome, faixa etária e principais sintomas.
3. O paciente preenche as informações requeridas.
4. O aplicativo utiliza esses dados para sugerir serviços de saúde na região, incluindo postos, campanhas de vacinação e agentes comunitários.
5. O paciente visualiza a lista de opções e pode filtrar por proximidade, tipo de atendimento e horários disponíveis.
6. O paciente escolhe um dos serviços sugeridos.
7. O sistema apresenta detalhes completos do serviço selecionado: endereço, horários de funcionamento e documentos necessários.
8. O processo se encerra quando o paciente consulta as informações ou opta por realizar o agendamento.

## 5. Fluxos Alternativos

### 5.1 Busca sem Internet
- Caso não haja conexão estável, o sistema exibe informações previamente salvas no dispositivo.
- O paciente pode consultar serviços básicos e campanhas já baixadas anteriormente.
- O fluxo volta ao passo 4.8 do fluxo principal.

### 5.2 Ausência de Serviços Disponíveis
- Se não existirem serviços na localidade, o aplicativo informa sobre a indisponibilidade.
- O sistema sugere alternativas, como contato com agentes comunitários.
- O fluxo retorna ao passo 4.8 do fluxo principal.

## 6. Fluxos de Exceção

### 6.1 Informações Insuficientes
- Caso o paciente não forneça dados suficientes, o sistema pede as informações que faltam.
- O paciente pode complementar os dados ou cancelar a busca.
- O fluxo retorna ao passo 4.3 do fluxo principal.

### 6.2 Falha Técnica
- Em caso de erro do sistema, é exibida uma mensagem explicando a falha.
- O paciente pode tentar novamente ou fechar o aplicativo.
- O fluxo é finalizado.

## 7. Regras de Negócio
- O sistema precisa funcionar mesmo com internet limitada.
- O app deve ser simples e acessível para quem possui pouca familiaridade com tecnologia.

## 8. Resultados Esperados
- O usuário encontra serviços de saúde relevantes e pode iniciar um agendamento.
- O histórico de buscas é atualizado para consultas futuras.

## 9. Requisitos Especiais
- Garantir a privacidade dos dados sensíveis conforme a legislação vigente.
- Otimização para celulares com baixo desempenho.

## 10. Observações
- Este caso de uso se conecta a outros processos, como **"Cadastrar Paciente"**, **"Marcar Consulta"** e **"Enviar Avaliação"**.
