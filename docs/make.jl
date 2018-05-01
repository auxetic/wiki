using Documenter

#  ENV["DOCUMENTER_DEBUG"] = true

makedocs(
    doctest = false,
    clean = true,
    format = :html,
    sitename = "wiki",
    pages = [
        "Home" => "index.md",
        "LeetCode" => Any[
            "LeetCode/twostring.md",
            "LeetCode/palindrome.md",
            "LeetCode/array.md",
            ],
    ]
)

deploydocs(
    repo = "github.com/auxetic/wiki",
    target = "build",
    #  julia = "0.6",
    deps = nothing,
    make = nothing,
)
