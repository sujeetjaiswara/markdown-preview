import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-nav',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  async shareContent(title: string, text: string, url: string) {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
        // Handle the error (e.g., show a message to the user)
      }
    } else {
      // Web Share API is not supported, provide fallback options
      console.log('Web Share API not supported, using fallback.');
      this.fallbackShare(title, text, url); // Call your fallback function
    }
  }

  fallbackShare(title: string, text: string, url: string) {
    this.copyToClipboard(url);
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text copied to clipboard');
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy, please copy manually');
    }
  }
}
