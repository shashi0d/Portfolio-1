const h = React.createElement;
const data = window.portfolioData;

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HEADER_ICONS = {
  work: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("rect", { className: "icon-lid", x: "3", y: "7", width: "18", height: "13", rx: "2" }),
    h("path", { className: "icon-handle", d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })
  ),
  experience: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { className: "icon-hand", d: "M12 12 L12 7" }),
    h("path", { className: "icon-hand-min", d: "M12 12 L15.5 13.5" })
  ),
  skills: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("path", { className: "icon-spark icon-spark-1", d: "M12 3v4" }),
    h("path", { className: "icon-spark icon-spark-2", d: "M12 17v4" }),
    h("path", { className: "icon-spark icon-spark-3", d: "M3 12h4" }),
    h("path", { className: "icon-spark icon-spark-4", d: "M17 12h4" }),
    h("circle", { cx: "12", cy: "12", r: "4" })
  ),
  open: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("path", { className: "icon-bell", d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" }),
    h("path", { d: "M13.73 21a2 2 0 0 1-3.46 0" })
  ),
  education: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("path", { d: "M22 10 12 5 2 10l10 5 10-5z" }),
    h("path", { className: "icon-cap-string", d: "M6 12v5c3 2 9 2 12 0v-5" })
  ),
  contact: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    h("path", { className: "icon-mail-flap", d: "M3 7l9 6 9-6" })
  )
};

function SectionLabel({ icon, children }) {
  return h(
    "div",
    { className: "section-label" },
    h("span", { className: cx("label-icon", `label-icon-${icon}`) }, HEADER_ICONS[icon]),
    children
  );
}

function Nav() {
  return h(
    "nav",
    { className: "site-nav" },
    h(
      "div",
      { className: "nav-inner" },
      h("span", { className: "nav-name" }, "PD", h("span", { className: "nav-name-dot" })),
      h(
        "div",
        { className: "nav-links" },
        h("a", { href: "#work" }, "Work"),
        h("a", { href: "#experience" }, "Experience"),
        h("a", { href: "#skills" }, "Skills"),
        h("a", { href: `mailto:${data.profile.email}` }, "Email"),
        h("a", { href: data.profile.linkedin, target: "_blank", rel: "noreferrer" }, "LinkedIn"),
        h("a", { href: data.profile.github, target: "_blank", rel: "noreferrer" }, "GitHub"),
        h("a", { className: "btn", href: data.profile.resumeFile, target: "_blank", rel: "noreferrer" }, "Resume")
      )
    )
  );
}

const TOP_SKILLS = ["RAG", "LangChain", "PyTorch", "AWS S3", "Docker", "MLflow"];

function SkillsMarquee() {
  const track = [...TOP_SKILLS, ...TOP_SKILLS];
  return h(
    "div",
    { className: "skills-marquee", "aria-hidden": "true" },
    h(
      "div",
      { className: "skills-marquee-track" },
      track.map((name, i) => h("span", { key: `${name}-${i}`, className: "marquee-pill" }, name))
    )
  );
}

function Hero() {
  return h(
    "section",
    { id: "home" },
    h(
      "div",
      { className: "hero" },
      h(
        "div",
        { className: "avatar-ph", role: "img", "aria-label": `${data.profile.name} portrait placeholder` },
        "512 × 512"
      ),
      h(
        "div",
        null,
        h("h1", null, data.profile.name),
        h("div", { className: "role" }, data.profile.role),
        h("p", { className: "line" }, data.profile.headline),
        h("div", { className: "meta" }, data.profile.location),
        h(SkillsMarquee)
      )
    )
  );
}

