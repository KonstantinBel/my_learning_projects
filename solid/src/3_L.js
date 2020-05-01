 // Liskov substitution principle

 // Функции, которые используют базовый тип,
 // должны иметь возможность корректно использовать
 // подтипы базового типа, не зная об этом.

// Нарушение принципа
// class Person {
//   access() {
//     console.log('You have access')
//   }
// }

// class Frontend extends Person {
//   canCreateFrontend() {}
// }

// class Backend extends Person {
//   canCreateBackend() {}
// }

// class PersonFromDifferentCompany {
//   access() {
//     console.log('Access denied')
//   }
// }

// function openSecretDoor(person) {
//   person.access()
// }

// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // функция будет не верно работать если доступ запрещен

// Соблюдение принципа
class Person {}

class Member extends Person {
  access() {
    console.log('You have access')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    console.log('Access denied')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany()) // теперь функция работает только с Member
