var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#wiki-1",
    "page": "Home",
    "title": "wiki",
    "category": "section",
    "text": "note: Note\nThis is a wiki(or blog) generated by Documenter.jlDocumenter, a package for building documentation from docstrings and markdown files."
},

{
    "location": "index.html#Contents-1",
    "page": "Home",
    "title": "Contents",
    "category": "section",
    "text": ""
},

{
    "location": "Algorithm/autodiff.html#",
    "page": "自动微分",
    "title": "自动微分",
    "category": "page",
    "text": ""
},

{
    "location": "Algorithm/autodiff.html#自动微分-1",
    "page": "自动微分",
    "title": "自动微分",
    "category": "section",
    "text": "函数求导是一件很常见的数学操作。在我们已知函数形式的情况下，如何通过计算机求函数的导数呢？ 很容易想到的是以下两种方法：根据求导规则进行符号计算， sin(x) = cos(x)\n通过差分计算， sin(x+h)-sin(x)h这里，mutable struct Dual <: Number\n    v::Float64\n    d::Float64\nend\n\nimport Base: +, -, *, /, show\n\nBase.show(io::IO,x::Dual) = print(\"$(x.v) + $(x.d)ϵ\")\n\n(+)(x::Dual, y::Dual) = Dual(x.v+y.v, x.d+y.d)\n(-)(x::Dual, y::Dual) = Dual(x.v-y.v, x.d-y.d)\n(*)(x::Dual, y::Dual) = Dual(x.v*y.v, x.v*y.d+x.d*y.v)\n(/)(x::Dual, y::Dual) = Dual(x.v/y.v, (x.d*y.v-x.v*y.d)/y.v/y.v)\nconvert(::Type{Dual}, x::Real) = Dual(x,zero(x))\npromote_rule(::Type{Dual}, ::Type{<:Number}) = Dual"
},

{
    "location": "Python/index.html#",
    "page": "Python 学习记录",
    "title": "Python 学习记录",
    "category": "page",
    "text": ""
},

{
    "location": "Python/index.html#Python-学习记录-1",
    "page": "Python 学习记录",
    "title": "Python 学习记录",
    "category": "section",
    "text": ""
},

{
    "location": "Python/index.html#快速启动HTTPServer-1",
    "page": "Python 学习记录",
    "title": "快速启动HTTPServer",
    "category": "section",
    "text": "在命令行界面某目录中，执行python -m SimpleHTTPServer可以快速启动一个http服务，默认监听本地所有地址的8000端口, 浏览器中打开，即可看到目录下的文件"
},

{
    "location": "Python/index.html#sys.argv获取命令行参数-1",
    "page": "Python 学习记录",
    "title": "sys.argv获取命令行参数",
    "category": "section",
    "text": "用于简单的接受命令行传进的参数, 返回一个普通的列表$ cat test.py\n#!/usr/bin/env python\nimport sys\nprint(sys.argv)\n$ ./test.py -n 1\n[\'test.py\', \'-n\', \'1\']"
},

{
    "location": "Python/index.html#标准输入输出-1",
    "page": "Python 学习记录",
    "title": "标准输入输出",
    "category": "section",
    "text": "在sys库中定义了三个文件描述符，stdin, stdout, stderr"
},

{
    "location": "Python/index.html#从stdin读取内容-1",
    "page": "Python 学习记录",
    "title": "从stdin读取内容",
    "category": "section",
    "text": "$ cat test.py\nimport sys\nfor line in sys.stdin:\n    print(line)\n$ ./test.py <<eof\n1\neof\n1这里stdin是文件操作符，python已经自带了一个读取的方法，我想应当等效于for line in sys.stdin.readlines():\n    print(line)对Julia，需要使用类似上面的操作。"
},

{
    "location": "Python/index.html#向stdout-stderr写入-1",
    "page": "Python 学习记录",
    "title": "向stdout stderr写入",
    "category": "section",
    "text": "一般用print就可以了$ cat test.py\nimport sys\nsys.stdout.write(\"hello\")\nsys.stderr.write(\"world\")\n$ ./test.py  > /dev/null\nworld\n$ ./test.py 2> /dev/null\nhello程序退出码sys.exit(1)"
},

