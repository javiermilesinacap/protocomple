import Button from '@/components/Button'
import Image from 'next/image';
const index = () => {
    return (
        <div className='bg-slate-100 rounded-lg text-center hover:bg-slate-200'>
            <div className='flex justify-center p-4' >
                <Image className='object-cover rounded-md' src={'/assets/img/mockups/product1.jpg'}
                    width={150} height={150} alt='Producto' />
            </div>
            <h4 className='font-bold text-center'>EL PRODUCTO</h4>
            <p>Producto de prueba, por medio de un mockup</p>
            <p className='font-semibold scale-105'>$1520</p>
            <Button texto={'Add to Cart'} />
        </div>
    )
}

export default index