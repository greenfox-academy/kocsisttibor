# Create a method that find the 5 most common lottery numbers otos.csv

def gathering():
    with open("hatos.txt", "r") as f:
        lines = f.read().splitlines()
    numbers = []
    for line in lines:
        parts = line.split("Ft;")
        for i in parts[-1].split(";"):
            numbers.append(i)
    return numbers

def counting():
    numbers = gathering()

    for i in range(len(numbers)):
        numbers[i] = str(numbers.count(numbers[i])) + "(" + str(numbers[i]) + ")"

    numbers.sort()

    print("Top five numbers: " + numbers[-1] + ", "+ numbers[-2] + ", "+ numbers[-3] + ", "+ numbers[-4] + ", "+ numbers[-5])

counting()