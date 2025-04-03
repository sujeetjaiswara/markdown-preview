import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { marked } from 'marked';
import { SafeHtmlPipe } from "../shared/pipes/safe-html.pipe";

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatIconModule, SafeHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  inputContent: string = '';
  outputContent: string =
    `<mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="home"></mat-icon>`;

  async onInputText() {
    const html = await marked.parse(this.inputContent);
    this.outputContent = html;
  }
}