function useInView() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AgentNetworkGraphic() {
  const [ref, visible] = useInView();
  const cx0 = 320;
  const cy0 = 180;
  const nodes = [[320, 180, 26], [150, 90, 18], [150, 270, 18], [490, 90, 18], [490, 270, 18]];
  return h(
    "svg",
    { ref, viewBox: "0 0 640 360", role: "img", "aria-label": "Diagram of five connected AI agent nodes" },
    h("rect", { width: "640", height: "360", fill: "#ffffff" }),
    h("g", {
      stroke: "rgba(124,92,255,0.4)",
      strokeWidth: "1.5",
      fill: "none",
      style: { opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }
    },
      h("line", { x1: "320", y1: "180", x2: "150", y2: "90" }),
      h("line", { x1: "320", y1: "180", x2: "150", y2: "270" }),
      h("line", { x1: "320", y1: "180", x2: "490", y2: "90" }),
      h("line", { x1: "320", y1: "180", x2: "490", y2: "270" }),
      h("line", { x1: "150", y1: "90", x2: "490", y2: "90" }),
      h("line", { x1: "150", y1: "270", x2: "490", y2: "270" })
    ),
    nodes.map(([cx_, cy_, r], i) => {
      const dx = i === 0 ? 0 : cx0 - cx_;
      const dy = i === 0 ? 0 : cy0 - cy_;
      return h("circle", {
        key: i,
        cx: cx_,
        cy: cy_,
        r,
        fill: i === 0 ? "rgba(124,92,255,0.18)" : "rgba(255,154,90,0.16)",
        stroke: i === 0 ? "rgba(124,92,255,0.8)" : "rgba(255,154,90,0.7)",
        strokeWidth: "1.5",
        style: {
          transformBox: "fill-box",
          transformOrigin: "center",
          transform: visible ? "translate(0, 0) scale(1)" : `translate(${dx}px, ${dy}px) scale(0.4)`,
          opacity: visible ? 1 : 0,
          transition: `transform 0.8s cubic-bezier(.2,.8,.3,1) ${i * 0.08}s, opacity 0.5s ease ${i * 0.08}s`
        }
      });
    })
  );
}

function SurvivalCurveGraphic() {
  const [ref, visible] = useInView();
  const draw = (delay) => ({
    strokeDasharray: 1000,
    strokeDashoffset: visible ? 0 : 1000,
    transition: `stroke-dashoffset 1.4s ease ${delay}s`
  });
  return h(
    "svg",
    { ref, viewBox: "0 0 640 360", role: "img", "aria-label": "Survival probability curve over time" },
    h("rect", { width: "640", height: "360", fill: "#ffffff" }),
    h("g", { stroke: "rgba(28,30,27,0.08)", strokeWidth: "1" },
      [80, 140, 200, 260, 320].map((y) => h("line", { key: y, x1: "60", y1: y, x2: "580", y2: y }))
    ),
    h("path", {
      d: "M60 80 L150 80 L150 130 L260 130 L260 175 L340 175 L340 220 L430 220 L430 255 L580 255",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2.5",
      style: draw(0.1)
    }),
    h("path", {
      d: "M60 80 L150 80 L150 110 L260 110 L260 150 L340 150 L340 190 L430 190 L430 215 L580 215",
      fill: "none",
      stroke: "rgba(76,201,196,0.7)",
      strokeWidth: "2",
      strokeDasharray: "6 6",
      style: { opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }
    }),
    h("line", { x1: "60", y1: "20", x2: "60", y2: "320", stroke: "rgba(28,30,27,0.2)", strokeWidth: "1.5" }),
    h("line", { x1: "60", y1: "320", x2: "580", y2: "320", stroke: "rgba(28,30,27,0.2)", strokeWidth: "1.5" })
  );
}

function HeartClassifierGraphic() {
  const [ref, visible] = useInView();
  return h(
    "svg",
    { ref, viewBox: "0 0 640 360", role: "img", "aria-label": "Heart rate waveform with a classification boundary" },
    h("rect", { width: "640", height: "360", fill: "#ffffff" }),
    h("circle", {
      cx: "320", cy: "180", r: "130", fill: "none", stroke: "rgba(255,154,90,0.45)", strokeWidth: "1.5", strokeDasharray: "4 6",
      style: {
        transformBox: "fill-box",
        transformOrigin: "center",
        transform: visible ? "scale(1)" : "scale(0.85)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.8s ease, opacity 0.6s ease"
      }
    }),
    h("path", {
      d: "M40 200 H230 L255 140 L290 250 L320 110 L350 200 H410 L430 175 L450 200 H600",
      fill: "none",
      stroke: "var(--accent)",
      strokeWidth: "2.5",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      style: {
        strokeDasharray: 900,
        strokeDashoffset: visible ? 0 : 900,
        transition: "stroke-dashoffset 1.2s ease 0.2s"
      }
    })
  );
}

