// flatten object with nested _ eg user_address_personal_location = "bettiah"

const user = {
  name: {
    firstName: "Utkarsh",
    lastName: "Bhardwaj",
  },
  age: "17",
  address: {
    personal: {
      location: "bettiah",
      state: "bihar",
    },
    office: {
      location: "bangalore",
      state: "karnataka",
    },
  },
};
console.log(typeof user);
const flattenUser = {};
function mapObjectKey(obj, propertyKey) {
  for (key in obj) {
    if (typeof obj[key] === "object") {
        // propertyKey = propertyKey +"_" + key ==> WRONG it will modify all the key value
      mapObjectKey(obj[key], propertyKey +"_" + key);
    } else {
      flattenUser[propertyKey +"_"+ key] = obj[key];
    }
  }
}
mapObjectKey(user, "user");
console.log(flattenUser);
