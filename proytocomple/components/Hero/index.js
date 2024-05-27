import Image from "next/image";

const index = () => {
    return (
        <section className="grid grid-cols-2 my-5">
            <div>
                <h1 className="font-semibold text-4xl">El completo "ES CHILENO"</h1>
                <p className="text-gray-600 my-4">
                    El completo es un bocadillo tradicional de Chile que consiste en un pan de hot dog, «pan de completo» o «pan copihue» abierto a lo largo, ​ con una vienesa en el medio sobre la cual se colocan diversos ingredientes. Es una de las especialidades de comida rápida más comunes y conocidas en Chile.
                </p>
            </div>
            <div className="relative">
                <Image className="object-cover" src={'/assets/hotdog.png'} fill alt={'Hot Dog'} />
            </div>
            <div className="flex gap-4">
                <button className="bg-red-600 text-white rounded-full px-6 py-2">Comprar</button>
                <button>Ver más</button>
            </div>
        </section>
    )
}

export default index