# Analyzer
Repository skeleton and starter files to integrate with Osiris AI utilities (analyzer / blueprint).

Got it 🚀 Here’s the README.md in English:

# OsirisAI API Integration

This project is an API service to integrate with **Osiris AI utilities** (`analyzer.osirisai.tech` and `blueprint.osirisai.tech`).  
Built with **Node.js + Express**, fully containerized with **Dockerfile** and **docker-compose.yml** for easy deployment.

---

## 🚀 Features
- **/health** endpoint → simple health check
- **/api/v1/analyze** → accepts chart images (upload) or chart URLs
- API Key validation (`x-api-key` header or query/body param)
- Example clients in **JavaScript (fetch)** and **Python (requests)**
- Ready for **Docker** and **docker-compose**

---

## 📂 Project Structure


osirisai-api-repo/
├── .gitignore
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
├── src/
│ ├── server.js
│ ├── routes/
│ │ └── analyze.js
│ └── utils/
│ └── analyzer.js
├── client/
│ ├── example_fetch.js
│ └── example_python.py
└── tests/
└── analyze.test.js


---

## ⚙️ Local Setup (without Docker)

1. Clone this repository:
   ```bash
   git clone https://github.com/username/osirisai-api-repo.git
   cd osirisai-api-repo


Install dependencies:

npm install


Copy .env.example to .env and set your API key:

cp .env.example .env


Start the server:

npm run dev


The server will run at http://localhost:3000.

🐳 Run with Docker

Build the image:

docker build -t osirisai-api .


Run the container:

docker run -p 3000:3000 -e API_KEY=changeme osirisai-api


Or use docker-compose:

docker-compose up --build

🔑 API Usage
Health Check
curl http://localhost:3000/health


Response:

{ "status": "ok" }

Analyze Chart (upload file)
curl -X POST http://localhost:3000/api/v1/analyze \
  -H "x-api-key: changeme" \
  -F "image=@sample-chart.png"

Analyze Chart (with URL)
curl -X POST http://localhost:3000/api/v1/analyze \
  -H "x-api-key: changeme" \
  -H "Content-Type: application/json" \
  -d '{"chartUrl":"https://example.com/sample.png"}'

📌 Example Clients
JavaScript
node client/example_fetch.js

Python
python client/example_python.py

✅ Testing
node tests/analyze.test.js

📜 License

MIT
