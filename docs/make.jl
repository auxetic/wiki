using Documenter

makedocs(
    format = :html,
    pages  = [
        "Home" => "index.md",
        "Algorithm" => Any[
            "Algorithm/autodiff.md",
            ],
        "Python" => Any[
            "Python/index.md",
        ],
        "Fortran"  => Any[
            "Fortran/Qsort.md",
            ],
        "系统运维" => Any[
            "Ops/index.md",
            "Ops/git-summary.md",
            ],
        "文摘" => Any[
            "Digest/index.md",
            ],
        "LeetCode" => Any[
            "LeetCode/twostring.md",
            "LeetCode/palindrome.md",
            "LeetCode/array.md",
            "LeetCode/hash.md",
            "LeetCode/heap.md",
            ],
        "年鉴" => Any[
            "YearBook/index.md",
            "YearBook/peoples.md",
            ],
        "百科杂记" => Any["wiki/wiki.md",
            ],
    ],
    repo     = "https://github.com/auxetic/wiki/blob/{commit}{path}#L{line}",
    sitename = "liuxu's wiki",
    #  assets   = ["assets/custom.css", "assets/custom.js", "assets/favicon.ico"],
    assets   = ["assets/favicon.ico"],
    doctest  = false,
    clean    = true,
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    julia = "1.0",
    deps = nothing,
    make=nothing,
)
