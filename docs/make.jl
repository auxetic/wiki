#!/bin/env julia

using Documenter

makedocs(
    format = :html,
    doctest = false,
    clean = true,
    sitename = "wiki",
    pages = [
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
        "LeetCode" => Any[
            "LeetCode/twostring.md",
            "LeetCode/palindrome.md",
            "LeetCode/array.md",
            "LeetCode/hash.md",
            "LeetCode/heap.md",
            ],
        "年鉴" => Any[
            "YearBook/index.md",
            ],
    ],
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    julia = "1.0",
    deps = nothing,
    make = nothing,
)
