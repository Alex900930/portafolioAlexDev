"use client"
import React from 'react'
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Cover() {
    const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && 
        <div className='fixed inset-0 z-0'> {/* Contenedor que cubre toda la pantalla */}
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: "#2A2D3D" // Fondo azul marino (60%)
                    },
                    fpsLimit: 60, // Optimización para móviles
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "attract" // Cambiado a modo "attract"
                            }
                        },
                        modes: {
                            attract: {
                                distance: 150,
                                speed: 0.5
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: "#FFD700" // Dorado (10%)
                        },
                        links: {
                            color: "#F5F5F5", // Gris claro (30%)
                            distance: 130,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            outModes: "out" // Partículas salen del canvas
                        },
                        number: {
                            value: 70 // Cantidad ajustada
                        },
                        opacity: {
                            value: { min: 0.3, max: 0.7 }, // Rango dinámico
                            animation: {
                                enable: true,
                                speed: 1
                            }
                        },
                        size: {
                            value: { min: 1, max: 4 } // Tamaño variable
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    )
}