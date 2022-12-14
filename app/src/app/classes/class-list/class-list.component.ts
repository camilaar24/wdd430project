import { Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import { Class } from '../class.model';
import { ClassService } from '../class.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, OnDestroy {
  @Output() selectedClassEvent = new EventEmitter();
  subscription: Subscription;

  classes: Class[] = [];

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.classes = this.classService.getClasses();
    this.subscription = this.classService.classChangedEvent.subscribe(
      (classes: Class[]) => {
        this.classes = classes;
      }
    );
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
