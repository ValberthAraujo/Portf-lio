import { useEffect, useMemo, useState } from 'react';
import appsActiveIcon from './assets/images/apps_activated.svg';
import appsInactiveIcon from './assets/images/apps_deactivated.svg';
import comingSoonIcon from './assets/images/coming_soon.svg';
import comingSoonImage from './assets/images/coming_soon_2.svg';
import excelLogo from './assets/images/excel-logo.svg';
import homeActiveIcon from './assets/images/home_activated.svg';
import homeInactiveIcon from './assets/images/home_deactivated.svg';
import powerBiLogo from './assets/images/power-bi-logo.svg';

const projects = [
  {
    id: 'planilhas',
    title: 'Planilhas',
    description: 'Planilhas prontas para uso. Modifique com seus gostos!',
    image: excelLogo,
    imageAlt: 'Logo do Excel',
    features: [
      'Planilha de controle financeiro pessoal',
      'Planilha de controle financeiro para MEIs',
      'Planilha SISU/UFC',
      'Planilha com cronograma de estudos',
      'E muito mais...',
    ],
    internalHref: '#/planilhas',
    cta: 'Ver Planilhas',
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    description: 'Dashboards informativos. Analise dados públicos!',
    image: powerBiLogo,
    imageAlt: 'Logo do Power BI',
    features: [
      'Análise completa do SISU',
      'Controle financeiro simplificado',
      'Análise de ações',
      'Mercado de trabalho brasileiro',
      'E muito mais...',
    ],
    internalHref: '#/dashboards',
    cta: 'Ver Dashboards',
  },
];

const planilhasItems = [
  { id: 'controle-pessoal', title: 'Planilha de controle financeiro pessoal', href: '#' },
  { id: 'controle-mei',     title: 'Planilha de controle financeiro para MEIs', href: '#' },
  { id: 'sisu-ufc',         title: 'Planilha SISU/UFC', href: '#' },
  { id: 'cronograma',       title: 'Planilha com cronograma de estudos', href: '#' },
];

const dashboardsItems = [
  { id: 'sisu',       title: 'Análise completa do SISU', href: '#' },
  { id: 'financeiro', title: 'Controle financeiro simplificado', href: '#' },
  { id: 'acoes',      title: 'Análise de ações', href: '#' },
  { id: 'mercado',    title: 'Mercado de trabalho brasileiro', href: '#' },
];

