'use client'
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Page() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='mx-[100px]'>
      <div>
        <h2 className='font-bold text-[2.2rem] text-center'>Esto es lo que dicen nuestros alumnos sobre el programa de bachillerato virtual acelerado</h2>
        <div className='flex'>
          <img className=' h-[380px]' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%208.JPG' />
          <div className=' '>
            <div>
              <img className='' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%2011.JPG' />
            </div>
            <div>
              <img className='' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%209.JPG' />
            </div>
            <div>
              <img className='' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%2010.JPG' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/Editada.JPG' />
          </div>

          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%207.JPG' />
          </div>

          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%203.JPG' />
          </div>

          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%206.JPG' />
          </div>

          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%204.JPG' />
          </div>

          <div>
            <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/testimonios-pantallazos/testimonios-pantallazos/editada%205.JPG' />
          </div>
        </div>

        <div className=' mt-10'>
          <h2 className='font-bold text-[2.2rem] text-center'>Esto es lo que opinan nuestros alumnos egresados 2022</h2>
          <p className='text-center mt-5'>Para <span className='text-[#a833ff] font-bold'>Klazia</span> es importante que cada estudiante viva una experiencia única y agradable con nosotros, queremos que escuches a estas personas que terminaron su bachillerato con nosotros</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <button onClick={openModal} aria-label="Ver Testimonio">
                <img className='w-full object-cover' src='https://klazia.nyc3.digitaloceanspaces.com/landing/gabriela-melo.jpg' alt='Gabriela Melo' />
              </button>
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>

              <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Testimonio">
                {/* Contenido de la ventana modal, podría ser un iframe de YouTube */}
                <button onClick={closeModal}>Cerrar</button>
                <iframe
                  width="560"
                  height="315"
                  src="https://youtu.be/eV8ufeTgrA4"
                  title="Testimonio"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </Modal>
            </div>
          
            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/haans.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/alejandroz.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/angelicar.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/angieg.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/angyg.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/bernardoa.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>

            <div className='flex flex-col shadow-xl rounded-lg overflow-hidden'>
              <img className='w-full' src='https://klazia.nyc3.digitaloceanspaces.com/landing/carlosn.jpg' />
              <p className=' text-[#a833ff] font-semibold text-xl text-center mt-5'>Gabriela Melo</p>
              <p className=' text-[#5c6470] text-center'>Egresada de la institución</p>
              <p className=' text-[#5c6470] text-center mt-5 mb-3'>Promoción 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
