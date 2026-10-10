/**
 * Ilustraciones del sitio, dibujadas a mano como SVG en línea.
 *
 * Son decorativas salvo el esquema "hoy / con procesos claros", que lleva su
 * propia descripción porque resume la idea central del sitio.
 */

const TINTA = "#1A1C1F";
const OCRE = "#B45309";
const OCRE_CLARO = "#F2A65A";
const GRIS_LINEA = "#8C9097";

type FiguraProps = { className?: string };

/** Hoy: áreas enredadas. Con procesos claros: un flujo en línea. */
export function EsquemaDesorden({ className }: FiguraProps) {
  return (
    <svg
      viewBox="0 0 1000 250"
      role="img"
      aria-label="A la izquierda, ventas, compras, bodega, Excel y la persona que sabe, conectados por líneas enredadas; a la derecha, el mismo trabajo como un flujo ordenado: pedido, compra, bodega, factura."
      className={className}
    >
      <g style={{ fontFamily: "var(--font-mono)" }} fontSize="12" fill="#5B6068">
        <text x="10" y="20">HOY</text>
        <text x="590" y="20">CON PROCESOS CLAROS</text>
      </g>
      <g fill="none" stroke={GRIS_LINEA} strokeWidth="1.3" strokeLinecap="round">
        <path d="M70 80 C 180 240, 260 -10, 360 195" />
        <path d="M250 50 C 60 120, 330 250, 150 200" />
        <path d="M70 80 C 220 20, 380 30, 410 80" />
        <path d="M150 200 C 260 90, 460 240, 410 80" />
        <path d="M360 195 C 300 40, 130 30, 250 50" />
        <path d="M70 80 C 20 210, 260 270, 360 195" />
        <path d="M150 200 C 180 80, 330 160, 250 50" />
        <path d="M410 80 C 330 150, 120 110, 70 80" />
        <path d="M250 50 C 300 140, 200 170, 260 130 S 330 60, 300 110 S 210 190, 150 200" />
        <path d="M410 80 C 440 160, 300 120, 330 170 S 420 230, 360 195" />
        <path d="M70 80 C 120 150, 200 100, 170 140 S 90 170, 150 200" />
        <path d="M360 195 C 250 230, 240 150, 200 175 S 120 250, 70 80" />
        <path d="M250 50 C 380 -10, 460 150, 360 120 S 240 90, 410 80" />
        <path d="M150 200 C 240 250, 420 240, 410 80" />
        <path d="M70 80 C 160 40, 120 10, 200 30 S 300 110, 360 195" />
        <path d="M120 150 C 160 110, 230 200, 280 150 S 320 90, 230 110 S 160 170, 210 190" />
        <path d="M300 220 C 330 180, 260 150, 300 140 S 380 160, 340 120" />
      </g>
      <g
        style={{ fontFamily: "var(--font-sans)" }}
        fontSize="13"
        fontWeight="600"
        fill={TINTA}
        textAnchor="middle"
      >
        <circle cx="70" cy="80" r="30" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="70" y="85">Ventas</text>
        <circle cx="250" cy="50" r="33" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="250" y="55">Compras</text>
        <circle cx="150" cy="200" r="30" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="150" y="205">Bodega</text>
        <circle cx="360" cy="195" r="27" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="360" y="200">Excel</text>
        <circle
          cx="410"
          cy="80"
          r="36"
          fill="#FFFFFF"
          stroke={OCRE}
          strokeWidth="1.4"
          strokeDasharray="4 3"
        />
        <text x="410" y="76" fontSize="11.5">“el que</text>
        <text x="410" y="91" fontSize="11.5">sabe”</text>
      </g>
      <path d="M480 125 H 540" stroke={TINTA} strokeWidth="2" />
      <path d="M532 117 L542 125 L532 133" fill="none" stroke={TINTA} strokeWidth="2" />
      <g
        style={{ fontFamily: "var(--font-sans)" }}
        fontSize="13"
        fontWeight="600"
        fill={TINTA}
        textAnchor="middle"
      >
        <rect x="590" y="100" width="88" height="50" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="634" y="130">Pedido</text>
        <rect x="702" y="100" width="88" height="50" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="746" y="130">Compra</text>
        <rect x="814" y="100" width="88" height="50" fill="#FFFFFF" stroke={TINTA} strokeWidth="1.4" />
        <text x="858" y="130">Bodega</text>
        <rect x="912" y="100" width="82" height="50" fill={TINTA} />
        <text x="953" y="130" fill="#FFFFFF">Factura</text>
      </g>
      <g stroke={OCRE} strokeWidth="1.8" fill="none">
        <path d="M678 125 H 698" />
        <path d="M693 121 L698 125 L693 129" />
        <path d="M790 125 H 810" />
        <path d="M805 121 L810 125 L805 129" />
        <path d="M902 125 H 908" />
      </g>
      <g
        style={{ fontFamily: "var(--font-mono)" }}
        fontSize="10.5"
        fill="#5B6068"
        textAnchor="middle"
      >
        <text x="634" y="172">responsable</text>
        <text x="746" y="172">regla</text>
        <text x="858" y="172">registro</text>
        <text x="953" y="172">control</text>
      </g>
    </svg>
  );
}

