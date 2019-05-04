# 目录
书籍内容
1. UNIX系统概括
2. UNIX标准及其各种实现
3. 文件I/O
4. 文件和目录
5. 标准I/O库
6. 系统数据文件和信息
7. 进程环境
8. 进程控制
9. 进程关系
10. 信号
11. 线程
12. 线程控制
13. 守护进程
14. 高级I/O
15. 进程间通信
16. 网络IPC：套接字
17. 高级IPC
18. 终端I/O
19. 伪终端
20. 数据库
21. 网络打印机

# UNIX系统概括

## 简介
所有的操作系统都要为程序运行提供服务，比如文件打开、读取，内存分配等等。
不适用前后引用，线性地描述UNIX系统基本是不可能的。
第一章这里对书中一些通用术语、概念和系统提供的各种服务给以简单的介绍。

## UNIX 架构
直接操作硬件的是内核（kernel）。
内核的接口是系统调用（system calls）。
系统调用之上有shell和库，应用程序可安需要使用系统调用、shell和库函数。

## Logging In

### 登录名
通常/etc/passwd储存用户名信息，如
`liuxu:x:1000:1000:liuxu:/home/liuxu:/bin/bash`

### shells
1. sh = Bourne shell
2. bash = Bourne-again shell

## 文件和目录

### 文件系统
目录十一个包含目录信息的文件

### 文件名
文件名不能以/（slash）和null开头。当然POSIX有更严格的建议。

### 路径
 

### 例子
实现简单的`ls`
```c++
#include "apue.h"
#include <dirent.h>

int main(int argc, char *argv[])
{
    DIR           *dp;
    struct dirent *dirp;

    if (argc != 2)
        err_quit("usage: ls directory_name");

    if ((dp = opendir(argv[1])) == NULL)
        err_sys("can't open %s", argv[1]);
	
    while ((dirp = readdir(dp)) != NULL)
        printf("%s\n", dirp->d_name);

    closedir(dp);
    exit(0);
}
```

### 工作目录
可以通过chdir函数切换

### Home目录
 

## 输入和输出

### 文件描述符
 

### 标准输入、输出，标准错误输出
当shell执行一个新的程序时，总是会打开标题三个描述符

### 无缓冲的I/O
 

### 例子
从标准输入读取内容，输出至标准输出。STDIN_FILENO的定义等是POSIX标准的一部分，包含在<unistd.h>中。
```c
#include "apue.h"
#define buffersize 4096

int main(int argc, char *argv[])
{
    int n;
    char buf[buffersize];

    while ((n=read(STDIN_FILENO, buf, buffersize)) > 0)
        if (write(STDOUT_FILENO, buf, n) != n)
            err_sys("write error");

    if (n<0)
        err_sys("read error");

    exit(0);
}
```

### 标准I/O
标准IO提供缓存

### 例子
```c
#include "apue.h"

int main(int argc, char *argv[])
{
    int c;
    while ((c = getc(stdin)) != EOF)
        if (putc(c, stdout) == EOF)
            err_sys("output error");

    if (ferror(stdin))
        err_sys("input error");

    exit(0);
}
```

## 进程

### （可执行）程序
 

### 进程、进程ID
 

### 例子
```c
#include "apue.h"

int main(int argc, char *argv[])
{
    printf("hello world from process ID %ld\n", (long)getpid());
    exit(0);
}
```
getpid()返回类型为pid_t，其实就是整型，但是我们不好知道具体长度，所以统一转换为长整型

### 进程控制
主要有三种进程控制的函数：`fork`, `exec`, `waitpid`。
其中`exec`有七种变形。

### 例子
```c
#include "apue.h"
#include <sys/wait.h>

int main(int argc, char *argv[])
{
    char  buf[MAXLINE];
    pid_t pid;
    int   status;

    printf("%% ");

    while (fgets(buf, MAXLINE, stdin) != NULL) {
        if ( buf[strlen(buf)-1] == '\n')
            buf[strlen(buf)-1] = 0;

        if ((pid = fork()) <0) {
            err_sys("fork error");
        } else if (pid == 0) {
            execlp(buf, buf, (char *)0);
            err_ret("couldn't execute: %s", buf);
            exit(127);
        }

        if ((pid=waitpid(pid, &status, 0)) < 0)
            err_sys("waitpid error");

        printf("%% ");
    }

    exit(0);
}
```

