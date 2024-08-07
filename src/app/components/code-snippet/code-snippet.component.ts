import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-code-snippet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './code-snippet.component.html',
  styleUrl: './code-snippet.component.css',
})
export class CodeSnippetComponent {
  tittle = new FormControl('', [Validators.required]);

  code = new FormControl('', [Validators.required]);

  codeForm = new FormGroup({ tittle: this.tittle, code: this.code });

  save() {
    console.log(this.codeForm.value);
    this.codeForm.reset();
  }
}
