class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n=len(grid)
        vis=[[False for i in range(n)] for row in range(n)]
        a,b=0,0
        for row in grid:
            for cell in row:
                if vis[int(cell/n)][cell%n]:
                    b=cell
                else:
                    vis[int(cell/n)][(cell-1)%n]=True
        for i in range(n):
            for j in range(n):
                if vis[i][j]==False:
                    a=i*n+j+1
                    break
        return [a,b]

import random

def generate_matrix(n):
    numbers = list(range(1, n * n + 1))
    missing_number = random.choice(numbers)
    numbers.remove(missing_number)
    
    repeated_number = random.choice(numbers)
    numbers.append(repeated_number)  # Duplicate the chosen number
    
    random.shuffle(numbers)
    
    matrix = [numbers[i * n:(i + 1) * n] for i in range(n)]
    return matrix, missing_number, repeated_number

matrix, missing, repeated = generate_matrix(50)

for row in matrix:
    print(row)

print("\nMissing Number:", missing)
print("Repeated Number:", repeated)
