# halo博客浅尝
[[1panel]]

## 案例
中国领先的开源软件公司FIT2CLOUD飞致云宣布，正式将原有基于WordPress构建的技术博客站点迁移至基于开源建站工具Halo构建的新站点 https://blog.fit2cloud.com
https://juejin.cn/post/7213636024102404157

这个人的博客
https://ameow.xyz/
## 不建议使用 & 缺点

- bug 很多....  
	- 比如一开始选择英文, 结果页面是中英文混杂, 还必须登出之后才能修改语言.... 
	- 编辑器里头不能全选..
	- 官方文档 https://docs.halo.run 的搜索功能....竟然是不能用的...
	- halo 论坛无法注册
- 无法接入评论自动审核机制...
- 官方theme 代码的渲染 样式不好看>..
- 默认竟然不支持 markdown... 用了插件之后再用原来的编辑器发布会有报错
- 其他网友说自己为什么放弃Halo
- 纵使Halo在使用上很棒，响应速度方面也比Wordpress要快上不少，但由于Halo是基于java开发，在资源占用方面也有着较高需求，Java+mysql动辄800M的内存占用使得我有事没事就要去留意负载。
- 而且Halo后台还有很多细节需要优化，例如默认文章以发布时间排序、批量修改文章属性、标签等等，我已经对这些我认为的不足之处从论坛提交了反馈，目前正等待开发组回复。
- 官方自己的文档网站为啥不用 halo 搞
- 模板太少

## 优点

集成了邮件通知, 有用户评论可以邮件通知自己
官方主题可以填入备案号
多用户管理系统

### 对比 wordpress

性能表现更好, 响应更快 (毕竟 java vs php)；
界面简洁直观；
主题、插件平均质量较高；
安装、配置方便。

## faq

### 编辑器支持markdown吗？
见：
https://bbs.halo.run/d/4066-%E7%BC%96%E8%BE%91%E5%99%A8%E7%9A%84%E4%B8%80%E4%BA%9B%E4%BD%BF%E7%94%A8%E4%BD%93%E9%AA%8C

默认编辑器仅仅只是支持 Markdown 的部分语法快捷键，并不是完整支持 Markdown。

而且复制 markdown 直接粘贴到 halo 编辑器也无法正确渲染， 可以使用 ByteMD / Stack Edit 等插件

### halo / 1 panel 的初始化设置

教程: https://www.bilibili.com/video/BV1rY411z78k/

比如域名 jackiexiao.com 设置指向 halo
然后 1panel 也要创建 jackiexiao.com 指向 halo

然后.... 理论上这个时候你还没开启 https 所以, https://jackiexiao.com 是无法访问的, 得 http

### 备案
官方主题 theme 里面有备案填写的栏目

### 邮件设置发送

mailto:jackie.xiao@outlook.com
```
<a href="mailto:xx@gmail.com">写邮件给 xx@gmail.com</a>
```

### 评论问题

似乎无法接入 腾讯云的 评论审核?

现在已经实现了根据 IP 地址 限制评论的功能


## theme

### Fluid theme
我推荐使用这个，好看，简洁

```
<a href="https://www.halo.run" target="_blank" rel="nofollow noopener"><span>Halo</span></a><i class="iconfont icon-love"></i><a href="https://github.com/chengzhongxue/halo-theme-fluid" target="_blank" rel="nofollow noopener"><span>Fluid</span></a>
```

