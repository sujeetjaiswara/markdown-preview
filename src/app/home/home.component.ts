import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  inputContent: string = '';
  outputContent: string = '';

  async onInputText() {
    const html = await marked.parse(this.inputContent, {
      // async: true,
      // pedantic: false,
      // gfm: true,
    });
    this.outputContent = html;
  }
}
