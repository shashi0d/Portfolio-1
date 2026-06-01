window.portfolioData = {
  profile: {
    name: "Pranathi Deepak",
    role: "Machine Learning Engineer",
    location: "Los Angeles, CA",
    availability: "Open to relocation",
    phone: "(562) 488-4102",
    email: "pranathideepak16@gmail.com",
    linkedin: "https://linkedin.com/in/pranathi-deepak",
    github: "https://github.com/PranathiDeepak",
    photo: "picture.jpeg",
    resumeFile: "https://pranathideepak.github.io/Portfolio/PranathiDeepakResume.pdf",
    headline: "Production ML, GenAI, RAG, and MLOps systems that move from notebooks to reliable user-facing products.",
    summary:
      "Machine Learning Engineer with 4+ years of experience shipping production ML and Generative AI systems across financial services (KPMG) and applied AI environments. Recently completed a Master's in Computer Science with research focus on Generative AI and RAG systems. Hands-on builder of end-to-end ML pipelines using Python, PyTorch, and AWS, from feature engineering through real-time inference and MLOps. Recent work focuses on LLM and RAG systems with LangChain and LlamaIndex, including a multi-agent learning platform built on Llama 3.3 with adaptive content generation and evaluation. Strong on production deployment, MLOps lifecycle, and stakeholder communication on model governance."
  },
  // NOTE: These headline metrics now match the numbers in your experience bullets
  // (40% retrieval, 30% runtime). Confirm which figures are actually correct and
  // adjust both here AND in the matching bullet below so they always agree.
  metrics: [
    { value: "4+", label: "Years in ML and AI" },
    { value: "40%", label: "Retrieval time reduced" },
    { value: "30%", label: "Pipeline runtime cut" },
    { value: "10+", label: "Production model deployments" }
  ],
  recruiterSignals: [
    "Built and deployed RAG pipelines with LangChain, LlamaIndex, FAISS, and transformer embeddings.",
    "Owned end-to-end ML pipelines from ingestion and feature engineering to FastAPI inference and monitoring.",
    "Delivered production ML impact in financial services at KPMG and applied AI environments at CSUDH.",
    "Combines model performance work with MLOps discipline: CI/CD, drift detection, versioning, Docker, and Kubernetes."
  ],
  focusAreas: [
    {
      label: "GenAI + RAG",
      short: "RAG",
      detail: "Context-aware LLM systems, semantic search, prompt engineering, multi-step agent workflows, and vector retrieval."
    },
    {
      label: "Production ML",
      short: "ML",
      detail: "Supervised and unsupervised models with feature stores, evaluation, explainability, and measurable business outcomes."
    },
    {
      label: "MLOps + Cloud",
      short: "Ops",
      detail: "CI/CD, MLflow, monitoring, Dockerized APIs, AWS services, scalable batch and near-real-time inference."
    }
  ],
  skillGroups: [
    {
      category: "ML and AI",
      tone: "amber",
      skills: ["XGBoost", "Random Forest", "Gradient Boosting", "SVM", "Clustering", "Scikit-learn", "Hyperparameter Tuning", "SHAP", "ROC-AUC"]
    },
    {
      category: "Generative and Agentic AI",
      tone: "mint",
      skills: ["Generative AI", "Agentic AI", "AI Agents", "LLMs", "RAG", "LangChain", "LangChain Agents", "LlamaIndex", "FAISS", "Pinecone", "Prompt Engineering", "Tool Use", "Multi-Step Reasoning"]
    },
    {
      category: "Deep Learning and NLP",
      tone: "sky",
      skills: ["PyTorch", "TensorFlow", "CNNs", "RNNs", "LSTMs", "Transformers", "Embeddings", "Text Classification", "Semantic Search"]
    },
    {
      category: "MLOps and Cloud",
      tone: "clay",
      skills: ["AWS S3", "EC2", "SageMaker", "Lambda", "Redshift", "Azure ML", "GCP Vertex AI", "Docker", "Kubernetes", "Airflow", "MLflow", "CI/CD", "Model Versioning", "Drift Detection"]
    },
    {
      category: "Data and Streaming",
      tone: "mint",
      skills: ["Pandas", "NumPy", "Spark", "Spark Streaming", "Kafka", "Databricks", "ETL/ELT Pipelines", "Feature Stores", "Data Validation"]
    },
    {
      category: "APIs and Deployment",
      tone: "amber",
      skills: ["FastAPI", "Flask", "REST APIs", "Batch Inference", "Real-Time Inference", "Model Serving", "Python", "SQL", "Java", "R"]
    }
  ],
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "California State University",
      location: "Carson, CA",
      period: "Aug 2024 - Dec 2025",
      tags: ["RAG", "MLOps", "FastAPI", "AWS"],
      bullets: [
        "Designed and deployed a Retrieval-Augmented Generation pipeline in Python using LangChain, LlamaIndex, and FAISS vector databases that grounds LLM responses in domain-specific documents, cutting average retrieval time by 40% on internal test queries.",
        "Tuned prompts and retrieval strategies (chunking, overlap, system prompts) and fine-tuned sentence transformers on domain text, iterating with stakeholder feedback to reduce off-topic and unsupported responses.",
        "Developed embedding-based semantic search using sentence-transformer models indexed in FAISS, surfacing relevant content that simple keyword matching consistently missed.",
        "Wrapped model inference in containerized FastAPI services on Docker, supporting both batch and near-real-time prediction workflows for internal users.",
        "Set up experiment tracking and model versioning in MLflow across 8 model iterations, making every result reproducible and easy to compare side by side.",
        "Implemented drift detection and monitoring jobs that catch distribution shifts on input features, reducing undetected performance regressions by 25%.",
        "Trained and tuned XGBoost, Random Forest, and Logistic Regression models with cross-validation and Bayesian hyperparameter search via Optuna, beating baseline accuracy by 12% on the held-out set.",
        "Automated data ingestion, validation, and feature engineering pipelines using Python, Pandas, SQL, and AWS S3, ensuring reliable preprocessing for downstream model training and inference workflows."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "KPMG Global Services",
      location: "Bengaluru, India",
      period: "Oct 2020 - Aug 2023",
      tags: ["PySpark", "Databricks", "AWS", "Kafka"],
      bullets: [
        "Built distributed ML pipelines using Python, PySpark, and Databricks to process high-volume transactional records daily for predictive analytics and financial risk applications, reducing pipeline runtime by 30%.",
        "Trained and tuned supervised and unsupervised models including XGBoost, SVM, K-Means, and PCA with Bayesian hyperparameter optimization, lifting accuracy on client risk-scoring benchmarks by 15%.",
        "Integrated Kafka and Spark Streaming components to feed live transactional signals into inference pipelines, cutting end-to-end model latency by 20%.",
        "Deployed batch and near-real-time inference workloads on AWS with containerized Docker workflows, supporting high-throughput ML applications across enterprise client engagements.",
        "Owned CI/CD for model deployment using Git and Docker, with SHAP-based explainability reports and ROC-AUC and precision-recall dashboards that stakeholders relied on for production sign-off.",
        "Maintained a centralized feature store on AWS Redshift that kept training and serving features consistent, eliminating feature drift across 5 production models in active client engagements.",
        "Drove monthly model performance reviews with data science, product, and risk stakeholders, using SHAP-based feature importance and segment-level error analysis to surface drift and bias before it affected business outcomes.",
        "Scheduled model retraining and validation jobs in Apache Airflow with automated data quality and feature drift checks, ensuring model freshness across 5+ production deployments."
      ]
    }
  ],
  // Each project supports optional `repo` and `demo` URLs. Fill these in with your
  // GitHub links (and a live demo if you have one) — buttons only appear when a URL
  // is present, so empty strings are safely hidden.
  projects: [
    {
      title: "Smart Quiz Generator – Agentic AI Learning Platform",
      category: "GenAI / Agentic AI",
      tags: ["LangChain", "Llama 3.3", "Multi-Agent AI", "Groq"],
      impact: "5-agent system",
      repo: "",
      demo: "",
      description:
        "Multi-agent AI system built in LangChain with 5 specialized agents (Transcription, Content Filtering, Concept Extraction, Question Generation, Evaluation) that converts YouTube lectures into concept-grounded MCQ quizzes using Llama 3.3 70B via Groq."
    },
    {
      title: "Breast Cancer Survival Prediction System",
      category: "Clinical ML",
      tags: ["Survival Analysis", "FastAPI", "Docker", "SHAP"],
      impact: "0.81 C-index",
      repo: "",
      demo: "",
      description:
        "Clinical survival analysis platform using Cox Proportional Hazards and Random Survival Forest models with automated feature engineering, missing-value imputation, normalization, Dockerized FastAPI inference, and SHAP dashboards for biomarker transparency."
    },
    {
      title: "Heart Disease Prediction API",
      category: "Healthcare ML",
      tags: ["Scikit-learn", "Flask", "Docker", "SHAP"],
      impact: "89% AUC",
      repo: "",
      demo: "",
      description:
        "End-to-end classification service for heart disease risk from clinical datasets, using ensemble model stacking, real-time Flask inference, Docker containerization, and patient-level explainability."
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Dominguez Hills",
      location: "Carson, CA"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "K.S. School of Engineering and Management",
      location: "Bengaluru, KA"
    }
  ]
};
 