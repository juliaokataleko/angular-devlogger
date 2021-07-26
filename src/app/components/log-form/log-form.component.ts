import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private _logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedlog observable
    this._logService.selectedLog.subscribe(log => {
      if(log.id != null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }    
    })
  }

  onSubmit() {
    // Check if is new log
    if(this.isNew) {
      // Create a new log
      const newLog = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      };

      // Add log
      this._logService.addLog(newLog);
    } else {
      // Update log
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date()
      };

      this._logService.updateLog(updLog);
    }  

    // Clear state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = null;
    this.text = null;
    this.date = null;
    this._logService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
