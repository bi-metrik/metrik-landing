# MéTRIK - Los 5 Indicadores Financieros Core

**Versión:** 1.0  
**Fecha:** 22 Diciembre 2025  
**Propósito:** Definir los indicadores financieros destino del Framework MéTRIK  
**Uso:** Estrategia interna + Comunicación comercial + Página web

---

## FILOSOFÍA

> **"Todo dashboard MéTRIK debe responder las 5 preguntas que quitan el sueño a los dueños de negocio."**

No importa si el cliente vende zapatos, construye casas, da asesorías o tiene una cadena de restaurantes. Al final del día, todo dueño se hace las mismas 5 preguntas sobre su negocio.

MéTRIK conecta ventas, operaciones, marketing y equipo humano con estas 5 respuestas.

---

## LOS 5 INDICADORES

### 1. ¿Cuánta plata tengo?

| Aspecto | Detalle |
|---------|---------|
| **Nombre técnico** | Flujo de Caja (Cash Flow) |
| **Qué mide** | Dinero real disponible HOY |
| **Por qué importa** | Puedes ser "rentable" en papel y quebrar por falta de caja |
| **Fórmula** | Caja Inicial + Entradas - Salidas = Caja Disponible |
| **Frecuencia ideal** | Diario o Semanal |
| **Alerta** | < 1 mes de costos fijos = peligro |

**Lo que el dueño quiere saber:**
- ¿Puedo pagar nómina el viernes?
- ¿Tengo para cubrir proveedores?
- ¿Cuánto efectivo real tengo disponible?

---

### 2. ¿Estoy ganando?

| Aspecto | Detalle |
|---------|---------|
| **Nombre técnico** | Utilidad Neta (Net Profit) |
| **Qué mide** | Lo que realmente ganaste después de TODO |
| **Por qué importa** | Es el "score" final del negocio |
| **Fórmula** | Ingresos - Costos - Gastos - Impuestos = Utilidad |
| **Frecuencia ideal** | Mensual |
| **Alerta** | Negativo por 2+ meses consecutivos |

**Lo que el dueño quiere saber:**
- ¿El negocio está funcionando?
- ¿Vale la pena seguir?
- ¿Estoy generando riqueza o destruyéndola?

---

### 3. ¿Cuánto me queda?

| Aspecto | Detalle |
|---------|---------|
| **Nombre técnico** | Margen Neto (Net Margin %) |
| **Qué mide** | Qué porcentaje de cada venta es ganancia real |
| **Por qué importa** | Mide la eficiencia del negocio |
| **Fórmula** | (Utilidad Neta / Ingresos) × 100 |
| **Frecuencia ideal** | Mensual |
| **Benchmark** | >10% es saludable para PYMEs |

**Lo que el dueño quiere saber:**
- De cada $100 que vendo, ¿cuánto me queda?
- ¿Mi negocio es eficiente?
- ¿Estoy regalando mi trabajo?

---

### 4. ¿Cuánto debo vender?

| Aspecto | Detalle |
|---------|---------|
| **Nombre técnico** | Punto de Equilibrio (Break-Even) |
| **Qué mide** | Ventas mínimas para no perder ni ganar |
| **Por qué importa** | Es tu "línea de supervivencia" |
| **Fórmula** | Costos Fijos / Margen de Contribución |
| **Frecuencia ideal** | Mensual (o cuando cambian costos) |
| **Uso** | Meta mínima de ventas |

**Lo que el dueño quiere saber:**
- ¿Cuál es mi mínimo para no perder?
- ¿Cuántas unidades/proyectos/servicios necesito vender?
- ¿Estoy por encima o por debajo de mi mínimo?

---

### 5. ¿Cuánto aguanto?

| Aspecto | Detalle |
|---------|---------|
| **Nombre técnico** | Runway (Meses de Supervivencia) |
| **Qué mide** | Meses que puedes operar sin ingresos nuevos |
| **Por qué importa** | Tu "colchón de seguridad" |
| **Fórmula** | Caja Disponible / Costos Fijos Mensuales |
| **Frecuencia ideal** | Semanal |
| **Alerta** | < 3 meses = peligro |

**Lo que el dueño quiere saber:**
- Si no vendo nada, ¿cuánto tiempo aguanto?
- ¿Tengo margen para una crisis?
- ¿Puedo dormir tranquilo?

---

## RESUMEN VISUAL

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│            LAS 5 PREGUNTAS DE TODO DUEÑO DE NEGOCIO            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. ¿CUÁNTA PLATA TENGO?      →  Flujo de Caja                │
│      Para dormir tranquilo         Diario/Semanal               │
│                                                                 │
│   2. ¿ESTOY GANANDO?           →  Utilidad Neta                │
│      Para saber si vale la pena    Mensual                      │
│                                                                 │
│   3. ¿CUÁNTO ME QUEDA?         →  Margen Neto %                │
│      Para saber si soy eficiente   Mensual (meta: >10%)         │
│                                                                 │
│   4. ¿CUÁNTO DEBO VENDER?      →  Punto de Equilibrio          │
│      Para conocer mi mínimo        Mensual                      │
│                                                                 │
│   5. ¿CUÁNTO AGUANTO?          →  Runway                       │
│      Para no entrar en pánico      Semanal (meta: >3 meses)     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## CONEXIÓN CON MÓDULOS OPERACIONALES

