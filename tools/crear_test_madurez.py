"""Genera el Test de madurez operativa de Procesos Claros (recurso descargable).

Uso:
    python tools/crear_test_madurez.py public/descargas/test-de-madurez-operativa.xlsx

openpyxl escribe las fórmulas sin valores calculados. Después de generarlo,
conviene abrir el archivo en Excel y guardarlo una vez, para que quien lo
abra en un visor sin motor de cálculo vea los resultados en blanco y no
celdas vacías.
"""
import sys
from openpyxl import Workbook
from openpyxl.chart import BarChart, Reference
from openpyxl.chart.label import DataLabelList
from openpyxl.comments import Comment
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side, Protection
from openpyxl.worksheet.datavalidation import DataValidation

SALIDA = sys.argv[1]

TINTA = "1A1C1F"
ACENTO = "0E5A66"
GRIS = "5B6068"
LINEA = "D5D7DA"
PAPEL = "F3F3F1"
ENTRADA = "FFF2CC"  # amarillo suave: celdas para completar
VERDE_F = "E2EFDA"
AMARILLO_F = "FFF2CC"
DEBIL_F = "F2D5D5"  # rosado suave: área débil

F = "Arial"


def fuente(size=10, bold=False, color=TINTA, italic=False):
    return Font(name=F, size=size, bold=bold, color=color, italic=italic)


relleno = lambda c: PatternFill("solid", start_color=c, end_color=c)
fina = Side(style="thin", color=LINEA)
gruesa = Side(style="medium", color=TINTA)
borde_inf = Border(bottom=fina)
envolver = Alignment(wrap_text=True, vertical="top")
centro = Alignment(horizontal="center", vertical="center", wrap_text=True)

OPCIONES = [
    "0 · No existe",
    "1 · Está en la cabeza de alguien",
    "2 · Existe, pero no siempre se cumple",
    "3 · Definido, escrito y se cumple",
]

AREAS = [
    (
        "Flujo de trabajo y responsables",
        [
            "¿Puedes describir, de principio a fin, cómo fluye un pedido desde que el cliente lo solicita hasta que el dinero está en tu cuenta?",
            "¿Existe una sola persona responsable por cada etapa de ese flujo, y todos saben quién es?",
            "¿Tu equipo hace las mismas tareas de la misma forma, independientemente de quién esté de turno?",
            "¿El trabajo pasa de un área a otra sin que haya que perseguir a nadie para que avance?",
        ],
        "Dibuja el recorrido de un pedido de principio a fin y asigna un solo responsable por etapa.",
    ),
    (
        "Datos e información",
        [
            "¿Tienes un catálogo de productos o servicios único, actualizado y sin duplicados?",
            "¿La información de tus clientes vive en un solo lugar, o está repartida entre planillas, correos y libretas?",
            "¿Puedes saber hoy, sin preguntarle a nadie, en qué estado está cualquier pedido en curso?",
            "¿Cada dato se registra una sola vez, en vez de copiarse entre varias planillas?",
        ],
        "Unifica catálogo y clientes en una sola fuente y elimina duplicados antes de migrar nada a un sistema.",
    ),
    (
        "Excepciones y control",
        [
            "¿Tienes definido qué hacer cuando algo sale mal: un despacho incompleto, una devolución, un cliente moroso?",
            "¿Los errores se detectan dentro de la empresa antes de que el cliente se queje?",
            "¿Está claro quién puede aprobar descuentos, créditos o compras, y hasta qué monto?",
            "¿Hay un control periódico de inventario o de caja que cuadre con lo registrado?",
        ],
        "Escribe qué se hace cuando algo sale mal (devoluciones, despachos incompletos, morosos) y quién aprueba qué.",
    ),
    (
        "Costos y medición",
        [
            "¿Sabes cuánto te cuesta realmente entregar tu producto o servicio, incluyendo el tiempo del equipo?",
            "¿Has definido qué quieres medir del negocio y con qué frecuencia lo vas a revisar?",
            "¿Los números del mes están disponibles en los primeros días del mes siguiente?",
            "¿Las decisiones importantes se toman con datos y no solo por intuición?",
        ],
        "Calcula el costo real de entregar y define de 3 a 5 indicadores con una fecha fija de revisión.",
    ),
    (
        "Documentación y equipo",
        [
            "¿Existe algún documento, aunque sea básico, que explique cómo se hace el trabajo más allá de la memoria de las personas?",
            "¿Si una persona clave falta una semana, la operación sigue sin problemas?",
            "¿Una persona nueva puede aprender su trabajo sin depender de que alguien se lo explique todo de memoria?",
            "¿Tu equipo entiende por qué conviene ordenar los procesos antes de cambiar de sistema?",
        ],
        "Documenta las tareas críticas en manuales breves y prepara al equipo para el cambio antes de elegir sistema.",
    ),
]

