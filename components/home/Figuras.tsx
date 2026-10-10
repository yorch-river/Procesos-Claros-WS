/**
 * Ilustraciones de la home, dibujadas a mano como SVG en línea.
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
