# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Audiencia principal: el docente evaluador del módulo, Luis David Tobón López (Facultad de Postgrado, Universidad Privada del Valle). El portafolio se usa exclusivamente para la entrega y calificación del módulo, no como pieza pública de marketing personal.

## Product Purpose

Portafolio académico digital de Zulema Vicente Paca (Maestría en Educación Superior V4, módulo "Innovación y Tecnología de la Educación Superior"). Documenta y presenta las 9 prácticas realizadas durante el módulo, la evolución del aprendizaje a lo largo del tiempo, una reflexión final y una autovaloración cualitativa/cuantitativa, para ser entregado y evaluado por el docente. Éxito = comunicar con claridad el trabajo realizado, la reflexión pedagógica y el criterio profesional aplicado, facilitando la revisión y calificación.

## Positioning

No es un producto comercial; es evidencia académica individual. Su diferenciador frente a una entrega plana (documento/PDF tradicional) es presentar el recorrido de aprendizaje como una experiencia navegable e interactiva (línea de tiempo, modal por práctica, biblioteca de recursos, exportación a PDF) que refleja las competencias de diseño UX/UI de la autora.

## Operating Context

- Entrega de un módulo de posgrado; el docente revisará el sitio (probablemente desplegado o en local) como parte de la evaluación.
- Cada una de las 9 prácticas tiene: descripción, contribución propia, reflexión, herramientas usadas, y evidencias (imágenes, a veces enlaces a Drive/Slides/Canva/video/podcast).
- Existe función de exportar a PDF (`PdfExportModal`) para generar un documento de entrega.
- Modo claro/oscuro disponible.

## Capabilities and Constraints

- Stack existente: React 19 + Vite + Tailwind CSS v4, TypeScript, `motion` (animaciones), `lucide-react` (iconos), `canvas-confetti`.
- Contenido y datos centralizados en `src/data/portfolioData.ts` (información de la estudiante, las 9 prácticas, timeline, reflexión final, autovaloración, biblioteca de recursos).
- Las imágenes de las 9 prácticas son actualmente placeholders de Unsplash con comentarios `NOTA PARA ZULEMA: reemplazar por...`. Son temporales: la autora las reemplazará después por sus capturas/evidencias reales. El diseño debe funcionar bien tanto con placeholders como cuando se sustituyan por imágenes reales (aspect ratios, distintos tamaños/orientaciones).
- Enlaces externos reales (Google Drive, Slides, Canva, SharePoint) ya están documentados en varias prácticas y en la biblioteca de recursos; son evidencia real, no inventar más.
- Repo contiene remanentes de un scaffold de "AI Studio" (README, `@google/genai`, `express`, `GEMINI_API_KEY`) que no están relacionados con el propósito actual del portafolio; no asumir que son parte del producto a menos que se indique lo contrario.

## Brand Commitments

Ninguna identidad visual institucional obligatoria confirmada. El sistema visual actual (Tailwind, modo oscuro, acento de color distinto por práctica) es un punto de partida libre de evolucionar; no hay restricción de marca que preservar.

## Evidence on Hand

- Datos reales de la estudiante, prácticas, reflexión final y autovaloración ya están en `src/data/portfolioData.ts` (contenido textual confirmado, no inventar).
- Imágenes de las 9 prácticas: placeholders de Unsplash, pendientes de reemplazo por evidencia real de la autora (no inventar evidencia adicional).
- Enlaces reales a Drive/Slides/Canva/SharePoint/video/podcast ya presentes en varias prácticas y en la sección de recursos.

## Product Principles

1. Priorizar la claridad de lectura y navegación para un evaluador único (docente), no para conversión ni tráfico masivo.
2. El diseño debe resistir la sustitución futura de imágenes placeholder por evidencia real sin romperse.
3. El contenido textual y los enlaces existentes son verdad del producto: no inventar logros, evidencia o testimonios adicionales.
4. El sistema visual es libre de evolucionar; no hay restricciones de marca institucional que preservar.
