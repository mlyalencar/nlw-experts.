const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;", //as alternativas se enquadram como se fosse o valor do objeto
        "const myVar;"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'push()' faz em um array em JavaScript?",
      respostas: [
        "Remove um elemento do final do array.",
        "Adiciona um elemento no início do array.",
        "Adiciona um elemento no final do array."
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída da expressão '2' + 2 em JavaScript?",
      respostas: [
        "4",
        "22",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Altera o conteúdo HTML de um elemento.",
        "Remove um elemento do DOM."
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "/* Comment */",
        "// Comment",
        "<!-- Comment -->"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++) {}",
        "loop.for (let i = 0; i < 5; i++) {}",
        "for (let i < 5; i++) {}"
      ],
      correta: 0
    },
    {
      pergunta: "Qual método de string retorna o comprimento da string?",
      respostas: [
        "length()",
        "size()",
        "length"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para uma função de flecha em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "() => {}",
        "=> function() {}"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'pop()' em um array em JavaScript?",
      respostas: [
        "Adiciona um elemento no início do array.",
        "Remove um elemento do início do array.",
        "Remove um elemento do final do array."
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')//document.querySelector serva para selecionar um elemento já citado de html
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição pega um laço do array e trabalha encima desse item
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-'+ perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  
  corretas.delete(item)
  if(estaCorreta) {
  corretas.add(item)
  }
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
   ///coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  
  