Cada módulo del Framework MéTRIK alimenta uno o más de estos 5 indicadores:

### Módulo Comercial
| Indicador Comercial | Alimenta |
|---------------------|----------|
| Pipeline | #1 ¿Cuánta plata tengo? (proyectado) |
| Facturación | #2 ¿Estoy ganando? |
| Ticket Promedio | #4 ¿Cuánto debo vender? |
| Ciclo de Venta | #1 ¿Cuánta plata tengo? (timing) |

### Módulo Operaciones
| Indicador Operacional | Alimenta |
|-----------------------|----------|
| Costos Directos | #2 ¿Estoy ganando? |
| Eficiencia (Horas) | #3 ¿Cuánto me queda? |
| Proyectos Entregados | #2 ¿Estoy ganando? |
| Capacidad Utilizada | #3 ¿Cuánto me queda? |

### Módulo Marketing
| Indicador Marketing | Alimenta |
|---------------------|----------|
| Costo Adquisición (CAC) | #3 ¿Cuánto me queda? |
| Leads Generados | #1 ¿Cuánta plata tengo? (futuro) |
| Conversión Campañas | #2 ¿Estoy ganando? |
| Gasto en Marketing | #4 ¿Cuánto debo vender? |

### Módulo Gestión Humana
| Indicador RRHH | Alimenta |
|----------------|----------|
| Costo Nómina | #4 ¿Cuánto debo vender? |
| Productividad | #3 ¿Cuánto me queda? |
| Rotación | #2 ¿Estoy ganando? (costo oculto) |
| Capacidad Equipo | #5 ¿Cuánto aguanto? |

---

## DIAGRAMA DE CONEXIÓN

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      MÓDULOS OPERACIONALES                      │
│                                                                 │
│   ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐      │
│   │ COMERCIAL │ │OPERACIONES│ │ MARKETING │ │  GESTIÓN  │      │
│   │           │ │           │ │           │ │  HUMANA   │      │
│   │ •Pipeline │ │ •Costos   │ │ •CAC      │ │ •Nómina   │      │
│   │ •Ventas   │ │ •Eficienc.│ │ •Leads    │ │ •Product. │      │
│   │ •Ticket   │ │ •Proyectos│ │ •Conversn.│ │ •Rotación │      │
│   └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘      │
│         │             │             │             │             │
│         └─────────────┴──────┬──────┴─────────────┘             │
│                              │                                  │
│                              ▼                                  │
│         ┌────────────────────────────────────────┐              │
│         │                                        │              │
│         │        5 INDICADORES FINANCIEROS       │              │
│         │                                        │              │
│         │  1. ¿Cuánta plata tengo?              │              │
│         │  2. ¿Estoy ganando?                   │              │
│         │  3. ¿Cuánto me queda?                 │              │
│         │  4. ¿Cuánto debo vender?              │              │
│         │  5. ¿Cuánto aguanto?                  │              │
│         │                                        │              │
│         └────────────────────────────────────────┘              │
│                              │                                  │
│                              ▼                                  │
│         ┌────────────────────────────────────────┐              │
│         │                                        │              │
│         │          DECISIONES DEL DUEÑO          │              │
│         │                                        │              │
│         │  • ¿Contrato o no contrato?           │              │
│         │  • ¿Invierto en marketing?            │              │
│         │  • ¿Subo precios?                     │              │
│         │  • ¿Abro otra sede?                   │              │
│         │  • ¿Pido un crédito?                  │              │
│         │                                        │              │
│         └────────────────────────────────────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## COPY PARA PÁGINA WEB

### Versión Hero Section

**Headline:**
> # 5 preguntas que definen si tu negocio está sano

**Subheadline:**
> Si no puedes responderlas HOY, estás manejando a ciegas.

**Las 5 preguntas:**
> 1. ¿Cuánta plata tengo?
> 2. ¿Estoy ganando?
> 3. ¿Cuánto me queda de cada venta?
> 4. ¿Cuánto debo vender mínimo?
> 5. ¿Cuánto aguanto sin vender?

**CTA:**
> MéTRIK conecta tus ventas, operaciones y equipo con estas 5 respuestas. En 10 días.
>
> [Agenda una llamada]

---

### Versión Sección Explicativa

**Título:**
> ## No vendemos dashboards bonitos. Vendemos claridad financiera.

**Texto:**
> La mayoría de consultoras te entregan reportes llenos de gráficas que nadie entiende. Nosotros no.
>
> En MéTRIK, todo dashboard que construimos responde las mismas 5 preguntas que todo dueño de negocio se hace cada noche:

