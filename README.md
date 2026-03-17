# "多言陶舍" 陶瓷工作室网站 — 现代艺术画廊风重设计

## Context

当前项目是一个 Vue 3 + Vite + Tailwind CSS 4 的单页陶瓷工作室网站，采用暖色奶油风格。用户希望从零重新规划，改为**现代艺术画廊风**（黑白高对比、大字排版、满屏图片、不规则布局），同时在现有板块基础上**扩展新功能**（客户评价、博客、FAQ、视频展示）。

---

## 一、设计风格

### 色彩体系（深色画廊主题）
| 用途 | 色值 | 说明 |
|------|------|------|
| 主背景 | `#0A0A0A` | 近黑 |
| 次背景 | `#141414` | 交替板块 |
| 卡片/弹窗 | `#1A1A1A` | 微抬升 |
| 主文字 | `#F5F0EB` | 暖白 |
| 次文字 | `#8A8279` | 灰棕 |
| 强调色 | `#C4704B` | 赤陶/陶土色 |
| 强调浅 | `#D4956E` | 悬停态 |
| 边框 | `#2A2520` | 微弱分隔 |

### 字体系统
- **中文标题**: `Noto Serif SC`（衬线，文化感）
- **中文正文**: `Noto Sans SC`（无衬线，易读）
- **英文装饰**: `Space Grotesk`（几何无衬线，画廊感）——新增
- 标题尺寸使用 `clamp()` 响应式缩放，最大 7rem

### 排版特征
- 板块标题采用**双层结构**：小号英文标签（`ABOUT` / `WORKS`）+ 大号中文标题，中间用陶土色细线分隔
- 大量留白、不对称布局、满屏图片

---

## 二、新增依赖

| 包名 | 大小 | 用途 |
|------|------|------|
| `gsap` | ~25KB | 滚动触发动画、时间轴编排、视差效果 |
| `lenis` | ~4KB | 丝滑惯性滚动（画廊网站标配） |

---

## 三、文件结构

```
src/
  main.js                          # 入口，初始化 Lenis
  App.vue                          # 薄壳：组装各板块 + 全局滚动管理
  style.css                        # 全局样式：@theme 变量、字体、动画

  composables/
    useScrollAnimation.js           # IntersectionObserver 入场动画
    useSmoothScroll.js              # Lenis 封装
    useCursorEffect.js              # 自定义光标（仅桌面端）
    useActiveSection.js             # 导航高亮（提取自现有逻辑）

  data/
    navigation.js                   # 导航链接
    works.js                        # 作品数据
    courses.js                      # 课程数据
    reviews.js                      # 新：客户评价
    articles.js                     # 新：博客文章
    faq.js                          # 新：常见问题
    videos.js                       # 新：视频数据

  components/
    layout/
      TheNavbar.vue                 # 固定深色导航，毛玻璃效果
      TheFooter.vue                 # 四栏底部
      CustomCursor.vue              # 自定义光标（点+环）

    sections/
      HeroSection.vue               # 满屏视差英雄区
      AboutSection.vue              # 不对称两栏
      WorksGallery.vue              # 瀑布流画廊 + 筛选
      CoursesSection.vue            # 水平滚动课程卡片
      ProcessSection.vue            # 垂直时间线 + 滚动触发
      ReviewsSection.vue            # 新：评价轮播
      VideoShowcase.vue             # 新：视频网格 + 灯箱
      BlogSection.vue               # 新：文章卡片 + 阅读弹窗
      FaqSection.vue                # 新：手风琴FAQ
      ContactSection.vue            # 深色联系表单

    ui/
      SectionHeader.vue             # 复用的板块标题组件
      RevealOnScroll.vue            # 入场动画包装器
      BookingModal.vue              # 预约弹窗
      AccordionItem.vue             # FAQ 折叠项
```

---

## 四、各板块设计

### 1. 导航 (TheNavbar.vue)
- 透明 → 滚动后 `bg-black/80 backdrop-blur-xl`
- Logo 左侧白色衬线字，链接居中 `Space Grotesk` 大写
- 活跃链接用陶土色小圆点指示（非色块背景）
- 移动端：全屏覆盖菜单，大号链接交错入场

### 2. 英雄区 (HeroSection.vue)
- 满屏背景图/视频 + 暗渐变遮罩（左侧60%→右侧透明）
- 文字左对齐：英文小标签 → 中文大标题（`泥土之上 / 指尖生花`，逐行交错入场）→ 简介 → 双按钮
- 底部滚动指示线动画
- 背景随滚动微视差

### 3. 关于 (AboutSection.vue)
- 不对称两栏：左60%出血大图（幕布揭开动画）+ 右40%文字
- 引用卡片深色 + 陶土色左边框
- 特色标签横排展示

