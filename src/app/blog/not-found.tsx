import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-2xl text-center bg-white p-12 rounded-2xl shadow-2xl">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full text-slate-500 mb-6">
            <Search className="w-8 h-8" />
          </div>
        </div>
        
        <div className="text-6xl font-bold text-red-500 mb-4 leading-none">
          404
        </div>
        
        <h1 className="text-3xl font-semibold text-slate-800 mb-4">
          Článok nenájdený
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
          Bohužiaľ, článok ktorý hľadáte neexistuje alebo bol presunutý. 
          Skúste sa vrátiť na hlavnú stránku blogu alebo použiť vyhľadávanie.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 hover:-translate-y-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Späť na blog
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-600 rounded-lg font-medium hover:bg-slate-200 transition-all duration-200 hover:-translate-y-1"
          >
            <Home className="w-4 h-4" />
            Domov
          </Link>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">
            Možno vás zaujme
          </h2>
          
          <div className="grid gap-4 max-w-md mx-auto">
            <Link 
              href="/blog/ako-zacat-investovat-s-malym-kapitalom"
              className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                Ako začať investovať s malým kapitálom
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Praktický návod pre začiatočníkov
              </p>
            </Link>
            
            <Link 
              href="/blog/financna-nezavislost-myty-a-realita"
              className="block p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-all duration-200 hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-slate-800 mb-2">
                Finančná nezávislosť: Mýty a realita
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rozbíjame najčastejšie mýty
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 