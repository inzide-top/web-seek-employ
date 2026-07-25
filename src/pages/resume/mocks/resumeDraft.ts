import type { ResumeDraft } from '@/types/resume'

export const mockResumeDraft: ResumeDraft = {
  title: '前端开发简历',
  targetDirection: '前端开发工程师 / AI 应用前端',
  name: 'Charles',
  address: '上海',
  comment: '3 年前端开发经验，关注复杂业务系统、AI 应用集成和前端工程化。',
  skills: 'Vue 3、TypeScript、Vite、Pinia、前端工程化、AI Native 应用开发',
  projects: [
    {
      id: 'mock-project-agent-seek-employment',
      name: 'Agent Seek Employment',
      role: '前端开发负责人',
      techStack: 'Vue 3, TypeScript, Vite, Pinia, Nuxt UI',
      description: '面向求职场景的 AI Agent 工作台，支持简历版本管理、JD 分析、模拟面试和能力画像沉淀。',
      content:
        '1. 设计简历主线与不可变版本快照的数据模型\n2. 搭建 Vue 3 + Vite + Nuxt UI 的前端工作台\n3. 实现简历创建、项目经历录入和版本预览流程',
      outcomes: '1. 完成第一阶段简历版本链闭环\n2. 为后续 JD 分析和模拟面试 Agent 提供稳定数据基础',
    },
  ],
}