/* ---- Advertencias (sobre fondo oscuro) ---- */

function FiguraOscura({ children, className }: FiguraProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke={OCRE_CLARO}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Un enredo que entra a un engranaje: automatizar el desorden. */
export function FiguraAutomatiza({ className }: FiguraProps) {
  return (
    <FiguraOscura className={className}>
      <path d="M3 26 C 6 14, 14 34, 10 22 S 4 30, 14 28 S 20 16, 18 24 S 22 30, 25 24" />
      <circle cx="35" cy="24" r="7" />
      <circle cx="35" cy="24" r="2.5" />
      <path d="M35 13v4M35 31v4M24 24h4M42 24h4M27.2 16.2l2.8 2.8M40 29l2.8 2.8M27.2 31.8l2.8-2.8M40 19l2.8-2.8" />
    </FiguraOscura>
  );
}

/** Bloques apilados a los que les falta uno en la base. */
export function FiguraEstructura({ className }: FiguraProps) {
  return (
    <FiguraOscura className={className}>
      <path d="M4 41h40" />
      <rect x="16" y="9" width="16" height="9" />
      <rect x="8" y="18" width="16" height="9" />
      <rect x="24" y="18" width="16" height="9" />
      <rect x="8" y="27" width="16" height="9" />
      <rect x="24" y="27" width="16" height="9" strokeDasharray="3 3" opacity="0.6" />
    </FiguraOscura>
  );
}

/** Una planilla y la persona que la entiende. */
export function FiguraExcel({ className }: FiguraProps) {
  return (
    <FiguraOscura className={className}>
      <rect x="4" y="8" width="26" height="30" />
      <path d="M4 16h26M4 24h26M4 31h26M13 8v30M21 8v30" />
      <path d="M28 42c0-7 4-11 8-11s8 4 8 11" fill={TINTA} />
      <circle cx="36" cy="22" r="5" fill={TINTA} />
    </FiguraOscura>
  );
}

/* ---- Servicios (sobre fondo blanco) ---- */

function FiguraClara({ children, className }: FiguraProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke={TINTA}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** Lupa sobre un enredo. */
export function FiguraDiagnostico({ className }: FiguraProps) {
  return (
    <FiguraClara className={className}>
      <circle cx="19" cy="19" r="13" />
      <path d="M28.5 28.5 L43 43" strokeWidth="3" />
      <path d="M10 21 C 12 12, 18 28, 16 18 S 24 14, 22 22 S 27 24, 28 17" stroke={OCRE} />
    </FiguraClara>
  );
}

/** Quién hace qué: una tarea que se reparte en dos puestos. */
export function FiguraSistematizacion({ className }: FiguraProps) {
  return (
    <FiguraClara className={className}>
      <rect x="17" y="3" width="14" height="10" />
      <path d="M24 13v7M11 20h26M11 20v8M37 20v8" stroke={OCRE} />
      <rect x="3" y="28" width="16" height="16" />
      <rect x="29" y="28" width="16" height="16" />
      <circle cx="11" cy="34" r="2.5" />
      <path d="M7 42c0-3 2-4.5 4-4.5s4 1.5 4 4.5" />
      <circle cx="37" cy="34" r="2.5" />
      <path d="M33 42c0-3 2-4.5 4-4.5s4 1.5 4 4.5" />
    </FiguraClara>
  );
}

/** Requerimientos listos frente a la pantalla del sistema. */
export function FiguraPreparacion({ className }: FiguraProps) {
  return (
    <FiguraClara className={className}>
      <rect x="16" y="6" width="29" height="21" />
      <path d="M30.5 27v6M24 33h13" />
      <rect x="3" y="18" width="18" height="26" fill="#FFFFFF" />
      <path d="M7 25l1.5 1.5 3-3M7 32l1.5 1.5 3-3M7 39l1.5 1.5 3-3" stroke={OCRE} />
      <path d="M14 25.5h4M14 32.5h4M14 39.5h4" />
    </FiguraClara>
  );
}

/* ====================================================================
 * Figuras de las páginas interiores.
 *
 * Todas comparten la misma gramática: trazo fino en grafito y un solo
 * detalle en ocre que carga la idea. Sobre fondo oscuro se pasan otros
 * colores con `trazo` y `acento`.
 * ==================================================================== */

type FiguraColorProps = FiguraProps & { trazo?: string; acento?: string };

function Lienzo({
  children,
  className,
  trazo = TINTA,
}: {
  children: React.ReactNode;
  className?: string;
  trazo?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke={trazo}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/* ---- Antes del ERP ---- */

/** Un sistema recién instalado: la ventana existe, el contenido no. */
export function FiguraCascaraVacia({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="4" y="7" width="40" height="34" />
      <path d="M4 14h40" />
      <circle cx="8.5" cy="10.5" r="0.8" />
      <circle cx="12" cy="10.5" r="0.8" />
      <circle cx="15.5" cy="10.5" r="0.8" />
      <g stroke={acento} strokeDasharray="2 2.5">
        <rect x="9" y="19" width="30" height="4" />
        <rect x="9" y="27" width="20" height="4" />
        <rect x="9" y="35" width="25" height="2" />
      </g>
    </Lienzo>
  );
}

/** "Depende de quién lo haga": una entrada, tres salidas distintas. */
export function FiguraDepende({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="7" cy="24" r="3.5" />
      <g stroke={acento}>
        <path d="M10.5 24 C 20 24, 22 9, 36 9" />
        <path d="M10.5 24 H 36" />
        <path d="M10.5 24 C 18 24, 16 32, 22 32 S 26 39, 36 39" />
      </g>
      <rect x="37" y="5.5" width="7" height="7" />
      <circle cx="40.5" cy="24" r="3.5" />
      <path d="M40.5 35.5 L44.5 42.5 H36.5 Z" />
    </Lienzo>
  );
}

/** El cambio empuja; el equipo pone el hombro en contra. */
export function FiguraResistencia({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <g stroke={acento} strokeWidth="2">
        <path d="M4 24 H 24" />
        <path d="M19 19 L24 24 L19 29" />
      </g>
      <path d="M28 10 V 38" strokeWidth="2.4" />
      <circle cx="38.5" cy="15" r="3.5" />
      <path d="M38.5 18.5 V 30 M38.5 30 L34.5 40 M38.5 30 L42.5 40 M38.5 22 L30 24.5" />
    </Lienzo>
  );
}

/** Tres caminos distintos para llegar al mismo punto. */
export function FiguraCaminos({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="2" y="20" width="8" height="8" />
      <rect x="38" y="20" width="8" height="8" />
      <g stroke={acento}>
        <path d="M10 22 V 8 H 24 V 4 H 32 V 12 H 42 V 20" />
        <path d="M10 24 H 38" strokeDasharray="2.5 2.5" />
        <path d="M10 26 C 10 44, 20 30, 22 38 S 30 46, 32 36 S 42 40, 42 28" />
      </g>
    </Lienzo>
  );
}

/** Copias de la misma planilla, cada una con su versión. */
export function FiguraPlanillas({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <g stroke={acento} strokeDasharray="2.5 2">
        <rect x="4" y="14" width="24" height="28" />
        <rect x="10" y="10" width="24" height="28" />
      </g>
      <rect x="16" y="6" width="26" height="30" fill="#FFFFFF" />
      <path d="M16 13h26M16 20h26M16 27h26M24 6v30M33 6v30" />
    </Lienzo>
  );
}

/** Un pedido al final de un camino que nadie dibujó. */
export function FiguraPedidoPerdido({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path
        d="M4 42 C 14 42, 8 26, 18 26 S 22 38, 30 34"
        stroke={acento}
        strokeDasharray="2 3"
      />
      <path d="M30 14 L38 10 L46 14 V 24 L38 28 L30 24 Z M30 14 L38 18 L46 14 M38 18 V 28" />
      <path d="M35 37c0-2.5 1.5-4 3.5-4s3.5 1.4 3.5 3.2c0 2.6-3.5 2.6-3.5 5" stroke={acento} />
      <circle cx="38.5" cy="44.5" r="0.6" stroke={acento} />
    </Lienzo>
  );
}

/** El cliente es el que avisa del error. */
export function FiguraQueja({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M18 5 H 44 V 25 H 28 L 21 31 V 25 H 18 Z" />
      <path d="M31 10 V 18" stroke={acento} strokeWidth="2.2" />
      <circle cx="31" cy="21.5" r="0.7" stroke={acento} strokeWidth="2" />
      <circle cx="11" cy="30" r="4" />
      <path d="M3 44c0-5.5 3.5-8.5 8-8.5s8 3 8 8.5" />
    </Lienzo>
  );
}

/** Todo el proceso vive en la cabeza de una persona. */
export function FiguraCabeza({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M14 44 V 36 C 9 33, 6 28, 6 21 C 6 11, 13 4, 23 4 C 33 4, 39 11, 39 19 L 43 27 L 39 28 V 33 C 39 35, 37 36, 35 36 H 30 V 44" />
      <g stroke={acento}>
        <rect x="14" y="12" width="16" height="14" />
        <path d="M14 19h16M22 12v14" />
      </g>
    </Lienzo>
  );
}

/** Un sistema que ya junta telarañas. */
export function FiguraSistemaAbandonado({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="4" y="6" width="40" height="28" />
      <path d="M24 34 V 41 M16 42 H 32" />
      <g stroke={acento}>
        <path d="M4 6 L 18 6 M4 6 L 4 20 M4 6 L 14 16" />
        <path d="M10 6 C 10 9, 9 11, 4 12" />
        <path d="M15 6 C 15 12, 12 16, 4 17" />
      </g>
      <path d="M22 22 h14 M26 27 h10" strokeDasharray="2 2" />
    </Lienzo>
  );
}

/** Del cliente que entra al cobro, pasando por cada etapa. */
export function FiguraMapaProcesos({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="7" cy="8" r="3.5" />
      <path d="M1 20c0-5 2.7-7.5 6-7.5s6 2.5 6 7.5" />
      <rect x="18" y="4" width="10" height="10" />
      <rect x="34" y="4" width="10" height="10" />
      <circle cx="24" cy="37" r="8" />
      <path d="M26.5 33.5c-.6-.9-1.5-1.3-2.6-1.3-1.6 0-2.7.8-2.7 2 0 2.8 5.6 1.6 5.6 4.6 0 1.3-1.2 2.2-2.9 2.2-1.2 0-2.2-.5-2.8-1.4M24 30.5v2M24 41.5v2" strokeWidth="1.2" />
      <g stroke={acento}>
        <path d="M13 9 H 17" />
        <path d="M28 9 H 33" />
        <path d="M39 14 C 39 26, 36 34, 33 36" />
        <path d="M33.5 32.2 L32.5 36.2 L36.4 37" />
      </g>
    </Lienzo>
  );
}

/** El camino normal y el desvío para cuando algo sale mal. */
export function FiguraExcepcion({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M3 16 H 17 M31 16 H 45" />
      <path d="M24 9 L31 16 L24 23 L17 16 Z" />
      <path d="M41 12 L45 16 L41 20" />
      <g stroke={acento}>
        <path d="M24 23 V 36 H 38 V 20" />
        <path d="M35 23 L38 20 L41 23" />
      </g>
      <path d="M11 31 v5" stroke={acento} strokeWidth="2" />
      <circle cx="11" cy="40" r="0.6" stroke={acento} strokeWidth="2" />
    </Lienzo>
  );
}

/** Peldaños: la disciplina que exige un sistema se sube de a poco. */
export function FiguraMadurez({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M3 44 H 13 V 34 H 23 V 24 H 33 V 14 H 45" />
      <g stroke={acento}>
        <path d="M40 14 V 3 L 46 6 L 40 9" />
        <circle cx="18" cy="27.5" r="2.5" />
        <path d="M18 30 v4" />
      </g>
    </Lienzo>
  );
}

/* ---- Blog ---- */

/** Guía: una brújula. */
export function FiguraBrujula({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="24" cy="24" r="19" />
      <path d="M24 5v4M24 39v4M5 24h4M39 24h4" />
      <path d="M30 14 L26.5 26.5 L18 34 L21.5 21.5 Z" stroke={acento} />
      <circle cx="24" cy="24" r="1.2" />
    </Lienzo>
  );
}

/** Opinión: una conversación. */
export function FiguraConversacion({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M4 6 H 30 V 24 H 14 L 8 30 V 24 H 4 Z" />
      <path d="M34 16 H 44 V 34 H 40 V 40 L 34 34 H 20 V 28" stroke={acento} />
      <path d="M10 13h14M10 18h9" />
    </Lienzo>
  );
}

/** Estrategia: una ruta con hitos hasta la meta. */
export function FiguraRuta({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M6 42 C 6 30, 24 34, 22 24 S 30 12, 38 14" strokeDasharray="2.5 2.5" />
      <circle cx="6" cy="42" r="2.5" />
      <circle cx="22" cy="24" r="2.5" />
      <g stroke={acento}>
        <circle cx="40" cy="14" r="6" />
        <circle cx="40" cy="14" r="2" />
      </g>
    </Lienzo>
  );
}

/** Tecnología: una pantalla con código. */
export function FiguraTecnologia({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="4" y="7" width="40" height="27" />
      <path d="M24 34v6M16 41h16" />
      <g stroke={acento}>
        <path d="M17 16 L12 20.5 L17 25" />
        <path d="M31 16 L36 20.5 L31 25" />
        <path d="M26 14 L22 27" />
      </g>
    </Lienzo>
  );
}

/** Gestión: un tablero con tareas cerradas y una pendiente. */
export function FiguraGestion({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="9" y="6" width="30" height="38" />
      <path d="M18 6 V 3 H 30 V 6" />
      <g stroke={acento}>
        <path d="M14 15 l2 2 4-4" />
        <path d="M14 25 l2 2 4-4" />
      </g>
      <path d="M24 15.5h10M24 25.5h10M24 35.5h10" />
      <rect x="14" y="32" width="5" height="5" strokeDasharray="1.5 1.5" />
    </Lienzo>
  );
}

/** Un sobre del que asoma una carta escrita. */
export function FiguraSobre({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M12 22 V 4 H 36 V 22" stroke={acento} />
      <path d="M17 10h14M17 15h14M17 20h8" stroke={acento} />
      <path d="M4 18 V 44 H 44 V 18 L 24 32 Z" />
      <path d="M4 44 L 19 28.5 M44 44 L 29 28.5" />
    </Lienzo>
  );
}

/** Una nota fijada: el dato que conviene recordar. */
export function FiguraNota({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M6 8 H 42 V 32 L 30 44 H 6 Z" />
      <path d="M42 32 H 30 V 44" />
      <path d="M12 18h22M12 25h16" />
      <circle cx="24" cy="8" r="3" fill={acento} stroke={acento} />
    </Lienzo>
  );
}

/* ---- Sobre mí ---- */

/** Independencia: una balanza que no se inclina por ninguna marca. */
export function FiguraBalanza({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M24 6 V 42 M16 42 H 32" />
      <path d="M8 12 H 40" stroke={acento} strokeWidth="2" />
      <circle cx="24" cy="8" r="2" />
      <path d="M8 12 L3 26 M8 12 L13 26 M2 26 C 2 31, 14 31, 14 26 Z" />
      <path d="M40 12 L35 26 M40 12 L45 26 M34 26 C 34 31, 46 31, 46 26 Z" />
    </Lienzo>
  );
}

/** Enfoque en negocio: una flecha al centro. */
export function FiguraDiana({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="22" cy="26" r="18" />
      <circle cx="22" cy="26" r="11" />
      <circle cx="22" cy="26" r="4" />
      <g stroke={acento} strokeWidth="1.8">
        <path d="M22 26 L 42 6" />
        <path d="M36 4 L 42 6 L 44 12" />
      </g>
    </Lienzo>
  );
}

/** Distribución: un camión de reparto. */
export function FiguraDistribucion({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M3 12 H 29 V 34 H 3 Z" />
      <path d="M29 20 H 38 L 45 27 V 34 H 29" />
      <circle cx="11" cy="36" r="3.5" fill="#FFFFFF" />
      <circle cx="37" cy="36" r="3.5" fill="#FFFFFF" />
      <path d="M8 19h14M8 25h9" stroke={acento} />
    </Lienzo>
  );
}

/** Servicios: dos personas resolviendo algo juntas. */
export function FiguraServiciosPersonas({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="12" cy="24" r="4.5" />
      <path d="M3 44c0-7 4-11 9-11s9 4 9 11" />
      <circle cx="36" cy="24" r="4.5" />
      <path d="M27 44c0-7 4-11 9-11s9 4 9 11" />
      <path d="M17 5 H 31 V 14 H 26 L 24 17 L 22 14 H 17 Z" stroke={acento} />
    </Lienzo>
  );
}

/** Pequeña industria: una nave con techo de sierra. */
export function FiguraIndustria({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M3 44 V 24 L 13 17 V 24 L 23 17 V 24 L 33 17 V 44 Z" />
      <path d="M33 44 V 8 H 39 V 44 M33 44 H 45" />
      <path d="M36 4 c 2 -1 4 0 6 -1" stroke={acento} />
      <g stroke={acento}>
        <rect x="8" y="31" width="5" height="5" />
        <rect x="19" y="31" width="5" height="5" />
      </g>
    </Lienzo>
  );
}

/* ---- Contacto ---- */

/** Un sobre cerrado. */
export function FiguraCorreo({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="4" y="10" width="40" height="28" />
      <path d="M4 10 L 24 27 L 44 10" stroke={acento} />
    </Lienzo>
  );
}

/** Una ficha profesional. */
export function FiguraPerfil({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="4" y="9" width="40" height="30" />
      <circle cx="15" cy="21" r="4" />
      <path d="M8 33c0-4.5 3-6.5 7-6.5s7 2 7 6.5" />
      <path d="M27 19h11M27 25h11M27 31h7" stroke={acento} />
    </Lienzo>
  );
}

/** Media hora de reloj: el diagnóstico dura 30 minutos. */
export function FiguraTreintaMinutos({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M24 7 A 17 17 0 0 1 24 41 Z" fill={acento} stroke="none" opacity="0.18" />
      <circle cx="24" cy="24" r="17" />
      <path d="M24 7 V 41" stroke={acento} />
      <path d="M24 24 V 13" strokeWidth="2" />
      <path d="M20 3 H 28" />
    </Lienzo>
  );
}

/** Un enredo que termina en una línea recta y un visto bueno. */
export function FiguraDesenredo({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <path d="M3 24 C 6 12, 14 34, 10 20 S 4 30, 14 28 S 20 16, 18 24 S 22 26, 26 24 H 32" />
      <path d="M33 24 l5 5 8 -10" stroke={acento} strokeWidth="2.2" />
    </Lienzo>
  );
}

/* ---- 404 ---- */

/** Un camino que se corta antes de llegar. */
export function FiguraCaminoRoto({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <circle cx="6" cy="24" r="3" />
      <path d="M9 24 H 20 L 23 20" />
      <path d="M27 28 L 30 24 H 32" stroke={acento} strokeDasharray="2 2" />
      <rect x="34" y="17" width="11" height="14" stroke={acento} strokeDasharray="2 2" />
      <path d="M37.5 22c0-1.4 1-2.2 2-2.2s2 .8 2 1.8c0 1.5-2 1.5-2 3" stroke={acento} />
      <circle cx="39.5" cy="27.4" r="0.4" stroke={acento} />
    </Lienzo>
  );
}

/* ---- Recursos ---- */

/** El test: una planilla con respuestas y un medidor de madurez. */
export function FiguraTestMadurez({ className, trazo, acento = OCRE }: FiguraColorProps) {
  return (
    <Lienzo className={className} trazo={trazo}>
      <rect x="3" y="4" width="28" height="36" />
      <path d="M3 11h28M3 18h28M3 25h28M3 32h28M10 4v36" />
      <g stroke={acento}>
        <path d="M14 14.5h6M14 21.5h12M14 28.5h4M14 35.5h9" strokeWidth="2.2" />
      </g>
      <path d="M27 44 A 10 10 0 0 1 47 44" fill="#FFFFFF" />
      <path d="M37 44 L 43 37" stroke={acento} strokeWidth="2" />
      <circle cx="37" cy="44" r="1.2" />
    </Lienzo>
  );
}
