# DjangoVue

Scaffolding for a production-ready **Django backend** with a **Vue 3 + Vite frontend**.  
This template saves you the pain of wiring everything together, so you can jump straight into building features.

---

## Features

- ⚡ **Django 4.2** with Django REST Framework  
- 🎨 **Vue 3** powered by Vite + TypeScript + TailwindCSS  
- 🔌 PostgreSQL + psycopg3 support  
- 🔐 CORS, environment variables, and API schema generation (drf-spectacular)  
- 🧩 PrimeVue UI components + Vue Router  
- 🛠 Developer tools: Hot reload, OpenAPI client generation, dev/prod builds  

---

## Getting Started

### Backend (Django)
```bash
cd backend
poetry install
poetry run python manage.py migrate
poetry run python manage.py runserver
```

### Frontend (Vue 3 + Vite)
```bash
cd frontend
npm install
npm run dev
```

---

## Project Structure
```
.
├── backend/      # Django REST backend
│   └── pyproject.toml
├── frontend/     # Vue 3 + Vite + Tailwind frontend
│   └── package.json
└── README.md
```

---

## Development Workflow

- Run **backend** and **frontend** in parallel during development.  
- API schema is generated via **drf-spectacular**, with TypeScript clients scaffolded using **openapi-generator**.  
- Frontend is served by **Vite** (fast HMR), and Django can be configured to serve the production build.  

---

## License
MIT
