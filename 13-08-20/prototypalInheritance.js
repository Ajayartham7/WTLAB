function Person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}

const p1=new Person("Chillar","Charan")
p1.rollNo=6710;
document.getElementById("demo").textContent="First Name : "+p1.fname+" Last Name : "+p1.lname+" Roll No : "+p1.rollNo;