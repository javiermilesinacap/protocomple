"use client";
import { useState } from "react"

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleFormSubmit(e){
    e.preventDefault();
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
        <input type="email" placeholder="Escribe tu Email" defaultValue={email} onChange={ e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Escribe Clave" defaultValue={password} onChange={ ev => setPassword(ev.target.value)} />
        <button type="submit"> Registrar </button>
      </form>
    </section>
  )
}

export default page