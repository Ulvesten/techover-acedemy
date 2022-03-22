const Memberships = ["Guld 249kr/mån","Pensionär 199kr/mån","Student 219kr/mån","Ordinare 249kr/mån"];
console.log(Memberships)
UserMemberChoice = 
prompt("Vänligen välj följande medlemskap i listan?",
"1=Guld,2 Pensionär,3= Student, 4 = Ordinare")
console.log(Memberships[UserMemberChoice-1]);  