# vscode
- [vscode技巧之"面包屑":代码导航栏 - jackiexiao的文章 - 知乎](https://zhuanlan.zhihu.com/p/388281604)

## 层级折叠

ctrl k / ctrl [0-9] 即可


## 面包屑
- 面包屑在什么场景下有用
    - 浏览别人仓库代码时
    - 文档很长时（例如 在 markdown 中充当 目录功能，当然你可以直接搜索，但有时你记不住所有的标题名字）
- vscode开启面包屑
    - 搜索:  breadcrumbs.enabled  开启即可
- 官方文档（包含了详细完整的介绍、相关配置，推荐）
    - [](https://code.visualstudio.com/docs/editor/editingevolved#_breadcrumbs)
- 面包屑相关快捷键
    - Ctrl+shift+. 或者 ctrl shif + ; 
    - 两个快捷键效果有区别，一个是打开当前，一个是在面包屑的树层级上跳转
    - 基本操作
        - ctrl n / p 或者 上下箭头 进行切换
        - esc 退出面包屑
        - 可以直接输入英文字母进行"高亮搜索"，然后按 ctrl n/ p 或上下键 在匹配项中跳转
        - 左右键可以在层级中跳转（很遗憾，好像没有 对应的 ctrl +xx 系列键...
        - space 可以展开 层级
        - enter 跳转到对应的面包屑
    - 所有默认的快捷键可以通过 ctrl k + ctrl s ，然后在快捷键页面中 搜索: breadcrumbs 来获取!
        - ctrl + enter 在新的页面中打开
        - ctrl left 和 right 可以左右跳转（且无视当前层级，默认的 left 和 right 限制在当前文件）
    - 如果你想替换成 vim 的导航方式，可以添加如下快捷键
        - 来源: [](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#58930%20·%20microsoft/vscode%20·%20GitHub](https://github.com/Microsoft/vscode/issues/58930#issuecomment-422671191)
        - ctrl p 搜索 key binding
        - 或者 ctrl shift p 搜索 shortcut（用户部分）
```json
    {
        "key": "ctrl+h",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+j",
        "command": "list.focusDown",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+k",
        "command": "list.focusUp",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "ctrl+l",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    }
```
## easy snippet
- [知乎文章: Easy Snippet - vscode最好的snippet代码片段管理器](https://zhuanlan.zhihu.com/p/386347236)
- [easy snippet ](https://github.com/inu1255/vscode-easy-snippet)
    - 创建snippet的快捷键是: `ctrl k + ctrl shift s`
    - 使用命令 `snippet search` 可以快速搜索并修改 snippet
    - 注意，必须`ctrl + S`保存才能生效，而不是vim中的`:w`保存
    - 2022-1-26: 在markdown中snippet失效，不知道为什么...
## 其他
- vim 出现bug 无法撤销怎么办?→改用 vscode 的 Edit → undo
- 新终端快捷键 （ 1.56 版本起）
    - ctrl shift 5 切分窗口
    - alt 上下键 切换 terminal Pane
    - Move to previous terminal - Ctrl+PageUp (macOS Cmd+Shift+])
    - Move to next terminal - Ctrl+PageDown (macOS Cmd+shift+[)
    - Focus terminal tabs view - Ctrl+Shift+\ (macOS Cmd+Shift+\) - Terminal tabs preview
- 刷新当前文件（例如你在终端中修改了） ?→>revert file
- ctrl +T 速度太慢的问题
    - [ python - Visual Studio Code Intellisense is very slow - Is there anything I can do? - Stack Overflow](https://stackoverflow.com/questions/51874486/visual-studio-code-intellisense-is-very-slow-is-there-anything-i-can-do)
    - [https://github.com/microsoft/vscode-cpptools/issues/2751](https://github.com/microsoft/vscode-cpptools/issues/2751)
- tmux 使用 code -r filename 打开文件的问题
    - [ code command not working in tmux in remote terminal · Issue #2763 · microsoft/vscode-remote-release · GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763)
    - 里头有个很麻烦的解决方案，我没有去尝试...
        - [](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#2763%20·%20microsoft/vscode-remote-release%20·%20GitHub](https://github.com/microsoft/vscode-remote-release/issues/2763#issuecomment-642979476)
    - 还是采用上述的方法解决了
        - 2021-6-22 : 但是使用 一段时间之后，出现了错误: Unable to connect to VS Code server.Error in request，不清楚为什么
            - 重新开一个终端就可以了>。
            - 这个方法时而行，时而不行，不清楚为什么
            - 昨天尝试还可以的，今天就不行了
            - hmmm 把所有 tmux 关闭掉 重新开就可以。。。
    - 临时解决方法: 如无必要，不用tmux ...
- TODO
    - 多个侧边栏问题，不知道为什么vscode不支持...见：https://github.com/Microsoft/vscode/issues/26777
    - vscode 不支持音频很蛋疼，例如无法播放远程文件夹的音频，无法在jupyter notebook中播放音频....
- 字体问题
    - font famile
        - 原来的
```
Consolas, 'Courier New', monospace, 'Microsoft Yahei',  '微软雅黑',
```
cosolas 这个时候空格跟字母的大小一致 （推荐这个）
'微软雅黑' 这个空格只有半个字符
'Courier New' 这个字体很细
- theme
    - ctrl shift P 选择 theme
    - 插件 one monokai theme ，选择这个，在插件主页有 "set color theme"
- faq
    - open file in new tab /window 在新窗口中打开
        - user setting中，加入
```json
"workbench.editor.enablePreview": false,
```
- 加速搜索
    - 忽略搜索文件夹
        - 在设置中搜索"search"，找到 ignore_pattern 添加就可以 [参考](https://stackoverflow.com/questions/29971600/choose-folders-to-be-ignored-during-search-in-vs-code)
- 重新加载窗口 
```
Developer: Reload Window
```
- python debug 当前 module launch.json 的配置
    - 需要一个插件: commandvariable
```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
    
        {
          "name": "Python: Module CmdVar",
          "type": "python",
          "request": "launch",
          "console": "integratedTerminal",
          "module": "${command:extension.commandvariable.file.relativeDirDots}.${fileBasenameNoExtension}",
        },
    ]
}
```
- vscode setting的变量
    - 参考：https://code.visualstudio.com/docs/editor/variables-reference
- 提高vscode速度
    - 忽略一些文件夹（以便加快搜索）
    - 还可以增加 search exclude ==TODO==
```javascript
setting.json
    "files.exclude": {
        "**/.git": true,         // this is a default value
        "**/.DS_Store": true,    // this is a default value
        "**/data": true,    // this is a default value
        
        "**/node_modules": true, // this excludes all folders 
            // named "node_modules" from 
            // the explore tree
            
        // alternative version
        "node_modules": true    // this excludes the folder 
            // only from the root of
            // your workspace 
    } 
```
# shortcut快捷键
查看全部快捷键(看这个最好):https―/code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
  - 也可以 Ctrl K + Ctrl R 打开这个快捷键列表
设置/查找快捷键的方法（需要掌握）: 可以在vscode 中 按快捷键 ctrl + K ctrl + S 打开快捷键列表

切换到文件浏览器 ?→ctrl shift E
切换到debug ?→ctrl shift D
切换到Problems ?→ctrl shift M

| 功能                         | 快捷键                                      |
| ---------------------------- | ------------------------------------------- |
| 打开快捷键设置                     | Ctrl+k  + ctrl + s                                    |
| 打开终端                     | Ctrl+\`                                     |
| 删除行                       | Ctrl+Shift+K                                |
| 在当前行下插入新的一行       | Ctrl+Enter                                  |
| 旁边窗口的快捷键             |
| Debug窗口                    | Ctrl shift+d                                |
| 多行编辑A方案                | Alt+shift+鼠标左键 或者 鼠标中键/滚轮键按压 |
| 终端切换                     | Ctrl+\`                                      |
| 窗口切换                     | Ctrl+1 2                                    |
| 文件切换                     | Alt+1 2                                     |
| 进入编辑器页面(toggle panel) | Ctrl+J                                      |
| 进入终端(toggle terminal)    | Ctrl+\`                                      |
| 进入语法错误提示页面         | Ctrl+shift+M                                |
| 跳转到下一个错误的地方       | F8                                          |
| 跳转到定义                   | Ctrl+Click                                  |
| 在侧边文件中显示跳转的定义   | Ctrl+Alt+Click.                             |
| 回到最左边的窗口             | Ctrl+shift+E 之类的 或者 Ctrl+0             |
ctrl shift alt A ?→add and commit all files (跟滴答清单冲突，所以多加了一个 alt 键）

F12

| 英文                        | 功能             | 快捷键                                                          |
| --------------------------- | ---------------- | --------------------------------------------------------------- |
| Go to Definition            | 到定义           | F12 或者 ctrl+]                                                 |
| Go to Declaration           | 到声明           | 无                                                              |
| Go to Type Definition       | 到类型定义       | 无                                                              |
| Go to implementations       | 到实现           | Ctrl+F12                                                        |
| Go to References            | 到引用/提及/参考 | **shift+F12** 会出现一个小窗口供你在所有引用中选择, 或者 ctrl+] |
| Peek Definition             | 瞄一眼定义       | Alt+F12                                                         |
| open definition to the side | 在一边打开定义   | Ctrl+k F12                                                      |


Ctrl+P
```javascript
? 相当于帮助, 提示你可以使用什么命令
## 跳转到某个符号/标题/变量 
```
- 直接enter: 在原窗口中打开
- Ctrl+enter: 在侧边窗口中打开
- vscode cheat sheet 上缺失的快捷键
| 功能                | 命令               |
| ------------------- | ------------------ |
| 面包屑交互          | Ctrl+shift+. 或者 ctrl shif + ; |
| breadcrumb 左右层级 | Ctrl+左右箭头      |

## 常用命令
| 功能                 | 命令                                               |
| -------------------- | -------------------------------------------------- |
| 打开快捷键           | Preferences: Open Keyboard Shortcuts (可以加 json) |
| 在文件浏览器新建文件 | File: New File                                     |

## 插件
| 名称                      | 功能                                                            |
| ------------------------- | --------------------------------------------------------------- |
| Remote-SSH                | linux远程编程                                                   |
| gitlens                   | git 管理|
| Git History               | 用来查看git log或则一个文件的git历史，比较不同的分支，commits。 |
| Code Runner               | 支持多种语言的代码的立即执行。                                  |
| Visual Studio IntelliCode | 自动代码不全, 类似另外一个付费的插件TabNine                     |
| Path Intellisense         | 自动路径补全                                                    |
| Image Preview             | 鼠标悬浮在链接或者装订线(gutter)左边可以预览到图片              |
| better comments           | 使注释有人性化的高亮显示 * ! TODO @ //  都会有不同的颜色，可以用 #+符号 或者行开头使用            |
| Open in application | 右键在默认应用中打开，然而不能ctrl + click打开                     |
| draw.io | vscode里画流程图
| code runner | 一键运行代码`Ctrl+Alt+N` 终止`Ctrl+Alt+M`
| Excel Viewer  | 用 更好的格式 看表格 csv 文件
| File Utils | 提供命令行(以File: 开头)的方式来快速移动，删除，重命名文件 |
### search
需求: 
1. 类似 grep -r / remnote search 的整个仓库内容(而不是文件名) 模糊查找插件
2. vscode 自带的 `ctrl shift F`缺点
    1. 只能 alt enter 搜索，而不能在下拉框中搜索
    2. 似乎没办法 fuzzy search，只能正则表达式匹配...  `get.{0,8}put`

目前的解决方案
1. 文档内搜索
    1. 全文搜索 
        1. `fuzzy search `
        2. vim
    2. 标题搜索 `Ctrl shift O`
2. 整个仓库搜索
    1. 全文搜索 
        1. ` ctrl shift F` + 正则表达式
        2. ` fzf search`
    2. 标题搜索 `ctrl + T`


2022-1-26: 
- 花了2小时... 看了一圈，很有可能要自己写插件，可以参考 fuzzy go to line 的代码
- 太难了，我放弃了..

尝试的插件列表

- fzf fuzzy quick open GOOD 唯一贴合自己需求的，但是用起来还是不太爽
    - `fzf: add workspace` 第一次使用可能需要设置
    - `fzf: search using fzf and rg`
    - 依赖于 fzf 和 rg，不过我自己测试，其实就是唤起终端进行搜索，但搜索结果**有时无法跳转**回 vscode 编辑页面，不知道为什么...
- jaco / fuzzy search : `search: Fuzzy outline` GOOD 还能用的...
    - 可以在当前文档中搜索，并将结果实时展示出来(而不需要像vim那样一个个跳转) 还是挺实用的，可惜没有真的做到"fuzzy"，也没有做到在整个仓库中搜索|
- fuzzy go to line: https://github.com/kylqin/vscode-fuzzy-goto-line
    - 类似上面的插件，也只能在当前文件中搜索，而且也没有真正 fuzzy
- search everywhere
    - 每次重启vscode的时候，需要 scan file ，花了我28秒(大量markdown文件)，而且按 `ctrl alt p`的时候非常卡
- findItfaster
    - 可惜只能用于终端... 而且需要安装 fzf ，有其他很多类似的插件，有可能只能在linux上用，window用不了，或者安装比较麻烦
- Incremental Grep
    - 有bug，使用的时候报错 `fatal: ambiguous argument '': unknown revision or path no int the working tree`
- vscode-git-grep
    - 优点: 目前唯一一个可以全文搜索的，并且在下拉框中显示结果，但其实还不如 `ctrl shift F` 里头的正则表达式..
    - 缺点: 只能在git中检索, 没有即时搜索，每次都需要先确认
    - bug: 不支持正则表达式
- [ripgrep](rg) (不是一个插件) ，只是很多插件中提到要先下载这个...
    - `rg "get.{0,8}put"`
    
有没有可能在 vscode-neovim 中安装 fzf 的插件呢? 貌似不行...

搜索关键词 - fuzzy search grep fzf

### neovim
- 复制到剪贴板
    - 将下面的内容复制到  C:\Users\USERNAME\AppData\Local\nvim\init.vim  (这个AppData可能是隐藏文件夹）
    - 最后重启 vscode
```python
set clipboard+=unnamedplus
```
- 路过折叠块时不展开折叠
```python
nmap j gj
nmap k gk
```
# FAQ
- 指定区域 fold
    - Python #region or **# region **#endregion or **# endregion**
    - To fold and unfold only the regions defined by markers use:
        - Fold Marker Regions (Ctrl+K Ctrl+8) folds all marker regions.
        - Unfold Marker Regions (Ctrl+K Ctrl+9) unfolds all marker regions
    - " [https://diigo.com/0jnxiz](https://diigo.com/0jnxiz)
- 在新标签页中打开文件
    - 单击文件名是预览(这时会替换当前的页面)
    - 双击文件名则是在新标签页中打开
    - 如果不想要这个功能的话:
    - 给你配置settings.json里加一条：
    - "workbench.editor.enablePreview": false,
    - "workbench.editor.enablePreviewFromQuickOpen": false,
- 打开setting.json
    - 命令行里直接输入 Open workspace/ setting(json) /user settting
- vscode各种bug?
    - 1. vscode 加载插件需要时间
    - 2. vscode更改设置需要时间(比如切换python的interpreter)
    - 3. 有时候重启vscode就好了
- winddow下 vscode cmd改为cmder
    - [ Seamless VS Code Integration · cmderdev/cmder Wiki · GitHub](https://github.com/cmderdev/cmder/wiki/Seamless-VS-Code-Integration)
- Ctrl + space 解决冲突
    - 通常自动补全都是自动生成的，不需要按Ctrl space，不过ctrl space 会被window和搜狗占用
    - 
    - 2个方案
    - 1. 修改window对ctrl space 的占用：设置-高级键盘设置-输入语言热键-把Ctrl+space改成其他的，之后重启电脑
    - 2. ctrl +k ctrl +s 修改快捷键为 ` alt + /`
- 一个shortcut执行2个指令的方法
    - [https://stackoverflow.com/questions/49611435/visual-studio-code-keybindings-running-two-or-more-commands-with-one-shortcut](https://stackoverflow.com/questions/49611435/visual-studio-code-keybindings-running-two-or-more-commands-with-one-shortcut)
- 一个shortcut执行正操作和反操作
    - 1. 法1：设定不同的“when”，比如toggle pane
- vscode 无法连接远程服务器
    - 2 关闭 服务器上 所有 vscode 的进程 （优先这个，不行的话，就下面的步骤）
    - 1 删除 服务器上的 .vscode-server 重新连接（会重装）
- drag and drop 不work（服务器拉到本地的操作不成功）
    - 确实是有bug...而且vscode还没解决
    - [ Can't drag files from a remote vscode window to a local window · Issue #93599 · microsoft/vscode · GitHub](https://github.com/microsoft/vscode/issues/93599)
    - 不过你可以用 download 来解决这个问题
- Missing or invalid credentials.
    - Error: connect ECONNREFUSED /run/user/2078/vscode-git-29959dbc73.sock
    - 方法1: 使用 xshell 连接
    - 方法2: **推荐**
        - You are trying to use git from a terminal in vscode. The problem comes from the authentication handler of vscode. To solve the problem:
            - Open vscode File > Preferences > Settings
            - Search for git.terminalAuthentication
            - Uncheck the option
        - You have to re-open the terminal to make it work.
# 其他
# markdown
- 快捷键（自己的设置）
        - ctrl shift 6 ?→toggle code block
        - ctrl shift 2/3/4 ?→toggle header
        - ctrl shift s ?→checkboxes
        - ctrl shift 7/8 ?→number / bullet list/points
- [](https://code.visualstudio.com/docs/languages/markdown#_extending-the-markdown-preview)

## todo 功能
我用alt + enter 来toggle checkbox (create/delete)
用 alt + c 来 toggle checkbox done (done/undo)

插件： markdown checkbox + 自定义快捷键

快捷键 oem_3是什么
中文键盘下就是符号：`， 在Esc键的下面。类似的 括号，冒号之类是oem_数字键

The OEM keys are the keys that vary with local keyboards. Where the US keyboard has brackets and braces, german keyboards have umlauts.

They are called "OEM" because the Original Equipment Manufacturer (of the keyboard) was responsible for defining their functionality.

测试更新