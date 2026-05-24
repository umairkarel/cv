// Edit this file to update portfolio content — no code changes needed.
const PORTFOLIO_DATA = {
  "meta": {
    "name": "Umair Zahoor Karel",
    "badge": "Available for new opportunities",
    "roles": ["Data Engineer", "Analytics Engineer", "Pipeline Architect", "ELT Specialist", "SnowPro Core Certified"],
    "heroDesc": "Performance-driven Engineer with 3 years of experience in designing and maintaining scalable solutions. Specialized in Engineering the path from raw data to actionable insights.",
    "email": "umair.karel@gmail.com",
    "phone": "+91 9370621692",
    "linkedin": "https://www.linkedin.com/in/umairkarel/",
    "github": "https://github.com/umairkarel",
    "footerLine": "Data Engineer · 2025"
  },
  "nav": [
    { "text": "About",        "href": "#about" },
    { "text": "Skills",       "href": "#skills" },
    { "text": "Experience",   "href": "#experience" },
    { "text": "Projects",     "href": "#projects" },
    { "text": "Achievements", "href": "#achievements" },
    { "text": "Contact",      "href": "#contact-section" }
  ],
  "floatingKeywords": [
    { "text": "SELECT *",     "style": "left:8%;bottom:22%;--dur:9s;--delay:0s" },
    { "text": "dbt run",      "style": "left:78%;bottom:28%;--dur:11s;--delay:2s" },
    { "text": "ELT",          "style": "left:18%;bottom:12%;--dur:8s;--delay:4s" },
    { "text": "Kafka",        "style": "left:68%;bottom:14%;--dur:10s;--delay:1s" },
    { "text": "Snowflake",    "style": "left:48%;bottom:8%;--dur:9s;--delay:3s" },
    { "text": "PARTITION BY", "style": "left:33%;bottom:32%;--dur:12s;--delay:5s" },
    { "text": "K8s",          "style": "left:87%;bottom:42%;--dur:8s;--delay:0.5s" },
    { "text": "BigQuery",     "style": "left:4%;bottom:52%;--dur:10s;--delay:3.5s" },
    { "text": "medallion",    "style": "left:58%;bottom:45%;--dur:13s;--delay:6s" },
    { "text": "WITH cte AS",  "style": "left:25%;bottom:60%;--dur:9s;--delay:2.5s" }
  ],
  "stats": [
    { "count": 3,  "label": "Years Experience" },
    { "count": 10, "label": "Brands Served" },
    { "count": 4,  "label": "Major Projects" },
    { "count": 3,  "label": "Certifications" }
  ],
  "about": {
    "paragraphs": [
      "Performance-driven Engineer with <strong>3 years of experience</strong> in designing and maintaining scalable solutions. Skilled in <strong>Snowflake</strong>, <strong>dbt</strong>, and <strong>ADF</strong> with a proven track record of developing scalable <strong>ELT pipelines</strong> for large scale multi-national clients.",
      "Specialized in Engineering the path from raw data to actionable insights — from multi-source ingestion via <strong>Azure Data Factory</strong> and <strong>Apache Kafka</strong>, to transformation in <strong>Snowflake</strong> and <strong>BigQuery</strong> using <strong>dbt</strong>, to delivery through <strong>Power BI</strong> and <strong>Grafana</strong> dashboards.",
      "<strong>Snowflake SnowPro Core Certified.</strong> Recipient of the <strong>SQL Samurai Award</strong> from a multinational client for outstanding SQL analysis and optimization."
    ]
  },
  "skills": [
    {
      "category": "Databases / Data Warehouses",
      "tags": [
        { "name": "Snowflake",   "highlight": true },
        { "name": "Databricks",  "highlight": true },
        { "name": "BigQuery",    "highlight": true },
        { "name": "PostgreSQL" },
        { "name": "MySQL" },
        { "name": "MongoDB" },
        { "name": "OpenSearch" }
      ]
    },
    {
      "category": "Data Engineering",
      "tags": [
        { "name": "DBT",                "highlight": true },
        { "name": "Apache Airflow",     "highlight": true },
        { "name": "Azure Data Factory", "highlight": true },
        { "name": "Azure Data Lake",    "highlight": true },
        { "name": "Apache Kafka",       "highlight": true },
        { "name": "PySpark" },
        { "name": "Pandas" },
        { "name": "Numpy" },
        { "name": "FastAPI" },
        { "name": "SQLAlchemy" }
      ]
    },
    {
      "category": "Tools / Platforms",
      "tags": [
        { "name": "PowerBI",    "highlight": true },
        { "name": "Grafana",    "highlight": true },
        { "name": "Docker",     "highlight": true },
        { "name": "Git" },
        { "name": "Traefik" },
        { "name": "Redis" },
        { "name": "Celery" },
        { "name": "Fluent Bit" },
        { "name": "Graylog" }
      ]
    },
    {
      "category": "Languages",
      "tags": [
        { "name": "Python", "highlight": true },
        { "name": "SQL",    "highlight": true },
        { "name": "JavaScript" },
        { "name": "Java" }
      ]
    }
  ],
  "experience": [
    {
      "company": "Sarvaha Systems Pvt. Ltd.",
      "role": "Software Engineer",
      "period": "Jan 2023 – Present",
      "projects": [
        {
          "name": "Independence Pet Group",
          "badge": "Insurance · Analytics",
          "bullets": [
            "Engineered multi-source <b>ELT pipelines</b> using <b>Azure Data Factory</b> to ingest data from <b>BigQuery</b>, <b>MSSQL</b>, and external <b>REST APIs</b> into <b>Snowflake</b> via <b>Azure Data Lake</b>, processing data across 10+ brands for a multinational client handling tens of GBs of data per brand.",
            "Designed a unified <b>insurance policy data model</b> in <b>Snowflake</b> by integrating data from multiple source systems with heterogeneous schemas, enabling consistent cross-brand reporting and bridging legacy data structures with target analytical models.",
            "Built <b>dbt</b> transformation pipelines implementing a three-tier <b>medallion architecture</b> (bronze/silver/gold), enforcing <b>data quality</b> and schema contracts across transformation layers to deliver analytics-ready datasets for data analysts and BI teams.",
            "Transformed raw <b>GA4 BigQuery</b> event exports using <b>dbt</b>, parsing deeply nested <b>JSON event structures</b> into a normalized <b>star schema</b> with separate dimension and fact tables, reducing query complexity and enabling scalable consumption across downstream BI layers.",
            "Designed and maintained a unified <b>sales attribution pipeline</b> in <b>Snowflake</b>, consolidating data from advertising platforms, <b>Google Analytics 4</b>, and transactional sales systems to enable cross-channel performance analysis and reporting.",
            "Developed end-to-end <b>Power BI</b> semantic models and dashboards visualizing the complete <b>customer lifecycle funnel</b> from advertising attribution through sales conversion, policy renewals, claims, and churn, delivering unified <b>business intelligence</b> visibility to cross-functional stakeholders."
          ],
          "chips": ["ADF", "Snowflake", "dbt", "BigQuery", "Power BI", "Azure Data Lake"]
        },
        {
          "name": "FoldHealth",
          "badge": "Healthcare · Platform Migration",
          "bullets": [
            "Led re-architecture of a <b>patient care analytics platform</b>, decoupling widget business logic from tightly coupled embedded <b>SQL</b> by migrating from a custom <b>React</b>-based dashboard system to a managed <b>BI platform</b>, reducing per-widget development overhead and enabling self-service reporting for clinical teams.",
            "Designed and implemented <b>dbt</b> transformation pipelines in <b>BigQuery</b> using a <b>One Big Table (OBT)</b> pattern, pre-joining and denormalizing multi-entity clinical and operational data into wide analytical tables to serve as a <b>single source of truth</b> across multiple dashboard widgets and report types.",
            "Profiled and optimized complex analytical <b>SQL</b> queries powering patient care widgets, refactoring query logic for <b>BigQuery</b> execution efficiency and validating output parity against original <b>React</b> widget data to guarantee correctness.",
            "Ported complex widget business logic into the BI tool's <b>semantic layer</b>, creating reusable calculated fields and measures to maintain consistent <b>metric definitions</b> across reports and ensure a zero-regression migration from the React dashboard system.",
            "Transformed nested, hierarchical <b>healthcare data</b> structures, including multi-level care hierarchies and patient event logs, into denormalized, analytics-ready flat tables in <b>BigQuery</b>, improving <b>dashboard query performance</b> and enabling direct BI ingestion without runtime transformation."
          ],
          "chips": ["dbt", "BigQuery", "SQL", "Semantic Layer"]
        },
        {
          "name": "Wazuh",
          "badge": "Security · Real-Time Pipelines",
          "bullets": [
            "Re-engineered a distributed, agent-based <b>Host Intrusion Detection System (HIDS)</b> by architecting a multi-stage <b>log processing pipeline</b> using <b>Fluent Bit</b> for agent-side collection, <b>Graylog</b> for centralized filtering and enrichment, and <b>OpenSearch</b> as the indexed backend for fast security event querying.",
            "Integrated <b>Apache Kafka</b> as a distributed message broker between <b>Fluent Bit</b> collectors and the <b>Graylog</b> processing layer, enabling real-time, fault-tolerant event ingestion with a decoupled producer-consumer architecture to handle burst traffic from multiple agents simultaneously.",
            "Containerized and deployed the full HIDS stack on <b>Kubernetes</b>, configuring <b>Fluent Bit DaemonSets</b> for node-level log collection and <b>Graylog/OpenSearch StatefulSets</b> with health probes and rolling update strategies to ensure high availability across client tenants.",
            "Built <b>multi-tenant Grafana</b> dashboards with <b>OpenSearch</b> data source integration, implementing namespace-isolated queries and role-based access controls to deliver per-client visibility over agent telemetry, threat indicators, and system health metrics."
          ],
          "chips": ["Apache Kafka", "Kubernetes", "Fluent Bit", "Graylog", "OpenSearch", "Grafana"]
        },
        {
          "name": "ApexaIQ",
          "badge": "AI SaaS · Backend",
          "bullets": [
            "Designed and developed a <b>microservice API</b> using <b>FastAPI</b> to scrape and persist structured data into <b>MongoDB</b>, offloading long-running scraping tasks to a distributed <b>Celery</b> worker queue backed by <b>Redis</b> as the message broker, decoupling request handling from task execution to improve throughput.",
            "Automated recurring scraping workflows using <b>cron job</b> scheduling and containerized the full service stack with <b>Docker Compose</b>, isolating service dependencies and ensuring consistent deployments across environments.",
            "Wrote <b>pytest</b> unit and integration tests covering core scraping and task dispatch logic, and configured <b>pre-commit hooks</b> with <b>pylint</b> to enforce code quality standards on every commit."
          ],
          "chips": ["FastAPI", "Celery", "Redis", "MongoDB", "Docker"]
        }
      ]
    },
    {
      "company": "Medpiper Technologies Pvt. Ltd.",
      "role": "Backend Developer Intern",
      "period": "Oct 2021 – Apr 2022",
      "projects": [
        {
          "name": "JournoMed",
          "badge": "Health-Tech · Backend",
          "bullets": [
            "Contributed to backend development of <b>JournoMed</b>, a health and medical news platform, implementing <b>RESTful API</b> endpoints using <b>Django</b> and <b>Flask</b> to support content management, article retrieval, and user authentication workflows.",
            "Modeled application data using <b>Django ORM</b>, designing relational schemas for articles, categories, and user profiles, and wrote <b>SQL</b>-backed queries to support paginated content feeds and keyword-based search.",
            "Maintained and extended an internal <b>CRM</b> application, implementing <b>CRUD</b> operations and resolving data consistency bugs to ensure a reliable single source of truth for cross-team operations."
          ],
          "chips": ["Python", "Django", "Flask", "PostgreSQL", "REST API"]
        }
      ]
    }
  ],
  "projects": [
    {
      "name": "Eventrix",
      "github": "https://github.com/umairkarel/Eventrix",
      "tech": "Python · FastAPI · PostgreSQL · Docker · Traefik",
      "bullets": [
        "Built a <b>multi-tenant event ingestion pipeline</b> using <b>FastAPI</b> and <b>GTM Server</b>, with <b>Traefik</b> as the reverse proxy routing <b>GA4 event streams</b> through isolated per-tenant domains, eliminating ad-blocker data loss and improving <b>data collection completeness</b>.",
        "Designed a <b>real-time enrichment layer</b> intercepting <b>GA4 Measurement Protocol</b> hits to inject accurate client metadata, preserving <b>geolocation and session attribution</b> in downstream analytical datasets.",
        "Automated tenant onboarding by integrating <b>Cloudflare DNS</b> with <b>Traefik's dynamic routing</b>, backed by a <b>PostgreSQL</b> state machine and <b>async processing</b> to manage endpoint provisioning lifecycle without blocking the ingestion API."
      ]
    }
  ],
  "achievements": [
    {
      "iconEmoji": "❄️",
      "iconClass": "sf",
      "title": "Snowflake SnowPro Core Certification",
      "description": "Industry certification validating Snowflake architecture, data loading, transformation, and performance optimization expertise.",
      "linkText": "View Credential →",
      "link": "https://achieve.snowflake.com/026d4ab7-c4e3-4f91-b2cb-227ec0910c2c"
    },
    {
      "iconEmoji": "🏆",
      "iconClass": "aw",
      "title": "SQL Samurai Award",
      "description": "Client rewarded for outstanding performance in SQL analysis and optimization.",
      "linkText": "View Award →",
      "link": "https://www.linkedin.com/in/umairkarel/overlay/1779537778731/single-media-viewer/?profileId=ACoAADGKssABtYsq_0PCxcybUrn9r4XDBluOSBw"
    },
    {
      "iconEmoji": "☁️",
      "iconClass": "aws",
      "title": "Cloud Computing 101 — AWS Badge",
      "description": "Credly-verified AWS badge demonstrating foundational cloud architecture and core services knowledge.",
      "linkText": "View Badge →",
      "link": "https://www.credly.com/badges/d31a2916-b02f-4517-8bd7-4a82447a0ca0"
    }
  ],
  "education": [
    {
      "institution": "Dr. Babasaheb Ambedkar Technological University",
      "degree": "Bachelors of Technology (B. Tech) in Computer Science",
      "location": "Raigad, Maharashtra, India",
      "period": "2019 – 2023",
      "gpa": "8.47 / 10"
    }
  ],
  "pipelines": [
    {
      "nodes": [
        { "label": "Extract",   "left": "8%" },
        { "label": "Load",      "left": "30%" },
        { "label": "Transform", "left": "55%" },
        { "label": "Serve",     "left": "78%" },
        { "label": "✓",         "left": "95%" }
      ],
      "caption": "// ELT pipeline"
    },
    {
      "nodes": [
        { "label": "Bronze",    "left": "12%" },
        { "label": "Silver",    "left": "38%" },
        { "label": "Gold",      "left": "65%" },
        { "label": "Analytics", "left": "90%" }
      ],
      "caption": "// medallion architecture"
    },
    {
      "nodes": [
        { "label": "Ingest",  "left": "10%" },
        { "label": "Process", "left": "33%" },
        { "label": "Enrich",  "left": "57%" },
        { "label": "Publish", "left": "80%" }
      ],
      "caption": "// streaming pipeline"
    }
  ]
};
