const { useEffect, useMemo, useState } = React;
const h = React.createElement;
const data = window.portfolioData;
 
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
 
function SectionShell({ id, eyebrow, title, children, className }) {
  return h(
    "section",
    { id, className: cx("section-shell", className) },
    h(
      "div",
      { className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10" },
      h("div", { className: "mb-10 flex flex-wrap items-end justify-between gap-5" },
        h("div", null,
          h("p", { className: "eyebrow" }, eyebrow),
          h("h2", { className: "section-title" }, title)
        ),
        h("a", { className: "section-jump", href: "#contact" }, "Start a conversation")
      ),
      children
    )
  );
}
 
function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "experience", "projects", "education", "contact"];
  return h(
    "header",
    { className: "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl" },
    h(
      "nav",
      { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" },
      h("a", { href: "#home", className: "flex items-center gap-3" },
        h("span", { className: "grid h-10 w-10 place-items-center rounded-md border border-mint/40 bg-mint/10 font-mono text-sm font-semibold text-mint" }, "PD"),
        h("span", null,
          h("span", { className: "block text-sm font-bold text-paper" }, data.profile.name),
          h("span", { className: "block text-xs text-paper/55" }, data.profile.role)
        )
      ),
      h("button", {
        className: "nav-toggle md:hidden",
        onClick: () => setOpen(!open),
        "aria-label": "Toggle navigation"
      }, h("span"), h("span"), h("span")),
      h("div", { className: cx("nav-links", open && "nav-links-open") },
        links.map((link) =>
          h("a", {
            key: link,
            href: `#${link}`,
            onClick: () => setOpen(false),
            className: "capitalize"
          }, link)
        )
      )
    )
  );
}
 
function Hero() {
  const [focus, setFocus] = useState(0);
  const active = data.focusAreas[focus];
 
  useEffect(() => {
    const timer = setInterval(() => setFocus((current) => (current + 1) % data.focusAreas.length), 4200);
    return () => clearInterval(timer);
  }, []);
 
  return h(
    "section",
    { id: "home", className: "hero relative overflow-hidden pt-24" },
    h("div", { className: "hero-grid" }),
    h("div", { className: "mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10" },
      h("div", { className: "relative z-10" },
        h("p", { className: "eyebrow" }, "Machine Learning Engineer"),
        h("h1", { className: "hero-title" },
          "I build reliable AI systems ",
          h("span", { className: "hero-title-accent" }, "that work in production")
        ),
        h("p", { className: "mt-6 max-w-2xl text-lg leading-8 text-paper/72" }, data.profile.headline),
        h("div", { className: "mt-8 flex flex-wrap gap-3" },
          h("a", { className: "primary-btn", href: "#projects" }, "View selected work"),
          h("a", { className: "secondary-btn", href: data.profile.resumeFile, target: "_blank", rel: "noreferrer" }, "Open resume"),
          h("a", { className: "secondary-btn", href: `mailto:${data.profile.email}` }, "Email me")
        ),
        h("div", { className: "mt-10 grid gap-3 sm:grid-cols-4" },
          data.metrics.map((metric) =>
            h("div", { key: metric.label, className: "metric-card" },
              h("strong", null, metric.value),
              h("span", null, metric.label)
            )
          )
        )
      ),
      h("aside", { className: "relative z-10" },
        h("div", { className: "profile-panel" },
          h("div", { className: "flex items-start gap-5" },
            h("img", { src: data.profile.photo, alt: "Pranathi Deepak portrait", className: "h-32 w-32 rounded-md object-cover object-top ring-1 ring-white/15" }),
            h("div", { className: "min-w-0" },
              h("p", { className: "text-sm font-semibold text-mint" }, "Open to ML Engineer roles"),
              h("h2", { className: "mt-2 text-2xl font-black text-paper" }, data.profile.name),
              h("p", { className: "mt-2 text-sm leading-6 text-paper/65 profile-location" },
                h("span", null, data.profile.location),
                h("span", { className: "relocation-badge" }, "Open to relocation")
              )
            )
          ),
          h("div", { className: "mt-8 rounded-md border border-white/10 bg-white/[0.04] p-4" },
            h("div", { className: "mb-4 flex items-center justify-between gap-3" },
              h("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-paper/45" }, "Current focus"),
              h("div", { className: "flex gap-2" },
                data.focusAreas.map((item, index) =>
                  h("button", {
                    key: item.short,
                    className: cx("focus-dot", index === focus && "focus-dot-active"),
                    onClick: () => setFocus(index),
                    "aria-label": item.label
                  }, item.short)
                )
              )
            ),
            h("h3", { className: "text-xl font-bold text-paper" }, active.label),
            h("p", { className: "mt-3 min-h-24 text-sm leading-7 text-paper/68" }, active.detail)
          ),
          h("div", { className: "mt-6 grid gap-3" },
            data.recruiterSignals.map((signal) =>
              h("div", { key: signal, className: "signal-row" },
                h("span", { className: "signal-mark" }),
                h("p", null, signal)
              )
            )
          )
        )
      )
    )
  );
}
 
