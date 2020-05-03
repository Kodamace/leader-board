### Tasks:

## Create Leaderboard component

###

create deleteall function in services

then create a delete button

then import delete button to contestant display as this is where all contestants are

implement this code:
db.collection('contestants').getDocuments().then((snapshot) {
for (DocumentSnapshot ds in snapshot.documents){
ds.reference.delete();
});
});

db.collection('contestants').getDocuments().then((snapshot) {
for (DocumentSnapshot doc in snapshot.documents) {
doc.reference.delete();
});
});

something like this:
const deleteAllContestants = async (id) => {
try {
await db.collection('contestants').getDocuments().delete()
} catch (ex) {
alert('Something bad happened')
console.log(ex)
}
}
