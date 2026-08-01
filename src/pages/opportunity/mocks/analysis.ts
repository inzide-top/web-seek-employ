import type { ResumeAnalysis } from '@/types/resume'
import type { JobAnalysis, JobRequirementAnalysis } from '@/types/opportunity'

export const mockResumeIdentity = {
  resumeId: 'mock-resume-zhangzhen-frontend',
  resumeVersionId: 'mock-resume-version-zhangzhen-v1',
}

export const mockJobOpportunityId = 'mock-job-bilibili-ai-native-frontend'

export const mockResumeAnalysis: ResumeAnalysis = {
  id: 'mock-resume-analysis-zhangzhen-frontend-v1',
  resumeId: mockResumeIdentity.resumeId,
  resumeVersionId: mockResumeIdentity.resumeVersionId,
  sourceTitle: '张震-前端开发',
  targetDirection: '前端开发工程师',
  profileSummary:
    '候选人以前端开发为核心方向，具备 Vue、TypeScript、React、跨端、数据可视化、工程化和线上稳定性相关经验。项目经历覆盖海外 H5 游戏、智能工牌后台与移动端、AI 求职/面试 Copilot 工作台，其中智能工牌项目包含语音识别、NLP、ChatGPT 总结、SSE 私有化 LLM 问答等 AI 业务落地线索，AI Copilot 项目体现了 AI 辅助开发、需求拆解和产品闭环能力。',
  cityPreference: {
    cities: ['武汉'],
    flexibility: 'medium',
    reason:
      '当前意向城市仅填写武汉，Bilibili 岗位 base 为上海，城市不匹配需要提示；但城市因素权重较低，若岗位方向和薪资机会足够好，可作为可沟通项。',
  },
  rolePositioning: ['前端开发工程师', 'AI Native 前端', '复杂业务系统前端', '跨端/H5 前端', '数据可视化前端'],
  skillSignals: [
    {
      name: 'JavaScript / TypeScript / HTML / CSS',
      category: 'language',
      level: 'proficient',
      evidence:
        '专业技能中明确写到熟练掌握 JavaScript/TypeScript/HTML/CSS，并覆盖 ES6+、异步编程、模块化、DOM/BOM 和浏览器渲染机制。',
    },
    {
      name: 'Vue 2 / Vue 3',
      category: 'framework',
      level: 'proficient',
      evidence: '专业技能中写到熟练使用 Vue3/Vue2，项目经历中的海外 H5、智能工牌后台和移动端均使用 Vue 技术栈。',
    },
    {
      name: 'React',
      category: 'framework',
      level: 'familiar',
      evidence: '专业技能中写到掌握 React 开发，AI 求职/面试 Copilot 工作台项目技术栈包含 Next.js、React、TypeScript。',
    },
    {
      name: '前端工程化与组件化',
      category: 'engineering',
      level: 'proficient',
      evidence:
        '简历中覆盖 Webpack、Vite、Git、代码规范、Ant-Design-Vue、Tailwind CSS，并在项目中沉淀公共组件、组合式逻辑、状态管理和构建部署经验。',
    },
    {
      name: 'AI 编程工具 / Prompt / Skill 规范',
      category: 'ai_native',
      level: 'familiar',
      evidence:
        '专业技能中写到熟练使用 AI 编程工具辅助开发，参与团队 Skill / Prompt 规范建设；AI Copilot 项目也体现了 Vibe Coding、需求拆解、验收和迭代调整经验。',
    },
    {
      name: '实时交互与流式输出',
      category: 'engineering',
      level: 'familiar',
      evidence:
        '智能工牌后台项目中写到利用 SSE 技术实现私有化 LLM 问答对话，智能工牌移动端包含录音播放与对话记录同步。',
    },
  ],
  projectSignals: [
    {
      projectId: 'fa711eec-7658-4c12-ab1f-e93c59fef129',
      projectName: '海外益智游戏H5应用',
      role: '前端开发',
      businessDomain: '海外 H5 游戏 / App WebView / 商业化',
      technicalHighlights: [
        'Vue3 + TypeScript + Vite',
        'Hybrid WebView 对接',
        '音效系统与通用模块沉淀',
        '广告、订阅、支付、多语言、RTL、埋点能力接入',
        'AI 辅助逻辑生成和 UI 调整',
      ],
      measurableOutcomes: ['沉淀小游戏公共能力，降低后续开发成本', '保障商业化与多端场景稳定运行'],
      evidence: '项目描述和工作内容明确覆盖 H5 游戏、多语言、商业化、公共模块和 AI 辅助开发。',
    },
    {
      projectId: '6152e67d-d1a5-448a-a163-63416a2b0bdb',
      projectName: '智能工牌后台管理',
      role: '前端开发',
      businessDomain: 'AI 销售辅助 / 语音识别 / 数据分析后台',
      technicalHighlights: [
        'Vue2 + TypeScript + Ant Design Vue',
        'ECharts / AntV 数据可视化',
        '实时录音播放与对话记录同步滚动',
        'ChatGPT 自动化接待总结与建议',
        'SSE 私有化 LLM 问答对话',
        '微前端与 iframe 通信维护',
      ],
      measurableOutcomes: [
        '提升案场数据洞察效率',
        '帮助销售团队快速提炼关键信息并改进话术',
        '保障数据统计模块稳定运行',
      ],
      evidence: '项目内容包含 AI 分析、ChatGPT 总结、SSE 问答、语音对话记录同步和数据可视化。',
    },
    {
      projectId: 'ae30b491-46a9-4bc4-87fd-7875ae9fa72d',
      projectName: '智能工牌移动端',
      role: '前端开发',
      businessDomain: 'AI 销售辅助移动端 / 跨端应用',
      technicalHighlights: [
        'Vue3 + TypeScript + Uni-App + Pinia + Vite',
        '多身份状态管理和接口封装',
        '客户画像与销讲分析数据可视化',
        '录音播放与对话记录同步',
        'AI 总结与问答体验统一',
        'Sentry 监控与飞书报警',
      ],
      measurableOutcomes: ['提升客户工作效率', '实时捕获生产环境问题并节约故障排查时间'],
      evidence: '项目内容覆盖移动端跨端能力、数据统计、AI 总结问答、监控和稳定性保障。',
    },
    {
      projectId: 'f9c8099d-bcd7-458c-a495-efa27bfc27ab',
      projectName: 'AI 求职/面试 Copilot 工作台',
      role: 'AI应用开发',
      businessDomain: 'AI 求职工作台 / 面试辅助 / Agent 应用雏形',
      technicalHighlights: [
        'Next.js + React + TypeScript',
        'Prisma + PostgreSQL/Supabase',
        'OpenAI 兼容模型 API',
        'JD 导入与匹配分析',
        '模拟面试、回答评分和投递看板',
        'Vercel 部署与 Demo 体验',
      ],
      measurableOutcomes: ['完成从需求设计、功能生成、页面联调到线上部署的闭环', '验证 AI 辅助开发可用产品的能力'],
      evidence: '项目描述明确包含 AI 工作台、JD 匹配、模拟面试和模型 API 接入。',
    },
  ],
  strengths: [
    '前端基础覆盖面较全，Vue、TypeScript、React、跨端、工程化和数据可视化均有证据',
    '智能工牌项目与音频、对话记录、AI 总结、SSE 问答等能力存在较强相关性',
    'AI 求职/面试 Copilot 项目能支撑 AI Native 前端方向的差异化表达',
    '有产品闭环、交互走查、问题反馈、线上部署和稳定性保障意识',
  ],
  risks: [
    '意向城市为武汉，与 Bilibili 上海 base 不匹配',
    'RAG、知识库、文档切分、检索召回和效果评估的直接项目证据不足',
    'AI Workflow 和 Agent 搭建经验还需要从“使用 AI 工具/Vibe Coding”进一步升级为可解释的工程链路',
    '项目成果量化指标偏少，部分 outcomes 为空，简历说服力可继续加强',
  ],
  createdAt: '2026-07-26T00:00:00.000Z',
}

