const page = () => {
  return (
    <section className="mt-8">
      <h1 className="text-center text-2xl">Registro</h1>
      <form className="block mx-auto max-w-xs">
        <input type="email" placeholder="Escribe tu Email" />
        <input type="password" placeholder="Escribe Clave" />
        <button type="submit"> Registrar </button>
      </form>
    </section>
  )
}

export default page