import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Card from '@/components/Card'

export default function Home() {
  const productos = ["Producto","Producto","Producto","Producto","Producto"]
  return (
    <main className="mx-auto max-w-6xl p-4">
      <Header />
      <Hero />
      <div>
        <h2 className='font-bold text-2xl text-center m-4'>Productos</h2>
        <div className='grid grid-cols-4 gap-4'>
            {productos.map((element)=>{
                return (<Card />)
            })}
        </div>
      </div>
    </main>
  );
}
