import { Component, VERSION } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  passRequirement = {
    passwordMinLowerCase: 1,
    passwordMinNumber: 1,
    passwordMinSymbol: 2,
    passwordMinUpperCase: 1,
    passwordMinCharacters: 8
  };
  pattern = [
    `(?=([^a-z]*[a-z])\{${this.passRequirement.passwordMinLowerCase},\})`,
    `(?=([^A-Z]*[A-Z])\{${this.passRequirement.passwordMinUpperCase},\})`,
    `(?=([^0-9]*[0-9])\{${this.passRequirement.passwordMinNumber},\})`,
    `(?=(\.\*[\$\@\$\!\%\*\?\&])\{${
      this.passRequirement.passwordMinSymbol
    },\})`,
    `[A-Za-z\\d\$\@\$\!\%\*\?\&\.]{${
      this.passRequirement.passwordMinCharacters
    },}`
  ]
    .map(item => item.toString())
    .join("");
  resetPwdForm = this.fb.group({
    newpwdctrlname: [
      "Passwod1@@5",
      [Validators.required, Validators.pattern(this.pattern)]
    ],
    shownewpwdctrlname: ["", []],
    rptpwdctrlname: ["", [Validators.required]]
  });
  constructor(private fb: FormBuilder) {}
}
