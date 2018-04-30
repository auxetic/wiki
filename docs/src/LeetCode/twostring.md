# String

## test

### add and product of two numeric string

```julia
#!/usr/bin/env julia

function s_add(s1::String, s2::String)

    !( all(isnumeric,s1) && all(isnumeric,s2) ) && error("xx")

    l1 = length(s1)
    l2 = length(s2)
    l  = max(l1,l2) + 1
    v  = zeros(Int8,l)
    
    for i in 1:l-1
        x1 = i<=l1 ? s1[l1+1-i] - '0' : 0
        x2 = i<=l2 ? s2[l2+1-i] - '0' : 0
        x = x1 + x2
        if x >= 10
            v[l+1-i] += x - 10
            v[l-i]   += 1
        else
            v[l+1-i] += x
        end
    end

    v[1] != 0 ? reduce(*,string.(v)) : reduce(*,string.(v[2:end]))

end
```

```julia
function s_mul(s1::String, s2::String)

    !( all(isnumeric,s1) && all(isnumeric,s2) ) && error("xx")

    l1 = length(s1)
    l2 = length(s2)
    l  = l1 + l2
    v  = zeros(Int8,l)
    
    for i1 in 1:l1
        x1 = s1[l1+1-i1] - '0'
        for i2 in 1:l2
            x2 = s2[l2+1-i2] - '0'
            v[l+2-i1-i2] += x1 * x2
        end
    end

    for i in l:-1:1
        x = v[i]
        if x>10
            v[i]    = x%10
            v[i-1] += floor(Int8,x/10)
        end
    end

    v[1] != 0 ? reduce(*,string.(v)) : reduce(*,string.(v[2:end]))

end
```

```julia
using Test

@testset "s_add" begin
    @test s_add("1","2") == "3"
    @test s_add("1","9") == "10"
    @test s_add("11","99") == "110"
    @test_throws ErrorException s_add("a","2")
end

@testset "s_mul" begin
    @test s_mul("2","3") == "6"
    @test s_mul("3","7") == "21"
    @test_throws ErrorException s_mul("a","2")
end
``` 