wb = Workbook()

# ---------------------------------------------------------------- Listas
listas = wb.active
listas.title = "Listas"
for i, op in enumerate(OPCIONES, start=1):
    listas.cell(row=i, column=1, value=op).font = fuente()
listas.sheet_state = "hidden"

# ---------------------------------------------------------------- Cómo usar
guia = wb.create_sheet("Cómo usar", 0)
guia.sheet_view.showGridLines = False
guia.column_dimensions["A"].width = 3
guia.column_dimensions["B"].width = 34
guia.column_dimensions["C"].width = 70

guia["B2"] = "PROCESOS CLAROS · Consultoría independiente de procesos"
guia["B2"].font = fuente(9, color=GRIS)
guia["B4"] = "Test de madurez operativa"
guia["B4"].font = fuente(22, bold=True)
guia["B5"] = "¿Tu empresa está lista para implementar un ERP?"
guia["B5"].font = fuente(13, color=ACENTO, bold=True)

texto = [
    ("Para qué sirve",
     "Un sistema de gestión multiplica lo que tu empresa ya hace: si los procesos están claros, acelera; si no, acelera el desorden. "
     "Este test te muestra en 15 minutos qué tan definida está tu operación y por dónde conviene empezar a ordenar."),
    ("Cómo se responde",
     "En la hoja «Test», elige una respuesta en cada una de las 20 preguntas (celdas amarillas). "
     "Responde con honestidad: una respuesta cuenta como «definida» solo si tu equipo respondería lo mismo."),
    ("Cómo se lee",
     "La hoja «Resultado» se calcula sola: puntaje por área, un gráfico y las dos áreas por donde conviene empezar. "
     "El veredicto aparece cuando las 20 preguntas están respondidas."),
    ("Consejo",
     "Pide a dos o tres personas de tu operación que respondan el test por separado y comparen. Las diferencias entre respuestas son, en sí mismas, un hallazgo."),
]
fila = 7
for titulo, cuerpo in texto:
    guia.cell(row=fila, column=2, value=titulo).font = fuente(10, bold=True)
    c = guia.cell(row=fila, column=3, value=cuerpo)
    c.font = fuente(10)
    c.alignment = envolver
    guia.cell(row=fila, column=2).alignment = envolver
    guia.row_dimensions[fila].height = 54
    for col in (2, 3):
        guia.cell(row=fila, column=col).border = borde_inf
    fila += 1

fila += 1
guia.cell(row=fila, column=2, value="Escala de respuestas").font = fuente(11, bold=True)
fila += 1
for op, explicacion in zip(
    OPCIONES,
    [
        "No hay nada definido; cada vez se resuelve distinto.",
        "Se hace, pero depende de que una persona lo recuerde.",
        "Hay una forma acordada, pero a veces no se sigue.",
        "Está acordado, escrito y el equipo lo cumple.",
    ],
):
    guia.cell(row=fila, column=2, value=op).font = fuente(10, bold=True)
    guia.cell(row=fila, column=3, value=explicacion).font = fuente(10)
    for col in (2, 3):
        guia.cell(row=fila, column=col).border = borde_inf
    fila += 1

