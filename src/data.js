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
    resumeFile: "https://pranathideepak.github.io/Portfolio/PranathiDeepak_Resume.pdf",
    headline: "Production ML, GenAI, RAG, and MLOps systems that move from notebooks to reliable user-facing products.",
    tagline:
      "I'm a Machine Learning Engineer with 4+ years building production ML and Generative AI systems, from RAG pipelines and multi-agent LLM apps to the MLOps infrastructure that keeps models reliable in the real world. I recently completed a Master's in Computer Science focused on GenAI and RAG, with hands-on production experience at KPMG and CSUDH across Python, PyTorch, AWS, LangChain, and Docker/Kubernetes.",
    summary:
      "Machine Learning Engineer with 4+ years of experience shipping production ML and Generative AI systems across financial services (KPMG) and applied AI environments. Recently completed a Master's in Computer Science with research focus on Generative AI and RAG systems. Hands-on builder of end-to-end ML pipelines using Python, PyTorch, and AWS, from feature engineering through real-time inference and MLOps. Recent work focuses on LLM and RAG systems with LangChain and LlamaIndex, including a multi-agent learning platform built on Llama 3.3 with adaptive content generation and evaluation. Strong on production deployment, MLOps lifecycle, and stakeholder communication on model governance."
  },
  metrics: [
    { value: "4+", label: "Years in ML and AI" },
    { value: "40%", label: "Retrieval time reduced" },
    { value: "30%", label: "Pipeline runtime cut" },
    { value: "10+", label: "Production model deployments" }
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
      skills: [
        { name: "XGBoost" },
        { name: "Random Forest" },
        { name: "Gradient Boosting" },
        { name: "SVM" },
        { name: "Clustering" },
        { name: "Scikit-learn", icon: "scikitlearn" },
        { name: "Hyperparameter Tuning" },
        { name: "SHAP" },
        { name: "ROC-AUC" }
      ]
    },
    {
      category: "Generative and Agentic AI",
      skills: [
        { name: "Generative AI" },
        { name: "Agentic AI" },
        { name: "AI Agents" },
        { name: "LLMs" },
        { name: "RAG" },
        { name: "LangChain", icon: "langchain" },
        { name: "LangChain Agents" },
        { name: "LlamaIndex" },
        { name: "FAISS" },
        { name: "Pinecone" },
        { name: "Prompt Engineering" },
        { name: "Tool Use" },
        { name: "Multi-Step Reasoning" }
      ]
    },
    {
      category: "Deep Learning and NLP",
      skills: [
        { name: "PyTorch", icon: "pytorch" },
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "CNNs" },
        { name: "RNNs" },
        { name: "LSTMs" },
        { name: "Transformers" },
        { name: "Embeddings" },
        { name: "Text Classification" },
        { name: "Semantic Search" }
      ]
    },
    {
      category: "MLOps and Cloud",
      skills: [
        { name: "AWS S3", icon: "amazonaws" },
        { name: "EC2" },
        { name: "SageMaker" },
        { name: "Lambda" },
        { name: "Redshift" },
        { name: "Azure ML", icon: "microsoftazure" },
        { name: "GCP Vertex AI", icon: "googlecloud" },
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "Airflow", icon: "apacheairflow" },
        { name: "MLflow", icon: "mlflow" },
        { name: "CI/CD" },
        { name: "Model Versioning" },
        { name: "Drift Detection" }
      ]
    },
    {
      category: "Data and Streaming",
      skills: [
        { name: "Pandas", icon: "pandas" },
        { name: "NumPy", icon: "numpy" },
        { name: "Spark", icon: "apachespark" },
        { name: "Spark Streaming", icon: "apachespark" },
        { name: "Kafka", icon: "apachekafka" },
        { name: "Databricks", icon: "databricks" },
        { name: "ETL/ELT Pipelines" },
        { name: "Feature Stores" },
        { name: "Data Validation" }
      ]
    },
    {
      category: "APIs and Deployment",
      skills: [
        { name: "FastAPI", icon: "fastapi" },
        { name: "Flask", icon: "flask" },
        { name: "REST APIs" },
        { name: "Batch Inference" },
        { name: "Real-Time Inference" },
        { name: "Model Serving" },
        { name: "Python", icon: "python" },
        { name: "SQL" },
        { name: "Java" },
        { name: "R" }
      ]
    }
  ],
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "California State University",
      location: "Carson, CA",
      period: "Aug 2024 - Dec 2025",
      tags: ["RAG", "MLOps", "FastAPI", "AWS"],
      defaultOpen: true,
      bullets: [
        "Designed and deployed a Retrieval-Augmented Generation pipeline in Python using LangChain, LlamaIndex, and FAISS vector databases that grounds LLM responses in domain-specific documents, cutting average retrieval time by 40% on internal test queries.",
        "Trained and tuned XGBoost, Random Forest, and Logistic Regression models with cross-validation and Bayesian hyperparameter search via Optuna, beating baseline accuracy by 12% on the held-out set.",
        "Implemented drift detection and monitoring jobs that catch distribution shifts on input features, reducing undetected performance regressions by 25%.",
        "Set up experiment tracking and model versioning in MLflow across 8 model iterations, making every result reproducible and easy to compare side by side.",
        "Wrapped model inference in containerized FastAPI services on Docker, supporting both batch and near-real-time prediction workflows for internal users.",
        "Developed embedding-based semantic search using sentence-transformer models indexed in FAISS, surfacing relevant content that simple keyword matching consistently missed.",
        "Tuned prompts and retrieval strategies (chunking, overlap, system prompts) and fine-tuned sentence transformers on domain text, iterating with stakeholder feedback to reduce off-topic and unsupported responses.",
        "Automated data ingestion, validation, and feature engineering pipelines using Python, Pandas, SQL, and AWS S3, ensuring reliable preprocessing for downstream model training and inference workflows."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "KPMG Global Services",
      location: "Bengaluru, India",
      period: "Oct 2020 - Aug 2023",
      tags: ["PySpark", "Databricks", "AWS", "Kafka"],
      defaultOpen: false,
      bullets: [
        "Built distributed ML pipelines using Python, PySpark, and Databricks to process high-volume transactional records daily for predictive analytics and financial risk applications, reducing pipeline runtime by 30%.",
        "Trained and tuned supervised and unsupervised models including XGBoost, SVM, K-Means, and PCA with Bayesian hyperparameter optimization, lifting accuracy on client risk-scoring benchmarks by 15%.",
        "Integrated Kafka and Spark Streaming components to feed live transactional signals into inference pipelines, cutting end-to-end model latency by 20%.",
        "Maintained a centralized feature store on AWS Redshift that kept training and serving features consistent, eliminating feature drift across 5 production models in active client engagements.",
        "Scheduled model retraining and validation jobs in Apache Airflow with automated data quality and feature drift checks, ensuring model freshness across 5+ production deployments.",
        "Deployed batch and near-real-time inference workloads on AWS with containerized Docker workflows, supporting high-throughput ML applications across enterprise client engagements.",
        "Owned CI/CD for model deployment using Git and Docker, with SHAP-based explainability reports and ROC-AUC and precision-recall dashboards that stakeholders relied on for production sign-off.",
        "Drove monthly model performance reviews with data science, product, and risk stakeholders, using SHAP-based feature importance and segment-level error analysis to surface drift and bias before it affected business outcomes."
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
      graphic: "agent-network",
      repo: "https://github.com/PranathiDeepak/smart-quiz-generator",
      demo: "",
      description:
        "A multi-agent AI system built in LangChain with 5 specialized agents (Transcription, Content Filtering, Concept Extraction, Question Generation, and Evaluation) that converts YouTube lectures into concept-grounded multiple-choice quizzes using Llama 3.3 70B via Groq."
    },
    {
      title: "Breast Cancer Survival Prediction System",
      category: "Clinical ML",
      tags: ["Survival Analysis", "FastAPI", "Docker", "SHAP"],
      impact: "0.81 C-index",
      graphic: "survival-curve",
      repo: "",
      demo: "",
      description:
        "A clinical survival-analysis platform combining Cox Proportional Hazards and Random Survival Forest models with automated feature engineering, missing-value imputation, and normalization, served through a Dockerized FastAPI inference layer with SHAP dashboards for biomarker transparency."
    },
    {
      title: "Heart Disease Prediction API",
      category: "Healthcare ML",
      tags: ["Scikit-learn", "Flask", "Docker", "SHAP"],
      impact: "89% AUC",
      graphic: "heart-classifier",
      repo: "",
      demo: "",
      description:
        "An end-to-end classification service that estimates heart disease risk from clinical data using ensemble model stacking, with real-time Flask inference, Docker containerization, and patient-level explainability via SHAP."
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Dominguez Hills",
      location: "Carson, CA",
      note: "Research focus on Generative AI and RAG systems"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "K.S. School of Engineering and Management",
      location: "Bengaluru, KA",
      note: "Foundation in algorithms, systems, and software engineering"
    }
  ]
};
