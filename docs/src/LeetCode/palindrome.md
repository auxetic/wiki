# Palindrome

determine if a integer or string is palindrome.

## Integer
```julia
function ispa(x::T) where T <: Signed
    @assert(x>0)
    y = x
    z = zero(x)
    while y != 0
        z = 10 * z + y%10
        y = floor(T,y/10)
    end
    z == x
end

using Test
@testset "integer" begin
    @test ispa(1)   == true
    @test ispa(11)  == true
    @test ispa(12)  == false
    @test ispa(121) == true
    @test ispa(122) == false
    @test_throws MethodError ispa(1.0)
    @test_throws AssertionError ispa(-11)
end
```

## String
```julia
function ispa(x::String)
    i = 1
    j = length(x)
    while i <= j
        !( isnumeric(x[i]) || isalpha(x[i]) ) && (i += 1)
        !( isnumeric(x[j]) || isalpha(x[j]) ) && (j -= 1)
        x[i] != x[j] && return false
        i += 1; j -= 1
    end
    return true
end

using Test
@testset "string" begin
    @test ispa("121")   == true
    @test ispa("aba")   == true
    @test ispa("abc")   == false
    @test ispa("a,b.a") == true
end
```

