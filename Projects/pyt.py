facing = [[0,1],[1,0],[0,-1],[-1,0]] # N, E, S, W
d = 0
res = 0
obstacle = {tuple(o) for o in facing}

print(obstacle)
for o in obstacle:
    print(type(o))