---
title: 读书笔记
---


## 2021-4-22

### 1. [原以为很简单，结果这道 Promise 面试题让我失眠好一会](https://mp.weixin.qq.com/s/8dbHLelwRcyUlGIEzUTYpw)

**概述**



**关键词**



**主要内容**



**反思**


## 2021-4-21

### 1. [前端团队研发效能提升的探索与实践](https://mp.weixin.qq.com/s/F2b5nXEKpygX9vCFW1YhYg)

**概述**

主要讲述了丁香医生工程化平台【Jarvis】的起源与落地。阐述了在系统搭建过程中遇到的技术和管理问题，以及这些问题都是通过什么方式解决的。

**关键词**

`Jarvis`、`研发效能`、`技术的价值`

**主要内容**

技术的价值与研发效能
+ 聚焦于交付质量的「优质」
+ 聚焦于交付效率的「高效」
+ 聚焦于交付过程的「持续顺畅」
+ 聚焦于业务需求价值的「有效价值」

**反思**

> 1. 团队Leader应尽可能地将团队引导到规范化、自动化的道路上。
> 2. 自动化会激活技术人员的创造力，一切重复而枯燥的任务都会让技术人员产生疲惫感与焦虑心理。自动化包括：发布自动化、测试自动化、文档自动化以及工作流自动化等。
> 3. 还是要多看看外面的世界，才能让自己重新审视自己和团队的弱势，查漏补缺。


## 2021-4-20

### 1. [小程序与动画的故事](https://juejin.cn/post/6949128356499554312)

**概述**

本文主要讲述小程序中的三种基本动画创建方式，以及如何实现元素滚动到可视区后才开始执行动画效果（实践）

**关键词**

`onPageScroll`、 `Taro.createIntersectionObserver`

**主要内容**

关于实现滚动到可视区的两个关键点

1. 在元素为滚动到可视区时，既不能执行动画，也不能将元素 `display: none`
2. 需要实时计算滚动的位置，并与元素的位置进行判断

滚动到可视区域才开始执行动画的效果

+ 页面滚动模式：`onPageScroll`
+ 观察者模式：`Taro.createIntersectionObserver`

**反思**

> 在这篇文章里发现了一个特别有意思的代码写法

:::: details 一个特别有意思的代码写法

```js
const createPageScroll = function(page) {
    const env = Taro.getEnv()
    let onPageScroll = () => {}

    if (env !== Taro.ENV_TYPE.WEB) {
        // 小程序
        // 先获取到滚动监听事件，然后重写，注入业务回调
        const prevOnPageScroll = page.onPageScroll.bind(page)
        page.onPageScroll = e => {
            prevOnPageScroll(e)
            onPageScroll(e)
        }
    } else if (env === Taro.ENV_TYPE.WEB) {
        // H5
        // 注入业务回调
        window.addEventListener("scroll", () => {
            onPageScroll({ scrollTop: window.scrollY })
        })
    }

    // 这里返回了一个箭头函数，用于重新对 onPageScroll 赋值
    return nextOnPageScroll => {
        onPageScroll = nextOnPageScroll
    }
}

listenPageScroll (currentPage) {
    // NOTE: 这里传入currentPage，完成页面事件的重新绑定
    // 这里返回的是一个箭头函数
    const pageScroll = createPageScroll(currentPage)
    // 再通过传入的回调方法改变源代码中的默认回调，秒啊！
    pageScroll(this.onScroll)

    // ……有一种面向抽象编程的感觉
}
```

::::


## 2021-4-10

### 1.[程序员写好技术文章的几点小技巧](https://mp.weixin.qq.com/s/muQADgXCEsG4GAy4ot1CNg)

**概述**

主要讲述了写作的注意点以及写作技巧。

**关键词**

`内容`、 `整理`

**主要内容**

+ 该不该写
    + `如果你想写一篇爆款文章，但是又觉得没有内容可写，那就不要勉强了，放下笔，合上电脑，有这个时间不如去看书打游戏。`
    + 多阅读，多思考，多写作才有源源不断的内容可写
+ 心态
    + 阅读量不等于文章质量
    + 内容丰富详实（文章长），是写好一篇文章的必要条件
+ 两种叙事方式
    + `线性叙事，逐步推进`：适用于介绍排查问题的过程、分享设计思路、介绍项目的迭代进展。
    + `结构化叙事，层层展开`：适用于讲规划、做总结、画大图、介绍一整套技术方案。

**反思**

> 看完这篇文章让我有醍醐灌顶的感觉，文章里说的很多坑我都踩过。以前经常有一些写文章的想法，但是又没有足够的内容可写，所以很多文章都是起了个标题，却没有内容可写。以下三点需要特别注意：
> 1. `如果你想写一篇爆款文章，但是又觉得没有内容可写，那就不要勉强了，放下笔，合上电脑，有这个时间不如去看书打游戏。`
> 2. 保持碎片化记录的习惯
> 3. 有了素材之后，平时可以专门练习写作能力，先写一小段话，明确的描述一个观点，然后不断修改
> 4. 多放图


## 2021-4-8

### 1. [美团移动端UI一致性解决方案探索](https://mp.weixin.qq.com/s/uS_wLchAXALEAThmU-vVog)

**概述**

本文主要讲解了美团外卖团队面临的UI一致性问题及其解决方案；sketch插件的实践步骤

**关键词**

`积木Plugin`、`积木Sketch`：同步RD与UE组件

**主要内容**

