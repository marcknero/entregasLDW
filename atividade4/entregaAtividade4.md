# Arquivo para entrega das questões propostas

## 1- criando um projeto Vite

 Para criar um projeto Vite, roda-se os seguintes comandos no terminal:
` npm create vite@latest habitos --template react-ts `
    Comando cria o projeto de nome habitos, com configurações iniciais para react e type-script
``` 
    cd habitos
    npm install
```
 Comandos para entrar na pasta do projeto e instalar a dependencias necessárias iniciais do projeto

## exercícios 2 a 9
 Os exercícios de 2 a 9, serão entregues no formato do projeto finalizado junto a esta mesma pasta de repositorio de entrega, por favor acesse

[habitos](./habitos/)


## exercício 10 
**B** - para transformar o objeto complexo da API em um array simples com o FlatList

## exercicio 11
```
  if (imc >= 35.0 && imc <= 39.9) {
    return {
      classificacao: "Obesidade Grau II",
      cor: "red"
    };
  }
```
considerando a cor, na entrega de retorno `result()`.

## exercicio 12
Ela deve possuir um ciclo de vida bem definido, com:
* inicio - antes do fetch, onde deve ser definido o loading como tgrue, avisando ao react que um retorno assincrono é esperado e foi iniciado, disparando a renderização na tela
* sucesso - após os dados serem recebidos no estado o loadin deve se false e remove o indicador da UI
* erro - o indicador de loadin deve ser false, e o erro deve ser mostrado ao usuario pela UI.

## exercício 13
C - a API entra em um loop infinito de chamadas a cada atualização de estado

## exercício 14
o target:ES2015 comunica ao compilador qual a versão do JS esta sendo utilizada nos scripts, usando um modelo mais antigo como o ES5 tanto a ide como o compilador apresentarão erros de compilação devido a algumas as alterções de sintaxe e comandos dos modelos mais novos, apresentando erros e impedindo a execução de parte ou todo o projeto.

## exercicio 15
o metodo .slice(0,10) é usado para extrair uma pequena parte do array de resposta, sem modificar o dado original, limitando assim a quantidade de itens para o chamado aos 10 primeiros resultados

## exercício 16
B - para fornecer uma chave unica a cada item, auxiliando o React na performance de renderização

## exercício 17
O componente Button gera na UI, um botão digital que pode ou não executar uma ação ao ser acionado, para executar uma ação ao ser clicado sobre ele, deve-se configurar a propriedade onClick, podendo chamar uma função direta `onClick={calcular()}` ou uma função aninhada ou declarada como uma variável como `onClick={calcular}`

## exercício 18
eu rodaria um if para fazer uma verificação no inicio da função de salvar, de forma que ele retornase um erro se os campos nao estivessem devidamente preenchidos, porem eu realizaria usando a propriedade nativa alert, mas para fazer a mensagem em vermelho eu aplicaria uma logica de if na frente do input, gerando um label em vermelho caso retornasse erro na tentativa de submeter o formulário.

## exercício 19
B - o axios ja converte automaticamente a resposta para o formato JSON e possui uma sintaxe mais limpa para requisçoes mais complexas

## exercício 20
no caso a propriedade value recebe o valor digitado armazenando-o na variavel selecionada, para que a função verificar entrada faça uso deste valor para mudar o estado

## exercicio 21
eu criaria um estado booleano para algo como calculado e dependendo do resultado, mostraria para o usuário se aprovado apos o calculo, colocando na logica da função calculado a modificação do valor de calculado, deixando algo como o seguinte no result
```
{calculado && media >=6 &&(
  <Text style+{{ color:'green'}}>
  Aprovado
  </Text>
)}
```

## exercício 22
acredito que representa a chamada dos arrays de dependencia, funcionando como filtro, que informa ao React quando o codigo dentro do efeito deve ser executado novamente, quando ele é preenchido por alguma variavel ou valor, ele mira nesta variavel para realizar  renderização, de forma que somente seria renderizado se a variavel selecionada como foco, fosse alterada

## exercicio 23
a aplicação do estilo flex, faz com que o conteiner intereja com a area de forma mais dinamica, fazendo com que as alterações de fundo da pagina ou padding, nao sejam aplicadas ao corpo da pagina mas sim ao componente flex, geralmente containers. O eveito do justifycontent centraliza o conteudo em relação ao eixo horizontal da pagina, enquanto o alignitems os centraliza em relação ao eixo vertical

## exercício 24
a utilização do catch para atualizar e tratar o erro é indicada, pois os erros retornados pela api ou pelo compilador são geralmente apresentados na forma de codigos de erro, ou com liguagem não usual - mais tecnica - de forma que tratar o erro, gerando mensagens mais faceis de compreender indicam ao usuario o que esta acontecendo, podendo resolver alguns erros, como erros de preenchimentos, ele mesmo e rodar novamente o sistema, ou mesmo apontando o erro de forma mais clara para ser repassado a empresa ou responsavel tecnico pelo uso da aplicação.

## exercício 25
B - vincular o conteúdo visual do campo a ua variável de estado - porem acredito que a melhor resposta seria armazenar os dados inseridos pelo usuário para entao ser utilizados para vincular o conteudo a uma variável de estado, pois depende da programação de resposta de alguma ação ou do onchange.

## exercício 26
B - usar aspas simples e sintaxe especifica como ${}

## exercício 27
pois a verificação isNaN verifica se o valor é valido, nao vazio e se nao foi utilizado um caracter invalido para preencher o campo, de forma que o calculo não retorne em erro, quebrando a execução ou retornando em outro erro

## exercício 28
A - temos poucos elementos estáticos na tela

## exercício 29
d - um array contendo apenas os 5 primeiros itens da resposta da API

## exercício 30
d - keyExtractor

