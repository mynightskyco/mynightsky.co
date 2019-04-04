const persons = [
  {
    name: "Angela Hudak",
    photo: "assets/images/team/Angela-Hudak.jpg",
    title: "Title TBD",
    bio:
      "<p>I am a part of the Communications Team and am currently working on research for the hardware and software for the satellite. I am studying Computer Engineering at KGCOE. My hobbies include 3D printing, 3D design, out-of-classroom projects, coding, and watching educational videos. Fun facts about myself are that I am a 3D Admin at CSH, I grew up on the Jersey shore, I enjoy the outdoors and camping, I like playing with electronics, and my dream is to be a part of the team that sends a person to Mars.This project is important to me because of the learning opportunity and the potential difference I could make on the future. I would be contributing to the satellite and educating others on the dangers of space debris.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Theodore Nolan",
    photo: "assets/images/team/Theodore-Nolan.jpg",
    title: "Title TBD",
    bio:
      "<p>Hello my name is Theodore Nolan, and I am currently an Electrical Mechanical Engineering Technology major at Rochester Institute of Technology. My current hobbies include playing Humans vs Zombies on campus, playing video games primarily first person shooters and writing creativity. My current role on the team is helping designing the satellite itself like deciding where all of the electrical go and where the laser will be placed. This project truly does mean a lot to me since it not only gives me experience on working in an engineering group that specializes in aerospace. But it is also working towards a good cause since if the space debris issue is not resolved soon. We may not be able to go to mar or even have internet for a long time.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Adam Giammarese",
    photo: "assets/images/team/Adam-Giammarese.jpg",
    title: "Title TBD",
    bio:
      "<p>Developing a general model to predict the orbital position and velocity of debris in orbit around Earth.What am I studying?. Mechanical Engineering (Aerospace) and Applied Mathematics. Tennis. 3D printing and designing. Problem solving. From Long Island, NY. Previously worked at Collins Aerospace and Cobham. Doing research to find an analytical solution to Rayleigh-Plesset Equation via asymptotic approximates. I look at this project as an opportunity to finally apply my skill set to the space industry. Though I have worked in the field before, I have yet to make a meaningful impact. </p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  },
  {
    name: "Kyle Cybul",
    photo: "assets/images/team/Kyle-Cybul.jpg",
    title: "Title TBD",
    bio:
      "<p>My name is Kyle Cybul and I am a 3rd-year RIT student majoring in Management Information Systems with a minor in Entrepreneurship. I love to play soccer, hike and go on all sorts of adventures. I have played soccer nearly all of my life and have had 4 concussions to show for it. For this project, I will be taking part in most of the business development. Whether if it’s customer discovery, writing up a business plan/model, or even project management, I will be taking part in that. I have always enjoyed the process of business development and taking on a project like this seemed like a perfect opportunity to get first-hand experience. On top of that, I have known about the problems space debris can cause on us and I want to help be part of the solution in any way I can.</p>",
    social: {
      facebook: "#",
      twitter: "https://twitter.com/knyttneve",
      linkedin: "#"
    }
  }
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});