{
    "location": "Python/index.html#fileinput-标准库-1",
    "page": "Python 学习记录",
    "title": "fileinput 标准库",
    "category": "section",
    "text": "使用stdin只能从标准输入读取内容，fileinput标准库实现了文件的读取（也可以读取标准输入）$ cat test.py\nimport fileinput\nfor line in fileinput.input()\n    print(line,end=\"\")\n$ ./test.py < /etc/passwd还定义了一些方法，用以输出文件名、行号等信息，有filename, fileno, filelineno, isfirstline, isstdin, nextfile等"
},

{
    "location": "Python/index.html#getpass-标准库-1",
    "page": "Python 学习记录",
    "title": "getpass 标准库",
    "category": "section",
    "text": "用以获得当前用户用户名，和在终端上安全的输入密码$ cat test.py\nimport getpass\nuser = getpass.getuser()\npasswd = getpass.getpass(\"Password: \")\n$ ./test.py\nPassword:   在此输入，屏幕无显示\nliuxu\n123Julia也实现了getpass，不过没有exportio = Base.getpass(\"input\")\nss = read(io,String)\nBase.shred!(io)\nprintln(ss)"
},

{
    "location": "Fortran/Qsort.html#",
    "page": "Quick Sort",
    "title": "Quick Sort",
    "category": "page",
    "text": ""
},

{
    "location": "Fortran/Qsort.html#Quick-Sort-1",
    "page": "Quick Sort",
    "title": "Quick Sort",
    "category": "section",
    "text": "module msort\n    implicit none\n\ncontains\n\n    function selectpivot(dataset,istart,iend) result(pivot)\n        implicit none\n\n        real(8), dimension(:) :: dataset\n        integer, value :: istart, iend\n        integer :: imid\n        real(8) :: pivot\n        real(8) :: tmp\n\n        imid = (istart+iend) / 2\n\n        if ( dataset(istart) > dataset(imid) ) then\n            tmp = dataset(istart)\n            dataset(istart) = dataset(imid)\n            dataset(imid) = tmp\n        end if\n\n        if ( dataset(iend) < dataset(imid) ) then\n            if ( dataset(iend) > dataset(istart) ) then\n                tmp = dataset(iend)\n                dataset(iend) = dataset(imid)\n                dataset(imid) = tmp\n            else\n                tmp = dataset(iend)\n                dataset(iend) = dataset(imid)\n                dataset(imid) = dataset(istart)\n                dataset(istart) = tmp\n            end if\n        end if\n\n        !^ istart <= imid <= iend\n\n        tmp = dataset(imid)\n        dataset(imid) = dataset(istart)\n        dataset(istart) = tmp\n\n        !^ swap istart and imid\n\n        pivot = tmp\n    end function\n\n    function partition(dataset,istart,iend) result(ipivot)\n        implicit none\n\n        real(8), dimension(:) :: dataset\n        integer, value :: istart, iend\n        integer :: ipivot\n        real(8) :: pivot\n        integer :: i, j\n        real(8) :: tmp\n\n        i = istart\n        j = iend\n\n        pivot = selectpivot(dataset,istart,iend)\n\n        do\n            i = i + 1\n            j = j - 1\n            do while ( dataset(i) < pivot )\n                i = i + 1\n            end do\n            do while ( dataset(j) > pivot )\n                j = j - 1\n            end do\n            if ( i>=j ) exit\n            tmp = dataset(j)\n            dataset(j) = dataset(i)\n            dataset(i) = tmp\n        end do\n        dataset(istart) = dataset(j)\n        dataset(j) = pivot\n\n        ipivot = j\n    end function\n\n    recursive subroutine sort_kernel(dataset,istart,iend)\n        implicit none\n\n        real(8), dimension(:) :: dataset\n        integer, value :: istart, iend\n        integer :: ipivot\n\n        do while ( istart < iend )\n            ipivot = partition(dataset,istart,iend)\n            if ( ipivot-istart < iend-ipivot ) then\n                if ( istart < ipivot-1 ) then\n                    call sort_kernel(dataset,istart,ipivot-1)\n                end if\n                istart = ipivot + 1\n            else\n                if ( iend > ipivot+1 ) then\n                    call sort_kernel(dataset,ipivot+1,iend)\n                end if\n                iend = ipivot - 1\n            end if\n        end do\n    end subroutine\n\n    subroutine sort(dataset)\n        implicit none\n\n        real(8), dimension(:) :: dataset\n        integer :: n\n\n        n = size(dataset)\n\n        call sort_kernel(dataset,1,n)\n    end subroutine\n\n    function issorted(dataset) result(re)\n        implicit none\n\n        real(8), dimension(:) :: dataset\n        logical :: re\n        integer :: i\n\n        re = .true.\n\n        do i=2, size(dataset)\n            if ( dataset(i) < dataset(i-1) ) then\n                re = .false.\n                exit\n            end if\n        end do\n    end function\n\nend module"
},

