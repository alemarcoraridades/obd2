import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  AlertCircle,
  ClipboardList,
  Code2,
  Download,
  Gauge,
  Link2,
  Menu,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Wind,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

type PreviewTab = "meaning" | "symptoms" | "causes" | "checks";

const previewTabs: { id: PreviewTab; label: string; icon: LucideIcon }[] = [
  { id: "meaning", label: "O que significa", icon: Code2 },
  { id: "symptoms", label: "Sintomas", icon: Activity },
  { id: "causes", label: "Causas possíveis", icon: AlertCircle },
  { id: "checks", label: "O que verificar", icon: Wrench },
];

const symptoms = [
  "Motor falhando ou instável em marcha lenta",
  "Falta de força, principalmente com turbo",
  "Consumo maior",
  "Luz de injeção acesa",
];

const causes = [
  "Entrada de ar falsa (mangueira de vácuo, junta do coletor, respiro do cárter, mangueira do turbo)",
  "Sensor de fluxo de ar (MAF) sujo ou impreciso",
  "Pressão de combustível baixa (bomba, filtro, regulador)",
  "Injetores sujos ou entupidos",
  "Vazamento no escapamento antes da sonda lambda",
  "Combustível de má qualidade",
];

const checks = [
  "Procure ruído de ar sugado e mangueiras soltas ou trincadas",
  "Verifique a vareta de óleo e a tampa de óleo (vedação ruim aumenta a entrada de ar falso)",
  "Olhe a pressão do coletor em marcha lenta no painel: valor alto indica ar falso",
  "Limpe ou teste o sensor de fluxo de ar",
  "Confira a pressão de combustível",
];

const relatedCodes = ["P2187", "P0101", "P0087", "P0300"];

