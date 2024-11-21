<h1> Projeto Spotify </h1>

<h3>Objetivo: Criar um reprodutor de música inspirado no Spotify.</h3><br>

<h4>Segue abaixo uma breve instrução de como funciona essa aplicação:</h4>
<p>Na pasta (developing) se encontra essses arquivos "HTML, CSS e JavaScript" e dentro de cada um existe um roteiro baseados em códigos que se conectam entre si fazendo com que o software que esta em constante desenvolvimento seja funcional e bem simples de se usar. 
Usando como base de uma pagina web do próprio html, junto com alguns estilos formados pelo css, e as manipulações sendo feitas pelo javaScript, nisso temos as chamadas que fazem conexão com a outra pasta, sendo ela (artifacts) ela contem arquivos do tipo imagens e musicas, sendo necesários pra execução da aplicação.</p><br>

<div align="center">
    <img alt="imagem_execution_music" src="/artifacts/images/execution_music.png"></img>
</div><br>

##

<h3>Segue abaixo uma descrição de como funciona cada parte do código:</h3>

<h4>- Estrutura HTML:<h4>
<div>
    
    O HTML define a estrutura do reprodutor de música, que inclue:
    
    Definição do arquivo:
        DOCTYPE: Tipo do documento, no caso HTML
        lang: Linguagem atribuida a pagina web ("pt-BR" português) ("en" inglês)

    Definição do Cabeçalho:
        Meta charset: Define a codificação de caracteres.
        Meta viewport: Configura a visualização para dispositivos móveis.
        Title: O título da página.
        Link 1: Inclui o Bootstrap Icons para CSS personalizado
        Link 2: Chama um arquivo do tipo CSS para realizar as iterações com a pagina web
        
    Definição do Corpo:
        Div id music-container: Contém toda a estrutura do reprodutor de música.
        Playlist title: Título da playlist/ álbum.
        Cover image: Imagem da capa do álbum/música.
        Audio element: Elemento de áudio HTML para reprodução.

    Div id "below-cover"
        Song info: Contém o nome da música e da banda.
        Like button: Botão de "favorito" com um ícone de coração.

        Div id "progress-container"
           Progress container: Barra de progresso da música.

        Div id "progress-container"
            Button container: Contém os botões de controle (shuffle, previous, play, next, repeat).

        script: Chama um arquivo do tipo JavaScript para realizar as iterações com a pagina web
</div> 
    
<h4>- Estrutura CSS:</h4>
<div> 
 
    O CSS define a aparência e a organização do reprodutor de música, ou seja, ele centraliza o conteúdo, ajusta cores, tamanhos e espaçamentos, e a aparência das funcionalidades.

    Características do Corpo da Página (body)

        background-image: Define um gradiente linear como fundo da página.
        height: Define a altura do corpo da página para ocupar toda a altura da janela de visualização.
        color: Define a cor do texto como branca.
        font-family: Define a fonte do texto como sans-serif.
        display: Usa flexbox para layout responsivo.
        flex-direction: Define a direção principal do layout como coluna.
        align-items: Centraliza os itens verticalmente.

        Características do Título da Playlist (playlist-title)

            display: Usa flexbox para layout responsivo.
            flex-direction: Define a direção principal do layout como linha.
            justify-content: Centraliza oconteúdo horizontalmente.
            margin: Define a margem superior e inferior para espaçamento.
                
        Características do Nome da Música (song-name)

            font-size: Define o tamanho dafonte.
            font-weight: Define a espessura da 
            fonte como mais grossa (bolder).

        Características da Imagem de Capa (cover)

            width: Define a largura da imagem.
            height: Define a altura da imagem.
            
        Características da Div abaixo da Capa (below-cover)

            display: Usa flexbox para layout responsivo.
            flex-direction: Define a direção principal do layout como linha.
            justify-content: Distribui espaço entre os itens.
            align-items: Centraliza os itens verticalmente.
            margin: Define a margem superior e inferior para espaçamento.

        Características de Cores Claras (light-color)

            color: Define a cor do texto.

        Características do Contêiner de Progresso (progress-container)

            padding-bottom: Adiciona preenchimento na parte inferior para torná-lo clicável.

        Características da Barra de Progresso (progress-bar)

            background-color: Define a cor de fundo.
            height: Define a altura da barra.
            width: Define a largura da barra.
            border-radius: Define bordas arredondadas.

        Características do Progresso Atual (current-progress)

            --progress: Define uma variável CSS para o progresso.
            background-color: Define a cor de fundo.
            height: Herda a altura do elemento pai.
            width: Define a largura com base na variável de progresso.
            border-radius: Herda as bordas arredondadas do elemento pai.
            
        Características do Contêiner de Botões (button-container)

            display: Usa flexbox para layout responsivo.
            flex-direction: Define a direção principal do layout como linha.
            justify-content: Distribui espaço ao redor dos itens.
            align-items: Centraliza os itens verticalmente.
            
        Características dos Botões (button)

            background-color: Define a cor de fundo como herdada do elemento pai.
            color: Define a cor do texto como herdada do elemento pai.
            border: Remove a borda.
            
        Características Específica dos Botões (.button)

            .button: Define o tamanho da fonte.
            .button-navigate: Define um tamanho maior para botões de navegação.
            .button-biggest: Define o maior tamanho de fonte para o botão principal.
</div>


<h4>- Estrutura JavaScript:</h4>
<div>
    
        ...
</div>