{
    "location": "LeetCode/twostring.html#",
    "page": "String",
    "title": "String",
    "category": "page",
    "text": ""
},

{
    "location": "LeetCode/twostring.html#String-1",
    "page": "String",
    "title": "String",
    "category": "section",
    "text": ""
},

{
    "location": "LeetCode/twostring.html#add-and-product-of-two-numeric-string-1",
    "page": "String",
    "title": "add and product of two numeric string",
    "category": "section",
    "text": "function s_add(s1::String, s2::String)\n    !( all(isnumeric,s1) && all(isnumeric,s2) ) && error(\"xx\")\n\n    l1 = length(s1)\n    l2 = length(s2)\n    l  = max(l1,l2) + 1\n    v  = zeros(Int8,l)\n    \n    for i in 1:l-1\n        x1 = i<=l1 ? s1[l1+1-i] - \'0\' : 0\n        x2 = i<=l2 ? s2[l2+1-i] - \'0\' : 0\n        x = x1 + x2\n        if x >= 10\n            v[l+1-i] += x - 10\n            v[l-i]   += 1\n        else\n            v[l+1-i] += x\n        end\n    end\n\n    v[1] != 0 ? reduce(*,string.(v)) : reduce(*,string.(v[2:end]))\nend\n\nusing Test\n@testset \"s_add\" begin\n    @test s_add(\"1\",\"2\") == \"3\"\n    @test s_add(\"1\",\"9\") == \"10\"\n    @test s_add(\"11\",\"99\") == \"110\"\n    @test_throws ErrorException s_add(\"a\",\"2\")\nendfunction s_mul(s1::String, s2::String)\n    !( all(isnumeric,s1) && all(isnumeric,s2) ) && error(\"xx\")\n\n    l1 = length(s1)\n    l2 = length(s2)\n    l  = l1 + l2\n    v  = zeros(Int8,l)\n    \n    for i1 in 1:l1\n        x1 = s1[l1+1-i1] - \'0\'\n        for i2 in 1:l2\n            x2 = s2[l2+1-i2] - \'0\'\n            v[l+2-i1-i2] += x1 * x2\n        end\n    end\n\n    for i in l:-1:1\n        x = v[i]\n        if x>10\n            v[i]    = x%10\n            v[i-1] += floor(Int8,x/10)\n        end\n    end\n\n    v[1] != 0 ? reduce(*,string.(v)) : reduce(*,string.(v[2:end]))\nend\n\nusing Test\n@testset \"s_mul\" begin\n    @test s_mul(\"2\",\"3\") == \"6\"\n    @test s_mul(\"3\",\"7\") == \"21\"\n    @test_throws ErrorException s_mul(\"a\",\"2\")\nend"
},

{
    "location": "LeetCode/palindrome.html#",
    "page": "Palindrome",
    "title": "Palindrome",
    "category": "page",
    "text": ""
},

{
    "location": "LeetCode/palindrome.html#Palindrome-1",
    "page": "Palindrome",
    "title": "Palindrome",
    "category": "section",
    "text": "determine if a integer or string is palindrome."
},

{
    "location": "LeetCode/palindrome.html#Integer-1",
    "page": "Palindrome",
    "title": "Integer",
    "category": "section",
    "text": "function ispa(x::T) where T <: Signed\n    @assert(x>0)\n    y = x\n    z = zero(x)\n    while y != 0\n        z = 10 * z + y%10\n        y = floor(T,y/10)\n    end\n    z == x\nend\n\nusing Test\n@testset \"integer\" begin\n    @test ispa(1)   == true\n    @test ispa(11)  == true\n    @test ispa(12)  == false\n    @test ispa(121) == true\n    @test ispa(122) == false\n    @test_throws MethodError ispa(1.0)\n    @test_throws AssertionError ispa(-11)\nend"
},

