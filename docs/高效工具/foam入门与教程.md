# foam入门与教程

foam是什么？

什么是双向链接？
我的理解：通过点击 `[[文件名]]` 可以跳转到相应的文件（相当于智能的超链接），而且还可以查到谁（哪个文件）链接了这个文件

- 要了解更多有关使用Foam的信息，请阅读
  - [英文：foam的官方文档](https://foambubble.github.io/foam/)
  - [英文：使用技巧Recipes](https://foambubble.github.io/foam/recipes)


## 安装
### 安装Vscode

- vscode下载链接：[Visual Studio Code](https://visual-studio-code.en.softonic.com/)
- 设置vscode的显示语言：进入vscode后，输入`Crtl+Shift+P`(或点击View>Command Palette)进入命令面板，然后输入「configure language」，选择「Configure Display Language」，然后就可以安装中文显示插件啦！

### 安装Foam（Foam是vscode的插件）

1、使用foam-template生成一个新的git存储库
  - 如果您已经登录github，那么你就可以点击这个链接直接创建：[Use this template](https://github.com/foambubble/foam-template/generate)
  - 请注意，如果你想保留你自己的构思，请记住把存储库设置为私有
  - 或者你压根不想在github上托管--或者没有github账户--，那么请点击此链接下载Foam模板的zip文件：[Download foam-template's zip file](https://github.com/foambubble/foam-template/archive/master.zip)

2、将你的git存储库克隆到本地，然后用vscode打开 在vscode中，选择「File>Open...」来打开你的存储库

3、当出现提示安装推荐的插件时，选择[Install All]安装全部，或者点击[Show Recommendations]来选择安装插件

## 快捷键&命令

| 功能                         | 快捷键                           |
| ---------------------------- | -------------------------------- |
| 打开日记                     | `Alt + D `                       |
| 在侧边栏打开页面              | `Ctrl + Enter `                       |
| 切换文件                     | `Ctrl + P`                       |
| 跳转到标题（当前文件的标题） | `Ctrl + Shift + O`               |
| 跳转到标题（工作区所有文件） | `Ctrl + T`                       |
| 预览markdown-新窗口          | `Ctrl + Shift + V`               |
| 预览markdown-右侧窗口        | `Ctrl + K V`                     |
| 打开命令窗口                 | `Ctrl + shift + P`               |
| 切换颜色主题                 | `ctrl + K, ctrl + T`             |
| 返回上一个编辑的位置         | `Alt + <- / ->`                  |
| 返回上一个文件               | `Ctrl + P + P` 或者 `Ctrl + Tab` |
| 看一眼链接的内容 | `Alt + F12` ，退出预览按`Esc`|
| 跳转到链接 | `F12` 或者 ctrl +点击 |

| Markdown快捷键     | 功能                      |
| ------------------ | ------------------------- |
| `Alt + Enter`         | 变成 - [ ] 代办事项 |
| `Ctrl + B`         | 加粗                      |
| `Ctrl + I`         | 斜体                      |
| `Ctrl + Shift + ]` | 提升标题层级 TODO:跟vscode折叠冲突  |
| `Ctrl + Shift + [` | 降低标题层级  TODO:跟vscode折叠冲突 |
| `Ctrl + M `        | 开启数学模式              |
| `Alt + C`          | 标记任务todo为完成/未完成 |
| `Alt + Shift + F`  | 将表格样式规范化/美观化   |

### 创建实用快捷键

我们还可以给vscode添加一些很实用的快捷键，在`keybindings.json`文件里头添加配置，具体如下

| 功能                       | 快捷键            | 需要的插件        | 配置                                                                                     |
| -------------------------- | ----------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| 新建markdown文件           | `Alt + N`         | MarkdownNotes     | { "key": "alt+n", "command": "vscodeMarkdownNotes.newNote" },                            |
| 标记任务完成并附带完成时间 | `Alt + C`         | markdown checkbox | { "key": "alt+c", "command": "markdown-checkbox.markCheckbox", "when": "editorTextFocus" |
| 插入图片                   | `Alt + Shift + V` | markdown image    | 安装插件即可，图片默认保存在`../images/`中                                               |


[修改、自定义快捷键的方法](https://code.visualstudio.com/docs/getstarted/keybindings)

### 常用命令
首先`Ctrl + shift + P`打开命令窗口，然后输入下面的命令

| 功能             | 命令                         | 快捷键    |
| ---------------- | ---------------------------- | --------- |
| 打开随机笔记 | Foam: Open Random Note | |
| 打开日记         | Foam: Open Daily Note        | 无 |
| 打开backlink链接 | Explorer: Focus on Backlinks | 无        |
| 打开图谱         | Foam : Show graph                   | 无        |
| 新建笔记         | Foam : Create new note                     | 无        |
| 新建笔记         | Foam : Create new note from template | 无        |
| 创建文档目录     | toc / table of content       | 无        |



## 使用技巧
1. 关键词尽可能放在标题之中（## xx关键词xx）
    > 因为通过`Ctrl + T`可以在所有文件中搜索标题并且跳转，如果使用`Ctrl + Shift + F`虽然也可以搜索到，但次相关内容会多很多，`Ctrl+P`只搜索文件名，就比较局限，如果一个文件很大，在这个文件里头跳转标题，就可以`Ctrl + Shift + O`，相当于只在当前文件进行`Ctrl+T`的搜索
2. 删除当前文件
3. {
  "key": "shift+delete",
  "command": "deleteFile",
  "when": "explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
}


## 插件
### 必须安装的插件
见foam帮助文档

### 推荐安装的插件
- todo highlight ： 这样就可以做到对某些文本进行高亮啦
- image preview：鼠标悬停在图片链接上的时候可以看到图片！
- markdown image ：以便支持在markdown中快速插入图片并放到指定的位置
- markdown checkbox： 管理你的todo
- Markdown Shortcuts：有许多实用的markdown快捷键
- material theme：vscode样式主题，能让你在编辑文件的时候有漂亮的样式，部分解决所见即所得的需求，我用的是这个主题包里的Monokai dimmed
- markdown pdf ： markdown转pdf 
- vscode-pdf ：vscode中阅读pdf ，不过在这里头，ctrl + P 快捷键会失效，想要使用正常的vscode快捷键，ctrl + W关闭pdf或者Ctrl+tab切换到其他文件先

### 可以尝试的插件
- Markdown Theme Kit：markdown的颜色主题
- Markdown Extended： 拓展了很多功能，我比较喜欢里头的mkdocs的渲染

## 常见问题
### 修改字体为微软雅黑
  - `ctrl + ,`打开设置，进入`font`设置，改成`"editor.fontFamily": "Consolas, 'Courier New', monospace, '微软雅黑'",`

### 大纲/目录在哪?
1. 侧边栏, 直接打开左侧的outline
2. 在文件中插入目录, 打开命令窗口, `create toc`

1. 文件命名问题, 只能接受全小写的, 以`-`连接的名称, 例如`[[file-format-style]]`
2. 需要保证每个md文件开头都有一个 `## heading` heading的名称可以改

修改默认文件夹
1. dailynote的文件夹
2. 截图的文件夹

### Markdown设置tab为4个空格
在vscode设置为tab为4个空格, 为什么对markdown文件还是不生效呢? 解决方法见
https://www.jianshu.com/p/2ab1ffe53b31

### 新建笔记在一个默认文件夹下?
在setting.json中添加
```json
"vscodeMarkdownNotes.newNoteDirectory": "docs/",
```

### 将笔记分享到github/gitee page上
1. 使用mkdocs-material（推荐）
教程：https://github.com/jackiexiao/foam-mkdocs-template

2. 使用官方的模板
https://github.com/foambubble/foam-template

### 插入图片?
安装插件 markdown image，然后使用快捷键  `alt shift v` 插入图片，图片默认保存在`../images/`中

- 任意拖拽窗口
- 支持tag（vscode中有markdown-tags插件，不过我没用过）
- 支持高级的[[]]格式
- 支持publish，云同步（付费）

然而对vscode是真爱，所以主力还是vscode
