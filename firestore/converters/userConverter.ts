import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, DocumentReference } from 'firebase/firestore';
import { User, Score } from '../../types';

export default {
  toFirestore(user: User): DocumentData {
    return {
      id: user.id,
      username: user.username,
      scores: user.scores
    };
  },

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