import {
  blogArticles,
  caseStudies,
  services,
  type BlogArticle,
  type CaseStudy,
  type ServicePage,
} from "@/data/seo-content";
import type { Locale } from "./config";
import { getDictionary } from "./dictionaries";

const articleTitleTranslations: Partial<Record<Locale, Record<string, string>>> = {
  uk: {
    "what-is-rag": "Що таке RAG",
    "how-ai-agents-work": "Як працюють AI-агенти",
    "mcp-explained": "MCP простими словами",
    "openai-function-calling": "OpenAI Function Calling",
    "vector-databases-explained": "Векторні бази даних: пояснення",
    "langgraph-vs-crewai": "LangGraph vs CrewAI",
    "ai-agent-architecture": "Архітектура AI-агентів",
    "ai-integration-guide": "Гайд з AI-інтеграції",
    "building-ai-products": "Як створювати AI-продукти",
    "ai-automation-for-smes": "AI-автоматизація для малого й середнього бізнесу",
    "llms-vs-traditional-software": "LLM vs традиційна архітектура ПЗ",
    "ai-in-customer-support": "AI у підтримці клієнтів",
    "ai-for-healthcare": "AI для healthcare software",
    "ai-for-logistics": "AI для логістики",
    "ai-for-manufacturing": "AI для виробництва",
    "ai-for-startups": "AI для стартапів",
    "how-to-build-an-ai-mvp": "Як створити AI MVP",
    "best-ai-tech-stack-2026": "Найкращий AI tech stack у 2026",
  },
  ru: {
    "what-is-rag": "Что такое RAG",
    "how-ai-agents-work": "Как работают AI-агенты",
    "mcp-explained": "MCP простыми словами",
    "openai-function-calling": "OpenAI Function Calling",
    "vector-databases-explained": "Векторные базы данных: объяснение",
    "langgraph-vs-crewai": "LangGraph vs CrewAI",
    "ai-agent-architecture": "Архитектура AI-агентов",
    "ai-integration-guide": "Гайд по AI-интеграции",
    "building-ai-products": "Как создавать AI-продукты",
    "ai-automation-for-smes": "AI-автоматизация для малого и среднего бизнеса",
    "llms-vs-traditional-software": "LLM vs традиционная архитектура ПО",
    "ai-in-customer-support": "AI в поддержке клиентов",
    "ai-for-healthcare": "AI для healthcare software",
    "ai-for-logistics": "AI для логистики",
    "ai-for-manufacturing": "AI для производства",
    "ai-for-startups": "AI для стартапов",
    "how-to-build-an-ai-mvp": "Как создать AI MVP",
    "best-ai-tech-stack-2026": "Лучший AI tech stack в 2026",
  },
  pl: {
    "what-is-rag": "Czym jest RAG",
    "how-ai-agents-work": "Jak działają AI agents",
    "mcp-explained": "MCP wyjaśnione prosto",
    "openai-function-calling": "OpenAI Function Calling",
    "vector-databases-explained": "Bazy wektorowe: wyjaśnienie",
    "langgraph-vs-crewai": "LangGraph vs CrewAI",
    "ai-agent-architecture": "Architektura AI agents",
    "ai-integration-guide": "Przewodnik po integracji AI",
    "building-ai-products": "Jak budować produkty AI",
    "ai-automation-for-smes": "Automatyzacja AI dla MŚP",
    "llms-vs-traditional-software": "LLM vs tradycyjna architektura oprogramowania",
    "ai-in-customer-support": "AI w obsłudze klienta",
    "ai-for-healthcare": "AI dla oprogramowania healthcare",
    "ai-for-logistics": "AI dla logistyki",
    "ai-for-manufacturing": "AI dla produkcji",
    "ai-for-startups": "AI dla startupów",
    "how-to-build-an-ai-mvp": "Jak zbudować AI MVP",
    "best-ai-tech-stack-2026": "Najlepszy AI tech stack w 2026",
  },
  tr: {
    "what-is-rag": "RAG nedir",
    "how-ai-agents-work": "AI agents nasıl çalışır",
    "mcp-explained": "MCP basit anlatım",
    "openai-function-calling": "OpenAI Function Calling",
    "vector-databases-explained": "Vektör veritabanları açıklandı",
    "langgraph-vs-crewai": "LangGraph vs CrewAI",
    "ai-agent-architecture": "AI agent mimarisi",
    "ai-integration-guide": "AI entegrasyon rehberi",
    "building-ai-products": "AI ürünleri nasıl geliştirilir",
    "ai-automation-for-smes": "KOBİ'ler için AI otomasyonu",
    "llms-vs-traditional-software": "LLM ve geleneksel yazılım mimarisi",
    "ai-in-customer-support": "Müşteri desteğinde AI",
    "ai-for-healthcare": "Healthcare yazılımı için AI",
    "ai-for-logistics": "Lojistik için AI",
    "ai-for-manufacturing": "Üretim için AI",
    "ai-for-startups": "Startup'lar için AI",
    "how-to-build-an-ai-mvp": "AI MVP nasıl geliştirilir",
    "best-ai-tech-stack-2026": "2026 için en iyi AI tech stack",
  },
};

const extraArticleTitleTranslations: Partial<Record<Locale, Record<string, string>>> = {
  uk: {
    "rag-vs-fine-tuning": "RAG vs Fine Tuning",
    "how-to-choose-an-llm-provider": "Як обрати LLM-провайдера",
    "openai-vs-anthropic-vs-gemini": "OpenAI vs Anthropic vs Gemini",
    "ai-chatbot-architecture": "Архітектура AI-чатбота",
    "ai-voice-assistant-architecture": "Архітектура голосового AI-асистента",
    "document-ai-pipeline-design": "Проєктування Document AI pipeline",
    "knowledge-base-ai-implementation": "Впровадження AI для баз знань",
    "enterprise-ai-governance": "Governance для Enterprise AI",
    "ai-product-discovery": "AI product discovery",
    "ai-roadmap-for-b2b-saas": "AI roadmap для B2B SaaS",
    "ai-cost-optimization": "Оптимізація витрат на AI",
    "prompt-engineering-for-products": "Prompt engineering для продуктів",
    "structured-outputs-explained": "Structured outputs: пояснення",
    "llm-evaluation-basics": "Основи LLM evaluation",
    "ai-observability": "AI observability",
    "human-in-the-loop-ai": "Human-in-the-loop AI",
    "ai-workflow-orchestration": "Оркестрація AI workflow",
    "mcp-vs-api-integrations": "MCP vs API-інтеграції",
    "building-ai-tools-for-teams": "AI-інструменти для команд",
    "ai-for-internal-operations": "AI для внутрішніх операцій",
    "ai-automation-for-sales": "AI-автоматизація продажів",
    "ai-automation-for-marketing": "AI-автоматизація маркетингу",
    "ai-automation-for-finance": "AI-автоматизація фінансів",
    "ai-automation-for-hr": "AI-автоматизація HR",
    "ai-in-legal-document-review": "AI для legal document review",
    "ai-for-real-estate-workflows": "AI для real estate workflows",
    "ai-for-education-products": "AI для освітніх продуктів",
    "ai-for-travel-platforms": "AI для travel platforms",
    "ai-for-e-commerce": "AI для e-commerce",
    "ai-recommendation-systems": "AI recommendation systems",
    "semantic-search-explained": "Semantic search: пояснення",
    "hybrid-search-for-rag": "Hybrid search для RAG",
    "chunking-strategies-for-rag": "Chunking strategies для RAG",
    "embeddings-explained": "Embeddings: пояснення",
    "agent-memory-explained": "Agent memory: пояснення",
    "tool-calling-patterns": "Tool calling patterns",
    "ai-security-for-startups": "AI security для стартапів",
    "data-privacy-in-ai-apps": "Data privacy в AI apps",
    "react-streaming-ai-ui": "React streaming AI UI",
    "next-js-ai-applications": "Next.js AI-застосунки",
    "react-native-ai-product-guide": "React Native AI product guide",
    "backend-queues-for-ai-workflows": "Backend queues для AI workflows"
  },
  ru: {},
  pl: {},
  tr: {},
};