fila += 1
guia.cell(row=fila, column=2, value="Leyenda").font = fuente(11, bold=True)
fila += 1
c = guia.cell(row=fila, column=2, value="Celda amarilla")
c.fill = relleno(ENTRADA)
c.font = fuente(10)
c.border = Border(left=fina, right=fina, top=fina, bottom=fina)
guia.cell(row=fila, column=3, value="Es para completar. Todo lo demás se calcula solo y está protegido para no borrarlo por error.").font = fuente(10)
fila += 2

guia.cell(row=fila, column=2, value="Ejemplo de una respuesta").font = fuente(11, bold=True)
fila += 1
ejemplo = [
    ("Pregunta", "¿Tienes un catálogo de productos o servicios único, actualizado y sin duplicados?"),
    ("Respuesta", OPCIONES[1]),
    ("Puntaje", "1 de 3"),
    ("Nota", "Ventas usa su lista y bodega otra; hay códigos repetidos para el mismo producto."),
]
for etiqueta, valor in ejemplo:
    guia.cell(row=fila, column=2, value=etiqueta).font = fuente(10, color=GRIS)
    c = guia.cell(row=fila, column=3, value=valor)
    c.font = fuente(10)
    c.alignment = envolver
    if etiqueta == "Respuesta":
        c.fill = relleno(ENTRADA)
    fila += 1

fila += 1
guia.cell(row=fila, column=2, value="¿Quieres revisar tu resultado con alguien?").font = fuente(11, bold=True, color=ACENTO)
fila += 1
c = guia.cell(row=fila, column=2, value="Agenda un diagnóstico gratuito de 30 minutos en procesosclaros.cl/contacto")
c.hyperlink = "https://www.procesosclaros.cl/contacto"
c.font = Font(name=F, size=10, color=ACENTO, underline="single")
guia.merge_cells(start_row=fila, start_column=2, end_row=fila, end_column=3)

# ---------------------------------------------------------------- Test
test = wb.create_sheet("Test", 1)
test.sheet_view.showGridLines = False
anchos = {"A": 3, "B": 5, "C": 26, "D": 62, "E": 34, "F": 9, "G": 40}
for col, w in anchos.items():
    test.column_dimensions[col].width = w

test["B2"] = "Test de madurez operativa"
test["B2"].font = fuente(16, bold=True)
test["B3"] = "Elige una respuesta en cada celda amarilla. El puntaje y el resultado se calculan solos."
test["B3"].font = fuente(10, color=GRIS)

test["C5"] = "Empresa"
test["C6"] = "Responde"
test["C7"] = "Fecha"
for r in (5, 6, 7):
    test.cell(row=r, column=3).font = fuente(10, bold=True)
    c = test.cell(row=r, column=4)
    c.fill = relleno(ENTRADA)
    c.font = fuente(10)
    c.border = Border(bottom=fina)
    c.protection = Protection(locked=False)
test["D7"].number_format = "dd-mm-yyyy"

ENC = 9
encabezados = ["N°", "Área", "Pregunta", "Respuesta", "Puntaje", "Nota o evidencia (opcional)"]
for i, h in enumerate(encabezados, start=2):
    c = test.cell(row=ENC, column=i, value=h)
    c.font = fuente(10, bold=True, color="FFFFFF")
    c.fill = relleno(TINTA)
    c.alignment = Alignment(vertical="center", wrap_text=True, horizontal="center" if h in ("N°", "Puntaje") else "left")
test.row_dimensions[ENC].height = 22

dv = DataValidation(type="list", formula1="=Listas!$A$1:$A$4", allow_blank=True,
                    showErrorMessage=True, errorTitle="Respuesta no válida",
                    error="Elige una de las cuatro opciones de la lista.")
dv.prompt = "Elige la opción que mejor describe a tu empresa hoy."
dv.promptTitle = "Respuesta"
dv.showInputMessage = True
test.add_data_validation(dv)