export const mockJobRequirementAnalysis: JobRequirementAnalysis = {
  id: 'mock-job-requirement-analysis-bilibili-ai-native-frontend',
  opportunityId: mockJobOpportunityId,
  company: 'Bilibili',
  jobTitle: 'AI Native开发工程师（前端方向）',
  address: ['上海'],
  summary:
    '该岗位面向猫耳音频直播、虚拟开播、广播剧点播等音频娱乐产品，要求候选人既能承担前端开发与持续迭代，又能使用 AI 工具提升研发效率，并参与 AI Workflow、Agent、RAG、知识库、对话交互、流式输出和音频相关 AI 能力的产品落地。',
  businessContext:
    '音频直播、虚拟开播和广播剧点播场景下的 AI Native 前端岗位，业务侧重内容音频、实时互动、对话体验、知识库能力和跨团队交付。',
  requirementSignals: [
    {
      requirement: '前端基础扎实，熟练掌握 JavaScript、TypeScript、HTML 和 CSS',
      category: 'core_requirements',
      requiredLevel: 'proficient',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确要求前端基础扎实，熟练掌握 JavaScript、TypeScript、HTML 和 CSS。',
    },
    {
      requirement: '熟练使用 React、Vue 等主流前端框架，具备良好的组件化和工程化能力',
      category: 'core_requirements',
      requiredLevel: 'proficient',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确要求 React、Vue、组件化和工程化能力。',
    },
    {
      requirement: '熟练使用 AI 编程工具，能够独立完成需求拆解、开发、调试和交付',
      category: 'core_requirements',
      requiredLevel: 'proficient',
      importance: 'must_have',
      evidenceFromJD: 'JD 将 AI 编程工具、需求拆解、开发调试和交付能力作为硬性要求。',
    },
    {
      requirement: '有 AI Workflow、Agent、RAG 或知识库应用的实际搭建经验',
      category: 'core_requirements',
      requiredLevel: 'proficient',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确要求 AI Workflow、Agent、RAG 或知识库应用的实际搭建经验。',
    },
    {
      requirement: '了解模型调用、Prompt、上下文管理、工具调用，以及知识库常见实现方式',
      category: 'core_requirements',
      requiredLevel: 'familiar',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确列出模型调用、Prompt、上下文管理、工具调用和知识库实现方式。',
    },
    {
      requirement: '熟悉 SSE、WebSocket、API 调用等实时交互方案',
      category: 'core_requirements',
      requiredLevel: 'familiar',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确要求 SSE、WebSocket、API 调用等实时交互方案。',
    },
    {
      requirement: '参与音频相关 AI 能力、对话交互和流式输出产品落地',
      category: 'business_context',
      requiredLevel: 'familiar',
      importance: 'nice_to_have',
      evidenceFromJD: '岗位职责提到 Agent、RAG、对话交互、流式输出及音频相关 AI 能力的产品落地。',
    },
    {
      requirement: '重视代码质量、数据安全和线上稳定性',
      category: 'seniority_depth',
      requiredLevel: 'proficient',
      importance: 'must_have',
      evidenceFromJD: 'JD 明确要求代码质量、数据安全和线上稳定性。',
    },
  ],
  scoringFramework: [
    {
      key: 'core_requirements',
      label: '核心要求匹配',
      weight: 30,
      score: 82,
      reason:
        'JD 的核心要求分为两层：一层是前端开发基础与实时交互能力，候选人证据较充分；另一层是 AI Workflow、Agent、RAG、知识库等实际搭建经验，候选人目前只有 AI 工具使用、ChatGPT 总结、SSE LLM 问答和 Copilot 工作台线索，尚未形成足够硬的工程证据。',
      evidenceFromJD:
        'JD 明确要求 JavaScript、TypeScript、React/Vue、组件化工程化、AI 编程工具、AI Workflow、Agent、RAG、知识库、Prompt、上下文管理、工具调用、SSE/WebSocket/API。',
      evidenceFromResume:
        '简历覆盖 Vue2/Vue3、React、TypeScript、Vite/Webpack、SSE 私有化 LLM 问答、ChatGPT 总结、AI 编程工具和 AI 求职/面试 Copilot 工作台。',
    },
    {
      key: 'related_experience',
      label: '相关经历匹配',
      weight: 25,
      score: 84,
      reason:
        '候选人的智能工牌后台/移动端与岗位中的音频、对话、AI 总结、流式问答和数据分析存在明显迁移关系；海外 H5 项目提供 App WebView、音效、多语言、商业化和前端交互经验。差距在于目标岗位是内容音频娱乐业务，简历尚未直接证明直播、虚拟开播或广播剧点播场景经验。',
      evidenceFromJD:
        '岗位服务猫耳音频直播、虚拟开播、广播剧点播，并要求参与对话交互、流式输出和音频相关 AI 能力落地。',
      evidenceFromResume:
        '智能工牌项目包含语音识别、对话记录同步、ChatGPT 自动化总结、SSE 私有化 LLM 问答；海外 H5 项目包含 Howler.js 音效、App WebView、多语言和商业化能力。',
    },
    {
      key: 'seniority_depth',
      label: '能力层级匹配',
      weight: 15,
      score: 76,
      reason:
        '简历能证明候选人具备独立开发、组件抽象、状态管理、监控告警、联调上线和问题排查能力；但 JD 中“设计和搭建 AI Workflow”“独立完成需求拆解、开发、调试和交付”对主导深度要求更高，当前简历对 Agent 状态机、工具调用、失败处理、RAG 评估等链路描述不足。',
      evidenceFromJD:
        'JD 使用“熟练使用”“独立完成”“设计和搭建”“参与建设”“持续优化”等措辞，要求不只是接入能力，还要求工程设计与持续迭代。',
      evidenceFromResume:
        '简历项目能看到模块开发、公共能力沉淀、微前端通信维护、Sentry/Aegis 监控、Vercel 部署和 AI Copilot 产品闭环，但对 AI Agent 工程链路的主导深度仍需补充。',
    },
    {
      key: 'business_context',
      label: '业务场景匹配',
      weight: 10,
      score: 78,
      reason:
        '候选人有音频记录、对话分析、AI 总结、移动端和 H5 商业化经验，能迁移到音频内容业务；但猫耳业务包含直播、虚拟开播、广播剧点播和内容社区语境，候选人简历没有直接行业经验，因此不能给到强匹配。',
      evidenceFromJD: 'JD 的业务场景集中在猫耳音频直播、虚拟开播、广播剧点播、音频相关 AI 能力和跨团队产品落地。',
      evidenceFromResume:
        '智能工牌业务偏案场销售辅助，海外 H5 项目偏轻量益智游戏与商业化，AI Copilot 项目偏求职面试工作台，均可迁移但不是同一业务场景。',
    },
    {
      key: 'bonus_points',
      label: '加分项匹配',
      weight: 10,
      score: 70,
      reason:
        'AI 编程工具、Prompt/Skill 规范、AI Copilot 工作台、ChatGPT 总结和 SSE LLM 问答都能形成加分；但 JD 中比较亮眼的 RAG、知识库切分、检索召回、效果评估和 Agent 工具调用，目前还没有足够可验证的项目细节。',
      evidenceFromJD:
        'JD 额外强调 AI Workflow、业务知识库建设、文档切分、检索召回、效果评估、Agent、RAG、对话交互和流式输出。',
      evidenceFromResume:
        '简历有 AI 编程工具、Skill/Prompt 规范、ChatGPT 总结、SSE LLM 问答和 AI 求职/面试 Copilot；但 RAG 与知识库链路还没有明确技术拆解。',
    },
    {
      key: 'job_constraints',
      label: '求职条件匹配',
      weight: 10,
      score: 60,
      reason:
        'JD 没有明确学历、语言、证书或到岗状态等硬性限制，因此不应因为简历未填写学校、专业或毕业时间而扣分；当前主要客观风险是候选人意向城市为武汉，而岗位 base 为上海，需要在投递前确认接受度。',
      evidenceFromJD: 'JD base 为上海，未在当前文本中明确学历、语言、证书、到岗状态或其他强约束。',
      evidenceFromResume:
        '简历意向城市为武汉，当前状态为在职，学历为本科；学校、专业和毕业时间在 mock 简历中暂未填写。',
    },
  ],
  createdAt: '2026-07-26T00:00:00.000Z',
}

