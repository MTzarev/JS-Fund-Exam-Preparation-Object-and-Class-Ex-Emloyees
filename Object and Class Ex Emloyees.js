function employees(input) {
    class Student {
        constructor(name, id){
        this.name=name;
        this.id=id;
    }
    finalList(){
        console.log(`Name: ${this.name} -- Personal Number: ${this.id}`);
    }
}
    let listStudent = []
    for (let i=0; i<input.length; i++){
        let name = input[i];
        let id = name.length;
        let curStudent=new Student(name, id);
        listStudent.push(curStudent)
    }
    listStudent.forEach(el=>el.finalList())
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );