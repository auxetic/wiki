using Documenter

makedocs(
    doctest = false,
    clean = false,
    format = :html,
    sitename = "wki",
    pages = [
        "Home" => "index.md",
    ]
)

deploydocs(
    repo = "github.com/auxetic/wiki.jl",
    target = "build",
    julia = "0.6",
    deps = nothing,
    make = nothing,
)
