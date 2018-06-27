# Hash

## Group anagrams
Given an array of strings, like ["tan", "nat", "ant", "abc", "cc", "bca" ], return:
```
[
    ["tan", "nat", "ant"],
    ["abc", "bca"],
    ["cc"]
]
```
```julia
mutable struct Stringhash
    s::String
    h::Set
    hit::Bool
end

function dictgroup(sarray::Vector{String})

    result = Vector{String}[]

    sst = Stringhash[]
    for si in sarray
        push!(sst,Stringhash(si,Set([si...]),false))
    end

    for i in 1:length(sst)
        sst[i].hit == true && continue

        rtemp = String[]
        push!(rtemp,sst[i].s)

        for j in i+1:length(sst)
            if sst[i].h == sst[j].h
                sst[j].hit = true
                push!(rtemp,sst[j].s)
            end
        end

        push!(result,rtemp)
    end

    return result

end
```
