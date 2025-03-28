import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoveRight, Code, Briefcase, User, Mail, ArrowDown, CheckCircle, Clock } from "lucide-react"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import SkillCard from "@/components/skill-card"
import ProcessStep from "@/components/process-step"
import StatCard from "@/components/stat-card"
import { Badge } from "@/components/ui/badge"
import AnimatedCounter from "@/components/animated-counter"
import ServiceCard from "@/components/service-card"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[hsl(var(--color-background))] to-[hsl(var(--color-background)/40%)]">
      <Navbar />

     {/* Hero Section */}
<section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
  {/* Fondo con gradiente radial usando tus variables */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--color-primary)/15%),transparent_40%),radial-gradient(circle_at_70%_60%,hsl(var(--color-primary)/10%),transparent_50%)]"></div>
  
  <div className="container mx-auto max-w-6xl px-4">
    <div className="flex flex-col items-center text-center mb-12 relative">
      {/* Badge */}
      <Badge className="mb-6 px-4 py-1.5 text-sm font-medium border-none 
                      bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer"
             style={{ fontFamily: "var(--font-mono)" }}>
        Desarrollador Full Stack & Diseñador UI/UX
      </Badge>

      {/* Título principal */}
      <h1 className="mb-6 text-5xl font-bold leading-[1.1] 
                    md:text-6xl lg:text-7xl
                    bg-gradient-to-r 
                    from-[hsl(var(--color-primary))] 
                    to-[hsl(var(--color-primary)/70%)]
                    bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-playfair)" }}>
        Transformando Ideas en
        <br />
        Experiencias Digitales
      </h1>

      {/* Texto descriptivo */}
      <p className="text-lg max-w-2xl mb-10 leading-relaxed"
         style={{ 
           fontFamily: "var(--font-sans)",
           color: "hsl(var(--color-muted-foreground))"
         }}>
        Creo soluciones web que no solo se ven increíbles, sino que también generan resultados tangibles para tu negocio
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="gap-2 text-base px-8 py-6 
                    bg-[hsl(var(--color-primary))] 
                    hover:bg-[hsl(var(--color-primary)/90%)]
                    shadow-lg shadow-[hsl(var(--color-primary)/20%)]
                    hover:shadow-xl hover:shadow-[hsl(var(--color-primary)/30%)]
                    transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Ver proyectos <MoveRight className="h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="gap-2 text-base px-8 py-6 
                    border-2 border-[hsl(var(--color-accent))] 
                    text-[hsl(var(--color-accent))]
                    hover:bg-[hsl(var(--color-accent))] bg-[hsl(var(--color-primary))]
                    transition-all duration-300 hover:-translate-y-1"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Contactar
        </Button>
      </div>

      {/* Indicador de scroll */}
      <div className="mt-16 flex flex-col items-center gap-2">
        <p className="text-sm" style={{ 
          color: "hsl(var(--color-muted-foreground))",
          fontFamily: "var(--font-mono)"
        }}>
          Scroll para descubrir
        </p>
        <ArrowDown className="h-6 w-6 animate-bounce text-[hsl(var(--color-accent))]" />
      </div>
    </div>
  </div>

  {/* Elementos flotantes */}
  <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[hsl(var(--color-primary)/5%)] blur-3xl"></div>
  <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[hsl(var(--color-accent)/5%)] blur-3xl"></div>
