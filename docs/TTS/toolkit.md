语音合成相关工具包
==================

1. 自然语言处理工具包
---------------------

[知乎
常用的开源自然语言处理/开发包](https://www.zhihu.com/question/19929473/answer/264555333)

[知乎
比较好的中文分词方案](https://www.zhihu.com/question/19578687/answer/190569700)

### python-pinyin

[python-pinyin](https://github.com/mozillazg/python-pinyin)
提供了汉字转换成拼音的工具，它的安装和使用都很方便 :

    pip3 install pypinyin

使用可见 [官方文档](https://pypinyin.readthedocs.io/zh_CN/master/)

关于拼音标注的风格，这里使用了pypinyin.Style.TONE3，举个例子 [yuan2
jiu4]{.title-ref} ，再稍加转换就称为本系统中使用的风格

注意：

-   pypinyin不提供对数字符号\[0-9\]进行拼音标记，使用时需要自定义词典，注意覆盖3.4中间有个"点"的声音

### 结巴分词

结巴分词很容易安装和使用，可见
[\[结巴分词-github主页\]](https://github.com/fxsjy/jieba)
，这里就不赘述了。 值得注意的是

2. 语音处理工具包
-----------------

语音处理工具包（Speech Processing Tool
Kit，SPTK）是由日本名古屋工业大学Tokuda实验室开发的用于语音信号处理的开源工具包，包括基频提取、LPC分析与合成、MGCC参数估计与波形合成等多种用于语音信号处理的基本工具\[55\]。在本论文中，将使用SPTK版本3.5的工具构造了一个基于MGCC的声码器，用于训练的声学参数提取和合成的波形生成。\[5\]

3. 声码器
---------

STRAIGHT是由日本和歌山大学的Kawahara博士提出的语音信号分析工具\[56\]。使用STRAIGHT可以进行频谱分析，基频提取和非周期成分分析。其频谱比较平滑，与基于傅里叶变换的语音短时频谱相比，其中包含基频及其谐波的成分基本去除，因此允许对基频和频谱参数进行更大范围的修改而不损伤音质，更适用于作为个性化语音合成系统的声学分析模块。在本论文中，除特别说明，均使用STRAIGHT进行频谱和基频的提取。STRAIGHT频谱将进一步用SPTK的工具提取MGCC频谱系数，其基频直接用于声学模型训练。在合成时，使用改造的SPTK中的MLSA滤波器生成语音波形。\[5\]

4. HTK
------

HMM工具包（HMM Tool Kit，HTK）(<http://htk.eng.cam.ac.uk/>)
是由剑桥大学工程学院机器学习实验室开发的用于自动语音识别的工具包。其中包括基于K均值的HMM模型初始化（HInit）、HMM孤立参数估计（HRest）、HMM上下文参数估计（HERest）和模型状态聚类与模型编辑（HHEd）等工具。在此基础上，Tokuda实验室将HTK改造为基于HSS的合成系统（HMM-based
Speech Synthesis
System，HTS），主要的工作包括：用HSMM代替HMM实现显式时长建模与参数估计、基于最小描述长度（Minimum
Description
Length，MDL）的上下文聚类等。本文中使用由HTK版本3.4.1改造的HTS版本2.2进行短时声学参数建模\[58\]。\[5\]

请参考文献\[24\]中的内容对HTK进行补充

5. 其他工具
-----------

这里有与中文语言处理相关的Python package
<https://pypi.python.org/pypi>?:action=browse&show=all&c=98&c=489

6. 其他
-------

-   HTS2.1 基于HTK开发的语音合成工具
-   SPTK-3.8 用于提取语音信号频谱参数（如MFCC系数）的语音信号处理工具,
    通常用语将STRAIGHT合成器中的谱参数(维数较高)转换成转换为
    HTS训练中可用的 mgc(Mel-generalized cepstral)参数,
-   snack 用于提取语音信号基频参数（f0系数）的语音信号处理工具
-   Praat 4.6 用于语音文件标注的专业语音处理软件doing phonetics by
    computer \[OL\] .<http://www.praat.org/> .2012
-   FFmpeg 用于转换语音文件格式（如采样率、声道等）的开源软件
-   SPPAS16 用于帮助Praat标注和处理的辅助标注软件
-   Festvox(<https://festvox.org>)
