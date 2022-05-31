import Head from 'next/head'
import Link from 'next/link'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Locus Festival Internacional Infancia y Adolescencia en la Ciudad</title>
            </Head>

            <Header />
			<main>
				<section className='relative'>
					<Swiper
						modules={[Pagination]}
						pagination={{ 
							clickable: true, 
						}}
						>
						<SwiperSlide>
							<div className='banner'>
								<Image src="/img/banner-img.png" layout='fill' objectFit='cover' alt='banner' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
						<video autoPlay playsInline muted loop className="banner" width="640" height="360">
							<source src="/videos/LOCUS Workshop 1 Tesoreando 1minuto + logo La Reconquista.mp4" type="video/mp4"/>
							Your browser does not support the video tag. I suggest you upgrade your browser.
						</video>
						</SwiperSlide>
					</Swiper>
				</section>

				<section className='color-azul fondo-amarillo' id='sobre'>
					<div className='max-w-screen-md mx-8 lg:mx-auto pt-16 pb-8 lg:pt-20 lg:text-xl'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left'>SOBRE LOCUS</h2>
						<p className='my-8'><strong>LOCUS</strong> es un festival internacional dedicado a la inclusión de las ideas y
						participación de la infancia y adolescencia en la creación de su ciudad.
						Ellos también son ciudadanos activos. Hoy necesitamos de sus experiencias
						y miradas para el diseño y proyección de un futuro más amable, inclusivo,
						creativo y sustentable.</p>
						<p className='my-8'>Durante este 2022, invitaremos a jóvenes y profesionales a intervenir una
						selección de espacios públicos en la ciudad de Viña del Mar (Chile). Con un
						programa de workshops, concurso de arquitectura y encuentros con
						expertos, <strong>LOCUS</strong> será una rápida y masiva inmersión de la participación
						infantil en el diseño de sus ciudades.</p>
						<p className='my-8'>Síguenos en Instagram <a href="https://www.instagram.com/locusfest/"><strong>@LOCUSFEST</strong></a> para conocer nuestra programación y
						participar de nuestras convocatorias y actividades. No te pierdas el festival <strong>LOCUS.</strong></p>
						<p className='my-8'>¡La ciudad también es tuya!</p>
					</div>
					<div className='max-w-screen-md mx-8 lg:mx-auto flex flex-col justify-between pb-8' id="convocatorias">
						<div className='convocatorias-abiertas flex items-center justify-center text-center mb-10 mx-auto py-32'>
							<h3 className='font-hbold text-lg lg:text-xl'>¡CONVOCATORIAS<br /> ABIERTAS!</h3>
						</div>
						<div>
							<Link href="/congreso-ciudad-e-infancia"><a>
								<h2 className='font-hbold text-xl lg:text-4xl leading-tight mb-4 bullet'>CONGRESO CIUDAD E INFANCIA<br /> EN LÍNEA</h2>
								<p className='pl-24 text-2xl uppercase'>Postular</p>
							</a></Link>
						<div>
						</div>
							<Link href='/intervenciones-urbanas-en-vina-del-mar'><a>
								<h2 className='font-hbold text-xl lg:text-4xl leading-tight mt-12 mb-4 bullet'>INTERVENCIONES<br />
								URBANAS EN VIÑA DEL MAR:<br />
								CONCURSO GENIUS LOCI</h2>
								<p className='pl-24 text-2xl uppercase'>Próximamente</p>
							</a></Link>
						</div>
					</div>
				</section>

				<section className='fondo-amarillo fondo-figura-blanca' id='equipo'>
					<div className='container pt-40'>
						<h2 className='font-hbold text-3xl lg:text-4xl mb-12 text-center'>EQUIPO</h2>
						<div className='flex flex-wrap justify-center gap-y-20 text-center pb-10'>
							<article className='w-full lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-piera-medina.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Piera Medina</h3>
								<p className='text-sm font-medium'>DIRECTORA GENERAL</p>
							</article>
							<article className='w-full lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-danitza-vymazal.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Danitza Vymazal</h3>
								<p className='text-sm font-medium'>DIRECTORA DE PRODUCCIÓN</p>
							</article>
							<article className='w-full lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-carole-gurdon.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Carole Gurdon</h3>
								<p className='text-sm font-medium'>DIRECTORA DE CONTENIDOS</p>
							</article>
							<article className='w-full lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-macarena-cima.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Macarena Cima</h3>
								<p className='text-sm font-medium'>ASISTENTE DE PRODUCCIÓN</p>
							</article>
							<article className='w-full lg:w-1/3'>
								<div className='relative h-48'><Image src="/img/fotos/fotos-fernanda-chesta.svg" layout='fill' objectFit='contain' alt='foto' /></div>
								<h3 className='font-bold mt-6 mb-2 text-xl'>Fernanda Chesta</h3>
								<p className='text-sm font-medium'>ASISTENTE DE CONTENIDOS</p>
							</article>
						</div>
						</div>
						<div className='fondo-blanco'>
							<div className='container'>
								<h2 className='font-hbold text-xl mt-20 mb-4 text-center'>DISEÑO</h2>
								<div className='grid lg:grid-cols-3 gap-8 text-center font-semibold'>
									<p>Sergio Ramírez</p>
									<p>Valentina Alcántara</p>
									<p>Martín Pastenes</p>
								</div>

								<h2 className='font-hbold text-xl mt-20 mb-4 text-center'>AUDIOVISUAL</h2>
								<div className='grid gap-8 text-center'>
									<p className='font-semibold'>Los Navegantes Films</p>
								</div>
							</div>
						</div>
				</section>

				<section className='pt-52 pb-16 lg:pb-40 fondo-blanco fondo-figura-blanca' id='redes'>
					<div className='max-w-screen-sm mx-auto'>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left bullet flor-naranja'>¡SÍGUENOS EN<br />NUESTRAS REDES!</h2>
						<div className='lg:hidden flex justify-center gap-8 my-8'>
							<a href="https://www.instagram.com/locusfest/" className='circulo-redes relative p-6'><div className='relative w-12 h-12'><Image src="/img/logos-ig-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div></a>
							<a href="#" className='circulo-redes relative p-6'><div className='relative w-12 h-12'><Image src="/img/logos-youtube-blanco.svg" layout='fill' objectFit='contain' alt='logo' /></div></a>
						</div>
						<div className='hidden lg:block my-8'>
							{/* <h3 className='font-hbold text-3xl lg:text-5xl mt-20 mb-10 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-youtube.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								FESTIVAL LOCUS
							</h3> */}
							<a href="https://www.instagram.com/locusfest/"><h3 className='font-hbold text-2xl lg:text-3xl mt-20 mb-20 flex items-center gap-12'>
								<div className='relative w-16 h-16'><Image src="/img/logos-ig.svg" layout='fill' objectFit='contain' alt='logo' /></div>
								@locusfest
							</h3></a>
						</div>
						<h2 className='font-hbold text-3xl lg:text-4xl text-center lg:text-left bullet flor-azul color-naranja'>¡SUSCRÍBETE A<br />NUESTRO NEWSLETTER!</h2>
					</div>
				</section>
			</main>

			<Footer />
        </>
    )
}
