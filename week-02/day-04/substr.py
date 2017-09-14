# Find part of an integer

# Create a function that takes two strings as a parameter
# Returns the starting index where the second one is starting in the first one
# Returns -1 if the second string is not in the first one
# Example

# input: "this is what I'm searching in", "searching"
# output: 17

def finder (input_string, output_string):
    return input_string.find(output_string)

print(finder("this is what I'm searching in", "searching"))