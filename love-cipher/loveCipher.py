data=[
    "Love",
    "lOve",
    "loVe",
    "lovE",
    "LOve",
    "LoVe",
    "LovE",
    "LOVe",
    "LoVE",
    "LOvE"
]
#encryption
def encryptor(char):
    print(".".join([data[int(i)]for i in str(ord(i))]),end="{^_*}")

t = input("Enter message:-")

for i in t:
    if(i.isdigit()):
        print("[%s"%data[int(i)],end="{^_*}")
    elif(i.isalpha()):
        encryptor(i)
    else:
        print("<{}".format(i),end="{^_*}")

#decryption
dt = input("\nEnter Encrypted message:- ").strip("{^_*}").split("{^_*}")
for i in dt:
    if("["in i):
        print(data.index(i[1:]),end="")
    elif("<"in i):
        print(i[1:],end="")
    else:
        ch=""
        for j in i.strip('.').split('.'):
            ch+=str(data.index(j))
        print(chr(int(ch)),end="")
        pass

'''
Enter message:-0123456789
[Love{^_*}[lOve{^_*}[loVe{^_*}[lovE{^_*}[LOve{^_*}[LoVe{^_*}[LovE{^_*}[LOVe{^_*}[LoVE{^_*}[LOvE{^_*}
Enter Encrypted message:- [Love{^_*}[lOve{^_*}[loVe{^_*}[lovE{^_*}[LOve{^_*}[LoVe{^_*}[LovE{^_*}[LOVe{^_*}[LoVE{^_*}[LOvE{^_*}
0123456789

Enter message:-abcdefg !@#$% ABCDEFG
LOvE.LOVe{^_*}LOvE.LoVE{^_*}LOvE.LOvE{^_*}lOve.Love.Love{^_*}lOve.Love.lOve{^_*}lOve.Love.loVe{^_*}lOve.Love.lovE{^_*}< {^_*}<!{^_*}<@{^_*}<#{^_*}<${^_*}<%{^_*}< {^_*}LovE.LoVe{^_*}LovE.LovE{^_*}LovE.LOVe{^_*}LovE.LoVE{^_*}LovE.LOvE{^_*}LOVe.Love{^_*}LOVe.lOve{^_*}
Enter Encrypted message:- LOvE.LOVe{^_*}LOvE.LoVE{^_*}LOvE.LOvE{^_*}lOve.Love.Love{^_*}lOve.Love.lOve{^_*}lOve.Love.loVe{^_*}lOve.Love.lovE{^_*}< {^_*}<!{^_*}<@{^_*}<#{^_*}<${^_*}<%{^_*}< {^_*}LovE.LoVe{^_*}LovE.LovE{^_*}LovE.LOVe{^_*}LovE.LoVE{^_*}LovE.LOvE{^_*}LOVe.Love{^_*}LOVe.lOve{^_*}
abcdefg !@#$% ABCDEFG
'''

'''
Enter message:-0123456789
[Love{^_*}[lOve{^_*}[loVe{^_*}[lovE{^_*}[LOve{^_*}[LoVe{^_*}[LovE{^_*}[LOVe{^_*}[LoVE{^_*}[LOvE{^_*}

Enter message:-abcdefg !@#$% ABCDEFG
LOvE.LOVe{^_*}LOvE.LoVE{^_*}LOvE.LOvE{^_*}lOve.Love.Love{^_*}lOve.Love.lOve{^_*}lOve.Love.loVe{^_*}lOve.Love.lovE{^_*}< {^_*}<!{^_*}<@{^_*}<#{^_*}<${^_*}<%{^_*}< {^_*}LovE.LoVe{^_*}LovE.LovE{^_*}LovE.LOVe{^_*}LovE.LoVE{^_*}LovE.LOvE{^_*}LOVe.Love{^_*}LOVe.lOve{^_*}
'''