function About() {
  return h(
    SectionShell,
    { id: "about", eyebrow: "Career snapshot", title: "A production-minded ML engineer with GenAI depth." },
    h("div", { className: "grid gap-8 lg:grid-cols-[1fr_0.78fr]" },
      h("div", { className: "content-card p-7 sm:p-9" },
        h("p", { className: "text-lg leading-9 text-paper/75" }, data.profile.summary),
        h("div", { className: "mt-8 grid gap-3 sm:grid-cols-2" },
          data.focusAreas.map((item) =>
            h("div", { key: item.label, className: "rounded-md border border-white/10 bg-white/[0.035] p-5" },
              h("p", { className: "font-mono text-xs uppercase tracking-[0.25em] text-mint" }, item.short),
              h("h3", { className: "mt-3 text-lg font-bold text-paper" }, item.label),
              h("p", { className: "mt-3 text-sm leading-7 text-paper/62" }, item.detail)
            )
          )
        )
      ),
      h("div", { className: "content-card p-7 sm:p-9" },
        h("p", { className: "font-mono text-xs uppercase tracking-[0.28em] text-amber" }, "What to scan first"),
        h("div", { className: "mt-6 space-y-4" },
          data.recruiterSignals.map((signal, index) =>
            h("div", { key: signal, className: "flex gap-4" },
              h("span", { className: "mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-amber/15 font-mono text-xs font-bold text-amber" }, `0${index + 1}`),
              h("p", { className: "text-sm leading-7 text-paper/70" }, signal)
            )
          )
        )
      )
    )
  );
}
 
function Skills() {
  const [query, setQuery] = useState("");
  const filteredGroups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return data.skillGroups;
    return data.skillGroups
      .map((group) => ({
        ...group,
        skills: group.skills.filter((skill) => skill.toLowerCase().includes(needle) || group.category.toLowerCase().includes(needle))
      }))
      .filter((group) => group.skills.length);
  }, [query]);
 
  return h(
    SectionShell,
    { id: "skills", eyebrow: "Technical toolkit", title: "The stack behind my production ML and GenAI work." },
    h("div", { className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" },
      h("label", { className: "sr-only", htmlFor: "skill-search" }, "Search skills"),
      h("input", {
        id: "skill-search",
        value: query,
        onChange: (event) => setQuery(event.target.value),
        className: "search-input",
        placeholder: "Search: RAG, AWS, PyTorch, Docker..."
      }),
      h("button", { className: "secondary-btn", onClick: () => setQuery("") }, "Reset")
    ),
    h("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3" },
      filteredGroups.map((group) =>
        h("article", { key: group.category, className: cx("skill-card", `tone-${group.tone}`) },
          h("p", { className: "font-mono text-xs uppercase tracking-[0.24em]" }, group.category),
          h("div", { className: "mt-5 flex flex-wrap gap-2" },
            group.skills.map((skill) => h("span", { key: skill, className: "skill-pill" }, skill))
          )
        )
      )
    )
  );
}
 
function Experience() {
  const [active, setActive] = useState(0);
  return h(
    SectionShell,
    { id: "experience", eyebrow: "Experience timeline", title: "Experience across domains, adapting to what each project needs." },
    h("div", { className: "grid gap-5 lg:grid-cols-[0.42fr_1fr]" },
      h("div", { className: "space-y-3" },
        data.experience.map((job, index) =>
          h("button", {
            key: `${job.company}-${job.period}`,
            onClick: () => setActive(index),
            className: cx("timeline-tab", active === index && "timeline-tab-active")
          },
            h("span", { className: "text-left" },
              h("strong", null, job.company),
              h("small", null, job.period)
            )
          )
        )
      ),
      h("article", { className: "content-card p-7 sm:p-9" },
        h("div", { className: "flex flex-wrap items-start justify-between gap-4" },
          h("div", null,
            h("h3", { className: "text-2xl font-black text-paper" }, data.experience[active].role),
            h("p", { className: "mt-2 text-paper/60" }, `${data.experience[active].company} - ${data.experience[active].location}`)
          ),
          h("span", { className: "rounded-md border border-mint/25 bg-mint/10 px-3 py-2 font-mono text-xs font-semibold text-mint" }, data.experience[active].period)
        ),
        h("div", { className: "mt-5 flex flex-wrap gap-2" },
          data.experience[active].tags.map((tag) => h("span", { key: tag, className: "mini-tag" }, tag))
        ),
        h("ul", { className: "mt-7 space-y-4" },
          data.experience[active].bullets.map((bullet) =>
            h("li", { key: bullet, className: "flex gap-4 text-sm leading-7 text-paper/70" },
              h("span", { className: "mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" }),
              h("span", null, bullet)
            )
          )
        )
      )
    )
  );
}
 
