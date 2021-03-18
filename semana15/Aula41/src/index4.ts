//Exercício4

type pokemon  = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/*
a) Como você faria, já com a extensão instalada,(npm install typescript -g)
para gerar um arquivo javascript a partir do  arquivo typescript
com o código abaixo?

Resposta = o Comando utilizado seria o tsc com o nome do arquivo
então, estando dentro da pasta que contem o arquivo, seria tsc index4.ts
*/

/*
b) E se este arquivo estivesse dentro de uma pasta chamada src.
O processo seria diferente? Se sim, descreva as diferenças.

Resposta = para transpilar de uma pasta chamada src,
seria necessário estar nesta pasta, ou apontar seu caminho no comando.

Seria então, estando dentro da pasta src,
tsc index4.ts novamente, ou, estando fora da pasta, tsc ./src/index4.ts
*/

/*
c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só?
Caso conheça, explique como fazer.

Resposta = Para transpilar múltiplos arquivos de forma simultânea
precisamos do arquivo de configuração do typescript, o tsconfig.json

Ao utilizá-lo, podemos transpilar todos os arquivos
de uma dada pasta apenas com o comando tsc.
*/

/*
d) Sobre o arquivo(tsconfig.json)
Leia as descrições sobre cada uma das propriedades.
Alguma configuração que chamou sua atenção?
O que mudou em comparação com o arquivo criado pelos slides?
Resposta: No arquivo original sem modificações, há uma variedade
de propriedades comentadas, para o nossos projetos descomentamos algumas.
Não entendo muito delas, mas me chamou atenção a Advanced Options,
possivelmente deve dar para manipular de acordo com o que queremos, criar algo especifico.
*/




//DICAS
/*
a) o comando `tsc` seguido do nome do arquivo
executa a transpilação de arquivos.

b) Esse comando funciona de forma parecida com o `cd` do terminal,
então podemos descrever não apenas nomes de arquivo, mas também seus caminhos.

c) Crie outros arquivos .ts na pasta.
Podemos rodar o comando `tsc` para transpilar vários arquivos
ao colocar seus nomes separados por um espaço.

tsc arquivo1.ts arquivo2.ts arquivo3.ts


Ou ainda, o comando `tsc` sem parâmetros,
que converte todos os arquivos com a extensão `.ts` que encontrar.
*/