import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items: { title: string, content: string }[] = [
    {title: 'Why is the sky blue?', content: 'The sky is blue because...drumroll, please...it just is.'},
    {title: 'What does an orange taste like?', content: 'An orange tastes like an orange...duh!'},
    {title: 'What color is that cat?', content: 'The cat is an orange color.'}
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
