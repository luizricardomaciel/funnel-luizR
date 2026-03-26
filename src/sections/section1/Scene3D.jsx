import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    MeshDistortMaterial,
    Environment,
    ContactShadows,
    PresentationControls,
    Html
} from '@react-three/drei';
import PropTypes from 'prop-types';

function DigitalParticles({ count = 100 }) {
    const points = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                color="#7C3AED"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

DigitalParticles.propTypes = {
    count: PropTypes.number
};

function FloatingLaptop() {
    const meshRef = useRef();
    const screenRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const m = state.mouse;
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(t / 4) * 0.1 + m.x * 0.2;
            meshRef.current.rotation.x = Math.cos(t / 4) * 0.05 + m.y * 0.1;
            meshRef.current.position.y = Math.sin(t / 2) * 0.1;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Base do Laptop (Corpo) */}
            <mesh position={[0, -0.05, 0]}>
                <boxGeometry args={[3.4, 0.08, 2.2]} />
                <meshPhysicalMaterial
                    color="#0a0a0a"
                    roughness={0.05}
                    metalness={0.9}
                    reflectivity={1}
                    clearcoat={1}
                />
            </mesh>

            {/* Tampa e Tela */}
            <group position={[0, 0, -1.1]} rotation={[-Math.PI / 15, 0, 0]}>
                {/* Tampa posterior */}
                <mesh position={[0, 1.1, -0.04]}>
                    <boxGeometry args={[3.4, 2.2, 0.08]} />
                    <meshPhysicalMaterial
                        color="#111"
                        roughness={0.1}
                        metalness={0.8}
                        clearcoat={0.5}
                    />
                </mesh>

                {/* Moldura da Tela */}
                <mesh position={[0, 1.1, 0]}>
                    <planeGeometry args={[3.2, 2]} />
                    <meshPhysicalMaterial color="#000" roughness={0.1} />
                </mesh>

                {/* Tela Holográfica */}
                <mesh position={[0, 1.1, 0.01]} ref={screenRef}>
                    <planeGeometry args={[3.1, 1.9]} />
                    <meshBasicMaterial color="#08081a" />
                    <Html transform distanceFactor={1.1} position={[0, 0, 0.01]} occlude>
                        <div style={{
                            width: '310px',
                            height: '190px',
                            background: 'rgba(8, 8, 26, 0.95)',
                            display: 'flex',
                            flexDirection: 'column',
                            color: '#7C3AED',
                            fontFamily: 'monospace',
                            fontSize: '9px',
                            padding: '15px',
                            overflow: 'hidden',
                            border: '1px solid rgba(124, 58, 237, 0.3)',
                            pointerEvents: 'none',
                            boxShadow: 'inset 0 0 20px rgba(124, 58, 237, 0.2)'
                        }}>
                            <div style={{ animation: 'scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite' }}>
                                <div style={{ color: '#F43F5E', fontWeight: 'bold', marginBottom: '8px' }}>[SYSTEM STATUS: OPTIMIZED]</div>
                                {`> ANALYZING USER BEHAVIOR...`} <br />
                                {`> ARCHITECTING HIGH-CONVERSION UI...`} <br />
                                {`> INJECTING PERFORMANCE HOOKS...`} <br />
                                {`> RENDER ENGINE: VIOLET PRIME ACTIVE`} <br />
                                <div style={{ marginTop: '10px', color: '#A78BFA' }}>{`> LOADING SUCCESS MODULE... 100%`}</div>
                            </div>
                            <style>{`
                                @keyframes scan {
                                    0% { opacity: 0.4; transform: translateY(2px); }
                                    50% { opacity: 1; transform: translateY(0); }
                                    100% { opacity: 0.4; transform: translateY(2px); }
                                }
                            `}</style>
                        </div>
                    </Html>
                </mesh>

                {/* Luz da Tela */}
                <rectAreaLight
                    width={3.4}
                    height={2.2}
                    intensity={8}
                    color="#7C3AED"
                    position={[0, 1.1, 0.15]}
                />
            </group>

            {/* Elementos Decorativos Orbitais */}
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[-2.8, 1.8, 0.8]}>
                    <torusGeometry args={[0.25, 0.04, 16, 32]} />
                    <MeshDistortMaterial color="#F43F5E" speed={3} distort={0.4} roughness={0} />
                </mesh>
            </Float>

            <Float speed={3} rotationIntensity={1} floatIntensity={3}>
                <mesh position={[2.8, 0.5, -0.8]}>
                    <octahedronGeometry args={[0.22]} />
                    <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={3} />
                </mesh>
            </Float>
        </group>
    );
}

const Scene3D = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 7.5], fov: 35 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <color attach="background" args={[null]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={3} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#F43F5E" />
                <pointLight position={[0, 5, 5]} intensity={1} color="#A78BFA" />

                <Suspense fallback={null}>
                    <PresentationControls
                        global
                        config={{ mass: 1.5, tension: 400 }}
                        snap={{ mass: 3, tension: 1200 }}
                        rotation={[0, -0.4, 0]}
                        polar={[-Math.PI / 4, Math.PI / 4]}
                        azimuth={[-Math.PI / 3, Math.PI / 3]}
                    >
                        <FloatingLaptop />
                    </PresentationControls>

                    <DigitalParticles count={150} />
                    <Environment preset="night" />
                    <ContactShadows
                        position={[0, -1.8, 0]}
                        opacity={0.5}
                        scale={10}
                        blur={2.5}
                        far={4}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene3D;
