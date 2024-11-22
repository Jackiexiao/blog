---
excalidraw-plugin: parsed
aliases:
  - 内网穿透
---
# 1panel
[[halo博客浅尝]]

## tldr
有用! 管理linux 服务器方便了, 还有很多 docker image 的应用市场, 相见恨晚

### tutorial
非常建议把它的官方视频教程完整看一遍
https://www.bilibili.com/video/BV1AP411Z7oK/


### 有用的工具
### **[Uptime Kuma](https://zhida.zhihu.com/search?content_id=693592726&content_type=Answer&match_order=1&q=Uptime+Kuma&zhida_source=entity)**

定期发送请求来检查服务器的可用性，并记录响应时间和状态，平时用来检测接口或者站点。

### [Jellyfin](https://zhida.zhihu.com/search?content_id=649456865&content_type=Answer&match_order=1&q=Jellyfin&zhida_source=entity)

[Docker Hub](https://link.zhihu.com/?target=https%3A//registry.hub.docker.com/r/jellyfin/jellyfin)

Pulls **100M+**

一款强大且 **免费** 的多媒体影音管理系统，用于管理与播放各种媒体和流媒体，并提供多平台多用户的访问播放服务。


### Glitchtip

Glitchtip 是 Sentry 的替代品，用于跟踪代码中的


### alist
alist是一款轻量级的文件列表和分享服务，它可以帮助用户快速搭建一个文件分享[服务器](https://www.smzdm.com/fenlei/fuwuqi/)。alist支持多种存储方式，如阿里云盘、夸克网盘、本地[硬盘](https://www.smzdm.com/fenlei/yingpan/)等，方便用户在不同场景下使用。通过alist，用户可以方便地管理和分享自己的文件，同时支持在线预览、下载等功能。

* 一个网页管理多个云网盘或者 NAS （不用每个网盘都安装一个客户端...）
* 可以在线播放视频 （或者是用本地视频播放软件 通过 webdav 协议播放 alist 视频）
* 可以分享文件给别人下载（对方不需要安装网盘就能下载）
* 可以白嫖别人存好的资源[Doge] ，在这里： https://www.bilibili.com/video/BV1JG4y1U72W

### ChatGPT-Next-Web
GitHub Docker Hub Pulls 500k+ 私人 ChatGPT 网页应用，支持 GPT3, GPT4 & Gemini Pro 模型。

## 记录

### jhome-4060ti
记得这个始终需要 sudo 命令运行，否则会报错

http://127.0.0.1:31236/1panel

常见问题
- 找不到docker
	- 需要启动 window 的 docker，而且 `sudo 1pctl restart` 来确保 1panel 正确找到 window 的 docker

```
[1Panel Log]: 外网地址: http://223.73.3.179:31236/1panel
[1Panel Log]: 内网地址: http://192.168.3.55:31236/1panel
> 实际上需要通过这个访问 http://127.0.0.1:31236/1panel

[1Panel Log]: 面板用户: jackie
[1Panel Log]: 面板密码: Jackie01,
[1Panel Log]:
[1Panel Log]: 项目官网: https://1panel.cn
[1Panel Log]: 项目文档: https://1panel.cn/docs
[1Panel Log]: 代码仓库: https://github.com/1Panel-dev/1Panel
[1Panel Log]:
[1Panel Log]: 如果使用的是云服务器，请至安全组开放 31236 端口
```

## faq

### wsl2 设置 network = host 无法通过 127.0.0.1 来访问
参考[[wsl#通过 --network=host 无法在 127.0.0.1 访问 docker port]]

### wls2 装 1panel 的一些坑...
博客Halo 需要通过 localhost:8090 来访问, 用户名 jackie 密码 Jackie01,

### docker 镜像访问超时
参考这个设置一个 docker 镜像代理
https://1panel.cn/docs/user_manual/containers/setting/

### frp 内网穿透

> 这破玩意.........  直接用 https://gofrp.org/zh-cn/docs/setup/ 安装就好了！！！！！！ 用 1panel 多此一举，还无法看到原来的文档，导致出错...

1panel 官方教程（但不适合 wsl2 系统，有很多坑）
https://www.bilibili.com/video/BV1bA4m1N7Zq/

https://www.bilibili.com/video/BV1dr4y147aq

frp 官方中文文档： https://github.com/fatedier/frp/blob/dev/README_zh.md

- 使用远程桌面连接window电脑
- ssh 内网主机
- 家里电脑当做游戏服务器
- 图形工作站放在实验室，处于教育网内，无公网ip；在寝室的mac想要SSH链接到工作站跑深度学习
- 为什么使用 frp 而不是 autossh ？ 后者也可以，但是不太稳定，[参考](https://wujingchao.github.io/2020/02/22/penetrate/)


#### 2024-08-10
配置记录
jblog 安装 frtp 服务端, 需要安全组放通
jhome 安装 frtp 客户端，然后填入上面的ip和端口
两个的密码都是： 用户 admin / 密码 Jackie01 /  密钥token123456

不知道为什么无法通过 127.0.0.1:7400 来访问 frp 客户端的服务...



### 数据地址
```
/opt/1panel/apps/
```

### 如何安装一个无需密码访问的思源笔记
首先使用 1panel 正常安装 思源笔记

然后点击 应用商店-已安装-siyuan -参数， acc

[我该如何修改访问授权码？](http://150.158.107.114:37443/apps/all#%E6%88%91%E8%AF%A5%E5%A6%82%E4%BD%95%E4%BF%AE%E6%94%B9%E8%AE%BF%E9%97%AE%E6%8E%88%E6%9D%83%E7%A0%81%EF%BC%9F)
请您在【应用商店】内【已安装】选项卡中找到思源笔记，然后点击参数，选择编辑且修改访问授权码，保存即可。

而且如果授权码为空（比如共享文档无需密码访问的时候）的时候应该在环境变量那里加上....
SIYUAN_ACCESS_AUTH_CODE_BYPASS=true

在 1panel => 高级功能 => WAF => 网站设置 => 选择你的思源笔记网站， 右上角关闭 WAF ，否则无法正常编辑思源笔记文档...

注意这里虽然访问了高级功能，但实际上并不需要你购买会员
### 代理突然失效？ 无法访问网站 WAF 问题
见 issue 
https://github.com/1Panel-dev/1Panel/issues/4581

解决方法： https://bbs.fit2cloud.com/t/topic/4540

### 如何配置 pgadmin4 

里头填写的用户名和密码可以在应用商店-postgresql 的参数里头找到 (你一开始创建 postgresql 那里填写了)
然后 ip 地址填的不是 127.0.0.1 (因为都是 docker 服务!) , 你需要到 1panel 的容器 页面找到 postgresql 的 容器 ip ,填写进去就可以连接了

### 如何开启 https ?  (ssl / 证书申请)
视频教程
https://www.bilibili.com/video/BV1AP411Z7oK/
教程中漏了一部分,就是 阿里云 DNS 的 accesskey 怎么获得, 参考下面的教程( 我也不知道为什么里头起名叫做 RAM , 总之是 access key manager)
https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair
然后要在阿里云 RAM 用户管理界面中 授权 AliyunDNSFullAccess

另外,申请域名的时候记得要在"其他域名" 栏目里补充 `*.your_domain.com`.... 否则子域名是无法开启 https 的
```
主域名：
your_domain.com
其他域名：
*.your_domain.com
```

#### 为啥要DNS 认证?
> 更详细的参考: 
>https://help.aliyun.com/zh/ssl-certificate/user-guide/verify-the-ownership-of-a-domain-name

DNS验证方式是SSL证书颁发过程中的一种域名所有权验证手段。当您申请SSL证书时，证书颁发机构（CA）会要求您证明对该域名拥有控制权。DNS验证通常涉及以下步骤：

1. **获取验证代码**：在申请SSL证书过程中，CA会提供一个包含特定文本的验证记录（通常是一个TXT记录）。这个记录将作为证明您对域名拥有控制权的关键。
    
2. **添加DNS记录**：您需要将这个验证记录添加到您的域名注册商提供的DNS管理界面中。这个记录会被解析到您的域名之下。
    
3. **CA验证**：一旦您提交了DNS记录，CA会检查您的域名是否正确地包含了这个验证记录。这个过程可能需要一些时间，因为DNS记录需要在全球范围内的DNS服务器中 propagate。
    
4. **验证成功**：如果CA确认您的DNS记录已正确设置，且与您申请的SSL证书关联，那么验证过程就会成功。随后，CA将为您颁发SSL证书。

DNS验证方式的优点是它不需要您访问您的电子邮件账户或者在您的网站上修改任何内容。这使得过程相对简单，尤其是对于那些没有权限修改网站或无法访问注册邮箱的用户来说，是一种较为理想的验证方式。

然而，DNS验证也有其潜在的缺点，如安全性问题。因为任何人都有能力修改DNS记录，这可能使DNS验证的SSL证书面临被恶意签发的风险。因此，使用DNS验证时，确保您的DNS管理安全是非常重要的。

总的来说，DNS验证是SSL证书申请过程中一种有效且方便的域名所有权验证方法，但同时它也需要您注意维护DNS安全，防止证书被不当使用。
