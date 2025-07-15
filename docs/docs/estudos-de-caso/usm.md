![USM](/assets/USM.jpg)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/sDi1TPCIgpQzTGfcicwmjF/USM?node-id=0-1&embed-host=share" allowfullscreen></iframe>

# **ComunEventos: Mapeamento de Histórias de Usuário (USM)** 

## **Estrutura Geral do USM**

### **Usuários**

| ID | Descrição |
| :---- | :---- |
| Us01 | Organizador |
| Us02 | Participante |
| Us03 | Fornecedor |
| Us04 | Patrocinador |
| Us05 | Voluntário |

### **Atividades**

| ID | Descrição | Usuário |
| :---- | :---- | :---- |
| At01 | Planear evento | Us01 |
| At02 | Divulgar evento | Us01 |
| At03 | Participar | Us02 |
| At04 | Fornecer para o Evento | Us03 |
| At05 | Patrocinar evento | Us04 |
| At06 | Voluntariado | Us05 |

### **Backbone**

| ID | Descrição | Atividade |
| :---- | :---- | :---- |
| Bb01 | Tipo, data, hora e local | At01 |
| Bb02 | Adicionar descrição e público alvo | At01 |
| Bb03 | Solicitar fornecimento | At01 |
| Bb04 | Convidar parceiros e patrocinadores | At02 |
| Bb05 | Divulgar evento e patrocínio | At02 |
| Bb06 | Comprar ingresso | At03 |
| Bb07 | Comparecer ao evento | At03 |
| Bb08 | Alocar quantidade | At04 |
| Bb09 | Entregar Fornecimento | At04 |
| Bb10 | Selecionar evento | At05 |
| Bb11 | Voluntariar-se | At06 |
| Bb12 | Prestar voluntariado | At06 |

### **Tarefas do MVP**

| ID | Descrição | Backbone |
| :---- | :---- | :---- |
| Ta01 | Criar evento informando tipo, data, hora e local | Bb01 |
| Ta02 | Editar informações do evento | Bb01 |
| Ta03 | Escrever descrição detalhada do evento | Bb02 |
| Ta04 | Editar descrição do evento | Bb02 |
| Ta05 | Selecionar publico alvo no cadastro | Bb02 |
| Ta06 | Escolher itens a serem fornecidos | Bb03 |
| Ta07 | Escolher quantidade de itens | Bb03 |
| Ta08 | Organizar possíveis parceiros e patrocinadores | Bb04 |
| Ta09 | Postar em redes sociais | Bb05 |
| Ta10 | Fazer anuncio na televisão | Bb05 |
| Ta11 | Selecionar tipo de ingresso | Bb06 |
| Ta12 | Receber confirmação de compra | Bb06 |
| Ta13 | Informar dados de pagamento | Bb06 |
| Ta14 | Receber lembrete do evento | Bb07 |
| Ta15 | Visualizar pedido do organizador | Bb08 |
| Ta16 | Confirmar disponibilidade | Bb08 |
| Ta17 | Atualizar quantidade alocada | Bb08 |
| Ta18 | Confirmar entrega | Bb09 |
| Ta19 | Inserir observações pós-entrega | Bb09 |
| Ta20 | Escolher tipo de patrocínio | Bb10 |
| Ta21 | Inserir dados do patrocinador | Bb10 |
| Ta22 | Receber confirmação das reservas | Bb10 |
| Ta23 | Preencher formulário de inscrição | Bb11 |
| Ta24 | Selecionar disponibilidade e área de atuação | Bb11 |
| Ta25 | Confirmar presença | Bb12 |
| Ta26 | Registrar horas de atividade | Bb12 |

## **Detalhamento das Histórias de Usuário do MVP**

### **1\. Organizador (Us01)**

#### **Atividade: Planear evento (At01)**

