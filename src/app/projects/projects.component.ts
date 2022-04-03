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
  public claimStatus = false;
  public showData = -1;
  public popUpOpen = false;
  public timestamp: any;
  gameModel = new ContactForm('', '', '');
  public value = 0;

  public projects = [
    {
      img: '../../assets/svg/verum.svg',
      name: 'Verum Capital',
      link: 'https://verum.capital',
      desc: 'Verum Capital AG is a leading blockchain advisory boutique based in Zurich, Switzerland. Founded in 2018, the company has managed landmark strategic projects that use blockchain to bring tangible benefits to organizations and create valuable new business opportunities.',
      work: 'Working as a full stack web3 consultant, covering the frontend and blockchain requirements of various high profile projects and clients.',
      fields: [
        'Frontend Engineering',
        'Smart Contract Engineering',
        'Contract Vulnerability Testing',
        'DApp Architect & Planner',
        'UI/UX Designing',
        'Blockchain Research',
      ],
      tech: [
        'Angular',
        'Ethers',
        'Solidity',
        'LucidSpark',
        'Mocha & Chai',
        'Figma',
        'Hardhat',
      ],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/crazynft.svg',
      name: 'CrazyNFT',
      link: 'https://crazynft.tech',
      desc: "CrazyNFT is a free, easy to use and the least of all intimidating NFT marketplaces designed for absolute beginners in the cryptospace.",
      work: 'Along with a team of 15 enthusiastic engineers, I built up a successful prototype and won two hackathons with the same. Also got a chance to collaborate with brilliant minds all around the world in the process of validation and building a MVP',
      fields: [
        'Business Management & Development',
        'Marketing',
        'Technical Operations',
        'Smart Contract Engineering',
        'DApp Architect & Planner',
        'Blockchain Research',
      ],
      tech: ['NextJS', 'React', 'Web3', 'Solidity', 'Figma', 'Hardhat'],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/bnbchain.svg',
      name: 'Binance',
      link: 'https://bnbchain.world',
      desc: 'Binance is the world’s leading blockchain and cryptocurrency infrastructure provider with a financial product suite that includes the largest digital asset exchange by volume.',
      work: 'Handled the development of buildnbuild.dev whilst helping produce technical content for Campus Builder, Bootcamp and other in-house programs. Also managed the technical sides of various Discord & Telegram communities',
      fields: [
        'Frontend Engineering',
        'Marketing',
        'Technical Operations',
        'Blockchain Research',
        'Community Building',
        'Technical Course & Content creation',
      ],
      tech: ['DiscordJS', 'Angular', 'Ethers'],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/genki-logo.svg',
      name: 'Genki',
      link: 'https://genki.io',
      desc: 'Genki is a A web 3.0 community on-ramp platform for marketing rails. It focuses on making seamless Referal System, Curator DAO, and Social Graph Analysis',
      work: 'Developed the landing page, and helped shape the initial prototype & ideation phases of the product',
      fields: [
        'Frontend Engineering',
        'Business Management & Development',
        'Blockchain Research',
      ],
      tech: ['Angular'],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/diceinu.svg',
      name: 'DiceInu',
      link: 'https://diceinu.com',
      desc: 'DiceINU is a play2earn roll-a-die game on BNB Chain. It allows users to instantly 2x their bet against the house',
      work: 'Developed the Smart Contracts on which, the game runs on',
      fields: ['Smart Contract Engineering'],
      tech: ['Solidity', 'Chai & Mocha', 'Hardhat'],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/metafurkitties.svg',
      name: 'MetafurKitties',
      link: 'https://metafurkitty.com',
      desc: 'MetaFurKitty is the first of nine NFT releases by SolarcatzShelley on the Cardano proof-of-stake blockchain platform. The cats were made ready for adoption February 2022.',
      work: 'Researched and curated feasible ways to develop a NFT collection on the Cardano Blockchain',
      fields: ['Blockchain Research'],
      tech: ['Plutus', 'Haskell'],
      isOpen: false,
      length: false,
    },
    // {
    //   img: '../../assets/svg/angular-ethers.svg',
    //   link: 'https://github.com/shaansundar/Angular-Ethers-Hardhat-Template',
    //   isOpen: false,
    //   length: false,
    // },
    {
      img: '../../assets/svg/campk12.svg',
      name: 'CampK12',
      link: 'https://campk12.com/',
      desc: 'Camp K12 is the #1 platform for online coding courses for kids, by MIT/Harvard alumnus. It is the pioneer of coding classes for kids and have empowered a new generation of creators since 2010.',
      work: 'Worked as a technical instructor of Javascript to implement, visualize and elaborate the idea of Machine learning & VR Development to Kids from age 10-17',
      fields: ['Technical Instructor', 'Marketing'],
      tech: ['Vanilla Javascript'],
      isOpen: false,
      length: false,
    },
    {
      img: '../../assets/svg/photomath.svg',
      name: 'Photomath',
      link: 'https://photomath.com/en/',
      desc: "Photomath is a mobile application that utilizes a smartphone's camera to scan and recognize mathematical equations; the app then displays step-by-step explanations onscreen. It is available for free on both Android and iOS",
      work: 'As a Math Expert, I took the responsibility to solve elementary mathematic problems for internal development purposes',
      fields: ['Research in Mathematics'],
      tech: ['LaTeX'],
      isOpen: false,
      length: false,
    },
    // {
    //   img: '../../assets/svg/github.svg',
    //   link: 'https://github.com/shaansundar',
    //   isOpen: false,
    //   length: false,
    // },
  ];

  ngOnInit(): void {
    this.timestamp = new Date();
    // let answer = false;
    // let i = 0;
    // while (!answer) {
    //   for (i = 1; i > 0; i++) {
    //     let v = 0;
    //     let h = String(Math.round(
    //       parseInt(
    //         '0x' + SHA256(i + this.timestamp).toString(enc.Hex)
    //       ) /
    //         10 ** 67
    //     ))
    //     for (let i = 0; i < this.projects.length; i++) {
    //       if (parseInt(h[i]) % 2 == 0) {
    //         // this.projects[i].isOpen = true;
    //         v++;
    //       } else {
    //         // this.projects[i].isOpen = false;
    //       }
    //     }
    //     if(v==this.projects.length){
    //       console.log(h)
    //       answer=true;
    //     }
    //   }
    // }
  }

  onClick(i: number) {
    this.showData = i;
  }
  onClickMobile(i: number) {
    this.showData = i;
    this.popUpOpen = true;
  }

  onChange(e: any) {
    if (e.target.value == 69 || e.target.value == 420) {
      alert("Nice!")
    }
    const hashedPass = String(
      Math.round(
        parseInt(
          '0x' + SHA256(e.target.value + this.timestamp).toString(enc.Hex)
        ) /
          10 ** 67
      )
    );
    // let hashedPass = '242428862'
    let answer = 0;
    for (let i = 0; i < this.projects.length; i++) {
      if (parseInt(hashedPass[i]) % 2 == 0) {
        this.projects[i].isOpen = true;
        answer++;
      } else {
        this.projects[i].isOpen = false;
      }
    }
    if (answer == this.projects.length) {
      this.claimStatus = true;
      console.log(true);
    } else {
      this.claimStatus = false;
      console.log(false);
    }
  }
}
