# find missing elements from given array
 # - need to sort :asc order
 # - work on sorted array:do analysis and store missing elements : in ietretaion we chaeck current and prve element, if diff between them is greater than 1 means we conclue there are missing elements

 # breakdown of problem /steps :
    # The findMissingElements function aims to find the "missing" numbers in an array. Specifically, it identifies numbers that are expected to be in a sequence but are absent. 
    #  Sorting the Array:asc order
    #  Initialize the missing Array
    # Check if 1 is Missing at the Beginning:
       # -The next block checks if 1 is missing from the sequence. If arr[0] (the first element of the sorted array) is not equal to 1, it adds 1 to the beginning of the missing array using unshift(). This ensures that if the sequence starts from a number greater than 1, 1 is included as a missing element.
      # -Loop to Find Gaps Between Consecutive Elements: 
        # The for loop iterates through the array, comparing each element with the next element (arr[i] and arr[i + 1])
        # If a gap is found, it means there is at least one missing element between arr[i] and arr[i + 1]
        #  if arr[i] is 3 and arr[i + 1] is 5, there is a missing number (4), and arr[i + 1] - 1 (i.e., 5 - 1 = 4) is added to the missing array