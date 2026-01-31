import { useEffect, useRef } from "react";
import "@/App.css";
import { Home, Utensils, GraduationCap, Ban, ChevronDown, Vote, Mail, LogIn, CheckCircle } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_crous-patriote/artifacts/tj4s5x5o_OIP%20%281%29.webp";

// Programme Data - Images plus pertinentes
const programmeCards = [
  {
    id: "logement",
    icon: Home,
    title: "Priorité Nationale",
    category: "LOGEMENT",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
    points: [
      "Logements attribués en priorité aux étudiants français",
      "Rénovation thermique et isolation des résidences",
      "Sécurisation des résidences en zone dangereuse",
      "Création de salles de travail et de convivialité"
    ]
  },
  {
    id: "restauration",
    icon: Utensils,
    title: "Pouvoir d'Achat",
    category: "RESTAURATION",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80",
    points: [
      "Repas à 2€ pour les non-boursiers",
      "Repas à 1€ pour les boursiers",
      "Produits locaux dans les assiettes",
      "Lutte contre le gaspillage alimentaire"
    ]
  },
  {
    id: "bourses",
    icon: GraduationCap,
    title: "Justice Sociale",
    category: "BOURSES",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    points: [
      "Priorité nationale dans l'attribution",
      "Revalorisation du niveau général des bourses",
      "Indexation sur l'inflation",
      "Simplification des démarches administratives"
    ]
  },
  {
    id: "cvec",
    icon: Ban,
    title: "Stop au Racket",
    category: "CVEC",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    points: [
      "Plafonnement de la CVEC à 40€",
      "Fin du financement des projets idéologiques",
      "Transparence totale sur l'utilisation des fonds",
      "Développement des installations sportives"
    ]
  }
];

// Voting Steps
const votingSteps = [
  {
    step: 1,
    icon: Mail,
    title: "Vérifie tes mails",
    description: "Recherche \"Legavote\" ou \"Crous\" dans ta boîte mail"
  },
  {
    step: 2,
    icon: LogIn,
    title: "Connecte-toi",
    description: "Accède au site de vote avec tes identifiants"
  },
  {
    step: 3,
    icon: CheckCircle,
    title: "Vote La Cocarde",
    description: "Sélectionne la liste \"La Cocarde Étudiante\""
  }
];

// Hero Section Component
const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section" 
      className="hero-section h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#002395]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002395] via-[#001a70] to-[#002395] animate-gradient"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#002395] opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ED2939] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fadeIn">
        {/* Logo - Style original */}
        <div className="mb-8 animate-scaleIn">
          <img 
            src={LOGO_URL} 
            alt="La Cocarde Étudiante" 
            data-testid="hero-logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Title */}
        <h1 
          data-testid="hero-title"
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-4 animate-slideUp"
        >
          L'Alternative Patriote
        </h1>

        {/* Dates */}
        <div 
          data-testid="hero-dates"
          className="flex items-center gap-2 text-white/90 text-lg md:text-xl mb-4 animate-slideUp animation-delay-200"
        >
          <Vote className="w-5 h-5" />
          <span className="font-semibold">Élections CROUS • Du 3 au 5 Février</span>
        </div>

        {/* Slogan */}
        <p 
          data-testid="hero-slogan"
          className="text-xl md:text-2xl text-white/80 font-medium max-w-xl animate-slideUp animation-delay-400"
        >
          Pour un CROUS qui protège les étudiants
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#programme" 
          data-testid="scroll-indicator"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2 uppercase tracking-wider">Découvrir</span>
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

// Programme Card Component
const ProgrammeCard = ({ card, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Icon = card.icon;

  return (
    <div
      ref={cardRef}
      data-testid={`programme-card-${card.id}`}
      className={`programme-card animate-card animation-delay-${index * 100}`}
    >
      {/* Category Header - Plus visible */}
      <div className="bg-[#ED2939] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#002395]" />
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            {card.category}
          </h3>
        </div>
      </div>

      {/* Image */}
      <div className="relative h-36 md:h-44 overflow-hidden">
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002395]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 bg-white">
        <h4 className="font-heading text-xl md:text-2xl font-bold text-[#002395] uppercase mb-4">
          {card.title}
        </h4>
        <ul className="space-y-2">
          {card.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
              <span className="w-2 h-2 bg-[#ED2939] rounded-full mt-2 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Programme Section Component
const ProgrammeSection = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="programme" 
      data-testid="programme-section"
      className="min-h-screen bg-gray-50 py-16 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16 animate-card">
          <h2 
            data-testid="programme-title"
            className="font-heading text-3xl md:text-5xl font-bold text-[#002395] uppercase mb-4"
          >
            Notre Programme
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-1 bg-[#002395]"></div>
            <div className="w-4 h-1 bg-[#ED2939]"></div>
            <div className="w-16 h-1 bg-[#002395]"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Des mesures concrètes pour améliorer le quotidien des étudiants français
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {programmeCards.map((card, index) => (
            <ProgrammeCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Action Section Component
const ActionSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="action" 
      data-testid="action-section"
      className="min-h-screen bg-[#002395] flex items-center justify-center py-16 px-4"
    >
      <div ref={contentRef} className="max-w-4xl mx-auto text-center animate-card">
        {/* Title */}
        <h2 
          data-testid="action-title"
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-12"
        >
          Comment voter ?
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {votingSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step}
                data-testid={`voting-step-${item.step}`}
                className="flex flex-col items-center text-white"
              >
                <div className="w-20 h-20 bg-white/10 border-2 border-white/30 flex items-center justify-center mb-4 hover:bg-white/20 transition-colors">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-heading font-bold text-[#ED2939] mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="https://crous-bordeaux.legavote.fr/"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="vote-cta-button"
          className="vote-button inline-flex items-center gap-3 bg-[#ED2939] text-white font-heading text-lg md:text-xl font-bold uppercase px-8 md:px-12 py-4 md:py-5 hover:bg-[#c91f2e] transition-all duration-300 hover:scale-105 shadow-2xl"
        >
          <Vote className="w-6 h-6" />
          Accéder au site de vote
        </a>

        {/* Reminder */}
        <p className="mt-8 text-white/60 text-sm">
          Du 3 au 5 Février • Chaque vote compte !
        </p>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer 
      data-testid="footer"
      className="bg-[#001a70] text-white py-6 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="La Cocarde Étudiante" 
            className="w-10 h-10 object-contain"
          />
          <span className="font-heading font-bold uppercase">La Cocarde Étudiante</span>
        </div>
        <p className="text-white/60 text-sm text-center">
          © 2025 La Cocarde Étudiante - Élections CROUS
        </p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ProgrammeSection />
      <ActionSection />
      <Footer />
    </div>
  );
}

export default App;