const projectGraphics = {
  "agent-network": AgentNetworkGraphic,
  "survival-curve": SurvivalCurveGraphic,
  "heart-classifier": HeartClassifierGraphic
};

function Work() {
  return h(
    "section",
    { id: "work" },
    h(SectionLabel, { icon: "work" }, "Selected Work"),
    h(
      "div",
      { className: "work-grid" },
      data.projects.map((project, i) => {
        const Graphic = projectGraphics[project.graphic];
        const badgeClass = ["impact-badge-purple", "impact-badge-coral", "impact-badge-teal"][i % 3];
        return h(
          "div",
          { key: project.title, className: "work-card" },
          h(
            "div",
            { className: "work-grid-inner" },
            h("div", { className: "work-image-ph" }, Graphic ? h(Graphic) : `${project.category} screenshot`),
            h(
              "div",
              null,
              h("h3", null, project.title),
              h("div", { className: "work-sub" }, project.category),
              h("p", { className: "copy" }, project.description),
              project.impact ? h("div", { className: cx("impact-badge", badgeClass) }, project.impact) : null,
              h(
                "div",
                { className: "work-tags" },
                project.tags.map((tag) => h("span", { key: tag, className: "tag" }, tag))
              ),
              project.repo
                ? h("a", { className: "work-link", href: project.repo, target: "_blank", rel: "noreferrer" }, "View source →")
                : null,
              project.demo
                ? h("a", { className: "work-link", href: project.demo, target: "_blank", rel: "noreferrer" }, "Live demo →")
                : null
            )
          )
        );
      })
    )
  );
}

const SHORT_BULLETS = {
  "California State University": [
    "RAG pipeline (LangChain, LlamaIndex, FAISS): 40% faster retrieval",
    "XGBoost / Random Forest / Logistic Regression with Optuna: +12% over baseline",
    "Containerized FastAPI inference (batch + near-real-time) on Docker",
    "Drift detection + MLflow tracking across 8 iterations: 25% fewer undetected regressions",
    "Prompt and retrieval tuning with stakeholder feedback to cut off-topic responses"
  ],
  "KPMG Global Services": [
    "Distributed pipelines (PySpark, Databricks): 30% faster runtime",
    "XGBoost / SVM / K-Means / PCA tuning: +15% risk-scoring accuracy",
    "Kafka + Spark Streaming for live inference: 20% lower latency",
    "Feature store on AWS Redshift: drift eliminated across 5 models",
    "CI/CD + SHAP explainability for production sign-off"
  ]
};

function Experience() {
  return h(
    "section",
    { id: "experience" },
    h(SectionLabel, { icon: "experience" }, "Experience"),
    data.experience.map((job) =>
      h(
        "div",
        { key: `${job.company}-${job.period}`, className: "exp-item" },
        h(
          "div",
          { className: "exp-header" },
          h("h3", null, `${job.role} · ${job.company}`),
          h("span", { className: "period" }, job.period)
        ),
        h("div", { className: "exp-company" }, job.location),
        h(
          "div",
          { className: "exp-tags" },
          job.tags.map((tag) => h("span", { key: tag, className: "tag" }, tag))
        ),
        h(
          "ul",
          { className: "exp-list" },
          (SHORT_BULLETS[job.company] || job.bullets).map((bullet) => h("li", { key: bullet }, bullet))
        )
      )
    )
  );
}

const SKILL_TABS = [
  { category: "ML", skills: ["XGBoost", "Random Forest", "Logistic Regression", "SVM", "K-Means", "PCA", "SHAP", "Optuna", "Gradient Boosting", "Time Series", "Feature Engineering", "Hyperparameter Tuning"] },
  { category: "GenAI", skills: ["LangChain", "LlamaIndex", "FAISS", "RAG", "Prompt Engineering", "Llama 3.3", "Groq", "Hugging Face", "Vector Databases", "Fine-Tuning", "OpenAI API", "Agentic Workflows"] },
  { category: "MLOps", skills: ["AWS S3", "AWS Redshift", "Docker", "MLflow", "CI/CD", "Kafka", "Spark", "Databricks", "Kubernetes", "Airflow", "Model Monitoring", "Terraform"] },
  { category: "Stack", skills: ["FastAPI", "Flask", "Python", "SQL", "PyTorch", "Pandas", "NumPy", "Git", "Linux", "REST APIs", "Streamlit", "Plotly"] }
];