### 4. 作品画廊 (WorksGallery.vue)
- CSS `columns` 瀑布流布局（3/2/1列响应式）
- 筛选标签：极简文字按钮 + 活跃下划线
- 悬停：图片放大 + 暗遮罩 + 标题从底部滑入
- 光标悬停时变为"VIEW"圆环

### 5. 课程 (CoursesSection.vue)
- 水平拖拽滚动卡片条
- 窄高深色卡片（300×450px），顶部图片 + 课程信息
- 热门课程陶土色左边框

### 6. 制作流程 (ProcessSection.vue)
- 垂直时间线（左侧圆点 + 连线）
- 每步内容右侧展开，左右交替插入配图
- 滚动触发：圆点填充陶土色 + 连线"绘制"

### 7. 客户评价 (ReviewsSection.vue) — 新增
- 居中大号引用文字 + 装饰性巨型引号（陶土色，低透明度）
- 头像缩略图行 + 自动轮播（5秒）+ 淡入淡出切换

### 8. 视频展示 (VideoShowcase.vue) — 新增
- Bento 布局：一个大视频（2×2）+ 2-3个小缩略图
- 点击弹出灯箱播放（占位模式：显示"视频即将上线"）

### 9. 博客文章 (BlogSection.vue) — 新增
- 三栏文章卡片（大图 + 日期 + 标题 + 摘要）
- 点击"阅读更多"打开全屏深色阅读弹窗

### 10. FAQ (FaqSection.vue) — 新增
- 两栏：左标题 + 右手风琴
- CSS `grid-template-rows: 0fr → 1fr` 展开动画
- 箭头旋转180°

### 11. 联系 (ContactSection.vue)
- 深色主题，两栏：左联系信息 + 右表单卡片
- 输入框深色背景 + 陶土色聚焦边框

### 12. 底部 (TheFooter.vue)
- 四栏：Logo+标语 / 快速链接 / 课程 / 联系信息
- 版权 + 社交图标行

---

## 五、动画策略

| 效果 | 位置 | 实现方式 |
|------|------|----------|
| 丝滑滚动 | 全局 | Lenis |
| 视差 | 英雄区背景、装饰元素 | GSAP ScrollTrigger |
| 文字交错入场 | 标题 | GSAP timeline |
| 幕布揭开 | 关于区图片 | CSS clip-path + GSAP |
| 上滑淡入 | 各内容块 | IntersectionObserver + CSS |
| 悬停放大 | 画廊图片、卡片 | CSS transform |
| 自定义光标 | 全局（桌面端） | composable + requestAnimationFrame |
| 时间线绘制 | 流程区 | GSAP ScrollTrigger |
| 手风琴展开 | FAQ | Vue Transition + CSS grid |
| 水平拖拽 | 课程区 | pointer events |

---

## 六、实施顺序

### Phase 1: 基础架构
1. 安装 `gsap` 和 `lenis`
2. 设置 `style.css`（@theme 变量、字体导入、全局样式）
3. 提取数据文件到 `data/` 目录
4. 创建 composables（useActiveSection、useScrollAnimation、useSmoothScroll）
5. 重构 `App.vue` 为薄壳组件
6. 构建 `TheNavbar.vue` 和 `TheFooter.vue`

### Phase 2: 核心板块（现有功能重新设计）
7. HeroSection → AboutSection → WorksGallery
8. CoursesSection → ProcessSection → ContactSection
9. BookingModal 提取与重新设计

### Phase 3: 新增功能
10. ReviewsSection + data/reviews.js
11. VideoShowcase + data/videos.js
12. BlogSection + data/articles.js
13. FaqSection + data/faq.js

### Phase 4: 润色
14. CustomCursor + useCursorEffect
15. GSAP 动画细调
16. 响应式测试 + 移动端菜单优化
17. 性能优化（图片懒加载、GSAP tree-shaking）

---

## 七、验证方式

1. `npm run dev` 启动开发服务器，逐板块检查视觉效果
2. 检查响应式：桌面 / 平板 / 手机三种视口
3. 验证交互：导航滚动、作品筛选、课程水平滚动、FAQ 展开、预约弹窗、视频灯箱、文章阅读弹窗
4. 检查动画性能：无卡顿、60fps
5. `npm run build` 确保生产构建无错误

---

## 关键文件清单

| 文件 | 操作 |
|------|------|
| `package.json` | 添加 gsap、lenis 依赖 |
| `index.html` | 添加 Space Grotesk 字体 preconnect |
| `src/style.css` | 重写：@theme 变量 + 全局样式 |
| `src/main.js` | 添加 Lenis 初始化 |
| `src/App.vue` | 重写为薄壳（从 723 行 → ~100 行） |
| `src/data/*.js` | 新建 7 个数据文件 |
| `src/composables/*.js` | 新建 4 个组合式函数 |
| `src/components/**/*.vue` | 新建 ~17 个组件 |
