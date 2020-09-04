# Vscode Python
查官方文档就完事, 看完它, 这里的笔记主要是为了方便记忆(其实感觉不做也可以, 一直看/搜索官方文档, 然后一直用vscode, 熟悉了就好了)
* [官方文档](https://code.visualstudio.com/docs/python/python-tutorial)
  * 例如关于[jupyter notebook](https://code.visualstudio.com/docs/python/jupyter-support)

这里头有太多很好的内容了, 包括python web开发的指引链接


# 基础快捷键
这一篇[python-vscode入门](https://www.jianshu.com/p/cbf500c22154)写得还不错

| 功能                 | 快捷键                                 |
| -------------------- | -------------------------------------- |
| 运行代码             | ctrl + F5                              |
| 调试代码             | F5                                     |
| alt/shift/nlll + F12 | 代码的定义引用, Ctrl+鼠标左键点击函数名 , 也可以ctrl + ]|
| F9                   | 设置一个断点。也可以在行号左边双击设置 |

## 命令
`ctrl + shift + p` 之后输入`python`就有python相关命令的列表了,常用的如下:

| 命令                       | 功能               |
| -------------------------- | ------------------ |
| Python: Start REPL         | 打开一个交互式终端 |
| create jupyter notebook    |
| Python: Select Interpreter | 更换解释器         |

## 插件
| 包/插件         | 功能             |
| --------------- | ---------------- |
| pylint          | 语法提示         |
| flask8          | 静态代码检查工具 |
| autopep8 / yafp | 代码格式化       |

## 运行代码
### 选一个python的解释器

想要在vscode中运行python代码必须要告诉vscode使用哪个解释器才行。

![](https://segmentfault.com/img/bVbc7PV?w=274&h=27)

你可以打开**命令面板**（`Ctrl+Shift+P`）输入`Python: Select Interpreter`然后选择一个解释器。你也可以直接点击上面图中的 **Select Python Environment**来进行选择。

该命令显示的vscode可以自动查找到的可用解释器列表，如果没有看到所需的解释器，点击 **文件 > 首选项 > 设置** ， 设置`python.pythonPath`的值来选择你想要使用的解释器。

### 运行文件

最简单的方法是点击**右键选择在终端**运行。

![](https://segmentfault.com/img/bVbc795?w=882&h=614)

在vscode中还有其他两种运行python的方法：

* 选中一行，按 `shift+enter`可以直接运行这一行代码。
*   在命令面板使用 `Python: Start REPL`命令可以打开python的解释器。


## Debug
左侧栏有Debug,在Debug配置Python后
然后Python插件会自动创建包含一系列配置的`launch.json`文件，可以在下拉列表里面选择，现在选择Python: Current File即可。
为了让调试器在自动在程序开始时停在第一行，添加一条配置`stopOnEntry": true`，然后保存。
* 运行（F5） continue
* 跳过（F10）step over
* 跳入（F11）step into 
* 跳出（Shift+F11） step out
* 重新开始（Ctrl+Shift+F5）
* 停止（Shift+F5）



## 补充说明
code navigation（代码跳转） 和auto-completion（自动补全）

## anaconda搭建环境
参考:https://www.jianshu.com/p/f10fb1a4cc87

选择Extensions----->Python Configuration，如图：
然后点Edit in settings.json
把原本的python路径修改为你需要的子环境python路径即可。
"python.pythonPath": "D:\\Anaconda3\\envs\\test\\python.exe"


# 基本功能
## linter 和 formatter
linter: 代码错误检查通常用pep8、pylint和flake8，
formatter: 自动格式化代码通常用autopep8、yapf、black

要使用flake8或要想flake8等工具起作用，前提是必须把settings.json文件中的"python.linting.enabled"值设为“true”，否则即使安装了这些工具，也起不到代码的错误提醒。

vscode默认用pylinter, 官方文档上有[详细的说明](https://code.visualstudio.com/docs/python/linting#_pylint), 默认是不开启Convention和Refactor的提示的, 想要"磨"一下自己, 可以把这两个开起来, 在setting.json中改成
```
"python.linting.pylintArgs": ["--enable=F,E,W,C,R"],
```
也可以用.pylintrc的文件做进一步设置(这里略过不讲)

## pip conda 基本设置
pip更新镜像源
```
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```
conda更新镜像源, 按照这上面的教程
https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/

不过清华上面讲的不够详细, 如果遇到问题, 可以参考这篇: https://www.jianshu.com/p/042fd657e2d4

命令 conda info / conda config --show 查看配置