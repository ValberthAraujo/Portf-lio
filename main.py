from flask import Flask, render_template


app = Flask(__name__)


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
    )


@app.route("/planilhas")
@app.route("/planilhas/")
def planilhas():
    return render_template(
        "planilhas.html",
        active_page="planilhas",
        nav_items=nav_items,
    )


@app.route("/dashboards")
@app.route("/dashboards/")
def dashboards():
    return render_template(
        "dashboards.html",
        active_page="dashboards",
        nav_items=nav_items,
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
