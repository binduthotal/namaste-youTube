# Debouncing:

- typing slow = 200ms
- typing fast = 30ms

Performance:
 - iphone max pro = 14 letters * 1000 members typing at same time = 14000 API calls for each key stroke.
 - With debouncing we can make 3 API calls * 1000 = 3000 API calls for each key stroke

 Debouncing with 200ms
 - If difference between 2 key strokes is < 200ms - Decline API call
 - > 200ms - make an API call


 # cache:

 []