### 线程、线程ID
多线程。一个进程内的多线程，共享相同的地址空间，文件描述符，栈，进程相关属性。
线程模型晚于UNIX诞生，进程与线程有着复杂的交互。

## 错误处理
当程序运行出现错误，经常返回一个负值给系统，或者是一些用来表示错误的特定数值。
`<errno.h>`定义了一些常量，对应一些常见的错误。
`<string.h>`定义了`strerror`用来返回约定错误的信息。
`<stdio.h>`定义了`perror`函数根据当前errno想标准错误输出输出错误信息。

### 例子
```c
#include "apue.h"
#include <errno.h>

int main(int argc, char *argv[])
{
    fprintf(stderr, "EACCES: %s\n", strerror(EACCES));
    errno = ENOENT;
    perror(argv[0]);
    exit(0);
}
```

### 错误恢复
错误分致命和非致命。致命错误没有恢复行为。当然是否致命取决于具体情形。

## 用户识别

### 用户ID
root账户uid为0

### 组ID
POSIX标准规定，一个用户至少可以有8个组ID

### 例子
```c
#include "apue.h"

int main(int argc, char *argv[])
{
    printf("uid = %d, gid = %d\n", getuid(), getgid());
    exit(0);
}
```

## 信号
信号用来提醒进程有某些状况发生。进程可以选择忽略、默认处理、自行处理。

## 时间
UNIX有两种时间值
1. 1970.2.1距当前是时间的秒数
2. 进程时间，cpu时间安
进程时间又有墙上时间，用户时间和系统时间的差别

## 系统调用和库函数
从实现者的角度看，系统调用和库函数有着根本的不同；从用户的角度看，两者看起来都是标准的C函数形式。


# UNIX标准和实现

## 简介
 

## UNIX标准化

### ISO C
ISO C不仅定义了语言的语法，还定义了标准库。C99没有影响本书涉及的POSIX接口。

### IEEE POSIX
`POSIX` = Portable Operating System Interface。

### 单一UNIX规范
The Single UNIX Specification 是POSIX.1的超集

### FIPS
Federal Information Processing Standard

## UNIX系统的各种实现

### System V Release 4
 
### 4.4 BSD
Berkeley Software Distribution
### FreeBSD
基于4.4BSD-lite
### Linux
 
### Mac OS X
 
### Solaris
Sun Microsystems -> Oracle
### others
 

## 标准和实现的关系
 

## 限制
各种UNIX实现都定义了各自的一些常量。一些是编译期的限定，一些是运行时的。

### ISO C Limits
int的上下限等等

### POSIX Limits
文件名长度限制等等

### XSI Limits
 

### `sysconf`， `pathconf`， `fpathconf`
 

### Indeterminate Runtime Limits
 

## Options
 

## Primitive System Data Types
 

## 标准间的不同
 


# 文件IO

## 简介
这一章描述的都是非缓冲IO

## 文件描述符
一般情况下，0代表标准输入，1代表标准输出，2代表标准错误输出，
但是为了可移植性，推荐用`STDIN_FILENO`等替代。

## `open` and `openat` 函数
```c
#include <fcntl.h>
int open(const char *path, int oflag, ...);
int openat(int fd, const char *path, int oflag, ...);
```
`oflag`可以为`O_RONLY`, `O_WRONLY`, `O_RDWR`, `O_EXEC`, `O_SEARCH`。

### 文件名、路径名截断


## `creat` 函数
```c
#include <fcntl.h>
int creat(const char *path, mode_t mode);
```
返回结果是一个可写的文件描述符。

## `close` 函数
```c
#include <unistd.h>
int close(int fd);
```
当一个进程结束时，kernel会自动关闭进程相关的所有文件。

