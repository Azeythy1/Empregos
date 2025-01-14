import './App.css'

function App() {
  const post='https://www.google.com/imgres?q=imagens%20de%20quarto&imgurl=https%3A%2F%2Ffinger.ind.br%2Fwp-content%2Fuploads%2F2023%2F05%2Fdecoracao-de-quarto-6-dicas-para-ter-um-ambiente-confortavel-e-funcional-1024x768.jpeg&imgrefurl=https%3A%2F%2Ffinger.ind.br%2Fblog%2Fdecoracao-de-quarto%2F&docid=oI2NYOqpkFRWEM&tbnid=K7e8NahKqaqXYM&vet=12ahUKEwiMnPa13vWKAxX1qpUCHR6sJaIQM3oECDUQAA..i&w=1024&h=768&hcb=2&ved=2ahUKEwiMnPa13vWKAxX1qpUCHR6sJaIQM3oECDUQAA'

  return (
    <>
      <div className='menu'> 
        <div className='barra'>
          <button>Inicio</button>
          <button>Vagas</button>
          <button>Cadastro</button>
          <div className='sub'>
            <input type="text" placeholder='pesquisar' />
            <button>Pesquisar</button>
          </div>
        </div>
      </div>

      <div className='body'>
        <ul>
          <li>
            <h2>Titulo</h2>
            <a href={post}>Imagem</a>
            <p>Descrição</p>
          </li>
          <li>
            <h2>Titulo</h2>
            <a href={post}>Imagem</a>
            <p>Descrição</p>
          </li>
          <li>
            <h2>Titulo</h2>
            <a href={post}>Imagem</a>
            <p>Descrição</p>
          </li>
          <li>
            <h2>Titulo</h2>
            <a href={post}>Imagem</a>
            <p>Descrição</p>
          </li>
        </ul>

      </div>

    </>
  )
}

export default App
