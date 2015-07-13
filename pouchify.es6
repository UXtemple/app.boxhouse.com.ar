import invariant from 'invariant';
import PouchDB from 'pouchdb';

export default function pouchify(reducer, {map={}, replicate, name=reducer.name}) {
  invariant(name, 'missing database name');

  const db = new PouchDB(name);
  // // TODO Do we even need this now?
  // // TODO How do we deal with inconsistences? Actions can't be triggered here.
  // // Related to (*)
  // // As Sven said, what about returning the db altogether?
  // db.changes().on('change', ::console.log);

  if (replicate) {
    db.replicate.to(replicate);
  }

  return function(state = db, action) {
    const newState = reducer(await state.allDocs().rows, action);

    // TODO I wonder how gets will happen though?
    // Maybe through a different treatment? (*)
    // What happens with more abstract stuff?
    //
    // TODO Like lists or things like it? Wouldn't it all be a put then?
    db[map[action.type]](newState);

    return db;
  }
}

const OPERATIONS = {
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update'
};
export OPERATIONS;