* **Backbone (Bb01): Tipo, data, hora e local**  
  * **Ta01: Criar evento informando tipo, data, hora e local**  
    * **História:** Como um **Organizador**, eu quero **criar um novo evento informando as suas características fundamentais (tipo, data, hora e local)** para que **ele exista na plataforma e possa ser configurado.**  
    * **Critérios de Aceitação:**  
      1. Dado que estou no meu painel, devo ver um botão "Criar Novo Evento".  
      2. Ao clicar, um formulário deve ser exibido com campos para: Tipo de Evento (lista de seleção), Data, Hora de Início, Hora de Fim e Local.  
      3. Após preencher e guardar, o evento deve ser criado e eu devo ser redirecionado para a página de gestão deste novo evento.  
  * **Ta02: Editar informações do evento**  
    * **História:** Como um **Organizador**, eu quero **editar as informações básicas (tipo, data, hora, local) de um evento já criado** para **corrigir ou atualizar os detalhes.**  
    * **Critérios de Aceitação:**  
      1. Na página de gestão do evento, deve haver uma opção "Editar Detalhes".  
      2. Ao selecionar essa opção, os campos de tipo, data, hora e local devem tornar-se editáveis.  
      3. As alterações devem ser guardadas e refletidas publicamente na página do evento.  
* **Backbone (Bb02): Adicionar descrição e público alvo**  
  * **Ta03: Escrever descrição detalhada do evento**  
    * **História:** Como um **Organizador**, eu quero **escrever uma descrição detalhada sobre o evento** para **informar e atrair o público.**  
    * **Critérios de Aceitação:**  
      1. Na página de gestão do evento, deve haver um campo de texto rico para a descrição.  
      2. A descrição guardada deve ser exibida publicamente na página do evento.  
  * **Ta04: Editar descrição do evento**  
    * **História:** Como um **Organizador**, eu quero **editar a descrição de um evento** para **manter as informações sempre atualizadas.**  
    * **Critérios de Aceitação:**  
      1. O campo de descrição deve estar sempre disponível para edição na página de gestão.  
      2. Ao guardar, a nova descrição deve substituir a anterior imediatamente.  
  * **Ta05: Selecionar público alvo no cadastro**  
    * **História:** Como um **Organizador**, eu quero **selecionar o público-alvo do meu evento** para **ajudar na segmentação e divulgação.**  
    * **Critérios de Aceitação:**  
      1. Deve haver uma secção "Público-alvo" com uma lista de opções (ex: "Jovens", "Famílias", "Profissionais de TI").  
      2. As opções selecionadas devem ser guardadas e podem ser usadas futuramente para filtros de pesquisa.  
* **Backbone (Bb03): Solicitar fornecimento**  
  * **Ta06: Escolher itens a serem fornecidos**  
    * **História:** Como um **Organizador**, eu quero **listar os itens que preciso que sejam fornecidos para o meu evento** para **comunicar as minhas necessidades aos fornecedores.**  
    * **Critérios de Aceitação:**  
      1. Na área de "Fornecedores" do evento, deve haver uma opção para "Solicitar Itens".  
      2. Devo poder adicionar itens a uma lista (ex: "Cadeiras", "Sistema de Som").  
  * **Ta07: Escolher quantidade de itens**  
    * **História:** Como um **Organizador**, eu quero **especificar a quantidade de cada item solicitado** para **dar uma dimensão exata do meu pedido aos fornecedores.**  
    * **Critérios de Aceitação:**  
      1. Ao lado de cada item na lista de solicitação, deve haver um campo numérico para a quantidade.  
      2. A quantidade deve ser guardada junto com o item.

#### **Atividade: Divulgar evento (At02)**

* **Backbone (Bb04): Convidar parceiros e patrocinadores**  
  * **Ta08: Organizar possíveis parceiros e patrocinadores**  
    * **História:** Como um **Organizador**, eu quero **criar uma lista de possíveis parceiros e patrocinadores dentro da plataforma** para **gerir os meus contactos e propostas.**  
    * **Critérios de Aceitação:**  
      1. Deve haver uma secção "Parcerias" no painel do evento.  
      2. Nesta secção, devo poder adicionar o nome de uma empresa/pessoa e o seu estado (ex: "A contactar", "Proposta enviada", "Confirmado").  
