// lmedium1-8.js

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

//messWithDemographics(munsters);

console.log(Object.values(munsters));

/* No, because the forEach() method was working on a new array
that was created by Object.values() and not the object munsters

Don't understand the solution... isn't forEach now working on a
different array?

Posted the question in discussion and now the solution makes
sense. Object.values does return a new array, but this array
also holds references to the subobjects in munsters; therefore,
forEach is working on the same objects that are referenced by
munsters, mutating it. */