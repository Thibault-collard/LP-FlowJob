import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Plus,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import logoJobeasy from "./jobeasy-logo.png";

type PlanKey =
  | "standard_29"
  | "premium_49"
  | "solidaire_15"
  | "too_expensive"
  | "free_only";

const faqItems = [
  {
    question:
      "Les recruteurs peuvent-ils détecter que c'est automatisé ?",
    answer:
      "Non. Chaque candidature est entièrement personnalisée avec votre CV adapté au poste et une lettre unique. Les recruteurs reçoivent une candidature classique, impossible à distinguer d'une démarche manuelle.",
  },
  {
    question:
      "Comment fonctionne le mode Approve First concrètement ?",
    answer:
      "À chaque offre pertinente, Jobeasy prépare la candidature (CV + lettre) et vous la présente dans votre espace. Vous validez, modifiez ou refusez en un clic. Rien n'est envoyé sans votre accord explicite.",
  },
  {
    question: "Quels job boards sont couverts par Jobeasy ?",
    answer:
      "France : Indeed, Welcome to the Jungle, APEC, Pôle Emploi, LinkedIn (EasyApply). Suisse : JobUp.ch et jobs.ch. De nouvelles sources sont ajoutées régulièrement.",
  },
  {
    question: "L'essai nécessite une carte bancaire ?",
    answer:
      "Non. L'essai gratuit de 7 jours ne nécessite aucune carte bancaire. Testez Jobeasy en illimité puis décidez si vous souhaitez continuer.",
  },
  {
    question: "Que couvre la garantie 60 jours ?",
    answer:
      "Si vous utilisez Jobeasy activement pendant 60 jours (minimum 30 candidatures envoyées) et que vous n'obtenez aucun entretien, nous vous remboursons intégralement, sans questions.",
  },
  {
    question: "Puis-je annuler facilement ?",
    answer:
      "Oui. L'abonnement est sans engagement. Vous pouvez annuler à tout moment depuis votre espace, en un clic.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Vos données sont hébergées en Europe, chiffrées, et Jobeasy est 100% conforme au RGPD. Vous pouvez exporter ou supprimer vos données à tout moment.",
  },
  {
    question: "Comment fonctionne le tarif solidaire ?",
    answer:
      "Si votre ARE est inférieure à 1500€/mois, vous pouvez bénéficier du plan Solidaire à 15€/mois sur justificatif simple après inscription.",
  },
];