extraArticleTitleTranslations.ru = Object.fromEntries(
  Object.entries(extraArticleTitleTranslations.uk ?? {}).map(([slug, title]) => [
    slug,
    title
      .replaceAll("Як ", "Как ")
      .replaceAll("обрати", "выбрать")
      .replaceAll("Архітектура", "Архитектура")
      .replaceAll("Проєктування", "Проектирование")
      .replaceAll("Впровадження", "Внедрение")
      .replaceAll("пояснення", "объяснение")
      .replaceAll("Основи", "Основы")
      .replaceAll("Оптимізація витрат", "Оптимизация затрат")
      .replaceAll("продажів", "продаж")
      .replaceAll("фінансів", "финансов")
      .replaceAll("освітніх", "образовательных")
      .replaceAll("стартапів", "стартапов")
      .replaceAll("внутрішніх операцій", "внутренних операций"),
  ]),
);

extraArticleTitleTranslations.pl = {
  "rag-vs-fine-tuning": "RAG vs fine tuning",
  "how-to-choose-an-llm-provider": "Jak wybrać dostawcę LLM",
  "openai-vs-anthropic-vs-gemini": "OpenAI vs Anthropic vs Gemini",
  "ai-chatbot-architecture": "Architektura chatbota AI",
  "ai-voice-assistant-architecture": "Architektura głosowego asystenta AI",
  "document-ai-pipeline-design": "Projektowanie pipeline Document AI",
  "knowledge-base-ai-implementation": "Wdrożenie AI dla bazy wiedzy",
  "enterprise-ai-governance": "Governance dla Enterprise AI",
  "ai-product-discovery": "AI product discovery",
  "ai-roadmap-for-b2b-saas": "AI roadmap dla B2B SaaS",
  "ai-cost-optimization": "Optymalizacja kosztów AI",
  "prompt-engineering-for-products": "Prompt engineering dla produktów",
  "structured-outputs-explained": "Structured outputs wyjaśnione",
  "llm-evaluation-basics": "Podstawy LLM evaluation",
  "ai-observability": "AI observability",
  "human-in-the-loop-ai": "Human-in-the-loop AI",
  "ai-workflow-orchestration": "Orkiestracja AI workflow",
  "mcp-vs-api-integrations": "MCP vs integracje API",
  "building-ai-tools-for-teams": "Budowanie narzędzi AI dla zespołów",
  "ai-for-internal-operations": "AI dla operacji wewnętrznych",
  "ai-automation-for-sales": "Automatyzacja AI dla sprzedaży",
  "ai-automation-for-marketing": "Automatyzacja AI dla marketingu",
  "ai-automation-for-finance": "Automatyzacja AI dla finansów",
  "ai-automation-for-hr": "Automatyzacja AI dla HR",
  "ai-in-legal-document-review": "AI w analizie dokumentów prawnych",
  "ai-for-real-estate-workflows": "AI dla workflow nieruchomości",
  "ai-for-education-products": "AI dla produktów edukacyjnych",
  "ai-for-travel-platforms": "AI dla platform travel",
  "ai-for-e-commerce": "AI dla e-commerce",
  "ai-recommendation-systems": "Systemy rekomendacji AI",
  "semantic-search-explained": "Semantic search wyjaśnione",
  "hybrid-search-for-rag": "Hybrid search dla RAG",
  "chunking-strategies-for-rag": "Strategie chunking dla RAG",
  "embeddings-explained": "Embeddings wyjaśnione",
  "agent-memory-explained": "Agent memory wyjaśnione",
  "tool-calling-patterns": "Wzorce tool calling",
  "ai-security-for-startups": "AI security dla startupów",
  "data-privacy-in-ai-apps": "Data privacy w aplikacjach AI",
  "react-streaming-ai-ui": "React streaming AI UI",
  "next-js-ai-applications": "Aplikacje AI w Next.js",
  "react-native-ai-product-guide": "Przewodnik po produktach AI w React Native",
  "backend-queues-for-ai-workflows": "Backend queues dla AI workflows"
};

extraArticleTitleTranslations.tr = {
  "rag-vs-fine-tuning": "RAG vs fine tuning",
  "how-to-choose-an-llm-provider": "LLM sağlayıcısı nasıl seçilir",
  "openai-vs-anthropic-vs-gemini": "OpenAI vs Anthropic vs Gemini",
  "ai-chatbot-architecture": "AI chatbot mimarisi",
  "ai-voice-assistant-architecture": "Sesli AI asistan mimarisi",
  "document-ai-pipeline-design": "Document AI pipeline tasarımı",
  "knowledge-base-ai-implementation": "Bilgi tabanı AI uygulaması",
  "enterprise-ai-governance": "Enterprise AI governance",
  "ai-product-discovery": "AI product discovery",
  "ai-roadmap-for-b2b-saas": "B2B SaaS için AI roadmap",
  "ai-cost-optimization": "AI maliyet optimizasyonu",
  "prompt-engineering-for-products": "Ürünler için prompt engineering",
  "structured-outputs-explained": "Structured outputs açıklandı",
  "llm-evaluation-basics": "LLM evaluation temelleri",
  "ai-observability": "AI observability",
  "human-in-the-loop-ai": "Human-in-the-loop AI",
  "ai-workflow-orchestration": "AI workflow orchestration",
  "mcp-vs-api-integrations": "MCP vs API entegrasyonları",
  "building-ai-tools-for-teams": "Ekipler için AI araçları geliştirme",
  "ai-for-internal-operations": "İç operasyonlar için AI",
  "ai-automation-for-sales": "Satış için AI otomasyonu",
  "ai-automation-for-marketing": "Pazarlama için AI otomasyonu",
  "ai-automation-for-finance": "Finans için AI otomasyonu",
  "ai-automation-for-hr": "HR için AI otomasyonu",
  "ai-in-legal-document-review": "Legal document review için AI",
  "ai-for-real-estate-workflows": "Real estate workflows için AI",
  "ai-for-education-products": "Eğitim ürünleri için AI",
  "ai-for-travel-platforms": "Travel platformları için AI",
  "ai-for-e-commerce": "E-commerce için AI",
  "ai-recommendation-systems": "AI recommendation systems",
  "semantic-search-explained": "Semantic search açıklandı",
  "hybrid-search-for-rag": "RAG için hybrid search",
  "chunking-strategies-for-rag": "RAG için chunking stratejileri",
  "embeddings-explained": "Embeddings açıklandı",
  "agent-memory-explained": "Agent memory açıklandı",
  "tool-calling-patterns": "Tool calling patterns",
  "ai-security-for-startups": "Startup'lar için AI security",
  "data-privacy-in-ai-apps": "AI apps içinde data privacy",
  "react-streaming-ai-ui": "React streaming AI UI",
  "next-js-ai-applications": "Next.js AI uygulamaları",
  "react-native-ai-product-guide": "React Native AI product guide",
  "backend-queues-for-ai-workflows": "AI workflows için backend queues"
};

