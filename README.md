# nlw-experts.
# HTML

    *Significa HyperText Markup Language, ou seja, é uma linguagem de marcação de hiper texto 

    *Hiper texto seriam especies de link, então, ao clicar em uma palavra ou texto eu serei direcionado para outra janela

    *Markup está relacionado com Tag, que seria uma formatação feita no texto,como por exemplo, aumentar um título para ele se destacar, o que pode ser feito da seguinte forma:

  <h1>
  Título    ou pode ser feito na mesma linha   <h1>Título</h1>
  </h1>  

OBS: o comando <h1> deve ser fechado da seguinte forma </h1>para que assim você encerre a instrução

    *Para atribuir links fazemos da seguinte forma:

    <a>pra onde vai</a>

    *As Tags podem conter instruções/atributos, e para adicionálos fazemos d seguinte forma:

    <a ATRIBUTO="conteúdo">para onde vai</a>

     EXEMPLO:

     <a href="https://google.com"</a>

    OBS: href é um tipo de atributo, existem vários e cada um possui seu significado

    OBS2: é possível utilizar uma tag dentro da outra utilizaando o comando <div>, o que nos possibilita criar textos e subtítulos

      EXEMPLO:

<h1>Teste seus conhecimentos</h1>
<div>
  <h3>
      Pergunta 01
  </h3>
</div>

também é possível classificar o div como por exemplo ,<div class="quiz-item">,
desse modo atribuimos um valor para o div, para que assim não nos percámos

OBSERVAÇÃO GERAL: ao clicar tab ele já fecha automaticamente a tag

   *Para anexar uma lista após um subtítulo utilizamos a tag <dl>, que seria uma descripicion list e dps um <dt> descripcion termo , que nos dará uma resposta, para selecionar a resposta certa escrevemos input e damos enter, e dentro das aspas irá aparecer o termo "texto", mas como queremos um quiz de assinalar trocamos para "radio", tornando-o uma coisa só mas separada das demais tags presentes no div ou no dt (ao trocar span por div ocorrerá uma quebra de linha)

a tag <span> faz com que as tags fiquem em linha, utilizada para deixar a bolinha e o texto no mesmo ""quadrado"" por assim dizer


OBS adcionamos name= "item" para que seja selecionado somente um elemento


   *criamos uma nova tag chamada template e colocamos um aberta no inicio e o fechado no fim de tudo, ele serve para ocultar as informações em um momento, para que depois decidamos como ela irá aparecer, é como se estivéssemos fazendo todo um rascunho pra depois colocar os dados reais






# JAVA SRIPT TESTE
```js
const mensagem = "Bom te ver aqui! "
alert(mensagem + (10 * 100) + " abraços")    
// bom te ver aqui! 1000 abraços
```


um codigo identado é um codigo arrumado, para fazer isso selecionamos tudo e apertamos tab


//o setattribute é a função que atribui valor ao input, para que assim seja possível selecionar mais de uma alternativa, desde que sejam de perguntas diferentes

# CSS
Cascading Style Sheet (folha de estilo em cascta)