PRIMERA = ENC + 1
fila = PRIMERA
n = 1
for area, preguntas, _ in AREAS:
    for p in preguntas:
        test.cell(row=fila, column=2, value=n)
        test.cell(row=fila, column=3, value=area)
        test.cell(row=fila, column=4, value=p)
        resp = test.cell(row=fila, column=5)
        resp.fill = relleno(ENTRADA)
        resp.protection = Protection(locked=False)
        dv.add(resp)
        test.cell(row=fila, column=6, value=f'=IF(E{fila}="","",MATCH(E{fila},Listas!$A$1:$A$4,0)-1)')
        nota = test.cell(row=fila, column=7)
        nota.protection = Protection(locked=False)
        for col in range(2, 8):
            c = test.cell(row=fila, column=col)
            c.font = fuente(10, bold=(col == 6))
            c.border = borde_inf
            c.alignment = Alignment(wrap_text=True, vertical="top", horizontal="center" if col in (2, 6) else "left")
        test.row_dimensions[fila].height = 42
        fila += 1
        n += 1
ULTIMA = fila - 1

# Banda de cierre de cada área para leer los bloques
for k in range(len(AREAS)):
    r = PRIMERA + k * 4 + 3
    for col in range(2, 8):
        test.cell(row=r, column=col).border = Border(bottom=gruesa)

test.freeze_panes = test.cell(row=PRIMERA, column=1)
test.print_title_rows = f"{ENC}:{ENC}"
test.page_setup.orientation = "landscape"
test.page_setup.fitToWidth = 1
test.page_setup.fitToHeight = 0
test.sheet_properties.pageSetUpPr.fitToPage = True
test.protection.sheet = True
test.protection.formatColumns = False
test.protection.formatRows = False

RNG_AREA = f"Test!$C${PRIMERA}:$C${ULTIMA}"
RNG_RESP = f"Test!$E${PRIMERA}:$E${ULTIMA}"
RNG_PTJE = f"Test!$F${PRIMERA}:$F${ULTIMA}"

# ---------------------------------------------------------------- Resultado
res = wb.create_sheet("Resultado", 2)
res.sheet_view.showGridLines = False
for col, w in {"A": 3, "B": 30, "C": 12, "D": 12, "E": 14, "F": 14, "G": 18, "H": 9, "I": 62}.items():
    res.column_dimensions[col].width = w

res["B2"] = "Resultado"
res["B2"].font = fuente(16, bold=True)
res["B3"] = '="Empresa: "&IF(Test!$D$5="","(sin nombre)",Test!$D$5)'
res["B3"].font = fuente(10, color=GRIS)

# Criterios (visibles y editables por quien sepa lo que hace)
res["B5"] = "Criterio de lectura"
res["B5"].font = fuente(10, bold=True)
res["B6"] = "Lista para un sistema desde"
res["C6"] = 0.8
res["B7"] = "Zona intermedia desde"
res["C7"] = 0.5
for r in (6, 7):
    res.cell(row=r, column=2).font = fuente(10)
    c = res.cell(row=r, column=3)
    c.number_format = "0%"
    c.font = Font(name=F, size=10, color="0000FF")
res["D6"] = "Equivale a 8 de 10 respuestas claras en el checklist del artículo «Cómo saber si tu empresa está lista para digitalizar»."
res["D7"] = "Equivale a 5 de 10. Bajo este umbral, lo que corresponde es ordenar antes de comprar software."
for r in (6, 7):
    res.cell(row=r, column=4).font = fuente(9, color=GRIS)
res["C6"].comment = Comment("Umbral de Procesos Claros, alineado con el checklist de 10 preguntas publicado en procesosclaros.cl/blog.", "Procesos Claros")

# Veredicto general
res["B9"] = "Preguntas respondidas"
res["C9"] = f"=COUNTA({RNG_RESP})"
res["D9"] = f'="de "&ROWS({RNG_RESP})'
res["B10"] = "Puntaje total"
res["C10"] = f"=SUM({RNG_PTJE})"
res["D10"] = f'="de "&ROWS({RNG_RESP})*3'
res["B11"] = "Madurez general"
res["C11"] = f"=IF(C9=0,\"\",C10/(ROWS({RNG_RESP})*3))"
res["C11"].number_format = "0%"
for r in (9, 10, 11):
    res.cell(row=r, column=2).font = fuente(10)
    res.cell(row=r, column=3).font = fuente(12, bold=True)
    res.cell(row=r, column=3).alignment = Alignment(horizontal="center")
    res.cell(row=r, column=4).font = fuente(10, color=GRIS)

