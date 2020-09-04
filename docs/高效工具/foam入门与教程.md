# foam入门与教程

# 软件分析
推荐程序员、极客、vscode用户使用Foam

* 优点
  * vscode的插件，而且基本功能（双向链接、图谱、markdown）都有

* 缺点(基本上是参考obsidian, obsidian下面不少功能已集成)
  * 对普通用户不友好
  * 没有块引用
  * 不支持插入截图 ( 安装一个插件可以解决)
  * 图谱Graph 不是很好看
  * 没有unmention link (怎么表述来着)
  * 无法设置新建文件的存放地址(obsidian可以)
 
# 相关
- 设置完毕以后，你可以通过在.vscode下的setting.json改变Foam的设置
- 要了解更多有关使用Foam的信息，请阅读
  - [使用技巧Recipes](https://foambubble.github.io/foam/recipes)
  - [foam的官方文档](https://foambubble.github.io/foam/)
  - [foam的中文文档-网友翻译](https://github.com/xiaoland/Foam-Chinese-Document)

# 安装
下面的内容参考[Foam中文文档](https://github.com/xiaoland/Foam-Chinese-Document/blob/master/foam/gettting_started.md)
## 安装Vscode
- vscode下载链接：[Visual Studio Code](https://visual-studio-code.en.softonic.com/)
- 设置vscode的显示语言：进入vscode后，输入`Crtl+Shift+P`(或点击View>Command Palette)进入命令面板，然后输入「configure language」，选择「Configure Display Language」，然后就可以安装中文显示插件啦！

## 安装Foam（Foam是vscode的插件）
- 1、使用foam-template生成一个新的git存储库
  - 如果您已经登录github，那么你就可以点击这个链接直接创建：[Use this template](https://github.com/foambubble/foam-template/generate)
  - 请注意，如果你想保留你自己的构思，请记住把存储库设置为私有
  - 或者你压根不想在github上托管**或者没有github账户**，那么请点击此链接下载Foam模板的zip文件：[Download foam-template's zip file](https://github.com/foambubble/foam-template/archive/master.zip)
- 2、将你的git存储库克隆到本地，然后用vscode打开
  - 在vscode中，选择「File>Open...」来打开你的存储库
- 3、当出现提示安装推荐的插件时，选择[Install All]安装全部，或者点击[Show Recommendations]来选择安装插件

# 快捷键
注意：
* foam的默认配置，注意Mac用户将`Ctrl`改为`Cmd`*

| 功能                  | 快捷键               |
| --------------------- | -------------------- |
| 打开日记              | `Alt + D `           |
| 切换文件              | `Ctrl + P`           |
| 预览markdown-新窗口   | `Ctrl + Shift + V`   |
| 预览markdown-右侧窗口 | `Ctrl + K V`         |
| 打开命令窗口          | `Ctrl + shift + P`   |
| 切换颜色主题          | `ctrl + K, ctrl + T` |
| 返回上一个编辑的位置  | `Alt + <- / ->`      |
| 返回上一个文件        | `Ctrl + P + P`       |

首先`Ctrl + shift + P`打开命令窗口，然后输入下面的命令

| 功能             | 命令                         | 快捷键    |
| ---------------- | ---------------------------- | --------- |
| 打开日记         | Foam: Open Daily Note        | `Alt + D` |
| 打开backlink链接 | Explorer: Focus on Backlinks | 无        |
| 打开图谱         | Show graph                   | 无        |
| 新建笔记         | new note                     | 无        |
| 创建文档目录     | toc / table of content       | 无        |

缺乏快捷键的可以自己绑定：[修改快捷键的方法](https://code.visualstudio.com/docs/getstarted/keybindings)

| Markdown快捷键     | 功能                      |
| ------------------ | ------------------------- |
| `Ctrl + B`         | 加粗                      |
| `Ctrl + I`         | 斜体                      |
| `Ctrl + Shift + ]` | 提升标题层级              |
| `Ctrl + Shift + [` | 降低标题层级              |
| `Ctrl + M `        | 开启数学模式              |
| `Alt + C`          | 标记任务todo为完成/未完成 |
| `Alt + Shift + F`  | 将表格样式规范化/美观化   |

## 插入图片
需要安装插件: markdown image 
window用户:alt + shift + v 粘贴图片,默认保存在`../images/`中

## 插件教程
foam其实是一个插件的集合，要充分使用foam，可以看这些插件的文档
* [markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

推荐插件&教程
* [MPE: markdown-preview-enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)
  * 跟markdown all in one的快捷键 解决方式是`ctrl + k ctrl + s`进入快捷键设置, 搜索`ctrl + shift + v`, 看看跟哪些发生冲突了

# 常见问题
### 修改字体为微软雅黑
  * `ctrl + ,`打开设置，进入`font`设置，改成`"editor.fontFamily": "Consolas, 'Courier New', monospace, '微软雅黑'",`

### 大纲/目录在哪?
1. 侧边栏, 直接打开左侧的outline
2. 在文件中插入目录, 打开命令窗口, `create toc`

### github.io无法访问,如何查看foam的帮助文档
下载https://foambubble.github.io/foam/这个github仓库,用vscode打开, 进入docs文件夹, 然后就可以用foam/双向链接的方式来浏览了

### 从obsidian迁移过来的注意点
1. 文件命名问题, 只能接受全小写的, 以`-`连接的名称, 例如`[[file-format-style]]`
2. 需要保证每个md文件开头都有一个 `# heading` heading的名称可以改

修改默认文件夹
1. dailynote的文件夹
2. 截图的文件夹

### 绑定foam新建笔记的快捷键
open the keybindings.json file from the Command Palette (Ctrl+Shift+P) with the Preferences: Open Keyboard Shortcuts (JSON) command

添加

    { "key": "alt+n", "command":"vscodeMarkdownNotes.newNote"},

然后就可以用`Alt + N`来新建笔记了

### Markdown设置tab为4个空格
在vscode设置为tab为4个空格, 为什么对markdown文件还是不生效呢? 解决方法见
https://www.jianshu.com/p/2ab1ffe53b31

### 新建笔记在一个默认文件夹下?
在setting.json中添加
```json
"vscodeMarkdownNotes.newNoteDirectory": "docs/",
```


# TODO
1. foam的中文支持问题(遇到中文不会智能提示)
2. 新建文件和搜索分开的问题, 在obsidian中是合在一起的, 一般搜索不到的话就创建, vscode是割裂开的
3. 补充上如何用发布foam的笔记


