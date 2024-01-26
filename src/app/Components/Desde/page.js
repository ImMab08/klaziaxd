/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function page() {
  return (
    <section className=" mx-[100px]"> 
      <div className="pt-9 pb-9 pl-4 pr-4 flex flex-col justify-center items-center ">
        <h2 className=' font-bold text-4xl'>Desde el año 2007 realizando ceremonias de graduació</h2>
        <p className='mt-5'>Nuestros años de experiencia nos definen en calidad de servicio que no encontrarás en otra institución</p>
        <div className="w-full h-full flex mt-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
            
            <div className="">
              <div className="">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/33920_163723990319246_6297853_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/10513365_816877465003892_6397817256968803303_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/72701_163723973652581_4124067_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/39521_163724010319244_5370655_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/37213_163723950319250_2758425_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>

            <div className="">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/landing/imgs-ceremonia-landing/72484_163723933652585_2062142_n.jpg" className="w-auto h-auto mx-auto" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="pt-9 pb-9 pl-4 pr-4 flex flex-col justify-center items-center">
        <h2 className=' text-center font-bold text-4xl'>Mira lo que dicen los principales medios del país sobre Klazia</h2>
        <div className="w-full h-full flex mt-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            
            <div className="flex flex-col items-center shadow-lg">
              <div className="">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/Captura%20de%20pantalla%202022-12-12%20a%20la%28s%29%208.29.18%20p.m..png" className="w-auto h-auto mx-auto" />
              </div>
              <a href="https://www.vanguardia.com/informes-comerciales/informacion-comercial/buscando-ser-bachiller-o-tecnico-la-era-virtual-le-abre-el-camino-JD3270874" target="_blank" rel="noreferrer"><button type="button" class=" bg-[#6B46C1] text-white w-[300px] h-10 rounded-xl font-semibold mt-[44px] mb-5">Ver nota</button></a>
            </div>

            <div className="flex flex-col items-center shadow-lg">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/Captura%20de%20pantalla%202022-12-12%20a%20la%28s%29%208.29.51%20p.m..png" className="w-auto h-auto mx-auto" />
              </div>
              <a href="https://www.eltiempo.com/contenido-comercial/estudie-bachillerato-de-manera-virtual-sin-interrumpir-sus-labores-564726" target="_blank" rel="noreferrer"><button type="button" class=" bg-[#6B46C1] text-white w-[300px] h-10 rounded-xl font-semibold mt-[36px] mb-5">Ver nota</button></a>
            </div>

            <div className=" flex flex-col items-center shadow-lg">
              <div className="lazyload-wrapper">
                <img src="https://klazia.nyc3.digitaloceanspaces.com/Captura%20de%20pantalla%202022-12-12%20a%20la%28s%29%208.28.28%20p.m..png" className="w-auto h-auto mx-auto" />
              </div>
              <a href="https://caracol.com.co/emisora/2021/01/13/bucaramanga/1610497691_311400.html" target="_blank" rel="noreferrer"><button type="button" class=" bg-[#6B46C1] text-white w-[300px] h-10 rounded-xl font-semibold mt-5 mb-5">Ver nota</button></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
