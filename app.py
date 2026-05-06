from flask import Flask, render_template


app = Flask(__name__)


projects = [
    {
        "title": "Planilhas",
        "description": "Planilhas prontas para uso. Modifique com seus gostos!",
        "image": "excel-logo.svg",
        "image_alt": "Logo do Excel",
        "features": [
            "Planilha de controle financeiro pessoal",
            "Planilha de controle financeiro para MEIs",
            "Planilha SISU/UFC",
            "Planilha com cronograma de estudos",
            "E muito mais...",
        ],
        "endpoint": "planilhas",
        "cta": "Ver Planilhas",
    },
    {
        "title": "Dashboards",
        "description": "Dashboards informativos. Analise dados publicos!",
        "image": "power-bi-logo.svg",
        "image_alt": "Logo do Power BI",
        "features": [
            "Analise completa do SISU",
            "Controle financeiro simplificado",
            "Analise de acoes",
            "Mercado de trabalho brasileiro",
            "E muito mais...",
        ],
        "endpoint": "dashboards",
        "cta": "Ver Dashboards",
    },
]

planilhas_items = [
    {"title": "Planilha de controle financeiro pessoal", "href": "#"},
    {"title": "Planilha de controle financeiro para MEIs", "href": "#"},
    {"title": "Planilha SISU/UFC", "href": "#"},
    {"title": "Planilha com cronograma de estudos", "href": "#"},
]

dashboards_items = [
    {"title": "Analise completa do SISU", "href": "#"},
    {"title": "Controle financeiro simplificado", "href": "#"},
    {"title": "Analise de acoes", "href": "#"},
    {"title": "Mercado de trabalho brasileiro", "href": "#"},
]

nav_items = [
    {
        "endpoint": "home",
        "label": "Pagina Inicial",
        "active_icon": "home_activated.svg",
        "inactive_icon": "home_deactivated.svg",
    },
    {
        "endpoint": "planilhas",
        "label": "Planilhas",
        "active_icon": "excel-logo.svg",
        "inactive_icon": "excel-logo.svg",
    },
    {
        "endpoint": "dashboards",
        "label": "Dashboards",
        "active_icon": "power-bi-logo.svg",
        "inactive_icon": "power-bi-logo.svg",
    },
    {
        "endpoint": "apps",
        "label": "Apps",
        "active_icon": "apps_activated.svg",
        "inactive_icon": "apps_deactivated.svg",
    },
]


@app.route("/")
def home():
    return render_template(
        "home.html",
        active_page="home",
        nav_items=nav_items,
        projects=projects,
    )


@app.route("/planilhas")
@app.route("/planilhas/")
def planilhas():
    return render_template(
        "items.html",
        active_page="planilhas",
        nav_items=nav_items,
        logo="excel-logo.svg",
        logo_alt="Excel",
        title="Planilhas",
        description="Planilhas prontas para uso. Modifique com seus gostos!",
        items=planilhas_items,
    )


@app.route("/dashboards")
@app.route("/dashboards/")
def dashboards():
    return render_template(
        "items.html",
        active_page="dashboards",
        nav_items=nav_items,
        logo="power-bi-logo.svg",
        logo_alt="Power BI",
        title="Dashboards",
        description="Dashboards informativos. Analise dados publicos!",
        items=dashboards_items,
    )


@app.route("/apps")
@app.route("/apps/")
def apps():
    return render_template(
        "apps.html",
        active_page="apps",
        nav_items=nav_items,
    )


if __name__ == "__main__":
    app.run(debug=True)
