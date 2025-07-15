# Caso de Uso: Criar relatório da comunidade (ConnectCare)

## 1. Descrição
Esse caso de uso permite ao Agente Comunitário de Saúde registrar informações sobre a situação de saúde da comunidade atendida. O relatório reúne dados de visitas domiciliares, condições sanitárias, casos de doenças observadas e sugestões de ações preventivas. Essas informações são usadas por organizações parceiras e administradores do sistema para planejar campanhas e intervenções.

## 2. Atores
- Agente Comunitário de Saúde

## 3. Fluxo Principal (Exemplo: Criar Relatório da Comunidade)
1. O agente comunitário seleciona a opção “Gerenciar Relatórios”.
2. O sistema Apresenta a interface de Relatórios
3. O sistema apresenta a opção “Criar Relatório da Comunidade”.
4. O agente preenche os dados solicitados (ex.: bairro, número de domicílios visitados, casos observados)[RN05].
5. O sistema valida as informações fornecidas [FE01, FE02][RN01, RN03].
6. O agente confirma a submissão do relatório.
7. O sistema salva o relatório e exibe a mensagem de sucesso.

## 4. Fluxos Alternativos

### [FA01] Editar relatório antes da submissão
1. O agente pode revisar e alterar informações antes de confirmar o envio.[RN07]
2. O sistema permite edição total dos campos preenchidos.
3. Após revisão, o agente envia o relatório normalmente.[RN06]

### [FA02] Cancelar relatório
1. Caso o agente escolha “Cancelar”, o sistema interrompe o processo e retorna à tela principal, sem salvar os dados.

## 5. Fluxos de Exceção

### [FE01] Campos Obrigatórios Não Preenchidos
Caso o Agente de Saúde deixe de preencher um ou mais campos obrigatórios, o sistema exibirá a mensagem:  
**"Preencha os campos obrigatórios para continuar."**  
→ O fluxo retorna ao passo 3.3.  

### [FE02] Formato Inválido de Dados
Se algum dado for inserido em formato incorreto (ex: letras no campo de idade), o sistema exibirá a mensagem:  
**"Formato inválido. Insira números."**  
→ O fluxo retorna ao passo 3.3.

## 6. Pré-condições
- O agente precisa estar autenticado no sistema.
- As informações coletadas precisam estar disponíveis e organizadas.

## 7. Pós-condições
- O relatório é salvo corretamente no sistema.
- As informações ficam disponíveis para análise por administradores e organizações parceiras.

## 8. Pontos de Extensão
-  Integração com dados georreferenciados para mapear áreas críticas.
- Possibilidade de anexar fotos e arquivos às observações feitas.

## 9. Requisitos Especiais
- **RS01**: O sistema deve funcionar em dispositivos móveis com baixa conectividade [RN03].
- **RS02**: O sistema deve operar com estabilidade em redes lentas ou instáveis [RNF02].
- **RS03**: Campos obrigatórios devem estar destacados visualmente e emitir alertas em caso de erro [RNF03].

## 10. Informações Adicionais
- Os relatórios ajudam na priorização de ações de saúde e alocação de recursos.
- Podem ser usados para prestação de contas a instituições governamentais e ONGs.

## 11. Regras de Negócio
- **RN01**: Preenchimento Offline
O relatório pode ser preenchido offline por dispositivos com acesso limitado à internet. Os dados devem ser armazenados localmente de forma segura e sincronizados com o servidor assim que a conexão estiver disponível.
- **RN02**: Validação de Números Positivos
O campo “Número de domicílios visitados” deve aceitar apenas números inteiros positivos. Qualquer valor nulo, negativo ou decimal deverá ser rejeitado com mensagem de erro [FE02].
- **RN03**: Associação Geográfica Obrigatória
Todo relatório deve estar vinculado a uma área geográfica registrada previamente no sistema (bairro, setor ou zona). A submissão só será permitida se essa associação estiver presente.
- **RN04**: Exclusividade por Período
O sistema não deve permitir que o mesmo Agente Comunitário registre mais de um relatório para a mesma área e período (ex: mesma semana) sem justificativa explícita. Caso isso ocorra, o sistema exigirá preenchimento de um campo “Justificativa”.
- **RN05**: Obrigatoriedade de Campos Críticos
Os seguintes campos são obrigatórios para envio do relatório:
Nome da comunidade ou bairro, Número de domicílios visitados, Total de casos observados, Situação sanitária, Observações gerais ou recomendações e Caso algum deles não seja preenchido, a submissão será bloqueada [FE01].
- **RN06**:Controle de Versão
Cada relatório deve ter uma versão identificável. Caso o agente edite um relatório salvo anteriormente, uma nova versão será criada e vinculada ao original, mantendo histórico de alterações.
- **RN07**:Restrição de Edição após Envio
Após a submissão final do relatório, não será mais possível editá-lo diretamente. Qualquer modificação posterior deverá ser feita via solicitação de correção justificada e autorizada por um supervisor.
- **RN08**:Sigilo de Informações Sensíveis
Se o relatório contiver dados sensíveis (ex.: nomes, sintomas específicos, localização exata de pacientes), essas informações devem ser criptografadas no banco de dados e exibidas de forma anônima para perfis que não sejam administradores autorizados.
- **RN09**:Auditoria de Envio
Toda submissão de relatório deve ser registrada em log de auditoria com: Identificador do agente, Data e hora do envio, Localidade do relatório e Status da sincronização (offline/online)
- **RN10**: Classificação de Risco
O sistema deve calcular automaticamente uma pontuação de risco com base nos dados inseridos (ex.: número de casos, tipo de doença relatada, condições sanitárias). Esta pontuação será usada para priorização de campanhas de saúde.