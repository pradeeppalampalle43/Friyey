
var dbPromise = idb.open('posts-store', 1, function (db) {
  if (!db.objectStoreNames.contains('posts')) {
    db.createObjectStore('posts', {keyPath: 'postId'});
  }
  if (!db.objectStoreNames.contains('authentication')) {
    db.createObjectStore('authentication', {keyPath: 'jwttoken'});
  }
});

function writeData(st, data) {
  console.log('inside write data');
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.put(data);
      return tx.complete;
      console.log('transaction complete');
    });
    console.log('transaction complete');
}

function readAllData(st) {
  console.log('inside readall');
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readonly');
      var store = tx.objectStore(st);
      console.log(store);
      return store.getAll();
    })
    .catch((er) =>{
      console.log(er);
    });
}

function clearAllData(st) {
  return dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.clear();
      return tx.complete;
    });
}

function deleteItemFromData(st, id) {
  dbPromise
    .then(function(db) {
      var tx = db.transaction(st, 'readwrite');
      var store = tx.objectStore(st);
      store.delete(id);
      return tx.complete;
    })
    .then(function() {
      console.log('Item deleted!');
    });
}