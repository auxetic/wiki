using Documenter

makedocs(
    sitename = "Liuxu's Wiki",
    format = Documenter.HTML( assets = [ "assets/favicon.ico", ] ), #"custom.css", ] ),
    pages  = [
        "Home" => "index.md",
        "Compute Science Book" => Any[
            "Advanced Programming in the UNIX Environment" => Any[
                "CS-books/APUE/index.md"],
            ],
        "Algorithm" => Any[
            "Algorithm/autodiff.md",
            "LeetCode" => Any[
                "LeetCode/twostring.md",
                "LeetCode/palindrome.md",
                "LeetCode/array.md",
                "LeetCode/hash.md",
                "LeetCode/heap.md",
                ],
            ],
        "Languages" => Any[
            "Python"  => Any[ "Python/index.md",  ],
            "Fortran" => Any[ "Fortran/Qsort.md", ],
            ],
        "系统运维" => Any[
            "Ops/index.md",
            "Ops/git-summary.md",
            ],
        "Digest" => Any[
            "Digest/index.md",
            ],
        "年鉴" => Any[
            "YearBook/index.md",
            "YearBook/peoples.md",
            ],
        "百科杂记" => Any["wiki/wiki.md",
            ],
        "English.md",
    ],
    repo     = "https://github.com/auxetic/wiki/blob/{commit}{path}#L{line}",
    #  assets   = ["assets/custom.css", "assets/custom.js", "assets/favicon.ico"],
    doctest  = false,
    clean    = true,
)

deploydocs(
    target = "build",
    repo = "github.com/auxetic/wiki.git",
    branch = "gh-pages",
    deps = nothing,
    make=nothing,
    devbranch = "master",
    devurl = "dev"
)
