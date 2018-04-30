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
    repo = "github.com/auxetic/wiki.jl.git"
)
