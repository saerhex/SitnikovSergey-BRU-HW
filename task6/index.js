const testObj = {
  cars: {
    ford: {
      make: 'Ford',
      model: 'Mustang',
      year: 1969
    },
    fiat: {
      type: "Fiat",
      model: "500",
      color: "white"
    }
  },
  name: "Sergey",
  age: 19,
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
    name: 'Jack',
    address: {
      line1: 'westwish st',
      line2: 'washmasher',
      city: 'wallas',
      state: 'WX'
    }
  }
}


const notNested = (item) => {
  return typeof item !== "object"
}

const deepcopy = (item) => {
  let newObj = {}

  if (notNested(item)) {
    return item
  }

  for (let key in item) {
    if (item.hasOwnProperty(key)) {
      const value = item[key]
      newObj[key] = deepcopy(value)
    }
  }

  return newObj
}

const destObj = {...testObj}
const newObj = deepcopy(testObj)
console.log(destObj.toString() === newObj.toString())