**Lista con íconos:**
> 💰 **¿Cuánta plata tengo?** - Para dormir tranquilo sabiendo que puedes pagar nómina.
>
> 📈 **¿Estoy ganando?** - Para saber si tu negocio realmente funciona.
>
> 🎯 **¿Cuánto me queda?** - Para entender si cada venta vale la pena.
>
> 📊 **¿Cuánto debo vender?** - Para conocer tu mínimo de supervivencia.
>
> ⏱️ **¿Cuánto aguanto?** - Para no entrar en pánico cuando las ventas bajan.

**Cierre:**
> Conectamos tus ventas, operaciones, marketing y equipo con estos 5 números. Sin Excel infinito. Sin esperar 3 meses. En 10 días lo tienes funcionando.

---

### Versión Corta (Para Redes Sociales)

**Post LinkedIn/Instagram:**
> 5 preguntas que todo dueño de negocio debería poder responder HOY:
>
> 1. ¿Cuánta plata tengo?
> 2. ¿Estoy ganando?
> 3. ¿Cuánto me queda de cada venta?
> 4. ¿Cuánto debo vender mínimo?
> 5. ¿Cuánto aguanto sin vender?
>
> Si dudaste en alguna, tu negocio necesita claridad.
>
> En MéTRIK conectamos tus operaciones con estas 5 respuestas. En 10 días.
>
> #ClaridadFinanciera #PYMEs #Dashboard #Negocios

---

### Versión Email Marketing

**Asunto:** Las 5 preguntas que definen si tu negocio sobrevive

**Cuerpo:**
> Hola [Nombre],
>
> Después de trabajar con decenas de empresas, descubrí que los dueños de negocio se hacen las mismas 5 preguntas cada noche:
>
> 1. ¿Cuánta plata tengo? (¿Puedo pagar nómina?)
> 2. ¿Estoy ganando? (¿Vale la pena todo esto?)
> 3. ¿Cuánto me queda de cada venta? (¿Soy eficiente?)
> 4. ¿Cuánto debo vender mínimo? (¿Cuál es mi meta de supervivencia?)
> 5. ¿Cuánto aguanto sin vender? (¿Tengo colchón?)
>
> El problema: la mayoría no puede responderlas con certeza.
>
> Los datos están regados en Excel, WhatsApp, el ERP, la cabeza del contador...
>
> En MéTRIK conectamos todo eso en un dashboard que responde las 5 preguntas. Actualizado. Claro. En 10 días.
>
> ¿Te interesa ver cómo funciona?
>
> [Agenda 15 minutos conmigo]
>
> Mauricio
> MéTRIK

---

## USO INTERNO

### Para Calificar Prospectos

Preguntar en discovery:
> "De estas 5 preguntas, ¿cuáles puedes responder HOY con certeza?"
> 1. ¿Cuánta plata tienes disponible?
> 2. ¿Sabes si el mes pasado ganaste o perdiste?
> 3. ¿Sabes cuánto te queda de cada venta después de costos?
> 4. ¿Sabes cuánto debes vender mínimo para no perder?
> 5. ¿Sabes cuántos meses aguantas si no vendes nada?

**Interpretación:**
- 0-1 respuestas seguras → Necesita Framework completo
- 2-3 respuestas seguras → Necesita módulos específicos
- 4-5 respuestas seguras → Probablemente no es cliente ideal (o necesita optimización)

### Para Definir Alcance de Proyecto

| Si el cliente no puede responder... | Módulo prioritario |
|-------------------------------------|-------------------|
| #1 ¿Cuánta plata tengo? | Comercial + Tesorería |
| #2 ¿Estoy ganando? | Operaciones + Costos |
| #3 ¿Cuánto me queda? | Operaciones + Eficiencia |
| #4 ¿Cuánto debo vender? | Comercial + Costos Fijos |
| #5 ¿Cuánto aguanto? | Tesorería + Proyecciones |

---

## MÉTRICAS DE ÉXITO DEL FRAMEWORK

Un proyecto MéTRIK es exitoso cuando el cliente puede:

- [ ] Ver respuesta a las 5 preguntas en menos de 30 segundos
- [ ] Actualizar datos sin depender de nadie
- [ ] Recibir alertas automáticas cuando algo está mal
- [ ] Tomar decisiones basadas en números, no en intuición
- [ ] Explicar su situación financiera a socios/inversionistas/bancos

---

## DIFERENCIADOR COMPETITIVO

| Consultora Tradicional | MéTRIK |
|------------------------|--------|
| Entrega reportes de 50 páginas | Entrega 5 números claros |
| Usa jerga financiera | Usa preguntas simples |
| Toma 3-6 meses | Toma 10 días |
| Cuesta $30-80M | Cuesta $5-15M |
| Requiere capacitación | Se entiende solo |
| Se desactualiza | Se actualiza automático |

---

**FIN DEL DOCUMENTO**

---

*Documento estratégico MéTRIK*  
*Los 5 Indicadores Financieros Core*  
*Versión 1.0 - Diciembre 2025*
