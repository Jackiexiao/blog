# 大模型api

## 价格对比

价格单位： 一人民币能买多少token

| 厂家       | 模型   | 输入    | 输出   | 效果         |
| -------- | ---- | ----- | ---- | ---------- |
| 豆包       | 32k  | 125 万 | 50万  | ~3.5       |
| 豆包       | 128k | 200 万 | ?    | ~3.5       |
| deepseek | 32k  | 100万  | 200万 | ~gpt-turbo |

## 豆包大模型
[豆包大模型](https://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247729211&idx=1&sn=260ee4c3055e47c95c3410610ffb5d57) 
- 大模型: https://www.volcengine.com/product/doubao
    - 需要企业账户才能调用， 否则会报错：您的账号暂未进行企业实名认证，无法使用火山方舟控制台
    - 小于32K窗口尺寸：豆包通用模型pro，
        - 输入价格： 0.0008元/千tokens，比 chatgpt4-32k 低99.3%  ，也就是 1元 125万 token
        - 输出价格：0.0020 元/千tokens， 1元50万token
    - 128K窗口尺寸：豆包通用模型pro，只要0.005元/千tokens，比gpt4-turbo 低95.8%