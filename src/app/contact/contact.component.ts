import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab, faTwitter,faFacebook,faGithub,faLinkedin,faSkype,faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(library: FaIconLibrary) { 
    library.addIconPacks(fab);
    library.addIcons(faTwitter);
    library.addIcons(faFacebook);
    library.addIcons(faGithub);
    library.addIcons(faLinkedin);
    library.addIcons(faSkype);
    library.addIcons(faInstagram);
  }

  ngOnInit(): void {
  }

  submit(){
    console.log("submitting form");
    let form = <HTMLFormElement>document.getElementById("contact-form");
    form.submit();
  }
}
