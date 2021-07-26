import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private _logeService: LogService) { }

  ngOnInit() {

    this._logeService.stateClear.subscribe(clear => {
      if(clear) {
        this.selectedLog = {
          id: '',
          text: '',
          date: ''
        };
      }
    })
    // Sincronouslly
    // this.logs = this._logeService.geLogs();

    // Assincronous
    this._logeService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    })
  }

  onSelect(log: Log) {
    this._logeService.setFormLog(log); 
    this.selectedLog = log; 
  }

  onDelete(log: Log) {
    if(confirm("Are you sure?")) {
      this._logeService.deleteLog(log);
    }
  }

}
