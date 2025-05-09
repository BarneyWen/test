import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Golang全栈开发工程师',
    department: '技术部',
    type: 'full-time',
    description: '负责公司核心系统的设计、开发和维护，参与技术方案讨论和技术选型。',
    responsibilities: [
      '使用Golang进行后端服务开发',
      '前端页面设计与实现',
      '参与系统架构设计与优化',
      '解决系统运行中的技术问题'
    ],
    qrCodeUrl: 'https://raw.githubusercontent.com/stackblitz/bolt/main/assets/images/qr-code.png',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: '应届生大客户销售',
    department: '销售部',
    type: 'graduate',
    description: '负责开发和维护大客户关系，制定销售策略，达成销售目标。',
    responsibilities: [
      '开发潜在大客户并建立长期合作关系',
      '制定销售计划和策略',
      '进行产品演示和客户培训',
      '收集市场和竞争情报'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-green-500'
  },
  {
    id: 3,
    title: '管培生',
    department: '人力资源部',
    type: 'graduate',
    description: '参与公司各部门轮岗，全面了解业务流程，培养综合管理能力。',
    responsibilities: [
      '参与各部门核心工作',
      '协助部门经理完成各项任务',
      '参与公司战略规划和执行',
      '提出改进建议并参与实施'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: '新媒体实习生',
    department: '市场部',
    type: 'intern',
    description: '负责公司社交媒体运营，内容创作和用户互动，提升品牌影响力。',
    responsibilities: [
      '策划和制作社交媒体内容',
      '监控和分析社交媒体数据',
      '参与市场活动策划和执行',
      '收集用户反馈并提出改进建议'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-pink-500'
  },
  {
    id: 5,
    title: 'AI开发应届/实习',
    department: '研发部',
    type: 'intern',
    description: '参与AI算法研发，模型训练和优化，解决实际业务问题。',
    responsibilities: [
      '开发和优化AI算法',
      '参与数据收集和处理',
      '进行模型训练和评估',
      '将AI技术应用到实际业务场景'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-indigo-500'
  },
  {
    id: 6,
    title: 'UI设计师应届/实习',
    department: '设计部',
    type: 'intern',
    description: '负责产品界面设计，提升用户体验，参与品牌视觉设计。',
    responsibilities: [
      '设计产品界面和交互原型',
      '参与用户研究和体验设计',
      '制作产品视觉设计规范',
      '与开发团队协作实现设计方案'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-yellow-500'
  },
  {
    id: 7,
    title: '售前实习生',
    department: '销售部',
    type: 'intern',
    description: '协助售前团队进行产品演示，需求分析，方案设计和技术支持。',
    responsibilities: [
      '协助准备产品演示和技术文档',
      '参与客户需求分析和方案设计',
      '提供售前技术支持',
      '收集客户反馈并整理分析'
    ],
    qrCodeUrl: 'https://images.pexels.com/photos/8636591/pexels-photo-8636591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    color: 'bg-red-500'
  }
];