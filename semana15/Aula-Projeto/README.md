### WFS10-S15: Sistema Bancário
° Exercício resolvido inteiramente só com o uso de Typescript.


## Estruturas de Dados:
CONTAS:
    ° nome
    ° CPF (unico)
    ° data de nascimento (idade > 18)
    ° saldo (começa zerado)
    ° extrato (array de transações)
        ° valor
        ° data
        ° descrição

### Funcionalidades:
**Criar Conta**
    ° informar nome, CPF e data de nascimento

**Pegar Saldo**
    ° Passando nome e CPF
    ° O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 

**Adicionar saldo**
    ° Passando nome e CPF e valor.
    °O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

**Pagar Conta**
    ° Passando: um valor, uma descrição e uma data de pagamento.
    ° Caso não informe a data,considerar que o pagamento no mesmo dia.
    ° Não pode agendar um pagamento para uma data retroativa.
    ° Não pode haver pagamento sem saldo suficiente em conta.

**Transferência Interna**
    ° Deve informar o seu nome, CPF, o nome do destinatário, o CPF do destinatário e o valor em si.
    ° Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.


### Requisitos Mínimos:
O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

1. Crie um **tipo** para representar uma conta para o usuário
2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
5. Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