function localizedArticleTitle(locale: Locale, article: BlogArticle) {
  if (locale === "en") return article.title;
  return (
    articleTitleTranslations[locale]?.[article.slug] ??
    extraArticleTitleTranslations[locale]?.[article.slug] ??
    article.title
  );
}

const serviceCopy: Record<Locale, {
  overview: string;
  whoNeedsIt: string[];
  problemsSolved: string[];
  benefits: string[];
  process: string[];
  timeline: string;
  faq: (title: string) => Array<{ question: string; answer: string }>;
}> = {
  en: {
    overview: "{title} at Vosquery Lab means designing, building and integrating AI systems that solve a specific business problem rather than adding a generic model wrapper. We focus on production behavior, data flow, reliability, user experience and maintainability.",
    whoNeedsIt: services[0].whoNeedsIt,
    problemsSolved: services[0].problemsSolved,
    benefits: services[0].benefits,
    process: services[0].process,
    timeline: services[0].timeline,
    faq: (title) => [
      { question: `What does a ${title} project include?`, answer: "A typical project includes discovery, architecture, prototype or MVP development, integrations, testing, deployment support and documentation for the team that will maintain the system." },
      { question: "Can Vosquery Lab work with an existing product?", answer: "Yes. We can integrate AI features into an existing SaaS, internal tool, mobile app, CRM, support workflow, knowledge base or backend system without rebuilding the entire product." },
      { question: "Which AI providers do you support?", answer: "We work with OpenAI, Anthropic, Google Gemini and provider-neutral architectures. We also build retrieval, tool-use and automation layers around the model provider." }
    ],
  },
  uk: {
    overview: "{title} у Vosquery Lab означає проєктування, розробку та інтеграцію AI-систем, які вирішують конкретну бізнес-задачу, а не просто додають обгортку над моделлю. Ми фокусуємося на production-поведінці, потоках даних, надійності, UX і підтримуваності.",
    whoNeedsIt: ["B2B-компанії, що додають AI-функції в існуючий продукт.", "Стартапи, які будують AI MVP або перевіряють новий AI-продукт.", "Операційні команди, що замінюють ручні процеси автоматизацією.", "Фаундери й продуктові команди, яким потрібна технічна стратегія перед інвестиціями в AI."],
    problemsSolved: ["Ручні процеси, які забирають час команди.", "Знання, замкнені в документах, CRM, тікетах або внутрішніх інструментах.", "AI-прототипи, які ще не готові до production.", "Роз’єднані API, джерела даних і бізнес-процеси."],
    benefits: ["Зрозуміла архітектура до початку розробки.", "Інженерія з урахуванням провайдера, але без vendor lock-in.", "Практичні інтеграції з наявними інструментами.", "AI-функції, які можна тестувати, спостерігати й підтримувати."],
    process: ["Discovery: визначаємо use case, користувачів, дані, обмеження і критерії успіху.", "Архітектура: обираємо модельну стратегію, retrieval, інтеграції та safety boundaries.", "Прототип: створюємо робочий proof of concept на репрезентативних даних.", "Production build: реалізуємо UI, backend, prompts, tools, retrieval, logging і error handling.", "Launch та ітерації: тестуємо, деплоїмо, моніторимо використання і покращуємо поведінку."],
    timeline: "Фокусовані AI-прототипи зазвичай займають 2-4 тижні. Production MVP частіше потребує 4-10 тижнів залежно від інтеграцій, якості даних і складності процесу.",
    faq: (title) => [
      { question: `Що входить у проєкт ${title}?`, answer: "Зазвичай це discovery, архітектура, прототип або MVP, інтеграції, тестування, підтримка запуску та документація для команди." },
      { question: "Чи може Vosquery Lab працювати з існуючим продуктом?", answer: "Так. Ми інтегруємо AI-функції в SaaS, внутрішні інструменти, мобільні застосунки, CRM, support workflow, knowledge base або backend без повної перебудови продукту." },
      { question: "Які AI-провайдери підтримуються?", answer: "Ми працюємо з OpenAI, Anthropic, Google Gemini і provider-neutral архітектурами, а також будуємо retrieval, tool-use та automation layers." }
    ],
  },
  ru: {
    overview: "{title} в Vosquery Lab означает проектирование, разработку и интеграцию AI-систем, которые решают конкретную бизнес-задачу, а не просто добавляют оболочку над моделью. Мы фокусируемся на production-поведении, потоках данных, надежности, UX и поддерживаемости.",
    whoNeedsIt: ["B2B-компании, добавляющие AI-функции в существующий продукт.", "Стартапы, строящие AI MVP или проверяющие новый AI-продукт.", "Операционные команды, заменяющие ручные процессы автоматизацией.", "Фаундеры и продуктовые команды, которым нужна техническая стратегия перед инвестициями в AI."],
    problemsSolved: ["Ручные процессы, которые забирают время команды.", "Знания, закрытые в документах, CRM, тикетах или внутренних инструментах.", "AI-прототипы, которые еще не готовы к production.", "Разрозненные API, источники данных и бизнес-процессы."],
    benefits: ["Понятная архитектура до начала разработки.", "Инженерия с учетом провайдера, но без vendor lock-in.", "Практичные интеграции с существующими инструментами.", "AI-функции, которые можно тестировать, наблюдать и поддерживать."],
    process: ["Discovery: определяем use case, пользователей, данные, ограничения и критерии успеха.", "Архитектура: выбираем модельную стратегию, retrieval, интеграции и safety boundaries.", "Прототип: создаем рабочий proof of concept на репрезентативных данных.", "Production build: реализуем UI, backend, prompts, tools, retrieval, logging и error handling.", "Launch и итерации: тестируем, деплоим, мониторим использование и улучшаем поведение."],
    timeline: "Фокусированные AI-прототипы обычно занимают 2-4 недели. Production MVP чаще требует 4-10 недель в зависимости от интеграций, качества данных и сложности процесса.",
    faq: (title) => [
      { question: `Что входит в проект ${title}?`, answer: "Обычно это discovery, архитектура, прототип или MVP, интеграции, тестирование, поддержка запуска и документация для команды." },
      { question: "Может ли Vosquery Lab работать с существующим продуктом?", answer: "Да. Мы интегрируем AI-функции в SaaS, внутренние инструменты, мобильные приложения, CRM, support workflow, knowledge base или backend без полной перестройки продукта." },
      { question: "Какие AI-провайдеры поддерживаются?", answer: "Мы работаем с OpenAI, Anthropic, Google Gemini и provider-neutral архитектурами, а также строим retrieval, tool-use и automation layers." }
    ],
  },
  pl: {
    overview: "{title} w Vosquery Lab oznacza projektowanie, budowę i integrację systemów AI, które rozwiązują konkretny problem biznesowy, a nie tylko dodają wrapper na model. Skupiamy się na zachowaniu produkcyjnym, przepływie danych, niezawodności, UX i utrzymaniu.",
    whoNeedsIt: ["Firmy B2B dodające funkcje AI do istniejącego produktu.", "Startupy budujące AI MVP albo walidujące nowy produkt AI.", "Zespoły operacyjne zastępujące ręczne procesy automatyzacją.", "Founderzy i zespoły produktowe potrzebujące technicznej strategii AI."],
    problemsSolved: ["Ręczne procesy zabierające czas zespołu.", "Wiedza ukryta w dokumentach, CRM, ticketach lub narzędziach wewnętrznych.", "Prototypy AI, które nie są gotowe do produkcji.", "Rozłączone API, źródła danych i procesy biznesowe."],
    benefits: ["Jasna architektura przed implementacją.", "Engineering świadomy dostawcy, ale bez vendor lock-in.", "Praktyczne integracje z obecnymi narzędziami.", "Funkcje AI, które można testować, monitorować i utrzymywać."],
    process: ["Discovery: definiujemy use case, użytkowników, dane, ograniczenia i kryteria sukcesu.", "Architektura: wybieramy strategię modeli, retrieval, integracje i granice bezpieczeństwa.", "Prototyp: budujemy działający proof of concept na reprezentatywnych danych.", "Production build: wdrażamy UI, backend, prompts, tools, retrieval, logging i error handling.", "Launch i iteracja: testujemy, wdrażamy, monitorujemy użycie i poprawiamy zachowanie."],
    timeline: "Skoncentrowane prototypy AI zwykle trwają 2-4 tygodnie. Produkcyjne MVP najczęściej wymaga 4-10 tygodni zależnie od integracji, jakości danych i złożoności workflow.",
    faq: (title) => [
      { question: `Co obejmuje projekt ${title}?`, answer: "Typowy projekt obejmuje discovery, architekturę, prototyp lub MVP, integracje, testy, wsparcie wdrożenia i dokumentację dla zespołu." },
      { question: "Czy Vosquery Lab może pracować z istniejącym produktem?", answer: "Tak. Integrujemy funkcje AI z SaaS, narzędziami wewnętrznymi, aplikacjami mobilnymi, CRM, support workflow, knowledge base lub backendem bez przebudowy całego produktu." },
      { question: "Jakich dostawców AI wspieracie?", answer: "Pracujemy z OpenAI, Anthropic, Google Gemini i architekturami provider-neutral. Budujemy też warstwy retrieval, tool-use i automation." }
    ],
  },
  tr: {
    overview: "Vosquery Lab'de {title}, genel bir model arayüzü eklemekten daha fazlasıdır: belirli bir iş problemini çözen AI sistemlerini tasarlamak, geliştirmek ve entegre etmek demektir. Production davranışı, veri akışı, güvenilirlik, UX ve sürdürülebilirliğe odaklanırız.",
    whoNeedsIt: ["Mevcut ürüne AI özellikleri ekleyen B2B yazılım şirketleri.", "AI MVP geliştiren veya yeni AI ürününü doğrulayan startup'lar.", "Tekrarlı manuel işleri otomasyonla değiştiren operasyon ekipleri.", "AI yatırımı öncesi teknik yönlendirme isteyen kurucular ve ürün ekipleri."],
    problemsSolved: ["Ekip zamanını tüketen manuel iş akışları.", "Dokümanlarda, CRM'lerde, ticket'larda veya iç araçlarda kalan bilgi.", "Production için yeterince güvenilir olmayan AI prototipleri.", "Kopuk API'ler, veri kaynakları ve iş süreçleri."],
    benefits: ["Uygulamadan önce net mimari.", "Provider-aware ama provider lock-in oluşturmayan engineering.", "Mevcut araçlar ve workflow'larla pratik entegrasyon.", "Test edilebilir, gözlemlenebilir ve sürdürülebilir AI özellikleri."],
    process: ["Discovery: use case, kullanıcılar, veri kaynakları, kısıtlar ve başarı kriterlerini belirleriz.", "Architecture: model stratejisi, retrieval yaklaşımı, entegrasyonlar ve safety boundaries seçilir.", "Prototype: temsili veriyle çalışan proof of concept oluşturulur.", "Production build: UI, backend, prompts, tools, retrieval, logging ve error handling uygulanır.", "Launch ve iterasyon: test, deploy, kullanım izleme ve gerçek geri bildirimle iyileştirme yapılır."],
    timeline: "Odaklı AI prototipleri çoğunlukla 2-4 hafta sürer. Production MVP ise entegrasyonlar, veri kalitesi ve workflow karmaşıklığına göre genellikle 4-10 hafta ister.",
    faq: (title) => [
      { question: `${title} projesi neleri kapsar?`, answer: "Tipik bir proje discovery, mimari, prototip veya MVP geliştirme, entegrasyonlar, test, yayına alma desteği ve ekip dokümantasyonunu kapsar." },
      { question: "Vosquery Lab mevcut bir ürünle çalışabilir mi?", answer: "Evet. AI özelliklerini mevcut SaaS, iç araç, mobil uygulama, CRM, support workflow, knowledge base veya backend sistemlerine tüm ürünü yeniden yazmadan entegre edebiliriz." },
      { question: "Hangi AI sağlayıcılarını destekliyorsunuz?", answer: "OpenAI, Anthropic, Google Gemini ve provider-neutral mimarilerle çalışıyoruz. Ayrıca retrieval, tool-use ve automation katmanları kuruyoruz." }
    ],
  },
};