## `lseek` 函数
```c
#include <unistd.h>
off_t lseek(int fd, off_t offset, int whence);
```
打开文件时，默认指向文件的开头，除非设置了`O_APPEND`。
whence可以设置为
1. SEEK_SET
2. SEEK_CUR
3. SEEK_END
某些文件描述符无法seek，如`FIFO`，socket等。
lseek只在内核中记录文件的offset

## `read` 函数
```c
#include <unistd.h>
ssize_t read(int fd, void *buf, size_t nbytes);
```
从文件描述符读取指定长短的内容，返回读到的长度。

## `write` 函数
```c
#include <unistd.h>
ssize_t write(int fd, const void *buf, size_t nbytes);
```
返回写入的长度，若发生错误，返回`-1`

## IO 效率
`read`和`write`函数均要指定缓存区大小。
过小的缓存会增加系统调用的次数，过大的缓存会造成内存浪费，所以这里存在一个调优的问题。
但实际的现代系统内核，往往有读写预缓存的优化。

## 文件共享

## 原子操作
文件共享时，有数据竟写的可能，所以需要原子操作。

### `pread`和`pwrite`函数
pread函数相当于lseek和write无间断连续运行。

## dup dup2函数
没看

## `sysnc`， `fsync` 和 `fdatasync` 函数
UNIX类系统为了读写优化，一般都启用了延迟写入特性。
如果我们需要同步磁盘与内存缓存，会用到以下几个函数。
```c
#include <unistd.h>
int fsync(int fd);
int fdatasync(int fd);
void sync(void);
```
`fdatasync`和`fsync`类似，差别在于是否同步文件属性。

## `fcntl`函数
## `ioctl`函数
## `/dev/fd`


# 文件和目录

## 简介
这一章介绍一些文件系统的特性和文件属性。这一章从介绍`stat`函数开始。

## `stat` 函数等
```c
#include <sys/stat.h>
int stat(const char *restrict pathname, struct stat *restrict buf);
int fstat
int lstat
int fstatat
```
```c
struct stat {
    mode_t          st_mode;    /* file type & mode (permissions) */
    ino_t           st_ino;     /* i-node number (serial number) */
    dev_t           st_dev;     /* device number (file system) */
    dev_t           st_rdev;    /* device number for special files */
    nlink_t         st_nlink;   /* number of links */
    uid_t           st_uid;     /* user ID of owner */
    gid_t           st_gid;     /* group ID of owner */
    off_t           st_size;    /* size in bytes, for regular files */
    struct timespec st_atim;    /* time of last access */
    struct timespec st_mtim;    /* time of last modification */
    struct timespec st_ctim;    /* time of last file status change */
    blksize_t       st_blksize; /* best I/O block size */
    blkcnt_t        st_blocks;  /* number of disk blocks allocated */
};
```

## 文件类型
1. 普通文件
2. 目录
3. 块设备文件
4. 字符设备文件
5. 管道FIFO
6. 套接字Socket
7. 符号链接

## Set-User-ID and Set-Group-ID
每一个进程都至少关联有六个ID。每一个文件都从属于某各人和组。
UNIX系统允许每个用户修改自己的密码。当普通用户执行passwd，程序可以获得/etc/passwd文件的读写权限，而这个文件的主人，显然是root。

## 文件访问权限

## 创建新文件时的所有权
文件创建时的所有者为进程的有效uid。文件的组id可以从进程，也可以从所属目录。

## `access` 和 `faccessat` 函数
```c
#include <unistd.h>
int access(const char *pathname, int mode);
int faccessat(int fd, const char *pathname, int mode, int flag);
```

## `umask`

## `chmod`, `fchmod`, `fchmodat` 函数
## `chown`, `fchown`, `lchown`

## 文件大小
文件可以有“洞”

## 文件截断
```c
#include <unistd.h>
int truncate(const char *pathname, off_t length);
int ftruncate(int fd, off_t length);
```

## 文件系统



