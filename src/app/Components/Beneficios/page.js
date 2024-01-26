import React from 'react'

export default function Page() {
  return (
    <section className=" bg-cover bg-center" style={{backgroundImage: 'url(https://klazia.nyc3.digitaloceanspaces.com/landing/activities-bg.jpeg)'}}> 
      <div className=" flex flex-col pt-9 pb-9 pl-4 pr-4 ">
        <h2 className=' text-2xl font-bold'>Beneficios de nuestro programa Bachillerato en tiempo récord</h2>
        <div className="w-full h-full flex mt-4 justify-between gap-10">
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-center items-center">
              <figure className=" bg-[#2fcaa3] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1569683618210" viewBox="0 0 1024 1024" version="1.1" color="black" margin="auto"  style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-0.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c0.1-6.2-5-11.2-11.1-11.2z"></path><path d="M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Sin horarios</h3>
                <p>Contamos con clases grabadas exclusivas en video para que las veas cuando quieras, dedicale el tiempo que tengas libre ya que nuestra plataforma y app está habilitada las 24/7</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className=" bg-[#9671fd] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="white" margin="auto" style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192L256 64l224 128-224 128L32 192z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Válido en cualquier universidad</h3>
                <p>No vas a tener ningún tipo de inconveniente si quieres hacer una carrera técnica, tecnológica o profesional dentro o fuera del país</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className=" bg-[#fe6a82] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="white" margin="auto" style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><path d="m12.223 11.641-.223.22-.224-.22a2.224 2.224 0 0 0-3.125 0 2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07 2.225 2.225 0 0 0-3.126 0z"></path><path d="m21.707 11.293-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Desde casa</h3>
                <p>Ahorra en transporte, libros y uniformes, todo lo haces desde la comodidad de tu casa o en cualquier parte de colombia o el mundo </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="flex justify-center items-center">
              <figure className=" bg-[#b0884e] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" color="white" margin="auto" style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 0 1-11.2 1.7L483.3 569.8a7.92 7.92 0 0 1-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Sin horarios</h3>
                <p>Contamos con clases grabadas exclusivas en video para que las veas cuando quieras, dedicale el tiempo que tengas libre ya que nuestra plataforma y app está habilitada las 24/7</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className=" bg-[#3f2096] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="white" margin="auto" style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><path d="M440.41 67.996C305.221 82.672 154.69 102.263 24.955 128.82l41.068 278.137c84.113-17.286 175.36-32.728 265.59-45.207a404.446 404.446 0 0 0-4.63-19.385C245.851 354.53 163.671 369.2 90.36 385.582l-9.457 2.113-34.42-233.98-1.199-8.162 8.028-1.903c117.04-27.75 246.945-46.473 361.992-55.459l8.101-.632 42.905 236.183-9.498 1.131a4251.105 4251.105 0 0 0-36.885 4.574 515.021 515.021 0 0 0 5.328 20.397c20.837-2.417 41.486-4.672 61.789-6.701zm-31.794 38.846c-109.549 8.936-231.99 26.686-343.111 52.513L95.9 365.988c67.613-14.83 141.885-28.138 215.711-39.42-8.203-8.985-12.553-20.468-13.465-32.668-1.029-13.772 7.132-25.138 16.83-33.238 9.699-8.1 21.523-13.738 32.178-16.762 8.076-2.291 17.439-3.63 26.91-3.377a79.69 79.69 0 0 1 9.465.809c12.549 1.849 25.402 7.232 32.063 19.29 8.874 16.064 8.83 34.87 3.006 50.94a4202.77 4202.77 0 0 1 26.601-3.328zM173.4 172.346l2.631 17.804-73.998 10.926-2.629-17.805zm112.774 40.562l3.015 17.744-176.535 29.989-3.013-17.745zm-40.02 42.744l3.002 17.746-130.05 22.008-3.002-17.746zm124.649 2.895c-6.602.12-13.295 1.125-18.733 2.668-8.206 2.329-18.358 7.251-25.554 13.262-7.196 6.01-10.85 12.302-10.418 18.082.841 11.258 4.644 19.335 12.982 25.699 8.338 6.364 22.136 10.986 43.193 11.719 11.576.402 21.654-7.628 27.588-20.147 5.934-12.519 6.623-28.477-.021-40.506-2.916-5.279-9.587-8.808-18.934-10.185a58.923 58.923 0 0 0-7.283-.588 71.452 71.452 0 0 0-2.82-.004zm32.095 77.205c-8.366 7.734-19.065 12.635-31.25 12.21-9.477-.329-17.995-1.37-25.625-3.11 11.987 47.995 15.644 99.063 19.436 146.17 12.367-8.327 22.462-19.54 28.582-36.221l4.924-13.422 9.973 10.244c12.052 12.381 25.366 19.027 39.718 24.55-14.655-44.078-34.119-92.013-45.758-140.421z"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Válido en cualquier universidad</h3>
                <p>No vas a tener ningún tipo de inconveniente si quieres hacer una carrera técnica, tecnológica o profesional dentro o fuera del país</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <figure className=" bg-[#f0082d] rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden flex justify-center items-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="white" margin="auto" style={{color: "white", height: "30px", width: "30px"}} xmlns="http://www.w3.org/2000/svg"><path d="M3 8v11c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v3zm3-4h13v12H5V5c0-.806.55-.988 1-1z"></path><path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path></svg>
              </figure>
              <div className="ml-4">
                <h3 className=" font-bold text-xl">Desde casa</h3>
                <p>Ahorra en transporte, libros y uniformes, todo lo haces desde la comodidad de tu casa o en cualquier parte de colombia o el mundo </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
