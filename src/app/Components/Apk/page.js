/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <section className='flex mx-[115px]'>
      <div className='w-1/2 flex flex-col justify-center '>
        <h2 className=' font-bold text-4xl mb-3'>ESTUDIA DESDE EL CELULAR CON NUESTRA APP KLAZIA</h2>
        <p className="">
          <b>Ya está disponible nuestra App de KLAZIA </b>
           con la que podrás estudiar de manera extremadamente resumida todos los conceptos de las materias de bachillerato, solo estudiarás las materias principales de manera raída y a tu ritmo, todo en una sola app esto te permitirá seguir aprendiendo en cualquier lugar del mundo.
          <br/>
          <br/> Desde esta App podrás personalizar tu perfil, realizar tus pagos, subir requisitos, hacer las actividades y evaluaciones.
          <br/>
          <br/>
          <b>Puedes descargarla desde tu android o Iphone y enterarte de todo lo nuevo que tendremos para ti.
          </b>
        </p>
        <div className=''>
          <img className=' w-[300px]' src='https://klazia.com/_next/image?url=https%3A%2F%2Fklazia.nyc3.digitaloceanspaces.com%2Flanding%2Fgoogle-icon.png&w=640&q=75'/>
        </div>
      </div>

      <div className=' w-1/2 '>
        <img className=' ' alt="Bachillerato virtual para adultos" src="https://klazia.com/_next/image?url=https%3A%2F%2Fklazia.nyc3.digitaloceanspaces.com%2Flanding%2Fcelularm.png&w=1920&q=75" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} />
      </div>
    </section>
  )
}