function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(data.projects.flatMap((project) => project.tags)))];
  const projects = selectedTag === "All" ? data.projects : data.projects.filter((project) => project.tags.includes(selectedTag));
 
  return h(
    SectionShell,
    { id: "projects", eyebrow: "Selected work", title: "Projects exploring the frontier of ML and GenAI." },
    h("div", { className: "mb-6 flex flex-wrap gap-2" },
      tags.map((tag) =>
        h("button", {
          key: tag,
          onClick: () => setSelectedTag(tag),
          className: cx("filter-chip", selectedTag === tag && "filter-chip-active")
        }, tag)
      )
    ),
    h("div", { className: "grid gap-5 lg:grid-cols-2" },
      projects.map((project) =>
        h("article", { key: project.title, className: "project-card" },
          h("div", { className: "flex flex-wrap items-start justify-between gap-4" },
            h("div", null,
              h("p", { className: "font-mono text-xs uppercase tracking-[0.24em] text-mint" }, project.category),
              h("h3", { className: "mt-3 text-2xl font-black text-paper" }, project.title)
            ),
            project.impact ? h("span", { className: "impact-badge" }, project.impact) : null
          ),
          h("p", { className: "mt-5 text-sm leading-7 text-paper/68" }, project.description),
          h("div", { className: "mt-6 flex flex-wrap gap-2" },
            project.tags.map((tag) => h("span", { key: tag, className: "mini-tag" }, tag))
          ),
          (project.repo || project.demo)
            ? h("div", { className: "mt-6 flex flex-wrap gap-3" },
                project.repo
                  ? h("a", { className: "secondary-btn", href: project.repo, target: "_blank", rel: "noreferrer" }, "View code")
                  : null,
                project.demo
                  ? h("a", { className: "secondary-btn", href: project.demo, target: "_blank", rel: "noreferrer" }, "Live demo")
                  : null
              )
            : null
        )
      )
    )
  );
}
 
function Education() {
  return h(
    SectionShell,
    { id: "education", eyebrow: "Education", title: "Computer science foundation with applied ML specialization." },
    h("div", { className: "grid gap-5 md:grid-cols-2" },
      data.education.map((item) =>
        h("article", { key: item.school, className: "content-card p-7" },
          h("p", { className: "font-mono text-xs uppercase tracking-[0.24em] text-amber" }, item.location),
          h("h3", { className: "mt-4 text-xl font-black text-paper" }, item.degree),
          h("p", { className: "mt-3 text-paper/62" }, item.school)
        )
      )
    )
  );
}
 
function Contact() {
  return h(
    "section",
    { id: "contact", className: "relative overflow-hidden bg-paper text-ink" },
    h("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10" },
      h("div", null,
        h("p", { className: "font-mono text-xs font-bold uppercase tracking-[0.28em] text-clay" }, "Let's connect"),
        h("h2", { className: "mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl" }, "I'd love to connect and learn more about any opportunities."),
        h("p", { className: "mt-6 max-w-2xl text-lg leading-8 text-ink/68" }, "If you're hiring for production-ready ML work, let's talk about how I can help build dependable systems."),
        h("div", { className: "mt-8 flex flex-wrap gap-3" },
          h("a", { className: "dark-btn", href: `mailto:${data.profile.email}` }, "Email Pranathi"),
          h("a", { className: "light-btn", href: data.profile.resumeFile, target: "_blank", rel: "noreferrer" }, "Resume"),
          h("a", { className: "light-btn", href: data.profile.linkedin, target: "_blank", rel: "noreferrer" }, "LinkedIn"),
          h("a", { className: "light-btn", href: data.profile.github, target: "_blank", rel: "noreferrer" }, "GitHub")
        )
      ),
      h("div", { className: "rounded-md border border-ink/10 bg-white/55 p-6 shadow-xl" },
        [
          ["Email", data.profile.email, `mailto:${data.profile.email}`],
          ["Phone", data.profile.phone, `tel:${data.profile.phone.replace(/[^0-9]/g, "")}`],
          ["Location", null, "#home"],
          ["LinkedIn", "linkedin.com/in/pranathi-deepak", data.profile.linkedin],
          ["GitHub", "github.com/PranathiDeepak", data.profile.github]
        ].map(([label, value, href]) =>
          h("a", { key: label, href, className: "contact-row", target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noreferrer" : undefined },
            h("span", null, label),
            label === "Location"
              ? h("strong", null, `${data.profile.location} (${data.profile.availability})`)
              : h("strong", null, value)
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
    h("main", null,
      h(Hero),
      h(About),
      h(Skills),
      h(Experience),
      h(Projects),
      h(Education),
      h(Contact)
    ),
    h("footer", { className: "bg-ink px-5 py-8 text-center text-sm text-paper/45" },
      `(c) 2026 ${data.profile.name}. Built as an interactive React and TailwindCSS portfolio.`
    )
  );
}
 
ReactDOM.createRoot(document.getElementById("root")).render(h(App));
 