</section>

     {/* Stats Section */}
     <section className="py-16 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              value={<AnimatedCounter value={50} duration={2000} />}
              label="Proyectos Completados"
              icon="Briefcase"
            />
            <StatCard
              value={<AnimatedCounter value={30} duration={2000} />}
              label="Clientes Satisfechos"
              icon="Users"
            />
            <StatCard value={<AnimatedCounter value={5} duration={2000} />} label="Años de Experiencia" icon="Clock" />
            <StatCard
              value={<AnimatedCounter value={100} duration={2000} />}
              label="% de Compromiso"
              icon="CheckCircle"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 text-sm font-medium border-none 
                      bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer"
             style={{ fontFamily: "var(--font-mono)" }}>
              Servicios
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold h-[4.5rem] md:h-14 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/80"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Soluciones Digitales a Medida
            </h2>
            <p className="text-lg  text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto"
             style={{ fontFamily: "var(--font-sans)" }}
            >
              Ofrezco servicios completos de desarrollo web enfocados en resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desarrollo Web"
              description="Sitios web y aplicaciones modernas, rápidas y optimizadas para SEO con las últimas tecnologías."
              icon="Code"
            />
            <ServiceCard
              title="Diseño UI/UX"
              description="Interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan las conversiones."
              icon="Palette"
            />
            <ServiceCard
              title="Consultoría Técnica"
              description="Asesoramiento experto para optimizar tu presencia digital y estrategia tecnológica."
              icon="LineChart"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_70%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-[hsl(var(--color-primary))]/20 to-[hsl(var(--color-primary))]/5 p-2 shadow-xl">
                <div className="rounded-2xl overflow-hidden h-full relative group">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Tu foto"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div>
                      <h3 className="text-white text-2xl font-bold"
                      style={{ fontFamily: "var(--font-playfair)"}}
                      >Alexander H. Herrera Millet</h3>
                      <p className="text-white/80 "
                      
                      >Desarrollador Full Stack & UI/UX Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <Badge              
              className="mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer"
              style={{ fontFamily: "var(--font-mono)" }}
              >
                <User className="h-4 w-4" />
                Sobre mí
              </Badge>
              <h2 className="text-3xl h-20 md:h-[6.5rem] md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/80" 
               style={{ fontFamily: "var(--font-playfair)" }}
              >
                Pasión por la
                <br />
                Excelencia Digital
              </h2>
              <p className="body-lg text-[hsl(var(--color-muted-foreground))] mb-6 leading-relaxed">
                Con más de 5 años de experiencia en desarrollo web, me especializo en crear aplicaciones modernas con
                React, Next.js y Node.js. Mi enfoque combina excelencia técnica con una comprensión profunda de las
                necesidades del negocio.
              </p>
              <p className="body-lg text-[hsl(var(--color-muted-foreground))] mb-8 leading-relaxed">
                Trabajo estrechamente con mis clientes para entender sus objetivos y entregar soluciones que no solo se
                ven bien, sino que también generan resultados tangibles.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--color-accent))] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white"
                  style={{ fontFamily: "var(--font-mono)" }}
                    >Soluciones Personalizadas</h4>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">Adaptadas a tus necesidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--color-accent))] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white" 
                    style={{ fontFamily: "var(--font-mono)" }}
                    >Código Limpio</h4>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">Mantenible y escalable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--color-accent))] mt-0.5" />
                  <div>
                    <h4 className=" 
                    text-white
                    font-medium" 
                    style={{ fontFamily: "var(--font-mono)" }}
                    >Diseño Responsivo</h4>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">Perfecto en todos los dispositivos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--color-accent))] mt-0.5" />
                  <div>
                    <h4 className=" 
                    text-white
                    font-medium" 
                    style={{ fontFamily: "var(--font-mono)" }}
                    >Optimizado para SEO</h4>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))]">Mayor visibilidad online</p>
                  </div>
                </div>
              </div>

              <Button className="gap-2 text-base px-8 py-6 bg-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))]/90 text-[hsl(var(--color-background))] shadow-lg shadow-[hsl(var(--color-accent))]/20 hover:shadow-xl hover:shadow-[hsl(var(--color-accent))]/30 transition-all duration-300 hover:-translate-y-1 "
              style={{ fontFamily: "var(--font-mono)" }}
              >
                Descargar CV <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,200,255,0.1),transparent_40%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="  
                      mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer
              ">
              <Code className="h-4 w-4" />
              Habilidades
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary))]/70"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Tecnologías que Domino
            </h2>
            <p className="body-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
              Utilizo las tecnologías más modernas para crear aplicaciones web rápidas, seguras y escalables
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <SkillCard name="React" level={100} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="Next.js" level={100} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="TypeScript" level={90} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="Node.js" level={100} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="Tailwind CSS" level={95} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="MongoDB" level={90} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="PostgreSQL" level={90} icon="/placeholder.svg?height=40&width=40" />
            <SkillCard name="AWS" level={70} icon="/placeholder.svg?height=40&width=40" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className=" mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer">
              Metodología
            </Badge>
            <h2 className="text-3xl h-12 md:h-14 md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/80"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mi Proceso de Trabajo
            </h2>
            <p className="text-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto"
            style={{fontFamily: "var(--font-sans)"}}
            >
              Un enfoque estructurado para entregar proyectos de alta calidad en tiempo y forma
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Descubrimiento"
              description="Entiendo tus objetivos, necesidades y expectativas para el proyecto."
            />
            <ProcessStep
              number="02"
              title="Planificación"
              description="Creo una estrategia detallada y un plan de acción para tu proyecto."
            />
            <ProcessStep
              number="03"
              title="Diseño y Desarrollo"
              description="Implemento la solución con un enfoque iterativo y colaborativo."
            />
            <ProcessStep
              number="04"
              title="Lanzamiento y Soporte"
              description="Despliego la solución y proporciono soporte continuo."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer">
              <Briefcase className="h-4 w-4" />
              Proyectos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary))]/70"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Trabajos Destacados
            </h2>
            <p className="body-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
              Una selección de los proyectos más relevantes que he desarrollado para clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <ProjectCard
              title="E-commerce para Tienda de Moda"
              description="Plataforma completa de comercio electrónico con pasarela de pagos, gestión de inventario y panel de administración."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "Stripe", "MongoDB"]}
              link="#"
              category="E-commerce"
            />
            <ProjectCard
              title="Dashboard Analítico"
              description="Panel de control para visualización de datos en tiempo real con gráficos interactivos y reportes personalizados."
              image="/placeholder.svg?height=400&width=600"
              tags={["React", "D3.js", "Firebase"]}
              link="#"
              category="Analítica"
            />
            <ProjectCard
              title="Aplicación de Gestión de Proyectos"
              description="Sistema completo para la gestión de proyectos, tareas y colaboración en equipo."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "Node.js", "PostgreSQL"]}
              link="#"
              category="SaaS"
            />
            <ProjectCard
              title="Sitio Web Corporativo"
              description="Sitio web moderno y responsive para empresa de servicios financieros con CMS personalizado."
              image="/placeholder.svg?height=400&width=600"
              tags={["Next.js", "Tailwind CSS", "Sanity.io"]}
              link="#"
              category="Corporativo"
            />
          </div>

          <div className="flex justify-center mt-16">
            <Button className="gap-2 text-base px-8 py-6 bg-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))]/90 text-[hsl(var(--color-background))] shadow-lg shadow-[hsl(var(--color-accent))]/20 hover:shadow-xl hover:shadow-[hsl(var(--color-accent))]/30 transition-all duration-300 hover:-translate-y-1"
            style={{ fontFamily: "var(--font-mono)" }}
            >
              Ver todos los proyectos <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,200,255,0.1),transparent_40%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer">
              Testimonios
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/80"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lo que Dicen Mis Clientes
            </h2>
            <p className="body-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
              He tenido el privilegio de trabajar con empresas increíbles. Esto es lo que dicen sobre mi trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="Entregó nuestro proyecto a tiempo y superó nuestras expectativas. La comunicación fue excelente durante todo el proceso y las soluciones que implementó han tenido un impacto directo en nuestro negocio."
              author="María Rodríguez"
              company="CEO, Empresa Innovadora"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
            />
            <TestimonialCard
              quote="Su conocimiento técnico y capacidad para entender nuestras necesidades de negocio hizo toda la diferencia en nuestro proyecto. Logramos aumentar nuestras conversiones en un 40% gracias a su trabajo."
              author="Carlos Méndez"
              company="Director de Tecnología, StartupXYZ"
              image="/placeholder.svg?height=100&width=100"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[hsl(var(--color-accent))]/10 to-[hsl(var(--color-primary))]/10"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-br from-[hsl(var(--color-accent))]/80 to-[hsl(var(--color-accent))] rounded-3xl p-12 shadow-2xl shadow-[hsl(var(--color-accent))]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="heading-md text-[hsl(var(--color-background))] mb-4">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
                <p className="text-[hsl(var(--color-background))]/90 text-lg mb-0 "
                
                >
                  Contáctame hoy mismo y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales.
                </p>
              </div>
              <div>
                <Button
                  size="lg"
                  className="gap-2 text-base px-8 py-6 bg-[hsl(var(--color-background))] text-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-background))]/90 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Agendar una llamada <MoveRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary))]/70"
             style={{ fontFamily: "var(--font-playfair)" }}
            >
              Respuestas a Tus Dudas
            </h2>
            <p className="body-lg text-[hsl(var(--color-muted-foreground))] max-w-2xl mx-auto">
              Aquí encontrarás respuestas a las preguntas más comunes sobre mi trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
              <h3 className="heading-sm mb-3 text-[hsl(var(--color-accent))]">¿Cuánto tiempo toma completar un proyecto?</h3>
              <p className="text-[hsl(var(--color-muted-foreground))]">
                El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas, mientras
                que aplicaciones más complejas pueden requerir 2-3 meses. Siempre proporciono un cronograma detallado al
                inicio del proyecto.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
              <h3 className="heading-sm mb-3 text-[hsl(var(--color-accent))]">¿Cuál es tu proceso de trabajo?</h3>
              <p className="text-[hsl(var(--color-muted-foreground))]">
                Mi proceso incluye una fase de descubrimiento, planificación, diseño, desarrollo, pruebas y lanzamiento.
                Mantengo una comunicación constante durante todo el proceso y realizo entregas incrementales para
                obtener feedback.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
              <h3 className="heading-sm mb-3 text-[hsl(var(--color-accent))]">¿Ofreces mantenimiento después del lanzamiento?</h3>
              <p className="text-[hsl(var(--color-muted-foreground))]">
                Sí, ofrezco planes de mantenimiento mensual que incluyen actualizaciones, correcciones de errores,
                mejoras de rendimiento y soporte técnico. Esto garantiza que tu sitio o aplicación siga funcionando de
                manera óptima.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
              <h3 className="heading-sm mb-3 text-[hsl(var(--color-accent))]">¿Cuáles son tus tarifas?</h3>
              <p className="text-[hsl(var(--color-muted-foreground))]">
                Mis tarifas varían según el alcance y complejidad del proyecto. Trabajo tanto por proyecto como por
                hora. Contáctame para recibir un presupuesto personalizado basado en tus necesidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(120,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <Badge className="mb-6 px-4 py-1.5 text-sm  font-medium  border-none inline-flex items-center gap-2  bg-[hsl(var(--color-primary)/10%)] 
                      text-[hsl(var(--color-primary))]
                      hover:bg-[hsl(var(--color-primary)/20%)]
                      hover:border-[hsl(var(--color-primary)/30%)]
                      transition-all duration-300
                      cursor-pointer">
                <Mail className="h-4 w-4" />
                Contacto
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/80"
               style={{ fontFamily: "var(--font-playfair)" }}
              >
                ¿Tienes un Proyecto en Mente?
              </h2>
              <p className="body-lg text-[hsl(var(--color-muted-foreground))] mb-8 leading-relaxed">
                Estoy disponible para proyectos freelance y oportunidades de colaboración. Contáctame y hablemos sobre
                cómo puedo ayudarte a alcanzar tus objetivos digitales.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[hsl(var(--color-accent))]" />
                  </div>
                  <div>
                    <h4 className=" 
                    
                    font-medium">Email</h4>
                    <p className="text-[hsl(var(--color-muted-foreground))]">tu.email@ejemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[hsl(var(--color-accent))]" />
                  </div>
                  <div>
                    <h4 className=" 
                    
                    font-medium">Horario</h4>
                    <p className="text-[hsl(var(--color-muted-foreground))]">Lunes - Viernes: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow border border-[hsl(var(--color-accent))]/10">
                  <div className="h-12 w-12 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-[hsl(var(--color-accent))]" />
                  </div>
                  <div>
                    <h4 className=" 
                    
                    font-medium">Redes Sociales</h4>
                    <div className="flex gap-3 mt-1">
                      <Link href="#" className="text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-accent))] transition-colors">
                        LinkedIn
                      </Link>
                      <Link href="#" className="text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-accent))] transition-colors">
                        GitHub
                      </Link>
                      <Link href="#" className="text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-accent))] transition-colors">
                        Twitter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[hsl(var(--color-accent))]/5 border border-[hsl(var(--color-accent))]/20">
                <h4 className="font-playfair font-bold text-lg mb-2 text-[hsl(var(--color-accent))]">¡Disponibilidad Limitada!</h4>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-0">
                  Actualmente solo acepto 2 proyectos nuevos por mes. ¡Contáctame pronto para asegurar tu lugar!
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-card rounded-3xl shadow-2xl p-8 border border-[hsl(var(--color-accent))]/10">
                <h3 className="heading-md mb-6 text-[hsl(var(--color-primary))]">Envíame un mensaje</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[hsl(var(--color-accent))]/10 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <Link
                href="/"
                className="text-2xl font-playfair font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-accent))] to-[hsl(var(--color-accent))]/70"
              >
                Alexander H. Herrera Millet
              </Link>
              <p className="text-[hsl(var(--color-muted-foreground))] mt-2 max-w-md">
                Desarrollador Full Stack especializado en crear experiencias digitales excepcionales que generan
                resultados.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center text-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-background))] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center text-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-background))] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-[hsl(var(--color-accent))]/10 flex items-center justify-center text-[hsl(var(--color-accent))] hover:bg-[hsl(var(--color-accent))] hover:text-[hsl(var(--color-background))] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] "
              style={{ fontFamily: "var(--font-mono)" }}
              >
                © {new Date().getFullYear()} Alexander H. Herrera Millet. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

