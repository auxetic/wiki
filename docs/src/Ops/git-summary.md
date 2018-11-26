# Git

!!! note
    教程地址：[廖雪峰 Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)



## 一般信息

1. 为什么要使用git ?  **为了实现版本控制**
2. git的作者是Linus, 初版写于2005年。
3. git是一种分布式版本控制系统，与之相对照的是集中式版本控制系统，例如SVN。

## 安装配置git
### 略

### 配置
``` bash
$ git config --global user.name "liuxu"             # 配置全局变量
$ git config --global user.email "liuxu#ustc"       # 配置全局变量
```
1. 以上的配置会保存在 `./.gitconfig` 中，默认使用。
2. 如果在特定项目中要使用其他账号，则在项目文件夹中执行`git config user.name/email`，账户信息会保存在项目配置文件中

## 本地使用

### 创建仓库

``` bash
$ mkdir xx && cd xx
$ git init
```
git会在此目录下建立`.git`文件夹

### 添加 `.gitignore`
```
/dir        # 屏蔽根目录中的dir
dir/        # 屏蔽目录中文件
tmp         # 屏蔽某文件
*.swp       # 屏蔽某类型文件
!main.c     # 手动管理
```

### 添加文件
``` bash
$ touch test.f90    
$ git add test.f90              # 文件添加到仓库缓冲区
$ git commit -m "说明"          # 文件提交到仓库
```

### 修改及查看仓库状态
``` bash
$ git status                    # 查看仓库当前状态
$ echo "" >> test.f90           # 修改文件
$ git status                    # 提示文件有修改
$ git diff                      # 查看修改
$ git add test.f90              # 更新到缓冲区
$ git commit -m "Modify"        # 更新到仓库
```

### 查看历史记录
``` bash
$ git log                        # 查看版本库历史
$ git checkout xxxxx             # 跳到某一版本
$ git reset --hard HEAD^         # 回到上个版本
$ git reset --hard HEAD~n        # 回到n个前版本
$ git reset --hard xxx           # 回到特定编号版本
$ git reflog                     # 查看命令历史
```

### 修改与撤回
``` bash
$ git diff HEAD -- test.f90     # 比较工作区和仓库中的代码
$ git checkout -- test.f90      # 撤回代码修改,优先撤回缓冲区内容
$ git reset HEAD test.f90       # 撤回缓冲区代码并清除缓冲区
```

### 代码删除、重命名
``` bash
$ git rm xx                     # 删除代码
$ git mv xx yy                  # 重命名为yy
```

### 分支管理

``` bash
$ git branch                    # 查看当前分支
$ git branch dev                # 创建分支
$ git chechout dev              # 切换分支
$ git checkout -b dev           # 创建并切换到新分支
$ git merge dev                 # 合并dev到当前分支
$ git branch -d dev             # 删除分支(合并后)
$ git branch -D dev             # 删除分支(强制删除)
```

1. 合并分支时如果发生冲突，需要手动解决冲突
冲突部分在文件中会用 `<<<<<<<`，`=======`，`>>>>>>>` 标出
2. `git log --graph`命令可以看到分支合并图
3. git在合并分支时默认使用`Fast forward`模式，删除分支时会丢失分支信息
可以添加`--no-ff`参数，加`-m xx`生成新的commit

### 标签
标签是指向某个commit的固定指针
``` bash
$ git tag v1.0                              # 打标签
$ git tag v0.9 xxxxxx                       # 给特定`commit id`打标签
$ git tag -a v0.1 -m "v1.0 release" xxx     # 添加说明
$ git tag                                   # 查看存在的标签
$ git show v1.0                             # 查看特定标签版本信息
```

## 连接github

### 建立远程repo
1. 创建github账号
2. 配置 ssh_key
3. 建立repo

### 关联和上传
``` bash
$ git remote add origin git@github.com:username/project_xx.git
$ git -u push origin master     # 第一次上传master分支
$ git -u push origin dev        # 在本地dev分支中，绑定并上传到远程dev
$ git push                      # 以后
```
* 远程repo信息在`.git/config`中，可以删除后重新配置


## 合作
``` bash
$ git checkout -b dev origin/dev            # 他人下载dev分支
```
如果两人同时修改了某文件，则第二个推送人会推送失败，提示冲突。此时应执行
``` bash
$ git pull                                  # 拉取远程的新数据，如果失败可能需要下面命令
$ git branch --set-upstream dev origin/dev  # 本地远程分支绑定
```

