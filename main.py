# def chunk(arr,num):
#     list1=[]
#     for i in range(0,len(arr),num):
#         list1.append(arr[i:i+num])
#     return list1

# print(chunk([1,2,3,4],2))

# function mutation(arr) {
# //     return arr[1].toLowerCase().split("").every(a=>arr[0].toLowerCase().indexOf(a)!=-1)}
  
# // console.log(mutation(["hello", "Hello"]))

# def mutation(arr):
#     if list(map(lambda a:arr[0].lower().index(a)!=-1,list(arr[1].lower()))):
#         return True
#     else:
#         return False
# print(mutation(["hello", "Hello"]))

# # print(list('haari'))

# def letter(str,num):
#     return list(map(lambda a:a.replace(a[0],a[0].upper()),str.split()))
# print(letter(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
# def fun(a):
#     return a.replace(a.char(0),a.char(0).upper())   

# def fun(arr1,arr2,n):
#     return arr2.insert(n,''.join(map(str,arr1)))

# print(fun([1, 2], ["a", "b"], 1))

# def falsy(val):
#     if val:
#         return True
#     return Falsegjj
# print(falsy(0))


# def GetIndex(arr,n):
# #     arr1=arr.sort()
# #     for i in arr1:
#         if i>=n:
#             return arr.index(i)
#     # return i
# print(GetIndex([5,3,20,3],5))


# class myClass():
#     def __init__(self):
#         self.name='haari'
#         self.age=20
# stud=myClass()
# print(stud.keys(),)

# test=list(map(int,input('enter').split()))
test=input().split()
print(test)