res["B13"] = "Veredicto"
res["B13"].font = fuente(10, bold=True)
res["B13"].alignment = Alignment(vertical="top")
res["C13"] = (
    f'=IF(C9<ROWS({RNG_RESP}),"Responde las "&ROWS({RNG_RESP})&" preguntas para ver el veredicto (faltan "&(ROWS({RNG_RESP})-C9)&").",'
    f'IF(C11>=$C$6,"Tu operación está definida: un sistema va a multiplicar lo que ya funciona. Puedes evaluar proveedores con confianza.",'
    f'IF(C11>=$C$7,"Zona intermedia: tienes una base, pero hay vacíos que un sistema va a exponer de golpe. Ciérralos antes de implementar.",'
    f'"Todavía no: comprar software ahora es la forma más cara de descubrir cómo opera tu empresa. Lo que corresponde es ordenar primero.")))'
)
res.merge_cells("C13:I14")
res["C13"].font = fuente(12, bold=True)
res["C13"].alignment = envolver
res.row_dimensions[13].height = 24
res.row_dimensions[14].height = 24

# Tabla por área
T = 17
for i, h in enumerate(["Área", "Puntaje", "Máximo", "Madurez", "Respondidas", "Estado", "Prioridad", "Qué hacer primero"], start=2):
    c = res.cell(row=T - 1, column=i, value=h)
    c.font = fuente(10, bold=True, color="FFFFFF")
    c.fill = relleno(TINTA)
    c.alignment = Alignment(horizontal="left" if i in (2, 9) else "center", vertical="center")
res.row_dimensions[T - 1].height = 22

for k, (area, preguntas, consejo) in enumerate(AREAS):
    r = T + k
    res.cell(row=r, column=2, value=area)
    res.cell(row=r, column=3, value=f'=SUMIFS({RNG_PTJE},{RNG_AREA},$B{r})')
    res.cell(row=r, column=4, value=f'=COUNTIF({RNG_AREA},$B{r})*3')
    res.cell(row=r, column=5, value=f'=IF(D{r}=0,0,C{r}/D{r})').number_format = "0%"
    res.cell(row=r, column=6, value=f'=COUNTIFS({RNG_AREA},$B{r},{RNG_RESP},"?*")&" de "&COUNTIF({RNG_AREA},$B{r})')
    res.cell(row=r, column=7, value=(
        f'=IF(COUNTIFS({RNG_AREA},$B{r},{RNG_RESP},"?*")<COUNTIF({RNG_AREA},$B{r}),"Incompleta",'
        f'IF(E{r}>=$C$6,"Sólida",IF(E{r}>=$C$7,"Intermedia","Débil")))'
    ))
    # Prioridad 1 = área más débil; el COUNTIF desempata por orden de la tabla
    res.cell(row=r, column=8, value=f'=RANK(E{r},$E${T}:$E${T + 4},1)+COUNTIF($E${T}:E{r},E{r})-1')
    res.cell(row=r, column=9, value=consejo)
    for col in range(2, 10):
        c = res.cell(row=r, column=col)
        c.font = fuente(10, bold=(col in (5, 7)))
        c.border = borde_inf
        c.alignment = Alignment(vertical="center", wrap_text=True, horizontal="left" if col in (2, 9) else "center")
    res.row_dimensions[r].height = 34
FIN = T + len(AREAS) - 1

rango_estado = f"G{T}:G{FIN}"
res.conditional_formatting.add(rango_estado, FormulaRule(formula=[f'G{T}="Sólida"'], fill=relleno(VERDE_F)))
res.conditional_formatting.add(rango_estado, FormulaRule(formula=[f'G{T}="Intermedia"'], fill=relleno(AMARILLO_F)))
res.conditional_formatting.add(rango_estado, FormulaRule(formula=[f'G{T}="Débil"'], fill=relleno(DEBIL_F)))

