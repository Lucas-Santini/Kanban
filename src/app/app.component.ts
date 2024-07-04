import { Component } from '@angular/core';

interface Tarefa {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  availableTasks: Tarefa[] = [
    { name: 'Tarefa 1' },
    { name: 'Tarefa 2' },
    { name: 'Tarefa 3' },
  ];
  inProgressTasks: Tarefa[] = [];
  testingTasks: Tarefa[] = [];
  completedTasks: Tarefa[] = [];

  draggedTask: { task: Tarefa, sourceList: string } | null = null;

  dragStart(task: Tarefa, sourceList: string) {
    this.draggedTask = { task, sourceList };
  }

  dragEnd() {
    this.draggedTask = null;
  }

  drop(targetList: string) {
    if (this.draggedTask) {
      const { task, sourceList } = this.draggedTask;

      // Remove o item da lista de origem
      this[sourceList] = this[sourceList].filter(t => t !== task);

      // Adiciona o item à lista de destino
      this[targetList] = [...this[targetList], task];

      this.draggedTask = null;
    }
  }
}
