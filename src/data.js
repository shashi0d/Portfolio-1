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
    resumeFile: "PranathiDeepak_Resume_ElevateMe.pdf",
    headline: "Production ML, GenAI, RAG, and MLOps systems that move from notebooks to reliable user-facing products.",
    summary:
      "Machine Learning Engineer with 4+ years of experience designing, training, and deploying production ML and AI systems at scale. Hands-on across Generative AI, Agentic AI systems, LLMs, RAG architectures, feature engineering, real-time inference services, and MLOps automation using Python, PyTorch, AWS, Docker, Kubernetes, and MLflow."
  },
  metrics: [
    { value: "4+", label: "Years in ML and AI" },
    { value: "60%", label: "Retrieval time reduced" },
    { value: "35%", label: "Pipeline runtime cut" },
    { value: "10+", label: "Tracked model iterations" }
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
        "Architected and deployed RAG pipelines using LangChain, LlamaIndex, and FAISS, enabling context-aware LLM responses over large structured and unstructured datasets and reducing information retrieval time by 60%.",
        "Designed end-to-end ML pipelines using Python, Pandas, SQL, and AWS S3, automating ingestion, validation, and feature transformation while reducing manual data preparation effort by 60%.",
        "Built embedding-based semantic search systems with transformer models, improving retrieval relevance and scalable knowledge discovery.",
        "Optimized supervised models including XGBoost, Random Forest, and Logistic Regression with cross-validation and Bayesian tuning, improving predictive accuracy by 18%.",
        "Deployed REST inference APIs using FastAPI and Docker for batch and near-real-time prediction workflows.",
        "Implemented MLflow experiment tracking, model versioning, comparison, and statistical drift detection, reducing undetected model performance drops by 40%."
      ]
    },
    {
      role: "Math Tutor",
      company: "Davis Middle School",
      location: "Carson, CA",
      period: "Oct 2023 - Jul 2024",
      tags: ["Teaching", "Statistics", "Analytics"],
      bullets: [
        "Delivered algebra and statistics instruction to 15+ students, contributing to a 20% improvement in average exam scores through structured, data-driven lesson planning.",
        "Designed exercises focused on equations and probability, strengthening analytical reasoning used in ML evaluation and statistical analysis.",
        "Tracked student performance data to identify learning trends and adapt instruction through feedback loops."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "KPMG Global Services",
      location: "Bengaluru, India",
      period: "Oct 2020 - Aug 2023",
      tags: ["PySpark", "Databricks", "AWS", "Kafka"],
      bullets: [
        "Built distributed ML pipelines using Python, PySpark, and Databricks to process millions of transactional records daily for predictive analytics and financial risk, reducing pipeline runtime by 35%.",
        "Designed and maintained a centralized feature store on AWS Redshift, ensuring training-serving consistency and eliminating feature drift across 5+ production models.",
        "Developed and tuned XGBoost, SVM, K-Means, and PCA models with Bayesian optimization, achieving 15-20% accuracy improvements on client risk-scoring benchmarks.",
        "Deployed scalable batch and near-real-time inference pipelines on AWS with Docker workflows for enterprise ML applications.",
        "Automated CI/CD deployment pipelines with Git and Docker, plus SHAP explainability and ROC-AUC / precision-recall dashboards for stakeholder sign-off.",
        "Integrated Kafka and Spark Streaming to feed live transactional signals into inference pipelines, reducing model latency by 25%."
      ]
    }
  ],
  projects: [
    {
      title: "Breast Cancer Survival Prediction System",
      category: "Clinical ML",
      status: "Portfolio-ready case study",
      tags: ["Survival Analysis", "FastAPI", "Docker", "SHAP"],
      impact: "0.81 C-index",
      description:
        "Clinical survival analysis platform using Cox Proportional Hazards and Random Survival Forest models with automated feature engineering, missing-value imputation, normalization, Dockerized FastAPI inference, and SHAP dashboards for biomarker transparency."
    },
    {
      title: "Heart Disease Prediction API",
      category: "Healthcare ML",
      status: "API project",
      tags: ["Scikit-learn", "Flask", "Docker", "SHAP"],
      impact: "89% AUC",
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
