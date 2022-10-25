// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { Task } from '../Task';

// @Injectable({
//   providedIn: 'root',
// })
// export class TaskItemService {
//   private apiUrl = 'http://localhost:5000/tasks';

//   constructor(private http: HttpClient) {}

//   getTask(): Observable<Task[]> {
//     return this.http.get<Task[]>(this.apiUrl);
//   }
// }

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskItemService {
  constructor(private angularFirestore: AngularFirestore) {}

  getTaskList() {
    return this.angularFirestore.collection('Todo').snapshotChanges();
  }

  getTask(id: string) {
    this.angularFirestore.collection('Todo').doc(id).valueChanges();
  }

  createTask(task: Task) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('Todo')
        .add(task)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  deleteTask(task: Task) {
    return this.angularFirestore.collection('Todo').doc(task.id).delete();
  }

  updateTask(task: Task, id: string) {
    return this.angularFirestore.collection('Todo').doc(id).update({
      text: task.text,
      day: task.day,
      reminder: task.reminder,
    });
  }

  reminderUpdate(task: Task) {
    return this.angularFirestore.collection('Todo').doc(task.id).update({
      reminder: !task.reminder,
    });
  }
}
