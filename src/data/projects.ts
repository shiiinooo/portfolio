import { Project } from '../types/domain';

export const projects: Project[] = [
  {
    id: 1,
    title: "INTELLIGENT SEARCH ENGINE",
    tech: "LANGCHAIN • LANGGRAPH • POSTGRESQL • AWS S3",
    description:
      "AI-powered search engine for aerospace engineers using multi-agent LLM workflows. Processes data from 50+ marketplaces with Bronze/Silver/Gold architecture.",
    links: { demo: "#", code: "#" },
    status: "AI/ML",
  },
  {
    id: 2,
    title: "BIG DATA INFRASTRUCTURE",
    tech: "HADOOP • SPARK • NIFI • AIRFLOW",
    description:
      "Emergency call processing system with distributed computing. Hadoop cluster deployment and real-time data orchestration with Apache technologies.",
    links: { demo: "#", code: "#" },
    status: "BIG DATA",
  },
  {
    id: 3,
    title: "AWS ENERGY OPTIMIZATION",
    tech: "AWS • GLUE • ATHENA • QUICKSIGHT",
    description:
      "Cloud-based energy optimization pipeline for buildings. Bronze/Silver/Gold architecture on S3 with serverless analytics and interactive dashboards.",
    links: { demo: "#", code: "#" },
    status: "CLOUD",
  },
  {
    id: 4,
    title: "CI/CD AUTOMATION PLATFORM",
    tech: "AZURE • .NET • ANGULAR • SQL SERVER",
    description:
      "SaaS application with automated deployment pipelines. Centralized logging library and microservices architecture with Azure DevOps integration.",
    links: { demo: "#", code: "#" },
    status: "DEVOPS",
  },
];