export const mockJobAnalysis: JobAnalysis = {
  id: 'mock-job-analysis-bilibili-ai-native-frontend-resume-v1',
  opportunityId: mockJobOpportunityId,
  resumeId: mockResumeIdentity.resumeId,
  resumeVersionId: mockResumeIdentity.resumeVersionId,
  matchScore: 78,
  recommendation: 'worth_trying',
  summary:
    '整体值得投递，但需要带着补强策略推进。候选人的前端基础、Vue/React、TypeScript、跨端、SSE 实时交互和 AI 业务落地线索与 Bilibili 岗位存在较高相关性；当前最大的短板不是普通前端能力，而是 JD 明确要求的 AI Workflow、Agent、RAG、知识库建设和效果评估等实际搭建证据还不够硬。城市方面，候选人意向城市为武汉，岗位 base 为上海，需要作为投递前沟通项，而不是直接否决项。',
  locationMatch: {
    resumeCities: ['武汉'],
    jobAddress: '上海',
    isMatched: false,
    impact: 'minor',
    reason:
      '候选人意向城市仅填写武汉，岗位 base 为上海，因此城市不匹配；但城市只是求职条件的一部分，建议作为沟通风险而不是投递否决项。',
  },
  scoreBreakdown: mockJobRequirementAnalysis.scoringFramework,
  requirementMatches: [
    {
      requirement: '前端基础扎实，熟练掌握 JavaScript、TypeScript、HTML 和 CSS',
      requiredLevel: 'proficient',
      resumeEvidence:
        '专业技能明确写到熟练掌握 JavaScript/TypeScript/HTML/CSS，覆盖 ES6+、异步编程、模块化、DOM/BOM 和浏览器渲染机制。',
      candidateLevel: 'proficient',
      matchStatus: 'matched',
      importance: 'must_have',
      risk: 'low',
      suggestion: '可在简历项目中补充 TypeScript 类型设计、复杂表单状态和浏览器性能优化的具体案例。',
    },
    {
      requirement: '熟练使用 React、Vue 等主流前端框架，具备良好的组件化和工程化能力',
      requiredLevel: 'proficient',
      resumeEvidence:
        '多个项目使用 Vue2/Vue3/TypeScript；AI 求职/面试 Copilot 项目使用 Next.js、React、TypeScript；技能中也写到 React Hooks、Redux、Vue Router、Pinia。',
      candidateLevel: 'proficient',
      matchStatus: 'matched',
      importance: 'must_have',
      risk: 'low',
      suggestion: 'React 经验建议补充“实际负责的页面/组件/状态管理”细节，避免只停留在技术栈罗列。',
    },
    {
      requirement: '熟练使用 AI 编程工具，能够独立完成需求拆解、开发、调试和交付',
      requiredLevel: 'proficient',
      resumeEvidence:
        '专业技能写到熟练使用 AI 编程工具并参与 Skill / Prompt 规范建设；AI Copilot 项目说明了 Vibe Coding、需求拆解、功能生成、联调、上线部署完整闭环。',
      candidateLevel: 'proficient',
      matchStatus: 'matched',
      importance: 'must_have',
      risk: 'low',
      suggestion: '建议在项目描述中明确“AI 生成内容如何验收、如何回滚、如何保证质量”，这会更贴合面试官关注点。',
    },
    {
      requirement: '有 AI Workflow、Agent、RAG 或知识库应用的实际搭建经验',
      requiredLevel: 'proficient',
      resumeEvidence:
        'AI Copilot 工作台包含 JD 匹配、话术生成、模拟面试、回答评分和投递看板，但当前简历没有清晰说明 RAG、文档切分、检索召回或 AgentRun 调试链路。',
      candidateLevel: 'familiar',
      matchStatus: 'partial',
      importance: 'must_have',
      risk: 'medium',
      suggestion:
        '当前 Agent Seek Employment 项目应重点补齐结构化输出、Agent workflow、RAG/知识库、工具调用和调试轨迹，并把它写入简历。',
    },
    {
      requirement: '了解模型调用、Prompt、上下文管理、工具调用，以及知识库常见实现方式',
      requiredLevel: 'familiar',
      resumeEvidence:
        '简历中有 OpenAI 兼容模型 API、Skill / Prompt 规范建设、AI Copilot 项目和 ChatGPT 总结经验，但上下文管理、工具调用和知识库实现尚未形成明确项目证据。',
      candidateLevel: 'familiar',
      matchStatus: 'partial',
      importance: 'must_have',
      risk: 'medium',
      suggestion: '建议在项目中增加 AgentRun 调试页，记录 prompt、结构化输出、工具调用、错误处理和上下文压缩策略。',
    },
    {
      requirement: '熟悉 SSE、WebSocket、API 调用等实时交互方案',
      requiredLevel: 'familiar',
      resumeEvidence:
        '智能工牌后台明确写到利用 SSE 技术实现私有化 LLM 问答对话，移动端项目包含录音播放与对话记录同步。',
      candidateLevel: 'familiar',
      matchStatus: 'matched',
      importance: 'must_have',
      risk: 'low',
      suggestion: '可以补充 SSE 流式渲染、异常重试、断线恢复或消息状态管理等更工程化的细节。',
    },
    {
      requirement: '参与音频相关 AI 能力、对话交互和流式输出产品落地',
      requiredLevel: 'familiar',
      resumeEvidence:
        '智能工牌项目涉及语音识别、录音播放、对话记录同步、AI 总结与问答；海外 H5 项目涉及 Howler.js 音效系统。',
      candidateLevel: 'familiar',
      matchStatus: 'partial',
      importance: 'nice_to_have',
      risk: 'low',
      suggestion: '可以在面试中强调“音频/对话/AI 总结”的可迁移性，而不是强行说自己做过直播音频业务。',
    },
    {
      requirement: '重视代码质量、数据安全和线上稳定性',
      requiredLevel: 'proficient',
      resumeEvidence: '简历中包含 Git 协作、代码规范、Nginx、Sentry、飞书报警、Aegis/APM、线上稳定性保障等证据。',
      candidateLevel: 'proficient',
      matchStatus: 'matched',
      importance: 'must_have',
      risk: 'low',
      suggestion: '建议补充一次真实线上问题定位案例，说明如何发现、排查、修复和复盘。',
    },
  ],
  strengths: [
    {
      title: '前端硬技能与框架要求匹配度高',
      evidenceFromJD: 'JD 要求 JavaScript、TypeScript、HTML、CSS、React、Vue、组件化和工程化。',
      evidenceFromResume:
        '简历技能和项目覆盖 Vue2/Vue3、React、TypeScript、Vite、Webpack、Pinia、Ant Design Vue、Tailwind CSS。',
      level: 'high',
      reason: '这属于岗位核心要求中的基础能力层，候选人已有多项目、多技术栈、多端场景证据支撑。',
    },
    {
      title: 'AI + 对话 + 实时交互有真实业务线索',
      evidenceFromJD: 'JD 涉及 Agent、RAG、对话交互、流式输出和音频相关 AI 能力。',
      evidenceFromResume:
        '智能工牌项目涉及语音识别、AI 分析、ChatGPT 总结、SSE 私有化 LLM 问答、录音播放和对话记录同步。',
      level: 'high',
      reason: '虽然业务不是猫耳音频，但“音频/对话/AI 分析/流式交互”的能力迁移价值较高。',
    },
    {
      title: 'AI 编程工具和产品闭环经验适配岗位方向',
      evidenceFromJD: 'JD 要求使用 AI 工具参与需求分析、方案设计、编码、测试和调试。',
      evidenceFromResume: 'AI Copilot 工作台项目体现从需求设计、功能生成、页面联调到线上部署的闭环。',
      level: 'medium',
      reason: '这部分能形成差异化加分，但还需要补充结构化输出、RAG、AgentRun、工具调用和失败处理等工程证据。',
    },
  ],
  gaps: [
    {
      title: 'RAG 和知识库链路证据不足',
      evidenceFromJD: 'JD 明确要求业务知识库建设、文档切分、检索召回、效果评估和持续优化。',
      evidenceFromResume: '简历当前没有直接描述文档切分、向量化、召回评估或知识库优化实践。',
      level: 'high',
      reason: '这是岗位 AI Native 亮点要求，也是后续项目和简历优化的首要补强点。',
    },
    {
      title: 'AI Workflow / Agent 工程链路还不够具体',
      evidenceFromJD: 'JD 要求设计和搭建 AI Workflow，将大模型、业务规则、工具调用和人工处理流程组合。',
      evidenceFromResume:
        'AI Copilot 项目更多强调 Vibe Coding 和功能闭环，未明确工具调用、状态机、AgentRun、异常处理等工程设计。',
      level: 'high',
      reason: '面试官很可能追问“你怎么设计 workflow、怎么观测 agent、怎么处理失败”，需要项目继续补齐。',
    },
    {
      title: '意向城市与岗位 base 不匹配',
      evidenceFromJD: '岗位 base 为上海。',
      evidenceFromResume: '简历意向城市为武汉。',
      level: 'medium',
      reason: '城市只占轻量权重，但如果用户不接受上海，会影响投递决策。',
    },
    {
      title: '项目成果量化不足',
      evidenceFromJD: '岗位强调研发效率、交付质量、代码质量和线上稳定性。',
      evidenceFromResume: '多个项目 outcomes 为空，当前更多描述了做了什么，而不是结果提升了多少。',
      level: 'medium',
      reason: '建议补充性能、效率、稳定性、交付周期、复用成本下降等量化表达。',
    },
  ],
  resumeSuggestions: [
    {
      targetSection: 'project',
      title: '把 AI 求职/面试 Copilot 改写为 Agent/RAG 项目证据',
      reason:
        '这条建议来自“核心要求匹配”和“能力层级匹配”的共同短板。Bilibili JD 明确看重 AI Workflow、Agent、RAG、知识库、Prompt、上下文管理和工具调用。当前项目描述还偏“功能型产品”，应补充 workflow 拆分、结构化输出、检索链路、AgentRun 调试和失败处理。',
      priority: 'high',
      relatedJDText: '有 AI Workflow、Agent、RAG 或知识库应用的实际搭建经验',
    },
    {
      targetSection: 'project',
      title: '强化智能工牌项目里的 AI 对话和 SSE 流式输出表达',
      reason:
        '智能工牌项目与岗位中的对话交互、流式输出、音频相关 AI 能力非常接近，应把 ChatGPT 总结、私有化 LLM 问答、SSE、录音播放同步写得更突出。',
      priority: 'high',
      relatedJDText: '参与 Agent、RAG、对话交互、流式输出及音频相关 AI 能力的产品落地',
    },
    {
      targetSection: 'skills',
      title: '补充 AI Native 技术关键词的工程解释',
      reason:
        '这条建议来自“加分项匹配”。专业技能已经有 AI 编程工具和 Skill / Prompt，但缺少“模型调用、上下文管理、工具调用、知识库实现”的具体展开。',
      priority: 'high',
      relatedJDText: '了解模型调用、Prompt、上下文管理、工具调用，以及知识库常见实现方式',
    },
    {
      targetSection: 'summary',
      title: '把个人评价压缩为更职业化的候选人定位',
      reason:
        '当前自我评价偏通用性格描述，可改成“前端开发经验，具备 AI 对话、数据可视化、跨端、工程化经验，正在补强 Agent 与 RAG 实践”。避免写死年限，后续可由系统根据工作经历自动生成更准确表达。',
      priority: 'medium',
      relatedJDText: 'AI Native开发工程师（前端方向）',
    },
    {
      targetSection: 'project',
      title: '为项目补充可量化成果',
      reason:
        '岗位强调研发效率、交付质量和线上稳定性。建议补充如开发周期缩短、复用组件数量、故障响应时间、页面性能或业务指标。',
      priority: 'medium',
      relatedJDText: '提升研发效率与交付质量，保障产品体验、代码质量和线上稳定性',
    },
  ],
  interviewFocus: [
    {
      topic: '你如何设计一个 AI Workflow，把大模型、业务规则、工具调用和人工确认串起来？',
      reason: '这是 JD 中最核心的 AI Native 能力要求，也能检验候选人是否真正理解 Agent 工作流。',
      difficulty: 'advanced',
    },
    {
      topic: '你在智能工牌项目中如何实现 SSE 私有化 LLM 问答？遇到过哪些异常状态？',
      reason: '简历里已有 SSE 和 LLM 问答证据，面试官大概率会顺着追问技术细节。',
      difficulty: 'medium',
    },
    {
      topic: '如果要给猫耳音频直播搭一个业务知识库，你会如何做文档切分、召回和效果评估？',
      reason: 'JD 明确要求知识库建设和 RAG，当前简历证据不足，适合提前准备回答。',
      difficulty: 'advanced',
    },
    {
      topic: '你如何证明使用 AI 编程工具真的提升了研发效率，而不是只靠感觉？',
      reason: 'JD 要求使用 AI 工具提升效率，候选人也写了 Skill / Prompt 规范建设，容易被追问评估指标。',
      difficulty: 'medium',
    },
  ],
  createdAt: '2026-07-26T00:00:00.000Z',
}

export function createMockJobAnalysis(params: {
  opportunityId: string
  resumeId: string
  resumeVersionId: string
}): JobAnalysis {
  return {
    ...mockJobAnalysis,
    id: crypto.randomUUID(),
    opportunityId: params.opportunityId,
    resumeId: params.resumeId,
    resumeVersionId: params.resumeVersionId,
    createdAt: new Date().toISOString(),
  }
}
