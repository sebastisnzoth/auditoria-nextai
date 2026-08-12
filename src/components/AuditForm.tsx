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

const htmlES = `
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
    <div class="q"><label>¿Cuántas habitaciones o unidades tienen?</label><input type="text"></div>
    <div class="q"><label>¿Cuántas personas trabajan actualmente en la posada?</label><input type="text"></div>
    <div class="q"><label>¿Cuál es su temporada de mayor ocupación?</label><input type="text"></div>
    <div class="q"><label>¿Y cuáles son los meses más difíciles?</label><input type="text"></div>
    <div class="q"><label>¿Cuál consideran que es hoy el principal problema de la posada?</label><textarea></textarea></div>
    <label>Notas</label><textarea></textarea>
  </section>
  <section class="card">
    <h2>2. Reservas y ventas</h2>
    <div class="q"><label>¿Por dónde reciben actualmente las reservas?</label>
      <div class="opts">
        <label><input type="checkbox"> Booking</label><label><input type="checkbox"> Airbnb</label>
        <label><input type="checkbox"> WhatsApp</label><label><input type="checkbox"> Instagram</label>
        <label><input type="checkbox"> Google</label><label><input type="checkbox"> Página web</label>
        <label><input type="checkbox"> Teléfono</label><label><input type="checkbox"> Otros</label>
      </div>
    </div>
    <div class="q"><label>¿Qué porcentaje aproximado de las reservas es directo?</label><input type="text"></div>
    <div class="q"><label>¿Qué plataforma genera más reservas?</label><input type="text"></div>
    <div class="q"><label>¿Tienen página web propia?</label><input type="text"></div>
    <div class="q"><label>¿La página permite reservar directamente?</label><input type="text"></div>
    <div class="q"><label>¿Qué sistema utilizan para controlar disponibilidad y reservas?</label><input type="text"></div>
    <div class="q"><label>¿Alguna vez pierden una reserva porque tardaron en responder?</label><textarea></textarea></div>
    <label>Notas</label><textarea></textarea>
  </section>
  <section class="card">
    <h2>3. WhatsApp</h2>
    <div class="q"><label>¿Utilizan WhatsApp Business?</label><input type="text"></div>
    <div class="q"><label>¿Cuántas consultas reciben aproximadamente por día?</label><input type="text"></div>
    <div class="q"><label>¿Quién responde esos mensajes?</label><input type="text"></div>
    <div class="q"><label>¿Cuánto suelen tardar en responder?</label><input type="text"></div>
    <div class="q"><label>¿Qué sucede con las consultas que llegan de noche?</label><textarea></textarea></div>
    <div class="q"><label>¿Qué preguntas hacen los huéspedes una y otra vez?</label><textarea></textarea></div>
    <div class="q"><label>¿Atienden en portugués, español e inglés?</label><input type="text"></div>
    <div class="q"><label>¿Tienen respuestas automáticas configuradas?</label><input type="text"></div>
    <div class="key">
      <label>Pregunta clave: ¿Cuántas consultas creen que reciben por WhatsApp pero finalmente no terminan en una reserva?</label>
      <textarea></textarea>
    </div>
  </section>
  <section class="card">
    <h2>4. Atención al huésped</h2>
    <div class="q"><label>¿Cómo realizan actualmente el check-in?</label><textarea></textarea></div>
    <div class="q"><label>¿Envían información antes de que llegue el huésped?</label><textarea></textarea></div>
    <div class="q"><label>¿El huésped recibe automáticamente ubicación, horarios, reglas y servicios?</label><textarea></textarea></div>
    <div class="q"><label>Durante la estadía, ¿qué consultas se repiten?</label><textarea></textarea></div>
    <div class="q"><label>¿Cómo gestionan solicitudes o problemas del huésped?</label><textarea></textarea></div>
    <div class="q"><label>¿Envían algún mensaje después del check-out?</label><textarea></textarea></div>
    <div class="q"><label>¿Solicitan reseñas en Google, Booking u otras plataformas?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>5. Procesos internos</h2>
    <div class="q"><label>¿Cómo organizan la limpieza de las habitaciones?</label><textarea></textarea></div>
    <div class="q"><label>¿Cómo comunican habitaciones que entran y salen?</label><textarea></textarea></div>
    <div class="q"><label>¿Cómo gestionan mantenimiento?</label><textarea></textarea></div>
    <div class="q"><label>¿Qué tareas administrativas se hacen manualmente?</label><textarea></textarea></div>
    <div class="q"><label>¿Hay información que el personal tenga que copiar de un sistema a otro?</label><textarea></textarea></div>
    <div class="key">
      <label>Pregunta clave: Si pudieran eliminar mañana una tarea repetitiva del trabajo diario, ¿cuál elegirían?</label>
      <textarea></textarea>
    </div>
  </section>
  <section class="card">
    <h2>6. Marketing y recuperación de huéspedes</h2>
    <div class="q"><label>¿Tienen una base de datos de antiguos huéspedes?</label><input type="text"></div>
    <div class="q"><label>¿Guardan los contactos de quienes consultaron pero no reservaron?</label><input type="text"></div>
    <div class="q"><label>¿Vuelven a contactar a antiguos huéspedes?</label><input type="text"></div>
    <div class="q"><label>¿Realizan promociones para temporada baja?</label><input type="text"></div>
    <div class="q"><label>¿Utilizan Instagram y Facebook regularmente?</label><input type="text"></div>
    <div class="q"><label>¿Realizan publicidad paga?</label><input type="text"></div>
    <div class="q"><label>¿Tienen alguna estrategia para conseguir más reservas directas y depender menos de las plataformas?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>7. Automatización e Inteligencia Artificial</h2>
    <div class="q"><label>¿Utilizan actualmente alguna automatización?</label><textarea></textarea></div>
    <div class="q"><label>¿Utilizan inteligencia artificial en alguna parte del negocio?</label><textarea></textarea></div>
    <div class="q"><label>¿Les interesaría que un asistente pudiera responder consultas las 24 horas?</label><textarea></textarea></div>
    <div class="q"><label>¿Les sería útil atender automáticamente en portugués, español e inglés?</label><textarea></textarea></div>
    <div class="q"><label>¿Les interesaría que el sistema recopilara automáticamente fechas, cantidad de huéspedes y datos de contacto antes de pasar la conversación a una persona?</label><textarea></textarea></div>
    <div class="q"><label>¿Qué procesos NO quisieran automatizar y prefieren mantener con atención humana?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>8. Objetivos</h2>
    <div class="q"><label>1. Primera mejora prioritaria</label><input type="text"></div>
    <div class="q"><label>2. Segunda mejora prioritaria</label><input type="text"></div>
    <div class="q"><label>3. Tercera mejora prioritaria</label><input type="text"></div>
    <div class="q"><label>Si dentro de tres meses esta implementación fuera un éxito, ¿qué tendría que haber mejorado para que dijeran “valió la pena”?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>9. Diagnóstico NextIA</h2>
    <div class="q"><label>Problema principal detectado</label><textarea></textarea></div>
    <div class="q"><label>Oportunidad Nº1</label><textarea></textarea></div>
    <div class="q"><label>Oportunidad Nº2</label><textarea></textarea></div>
    <div class="q"><label>Oportunidad Nº3</label><textarea></textarea></div>
    <div class="q"><label>Prioridad</label><select><option>Alta</option><option>Media</option><option>Baja</option></select></div>
    <div class="q"><label>Solución recomendada</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>Pregunta de cierre</h2>
    <div class="key">
      <label>“De todo lo que hablamos, si pudiéramos solucionar solamente un problema durante las próximas semanas, ¿cuál tendría mayor impacto para ustedes?”</label>
      <textarea></textarea>
    </div>
    <h2 style="margin-top:24px">Próximo paso</h2>
    <div class="opts">
      <label><input type="checkbox"> Enviar diagnóstico</label>
      <label><input type="checkbox"> Preparar propuesta</label>
      <label><input type="checkbox"> Presentar Plan 1</label>
      <label><input type="checkbox"> Presentar Plan 2</label>
      <label><input type="checkbox"> Presentar Plan 3</label>
      <label><input type="checkbox"> Agendar segunda reunión</label>
    </div>
    <div class="actions" style="display:flex; gap:12px; justify-content:flex-end; margin-top:24px; flex-wrap:wrap;">
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.downloadPDF()">Descargar PDF</button>
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.location.href='mailto:sebastianzoth@gmail.com?subject=Nueva Auditoría'">Enviar por Email</button>
      <button class="primary" style="background:#0f766e; color:#fff; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="alert('Complete el formulario y use Descargar PDF para conservar una copia.')">Finalizar auditoría</button>
    </div>
  </section>
  <div class="footer">NextIA Florianópolis — Auditoría de automatización, reservas y atención al huésped.</div>
</div>
`;

