import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image';
export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4">
      <Header />
      <Hero />
      <div>
        Productos
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-slate-100 rounded-lg text-center'>
              <div className='flex justify-center p-4' >
              <Image className='object-scale-down' src={'/assets/img/mockups/product1.jpg'}
              width={100} height={100} alt='Producto' />
              </div>
              <h4 className='font-semimbold'>EL PRODUCTO</h4>
              <p>Producto de prueba, por medio de un mockup</p>
            </div>
        </div>
      </div>
    </main>
  );
}
