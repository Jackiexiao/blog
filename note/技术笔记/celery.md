# celery
## about
Celery是Python开发的**分布式任务调度模块**，接口非常简单，开发容易，几分钟就可以写异步执行某个任务的服务。

Celery本身不含消息服务，它使用第三方消息服务来传递任务，目前，Celery支持的消息服务有RabbitMQ、Redis甚至是数据库，当然Redis应该是最佳选择。

相关的工具有 
- 青龙：定时任务管理平台 https://github.com/whyour/qinglong
- python 定时执行任务包 [apscheduler](https://github.com/agronholm/apscheduler)  看起来比 schedule 更好
## tutorial
- 中文
    - 3分钟极简入门 https://www.liaoxuefeng.com/article/903701468278784
    - 简单理解它的架构 https://www.cnblogs.com/qiu-hua/p/12705315.html
- 英文： 有个基本印象之后就可以看英文文档啦！（请不要去看各种过时的中文文档）
    - 官方文档： https://docs.celeryq.dev/en/stable/getting-started/introduction.html

## cheatsheet
```bash
docker run -d -p 6379:6379 redis
pip install celery
```

```python
# tasks.py
from celery import Celery

# 这里 redis 是用来不同 worker 之间通信的，它可以传递请求消息(broker)或者结果(backend)信息
app = Celery('your_proj_name', backend='redis://localhost', broker='redis://localhost')
app.conf.update(
    timezone='Asia/Shanghai',
    enable_utc=True,
)

@app.task
def add(x, y):
    return x + y
```

```bash
celery -A your_proj_name worker --loglevel=INFO -c 2
# celery worker --help
```

这里 -c 是 concurrency  worker 数量， 一般设置为 2倍的 cpu 核数，再多性能可能下降

```python
# main.py
from tasks import add
result = add.delay(4, 4)
result.ready()
result.get(timeout=1) # 同步阻塞等待结果
result.get(propagate=False) # 不要报错
result.traceback # 运行的异常
```
## faq

### 多线程 or 多进程 => 可支持多进程
### 可支持多机部署