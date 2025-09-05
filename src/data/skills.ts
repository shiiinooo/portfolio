import { Skill } from '../types/domain';

export const skills: Skill[] = [
  {
    number: "01",
    title: "DATA & AI",
    description:
      "OpenAI, LangChain, LangGraph, multi-agent workflows. Building intelligent systems with LLMs and modern AI frameworks.",
    technologies: ["OpenAI", "Mistral", "LangChain", "LangGraph", "LangFuse"],
  },
  {
    number: "02",
    title: "BIG DATA",
    description:
      "Hadoop, Spark, NiFi, Airflow orchestration. Processing and analyzing large-scale datasets with distributed systems.",
    technologies: [
      "Hadoop",
      "Spark",
      "NiFi",
      "Airflow",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    title: "CLOUD & DEVOPS",
    description:
      "AWS, Azure, Docker, CI/CD pipelines. Scalable cloud infrastructure and automated deployment workflows.",
    technologies: ["AWS", "Azure", "Docker", "CI/CD", "Git", "Kubernetes"],
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description:
      "Python, TypeScript, Java, SQL. Full-stack development with focus on data engineering and backend systems.",
    technologies: ["Python", "TypeScript", "Java", "SQL", "React", ".NET"],
  },
];
