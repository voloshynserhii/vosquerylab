export interface ServicePage {
  slug: string;
  updatedAt: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  searchIntent: string;
  overview: string;
  whoNeedsIt: string[];
  problemsSolved: string[];
  benefits: string[];
  technologies: string[];
  process: string[];
  timeline: string;
  relatedServices: string[];
  relatedCaseStudies: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface BlogArticle {
  slug: string;
  publishedAt: string;
  updatedAt: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intent: string;
  summary: string;
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: string[];
  relatedCaseStudies: string[];
}

export interface CaseStudy {
  slug: string;
  publishedAt: string;
  updatedAt: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  results: string[];
  relatedServices: string[];
}

const serviceFaqs = (service: string) => [
  {
    question: `What does a ${service} project include?`,
    answer:
      "A typical project includes discovery, architecture, prototype or MVP development, integrations, testing, deployment support and documentation for the team that will maintain the system.",
  },
  {
    question: "Can Vosquery Lab work with an existing product?",
    answer:
      "Yes. We can integrate AI features into an existing SaaS, internal tool, mobile app, CRM, support workflow, knowledge base or backend system without rebuilding the entire product.",
  },
  {
    question: "Which AI providers do you support?",
    answer:
      "We work with OpenAI, Anthropic, Google Gemini and provider-neutral architectures. We also build retrieval, tool-use and automation layers around the model provider.",
  },
];

export const services: ServicePage[] = [
  ["ai-engineering", "AI Engineering", "AI Engineering", "AI Engineering Services for B2B Software", "AI engineering services for companies building LLM applications, AI agents, RAG systems, automation workflows and custom AI software.", "Companies comparing AI engineering partners for a commercial product."],
  ["ai-agents", "AI Agents", "AI Agents", "AI Agent Development Services", "Design and build AI agents that use tools, retrieve context, call APIs and complete business workflows with guardrails.", "Teams looking for practical AI agents that can perform business tasks."],
  ["custom-ai-development", "Custom AI Development", "Custom AI Development", "Custom AI Software Development Company", "Custom AI software development for startups and companies that need LLM features, automation, integrations and production-ready AI applications.", "Companies seeking a custom AI product or internal AI system."],
  ["llm-integration", "LLM Integration", "LLM Integration", "LLM Integration Services", "Integrate large language models into web apps, mobile apps, backend systems, customer support, knowledge bases and operations workflows.", "Teams adding LLM capabilities to existing software."],
  ["openai-integration", "OpenAI Integration", "OpenAI Integration", "OpenAI Integration Services", "OpenAI integration for chatbots, assistants, function calling, structured outputs, RAG, automation and production applications.", "Companies that want to build with OpenAI APIs."],
  ["anthropic-integration", "Anthropic Integration", "Anthropic Integration", "Anthropic Claude Integration Services", "Claude integration for safe business assistants, document workflows, enterprise knowledge systems and AI automation.", "Teams evaluating Anthropic Claude for production workflows."],
  ["google-gemini-integration", "Google Gemini Integration", "Gemini Integration", "Google Gemini Integration Services", "Google Gemini integration for multimodal AI apps, business automation, retrieval and AI-powered product features.", "Teams exploring Gemini for AI product development."],
  ["ai-chatbots", "AI Chatbots", "AI Chatbots", "AI Chatbot Development Services", "AI chatbot development for customer support, sales qualification, internal knowledge, onboarding and workflow automation.", "Businesses replacing static bots with LLM-based assistants."],
  ["ai-voice-assistants", "AI Voice Assistants", "AI Voice Assistants", "AI Voice Assistant Development", "Voice AI assistant development for support, scheduling, data collection, training and hands-free business workflows.", "Companies exploring conversational voice interfaces."],
  ["rag-development", "RAG Development", "RAG Development", "RAG Development Services", "Retrieval augmented generation systems for knowledge bases, support, compliance, research, documentation and enterprise search.", "Teams that need accurate answers from private business data."],
  ["vector-databases", "Vector Databases", "Vector Databases", "Vector Database Consulting and Implementation", "Vector database implementation for semantic search, RAG, recommendations, document retrieval and AI knowledge systems.", "Teams choosing or implementing vector search infrastructure."],
  ["mcp-integrations", "MCP Integrations", "MCP Integrations", "MCP Integration Services", "Model Context Protocol integration for connecting AI assistants with tools, apps, APIs and internal business systems.", "Teams adopting MCP for AI tool connectivity."],
  ["ai-workflow-automation", "AI Workflow Automation", "AI Workflow Automation", "AI Workflow Automation Services", "Automate repetitive operations with AI workflows, LLM routing, document processing, notifications and API integrations.", "Operations teams that want to reduce manual work."],
  ["ai-consulting", "AI Consulting", "AI Consulting", "AI Consulting for Product and Engineering Teams", "Practical AI consulting for architecture, model selection, AI roadmap, automation opportunities and implementation planning.", "Founders and teams deciding how to use AI in a product or business."],
  ["react-ai-applications", "React AI Applications", "React AI Apps", "React AI Application Development", "React and Next.js AI applications with chat interfaces, dashboards, AI workflows, streaming responses and authenticated user experiences.", "Teams building user-facing AI web applications."],
  ["react-native-ai-apps", "React Native AI Apps", "React Native AI Apps", "React Native AI App Development", "React Native AI mobile apps for iOS and Android with assistants, content generation, voice, subscriptions and backend integrations.", "Teams building AI-powered mobile applications."],
  ["backend-ai-systems", "Backend AI Systems", "Backend AI Systems", "Backend AI System Development", "Backend systems for AI products: queues, APIs, retrieval pipelines, background jobs, observability and secure data flows.", "Teams needing reliable server-side AI infrastructure."],
  ["document-ai", "Document AI", "Document AI", "Document AI Automation Services", "Document AI systems for extraction, classification, summarization, compliance, invoices, contracts and operational workflows.", "Companies processing large volumes of documents."],
  ["knowledge-base-ai", "Knowledge Base AI", "Knowledge Base AI", "Knowledge Base AI Development", "AI knowledge base assistants that answer questions from internal documentation, policies, product data and support content.", "Support, success and operations teams with internal knowledge gaps."],
  ["enterprise-ai", "Enterprise AI", "Enterprise AI", "Enterprise AI Development Services", "Enterprise AI systems with security, governance, integrations, retrieval, monitoring and team workflows.", "Organizations implementing AI across departments."],
].map(([slug, title, shortTitle, metaTitle, metaDescription, searchIntent]) => ({
  slug,
  updatedAt: "2026-07-07",
  title,
  shortTitle,
  metaTitle,
  metaDescription,
  searchIntent,
  overview: `${title} at Vosquery Lab means designing, building and integrating AI systems that solve a specific business problem rather than adding a generic model wrapper. We focus on production behavior, data flow, reliability, user experience and maintainability.`,
  whoNeedsIt: [
    "B2B software companies adding AI features to an existing product.",
    "Startups building an AI MVP or validating a new AI product.",
    "Operations teams replacing repetitive manual workflows with automation.",
    "Founders and product teams that need technical guidance before investing in AI.",
  ],
  problemsSolved: [
    "Manual workflows that consume team time.",
    "Knowledge trapped in documents, tickets, CRMs or internal tools.",
    "AI prototypes that are not reliable enough for production.",
    "Disconnected APIs, data sources and business processes.",
  ],
  benefits: [
    "Clear architecture before implementation.",
    "Provider-aware but not provider-locked engineering.",
    "Practical integrations with existing tools and workflows.",
    "AI features that are testable, observable and easier to maintain.",
  ],
  technologies: [
    "OpenAI",
    "Anthropic Claude",
    "Google Gemini",
    "Next.js",
    "React",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "Vector databases",
    "RAG",
    "MCP",
  ],
  process: [
    "Discovery: define use case, users, data sources, constraints and success criteria.",
    "Architecture: choose model strategy, retrieval approach, integrations and safety boundaries.",
    "Prototype: build a working proof of concept with representative data.",
    "Production build: implement UI, backend, prompts, tools, retrieval, logging and error handling.",
    "Launch and iteration: test, deploy, monitor usage and improve behavior from real feedback.",
  ],
  timeline: "Most focused AI prototypes take 2-4 weeks. Production MVPs usually take 4-10 weeks depending on integrations, data quality, workflow complexity and compliance requirements.",
  relatedServices: ["ai-engineering", "llm-integration", "rag-development", "ai-workflow-automation"].filter((item) => item !== slug),
  relatedCaseStudies: ["taluna", "custom-ai-integrations", "react-ai-applications"],
  faqs: serviceFaqs(title),
})) as ServicePage[];

const articleTopics = [
  ["what-is-rag", "What is RAG?", "What is RAG? Retrieval Augmented Generation Explained", "A practical explanation of retrieval augmented generation, how RAG works, when to use it and how it improves LLM applications.", ["rag-development", "vector-databases", "knowledge-base-ai"]],
  ["how-ai-agents-work", "How AI Agents Work", "How AI Agents Work in Business Software", "A practical guide to AI agents, tools, memory, planning, orchestration and production constraints.", ["ai-agents", "mcp-integrations", "backend-ai-systems"]],
  ["mcp-explained", "MCP Explained", "MCP Explained for AI Product Teams", "What Model Context Protocol is, why it matters and how MCP connects AI assistants to tools and data.", ["mcp-integrations", "ai-agents", "ai-engineering"]],
  ["openai-function-calling", "OpenAI Function Calling", "OpenAI Function Calling Guide", "How function calling works, when to use tools, how to design schemas and what production teams should watch for.", ["openai-integration", "llm-integration", "backend-ai-systems"]],
  ["vector-databases-explained", "Vector Databases Explained", "Vector Databases Explained for RAG", "How vector databases work, where they fit in AI products and how to choose vector search infrastructure.", ["vector-databases", "rag-development", "knowledge-base-ai"]],
  ["langgraph-vs-crewai", "LangGraph vs CrewAI", "LangGraph vs CrewAI for AI Agents", "A practical comparison of LangGraph and CrewAI for building AI agents and multi-step workflows.", ["ai-agents", "backend-ai-systems", "ai-engineering"]],
  ["ai-agent-architecture", "AI Agent Architecture", "AI Agent Architecture for Production Systems", "Core components of AI agent architecture: tools, memory, state, routing, permissions, observability and evaluation.", ["ai-agents", "mcp-integrations", "backend-ai-systems"]],
  ["ai-integration-guide", "AI Integration Guide", "AI Integration Guide for Existing Software", "How to integrate AI into an existing product without breaking user flows, security or maintainability.", ["llm-integration", "ai-engineering", "ai-consulting"]],
  ["building-ai-products", "Building AI Products", "Building AI Products: Practical Engineering Guide", "What changes when building AI products: UX, reliability, cost control, evaluation, data and model behavior.", ["custom-ai-development", "ai-product-development", "ai-engineering"]],
  ["ai-automation-for-smes", "AI Automation for SMEs", "AI Automation for Small and Medium Businesses", "Where AI automation helps SMEs, which workflows to start with and how to avoid overengineering.", ["ai-workflow-automation", "ai-consulting", "document-ai"]],
  ["llms-vs-traditional-software", "LLMs vs Traditional Software", "LLMs vs Traditional Software Architecture", "How LLM systems differ from deterministic software and what teams need to design differently.", ["ai-engineering", "backend-ai-systems", "llm-integration"]],
  ["ai-in-customer-support", "AI in Customer Support", "AI Customer Support Automation Guide", "How AI assistants, RAG and workflow automation improve customer support without removing human escalation.", ["ai-chatbots", "knowledge-base-ai", "rag-development"]],
  ["ai-for-healthcare", "AI for Healthcare", "AI for Healthcare Software Teams", "Use cases, risks and architecture patterns for healthcare AI products and operational workflows.", ["document-ai", "enterprise-ai", "ai-consulting"]],
  ["ai-for-logistics", "AI for Logistics", "AI Automation for Logistics", "How AI can support routing, document processing, customer communication and operational decision support in logistics.", ["ai-workflow-automation", "document-ai", "backend-ai-systems"]],
  ["ai-for-manufacturing", "AI for Manufacturing", "AI for Manufacturing Operations", "AI use cases for manufacturing: documentation, quality workflows, maintenance knowledge and operations automation.", ["enterprise-ai", "document-ai", "knowledge-base-ai"]],
  ["ai-for-startups", "AI for Startups", "AI Development for Startups", "How startups can choose AI use cases, build MVPs and avoid wasting budget on model experiments.", ["custom-ai-development", "ai-consulting", "react-ai-applications"]],
  ["how-to-build-an-ai-mvp", "How to Build an AI MVP", "How to Build an AI MVP", "A practical AI MVP roadmap: scope, data, architecture, model choice, prototype, launch and iteration.", ["custom-ai-development", "ai-consulting", "react-ai-applications"]],
  ["best-ai-tech-stack-2026", "Best AI Tech Stack in 2026", "Best AI Tech Stack in 2026", "A practical 2026 AI tech stack for LLM apps, agents, retrieval, backend systems and frontend experiences.", ["ai-engineering", "backend-ai-systems", "react-ai-applications"]],
];

const extraArticleTitles = [
  "RAG vs Fine Tuning",
  "How to Choose an LLM Provider",
  "OpenAI vs Anthropic vs Gemini",
  "AI Chatbot Architecture",
  "AI Voice Assistant Architecture",
  "Document AI Pipeline Design",
  "Knowledge Base AI Implementation",
  "Enterprise AI Governance",
  "AI Product Discovery",
  "AI Roadmap for B2B SaaS",
  "AI Cost Optimization",
  "Prompt Engineering for Products",
  "Structured Outputs Explained",
  "LLM Evaluation Basics",
  "AI Observability",
  "Human in the Loop AI",
  "AI Workflow Orchestration",
  "MCP vs API Integrations",
  "Building AI Tools for Teams",
  "AI for Internal Operations",
  "AI Automation for Sales",
  "AI Automation for Marketing",
  "AI Automation for Finance",
  "AI Automation for HR",
  "AI in Legal Document Review",
  "AI for Real Estate Workflows",
  "AI for Education Products",
  "AI for Travel Platforms",
  "AI for E-commerce",
  "AI Recommendation Systems",
  "Semantic Search Explained",
  "Hybrid Search for RAG",
  "Chunking Strategies for RAG",
  "Embeddings Explained",
  "Agent Memory Explained",
  "Tool Calling Patterns",
  "AI Security for Startups",
  "Data Privacy in AI Apps",
  "React Streaming AI UI",
  "Next.js AI Applications",
  "React Native AI Product Guide",
  "Backend Queues for AI Workflows",
];

export const blogArticles: BlogArticle[] = [
  ...articleTopics.map(([slug, title, metaTitle, metaDescription, relatedServices], index) => ({
    slug: slug as string,
    publishedAt: `2026-01-${String((index % 28) + 1).padStart(2, "0")}`,
    updatedAt: "2026-07-07",
    title: title as string,
    metaTitle: metaTitle as string,
    metaDescription: metaDescription as string,
    intent: "Educational and commercial research before choosing an AI implementation partner.",
    summary: `${title} is a practical topic for teams building AI products, automations or integrations. The key question is not only what the technology does, but how it behaves in production with real users, real data and business constraints.`,
    sections: [
      {
        heading: "What it is",
        body: "In business software, the concept should be understood as part of a larger system: user interface, data access, model behavior, workflow rules, logging, cost control and fallback behavior. A working demo is not enough if the system cannot be maintained.",
      },
      {
        heading: "Business use cases",
        body: "Common use cases include customer support, internal knowledge search, document processing, sales operations, product copilots, workflow automation, data extraction, research and AI-assisted decision support.",
      },
      {
        heading: "Implementation approach",
        body: "Vosquery Lab starts with the business workflow, then designs the AI architecture around the data, user role and required action. We avoid generic AI wrappers and build systems with explicit context, tool boundaries and measurable behavior.",
      },
      {
        heading: "Risks and tradeoffs",
        body: "Teams should plan for hallucinations, incomplete data, model cost, latency, privacy, permissions and edge cases. These risks are manageable when architecture, retrieval, evaluation and human escalation are designed early.",
      },
    ],
    faqs: [
      {
        question: `Is ${title} useful for small teams?`,
        answer:
          "Yes, when the use case is specific and tied to measurable time savings, revenue support or product differentiation.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "A focused prototype can take 2-4 weeks. A production-ready workflow usually takes 4-10 weeks depending on integrations and data quality.",
      },
    ],
    relatedServices: relatedServices as string[],
    relatedCaseStudies: ["taluna", "custom-ai-integrations"],
  })),
  ...extraArticleTitles.map((title, index) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return {
      slug,
      publishedAt: `2026-02-${String((index % 28) + 1).padStart(2, "0")}`,
      updatedAt: "2026-07-07",
      title,
      metaTitle: `${title} | Vosquery Lab`,
      metaDescription: `${title}: practical guidance for AI engineering, LLM applications, AI automation and production implementation decisions.`,
      intent: "Educational research with commercial AI implementation intent.",
      summary: `${title} matters because AI systems need more than model access. They need product thinking, architecture, integrations, evaluation and operational reliability.`,
      sections: [
        {
          heading: "Why it matters",
          body: "AI teams need to understand the business workflow before selecting models, frameworks or infrastructure. The right implementation is usually the simplest system that solves the problem reliably.",
        },
        {
          heading: "Implementation considerations",
          body: "Important decisions include model provider, data access, authentication, retrieval, tool use, logging, testing, escalation paths, cost limits and how the feature fits into the existing product.",
        },
        {
          heading: "How Vosquery Lab helps",
          body: "Vosquery Lab designs and builds AI systems with clear constraints, maintainable code, practical UX and integrations into the tools the business already uses.",
        },
      ],
      faqs: [
        {
          question: `When should a company invest in ${title.toLowerCase()}?`,
          answer:
            "Invest when there is a recurring workflow, high-value knowledge problem or product feature where AI can create measurable value.",
        },
        {
          question: "Can this be added to an existing app?",
          answer:
            "Usually yes. Many AI features can be integrated into an existing web app, mobile app, CRM, support tool or backend workflow.",
        },
      ],
      relatedServices: ["ai-engineering", "llm-integration", "ai-workflow-automation"],
      relatedCaseStudies: ["custom-ai-integrations", "react-ai-applications"],
    };
  }),
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "taluna",
    publishedAt: "2026-03-01",
    updatedAt: "2026-07-07",
    title: "Taluna AI Story Generator",
    metaTitle: "Taluna AI Story Generator Case Study",
    metaDescription: "AI storytelling mobile app case study covering product architecture, React Native, subscriptions and generative content workflows.",
    problem: "Families needed a simple way to create personalized stories without a complex writing interface.",
    solution: "Vosquery Lab built a React Native AI storytelling product that lets users choose story inputs and generate child-friendly adventures.",
    architecture: ["React Native mobile app", "AI generation workflow", "Subscription-ready product structure", "Content safety and prompt constraints"],
    technologies: ["React Native", "AI generation", "Mobile UX", "Subscriptions"],
    results: ["Faster story creation flow", "Mobile-first AI product experience", "Reusable architecture for future content types"],
    relatedServices: ["react-native-ai-apps", "custom-ai-development", "ai-engineering"],
  },
  {
    slug: "ai-story-generator",
    publishedAt: "2026-03-08",
    updatedAt: "2026-07-07",
    title: "AI Story Generator",
    metaTitle: "AI Story Generator Case Study",
    metaDescription: "Case study for a generative AI content workflow with structured prompts, user inputs and product-ready output.",
    problem: "The product needed repeatable creative output without exposing users to prompt engineering complexity.",
    solution: "We designed structured inputs, generation logic and UI patterns that make content generation feel like a product feature.",
    architecture: ["Prompt templates", "Structured user inputs", "Generation pipeline", "Review and preview UX"],
    technologies: ["LLM APIs", "React", "Node.js"],
    results: ["Clearer generation flow", "Reduced user friction", "Reusable AI content architecture"],
    relatedServices: ["llm-integration", "react-ai-applications", "custom-ai-development"],
  },
  {
    slug: "family-historian",
    publishedAt: "2026-03-15",
    updatedAt: "2026-07-07",
    title: "Family Historian",
    metaTitle: "Family Historian AI Case Study",
    metaDescription: "Family memory product case study covering structured memories, AI-assisted writing and book preview workflows.",
    problem: "Families had unstructured memories that were difficult to turn into a coherent keepsake.",
    solution: "We created a memory collection and preview workflow that supports AI-assisted organization and narrative output.",
    architecture: ["Memory data model", "AI-assisted narrative flow", "Previewable book structure", "Mobile-first UX"],
    technologies: ["React Native", "AI writing assistance", "Product UX"],
    results: ["Simpler memory capture", "Clear product flow", "Foundation for AI-assisted family books"],
    relatedServices: ["react-native-ai-apps", "document-ai", "custom-ai-development"],
  },
  {
    slug: "custom-ai-integrations",
    publishedAt: "2026-03-22",
    updatedAt: "2026-07-07",
    title: "Custom AI Integrations",
    metaTitle: "Custom AI Integrations Case Study",
    metaDescription: "Case study for integrating AI into existing software, APIs and business workflows.",
    problem: "A business had disconnected tools and manual processes that slowed operations.",
    solution: "We connected AI features to existing APIs, data sources and workflow actions with clear user controls.",
    architecture: ["API integration layer", "LLM tool calls", "Workflow routing", "Logging and fallback behavior"],
    technologies: ["OpenAI", "Node.js", "APIs", "MCP"],
    results: ["Reduced manual work", "More consistent workflows", "AI features connected to real business actions"],
    relatedServices: ["mcp-integrations", "llm-integration", "ai-workflow-automation"],
  },
  {
    slug: "react-ai-applications",
    publishedAt: "2026-03-29",
    updatedAt: "2026-07-07",
    title: "React AI Applications",
    metaTitle: "React AI Applications Case Study",
    metaDescription: "Case study for user-facing React AI interfaces with streaming, chat, dashboards and AI workflows.",
    problem: "Users needed a clear interface for interacting with AI workflows rather than a raw chat box.",
    solution: "We built React interfaces that expose AI features through product-specific controls, states and feedback.",
    architecture: ["React UI", "Streaming responses", "Stateful AI workflows", "Backend API layer"],
    technologies: ["React", "Next.js", "LLM APIs", "Node.js"],
    results: ["Better user control", "Clearer AI outputs", "Reusable AI interface patterns"],
    relatedServices: ["react-ai-applications", "llm-integration", "backend-ai-systems"],
  },
  {
    slug: "ai-voice-systems",
    publishedAt: "2026-04-05",
    updatedAt: "2026-07-07",
    title: "AI Voice Systems",
    metaTitle: "AI Voice Systems Case Study",
    metaDescription: "AI voice systems case study for conversational interfaces, workflow capture and business automation.",
    problem: "A workflow required faster hands-free information capture and response.",
    solution: "We designed a voice assistant architecture with speech input, AI reasoning and structured workflow outputs.",
    architecture: ["Speech interface", "LLM workflow layer", "Structured outputs", "Escalation rules"],
    technologies: ["Voice AI", "LLM APIs", "Node.js"],
    results: ["Lower friction input", "Clearer workflow capture", "Foundation for voice automation"],
    relatedServices: ["ai-voice-assistants", "ai-workflow-automation", "backend-ai-systems"],
  },
  {
    slug: "document-processing",
    publishedAt: "2026-04-12",
    updatedAt: "2026-07-07",
    title: "Document Processing",
    metaTitle: "Document AI Processing Case Study",
    metaDescription: "Document processing AI case study for extraction, classification, summarization and operational workflows.",
    problem: "Teams spent time manually reading, classifying and extracting information from documents.",
    solution: "We created a document AI workflow for upload, extraction, validation and structured output.",
    architecture: ["Document ingestion", "Extraction prompts", "Validation rules", "Structured data output"],
    technologies: ["Document AI", "LLM APIs", "RAG", "Node.js"],
    results: ["Faster document review", "More consistent extraction", "Reusable workflow for future document types"],
    relatedServices: ["document-ai", "rag-development", "ai-workflow-automation"],
  },
  {
    slug: "automation-projects",
    publishedAt: "2026-04-19",
    updatedAt: "2026-07-07",
    title: "Automation Projects",
    metaTitle: "AI Automation Projects Case Study",
    metaDescription: "AI automation case study for repetitive operations, notifications, workflow routing and integrations.",
    problem: "Operations tasks were repeated manually across tools and communication channels.",
    solution: "We designed automation flows that combine API integrations, AI classification and human review where needed.",
    architecture: ["Workflow triggers", "AI classification", "API actions", "Human review checkpoints"],
    technologies: ["AI automation", "APIs", "Node.js", "MCP"],
    results: ["Less repetitive work", "Faster handoffs", "Clearer operational visibility"],
    relatedServices: ["ai-workflow-automation", "mcp-integrations", "backend-ai-systems"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
