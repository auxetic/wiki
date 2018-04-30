using Documenter

ENV["DOCUMENTER_DEBUG"] = true

makedocs(
    doctest = false,
    clean = false,
    format = :html,
    sitename = "wiki",
    pages = [
        "Home" => "index.md",
    ]
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    julia = "0.6",
    deps = nothing,
    make = nothing,
)