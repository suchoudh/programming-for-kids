# increment the first of a list
#   [1,2,3,4]
# returns:
#   [2,2,3,4]
def increment(x):
    r = []

    for i in range(len(x)):
        v = x[i]
        if i == 0:
            v += 1
        r.append(v)

    return r


print(increment([1, 1, 2, 3, 3, 4, 1, 2, 7, 1]))