+ 存在的问题
    + `设计层面`：由于UI缺乏标准化设计规范，在不同App及不同开发语言平台上设计风格不统一，用户体验不一致；设计资源与代码均缺乏统一管理手段，无法实现积累沉淀，无法适应新业务的开发需求。
    + `开发层面`：组件代码实现碎片化，存在多次开发的情况，质量难以保证；各端代码API不统一，维护拓展成本较高，变更主题、适配Dark Mode等需求难以实现。
    + `测试层面`：重复走查，频繁回归，每次发版均需验证组件质量。
    + `产品层面`：版本迭代效率低，版本需求吞吐量低，不具备业务的快速拓展能力。
+ 解决方案
    + `积木工具链`：通过建立包含相同设计元素的统一物料市场，PM通过Axure插件拾取物料市场中的组件产出原型稿；UI/UE通过Sketch插件落地物料市场中的设计规范，产出符合要求的设计稿。未来，希望通过高保真原型输出，可以给中后台项目、非依赖体验项目提供更好的服务体验，赋予产品同学直接向技术侧输出原型稿的能力。
    + `代码组件库（Android、iOS、MRN）`：设计稿中的组件与RD代码仓库中组件一一对应。
    + `文档化说明`：官网详细描述了代码组件库的集成方式、组件的使用方法，降低开发上手难度，只需要理解接口和职责即可进行业务开发。
    + `定制化设计云协作平台`：与美团内部的印迹团队（云协作平台）合作开发，在RD的设计稿中标注了哪些是代码组件库中已有的元素，避免重复开发，同时关联了官网中该组件的使用说明，是代码组件库与官网的纽带。
+ 方案落地举措
    + 项目小组不能脱离日常需求开发工作
    + `优先选择受视觉因素影响较大、投入产出比高的模块场景进行改造`
    + 项目推进由UI同学按版本提出需求，移动端排期并落地实施，由UI统一验收
    + 建立阶段性目标，并完成最近三期工作的具体规划，定期复盘完成情况，保证项目的持续推进
+ 具体措施
    + 搭建合适粒度的组件
        + 控件、组件、业务组件、模板、页面
    + 组件属性可配置
        + 支持局部元素的展示隐藏
        + 支持多种样式
        + 支持业务方配置主题
    + 建立插画库
        + 统一插画风格
    + 使用Iconfont
        + 矢量性、可自由变化大小、自由变换颜色、仅需维护一套字体文件
    + 归档图片问题
        + 解决大量类似图片的问题。`可以通过脚本扫描相似图片，根据图片的特征Hash判断图片的相似度，对于相似度高的图片根据UI的建议，保留一张即可`。
    + 统一动效
    + 统一品牌色与效果色
    + 统一字体与字号
    + 搭建组件应用示例网站
        + 便于组件的查阅与调试

**反思**

> 1. 在我们的项目中同样存在UI一致性问题，但是按照我们团队成员现在人力物力（4人）而言，想要完成类似的巨大工程，几乎是不可能。
> 2. 但是其中也有一些值得我们学习的地方，比如：`搭建合适粒度的组件`、 `使用Iconfont`、 `归档图片问题`。


### 2. [Node.js项目TypeScript改造指南(二)](https://wecteam.io/2019/12/20/Node-js%E9%A1%B9%E7%9B%AETypeScript%E6%94%B9%E9%80%A0%E6%8C%87%E5%8D%97-%E4%BA%8C/)

**概述**

主要描述 any 类型的危害与处理；如何搭建类型系统

**关键词**

`any`

**主要内容**

+ 对any类型的处理
    + 让any可控
        + 用 unknown 作为顶级类型
            + 如果一定要更改类型，先用 unknown 中转一下
        + 类型守护
            + 使用 in 操作符、typeof、instanceof 来收窄类型
        + 类型断言
            + as
    + 尽量不要使用类型断言
        + 可能被断言成一个不正确的类型，导致系统的误判
    + 覆盖第三方库的any
        + 使用继承的方式重写接口，将any给覆盖掉
+ 构建强大的类型系统
    + 问题
        + 存在很多相似的类型
    + 接口继承
        + 定义一个基本类型，其他类型继承这个基本类型并扩充
    + [类型推导](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types)
        + T extends U ? X : Y
        + 结合 keyof、never、in 等特性获得一个类型的变体和衍生类型
    + 可供使用的工具
        + 交叉类型
            + A & B：同时满足A和B
        + 联合类型
            + A | B：满足A或B其中之一即可
        + [索引类型](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)
        + [映射类型](https://www.typescriptlang.org/docs/handbook/advanced-types.html#mapped-types)
        + [条件类型](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#conditional-types)
+ 注意几个特殊的关键词
    + never：表示不可到达。
        1. 一个从来不会有返回值的函数: 函数内含有 while(true){}
        2. 一个总是会抛出错误的函数: function foo() {throw new Error('Empty')}
    + infer
        + ==TODO==
+ 基础库中提供的抽象类型
    + Partial
    + Required
    + Readonly
    + ……
+ 收窄类型
    + ==TODO==

**反思**

> 1. 不要使用any，杜绝any。
> 2. 之前根本没有使用过TS提供的抽象类型，甚至都不知道有这个东西。平常也是简单的定义了一下接口，对于TS一些不常见的用法了解和实践的比较少。以后在使用TS的时候，如果发现某个地方使用TS的现状不太令人满意，那么可以想想有没有更优的实践方法。善用Typescript的类型工具以及内置的抽象类型，需要更深入的研究探索。
> 3. 如果我们把一个类型看做一组规则组成的 Map，key 是属性名，value 是类型，keyof 使我们有了取得所有 key 的能力。
> 4. in 使我们有了对一个索引类型/联合类型遍历、重新设置每个属性的类型的能力。