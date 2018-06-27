# Heap

## find n largest numbers of given array.
- Use julia's DataStructures library.
```julia
using DataStructures

x = rand(1000);
nlargest(10,x)
```
- Use numpy's partial sort
```python
import numpy as np

x = np.random.rand(1000);
np.argpartition(x, -10)[-10:]
```