{
    "location": "LeetCode/palindrome.html#String-1",
    "page": "Palindrome",
    "title": "String",
    "category": "section",
    "text": "function ispa(x::String)\n    i = 1\n    j = length(x)\n    while i <= j\n        !( isnumeric(x[i]) || isalpha(x[i]) ) && (i += 1)\n        !( isnumeric(x[j]) || isalpha(x[j]) ) && (j -= 1)\n        x[i] != x[j] && return false\n        i += 1; j -= 1\n    end\n    return true\nend\n\nusing Test\n@testset \"string\" begin\n    @test ispa(\"121\")   == true\n    @test ispa(\"aba\")   == true\n    @test ispa(\"abc\")   == false\n    @test ispa(\"a,b.a\") == true\nend"
},

{
    "location": "LeetCode/array.html#",
    "page": "Array",
    "title": "Array",
    "category": "page",
    "text": ""
},

{
    "location": "LeetCode/array.html#Array-1",
    "page": "Array",
    "title": "Array",
    "category": "section",
    "text": ""
},

{
    "location": "LeetCode/array.html#Rm-duplicates-A-1",
    "page": "Array",
    "title": "Rm duplicates A",
    "category": "section",
    "text": "Remove duplicates from Sorted arrayusing Testx = sort(rand(1:4,10))\nfunction rmdup!(x)\n    idx = 1\n    for i in 2:length(x)\n        if x[idx] != x[i]\n            idx += 1\n            x[idx] = x[i]\n        end\n    end\n    idx\nend"
},

{
    "location": "LeetCode/array.html#Rm-duplicates-B-1",
    "page": "Array",
    "title": "Rm duplicates B",
    "category": "section",
    "text": "Fellow up probrem, add allow elements duplicate once.function rmdup!(x)\n    idx = 2\n    for i in 3:length(x)\n        if x[idx-1] != x[i]\n            idx += 1\n            x[idx] = x[i]\n        end\n    end\n    idx\nend"
},

{
    "location": "LeetCode/array.html#Search-array-1",
    "page": "Array",
    "title": "Search array",
    "category": "section",
    "text": "x is a sorted array and circle shift 3 index, find the target value and give its idx.x = [1:10;]\nx = circshift(x,3)\n\nfunction findta(x,ta)\n    n1 = 1\n    n3 = length(x)\n    while n3 >= n1\n        n2 = (n1+n3) >> 1\n        x[n2] == ta && return n2\n\n        if x[n2] >= x[n1]\n            if x[n2] >= ta >= x[n1]\n                n3 = n2\n            else\n                n1 = n2 + 1\n            end\n        else\n            if ta>=x[n1] || ta<=x[n2]\n                n3 = n2\n            else\n                n1 = n2 + 1\n            end\n        end\n    end\n    -1\nend"
},

{
    "location": "LeetCode/hash.html#",
    "page": "Hash",
    "title": "Hash",
    "category": "page",
    "text": ""
},

{
    "location": "LeetCode/hash.html#Hash-1",
    "page": "Hash",
    "title": "Hash",
    "category": "section",
    "text": ""
},

{
    "location": "LeetCode/hash.html#Group-anagrams-1",
    "page": "Hash",
    "title": "Group anagrams",
    "category": "section",
    "text": "Given an array of strings, like [\"tan\", \"nat\", \"ant\", \"abc\", \"cc\", \"bca\" ], return:[\n    [\"tan\", \"nat\", \"ant\"],\n    [\"abc\", \"bca\"],\n    [\"cc\"]\n]mutable struct Stringhash\n    s::String\n    h::Set\n    hit::Bool\nend\n\nfunction dictgroup(sarray::Vector{String})\n\n    result = Vector{String}[]\n\n    sst = Stringhash[]\n    for si in sarray\n        push!(sst,Stringhash(si,Set([si...]),false))\n    end\n\n    for i in 1:length(sst)\n        sst[i].hit == true && continue\n\n        rtemp = String[]\n        push!(rtemp,sst[i].s)\n\n        for j in i+1:length(sst)\n            if sst[i].h == sst[j].h\n                sst[j].hit = true\n                push!(rtemp,sst[j].s)\n            end\n        end\n\n        push!(result,rtemp)\n    end\n\n    return result\n\nend"
},

{
    "location": "LeetCode/heap.html#",
    "page": "Heap",
    "title": "Heap",
    "category": "page",
    "text": ""
},

