# ЗАДАНИЕ 4.1 mongo

На текущий момент, 10 ноября, утро, реализованы таблицы без связей друг с другом.




```
Это записи чтобы не набирать второй раз, 
потому что работаю с двух компьютеров поочерёдно.

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