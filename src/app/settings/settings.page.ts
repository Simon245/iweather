import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  currentLocation = '';
  constructor(private storageService: StorageService) {
    this.storageService.get('location').then((val: string) => {
      if (val !== null) {
        this.currentLocation = val;
      }
    });
  }

  saveForm() {
    this.storageService.set('location', this.currentLocation);
  }
}