function PreviewContent({ activeTab }: { activeTab: PreviewTab }) {
  if (activeTab === "meaning") {
    return (
      <div className="preview-meaning">
        <span className="content-eyebrow"><Sparkles size={15} /> LEITURA DO CÓDIGO</span>
        <p>
          A ECU já está acrescentando combustível além do limite e, mesmo assim,
          a mistura continua pobre.
        </p>
        <div className="meaning-note">
          <Gauge size={18} />
          <span>O código é um ponto de partida para investigar o que está acontecendo.</span>
        </div>
      </div>
    );
  }

  const content = activeTab === "symptoms" ? symptoms : activeTab === "causes" ? causes : checks;
  const intro = activeTab === "symptoms"
    ? "Sinais que podem aparecer junto com este código:"
    : activeTab === "causes"
      ? "Entre as possibilidades que a análise considera:"
      : "Algumas verificações iniciais sugeridas na análise:";

  return (
    <div className="preview-list-content">
      <span className="content-eyebrow">
        {activeTab === "symptoms" ? <Activity size={15} /> : activeTab === "causes" ? <AlertCircle size={15} /> : <ClipboardList size={15} />}
        {activeTab === "symptoms" ? "SINTOMAS" : activeTab === "causes" ? "CAUSAS POSSÍVEIS" : "VERIFICAÇÕES"}
      </span>
      <p className="list-intro">{intro}</p>
      <ul className="diagnostic-list">
        {content.map((item) => (
          <li key={item}>
            <span className="list-check"><Check size={14} /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("meaning");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="obd2-site">
      <header className="site-header">
        <div className="page-shell header-inner">
          <a className="brand-lockup" href="#inicio" onClick={closeMenu} aria-label="AleMarco OBD2, início">
            <span className="brand-mark"><img src="/icon.png" alt="" /></span>
            <span className="brand-name">AleMarco <b>OBD2</b></span>
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
            <a href="#degustacao" onClick={closeMenu}>Degustação P0171</a>
            <a href="#correlacoes" onClick={closeMenu}>Códigos relacionados</a>
            <a className="nav-cta" href="#download" onClick={closeMenu}>Status do app <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="inicio">
        <div className="page-shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> LEITURA OBD2 · ANÁLISE DE CÓDIGOS</div>
            <h1>A luz acendeu.<br />Entenda o que o <em>código</em> pode indicar.</h1>
            <p className="hero-lead">
              Leia os códigos de falha do veículo via OBD2, entenda o que cada um
              pode significar e veja como outros códigos podem estar relacionados.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#degustacao">Experimentar a análise P0171 <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#como-funciona">Como funciona <ArrowDown size={16} /></a>
            </div>
            <div className="hero-points" aria-label="Recursos do app">
              <span><ScanLine size={16} /> Leitura via OBD2</span>
              <span><Activity size={16} /> Análise código a código</span>
              <span><Link2 size={16} /> Códigos em contexto</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Prévia da interface do AleMarco OBD2">
            <div className="visual-glow" />
            <div className="visual-kicker"><span className="status-dot" /> INTERFACE DO APP</div>
            <div className="app-screen-frame">
              <img
                src="/public/app.png"
                alt="Tela do AleMarco OBD2 exibindo dados do veículo e códigos de falha"
                className="app-screen-image"
              />
            </div>
            <div className="hero-floating-card">
              <span className="floating-icon"><AlertCircle size={19} /></span>
              <span><small>EXEMPLO DE CÓDIGO</small><strong>P0171 <i>·</i> mistura pobre</strong></span>
              <ChevronRight size={18} className="floating-chevron" />
            </div>
            <span className="visual-orbit visual-orbit--one" />
            <span className="visual-orbit visual-orbit--two" />
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <section className="value-strip" aria-label="Resumo do app">
        <div className="page-shell value-strip-inner">
          <div><span className="value-icon"><Gauge size={17} /></span><span>Leia os códigos registrados</span></div>
          <div><span className="value-icon"><ClipboardList size={17} /></span><span>Explore uma análise organizada</span></div>
          <div><span className="value-icon"><Link2 size={17} /></span><span>Observe códigos relacionados</span></div>
        </div>
      </section>

      <section className="preview-section section-space" id="degustacao">
        <div className="page-shell">
          <div className="section-heading preview-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-number">01</span> DEGUSTAÇÃO GRATUITA</div>
              <h2>Um código. Mais <em>contexto.</em></h2>
            </div>
            <p>Explore uma amostra da análise do P0171. Selecione uma etapa para ver como o app organiza a informação.</p>
          </div>

          <div className="preview-layout">
            <aside className="code-summary">
              <div className="summary-topline"><span className="status-dot" /> PRÉVIA DE ANÁLISE</div>
              <div className="code-label">CÓDIGO OBD2</div>
              <div className="code-number">P0171</div>
              <div className="code-name">Mistura pobre</div>
              <div className="summary-divider" />
              <div className="summary-meta"><span>PROTOCOLO</span><strong>OBD2</strong></div>
              <div className="summary-meta"><span>ANÁLISE</span><strong>Informativa</strong></div>
              <div className="summary-callout"><Wind size={17} /><span>Leia o código junto dos sintomas e das verificações sugeridas.</span></div>
              <div className="summary-code-watermark">P1</div>
            </aside>

            <div className="analysis-panel">
              <div className="analysis-panel-top">
                <div><span className="panel-kicker">ALEMARCO OBD2 <span>/</span> ANÁLISE DE CÓDIGO</span><h3>Explore a prévia</h3></div>
                <span className="preview-counter">AMOSTRA <b>01</b> / 01</span>
              </div>

              <div className="preview-tabs" role="tablist" aria-label="Seções da análise P0171">
                {previewTabs.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    className={`preview-tab${activeTab === id ? " preview-tab--active" : ""}`}
                    type="button"
                    role="tab"
                    id={`tab-${id}`}
                    aria-selected={activeTab === id}
                    aria-controls="preview-tab-panel"
                    onClick={() => setActiveTab(id)}
                  >
                    <Icon size={16} /> <span>{label}</span>
                  </button>
                ))}
              </div>

              <div className="preview-tab-panel" id="preview-tab-panel" role="tabpanel" aria-labelledby={`tab-${activeTab}`} aria-live="polite">
                <PreviewContent activeTab={activeTab} />
              </div>

              <div className="related-block">
                <div className="related-heading"><span><Link2 size={16} /> CÓDIGOS RELACIONADOS NESTE EXEMPLO</span><small>ASSOCIAÇÕES DA AMOSTRA</small></div>
                <div className="related-code-list">
                  {relatedCodes.map((code) => <span className="related-code" key={code}>{code}<ChevronRight size={13} /></span>)}
                </div>
                <p>Os códigos são apresentados como relacionados para ajudar a observar o conjunto — a interpretação depende da leitura do veículo.</p>
              </div>
            </div>
          </div>

          <div className="disclaimer"><ShieldCheck size={19} /><p><strong>Importante:</strong> esta análise é informativa e não representa um diagnóstico definitivo. A confirmação da causa exige avaliação do veículo.</p></div>
        </div>
      </section>

      <section className="how-section section-space" id="como-funciona">
        <div className="page-shell">
          <div className="section-heading how-heading">
            <div><div className="eyebrow eyebrow--light"><span className="eyebrow-number">02</span> DA LEITURA À COMPREENSÃO</div><h2>O próximo passo<br />depois do <em>código.</em></h2></div>
            <p>Uma leitura OBD2 mostra códigos. O AleMarco OBD2 ajuda a explorar o significado, os sinais associados e a correlação entre códigos.</p>
          </div>
          <div className="steps-row">
            <article className="step-card">
              <div className="step-top"><span>01</span><ScanLine size={20} /></div>
              <h3>Leia via OBD2</h3>
              <p>Use o app para acessar os códigos de falha registrados no veículo por meio do protocolo OBD2.</p>
              <div className="step-line"><i /></div>
            </article>
            <article className="step-card">
              <div className="step-top"><span>02</span><Code2 size={20} /></div>
              <h3>Entenda cada código</h3>
              <p>Veja uma explicação organizada com sintomas, causas possíveis e verificações relacionadas.</p>
              <div className="step-line"><i /></div>
            </article>
            <article className="step-card">
              <div className="step-top"><span>03</span><Link2 size={20} /></div>
              <h3>Observe as relações</h3>
              <p>Considere os códigos em conjunto e explore as correlações apresentadas na análise.</p>
              <div className="step-line"><i /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="correlation-section section-space" id="correlacoes">
        <div className="page-shell correlation-layout">
          <div className="correlation-copy">
            <div className="eyebrow"><span className="eyebrow-number">03</span> LEITURA EM CONJUNTO</div>
            <h2>Às vezes, um código conta só <em>parte da história.</em></h2>
            <p>Na degustação do P0171, a análise também aponta estes códigos como relacionados. O app ajuda a visualizar as associações sem tratar um código isolado como resposta definitiva.</p>
            <a className="text-link" href="#degustacao">Voltar à análise do P0171 <ArrowRight size={16} /></a>
          </div>
          <div className="correlation-graphic" aria-label="P0171 e códigos relacionados no exemplo">
            <div className="correlation-center"><span><Link2 size={20} /></span><strong>P0171</strong><small>CÓDIGO EM ANÁLISE</small></div>
            <span className="correlation-line correlation-line--one" />
            <span className="correlation-line correlation-line--two" />
            <span className="correlation-line correlation-line--three" />
            <span className="correlation-line correlation-line--four" />
            <span className="correlation-node correlation-node--one">P2187</span>
            <span className="correlation-node correlation-node--two">P0101</span>
            <span className="correlation-node correlation-node--three">P0087</span>
            <span className="correlation-node correlation-node--four">P0300</span>
            <div className="graphic-caption"><span className="status-dot" /> CÓDIGOS RELACIONADOS NO EXEMPLO</div>
          </div>
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="page-shell download-panel">
          <div className="download-icon"><Download size={22} /></div>
          <div className="download-copy"><div className="eyebrow eyebrow--light"><span className="eyebrow-number">04</span> DISPONIBILIDADE DO APP</div><h2>O AleMarco OBD2 ainda não foi publicado.</h2><p>Quando houver um link oficial de download, ele estará disponível aqui. Enquanto isso, experimente a análise gratuita do P0171.</p></div>
          <a className="button button-primary" href="#degustacao">Experimentar a prévia <ArrowRight size={17} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="brand-lockup brand-lockup--footer" href="#inicio">
            <span className="brand-mark"><img src="/icon.png" alt="" /></span>
            <span className="brand-name">AleMarco <b>OBD2</b></span></a>
          <p>Leitura OBD2 com análise e correlação de códigos.</p>
          <span className="footer-note"><ShieldCheck size={14} /> Conteúdo informativo</span>
          <a className="back-to-top" href="#inicio" aria-label="Voltar ao topo"><ArrowDown size={16} /></a>
        </div>
      </footer>
    </main>
  );
}