function getRouteFromHash() {
  const route = window.location.hash.replace(/^#\/?/, '');
  if (route === 'apps') return 'apps';
  if (route === 'planilhas') return 'planilhas';
  if (route === 'dashboards') return 'dashboards';
  return 'home';
}

function Header({ currentRoute, searchTerm, onSearchChange }) {
  const navItems = [
    {
      route: 'home',
      label: 'Página Inicial',
      href: '#/',
      activeIcon: homeActiveIcon,
      inactiveIcon: homeInactiveIcon,
    },
    {
      route: 'planilhas',
      label: 'Planilhas',
      href: '#/planilhas',
      activeIcon: excelLogo,
      inactiveIcon: excelLogo,
    },
    {
      route: 'dashboards',
      label: 'Dashboards',
      href: '#/dashboards',
      activeIcon: powerBiLogo,
      inactiveIcon: powerBiLogo,
    },
    {
      route: 'apps',
      label: 'Apps',
      href: '#/apps',
      activeIcon: appsActiveIcon,
      inactiveIcon: appsInactiveIcon,
    },
  ];

  return (
    <header>
      <div className="px-3 py-2 text-bg-dark navbar-custom custom-border mb-3">
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap gap-3">
          <form className="d-flex flex-wrap gap-2 align-items-center search-form" role="search">
            <input
              type="search"
              className="form-control custom-search m-2"
              placeholder="Pesquisar..."
              aria-label="Pesquisar projetos"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
            />
            <button type="button" className="btn btn-light custom-btn-login m-2">
              Entrar
            </button>
            <button type="button" className="btn btn-primary custom-btn-register m-2">
              Cadastrar-se
            </button>
          </form>

          <nav id="navegacao-principal" className="nav-masthead d-flex justify-content-center gap-3" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;

              return (
                <a
                  key={item.route}
                  href={item.href}
                  className={`nav-link text-white text-center ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <img src={isActive ? item.activeIcon : item.inactiveIcon} width="24" height="24" alt="" aria-hidden="true" />
                  <span className={isActive ? 'd-block text-active' : 'd-block'}>{item.label}</span>
                </a>
              );
            })}

            <span className="nav-link nav-link-disabled text-center" aria-disabled="true">
              <img src={comingSoonIcon} width="24" height="24" alt="" aria-hidden="true" />
              <span className="d-block">Em breve...</span>
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card shadow-sm custom-border-black h-100">
      <img src={project.image} className="bd-placeholder-img card-img-top custom-background-gray project-logo py-4 px-4" alt={project.imageAlt} />
      <div className="card-body d-flex flex-column">
        <h2 className="h5 card-title custom-text-gray-title">{project.title}</h2>
        <p className="card-text">{project.description}</p>
        <ul className="card-text custom-feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="d-flex mt-auto">
          <a href={project.internalHref} className="btn btn-sm btn-outline-primary justify-content-center custom-btn-github">
            {project.cta}
          </a>
        </div>
      </div>
    </article>
  );
}

function ItemCard({ item }) {
  return (
    <article className="card shadow-sm custom-border-black h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <h2 className="h6 card-title custom-text-gray-title">{item.title}</h2>
        <a
          href={item.href}
          className="btn btn-sm btn-outline-primary mt-3 custom-btn-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir →
        </a>
      </div>
    </article>
  );
}

function HomePage({ filteredProjects }) {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Planilhas e Dashboards</h1>
            <p className="lead text-body-secondary">
              Modelos/Análises prontas para uso!
              <br />
              Caso tenha interesse, podem ser usados como inspiração para seus projetos.
            </p>
          </div>
        </div>
      </section>

      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {filteredProjects.map((project) => (
                <div className="col py-2" key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-body-secondary m-0">Nenhum projeto encontrado.</p>
          )}
        </div>
      </section>
    </main>
  );
}

function PlanilhasPage() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img src={excelLogo} width="80" height="80" alt="Excel" className="mb-4" />
            <h1 className="fw-light">Planilhas</h1>
            <p className="lead text-body-secondary">Planilhas prontas para uso. Modifique com seus gostos!</p>
          </div>
        </div>
      </section>
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {planilhasItems.map((item) => (
              <div className="col py-2" key={item.id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardsPage() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img src={powerBiLogo} width="80" height="80" alt="Power BI" className="mb-4" />
            <h1 className="fw-light">Dashboards</h1>
            <p className="lead text-body-secondary">Dashboards informativos. Analise dados públicos!</p>
          </div>
        </div>
      </section>
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {dashboardsItems.map((item) => (
              <div className="col py-2" key={item.id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function AppsPage() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <img src={comingSoonImage} width="200" height="200" alt="Em construção" className="mb-4 construction-image" />
            <h1 className="fw-light">Em Construção...</h1>
            <p className="lead text-body-secondary">
              Ainda estou terminando as planilhas/dashboards. Em breve terá algumas coisas por aqui!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(getRouteFromHash());

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredProjects = useMemo(() => {
    const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const normalizedSearch = normalize(searchTerm.trim());

    if (!normalizedSearch) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = normalize([project.title, project.description, ...project.features].join(' '));
      return searchableText.includes(normalizedSearch);
    });
  }, [searchTerm]);

  return (
    <>
      <Header currentRoute={currentRoute} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      {currentRoute === 'apps'       && <AppsPage />}
      {currentRoute === 'planilhas'  && <PlanilhasPage />}
      {currentRoute === 'dashboards' && <DashboardsPage />}
      {currentRoute === 'home'       && <HomePage filteredProjects={filteredProjects} />}
    </>
  );
}

export default App;