const App: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(17);
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("standard_29");
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((current) => {
        if (current <= 3) return current;
        if (Math.random() > 0.7) {
          return current - 1;
        }
        return current;
      });
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToForm = (plan?: PlanKey) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    document
      .getElementById("inscription")
      ?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="page-root">
      <div className="bg-pattern" />
      <div className="grid-overlay" />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo-wrapper">
              <img
                src={logoJobeasy}
                alt="Jobeasy"
                className="logo-image"
              />
              
            </div>
          </div>
          <div className="nav-right">
            <a href="#comment-ca-marche" className="nav-link">
              Comment ça marche
            </a>
            <a href="#tarifs" className="nav-link">
              Tarifs
            </a>
            <button
              className="nav-cta"
              onClick={() => handleScrollToForm(selectedPlan)}
            >
              Rejoindre la liste d'attente
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot" />
              Bientôt disponible en France &amp; Suisse
            </div>
            <h1>
              Automatisez votre{" "}
              <span className="highlight">recherche d'emploi</span>
              <br />
              <span className="hero-caption">
                (en gardant 100% du contrôle)
              </span>
            </h1>
            <p className="hero-subtitle">
              Jobeasy scanne les offres 24/7, personnalise vos candidatures et
              prépare les envois pour vous. Vous gardez le contrôle, on
              s'occupe du reste.
            </p>

            <div className="trust-badges">
              <div className="trust-badge">
                <CheckCircle2 className="trust-icon" />
                <span>Vous validez avant envoi</span>
              </div>
              <div className="trust-badge">
                <CheckCircle2 className="trust-icon" />
                <span>Personnalisation réelle</span>
              </div>
              <div className="trust-badge">
                <ShieldCheck className="trust-icon" />
                <span>RGPD compliant</span>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">150+</div>
                <div className="stat-label">Candidatures/mois</div>
              </div>
              <div className="stat">
                <div className="stat-value">11h</div>
                <div className="stat-label">Économisées/semaine</div>
              </div>
              <div className="stat">
                <div className="stat-value">3x</div>
                <div className="stat-label">Plus de réponses</div>
              </div>
            </div>

            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={() => handleScrollToForm(selectedPlan)}
              >
                Rejoindre la liste d'attente
                <ArrowRight size={18} />
              </button>
              <a href="#comment-ca-marche" className="btn-secondary">
                Comment ça marche ?
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-preview glass">
              <div className="dashboard-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="dashboard-stats">
                <div className="dash-stat">
                  <div className="dash-stat-value">127</div>
                  <div className="dash-stat-label">Candidatures</div>
                </div>
                <div className="dash-stat">
                  <div className="dash-stat-value">18</div>
                  <div className="dash-stat-label">Réponses</div>
                </div>
                <div className="dash-stat">
                  <div className="dash-stat-value">6</div>
                  <div className="dash-stat-label">Entretiens</div>
                </div>
              </div>
              <div className="job-item">
                <div className="job-logo">FJ</div>
                <div className="job-info">
                  <div className="job-title">Product Manager</div>
                  <div className="job-company">ScaleUp • Paris</div>
                </div>
                <span className="job-status status-interview">
                  Entretien 🎉
                </span>
              </div>
              <div className="job-item">
                <div className="job-logo">DA</div>
                <div className="job-info">
                  <div className="job-title">Growth Specialist</div>
                  <div className="job-company">Doctolib • Lyon</div>
                </div>
                <span className="job-status status-sent">Envoyé ✓</span>
              </div>
              <div className="job-item">
                <div className="job-logo">WB</div>
                <div className="job-info">
                  <div className="job-title">Data Analyst</div>
                  <div className="job-company">Webedia • Remote</div>
                </div>
                <span className="job-status status-pending">En attente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="comment-ca-marche">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              ⚙️ Comment ça marche
            </span>
            <h2 className="section-title">Simple, transparent, efficace</h2>
            <p className="section-subtitle">
              En 5 étapes, Jobeasy devient votre assistant de recherche d'emploi
              24/7.
            </p>
          </div>
          <div className="steps-container">
            {[
              {
                title: "Créez votre profil en 15 minutes",
                text: "Importez votre CV ou remplissez votre profil. Jobeasy comprend vos compétences, votre parcours et vos aspirations.",
              },
              {
                title: "Définissez vos critères précis",
                text: "Poste, secteur, localisation, salaire, type de contrat : vous gardez le contrôle total sur où vous postulez.",
              },
              {
                title: "L'IA scanne et matche 24/7",
                text: "Jobeasy parcourt les principaux job boards en continu et sélectionne uniquement les offres pertinentes.",
              },
              {
                title: "Vous validez en 1 clic",
                text: "Chaque candidature arrive prête à être envoyée. Vous approuvez, modifiez ou refusez en quelques secondes.",
              },
              {
                title: "On envoie, vous suivez en temps réel",
                text: "Un dashboard clair centralise vos candidatures, réponses et entretiens. Plus rien ne se perd.",
              },
            ].map((step, index) => (
              <div className="step" key={step.title}>
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="pain-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-red">😩 Le constat</span>
            <h2 className="section-title">
              Chercher un emploi est devenu un job à plein temps
            </h2>
          </div>
          <div className="pain-grid">
            <div className="pain-card glass">
              <div className="pain-icon">⏰</div>
              <h3>11h perdues chaque semaine</h3>
              <p>
                Copier-coller votre CV, remplir les mêmes formulaires, adapter
                votre lettre... pour un taux de réponse dérisoire.
              </p>
              <span className="pain-stat">Source : Pôle Emploi 2024</span>
            </div>
            <div className="pain-card glass">
              <div className="pain-icon">🔄</div>
              <h3>Les meilleures offres partent en 48h</h3>
              <p>
                Les opportunités les plus intéressantes disparaissent vite. Sans
                automatisation, vous arrivez souvent trop tard.
              </p>
              <span className="pain-stat">75% des postes pourvus en 1 semaine</span>
            </div>
            <div className="pain-card glass">
              <div className="pain-icon">😔</div>
              <h3>L'épuisement et la démotivation</h3>
              <p>
                Après des semaines de recherche, la charge mentale pèse. Garder
                le moral et la rigueur devient un vrai défi.
              </p>
              <span className="pain-stat">67% des chercheurs stressés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="solution-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-green">✨ La solution</span>
            <h2 className="section-title">
              Automatisez votre recherche sans perdre le contrôle
            </h2>
            <p className="section-subtitle">
              Jobeasy devient votre copilote pour postuler plus, mieux, et plus
              vite.
            </p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: "🎯",
                title: "Matching intelligent",
                text: "Analyse fine de votre profil pour cibler uniquement les offres pertinentes.",
                badge: "Indeed, WTTJ, APEC, JobUp...",
              },
              {
                icon: "✍️",
                title: "CV & lettre personnalisés",
                text: "Chaque candidature est ajustée au poste et optimisée pour les ATS.",
                badge: "Adapté au marché francophone",
              },
              {
                icon: "👀",
                title: 'Mode "Approve First"',
                text: "Vous gardez le dernier mot sur chaque candidature envoyée.",
                badge: "100% sous contrôle",
              },
              {
                icon: "📊",
                title: "Dashboard temps réel",
                text: "Suivez l'avancement de vos candidatures et vos statistiques.",
                badge: "Vue 360° de votre recherche",
              },
              {
                icon: "🇫🇷",
                title: "100% francophone",
                text: "Interface, contenus et support pensés pour les marchés FR & CH.",
                badge: "Données hébergées en Europe",
              },
              {
                icon: "⚡",
                title: "Réactivité 24/7",
                text: "Les meilleures offres détectées et traitées dans les premières heures.",
                badge: "Jamais en retard",
              },
            ].map((feature) => (
              <div className="feature-card glass" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <span className="feature-badge">{feature.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof & ROI */}
      <section className="proof-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-green">📊 Les données</span>
            <h2 className="section-title">
              Les chiffres qui montrent l'intérêt d'automatiser
            </h2>
          </div>
          <div className="testimonials">
            <div className="testimonial glass">
              <div className="testimonial-emoji">⏱️</div>
              <p className="testimonial-text">
                Les chercheurs d'emploi passent en moyenne{" "}
                <strong>11 heures par semaine</strong> à postuler manuellement.
              </p>
              <span className="result-badge">Source : Pôle Emploi 2024</span>
            </div>
            <div className="testimonial glass">
              <div className="testimonial-emoji">📉</div>
              <p className="testimonial-text">
                <strong>75% des CV</strong> sont filtrés par des ATS avant même
                d'être lus par un humain.
              </p>
              <span className="result-badge">
                Source : Harvard Business Review
              </span>
            </div>
            <div className="testimonial glass">
              <div className="testimonial-emoji">🎯</div>
              <p className="testimonial-text">
                Postuler dans les <strong>48 premières heures</strong> triple
                vos chances d'être contacté.
              </p>
              <span className="result-badge">
                Source : LinkedIn Talent Solutions
              </span>
            </div>
          </div>

          <div className="roi-section glass">
            <div className="roi-header">
              <h3>💰 Le coût réel de chercher seul</h3>
              <p>
                Chaque mois supplémentaire de recherche est un mois de salaire
                perdu.
              </p>
            </div>
            <div className="roi-comparison">
              <div className="roi-item">
                <div className="roi-value roi-bad">~450€</div>
                <div className="roi-label">
                  Coût d'opportunité
                  <br />
                  par mois de recherche
                </div>
              </div>
              <div className="roi-item">
                <div className="roi-value roi-good">29€</div>
                <div className="roi-label">
                  Jobeasy
                  <br />
                  par mois
                </div>
              </div>
            </div>
            <div className="roi-conclusion">
              <strong>
                Jobeasy se rembourse dès la première semaine gagnée.
              </strong>
              <br />
              Trouvez 4 semaines plus vite, économisez environ 1800€ net.
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section" id="tarifs">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              💰 Tarifs transparents
            </span>
            <h2 className="section-title">Investissez dans votre carrière</h2>
            <p className="section-subtitle">
              Bientôt disponible : indiquez le plan qui vous intéresse le plus pour être prioritaire au lancement.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card featured glass">
              <div className="pricing-ribbon">Plus populaire</div>
              <div className="pricing-name">Standard</div>
              <div className="pricing-price">
                15€<span>/mois</span>
              </div>
              <div className="pricing-trial">🎁 7 jours gratuits</div>
              <p className="pricing-desc">Pour une recherche efficace</p>
              <ul className="pricing-features">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>
                    <strong>150 candidatures/mois</strong>
                  </span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>CV personnalisé par IA</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Lettres de motivation adaptées</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Mode validation obligatoire</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Dashboard complet</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Support prioritaire email</span>
                </li>
              </ul>
              <button
                className="pricing-cta primary"
                onClick={() => handleScrollToForm("standard_29")}
              >
                Rejoindre la liste d'attente Standard
              </button>
            </div>

            <div className="pricing-card glass">
              <div className="pricing-name">Premium</div>
              <div className="pricing-price">
                25€<span>/mois</span>
              </div>
              <div className="pricing-trial">🎁 7 jours gratuits</div>
              <p className="pricing-desc">Pour une recherche intensive</p>
              <ul className="pricing-features">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>
                    <strong>Candidatures illimitées</strong>
                  </span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>CV & lettre optimisés par IA</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Mode validation OU auto</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Dashboard avancé + analytics</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Support prioritaire + chat</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Suivi et relances recruteurs</span>
                </li>
              </ul>
              <button
                className="pricing-cta secondary"
                onClick={() => handleScrollToForm("premium_49")}
              >
                Rejoindre la liste d'attente Premium
              </button>
            </div>
          </div>

          <div className="solidarity-card">
            <h4>💙 Tarif solidaire</h4>
            <p>
              ARE &lt; 1500€/mois ? Bénéficiez du plan Standard à{" "}
              <strong>15€/mois</strong> sur justificatif.
            </p>
          </div>

          <div className="guarantee glass">
            <div className="guarantee-icon">🛡️</div>
            <h4>Garantie 60 jours - Satisfait ou remboursé</h4>
            <p>
              Pas d'entretien obtenu dans les 60 premiers jours
              d'utilisation active ? Nous vous remboursons intégralement.
              Sans question, sans condition cachée.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="form-section" id="inscription">
        <div className="section-content">
          <div className="urgency-banner glass">
            <span className="spots">
              ⚡ Plus que <span id="spots-left">{spotsLeft}</span> places sur
              la liste d'attente prioritaire
            </span>
            <p>-30% à vie pour les premiers inscrits</p>
          </div>

          <div className="form-container glass">
            <div className="form-header">
              <div className="early-bird-badge">
                🎁 Offre early-bird : -30% à vie pour les 100 premiers inscrits
              </div>
              <h2>Rejoignez la liste d'attente</h2>
            </div>
            <iframe
              className="airtable-embed"
              src="https://airtable.com/embed/appRnyDnSFTJxg5zI/pag9R7vUz6wy3mmo5/form"
              frameBorder="0"
              width="100%"
              height="400"
              style={{
                background: "transparent",
                border: "1px solid #ccc",
                borderRadius: "12px",
              }}
              title="Formulaire Jobeasy - Liste d'attente"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="section-content">
          <div className="section-header">
            <span className="section-tag section-tag-green">
              ❓ Questions fréquentes
            </span>
            <h2 className="section-title">Vos questions, nos réponses</h2>
          </div>

          <div className="faq-grid">
            {faqItems.map((item, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div
                  key={item.question}
                  className={`faq-item glass ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="faq-question"
                    type="button"
                    onClick={() =>
                      setFaqOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{item.question}</span>
                    <span
                      className={`faq-icon ${
                        isOpen ? "faq-icon-open" : ""
                      }`}
                    >
                      <Plus size={20} />
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: isOpen ? "300px" : 0,
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="floating-cta">
        <button onClick={() => handleScrollToForm(selectedPlan)}>
          🚀 Rejoindre la liste d'attente
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default App;


