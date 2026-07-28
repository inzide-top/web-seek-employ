import type { ResumeDraft } from '@/types/resume'

export const mockResumeDraft: ResumeDraft = {
  title: '张震-前端开发',
  targetDirection: '前端开发工程师',
  name: '张震',
  address: ['武汉'],
  educationLevel: 'bachelor',
  school: '',
  major: '',
  graduationYear: '',
  currentStatus: 'employed',
  jobSearchIdentity: 'experienced',
  portfolioLinks: [],
  languages: [
    {
      id: 'mock-language-english',
      language: '英语',
      level: 'reading_writing',
    },
  ],
  workExperiences: [],
  comment:
    '性格开朗、工作勤奋负责，具备较强的抗压能力与执行力，善于与团队协作并高效完成任务\n具备出色的信息检索与问题解决能力，善于快速定位问题根源，短时间内提出有效方案并掌握相关知识点\n学习能力强，热衷于钻研新技术，将前端开发作为核心职业方向，服务端为辅，通过不断学习提升自身技能，期望在推动团队和企业发展的同时实现自我突破\n英语读写能力良好，能够阅读各种英文技术文档，熟练使用Google、Stack Overflow等常见问题',
  skills:
    '熟练掌握 JavaScript/TypeScript/HTML/CSS，熟悉 ES6+、异步编程、模块化、DOM/BOM、浏览器渲染机制，能够高质量还原设计稿并实现复杂业务交互\n熟练使用Vue3/Vue2，掌握Vue Router、Pinia、Composition API等常用能力，了解响应式原理、虚拟DOM、组件通信等核心机制\n掌握React开发，熟悉函数组件、React Hooks、React Router、Redux等生态工具，并能在实际项目中完成页面开发、组件拆分、状态管理等工作\n掌握 Uni-App、小程序及 Hybrid 跨端开发，具备 H5、App、小程序多端适配经验；了解 React Native / Expo 开发流程，能够完成基础页面开发、调试工作\n熟练使用Ant-Design-Vue、Tailwind CSS等UI/样式工具，熟悉 Less、Sass 语法 ，能够结合组件库和设计规范快速完成页面交付\n熟悉Webpack、Vite等前端工程化工具，能完成项目构建配置、模块化开发与常见构建问题排查\n熟练使用Git进行协作开发，掌握分支管理、冲突处理、版本控制流程，熟悉前端代码规范与代码质量检测\n熟悉前端常见登录鉴权方案，了解 Cookie、Session、JWT、Token 刷新机制及 OAuth2 授权流程，具备第三方登录或统一认证接入经验\n掌握 Nginx 常用配置，能够完成前端静态资源部署、反向代理、接口转发、Gzip 压缩、缓存策略配置\n熟悉ECharts数据可视化开发，能够根据业务需求完成复杂图表、动态数据渲染以及大数据量场景下的性能优化\n熟练使用 AI 编程工具辅助开发，参与团队 Skill / Prompt 规范建设，能够通过需求拆解、代码生成和人工审查提升开发效率与代码质量\n了解 Node.js ，具备Nuxt.js开发经验，熟悉npm/pnpm等包管理器，能处理依赖、构建部署相关问题',
  projects: [
    {
      id: 'fa711eec-7658-4c12-ab1f-e93c59fef129',
      name: '海外益智游戏H5应用',
      role: '前端开发',
      techStack: 'Vue3、TypeScript、Vite、Vue Router、Tailwind CSS、Howler.js、Hybrid、Aegis/APM',
      description:
        '面向海外用户的轻量化益智训练产品，运行于 App WebView 中，内置多款小游戏，覆盖数学计算、记忆训练、逻辑推理、专注力训练等场景，并承载广告展示、订阅转化、埋点统计和多语言适配等商业化能力。',
      content:
        '1.作为核心开发参与多款小游戏开发与迭代，负责玩法的规则拆解、状态管理、交互实现、UI 打磨和上线走查。\n2.利用 AI 辅助完成逻辑生成、关卡配置整理和 UI 代码调整，并结合人工校验优化边界场景、动画细节和性能问题。\n3.沉淀游戏公共能力，封装统一入口、顶部状态栏、引导页等多个页面，以及音效系统、广告占位通用模块和组合式逻辑，降低后续小游戏开发成本。\n4.对接 App WebView、广告、订阅、支付、多语言、RTL和埋点能力，保障应用在商业化和多端场景下稳定运行。',
      outcomes: '',
    },
    {
      id: '6152e67d-d1a5-448a-a163-63416a2b0bdb',
      name: '智能工牌后台管理',
      role: '前端开发',
      techStack: 'Vue2、TypeScript、vue-router、ant-design-vue、vuex、webpack、echarts',
      description:
        '基于语音识别、自然语言处理和 AI 分析技术，智能工牌通过分析案场接待对话，实现数据可视化展示，为案场销售提供客户画像、积累话术经验，挖掘商业价值，助力企业决策。\n开发和维护智能工牌管理后台，支持对接待管理、模型管理、统计分析等模块的功能，实现对案场销售数据的可视化和规范化管理。',
      content:
        '1. 完成接待统计模块开发：使用antv框架以及echarts提供数据可视化功能（折线图、饼图、柱状图、词云图等），为 \n客户团队提供直观的案场数据概览、顾客标签分布、销售接待状况评估等关键指标可视化，显著提升数据洞察效率与 \n业务决策支持能力；精准展示客户认可以及抗性点分布，助力销售策略优化。 \n2. 参与接待详情模块迭代：实现实时案场录音播放与对话记录同步滚动，提升销售复盘效率与质量；协助后端集成 \nChatGPT 大模型提供自动化接待总结与建议，以及利用 SSE 技术实现私有化 LLM 问答对话，帮助客户销售团队快 \n速提炼关键信息并改进话术。 \n3. 维护微前端架构以及iframe通信服务：有效解决跨系统通信中出现的兼容性问题，提升项目可靠与稳定性，保障数 \n据统计模块的正常运行。',
      outcomes: '',
    },
    {
      id: 'ae30b491-46a9-4bc4-87fd-7875ae9fa72d',
      name: '智能工牌移动端',
      role: '前端开发',
      techStack: 'Vue3、TypeScript 、vue-router、uni-app、pinia、vite、echarts、Tailwind CSS',
      description:
        '基于语音识别、自然语言处理和 AI 分析技术，智能工牌通过分析案场接待对话，实现数据可视化展示，为案场销售提供客户画像、积累话术经验，挖掘商业价值，助力企业决策。\n开发智能工牌移动端应用，服务于案场顾问和管理员用户，支持案场录音、数据统计、客户跟进等功能，提升销售管理效率。',
      content:
        '1. 优化状态管理与接口封装：对axios二次封装，并优化pinia提升用户身份（顾问与管理员）切换体验，实现全局筛选状 \n态的存储与复用。 \n2. 开发数据统计模块：基于用户身份展示客户画像与销讲分析，灵活切换Echarts数据图表（饼图、柱状图、词云 \n等），提供直观数据洞察。 \n3. 维护接待列表模块：实现录音播放与对话记录同步，协助集成AI语言模型提供总结与问答，确保后台体验统一。 \n4. 开发工牌报表模块：实现支持大量数据的多维排序表格，并参与Nuxt.js实现服务端渲染静态报表工作，便于案 \n场管理员保存与分享，提升客户工作效率。 \n5. 协助集成埋点监控 & Sentry 平台：实时捕获生产环境问题，通过飞书机器人报警，有效保障系统稳定运行，节 \n约排查故障时间。',
      outcomes: '',
    },
    {
      id: 'f9c8099d-bcd7-458c-a495-efa27bfc27ab',
      name: 'AI 求职/面试 Copilot 工作台',
      role: 'AI应用开发',
      techStack:
        'Next.js、React、TypeScript、Tailwind CSS、shadcn/ui、Prisma、PostgreSQL/Supabase、Vercel、OpenAI 兼容模型 API',
      description:
        '面向求职场景的 AI 工作台，支持简历/项目经历维护、JD 导入与匹配分析、定制话术生成、模拟面试、回答评分和投递看板管理。项目已部署上线，并配置面试 Demo 站点，方便面试官直接体验完整工作流。',
      content:
        '基于Vibe Coding开发方式，完成求职面试工作台从需求设计、功能生成、页面联调到线上部署的完整闭环；过程中负责需求拆解、功能验收、交互走查、问题反馈与迭代调整，验证 AI 辅助开发可用产品的能力。',
      outcomes: '',
    },
  ],
}
