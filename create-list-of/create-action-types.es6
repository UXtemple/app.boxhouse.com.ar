export default function createActionTypes(stuff) {
  return {
    add: `${stuff}_LIST:ADD`,
    remove: `${stuff}_LIST:REMOVE`
  };
}
