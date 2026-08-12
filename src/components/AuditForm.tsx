import { useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const downloadPDF = async () => {
  const element = document.querySelector('.wrap') as HTMLElement;
  if (!element) return;
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  pdf.save('auditoria.pdf');
};

const htmlContent = `
<div class="wrap">
  <section class="hero">
    <h1>NEXTIA FLORIANÓPOLIS</h1>
    <p>Auditoría Gratuita de 30 Minutos — Posada Águas da Cachoeira</p>
  </section>

  <section class="card">
    <h2>Datos iniciales</h2>
    <div class="grid">
      <div><label>Empresa</label><input type="text" value="Águas da Cachoeira"></div>
      <div><label>Fecha</label><input type="date"></div>
      <div><label>Responsable</label><input type="text"></div>
      <div><label>Cargo</label><input type="text"></div>
      <div><label>Teléfono / WhatsApp</label><input type="tel"></div>
    </div>
  </section>

  <section class="card">
    <h2>1. Entender el negocio</h2>
    <div class="q"><div class="question">¿Cuántas habitaciones o unidades tienen?</div><input type="text"></div>
    <div class="q"><div class="question">¿Cuántas personas trabajan actualmente en la posada?</div><input type="text"></div>
    <div class="q"><div class="question">¿Cuál es su temporada de mayor ocupación?</div><input type="text"></div>
    <div class="q"><div class="question">¿Y cuáles son los meses más difíciles?</div><input type="text"></div>
    <div class="q"><div class="question">¿Cuál consideran que es hoy el principal problema de la posada?</div><textarea></textarea></div>
    <label>Notas</label><textarea></textarea>
  </section>

  <section class="card">
    <h2>2. Reservas y ventas</h2>
    <div class="q">
      <div class="question">¿Por dónde reciben actualmente las reservas?</div>
      <div class="opts">
        <label class="choice"><input type="checkbox"> Booking</label>
        <label class="choice"><input type="checkbox"> Airbnb</label>
        <label class="choice"><input type="checkbox"> WhatsApp</label>
        <label class="choice"><input type="checkbox"> Instagram</label>
        <label class="choice"><input type="checkbox"> Google</label>
        <label class="choice"><input type="checkbox"> Página web</label>
        <label class="choice"><input type="checkbox"> Teléfono</label>
        <label class="choice"><input type="checkbox"> Otros</label>
      </div>
    </div>
    <div class="q"><div class="question">Aproximadamente, ¿qué porcentaje de las reservas es directo?</div><input type="text"></div>
    <div class="q"><div class="question">¿Qué plataforma genera más reservas?</div><input type="text"></div>

    <div class="q yesno"><div class="question">¿Tienen página web propia?</div>
      <div class="opts"><label class="choice"><input type="checkbox" data-value="si"> Sí</label><label class="choice"><input type="checkbox" data-value="no"> No</label></div>
    </div>
    <div class="q yesno"><div class="question">¿La página permite reservar directamente?</div>
      <div class="opts"><label class="choice"><input type="checkbox" data-value="si"> Sí</label><label class="choice"><input type="checkbox" data-value="no"> No</label></div>
    </div>
    <div class="q"><div class="question">¿Qué sistema utilizan para controlar disponibilidad y reservas?</div><input type="text"></div>
    <div class="q yesno"><div class="question">¿Alguna vez pierden una reserva porque tardaron en responder?</div>
      <div class="opts"><label class="choice"><input type="checkbox" data-value="si"> Sí</label><label class="choice"><input type="checkbox" data-value="no"> No</label></div>
    </div>
    <label>Notas</label><textarea></textarea>
  </section>

  <section class="card">
    <h2>3. WhatsApp</h2>
    <div class="q yesno"><div class="question">¿Utilizan WhatsApp Business?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
    <div class="q"><div class="question">¿Cuántas consultas reciben aproximadamente por día?</div><input type="text"></div>
    <div class="q"><div class="question">¿Quién responde esos mensajes?</div><input type="text"></div>
    <div class="q"><div class="question">¿Cuánto suelen tardar en responder?</div><input type="text"></div>
    <div class="q"><div class="question">¿Qué sucede con las consultas que llegan de noche?</div><textarea></textarea></div>
    <div class="q"><div class="question">¿Qué preguntas hacen los huéspedes una y otra vez?</div><textarea></textarea></div>

    <div class="q"><div class="question">¿En qué idiomas atienden?</div>
      <div class="opts">
        <label class="choice"><input type="checkbox"> Portugués</label>
        <label class="choice"><input type="checkbox"> Español</label>
        <label class="choice"><input type="checkbox"> Inglés</label>
      </div>
      <div class="hint">Puede marcar más de una opción.</div>
    </div>

    <div class="q yesno"><div class="question">¿Tienen respuestas automáticas configuradas?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>

    <div class="key"><div class="question">Pregunta clave: ¿Cuántas consultas creen que reciben por WhatsApp pero finalmente no terminan en una reserva?</div><textarea></textarea></div>
  </section>

  <section class="card">
    <h2>4. Atención al huésped</h2>
    <div class="q"><div class="question">¿Cómo realizan actualmente el check-in?</div><textarea></textarea></div>
    <div class="q yesno"><div class="question">¿Envían información antes de que llegue el huésped?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
    <div class="q yesno"><div class="question">¿El huésped recibe automáticamente ubicación, horarios, reglas y servicios?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
    <div class="q"><div class="question">Durante la estadía, ¿qué consultas se repiten?</div><textarea></textarea></div>
    <div class="q"><div class="question">¿Cómo gestionan solicitudes o problemas del huésped?</div><textarea></textarea></div>
    <div class="q yesno"><div class="question">¿Envían algún mensaje después del check-out?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
    <div class="q yesno"><div class="question">¿Solicitan reseñas en Google, Booking u otras plataformas?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
  </section>

  <section class="card">
    <h2>5. Procesos internos</h2>
    <div class="q"><div class="question">¿Cómo organizan la limpieza de las habitaciones?</div><textarea></textarea></div>
    <div class="q"><div class="question">¿Cómo comunican habitaciones que entran y salen?</div><textarea></textarea></div>
    <div class="q"><div class="question">¿Cómo gestionan mantenimiento?</div><textarea></textarea></div>
    <div class="q"><div class="question">¿Qué tareas administrativas se hacen manualmente?</div><textarea></textarea></div>
    <div class="q yesno"><div class="question">¿Hay información que el personal tenga que copiar de un sistema a otro?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div>
    </div>
    <div class="key"><div class="question">Pregunta clave: Si pudieran eliminar mañana una tarea repetitiva del trabajo diario, ¿cuál elegirían?</div><textarea></textarea></div>
  </section>

  <section class="card">
    <h2>6. Marketing y recuperación de huéspedes</h2>
    <div class="q yesno"><div class="question">¿Tienen una base de datos de antiguos huéspedes?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Guardan los contactos de quienes consultaron pero no reservaron?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Vuelven a contactar a antiguos huéspedes?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Realizan promociones para temporada baja?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>

    <div class="q"><div class="question">¿Qué redes sociales utilizan regularmente?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Instagram</label><label class="choice"><input type="checkbox"> Facebook</label><label class="choice"><input type="checkbox"> TikTok</label><label class="choice"><input type="checkbox"> Otras</label></div>
    </div>

    <div class="q yesno"><div class="question">¿Realizan publicidad paga?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Tienen alguna estrategia para conseguir más reservas directas y depender menos de las plataformas?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
  </section>

  <section class="card">
    <h2>7. Automatización e Inteligencia Artificial</h2>
    <div class="q yesno"><div class="question">¿Utilizan actualmente alguna automatización?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Utilizan inteligencia artificial en alguna parte del negocio?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q yesno"><div class="question">¿Les interesaría que un asistente pudiera responder consultas las 24 horas?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>

    <div class="q"><div class="question">¿En qué idiomas les sería útil que el sistema atendiera automáticamente?</div>
      <div class="opts"><label class="choice"><input type="checkbox"> Portugués</label><label class="choice"><input type="checkbox"> Español</label><label class="choice"><input type="checkbox"> Inglés</label></div>
    </div>

    <div class="q yesno"><div class="question">¿Les interesaría que el sistema recopilara automáticamente fechas, cantidad de huéspedes y datos de contacto antes de pasar la conversación a una persona?</div><div class="opts"><label class="choice"><input type="checkbox"> Sí</label><label class="choice"><input type="checkbox"> No</label></div></div>
    <div class="q"><div class="question">¿Qué procesos NO quisieran automatizar y prefieren mantener con atención humana?</div><textarea></textarea></div>
  </section>

  <section class="card">
    <h2>8. Objetivos</h2>
    <div class="q"><div class="question">1. Primera mejora prioritaria</div><input type="text"></div>
    <div class="q"><div class="question">2. Segunda mejora prioritaria</div><input type="text"></div>
    <div class="q"><div class="question">3. Tercera mejora prioritaria</div><input type="text"></div>
    <div class="q"><div class="question">Si dentro de tres meses esta implementación fuera un éxito, ¿qué tendría que haber mejorado para que dijeran “valió la pena”?</div><textarea></textarea></div>
  </section>

  <section class="card">
    <h2>9. Diagnóstico NextIA</h2>
    <div class="q"><div class="question">Problema principal detectado</div><textarea></textarea></div>
    <div class="q"><div class="question">Oportunidad Nº1</div><textarea></textarea></div>
    <div class="q"><div class="question">Oportunidad Nº2</div><textarea></textarea></div>
    <div class="q"><div class="question">Oportunidad Nº3</div><textarea></textarea></div>
    <div class="q"><div class="question">Prioridad</div>
      <div class="opts single-choice">
        <label class="choice"><input type="checkbox"> Alta</label>
        <label class="choice"><input type="checkbox"> Media</label>
        <label class="choice"><input type="checkbox"> Baja</label>
      </div>
    </div>
    <div class="q"><div class="question">Solución recomendada</div><textarea></textarea></div>
  </section>

  <section class="card">
    <h2>Pregunta de cierre</h2>
    <div class="key"><div class="question">“De todo lo que hablamos, si pudiéramos solucionar solamente un problema durante las próximas semanas, ¿cuál tendría mayor impacto para ustedes?”</div><textarea></textarea></div>
    <h2 style="margin-top:24px">Próximo paso</h2>
    <div class="opts">
      <label class="choice"><input type="checkbox"> Enviar diagnóstico</label>
      <label class="choice"><input type="checkbox"> Preparar propuesta</label>
      <label class="choice"><input type="checkbox"> Presentar Plan 1</label>
      <label class="choice"><input type="checkbox"> Presentar Plan 2</label>
      <label class="choice"><input type="checkbox"> Presentar Plan 3</label>
      <label class="choice"><input type="checkbox"> Agendar segunda reunión</label>
    </div>
    <div class="actions" style="display:flex; gap:12px; justify-content:center; margin-top:24px; flex-wrap:wrap;">
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.downloadPDF()">Descargar PDF</button>
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.location.href='mailto:sebastianzoth@gmail.com?subject=Nueva Auditoría'">Enviar por Email</button>
      <button class="primary" style="background:#0f766e; color:#fff; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="alert('Formulario listo. Puede imprimirlo o guardarlo como PDF.')">Finalizar auditoría</button>
    </div>
  </section>

  <div class="footer">NextIA Florianópolis — Auditoría de automatización, reservas y atención al huésped.</div>
</div>
`;

export default function AuditForm() {
  useEffect(() => {
    (window as any).downloadPDF = downloadPDF;
    const styleId = 'audit-form-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        :root{--bg:#f4f7fb; --card:#fff; --text:#1f2937; --muted:#6b7280; --accent:#0f766e; --accent2:#14b8a6; --line:#d1d5db;}
        *{box-sizing:border-box}
        .wrap{max-width:980px;margin:32px auto;padding:0 18px 50px; font-family:Arial,Helvetica,sans-serif; background:var(--bg); color:var(--text); line-height:1.5;}
        .hero{background:linear-gradient(135deg,#0f766e,#115e59);color:#fff;border-radius:18px;padding:30px;margin-bottom:22px;box-shadow:0 10px 30px rgba(0,0,0,.10);}
        .hero h1{margin:0 0 6px;font-size:30px}
        .hero p{margin:0;opacity:.9}
        .card{background:var(--card);border-radius:16px;padding:24px;margin:18px 0;box-shadow:0 6px 18px rgba(15,23,42,.06);}
        h2{color:var(--accent);border-bottom:2px solid #ccfbf1;padding-bottom:8px;margin-top:0;font-size:21px}
        .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        label{display:block;font-weight:600;margin-bottom:6px}
        input[type=text],input[type=tel],input[type=date],textarea,select{width:100%;padding:11px 12px;border:1px solid var(--line);border-radius:10px;font-size:15px;background:#fff}
        textarea{min-height:88px;resize:vertical}
        .q{margin:16px 0}
        .question{font-weight:600;margin-bottom:8px}
        .opts{display:flex;gap:10px;flex-wrap:wrap;margin-top:7px}
        .choice{display:inline-flex;align-items:center;gap:8px;font-weight:500;border:1px solid #cbd5e1;border-radius:10px;padding:9px 12px;background:#f8fafc;cursor:pointer}
        .choice input{width:18px;height:18px;accent-color:var(--accent);cursor:pointer}
        .key{background:#ecfeff;border-left:5px solid var(--accent2);padding:16px;border-radius:10px;margin-top:16px}
        .footer{text-align:center;color:var(--muted);font-size:13px;margin-top:24px}
        .hint{font-size:12px;color:var(--muted);margin-top:6px}
        @media(max-width:700px){.grid{grid-template-columns:1fr}.hero h1{font-size:24px}}
      `;
      document.head.appendChild(style);
    }
    
    // JS for logic
    document.querySelectorAll('.yesno').forEach(group => {
        const boxes = group.querySelectorAll('input[type="checkbox"]');
        boxes.forEach(box => box.addEventListener('change', () => {
          if ((box as HTMLInputElement).checked) boxes.forEach(other => { if (other !== box) (other as HTMLInputElement).checked = false; });
        }));
      });
      document.querySelectorAll('.single-choice').forEach(group => {
        const boxes = group.querySelectorAll('input[type="checkbox"]');
        boxes.forEach(box => box.addEventListener('change', () => {
          if ((box as HTMLInputElement).checked) boxes.forEach(other => { if (other !== box) (other as HTMLInputElement).checked = false; });
        }));
      });

    return () => {
      const style = document.getElementById(styleId);
      if (style) document.head.removeChild(style);
      (window as any).downloadPDF = undefined;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
