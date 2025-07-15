# Caso de Uso: Criar Perfil do Paciente (ConnectCare)

## 1. Descrição
Este caso de uso permite ao paciente criar seu perfil no aplicativo ConnectCare, preenchendo dados pessoais e informações básicas de saúde. O cadastro possibilita a personalização de recomendações de serviços, além de agilizar e melhorar a experiência de atendimento na plataforma.

## 2. Atores
- Paciente

## 3. Fluxo Principal (Exemplo: Cadastro de Novo Perfil)
1. O paciente abre o aplicativo "ConnectCare".
2. O sistema apresenta a opção “Criar Perfil”.
3. O paciente preenche os campos obrigatórios com seus dados pessoais e informações básicas de saúde [RF03], incluindo nome, e-mail, idade, entre outros.
4. O sistema valida se todos os campos obrigatórios foram preenchidos [RF05] e verifica se os dados estão no formato correto [RF06].
5. O paciente confirma a criação do perfil.
6. O sistema registra o novo perfil no banco de dados [RF08] e exibe uma mensagem de sucesso [RF09].

## 4. Fluxos Alternativos

### [FA01] Atualizar Perfil
1. Após o cadastro, o paciente acessa a função “Editar Perfil”.
2. O sistema carrega os dados atuais do paciente para edição [RF11].
3. O paciente altera os dados desejados e salva as mudanças [RF12].
4. O sistema valida e atualiza o perfil com as novas informações e exibe mensagem de sucesso [RF13].

### [FA02] Cancelar Cadastro
1. Durante o preenchimento do perfil, o paciente opta por cancelar a operação.
2. O sistema descarta os dados inseridos e retorna à tela inicial [RF14, RF15].

## 5. Fluxos de Exceção

### [FE01] Campos Obrigatórios Não Preenchidos
Caso o paciente deixe de preencher um ou mais campos obrigatórios, o sistema exibirá a mensagem:  
**"Preencha os campos obrigatórios para continuar."**  
→ O fluxo retorna ao passo 3.3.  
→ [RF16]

### [FE02] Formato Inválido de Dados
Se algum dado for inserido em formato incorreto (ex: letras no campo de idade), o sistema exibirá a mensagem:  
**"Formato inválido. Insira números."**  
→ O fluxo retorna ao passo 3.3.  
→ [RF17]

## 6. Pré-condições
- O paciente deve ter acesso ao aplicativo ConnectCare.
- O paciente deve fornecer informações válidas para concluir o cadastro.

## 7. Pós-condições
- O perfil do paciente é salvo com sucesso no banco de dados.
- O paciente passa a receber recomendações personalizadas baseadas em seu perfil.
- Os dados inseridos ficam disponíveis para futuras consultas ou edições.

## 8. Pontos de Extensão
- Integração com prontuário eletrônico, permitindo vinculação com dados de consultas, exames e tratamentos.
- Sugestões de serviços baseados na localização e no histórico de saúde.
- Criação de perfis vinculados (por exemplo, responsáveis legais de menores).

## 9. Requisitos Especiais
- **RS01**: O sistema deve funcionar adequadamente mesmo em dispositivos com baixo desempenho [RNF01].
- **RS02**: O sistema deve operar com estabilidade em redes lentas ou instáveis [RNF02].
- **RS03**: Campos obrigatórios devem estar destacados visualmente e emitir alertas em caso de erro [RNF03].

## 10. Informações Adicionais
- A interface do aplicativo deve ser simples, acessível e amigável para usuários com pouca familiaridade com tecnologia.
- Dados de localização são utilizados exclusivamente para recomendar serviços próximos ao paciente.

## 11. Regras de Negócio
- **RN01**: O aplicativo deve permitir a criação de perfil mesmo sem conexão com a internet. Os dados serão sincronizados quando houver acesso à rede.
- **RN02**: A idade informada deve obrigatoriamente ser um número inteiro positivo.
- **RN03**: Os dados devem ser armazenados localmente até que possam ser sincronizados com segurança ao servidor.
- **RN04**: O e-mail, se solicitado, deve estar em formato válido e pode ser usado como identificador para futuras autenticações.