const htmlPT = `
<div class="wrap">
  <section class="hero">
    <h1>NEXTIA FLORIANÓPOLIS</h1>
    <p>Auditoria Gratuita de 30 Minutos — Pousada Águas da Cachoeira</p>
  </section>
  <section class="card">
    <h2>Dados iniciais</h2>
    <div class="grid">
      <div><label>Empresa</label><input type="text" value="Águas da Cachoeira"></div>
      <div><label>Data</label><input type="date"></div>
      <div><label>Responsável</label><input type="text"></div>
      <div><label>Cargo</label><input type="text"></div>
      <div><label>Telefone / WhatsApp</label><input type="tel"></div>
    </div>
  </section>
  <section class="card">
    <h2>1. Entender o negócio</h2>
    <div class="q"><label>Quantos quartos ou unidades vocês têm?</label><input type="text"></div>
    <div class="q"><label>Quantas pessoas trabalham atualmente na pousada?</label><input type="text"></div>
    <div class="q"><label>Qual é a sua temporada de maior ocupação?</label><input type="text"></div>
    <div class="q"><label>E quais são os meses mais difíceis?</label><input type="text"></div>
    <div class="q"><label>Qual vocês consideram hoje o principal problema da pousada?</label><textarea></textarea></div>
    <label>Notas</label><textarea></textarea>
  </section>
  <section class="card">
    <h2>2. Reservas e vendas</h2>
    <div class="q"><label>Por onde vocês recebem as reservas atualmente?</label>
      <div class="opts">
        <label><input type="checkbox"> Booking</label><label><input type="checkbox"> Airbnb</label>
        <label><input type="checkbox"> WhatsApp</label><label><input type="checkbox"> Instagram</label>
        <label><input type="checkbox"> Google</label><label><input type="checkbox"> Website</label>
        <label><input type="checkbox"> Telefone</label><label><input type="checkbox"> Outros</label>
      </div>
    </div>
    <div class="q"><label>Qual é a porcentagem aproximada de reservas diretas?</label><input type="text"></div>
    <div class="q"><label>Qual plataforma gera mais reservas?</label><input type="text"></div>
    <div class="q"><label>Vocês têm um site próprio?</label><input type="text"></div>
    <div class="q"><label>O site permite reservar diretamente?</label><input type="text"></div>
    <div class="q"><label>Que sistema vocês usam para controlar disponibilidade e reservas?</label><input type="text"></div>
    <div class="q"><label>Alguma vez perderam uma reserva por demora na resposta?</label><textarea></textarea></div>
    <label>Notas</label><textarea></textarea>
  </section>
  <section class="card">
    <h2>3. WhatsApp</h2>
    <div class="q"><label>Vocês usam WhatsApp Business?</label><input type="text"></div>
    <div class="q"><label>Quantas consultas recebem aproximadamente por dia?</label><input type="text"></div>
    <div class="q"><label>Quem responde essas mensagens?</label><input type="text"></div>
    <div class="q"><label>Quanto tempo costumam levar para responder?</label><input type="text"></div>
    <div class="q"><label>O que acontece com as consultas que chegam à noite?</label><textarea></textarea></div>
    <div class="q"><label>Quais perguntas os hóspedes fazem repetidamente?</label><textarea></textarea></div>
    <div class="q"><label>Atendem em português, espanhol e inglês?</label><input type="text"></div>
    <div class="q"><label>Têm respostas automáticas configuradas?</label><input type="text"></div>
    <div class="key">
      <label>Pergunta chave: Quantas consultas vocês acham que recebem pelo WhatsApp, mas que não se convertem em reserva?</label>
      <textarea></textarea>
    </div>
  </section>
  <section class="card">
    <h2>4. Atendimento ao hóspede</h2>
    <div class="q"><label>Como fazem o check-in atualmente?</label><textarea></textarea></div>
    <div class="q"><label>Enviam informações antes do hóspede chegar?</label><textarea></textarea></div>
    <div class="q"><label>O hóspede recebe automaticamente localização, horários, regras e serviços?</label><textarea></textarea></div>
    <div class="q"><label>Durante a estadia, quais consultas se repetem?</label><textarea></textarea></div>
    <div class="q"><label>Como gerenciam solicitações ou problemas do hóspede?</label><textarea></textarea></div>
    <div class="q"><label>Enviam alguma mensagem após o check-out?</label><textarea></textarea></div>
    <div class="q"><label>Pedem avaliações no Google, Booking ou outras plataformas?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>5. Processos internos</h2>
    <div class="q"><label>Como organizam a limpeza dos quartos?</label><textarea></textarea></div>
    <div class="q"><label>Como comunicam quartos que entram e saem?</label><textarea></textarea></div>
    <div class="q"><label>Como gerenciam a manutenção?</label><textarea></textarea></div>
    <div class="q"><label>Quais tarefas administrativas são feitas manualmente?</label><textarea></textarea></div>
    <div class="q"><label>Existe alguma informação que a equipe precise copiar de um sistema para outro?</label><textarea></textarea></div>
    <div class="key">
      <label>Pergunta chave: Se pudessem eliminar amanhã uma tarefa repetitiva do trabalho diário, qual escolheriam?</label>
      <textarea></textarea>
    </div>
  </section>
  <section class="card">
    <h2>6. Marketing e recuperação de hóspedes</h2>
    <div class="q"><label>Têm uma base de dados de hóspedes antigos?</label><input type="text"></div>
    <div class="q"><label>Guardam os contatos de quem consultou mas não reservou?</label><input type="text"></div>
    <div class="q"><label>Voltam a contatar hóspedes antigos?</label><input type="text"></div>
    <div class="q"><label>Realizam promoções para baixa temporada?</label><input type="text"></div>
    <div class="q"><label>Usam Instagram e Facebook regularmente?</label><input type="text"></div>
    <div class="q"><label>Fazem anúncios pagos?</label><input type="text"></div>
    <div class="q"><label>Têm alguma estratégia para conseguir mais reservas diretas e depender menos de las plataformas?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>7. Automatização e Inteligência Artificial</h2>
    <div class="q"><label>Usam atualmente alguma automatização?</label><textarea></textarea></div>
    <div class="q"><label>Usam inteligência artificial em alguma parte do negócio?</label><textarea></textarea></div>
    <div class="q"><label>Gostariam que um assistente pudesse responder consultas 24 horas?</label><textarea></textarea></div>
    <div class="q"><label>Seria útil atender automaticamente em português, espanhol e inglês?</label><textarea></textarea></div>
    <div class="q"><label>Gostariam que o sistema coletasse automaticamente datas, quantidade de hóspedes e dados de contato antes de passar a conversa para uma pessoa?</label><textarea></textarea></div>
    <div class="q"><label>Quais processos NÃO gostariam de automatizar e preferem manter com atendimento humano?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>8. Objetivos</h2>
    <div class="q"><label>1. Primeira melhoria prioritária</label><input type="text"></div>
    <div class="q"><label>2. Segunda melhoria prioritária</label><input type="text"></div>
    <div class="q"><label>3. Terceira melhoria prioritária</label><input type="text"></div>
    <div class="q"><label>Se dentro de três meses esta implementação fosse um sucesso, o que teria que ter melhorado para que dissessem “valeu a pena”?</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>9. Diagnóstico NextIA</h2>
    <div class="q"><label>Problema principal detectado</label><textarea></textarea></div>
    <div class="q"><label>Oportunidade Nº1</label><textarea></textarea></div>
    <div class="q"><label>Oportunidade Nº2</label><textarea></textarea></div>
    <div class="q"><label>Oportunidade Nº3</label><textarea></textarea></div>
    <div class="q"><label>Prioridad</label><select><option>Alta</option><option>Média</option><option>Baixa</option></select></div>
    <div class="q"><label>Solução recomendada</label><textarea></textarea></div>
  </section>
  <section class="card">
    <h2>Pergunta de encerramento</h2>
    <div class="key">
      <label>“De tudo o que conversamos, se pudéssemos solucionar apenas um problema durante as próximas semanas, qual teria maior impacto para vocês?”</label>
      <textarea></textarea>
    </div>
    <h2 style="margin-top:24px">Próximo paso</h2>
    <div class="opts">
      <label><input type="checkbox"> Enviar diagnóstico</label>
      <label><input type="checkbox"> Preparar proposta</label>
      <label><input type="checkbox"> Apresentar Plano 1</label>
      <label><input type="checkbox"> Apresentar Plano 2</label>
      <label><input type="checkbox"> Apresentar Plano 3</label>
      <label><input type="checkbox"> Agendar segunda reunião</label>
    </div>
    <div class="actions" style="display:flex; gap:12px; justify-content:flex-end; margin-top:24px; flex-wrap:wrap;">
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.downloadPDF()">Baixar PDF</button>
      <button class="secondary" style="background:#e5e7eb; color:#111827; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="window.location.href='mailto:sebastianzoth@gmail.com?subject=Nova Auditoria'">Enviar por Email</button>
      <button class="primary" style="background:#0f766e; color:#fff; border:0; border-radius:10px; padding:12px 18px; cursor:pointer; font-weight:700;" onclick="alert('Complete o formulário e use Baixar PDF para guardar uma cópia.')">Finalizar auditoria</button>
    </div>
  </section>
  <div class="footer">NextIA Florianópolis — Auditoria de automação, reservas e atendimento ao hóspede.</div>
</div>
`;