* **Backbone (Bb05): Divulgar evento e patrocínio**  
  * **Ta09: Postar em redes sociais**  
    * **História:** Como um **Organizador**, eu quero **gerar um link partilhável do meu evento** para **divulgá-lo facilmente nas minhas redes sociais.**  
    * **Critérios de Aceitação:**  
      1. A página do evento deve ter um botão "Partilhar".  
      2. Ao clicar, devem aparecer opções para copiar o link ou partilhar diretamente nas redes sociais.  
  * **Ta10: Fazer anuncio na televisão**  
    * **História:** Como um **Organizador**, eu quero **ter acesso a um kit de média com a identidade visual do evento** para **facilitar a criação de anúncios para meios de comunicação tradicionais como a TV.**  
    * **Critérios de Aceitação:**  
      1. O sistema deve gerar uma página simples com o logótipo do evento, banner e informações principais num formato fácil de imprimir ou enviar.

### **2\. Participante (Us02)**

#### **Atividade: Participar (At03)**

* **Backbone (Bb06): Comprar ingresso**  
  * **Ta11: Selecionar tipo de ingresso**  
    * **História:** Como um **Participante**, eu quero **selecionar o tipo e a quantidade de ingressos que desejo comprar** para **iniciar o processo de inscrição no evento.**  
    * **Critérios de Aceitação:**  
      1. Na página do evento, os tipos de ingresso disponíveis e os seus preços devem estar claros.  
      2. Devo poder selecionar a quantidade desejada para cada tipo de ingresso.  
  * **Ta12: Receber confirmação de compra**  
    * **História:** Como um **Participante**, eu quero **receber uma confirmação imediata após a compra** para **ter a certeza de que a minha inscrição foi bem-sucedida.**  
    * **Critérios de Aceitação:**  
      1. Após a finalização do pagamento, uma página de sucesso deve ser exibida.  
      2. Um e-mail de confirmação contendo o ingresso (ou um link para ele) deve ser enviado para o meu e-mail.  
  * **Ta13: Informar dados de pagamento**  
    * **História:** Como um **Participante**, eu quero **informar os meus dados de pagamento de forma segura** para **concluir a compra do meu ingresso.**  
    * **Critérios de Aceitação:**  
      1. O formulário de pagamento deve solicitar as informações necessárias para a transação.  
      2. A plataforma deve indicar que o ambiente de pagamento é seguro.  
* **Backbone (Bb07): Comparecer ao evento**  
  * **Ta14: Receber lembrete do evento**  
    * **História:** Como um **Participante**, eu quero **receber um lembrete próximo à data do evento** para **não me esquecer do compromisso.**  
    * **Critérios de Aceitação:**  
      1. O sistema deve enviar automaticamente um e-mail de lembrete 1 ou 2 dias antes do evento.  
      2. O lembrete deve conter as informações essenciais: nome, data, hora e local.

### **3\. Fornecedor (Us03)**

#### **Atividade: Fornecer para o Evento (At04)**

* **Backbone (Bb08): Alocar quantidade**  
  * **Ta15: Visualizar pedido do organizador**  
    * **História:** Como um **Fornecedor**, eu quero **visualizar claramente o pedido de fornecimento feito por um organizador** para **entender a procura do evento.**  
    * **Critérios de Aceitação:**  
      1. Devo receber uma notificação sobre um novo pedido.  
      2. A página do pedido deve listar todos os itens e quantidades solicitadas.  
  * **Ta16: Confirmar disponibilidade**  
    * **História:** Como um **Fornecedor**, eu quero **confirmar a disponibilidade dos itens solicitados** para **informar o organizador sobre o que posso fornecer.**  
    * **Critérios de Aceitação:**  
      1. Para cada item do pedido, devo poder marcar como "Disponível" ou "Indisponível".  
      2. O organizador deve ser notificado sobre a minha resposta.  
  * **Ta17: Atualizar quantidade alocada**  
    * **História:** Como um **Fornecedor**, eu quero **ajustar a quantidade que posso fornecer para um item** para **informar o organizador sobre uma disponibilidade parcial.**  
    * **Critérios de Aceitação:**  
      1. Se um item estiver "Disponível", devo poder editar a quantidade que posso alocar.  
