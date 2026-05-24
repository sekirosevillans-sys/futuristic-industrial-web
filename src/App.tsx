import React, { useEffect, useRef, useState } from 'react';
import { HardwareCanvas } from './components/HardwareCanvas';
import { 
  Cpu, 
  Layers, 
  Maximize2, 
  Sliders, 
  Terminal, 
  Zap, 
  Power
} from 'lucide-react';
import { gsap } from 'gsap';

export const App: React.FC = () => {
  const [reactorPower, setReactorPower] = useState(72);
  const [coreFreq, setCoreFreq] = useState(4800);
  const [moduleStatus, setModuleStatus] = useState({
    optics: true,
    cooling: false,
    chassis: true,
    power: true
  });
  
  const [isConsoleActive, setIsConsoleActive] = useState(true);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "SYSINIT: BOOT STAGE 03 COMPLETE",
    "DEVICES: LIQUID GLASS CORE DETECTED (REF: LNK-992)",
    "NET: SYNC WITH LABORATORY ALPHA ESTABLISHED",
    "STATUS: STABLE AT 60FPS"
  ]);

  const appRef = useRef<HTMLDivElement>(null);

  // Efecto magnético interactivo (iluminación radial reactiva al cursor)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.magnetic-glow, .magnetic-glow-red');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animaciones de entrada cinematográficas con GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal inicial
      gsap.fromTo('.reveal-hero', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', stagger: 0.1 }
      );
      
      gsap.fromTo('.reveal-grid', 
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.4 }
      );
      
      gsap.fromTo('.reveal-nav', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.8 }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  // Simular logs en la consola industrial
  useEffect(() => {
    const interval = setInterval(() => {
      const messages = [
        "THERMAL SENSOR: TEMPERATURE REGISTERED AT 21.4°C",
        "FREQUENCY SYNC: ACTIVE AND CONTINUOUS",
        "ENERGY GRID: TOTAL DISCHARGE REACTION MINIMAL",
        "REFRACTION COMPILER: RECONCILING LIQUID GLASS VECTORS",
        "SYSSTATUS: STABLE OPERATION CURRENTLY AT 60HZ"
      ];
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      const timestamp = new Date().toLocaleTimeString();
      setConsoleLogs(prev => [...prev.slice(-3), `[${timestamp}] ${randomMsg}`]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const addLog = (action: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setConsoleLogs(prev => [...prev.slice(-3), `[${timestamp}] ACTION: ${action}`]);
  };

  return (
    <div ref={appRef} className="relative min-h-screen grid-laboratory bg-[#050505] overflow-x-hidden text-[#e5e5e5]">
      {/* 1. Ruido Físico Texturizado de Fondo */}
      <div className="noise-overlay" />

      {/* 2. Glows Suaves de Laboratorio */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-red-600/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[130px] pointer-events-none" />

      {/* 3. Navegación Minimalista Flotante */}
      <header className="reveal-nav fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl liquid-glass rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-technical text-white tracking-widest text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse inline-block" />
            N_LABS.O1 // SYSTEM
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-technical uppercase tracking-wider text-industrial-400">
          <a href="#hero" className="hover:text-white transition-colors">01. Core</a>
          <a href="#showcase" className="hover:text-white transition-colors">02. Control</a>
          <a href="#features" className="hover:text-white transition-colors">03. Hardware</a>
          <a href="#architecture" className="hover:text-white transition-colors">04. Specs</a>
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setIsConsoleActive(!isConsoleActive);
              addLog(`TOGGLE DECK INTERFACE -> ${!isConsoleActive ? 'ON' : 'OFF'}`);
            }}
            className={`btn-liquid rounded-full px-4 py-1.5 text-xs font-technical flex items-center gap-2 ${isConsoleActive ? 'border-red-600/40 text-red-400' : 'text-industrial-200'}`}
          >
            <Terminal size={12} />
            {isConsoleActive ? 'TERMINAL_ON' : 'TERMINAL_OFF'}
          </button>
        </div>
      </header>

      {/* 4. HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        {/* Grilla Guía Industrial Técnica */}
        <div className="reveal-grid absolute inset-0 max-w-6xl mx-auto border-x border-white/5 pointer-events-none flex justify-between">
          <div className="w-[1px] h-full bg-white/5" />
          <div className="w-[1px] h-full bg-white/5" />
          <div className="w-[1px] h-full bg-white/5" />
        </div>

        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          
          {/* Bloque Izquierdo Editorial (Apple-Clean Modern Typography) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            <div className="reveal-hero inline-flex items-center gap-2.5 font-technical text-xs text-red-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              PRODUCT_REF: LNK-992 // SPEC_V0.1.216
            </div>

            <h1 className="reveal-hero text-5xl md:text-7xl font-light text-white tracking-tight leading-[1.05] font-editorial">
              ENGINEERED FOR THE <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-industrial-200 to-industrial-400">
                NEXT ERA.
              </span>
            </h1>

            <p className="reveal-hero text-base text-industrial-400 max-w-md font-light leading-relaxed">
              Tecnología industrial avanzada con diseño intuitivo. Transparencia modular y refracción óptica pura fusionadas en hardware digital interactivo del año 2032.
            </p>

            <div className="reveal-hero flex flex-wrap gap-4 pt-4">
              <a 
                href="#showcase" 
                className="btn-liquid-red rounded-lg px-6 py-3 text-sm font-technical text-white uppercase tracking-wider flex items-center gap-2.5 magnetic-glow-red"
              >
                <Zap size={14} className="animate-pulse" />
                Iniciar Reactor
              </a>
              <a 
                href="#architecture" 
                className="btn-liquid rounded-lg px-6 py-3 text-sm font-technical text-industrial-200 uppercase tracking-wider flex items-center gap-2.5 magnetic-glow"
              >
                <Maximize2 size={14} />
                Especificaciones
              </a>
            </div>

            {/* Metadatos Industriales de Nothing */}
            <div className="reveal-hero grid grid-cols-3 gap-6 pt-10 border-t border-white/5 font-technical text-xs text-industrial-400">
              <div>
                <span className="block text-white mb-1">01/ OPTICAL</span>
                <span>LIQUID GLASS 95%</span>
              </div>
              <div>
                <span className="block text-white mb-1">02/ COOLING</span>
                <span>SILENT REACTOR</span>
              </div>
              <div>
                <span className="block text-white mb-1">03/ FREQ</span>
                <span>4.8 GHZ SYNC</span>
              </div>
            </div>

          </div>

          {/* Bloque Derecho (Objeto 3D Central con Iluminación) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[550px] w-full reveal-grid">
            {/* Círculo Gráfico Blueprint Detrás del Canvas */}
            <div className="absolute w-[420px] h-[420px] border border-white/5 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] border border-white/10 border-dashed rounded-full" />
              <div className="w-[120px] h-[120px] border border-red-600/10 rounded-full" />
            </div>

            {/* Indicador de Rotación de Nothing */}
            <div className="absolute top-4 right-8 font-technical text-[10px] text-industrial-400 border border-white/10 rounded px-2.5 py-1 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-red-600 animate-ping" />
              3D_GRID: ORBITAL_ACTIVE
            </div>

            {/* Render 3D de Hardware */}
            <div className="w-full h-full">
              <HardwareCanvas />
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTROL TÁCTIL INTERACTIVO (SHOWCASE DE LAB) */}
      <section id="showcase" className="relative py-24 px-4 bg-industrial-950/80 border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-technical text-xs text-red-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                DECK INTERFACES
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight font-editorial">
                Consola Táctica de Control
              </h2>
            </div>
            <p className="text-industrial-400 font-light text-sm max-w-sm">
              Interactúa con los interruptores del reactor modular para modificar los campos electromagnéticos y modular la refracción en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Panel Izquierdo: Toggles y Sliders de Vidrio (Apple Liquid Glass) */}
            <div className="lg:col-span-8 liquid-glass rounded-2xl p-8 space-y-8 magnetic-glow glass-reflection">
              
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-technical text-white text-xs tracking-widest flex items-center gap-2.5">
                  <Sliders size={14} className="text-red-500" />
                  TACTILE CONTROL DECK // REG-88
                </span>
                <span className="font-technical text-[10px] text-industrial-400">
                  REFRACTION COMPILER
                </span>
              </div>

              {/* Sliders Cristalinos */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-technical text-industrial-400">
                    <span>REACTOR POWER (DISCHARGE %)</span>
                    <span className="text-white font-bold">{reactorPower}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={reactorPower} 
                    onChange={(e) => {
                      setReactorPower(Number(e.target.value));
                      addLog(`REACTOR POWER SLIDER -> ${e.target.value}%`);
                    }}
                    className="w-full accent-red-600 bg-industrial-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-technical text-industrial-400">
                    <span>CORE REACTION FREQUENCY</span>
                    <span className="text-white font-bold">{coreFreq} Hz</span>
                  </div>
                  <input 
                    type="range" 
                    min="2000" 
                    max="6000" 
                    step="100"
                    value={coreFreq} 
                    onChange={(e) => {
                      setCoreFreq(Number(e.target.value));
                      addLog(`CORE FREQUENCY SLIDER -> ${e.target.value}Hz`);
                    }}
                    className="w-full accent-red-600 bg-industrial-800 h-1 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Toggles Futuristas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { key: 'optics', label: 'OPTICAL_SYNC' },
                  { key: 'cooling', label: 'CRYO_COOLING' },
                  { key: 'chassis', label: 'GRID_SHIELD' },
                  { key: 'power', label: 'GRID_COIL' }
                ].map((toggle) => {
                  const val = moduleStatus[toggle.key as keyof typeof moduleStatus];
                  return (
                    <button
                      key={toggle.key}
                      onClick={() => {
                        const newStatus = { ...moduleStatus, [toggle.key]: !val };
                        setModuleStatus(newStatus);
                        addLog(`TOGGLE ${toggle.label} -> ${!val ? 'ACTIVE' : 'INACTIVE'}`);
                      }}
                      className={`btn-liquid rounded-xl p-4 flex flex-col items-start gap-3 text-left transition-all ${val ? 'border-red-600/30 bg-red-950/10' : ''}`}
                    >
                      <div className="flex justify-between w-full items-center">
                        <span className={`w-2.5 h-2.5 rounded-full ${val ? 'bg-red-600 animate-pulse' : 'bg-industrial-700'}`} />
                        <Power size={12} className={val ? 'text-red-500' : 'text-industrial-400'} />
                      </div>
                      <span className="font-technical text-[10px] tracking-wider text-industrial-200 mt-2 uppercase">{toggle.label}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Panel Derecho: Consola del Terminal (Nothing Tech Console) */}
            <div className="lg:col-span-4 bg-industrial-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-between font-technical h-full">
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-industrial-400 border-b border-white/5 pb-3">
                  <span className="flex items-center gap-2">
                    <Terminal size={14} className="text-white" />
                    LIVE_CONSOLE // ACTIVE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                </div>

                <div className="space-y-3 min-h-[160px] text-xs">
                  {consoleLogs.map((log, index) => (
                    <div key={index} className="text-industrial-400 leading-relaxed font-technical flex items-start gap-2">
                      <span className="text-red-500">{">"}</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-industrial-400">
                <span>STAGE: CORE_CONNECTED</span>
                <span>FPS: 60 / STABLE</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. FEATURES INDUSTRIALES (CARDS MAGNÉTICAS DE VIDRIO) */}
      <section id="features" className="py-24 px-4 max-w-6xl mx-auto space-y-12">
        
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-technical text-xs text-red-500 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            ENGINEERING ATTRIBUTES
          </div>
          <h2 className="text-4xl font-light text-white tracking-tight font-editorial">
            Componentes con Precisión Micrométrica
          </h2>
          <p className="text-industrial-400 font-light text-sm">
            Diseñado sin concesiones. Cada elemento de hardware responde a la ingeniería de primer nivel del mañana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Refracción Optica */}
          <div className="liquid-glass rounded-2xl p-8 space-y-6 magnetic-glow glass-reflection flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Layers size={18} />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight font-editorial">
                Refracción Apple Liquid Glass
              </h3>
              <p className="text-industrial-400 font-light text-sm leading-relaxed">
                Superficies táctiles transparentes diseñadas con un índice de refracción óptica pura de 1.52. Máxima profundidad visual y reflectividad especular.
              </p>
            </div>
            <div className="font-technical text-[10px] text-industrial-400 border-t border-white/5 pt-4 uppercase tracking-widest flex justify-between items-center">
              <span>01 / OPTICS GRID</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Card 2: Chasis Transparente */}
          <div className="liquid-glass rounded-2xl p-8 space-y-6 magnetic-glow glass-reflection flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Cpu size={18} />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight font-editorial">
                Estética Modular Nothing
              </h3>
              <p className="text-industrial-400 font-light text-sm leading-relaxed">
                Estructura de aluminio mecanizado cepillado y grillas geométricas de puntos. Microdetalles visibles del circuito interno para un lujo técnico sin rodeos.
              </p>
            </div>
            <div className="font-technical text-[10px] text-industrial-400 border-t border-white/5 pt-4 uppercase tracking-widest flex justify-between items-center">
              <span>02 / HARDWARE DOT</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

          {/* Card 3: Silicio y Energía */}
          <div className="liquid-glass rounded-2xl p-8 space-y-6 magnetic-glow glass-reflection flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Zap size={18} />
              </div>
              <h3 className="text-xl font-medium text-white tracking-tight font-editorial">
                Núcleo de Cobre & Crio-enfriamiento
              </h3>
              <p className="text-industrial-400 font-light text-sm leading-relaxed">
                Transferencia térmica optimizada mediante microbobinas de cobre puro y un reactor de silicona líquida. Máxima potencia bajo un silencio total.
              </p>
            </div>
            <div className="font-technical text-[10px] text-industrial-400 border-t border-white/5 pt-4 uppercase tracking-widest flex justify-between items-center">
              <span>03 / REACTOR SYS</span>
              <span className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </div>

        </div>
      </section>

      {/* 7. ARCHITECTURE TIMELINE (SPECS DE LABORATORIO) */}
      <section id="architecture" className="relative py-24 px-4 bg-industrial-950/30 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 font-technical text-xs text-red-500 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              ARCHITECTURAL TIMELINE
            </div>
            <h2 className="text-4xl font-light text-white tracking-tight font-editorial">
              Cronograma Técnico del Desarrollo
            </h2>
          </div>

          {/* Línea de Tiempo Técnica */}
          <div className="space-y-12 relative before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-[1px] before:bg-white/5">
            
            {/* Evento 1 */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0">
              <div className="md:w-[45%] text-left md:text-right space-y-2">
                <span className="font-technical text-xs text-red-500 uppercase tracking-widest">STAGE 01 // Q1 2031</span>
                <h4 className="text-xl font-medium text-white font-editorial">Estructura Óptica Translúcida</h4>
                <p className="text-industrial-400 font-light text-sm leading-relaxed">
                  Definición y refinamiento del chasis de vidrio líquido premium con refracción corregida en tiempo real y pruebas térmicas extremas.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-red-600/30 flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              </div>
              <div className="hidden md:block md:w-[45%]" />
            </div>

            {/* Evento 2 */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0">
              <div className="hidden md:block md:w-[45%]" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="md:w-[45%] text-left space-y-2 pl-8 md:pl-0">
                <span className="font-technical text-xs text-industrial-400 uppercase tracking-widest">STAGE 02 // Q3 2031</span>
                <h4 className="text-xl font-medium text-white font-editorial">Bobina Electromagnética</h4>
                <p className="text-industrial-400 font-light text-sm leading-relaxed">
                  Integración de bobinas de cobre micro-mecanizadas en el interior del chasis y sintonía inercial con la iluminación LED dinámica.
                </p>
              </div>
            </div>

            {/* Evento 3 */}
            <div className="relative flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0">
              <div className="md:w-[45%] text-left md:text-right space-y-2">
                <span className="font-technical text-xs text-industrial-400 uppercase tracking-widest">STAGE 03 // RUNNING</span>
                <h4 className="text-xl font-medium text-white font-editorial">Sistema Operativo Táctil</h4>
                <p className="text-industrial-400 font-light text-sm leading-relaxed">
                  Despliegue final de la interfaz de usuario con controles hápticos simulados y visualizaciones inerciales fluidas a 60 FPS.
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center z-10">
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="hidden md:block md:w-[45%]" />
            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER MINIMAL EXTREMO */}
      <footer className="border-t border-white/5 py-12 px-6 bg-industrial-950 text-xs font-technical text-industrial-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-white tracking-widest uppercase">N_LABS.O1 // SPECIFIC-SYSTEM</span>
            <span>DISEÑO INDUSTRIAL & SOFTWARE AVANZADO © 2032</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] uppercase">
            <span>SYS_OP: 45.109, -122.680</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span>LAB_ALPHA_PORTAL</span>
            <span className="w-[1px] h-3 bg-white/10" />
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              ONLINE_STATE
            </span>
          </div>

        </div>
      </footer>
    </div>
  );
};
export default App;