{
    "location": "LeetCode/heap.html#Heap-1",
    "page": "Heap",
    "title": "Heap",
    "category": "section",
    "text": ""
},

{
    "location": "LeetCode/heap.html#find-n-largest-numbers-of-given-array.-1",
    "page": "Heap",
    "title": "find n largest numbers of given array.",
    "category": "section",
    "text": "Use julia\'s DataStructures library.using DataStructures\n\nx = rand(1000);\nnlargest(10,x)Use numpy\'s partial sortimport numpy as np\n\nx = np.random.rand(1000);\nnp.argpartition(x, -10)[-10:]"
},

{
    "location": "YearBook/index.html#",
    "page": "历史年鉴",
    "title": "历史年鉴",
    "category": "page",
    "text": ""
},

{
    "location": "YearBook/index.html#历史年鉴-1",
    "page": "历史年鉴",
    "title": "历史年鉴",
    "category": "section",
    "text": ""
},

{
    "location": "YearBook/index.html#?-新（汉）-1",
    "page": "历史年鉴",
    "title": "? - 新（汉）",
    "category": "section",
    "text": "note: Note\n以新朝分界，界线分明209 BCE  陈胜吴广起义"
},

{
    "location": "YearBook/index.html#-1",
    "page": "历史年鉴",
    "title": "1620",
    "category": "section",
    "text": "12.26 “五月花”号到达普利茅斯"
},

{
    "location": "YearBook/index.html#-2",
    "page": "历史年鉴",
    "title": "1636",
    "category": "section",
    "text": "10.28 哈佛大学成立"
},

{
    "location": "YearBook/index.html#-3",
    "page": "历史年鉴",
    "title": "1773",
    "category": "section",
    "text": "12.16 波士顿倾茶事件"
},

{
    "location": "YearBook/index.html#-4",
    "page": "历史年鉴",
    "title": "1776",
    "category": "section",
    "text": "7.4 大陆会议通过《独立宣言》"
},

{
    "location": "YearBook/index.html#-5",
    "page": "历史年鉴",
    "title": "1787",
    "category": "section",
    "text": "5.25 美国制宪会议在费城召开"
},

{
    "location": "YearBook/index.html#-6",
    "page": "历史年鉴",
    "title": "1789",
    "category": "section",
    "text": "3.4 美国宪法生效\n4.30 美国联邦政府成立，华盛顿就任第一届总统"
},

{
    "location": "YearBook/index.html#-7",
    "page": "历史年鉴",
    "title": "1812",
    "category": "section",
    "text": "6.18 美英爆发第二次战争"
},

{
    "location": "YearBook/index.html#-8",
    "page": "历史年鉴",
    "title": "1823",
    "category": "section",
    "text": "12.2 美国提出门罗主义，反对欧洲干涉美洲事务"
},

{
    "location": "YearBook/index.html#-9",
    "page": "历史年鉴",
    "title": "1836",
    "category": "section",
    "text": "是年，美国人萨缪尔·摩尔斯发明摩尔斯电码"
},

{
    "location": "YearBook/index.html#-10",
    "page": "历史年鉴",
    "title": "1844",
    "category": "section",
    "text": "7.3 中美签订《望厦条约》"
},

{
    "location": "YearBook/index.html#-11",
    "page": "历史年鉴",
    "title": "1855",
    "category": "section",
    "text": "7.8 美国军舰抵达日本强迫开户通商（黑船事件）"
},

{
    "location": "YearBook/index.html#-12",
    "page": "历史年鉴",
    "title": "1861",
    "category": "section",
    "text": "4.15 美国南北内战爆发"
},

{
    "location": "YearBook/index.html#-13",
    "page": "历史年鉴",
    "title": "1863",
    "category": "section",
    "text": "1.1 林肯签署《解放宣言》"
},

{
    "location": "YearBook/index.html#-14",
    "page": "历史年鉴",
    "title": "1865",
    "category": "section",
    "text": "4.9 美国内战结束\n4.14 林肯被刺，次日身亡"
},

{
    "location": "YearBook/index.html#-15",
    "page": "历史年鉴",
    "title": "1867",
    "category": "section",
    "text": "3.30 美国从沙俄购买了阿拉斯加"
},

{
    "location": "YearBook/index.html#-16",
    "page": "历史年鉴",
    "title": "1879",
    "category": "section",
    "text": "12.21 爱迪生发明电灯"
},