* **Backbone (Bb09): Entregar Fornecimento**  
  * **Ta18: Confirmar entrega**  
    * **História:** Como um **Fornecedor**, eu quero **marcar um pedido como "Entregue" na plataforma** para **registar a conclusão do serviço.**  
    * **Critérios de Aceitação:**  
      1. No meu painel de pedidos, deve haver um botão "Marcar como Entregue".  
      2. O estado do pedido deve ser atualizado para o organizador.  
  * **Ta19: Inserir observações pós-entrega**  
    * **História:** Como um **Fornecedor**, eu quero **adicionar observações após a entrega** para **comunicar qualquer detalhe importante sobre o serviço prestado.**  
    * **Critérios de Aceitação:**  
      1. Após marcar como "Entregue", um campo de texto deve aparecer para adicionar observações.

### **4\. Patrocinador (Us04)**

#### **Atividade: Patrocinar evento (At05)**

* **Backbone (Bb10): Selecionar evento**  
  * **Ta20: Escolher tipo de patrocínio**  
    * **História:** Como um **Patrocinador**, eu quero **ver e escolher entre diferentes tipos de quotas de patrocínio** para **apoiar um evento.**  
    * **Critérios de Aceitação:**  
      1. A página do evento deve ter uma secção "Seja um Patrocinador".  
      2. As quotas, os seus custos e benefícios devem estar claramente descritos.  
  * **Ta21: Inserir dados do patrocinador**  
    * **História:** Como um **Patrocinador**, eu quero **inserir os dados da minha empresa** para **formalizar o patrocínio.**  
    * **Critérios de Aceitação:**  
      1. Após escolher a quota, um formulário deve solicitar os dados da empresa (Nome, NIPC, Logótipo).  
  * **Ta22: Receber confirmação das reservas**  
    * **História:** Como um **Patrocinador**, eu quero **receber uma confirmação após o envio da minha proposta** para **saber que o organizador a recebeu.**  
    * **Critérios de Aceitação:**  
      1. Após submeter os meus dados, uma mensagem de sucesso deve ser exibida.  
      2. Um e-mail de confirmação deve ser enviado para mim e para o organizador.

### **5\. Voluntário (Us05)**

#### **Atividade: Voluntariado (At06)**

* **Backbone (Bb11): Voluntariar-se**  
  * **Ta23: Preencher formulário de inscrição**  
    * **História:** Como um **Voluntário**, eu quero **preencher um formulário de inscrição simples** para **me candidatar a uma vaga de voluntariado.**  
    * **Critérios de Aceitação:**  
      1. A página do evento deve ter uma secção "Seja Voluntário" com um link para o formulário.  
      2. O formulário deve pedir informações básicas como nome e contacto.  
  * **Ta24: Selecionar disponibilidade e área de atuação**  
    * **História:** Como um **Voluntário**, eu quero **informar a minha disponibilidade de horário e as minhas áreas de interesse** para **ajudar o organizador a alocar-me na melhor função.**  
    * **Critérios de Aceitação:**  
      1. O formulário de inscrição deve conter opções para selecionar turnos.  
      2. Deve haver uma lista de áreas de atuação para eu escolher.  
* **Backbone (Bb12): Prestar voluntariado**  
  * **Ta25: Confirmar presença**  
    * **História:** Como um **Voluntário** selecionado, eu quero **confirmar a minha presença** para **garantir ao organizador que pode contar comigo.**  
    * **Critérios de Aceitação:**  
      1. Devo receber um e-mail a informar que fui selecionado.  
      2. O e-mail deve conter um link ou botão para eu confirmar a minha participação.  
  * **Ta26: Registrar horas de atividade**  
    * **História:** Como um **Voluntário**, eu quero **registar as horas que trabalhei no evento** para **ter um controlo e para que o organizador possa emitir um certificado.**  
    * **Critérios de Aceitação:**  
      1. No meu painel de voluntário, deve haver uma área para "Registar Horas".  
      2. Devo poder inserir a data, hora de início e hora de fim do meu turno.