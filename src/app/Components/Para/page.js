/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <section className=""> 
      <div className="pt-9 pb-9 pl-4 pr-4 flex flex-col justify-center items-center">
        <h2 className=' font-bold text-4xl'>Beneficios de nuestro programa Bachillerato en tiempo récord</h2>
        <div className="w-full h-full flex mt-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-[100px]">
            
            <div className="">
              <div className="">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/jovenm.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Jóvenes de 17 años o más</p>
              <p className="text-center">que por alguna razón no pudieron continuar sus estudios o perdieron varios años académicos</p>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/madre.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Madres cabeza de hogar</p>
              <p className="text-center">que deseen demostrar que no hay impedimentos para lograr sus metas.</p>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/servicio.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Empleadas de servicio</p>
              <p className="text-center">que quieran aprender en las noches o domingos desde el celular y terminar su bachillerato</p>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/trabajador-independiente.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Trabajadores independientes</p>
              <p className="text-center">que busquen una capacitación rápida y completa para estudiar en sus tiempos libres desde nuestra app.</p>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/exterior.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Personas que quieran migrar al exterior</p>
              <p className="text-center">No hay nada mejor que llegar con un título de bachiller legal y apostillado para conseguir trabajo o estud /io en el exterior</p>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/adultos.png" className="w-[300px] h-[300px] mx-auto" />
              </div>
              <p className="text-center font-semibold text-xl">Personas adultas en General</p>
              <p className="text-center">que deseen obtener el diploma de bachiller para un trabajo o universidad.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
