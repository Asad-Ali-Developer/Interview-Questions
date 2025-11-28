arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9]

def to_get_most_repeated_and_count(arr):
    count = {}
    max_count = arr[0]
    max_num = 0
    
    for num in arr:
        count[num] = count.get(num, 0) + 1
        if count[num] > max_count:
            max_count = count[num]
            max_num = num
    
    return {"maxNum": max_num, "maxCount": max_count}

print(to_get_most_repeated_and_count(arr))