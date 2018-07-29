## 自动微分

函数求导是一件很常见的数学操作。在我们已知函数形式的情况下，如何通过计算机求函数的导数呢？
很容易想到的是以下两种方法：
* 根据求导规则进行符号计算， ``\sin'(x) = \cos(x)``
* 通过差分计算， ``[\sin(x+h)-\sin(x)]/h``

这里，

```julia
mutable struct Dual <: Number
    v::Float64
    d::Float64
end

import Base: +, -, *, /, show

Base.show(io::IO,x::Dual) = print("$(x.v) + $(x.d)ϵ")

(+)(x::Dual, y::Dual) = Dual(x.v+y.v, x.d+y.d)
(-)(x::Dual, y::Dual) = Dual(x.v-y.v, x.d-y.d)
(*)(x::Dual, y::Dual) = Dual(x.v*y.v, x.v*y.d+x.d*y.v)
(/)(x::Dual, y::Dual) = Dual(x.v/y.v, (x.d*y.v-x.v*y.d)/y.v/y.v)
convert(::Type{Dual}, x::Real) = Dual(x,zero(x))
promote_rule(::Type{Dual}, ::Type{<:Number}) = Dual
```

    
