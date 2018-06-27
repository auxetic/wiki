#!/bin/env julia

push!(LOAD_PATH,"../src/")
using Documenter, wiki

#  ENV["DOCUMENTER_DEBUG"] = true


makedocs(
    doctest = false,
    clean = true,
    format = :html,
    sitename = "wiki",
    pages = [
        "Home" => "index.md",
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
    ],
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    julia = "0.7",
    deps = nothing,
    make = nothing,
)
