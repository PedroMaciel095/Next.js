import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">Pedro</h1>
      <div className="links">
        <Link href="/hoje">Hoje</Link>
        <Link href="/ferias">Minhas Férias</Link>
        <Link href="/planos">Meus Planos</Link>
        <Link href="/sobre">Sobre</Link>
      </div>
    </nav>
  );
}