# Por dónde empezar
P = FIN + 3
res.cell(row=P, column=2, value="Por dónde empezar").font = fuente(12, bold=True, color=ACENTO)
for j in (1, 2):
    r = P + j
    # Si el área que toca ya está sólida, no hay nada urgente que sugerir.
    solida = f'INDEX($G${T}:$G${FIN},MATCH({j},$H${T}:$H${FIN},0))="Sólida"'
    msg_b = '"Todas tus áreas están sólidas."' if j == 1 else '""'
    msg_c = '"Mantén lo que ya funciona y repite el test cada seis meses."' if j == 1 else '""'
    res.cell(row=r, column=2, value=(
        f'=IF($C$9=0,"",IF({solida},{msg_b},'
        f'{j}&". "&INDEX($B${T}:$B${FIN},MATCH({j},$H${T}:$H${FIN},0))))'
    )).font = fuente(10, bold=True)
    res.cell(row=r, column=2).alignment = envolver
    res.cell(row=r, column=3, value=(
        f'=IF($C$9=0,"",IF({solida},{msg_c},'
        f'INDEX($I${T}:$I${FIN},MATCH({j},$H${T}:$H${FIN},0))))'
    )).font = fuente(10)
    res.merge_cells(start_row=r, start_column=3, end_row=r, end_column=9)
    res.cell(row=r, column=3).alignment = envolver
    res.row_dimensions[r].height = 30

C = P + 4
res.cell(row=C, column=2, value="¿Quieres revisar este resultado con alguien?").font = fuente(11, bold=True)
c = res.cell(row=C + 1, column=2, value="Agenda un diagnóstico gratuito de 30 minutos → procesosclaros.cl/contacto")
c.hyperlink = "https://www.procesosclaros.cl/contacto"
c.font = Font(name=F, size=10, color=ACENTO, underline="single")

# Gráfico de madurez por área
graf = BarChart()
graf.type = "bar"
graf.style = 2
graf.y_axis.majorGridlines = None
graf.y_axis.scaling.min = 0
graf.y_axis.scaling.max = 1
graf.y_axis.number_format = "0%"
graf.y_axis.delete = False
graf.x_axis.delete = False
graf.x_axis.scaling.orientation = "maxMin"
graf.legend = None
datos = Reference(res, min_col=5, min_row=T, max_row=FIN)
cats = Reference(res, min_col=2, min_row=T, max_row=FIN)
graf.add_data(datos, titles_from_data=False)
graf.set_categories(cats)
serie = graf.series[0]
serie.graphicalProperties.solidFill = ACENTO
serie.graphicalProperties.line.solidFill = ACENTO
serie.dLbls = DataLabelList()
serie.dLbls.showVal = True
serie.dLbls.showSerName = False
serie.dLbls.showCatName = False
serie.dLbls.showLegendKey = False
serie.dLbls.showPercent = False
serie.dLbls.numFmt = "0%"
graf.height = 8
graf.width = 18
res.cell(row=C + 3, column=2, value="Madurez por área").font = fuente(12, bold=True)
res.add_chart(graf, f"B{C + 4}")

res.protection.sheet = True
res.page_setup.orientation = "landscape"
res.page_setup.fitToWidth = 1
res.page_setup.fitToHeight = 1
res.sheet_properties.pageSetUpPr.fitToPage = True

guia.page_setup.fitToWidth = 1
guia.page_setup.fitToHeight = 0
guia.sheet_properties.pageSetUpPr.fitToPage = True
guia.protection.sheet = True

for ws in (guia, test, res):
    ws.sheet_properties.tabColor = ACENTO if ws is test else TINTA

wb.active = 0
wb.properties.title = "Test de madurez operativa"
wb.properties.creator = "Procesos Claros"
wb.save(SALIDA)
print("ok", SALIDA, PRIMERA, ULTIMA)