function Skills() {
  const [active, setActive] = React.useState(0);
  return h(
    "section",
    { id: "skills" },
    h(SectionLabel, { icon: "skills" }, "Skills"),
    h(
      "div",
      { className: "skill-tabs" },
      SKILL_TABS.map((tab, i) =>
        h("button", {
          key: tab.category,
          className: cx("skill-tab", i === active && "skill-tab-active"),
          onClick: () => setActive(i)
        }, tab.category)
      )
    ),
    h(
      "div",
      { className: "skill-pill-group" },
      SKILL_TABS[active].skills.map((name) =>
        h("span", { key: name, className: "skill-pill" }, name)
      )
    )
  );
}

function Cta() {
  return h(
    "section",
    { id: "cta" },
    h(
      "div",
      { className: "cta-box" },
      h(SectionLabel, { icon: "open" }, "Open to Work"),
      h("h2", null, "Looking for AI / ML Engineer roles"),
      h("p", null, "Open to full-time and contract opportunities in machine learning, generative AI, and MLOps. Let's build something reliable together."),
      h(
        "div",
        { className: "cta-actions" },
        h("a", { className: "btn btn-primary", href: `mailto:${data.profile.email}` }, "Contact me"),
        h("a", { className: "btn", href: data.profile.resumeFile, target: "_blank", rel: "noreferrer" }, "View resume")
      )
    )
  );
}

const CONTACT_ICONS = {
  Email: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
    h("path", { d: "M3 7l9 6 9-6" })
  ),
  Phone: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("path", { d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" })
  ),
  LinkedIn: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
    h("line", { x1: "8", y1: "11", x2: "8", y2: "16" }),
    h("line", { x1: "8", y1: "8", x2: "8", y2: "8.01" }),
    h("path", { d: "M12 16v-5h2a2 2 0 0 1 2 2v3" })
  ),
  GitHub: h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    h("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 1.7 5.4 2 5.4 2a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 8.4c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V19" })
  )
};

function Closing() {
  return h(
    "section",
    { id: "closing" },
    h(
      "div",
      { className: "closing-grid" },
      h(
        "div",
        null,
        h(SectionLabel, { icon: "education" }, "Education"),
        data.education.map((item) =>
          h(
            "div",
            { key: item.school, className: "edu-item" },
            h("div", { className: "degree" }, item.degree),
            h("div", { className: "school" }, `${item.school} · ${item.location}`)
          )
        )
      ),
      h(
        "div",
        null,
        h(SectionLabel, { icon: "contact" }, "Contact"),
        h(
          "div",
          { className: "contact-list" },
          h("a", { href: `mailto:${data.profile.email}` },
            h("span", { className: "contact-icon" }, CONTACT_ICONS.Email),
            h("span", null, h("span", { className: "label" }, "Email"), data.profile.email)
          ),
          h("a", { href: `tel:${data.profile.phone.replace(/[^0-9]/g, "")}` },
            h("span", { className: "contact-icon" }, CONTACT_ICONS.Phone),
            h("span", null, h("span", { className: "label" }, "Phone"), data.profile.phone)
          ),
          h("a", { href: data.profile.linkedin, target: "_blank", rel: "noreferrer" },
            h("span", { className: "contact-icon" }, CONTACT_ICONS.LinkedIn),
            h("span", null, h("span", { className: "label" }, "LinkedIn"), "linkedin.com/in/pranathi-deepak")
          ),
          h("a", { href: data.profile.github, target: "_blank", rel: "noreferrer" },
            h("span", { className: "contact-icon" }, CONTACT_ICONS.GitHub),
            h("span", null, h("span", { className: "label" }, "GitHub"), "github.com/PranathiDeepak")
          )
        )
      )
    )
  );
}

function App() {
  return h(
    React.Fragment,
    null,
    h(Nav),
    h(
      "div",
      { className: "wrap" },
      h(Hero),
      h(Work),
      h(Experience),
      h(Skills),
      h(Cta),
      h(Closing)
    ),
    h("footer", null, `© 2026 ${data.profile.name}`)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
