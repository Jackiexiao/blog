# sox-cheatsheet

sox官方文档：[http://sox.sourceforge.net/sox.html](http://sox.sourceforge.net/sox.html)

sox中文手册：[http://blog.csdn.net/p222p/article/details/77624046](http://blog.csdn.net/p222p/article/details/77624046)

linux终端下查看使用帮助

```
sox -h
```
infile 和 outfile 用音频文件名代替，比如 example.wav

### sox语法格式

```
sox  全局参数  格式化参数  输入文件1  格式化参数  输入文件2 ... 格式化参数   输出文件 效果器
```
### 修改采样率

```
sox infile -r 16000outfile
```
批量修改采样率脚本
```
#!/bin/bash
for x in ./*.wav
do
b=${x##*/}
sox $b -r 16000 tmp_$b
rm -rf $b
mv tmp_$b $b
done
```
### 修改量化精度

```
sox input.wav -b 24 output.wav
```
### 查看音频信息

```
# 主要信息
sox -V *.wav -n
# 时长信息
sox file -n stat
```
### 调整音频音量

```
sox file1.wav -v 0.6 file2.wav
```
-v是调整音量的选项,0.6是参数,它是一种线性调整,并不是调整到原先的0.6,而是幅值调整,fi
－le2.wav是输出文件。如果-v后面的数字比1大,则增加音量,反之则减少音量,如果是负数那么

在调整的同时还对音频进行反相变换,但也不是可以任意增加的,取值太大容易产生削波现象。要

取什么只好呢?键入下列命令:

```
sox file1.wav -n stat -v
```
命令输出结果如下"
1.003

这就得出不失真最大调整量了

### 删去音频片段

```
sox infile outfiletrim 0 10
```
### 音频格式转换

```
sox infile outfile
```
不过，如果要转换成mp3的话，需要安装mp3lame或libmad库支持，sox -h 查看sox支持的音频格式，建议通过其他方式转换mp3到wav，例如
```
sudo apt-get install mpg123
mpg123 -w output.wav input.mp3
```
用ffmpeg也可以
```
ffmpeg -i input.mp3 -ar 16000 output.wav
```
### 转换声道

```
sox infile -c 2 outfile
```
其中-c就是声道转换选项,-c 2又可写成-c2,同样道理,-c1表示单声道,-c4表示4声道。
### 混合音频

比如混合背景音乐和人声

```
sox -m infile1 infile2 outfile
```
### 首尾连接两个音频文件为一个

```
sox infile1 infile2 outfile
```
### 修改量化位数

```
sox input.wav -b 16 out.wav
```

