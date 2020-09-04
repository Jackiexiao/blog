"""
# todo
- [ ] 删除不再分享的文件
- [ ] 更新文章目录 首页文章列表
- [ ] 将无效的markdown跳转链接删除掉
"""
from pathlib import Path
from shutil import copyfile
import re
import os

maindir = Path('D:\workspace\docs\jackieworld')
# Use `&` as symbol to share file

articles = []
for mdfile in maindir.glob('**/*.md'):
    try:
        with open(mdfile, 'r', encoding='utf8') as f:
            # print('==openfile: ', mdfile)
            lines = f.readlines()
            if lines and '&&' in lines[0]:
                print('update file: ', mdfile)
                articles.append(mdfile.name.replace('.md', ''))
                newfile = 'docs/' + mdfile.name
                with open(newfile, 'w', encoding='UTF-8') as wf:
                    for i , line in enumerate(lines):
                        if i == 0:
                            line = line.replace('&&', '')
                        # 复制图片附件 并 转换url
                        if 'attachment' in line:
                            attachfile = re.search(r'attachment/(.*)\)', line).group(1)
                            src=maindir / "attachment" / attachfile
                            dst= "attachment" 
                            if not os.path.exists(dst):
                                os.makedirs(dst)
                            copyfile(src, dst+'/'+attachfile)
                            line = line.replace('../attachment', 'https://jackiegeek.gitee.io/blog/attachment')

                        wf.write(line)

    except Exception as e:
        print(e)

with open('index.md', 'r', encoding='utf8') as f:
    lines = f.readlines()
with open('index.md', 'w', encoding='utf8') as f:
    for line in lines:
        if '全部文章列表' in line:
            break
        else:
            f.write(line)
    f.write('\n## 全部文章列表\n\n')
    for article in articles:
        url = 'https://jackiegeek.gitee.io/blog/docs/' + article
        f.write(f'* [{article}]({url})\n')
    
    with open('README.md', 'w', encoding='utf8') as f:
        f.write('# Jackie的博客\n\n')
        f.write('# 文章列表\n\n')
        for article in articles:
            url = 'https://gitee.com/jackiegeek/blog/blob/master/docs/' + article + '.md'
            f.write(f'* [{article}]({url})\n')
