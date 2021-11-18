import { QueryDocumentSnapshot, SnapshotOptions, DocumentReference } from 'firebase/firestore';

export default {
  fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions) {
    const user = snapshot.data(options);
    const scores: string[] = [];

    user.scores.forEach((scoreRef: DocumentReference) => {
      scores.push(scoreRef.path);
    });

    user.scores = scores;

    return user;
  },
};