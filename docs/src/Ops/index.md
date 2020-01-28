# 系统运维

## 磁盘监控

### iotop
`iotop`用来监控磁盘I/O，可以提供PID、用户、进程等相关信息。和`top`类似，提供快捷键。
iotop使用Python编写，需要Linux Kernel 2.6.20以上版本
官方主页: http://guichaz.free.fr/iotop/

#### 选项列表
1. -o, --only: 只显示有I/O操作的进程
2. -b, --batch: 非交互模式，可用于向文件导出
3. -d, --delay=: 统计间隔
4. -n, --iter=: 统计次数，完后退出
5. -u, --user=: 指定监控用户
6. -P, --processes: 仅限进程
7. -a: 显示累计值而非带宽
8. -t: 输出时间戳
9. -q, -qq, -qqq: 隐藏列名称，统计摘要等

#### 快捷键
1. 左右方向键，选定排序主列
2. p，切换进程线程显示
3. r，反向排序
4. a，切换带宽/累计
5. o，同上段