const articleCopy: Record<Locale, {
  intent: string;
  summary: (title: string) => string;
  sections: BlogArticle["sections"];
  faqs: (title: string) => BlogArticle["faqs"];
}> = {
  en: {
    intent: "Educational and commercial research before choosing an AI implementation partner.",
    summary: (title) => `${title} is a practical topic for teams building AI products, automations or integrations. The key question is not only what the technology does, but how it behaves in production with real users, real data and business constraints.`,
    sections: blogArticles[0].sections,
    faqs: (title) => [
      { question: `Is ${title} useful for small teams?`, answer: "Yes, when the use case is specific and tied to measurable time savings, revenue support or product differentiation." },
      { question: "How long does implementation take?", answer: "A focused prototype can take 2-4 weeks. A production-ready workflow usually takes 4-10 weeks depending on integrations and data quality." }
    ],
  },
  uk: {
    intent: "Освітній і комерційний пошук перед вибором партнера з AI-реалізації.",
    summary: (title) => `${title} - практична тема для команд, які будують AI-продукти, автоматизації або інтеграції. Важливо не лише те, що робить технологія, а як вона поводиться в production з реальними користувачами, даними та бізнес-обмеженнями.`,
    sections: [
      { heading: "Що це таке", body: "У бізнес-ПЗ цю тему варто розглядати як частину більшої системи: UI, доступ до даних, поведінка моделі, правила workflow, логування, контроль витрат і fallback-поведінка." },
      { heading: "Бізнес-сценарії", body: "Типові сценарії: підтримка клієнтів, пошук у внутрішніх знаннях, обробка документів, sales operations, product copilots, workflow automation, extraction, research і decision support." },
      { heading: "Підхід до реалізації", body: "Vosquery Lab починає з бізнес-процесу, а потім проєктує AI-архітектуру навколо даних, ролі користувача та потрібної дії." },
      { heading: "Ризики й компроміси", body: "Потрібно планувати hallucinations, неповні дані, cost, latency, privacy, permissions і edge cases. Ці ризики керовані, якщо архітектура, retrieval, evaluation і escalation спроєктовані рано." }
    ],
    faqs: (title) => [{ question: `Чи корисно ${title} для малих команд?`, answer: "Так, якщо use case конкретний і пов’язаний з вимірною економією часу, доходом або диференціацією продукту." }, { question: "Скільки триває реалізація?", answer: "Фокусований прототип може зайняти 2-4 тижні. Production workflow зазвичай потребує 4-10 тижнів." }],
  },
  ru: {
    intent: "Образовательный и коммерческий поиск перед выбором партнера по AI-реализации.",
    summary: (title) => `${title} - практичная тема для команд, которые строят AI-продукты, автоматизации или интеграции. Важно не только что делает технология, а как она ведет себя в production с реальными пользователями, данными и бизнес-ограничениями.`,
    sections: [
      { heading: "Что это такое", body: "В бизнес-ПО эту тему стоит рассматривать как часть большой системы: UI, доступ к данным, поведение модели, правила workflow, логирование, контроль затрат и fallback-поведение." },
      { heading: "Бизнес-сценарии", body: "Типовые сценарии: поддержка клиентов, поиск по внутренним знаниям, обработка документов, sales operations, product copilots, workflow automation, extraction, research и decision support." },
      { heading: "Подход к реализации", body: "Vosquery Lab начинает с бизнес-процесса, а затем проектирует AI-архитектуру вокруг данных, роли пользователя и нужного действия." },
      { heading: "Риски и компромиссы", body: "Нужно планировать hallucinations, неполные данные, cost, latency, privacy, permissions и edge cases. Эти риски управляемы, если архитектура, retrieval, evaluation и escalation спроектированы заранее." }
    ],
    faqs: (title) => [{ question: `Полезно ли ${title} для небольших команд?`, answer: "Да, если use case конкретный и связан с измеримой экономией времени, выручкой или дифференциацией продукта." }, { question: "Сколько длится реализация?", answer: "Фокусированный прототип может занять 2-4 недели. Production workflow обычно требует 4-10 недель." }],
  },
  pl: {
    intent: "Edukacyjny i komercyjny research przed wyborem partnera wdrożeniowego AI.",
    summary: (title) => `${title} to praktyczny temat dla zespołów budujących produkty AI, automatyzacje lub integracje. Kluczowe jest nie tylko to, co robi technologia, ale jak działa produkcyjnie z użytkownikami, danymi i ograniczeniami biznesowymi.`,
    sections: [
      { heading: "Co to jest", body: "W oprogramowaniu biznesowym temat należy traktować jako część większego systemu: UI, dostęp do danych, zachowanie modelu, reguły workflow, logowanie, kontrolę kosztów i fallback." },
      { heading: "Zastosowania biznesowe", body: "Typowe zastosowania to customer support, wyszukiwanie wiedzy wewnętrznej, przetwarzanie dokumentów, sales operations, product copilots, workflow automation, extraction, research i decision support." },
      { heading: "Podejście do wdrożenia", body: "Vosquery Lab zaczyna od procesu biznesowego, a następnie projektuje architekturę AI wokół danych, roli użytkownika i wymaganej akcji." },
      { heading: "Ryzyka i kompromisy", body: "Zespoły powinny planować hallucinations, niepełne dane, cost, latency, privacy, permissions i edge cases. Ryzyka są zarządzalne, gdy architektura, retrieval, evaluation i escalation powstają wcześnie." }
    ],
    faqs: (title) => [{ question: `Czy ${title} ma sens dla małych zespołów?`, answer: "Tak, jeśli use case jest konkretny i powiązany z mierzalną oszczędnością czasu, przychodem lub wyróżnieniem produktu." }, { question: "Ile trwa wdrożenie?", answer: "Skoncentrowany prototyp może zająć 2-4 tygodnie. Produkcyjny workflow zwykle wymaga 4-10 tygodni." }],
  },
  tr: {
    intent: "AI uygulama partneri seçmeden önce eğitim ve ticari araştırma niyeti.",
    summary: (title) => `${title}, AI ürünleri, otomasyonlar veya entegrasyonlar geliştiren ekipler için pratik bir konudur. Önemli olan yalnızca teknolojinin ne yaptığı değil, production ortamında gerçek kullanıcı, veri ve iş kısıtlarıyla nasıl davrandığıdır.`,
    sections: [
      { heading: "Nedir", body: "İş yazılımında bu konu daha büyük bir sistemin parçası olarak ele alınmalıdır: UI, veri erişimi, model davranışı, workflow kuralları, logging, cost control ve fallback davranışı." },
      { heading: "İş kullanım alanları", body: "Yaygın kullanım alanları customer support, iç bilgi arama, doküman işleme, sales operations, product copilots, workflow automation, extraction, research ve decision support içerir." },
      { heading: "Uygulama yaklaşımı", body: "Vosquery Lab iş akışıyla başlar, ardından AI mimarisini veri, kullanıcı rolü ve gereken aksiyon çevresinde tasarlar." },
      { heading: "Riskler ve tradeoff'lar", body: "Ekipler hallucinations, eksik veri, cost, latency, privacy, permissions ve edge cases için plan yapmalıdır. Mimari, retrieval, evaluation ve escalation erken tasarlanırsa riskler yönetilebilir." }
    ],
    faqs: (title) => [{ question: `${title} küçük ekipler için faydalı mı?`, answer: "Evet, use case netse ve ölçülebilir zaman tasarrufu, gelir desteği veya ürün farklılaşmasıyla bağlantılıysa." }, { question: "Uygulama ne kadar sürer?", answer: "Odaklı bir prototip 2-4 hafta sürebilir. Production-ready workflow genellikle 4-10 hafta gerektirir." }],
  },
};