{
    "location": "YearBook/index.html#-17",
    "page": "历史年鉴",
    "title": "1882",
    "category": "section",
    "text": "5.6 美国通过排华法案"
},

{
    "location": "YearBook/index.html#-18",
    "page": "历史年鉴",
    "title": "1898",
    "category": "section",
    "text": "7.7 美国兼并夏威夷"
},

{
    "location": "YearBook/index.html#-19",
    "page": "历史年鉴",
    "title": "1903",
    "category": "section",
    "text": "12.17 莱特兄弟发明的飞机成功起飞"
},

{
    "location": "YearBook/index.html#-20",
    "page": "历史年鉴",
    "title": "1947",
    "category": "section",
    "text": "11.6 杨德昌出生于上海市。卒于2007.6.29。祖籍广东梅县；1985年与蔡琴结婚，1995年离婚，同年娶台湾钢琴家彭铠立。"
},

{
    "location": "YearBook/index.html#新中国-1",
    "page": "历史年鉴",
    "title": "新中国",
    "category": "section",
    "text": ""
},

{
    "location": "YearBook/index.html#-21",
    "page": "历史年鉴",
    "title": "1971",
    "category": "section",
    "text": "7.9-11  美国总统国家安全事物助理亨利·基辛格秘密访华"
},

{
    "location": "YearBook/index.html#-22",
    "page": "历史年鉴",
    "title": "1972",
    "category": "section",
    "text": "2.21-28  美国总统理查德·尼克松访华\n2.28     中美签署《上海公报》\n9.25     日本首相田中角荣访华\n9.29     中日建交"
},

{
    "location": "YearBook/index.html#-23",
    "page": "历史年鉴",
    "title": "1978",
    "category": "section",
    "text": "3.16 意大利左派组织红色旅绑架意前总理莫罗，用以要挟政府交换狱中同伴，政府拒绝，人质被杀（5.9）"
},

{
    "location": "YearBook/index.html#-24",
    "page": "历史年鉴",
    "title": "1979",
    "category": "section",
    "text": "1.1 中美建交，共同发布《中美建交公报》"
},

{
    "location": "YearBook/index.html#-25",
    "page": "历史年鉴",
    "title": "1982",
    "category": "section",
    "text": "4-6 英国、阿根廷为争夺马尔那斯群岛爆发马岛海战\n8.17 中美签署《八一七公报》，全称《中美就解决美国向台出售武器问题的公告》"
},

{
    "location": "YearBook/index.html#-26",
    "page": "历史年鉴",
    "title": "1985",
    "category": "section",
    "text": "3.11 戈尔巴乔夫出任苏共中央书记"
},

{
    "location": "YearBook/index.html#-27",
    "page": "历史年鉴",
    "title": "1988",
    "category": "section",
    "text": "9.17-10.2 汉城举办第二十四届奥林匹克运动会"
},

{
    "location": "YearBook/index.html#-28",
    "page": "历史年鉴",
    "title": "1991",
    "category": "section",
    "text": "8.19-21 苏共保守派发动政变，于黑海畔软禁戈尔巴乔夫\n8.24 戈尔巴乔夫辞去苏共总书记\n12.25 苏联总统戈尔巴乔夫辞职\n12.26 苏联最高苏维埃通过决议宣布解体"
},

{
    "location": "YearBook/index.html#-29",
    "page": "历史年鉴",
    "title": "2001",
    "category": "section",
    "text": "7.13 在莫斯科举行的奥林匹克委员会112届年会上，北京取得2008年奥运会举办权\n9.11 九一一事件，基地组织恐怖分子劫持四架飞机分别撞向世贸大厦、五角大楼、国会大厦（未成功）。计造成2977人死亡或失踪\n10.7 美国联军对阿富汗基地组织和塔利班发起反恐战争"
},

{
    "location": "YearBook/index.html#-30",
    "page": "历史年鉴",
    "title": "2003",
    "category": "section",
    "text": "3.20 美英等国对伊拉克发动战争，2010.8.18战争结束\n12.13 萨达姆被捕于家乡提克里特"
},

{
    "location": "YearBook/index.html#-31",
    "page": "历史年鉴",
    "title": "2004",
    "category": "section",
    "text": "9.1-9.3 别斯兰人质事件。车臣武装分子在北奥塞梯共和国别斯兰市一所中学，劫持1200人为人质。最终造成333名人质死亡"
},

