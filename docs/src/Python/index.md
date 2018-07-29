# Python 学习记录

## 快速启动HTTPServer
在命令行界面某目录中，执行
```python
python -m SimpleHTTPServer
```
可以快速启动一个http服务，默认监听本地所有地址的8000端口, 浏览器中打开，即可看到目录下的文件

## sys.argv获取命令行参数
用于简单的接受命令行传进的参数, 返回一个普通的列表
```bash
$ cat test.py
#!/usr/bin/env python
import sys
print(sys.argv)
$ ./test.py -n 1
['test.py', '-n', '1']
```

## 标准输入输出
在sys库中定义了三个文件描述符，`stdin`, `stdout`, `stderr`
### 从`stdin`读取内容
```bash
$ cat test.py
import sys
for line in sys.stdin:
    print(line)
$ ./test.py <<eof
1
eof
1
```
这里`stdin`是文件操作符，python已经自带了一个读取的方法，我想应当等效于
```bash
for line in sys.stdin.readlines():
    print(line)
```
对`Julia`，需要使用类似上面的操作。

### 向`stdout` `stderr`写入
一般用`print`就可以了
```bash
$ cat test.py
import sys
sys.stdout.write("hello")
sys.stderr.write("world")
$ ./test.py  > /dev/null
world
$ ./test.py 2> /dev/null
hello
```
程序退出码
```bash
sys.exit(1)
```

## fileinput 标准库
使用stdin只能从标准输入读取内容，`fileinput`标准库实现了文件的读取（也可以读取标准输入）
```bash
$ cat test.py
import fileinput
for line in fileinput.input()
    print(line,end="")
$ ./test.py < /etc/passwd
```
还定义了一些方法，用以输出文件名、行号等信息，有`filename`, `fileno`, `filelineno`,
`isfirstline`, `isstdin`, `nextfile`等

## getpass 标准库
用以获得当前用户用户名，和在终端上安全的输入密码
```bash
$ cat test.py
import getpass
user = getpass.getuser()
passwd = getpass.getpass("Password: ")
$ ./test.py
Password:   在此输入，屏幕无显示
liuxu
123
```
`Julia`也实现了getpass，不过没有export
```julia
io = Base.getpass("input")
ss = read(io,String)
Base.shred!(io)
println(ss)
```
