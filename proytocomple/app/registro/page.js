"use client";
import { useState } from "react"

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleFormSubmit(ev){
    ev.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type': 'application/json'}
    }
    )
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-2xl">Registro</h1>
      <form className="block mx-auto max-w-xs" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="Escribe tu Email" value={email} onChange={ e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Escribe Clave"  value={password} onChange={ ev => setPassword(ev.target.password)} />
        <button type="submit"> Registrar </button>
      </form>
    </section>
  )
}

export default page