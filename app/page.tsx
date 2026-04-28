import './home.css';

export default function Home() {
  return (
    <div className="cont">
      <a href="/menu">Menu</a>

      <h1>Page</h1>

      <img src="/imagem.jpg" alt="imagem" />  
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu email" />
        <button type="submit">Enviar</button>
      </form>

    </div>
  );
}