{
    "location": "YearBook/index.html#-32",
    "page": "历史年鉴",
    "title": "2006",
    "category": "section",
    "text": "12.30 萨达姆·侯赛因被执行绞刑（宣判日为2006.11.5），终年69岁"
},

{
    "location": "YearBook/index.html#-33",
    "page": "历史年鉴",
    "title": "2007",
    "category": "section",
    "text": "6.29 杨德昌逝世，参见1947.11.6条"
},

{
    "location": "YearBook/index.html#-34",
    "page": "历史年鉴",
    "title": "2008",
    "category": "section",
    "text": "5.12 下午2：28汶川发生8级地震，共计（9.18）造成69227人死亡，374643人受伤，17923人失踪\n8.8-24 北京举办第二十九届奥林匹克运动会"
},

{
    "location": "YearBook/index.html#-35",
    "page": "历史年鉴",
    "title": "2011",
    "category": "section",
    "text": "5.1 奥萨玛·本拉登被美军击毙"
},

{
    "location": "YearBook/index.html#-36",
    "page": "历史年鉴",
    "title": "2014",
    "category": "section",
    "text": "3.2 俄罗斯增加克里米亚驻军\n3.16 克里米亚举行全民公投\n3.18-21 克里米亚共和国和塞瓦斯托波尔加入俄罗斯联邦"
},

{
    "location": "YearBook/index.html#-37",
    "page": "历史年鉴",
    "title": "2015",
    "category": "section",
    "text": "11.7 两岸领导人于新加坡香格里拉大酒店举行会晤，这是两岸分治以来首次领导人直接交流"
},

{
    "location": "YearBook/index.html#-38",
    "page": "历史年鉴",
    "title": "2016",
    "category": "section",
    "text": "5.20 蔡英文就任台湾省省长，副省长陈建仁。任命林全为行政院长\n12.21 圣多美普林西比与民国断交"
},

{
    "location": "YearBook/index.html#-39",
    "page": "历史年鉴",
    "title": "2017",
    "category": "section",
    "text": "1.20 特朗普（Donald John Trump）正式就任美国总统。特朗普生于1946.6.14，时年71岁\n6.13 巴拿马与民国断交\n9.8 台南市长赖清德转任行政院长，林全下台"
},

{
    "location": "YearBook/index.html#-40",
    "page": "历史年鉴",
    "title": "2018",
    "category": "section",
    "text": "5.1 多米尼加与民国断交\n5.24 布基纳法索与民国断交\n8.21 萨尔瓦多与民国断交\n8.24 澳大利亚总理特恩布尔下台，国防部长斯科特·莫里森（Scott Morrison）出任新总理"
},

{
    "location": "YearBook/peoples.html#",
    "page": "人物志",
    "title": "人物志",
    "category": "page",
    "text": ""
},

{
    "location": "YearBook/peoples.html#人物志-1",
    "page": "人物志",
    "title": "人物志",
    "category": "section",
    "text": "多采自维基百科"
},

{
    "location": "YearBook/peoples.html#台湾省-1",
    "page": "人物志",
    "title": "台湾省",
    "category": "section",
    "text": ""
},

{
    "location": "YearBook/peoples.html#马英九-1",
    "page": "人物志",
    "title": "马英九",
    "category": "section",
    "text": "马英九（1950.7.13-），生于香港九龙油麻地，祖籍湖南衡山县。1952年定居台北。 毕业于台大法律系，后获得哈佛大学司法学博士学位。 曾任蒋经国英文翻译。 1993年受行政院长连战之邀出任法务部长。 1998年击败陈水扁任台北市市长。 2005年当选国民党党主席。 2008年当选台湾省省长。 2012年连任。 2016年卸任。"
},

{
    "location": "wiki/wiki.html#",
    "page": "组织",
    "title": "组织",
    "category": "page",
    "text": ""
},

{
    "location": "wiki/wiki.html#组织-1",
    "page": "组织",
    "title": "组织",
    "category": "section",
    "text": ""
},

{
    "location": "wiki/wiki.html#红色旅-1",
    "page": "组织",
    "title": "红色旅",
    "category": "section",
    "text": "意大利极左派组织，成立于1970年，主要创建者是特伦托大学的一名社会学学生雷纳托·库乔。 该组织最著名的行动是1978年绑架意大利前总理莫罗。"
},

]}
