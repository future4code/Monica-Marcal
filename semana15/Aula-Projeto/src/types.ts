


//3. Crie mais um **tipo**: para representar as **transações**
// que serão salvas no extrato
export type Transaction = {
    value:number,
    date: Date,
    discription: string
}

// 1- Crie um **tipo** para representar uma conta para o usuário
export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    //4. Dentro da definição do usuário,
    // crie um array que armazene as transações de um cliente.
    statement: Array <Transaction>
}