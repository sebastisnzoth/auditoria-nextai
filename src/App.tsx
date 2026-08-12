
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AuditForm from './components/AuditForm';

export default function App() {
  const [lang, setLang] = useState<'es' | 'pt'>('es');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-6">
        <div className="flex justify-end gap-4 mb-4">
          <button onClick={() => setLang('es')} className={`px-4 py-2 rounded-full ${lang === 'es' ? 'bg-white text-indigo-900' : 'bg-white/10 text-white'}`}>ES</button>
          <button onClick={() => setLang('pt')} className={`px-4 py-2 rounded-full ${lang === 'pt' ? 'bg-white text-indigo-900' : 'bg-white/10 text-white'}`}>PT</button>
        </div>
        <AuditForm lang={lang} />
    </div>
  );
}