export default function AuditForm({ lang }: { lang: 'es' | 'pt' }) {
  const htmlContent = lang === 'pt' ? htmlPT : htmlES;

  useEffect(() => {
    (window as any).downloadPDF = downloadPDF;
    const styleId = 'audit-form-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        :root{--bg:#f4f7fb;--card:#ffffff;--text:#1f2937;--muted:#6b7280;--accent:#0f766e;--accent2:#14b8a6;--line:#d1d5db;}
        *{box-sizing:border-box}
        .wrap{max-width:980px;margin:32px auto;padding:0 18px 50px; font-family:Arial,Helvetica,sans-serif; background:var(--bg); color:var(--text); line-height:1.5;}
        .hero{background:linear-gradient(135deg,#0f766e,#115e59);color:#fff;border-radius:18px;padding:30px;margin-bottom:22px;box-shadow:0 10px 30px rgba(0,0,0,.10);}
        .hero h1{margin:0 0 6px;font-size:30px}
        .hero p{margin:0;opacity:.9}
        .card{background:var(--card);border-radius:16px;padding:24px;margin:18px 0;box-shadow:0 6px 18px rgba(15,23,42,.06);}
        h2{color:var(--accent);border-bottom:2px solid #ccfbf1;padding-bottom:8px;margin-top:0;font-size:21px;}
        .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
        label{display:block;font-weight:600;margin-bottom:6px}
        input[type=text], input[type=tel], input[type=date], textarea, select{width:100%;padding:11px 12px;border:1px solid var(--line);border-radius:10px;font-size:15px;background:#fff;}
        .footer{text-align:center;color:var(--muted);font-size:13px;margin-top:24px;}
        .actions{display:flex;gap:12px;justify-content:flex-end;margin-top:24px;flex-wrap:wrap}
        button{
          border:0;
          border-radius:10px;
          padding:12px 18px;
          cursor:pointer;
          font-weight:700;
        }
        .primary{background:var(--accent);color:#fff}
        .secondary{background:#e5e7eb;color:#111827}
        .q{margin:12px 0}
        .q label{font-weight:500}
        .opts{display:flex;gap:14px;flex-wrap:wrap;margin-top:6px}
        .opts label{font-weight:400;display:flex;align-items:center;gap:6px}
        .key{
          background:#ecfeff;
          border-left:5px solid var(--accent2);
          padding:16px;
          border-radius:10px;
          margin-top:16px;
        }
        @media(max-width:700px){.grid{grid-template-columns:1fr}.hero h1{font-size:24px}}
      `;
      document.head.appendChild(style);
    }
    return () => {
      const style = document.getElementById(styleId);
      if (style) document.head.removeChild(style);
      (window as any).downloadPDF = undefined;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