export function getLocalizedServices(locale: Locale): ServicePage[] {
  const dictionary = getDictionary(locale);
  const localizedItems = dictionary.services.items as Record<string, Partial<ServicePage>>;
  const copy = serviceCopy[locale];

  return services.map((service) => {
    const item = localizedItems[service.slug] ?? {};
    const title = item.title ?? service.title;

    return {
      ...service,
      ...item,
      title,
      shortTitle: item.shortTitle ?? title,
      metaTitle: item.metaTitle ?? `${title} | Vosquery Lab`,
      metaDescription: item.metaDescription ?? service.metaDescription,
      searchIntent: item.searchIntent ?? service.searchIntent,
      overview: copy.overview.replace("{title}", title),
      whoNeedsIt: copy.whoNeedsIt,
      problemsSolved: copy.problemsSolved,
      benefits: copy.benefits,
      process: copy.process,
      timeline: copy.timeline,
      faqs: copy.faq(title),
    };
  });
}

export function getLocalizedService(locale: Locale, slug: string) {
  return getLocalizedServices(locale).find((service) => service.slug === slug);
}

export function getLocalizedArticles(locale: Locale): BlogArticle[] {
  const copy = articleCopy[locale];
  const metaDescriptionTemplates: Record<Locale, (title: string) => string> = {
    en: (title) => `${title}: practical guidance for AI engineering, LLM applications, AI automation and production implementation decisions.`,
    uk: (title) => `${title}: практичний гайд для команд, які впроваджують AI engineering, LLM applications, RAG, integrations та automation у production.`,
    ru: (title) => `${title}: практический гайд для команд, которые внедряют AI engineering, LLM applications, RAG, integrations и automation в production.`,
    pl: (title) => `${title}: praktyczny poradnik dla zespołów wdrażających AI engineering, aplikacje LLM, RAG, integracje i automatyzację w produkcji.`,
    tr: (title) => `${title}: production ortamında AI engineering, LLM uygulamaları, RAG, entegrasyonlar ve otomasyon uygulayan ekipler için pratik rehber.`,
  };

  return blogArticles.map((article) => {
    const title = localizedArticleTitle(locale, article);

    return {
      ...article,
      title,
      metaTitle: locale === "en" ? article.metaTitle : `${title} | Vosquery Lab`,
      metaDescription: locale === "en" ? article.metaDescription : metaDescriptionTemplates[locale](title),
      intent: copy.intent,
      summary: copy.summary(title),
      sections: copy.sections,
      faqs: copy.faqs(title),
    };
  });
}

