#!/bin/env julia

using Documenter

#  ENV["DOCUMENTER_DEBUG"] = true

makedocs(
    doctest = false,
    clean = true,
    format = :html,
    sitename = "wiki",
    assets = ["assets/custom.css"],
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
    html_canonical = "https://auxetic.github.io/auxetic/",
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    julia = "nightly",
    deps = nothing,
    make = nothing,
)
