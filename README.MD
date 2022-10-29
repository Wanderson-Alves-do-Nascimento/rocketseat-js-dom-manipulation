# 5 Dicas para manipular elementos com a DOM utilizando JavaScript.
  - Conteúdo extraído do vídeo "Truques de JavaScript DOM que você precisa conhecer" do canal da Rocketseat.
  
# Referência:
 - https://www.youtube.com/watch?v=fQJ2nezkUEA

- O que é DOM?
  Document Object Model
- Visualizando a DOM

---
## Eventos
 - on + nomeDoEvento
 - addEventListener('nomeDoEvento',function(event){})

## Criação de elementos

 - .createElement()
 - template literals ``

 ## .cloneNode()
  - deep (boolean)
  - Permite clonar itens após convertê-los em variáveis, reaproveitando suas propriedades.

  - Desafios:
    - Resolver bug de quando todos os elementos foram removidos, anulando a função de clone.
    - Iniciar a lista vazia e gerar o clone após o primeiro item ser preenchido.
 ## target
  - Permite manipular um elemento alvo após transformá-lo em uma variável.
 ## classList
  - Permite acessar um elemento da DOM através da classe.
  - Exemplo: Em uma variável div, que recebe um elemento novo ou já existente, podemos evocá-lo e aplicar uma classe nele o invocando com div.classList("classe")