# ЗАДАНИЕ 4

Успел только сделать схему в Postgres
Всё работает через graphql

Mongo не успел.


```
query {
  levels {
    _id
    name
  }
  
  groups {
    _id
    name
    shortName
    levelId
  }
}

mutation {
  createLevel2(input: { name: "name111" }) {
    name
  }
}

mutation {
  createGroup(input: { name: "name111", shortName: "short123", levelId: "618a13052378b622d09aab89" }) {
    _id
    name
    shortName
  }
}



```