export function getLocalizedArticle(locale: Locale, slug: string) {
  return getLocalizedArticles(locale).find((article) => article.slug === slug);
}

export function getLocalizedCaseStudies(locale: Locale): CaseStudy[] {
  if (locale === "en") return caseStudies;

  const caseStudyCopy: Partial<Record<Locale, Record<string, Partial<CaseStudy>>>> = {
    uk: {
      taluna: {
        title: "Taluna AI-генератор історій",
        metaDescription: "Кейс мобільного AI storytelling app: продуктова архітектура, React Native, subscriptions і workflow генеративного контенту.",
        problem: "Сім'ям потрібен був простий спосіб створювати персоналізовані історії без складного writing interface.",
        solution: "Vosquery Lab створив React Native AI storytelling product, де користувачі обирають параметри історії та генерують child-friendly пригоди.",
        architecture: ["React Native mobile app", "AI generation workflow", "Subscription-ready product structure", "Content safety і prompt constraints"],
        results: ["Швидший flow створення історій", "Mobile-first AI product experience", "Архітектура, яку можна перевикористати для нових типів контенту"],
      },
      "ai-story-generator": {
        title: "AI-генератор історій",
        metaDescription: "Кейс генеративного AI-процесу для створення контенту зі структурованими підказками, користувацькими ввідними та готовим результатом.",
        problem: "Продукту потрібен був повторюваний творчий результат без складності prompt engineering для користувачів.",
        solution: "Ми спроєктували структуровані ввідні, логіку генерації та UI-патерни, які роблять генерацію контенту повноцінною функцією продукту.",
      },
      "family-historian": {
        title: "Family Historian",
        metaDescription: "Кейс продукту для сімейних спогадів зі структурованими memories, AI-assisted writing і preview дитячої книги.",
        problem: "Сімейні спогади були неструктурованими, тому їх було складно перетворити на цілісний keepsake.",
        solution: "Ми створили збір спогадів і preview книги з AI-assisted organization та narrative output.",
      },
      "custom-ai-integrations": {
        title: "Кастомні AI-інтеграції",
        metaDescription: "Кейс інтеграції AI в існуюче ПЗ, API та бізнес-процеси.",
        problem: "Бізнес мав роз'єднані інструменти й ручні процеси, які сповільнювали операції.",
        solution: "Ми підключили AI-функції до існуючих API, data sources і workflow actions з прозорим user control.",
      },
      "react-ai-applications": {
        title: "React AI-застосунки",
        metaDescription: "Кейс користувацьких React AI-інтерфейсів зі streaming-відповідями, chat, dashboard-панелями та AI-процесами.",
        problem: "Користувачам був потрібен зрозумілий інтерфейс для AI-процесів, а не сирий chat box.",
        solution: "Ми створили React-інтерфейси, які відкривають AI-функції через продукт-specific controls, стани й feedback.",
      },
      "ai-voice-systems": {
        title: "Голосові AI-системи",
        metaDescription: "Кейс голосових AI-систем для розмовних інтерфейсів, фіксації процесів і бізнес-автоматизації.",
        problem: "Workflow потребував швидшого hands-free збору інформації та відповіді.",
        solution: "Ми спроєктували voice assistant architecture зі speech input, AI reasoning і structured workflow outputs.",
      },
      "document-processing": {
        title: "Обробка документів",
        metaDescription: "Кейс Document AI для extraction, classification, summarization і операційних процесів.",
        problem: "Команди витрачали час на ручне читання, класифікацію та extraction інформації з документів.",
        solution: "Ми створили document AI workflow для upload, extraction, validation і structured output.",
      },
      "automation-projects": {
        title: "Проєкти AI-автоматизації",
        metaDescription: "Кейс AI-автоматизації для повторюваних операцій, notifications, routing і integrations.",
        problem: "Операційні задачі повторювалися вручну між різними інструментами та каналами комунікації.",
        solution: "Ми спроєктували automation flows, які поєднують API integrations, AI classification і human review там, де потрібно.",
      },
    },
    ru: {
      taluna: {
        title: "Taluna AI-генератор историй",
        metaDescription: "Кейс мобильного AI storytelling app: продуктовая архитектура, React Native, subscriptions и workflow генеративного контента.",
        problem: "Семьям был нужен простой способ создавать персонализированные истории без сложного writing interface.",
        solution: "Vosquery Lab создал React Native AI storytelling product, где пользователи выбирают параметры истории и генерируют child-friendly приключения.",
        architecture: ["React Native mobile app", "AI generation workflow", "Subscription-ready product structure", "Content safety и prompt constraints"],
        results: ["Более быстрый flow создания историй", "Mobile-first AI product experience", "Архитектура, которую можно переиспользовать для новых типов контента"],
      },
      "ai-story-generator": {
        title: "AI-генератор историй",
        metaDescription: "Кейс генеративного AI-процесса для создания контента со структурированными подсказками, пользовательскими вводными и готовым результатом.",
        problem: "Продукту был нужен повторяемый creative output без сложности prompt engineering для пользователей.",
        solution: "Мы спроектировали структурированные вводные, логику генерации и UI-паттерны, которые делают генерацию контента полноценной функцией продукта.",
      },
      "family-historian": {
        title: "Family Historian",
        metaDescription: "Кейс продукта семейных воспоминаний со структурированными memories, AI-assisted writing и preview детской книги.",
        problem: "Семейные воспоминания были неструктурированными, поэтому их было сложно превратить в цельный keepsake.",
        solution: "Мы создали сбор воспоминаний и preview книги с AI-assisted organization и narrative output.",
      },
      "custom-ai-integrations": {
        title: "Кастомные AI-интеграции",
        metaDescription: "Кейс интеграции AI в существующее ПО, API и бизнес-процессы.",
        problem: "У бизнеса были разрозненные инструменты и ручные процессы, которые замедляли операции.",
        solution: "Мы подключили AI-функции к существующим API, data sources и workflow actions с прозрачным user control.",
      },
      "react-ai-applications": {
        title: "React AI-приложения",
        metaDescription: "Кейс пользовательских React AI-интерфейсов со streaming-ответами, chat, dashboard-панелями и AI-процессами.",
        problem: "Пользователям был нужен понятный интерфейс для AI-процессов, а не сырой chat box.",
        solution: "Мы создали React-интерфейсы, которые открывают AI-функции через product-specific controls, состояния и feedback.",
      },
      "ai-voice-systems": {
        title: "Голосовые AI-системы",
        metaDescription: "Кейс голосовых AI-систем для разговорных интерфейсов, фиксации процессов и бизнес-автоматизации.",
        problem: "Workflow требовал более быстрого hands-free сбора информации и ответа.",
        solution: "Мы спроектировали voice assistant architecture со speech input, AI reasoning и structured workflow outputs.",
      },
      "document-processing": {
        title: "Обработка документов",
        metaDescription: "Кейс Document AI для extraction, classification, summarization и операционных процессов.",
        problem: "Команды тратили время на ручное чтение, классификацию и extraction информации из документов.",
        solution: "Мы создали document AI workflow для upload, extraction, validation и structured output.",
      },
      "automation-projects": {
        title: "Проекты AI-автоматизации",
        metaDescription: "Кейс AI-автоматизации для повторяющихся операций, notifications, routing и integrations.",
        problem: "Операционные задачи повторялись вручную между разными инструментами и каналами коммуникации.",
        solution: "Мы спроектировали automation flows, которые объединяют API integrations, AI classification и human review там, где нужно.",
      },
    },
    pl: {
      taluna: {
        title: "Taluna AI generator historii",
        metaDescription: "Studium mobilnej aplikacji AI storytelling: architektura produktu, React Native, subskrypcje i generatywny proces tworzenia treści.",
        problem: "Rodziny potrzebowały prostego sposobu tworzenia personalizowanych historii bez złożonego writing interface.",
        solution: "Vosquery Lab zbudował React Native AI storytelling product, w którym użytkownicy wybierają parametry historii i generują child-friendly przygody.",
        architecture: ["React Native mobile app", "AI generation workflow", "Subscription-ready product structure", "Content safety i prompt constraints"],
        results: ["Szybszy flow tworzenia historii", "Mobile-first AI product experience", "Architektura możliwa do ponownego użycia dla kolejnych typów treści"],
      },
      "ai-story-generator": {
        title: "Generator historii AI",
        metaDescription: "Studium generatywnego procesu AI do tworzenia treści ze strukturyzowanymi promptami, danymi od użytkownika i gotowym wynikiem.",
        problem: "Produkt potrzebował powtarzalnego wyniku kreatywnego bez zmuszania użytkowników do prompt engineering.",
        solution: "Zaprojektowaliśmy strukturyzowane dane wejściowe, logikę generowania i wzorce UI, dzięki którym generowanie treści działa jak pełnoprawna funkcja produktu.",
      },
      "family-historian": {
        title: "Family Historian",
        metaDescription: "Studium produktu do rodzinnych wspomnień ze strukturyzowanymi memories, AI-assisted writing i podglądem książki.",
        problem: "Rodzinne wspomnienia były nieustrukturyzowane, przez co trudno było zamienić je w spójną pamiątkę.",
        solution: "Stworzyliśmy zbieranie wspomnień i podgląd książki wspierający AI-assisted organization oraz narrative output.",
      },
      "custom-ai-integrations": {
        title: "Dedykowane integracje AI",
        metaDescription: "Studium integracji AI z istniejącym oprogramowaniem, API i procesami biznesowymi.",
        problem: "Firma miała rozłączone narzędzia i ręczne procesy, które spowalniały operacje.",
        solution: "Połączyliśmy funkcje AI z istniejącymi API, data sources i workflow actions z jasną kontrolą użytkownika.",
      },
      "react-ai-applications": {
        title: "Aplikacje React AI",
        metaDescription: "Studium interfejsów React AI dla użytkowników: odpowiedzi streamingowe, chat, panele analityczne i procesy AI.",
        problem: "Użytkownicy potrzebowali czytelnego interfejsu do procesów AI, a nie surowego okna chatu.",
        solution: "Zbudowaliśmy interfejsy React, które pokazują funkcje AI przez kontrolki produktowe, stany i feedback.",
      },
      "ai-voice-systems": {
        title: "Głosowe systemy AI",
        metaDescription: "Studium głosowych systemów AI dla interfejsów konwersacyjnych, zapisu procesów i automatyzacji biznesowej.",
        problem: "Workflow wymagał szybszego hands-free zbierania informacji i odpowiedzi.",
        solution: "Zaprojektowaliśmy voice assistant architecture ze speech input, AI reasoning i structured workflow outputs.",
      },
      "document-processing": {
        title: "Przetwarzanie dokumentów",
        metaDescription: "Studium Document AI dla extraction, classification, summarization i procesów operacyjnych.",
        problem: "Zespoły traciły czas na ręczne czytanie, klasyfikację i extraction informacji z dokumentów.",
        solution: "Stworzyliśmy document AI workflow dla upload, extraction, validation i structured output.",
      },
      "automation-projects": {
        title: "Projekty automatyzacji AI",
        metaDescription: "Studium automatyzacji AI dla powtarzalnych operacji, notifications, routingu i integracji.",
        problem: "Zadania operacyjne były powtarzane ręcznie pomiędzy narzędziami i kanałami komunikacji.",
        solution: "Zaprojektowaliśmy automation flows łączące API integrations, AI classification i human review tam, gdzie jest potrzebny.",
      },
    },
    tr: {
      taluna: {
        title: "Taluna AI hikaye üretici",
        metaDescription: "Mobil AI storytelling uygulaması örnek çalışması: ürün mimarisi, React Native, abonelikler ve generative content süreci.",
        problem: "Ailelerin karmaşık writing interface olmadan kişiselleştirilmiş hikayeler oluşturmak için basit bir yola ihtiyacı vardı.",
        solution: "Vosquery Lab, kullanıcıların hikaye girdilerini seçip child-friendly maceralar ürettiği bir React Native AI storytelling product geliştirdi.",
        architecture: ["React Native mobile app", "AI generation workflow", "Subscription-ready product structure", "Content safety ve prompt constraints"],
        results: ["Daha hızlı hikaye oluşturma flow", "Mobile-first AI product experience", "Yeni içerik türleri için yeniden kullanılabilir mimari"],
      },
      "ai-story-generator": {
        title: "AI hikaye üretici",
        metaDescription: "Yapılandırılmış promptlar, kullanıcı girdileri ve hazır çıktı içeren generative AI içerik süreci örnek çalışması.",
        problem: "Ürünün kullanıcıları prompt engineering karmaşıklığına sokmadan tekrarlanabilir creative output üretmesi gerekiyordu.",
        solution: "İçerik üretiminin gerçek bir ürün özelliği gibi hissettirmesi için yapılandırılmış girdiler, üretim mantığı ve UI kalıpları tasarladık.",
      },
      "family-historian": {
        title: "Family Historian",
        metaDescription: "Yapılandırılmış memories, AI-assisted writing ve kitap önizleme akışı içeren family memory product örnek çalışması.",
        problem: "Aile anıları dağınıktı ve bunları tutarlı bir keepsake haline getirmek zordu.",
        solution: "AI-assisted organization ve narrative output destekleyen memory collection ve preview workflow oluşturduk.",
      },
      "custom-ai-integrations": {
        title: "Özel AI entegrasyonları",
        metaDescription: "AI'ı mevcut yazılıma, API'lere ve iş süreçlerine entegre etme örnek çalışması.",
        problem: "İşletmede operasyonları yavaşlatan kopuk araçlar ve manuel süreçler vardı.",
        solution: "AI özelliklerini mevcut API'lere, data sources ve workflow actions katmanına net user controls ile bağladık.",
      },
      "react-ai-applications": {
        title: "React AI uygulamaları",
        metaDescription: "Streaming yanıtlar, chat, dashboard panelleri ve AI süreçleri içeren kullanıcı odaklı React AI arayüzleri örnek çalışması.",
        problem: "Kullanıcıların ham chat box yerine AI süreçleriyle çalışmak için net bir arayüze ihtiyacı vardı.",
        solution: "AI özelliklerini ürüne özel kontroller, durumlar ve feedback üzerinden sunan React arayüzleri geliştirdik.",
      },
      "ai-voice-systems": {
        title: "Sesli AI sistemleri",
        metaDescription: "Konuşma arayüzleri, süreç kaydı ve iş otomasyonu için sesli AI sistemleri örnek çalışması.",
        problem: "Workflow daha hızlı hands-free bilgi girişi ve yanıt gerektiriyordu.",
        solution: "Speech input, AI reasoning ve structured workflow outputs içeren voice assistant architecture tasarladık.",
      },
      "document-processing": {
        title: "Doküman işleme",
        metaDescription: "Extraction, classification, summarization ve operasyonel süreçler için Document AI örnek çalışması.",
        problem: "Ekipler dokümanlardan bilgi okumak, sınıflandırmak ve extraction yapmak için manuel zaman harcıyordu.",
        solution: "Upload, extraction, validation ve structured output için document AI workflow oluşturduk.",
      },
      "automation-projects": {
        title: "AI otomasyon projeleri",
        metaDescription: "Tekrarlayan operasyonlar, notifications, routing ve integrations için AI otomasyonu örnek çalışması.",
        problem: "Operasyon görevleri araçlar ve iletişim kanalları arasında manuel olarak tekrarlanıyordu.",
        solution: "API integrations, AI classification ve gerektiğinde human review içeren automation flows tasarladık.",
      },
    },
  };

  const nouns: Record<Locale, { problem: string; solution: string; architecture: string; technologies: string; results: string }> = {
    en: { problem: "Problem", solution: "Solution", architecture: "Architecture", technologies: "Technologies", results: "Results" },
    uk: { problem: "Проблема", solution: "Рішення", architecture: "Архітектура", technologies: "Технології", results: "Результати" },
    ru: { problem: "Проблема", solution: "Решение", architecture: "Архитектура", technologies: "Технологии", results: "Результаты" },
    pl: { problem: "Problem", solution: "Rozwiązanie", architecture: "Architektura", technologies: "Technologie", results: "Rezultaty" },
    tr: { problem: "Problem", solution: "Çözüm", architecture: "Mimari", technologies: "Teknolojiler", results: "Sonuçlar" },
  };
  const labels = nouns[locale];
  const technologyTranslations: Partial<Record<Locale, Record<string, string>>> = {
    uk: {
      "AI generation": "AI-генерація",
      "Mobile UX": "Мобільний UX",
      Subscriptions: "Підписки",
      "LLM APIs": "LLM API",
      "Product UX": "Продуктовий UX",
      "AI writing assistance": "AI writing assistance",
      APIs: "API",
      "Voice AI": "Голосовий AI",
      "AI automation": "AI-автоматизація",
    },
    ru: {
      "AI generation": "AI-генерация",
      "Mobile UX": "Мобильный UX",
      Subscriptions: "Подписки",
      "LLM APIs": "LLM API",
      "Product UX": "Продуктовый UX",
      "AI writing assistance": "AI writing assistance",
      APIs: "API",
      "Voice AI": "Голосовой AI",
      "AI automation": "AI-автоматизация",
    },
    pl: {
      "AI generation": "Generowanie AI",
      "Mobile UX": "Mobilny UX",
      Subscriptions: "Subskrypcje",
      "LLM APIs": "API LLM",
      "Product UX": "UX produktu",
      "AI writing assistance": "Wsparcie pisania AI",
      APIs: "API",
      "Voice AI": "Głosowe AI",
      "AI automation": "Automatyzacja AI",
    },
    tr: {
      "AI generation": "AI üretimi",
      "Mobile UX": "Mobil UX",
      Subscriptions: "Abonelikler",
      "LLM APIs": "LLM API'leri",
      "Product UX": "Ürün UX",
      "AI writing assistance": "AI yazma desteği",
      APIs: "API'ler",
      "Voice AI": "Sesli AI",
      "AI automation": "AI otomasyonu",
    },
  };
  const translateTechnology = (item: string) => technologyTranslations[locale]?.[item] ?? item;

  return caseStudies.map((study) => {
    const localized = caseStudyCopy[locale]?.[study.slug] ?? {};
    const title = localized.title ?? study.title;
    const architecture = localized.architecture ?? study.architecture;
    const results = localized.results ?? study.results;

    return {
      ...study,
      ...localized,
      title,
      metaTitle: `${title} | Vosquery Lab`,
      metaDescription: localized.metaDescription ?? `${title}: ${study.metaDescription}`,
      problem: localized.problem ?? `${labels.problem}: ${study.problem}`,
      solution: localized.solution ?? `${labels.solution}: ${study.solution}`,
      architecture: architecture.map((item) => item.startsWith(`${labels.architecture}:`) ? item : `${labels.architecture}: ${item}`),
      technologies: (localized.technologies ?? study.technologies).map(translateTechnology),
      results: results.map((item) => item.startsWith(`${labels.results}:`) ? item : `${labels.results}: ${item}`),
    };
  });
}

export function getLocalizedCaseStudy(locale: Locale, slug: string) {
  return getLocalizedCaseStudies(locale).find((study) => study.slug === slug);
}
