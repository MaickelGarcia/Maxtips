import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Trophy, Zap } from "lucide-react";
import { useState } from "react";

/**
 * MaxTips Landing Page
 * Design: Minimalism Deportivo Premium
 * - Color: Emerald Green (#10B981) primary, Deep Blue (#1E3A8A) secondary
 * - Typography: Poppins (display), Inter (body)
 * - Style: Clean, professional, data-focused
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const apkUrl = `${import.meta.env.BASE_URL}Maxtip.apk`;

  // Scroll listener for header background
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743654137/ZtPrRPETAjtZQMFgoPUpAt/maxtips-logo-Ji7s4RikjfnQPMCCDfrAqg.webp"
              alt="MaxTips Logo"
              className="h-8 w-8"
            />
            <span className="font-display font-bold text-xl text-slate-900">MaxTips</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Caracteristicas
            </a>
            <a href="#stats" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Resultados
            </a>
            <a href="#trust" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Confianza
            </a>
          </nav>
          <a href={apkUrl} download className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded">
            Descargar App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663743654137/ZtPrRPETAjtZQMFgoPUpAt/maxtips-hero-bg-8wssr88DK3936eevh967US.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                Predicciones que Aciertan
              </div>
              <h1 className="font-display font-bold text-slate-900 leading-tight">
                Pronosticos de Futbol que
                <span className="text-emerald-600"> Generan Ganancias</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                MaxTips utiliza analisis de datos avanzado para ofrecerte las mejores predicciones de
                futbol. Apuestas seguras, resultados comprobados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={apkUrl} download className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base px-8 py-6 rounded-lg h-auto shadow-lg hover:shadow-xl transition-all">
                  Descargar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="flex gap-6 pt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>Analisis en Tiempo Real</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span>68.7% de Precision</span>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743654137/ZtPrRPETAjtZQMFgoPUpAt/maxtips-prediction-card-fPmDHRa82SDCFd63TSJ8Ns.webp"
                alt="Prediction Card"
                className="max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-slate-900 mb-4">Por Que MaxTips?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Herramientas profesionales disenadas para apostadores que valoran precision sobre suerte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Analisis de Datos",
                description: "Algoritmos avanzados que procesan miles de variables para predecir resultados.",
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Historial Comprobado",
                description: "10,000+ predicciones exitosas. Transparencia total en nuestros resultados.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Actualizaciones en Vivo",
                description: "Recibe predicciones actualizadas minuto a minuto durante los partidos.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="mb-4 inline-block p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-slate-900 mb-3 text-lg">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Stats */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-slate-900 mb-6">Resultados que Hablan</h2>
              </div>

              {[
                { label: "Precision Promedio", value: "68.7%", icon: "Target" },
                { label: "Predicciones Exitosas", value: "10,248", icon: "Check" },
                { label: "Usuarios Activos", value: "45,000+", icon: "Users" },
                { label: "ROI Promedio", value: "+87.4%", icon: "TrendUp" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-emerald-600">{stat.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-3xl font-display font-bold text-emerald-600 mt-1">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Image */}
            <div className="hidden md:flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743654137/ZtPrRPETAjtZQMFgoPUpAt/maxtips-stats-illustration-AeHkBY49FgHLbpdnqeDA8v.webp"
                alt="Statistics"
                className="max-w-md drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-slate-900 mb-4">Confianza y Seguridad</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Protegemos tus datos y garantizamos transparencia en cada prediccion.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "Lock",
                title: "Datos Encriptados",
                description: "Encriptacion de nivel bancario para tu informacion.",
              },
              {
                icon: "Chart",
                title: "Datos Publicos",
                description: "Todos nuestros analisis son verificables y transparentes.",
              },
              {
                icon: "Scale",
                title: "Regulado",
                description: "Cumplimos con todas las regulaciones de apuestas deportivas.",
              },
              {
                icon: "Chat",
                title: "Soporte 24/7",
                description: "Equipo de soporte disponible en todo momento.",
              },
            ].map((trust, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4 font-bold text-emerald-600">{trust.icon}</div>
                <h3 className="font-display font-bold text-slate-900 mb-2">{trust.title}</h3>
                <p className="text-sm text-slate-600">{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              Comienza a Ganar Hoy
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              Descarga MaxTips y accede a predicciones premium. Tu primer analisis es gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={apkUrl} download className="inline-flex items-center justify-center bg-white text-emerald-600 hover:bg-slate-100 font-bold text-base px-8 py-6 rounded-lg h-auto shadow-lg">
                Descargar para Android
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663743654137/ZtPrRPETAjtZQMFgoPUpAt/maxtips-logo-Ji7s4RikjfnQPMCCDfrAqg.webp"
                  alt="MaxTips"
                  className="h-6 w-6"
                />
                <span className="font-display font-bold text-white">MaxTips</span>
              </div>
              <p className="text-sm">Predicciones de futbol que generan ganancias.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Caracteristicas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Seguridad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Terminos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">2024 MaxTips. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
