# Array

## Rm duplicates A
Remove duplicates from **Sorted** array
```julia
x = sort(rand(1:4,10))
function rmdup!(x)
    idx = 1
    for i in 2:length(x)
        if x[idx] != x[i]
            idx += 1
            x[idx] = x[i]
        end
    end
    idx
end
```

## Rm duplicates B
Fellow up probrem, add allow elements duplicate once.
```julia
function rmdup!(x)
    idx = 2
    for i in 3:length(x)
        if x[idx-1] != x[i]
            idx += 1
            x[idx] = x[i]
        end
    end
    idx
end
```

## Search array
`x` is a sorted array and circle shift 3 index, find the target value and give its idx.
```julia
x = [1:10;]
x = circshift(x,3)

function findta(x,ta)
    n1 = 1
    n3 = length(x)
    while n3 >= n1
        n2 = (n1+n3) >> 1
        x[n2] == ta && return n2

        if x[n2] >= x[n1]
            if x[n2] >= ta >= x[n1]
                n3 = n2
            else
                n1 = n2 + 1
            end
        else
            if ta>=x[n1] || ta<=x[n2]
                n3 = n2
            else
                n1 = n2 + 1
            end
        end
    end
    -1
end
```
