import { Component, OnInit } from '@angular/core';
import { SHA256, enc } from 'crypto-js';
import { ContactForm } from '../contact-form';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: [
    `
      .animateClass {
        -webkit-transition: opacity 0.3s ease-in-out;
        -moz-transition: opacity 0.3s ease-in-out;
        -ms-transition: opacity 0.3s ease-in-out;
        -o-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
      }
    `,
  ],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  public timestamp: any;
  gameModel = new ContactForm('', '', '')
  public value = 0;

  public projects = [
    {
      img: '../../assets/svg/verum.svg',
      link: 'https://verum.capital',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/crazynft.svg',
      link: 'https://crazynft.tech',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/bnbchain.svg',
      link: 'https://bnbchain.world',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/diceinu.svg',
      link: 'https://diceinu.com',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/metafurkitties.svg',
      link: 'https://metafurkitty.com',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/angular-ethers.svg',
      link: 'https://github.com/shaansundar/Angular-Ethers-Hardhat-Template',
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/github.svg',
      link: 'https://github.com/shaansundar',
      isOpen: false,
      length: false,
    },
  ];

  ngOnInit(): void {
    this.timestamp = new Date();
  }

  onChange(e:any) {
    const hashedPass = String(
      Math.round(
        parseInt(
          '0x' + SHA256(e.target.value + this.timestamp).toString(enc.Hex)
        ) /
          10 ** 67
      )
    );
    for (let i = 0; i < this.projects.length; i++) {
      parseInt(hashedPass[i]) % 2 == 0
        ? (this.projects[i].isOpen = true)
        : (this.projects[i].isOpen = false);
    }
  }
}
