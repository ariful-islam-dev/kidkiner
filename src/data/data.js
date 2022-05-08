import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import class1 from '../images/class/class-1.jpg';
import class2 from '../images/class/class-2.jpg';
import class3 from '../images/class/class-3.jpg';
import banner from "../images/header.png";
import icon1 from "../images/icon/assembly.png";
import icon2 from "../images/icon/beverage.png";
import icon3 from "../images/icon/circular-saw.png";
import icon4 from "../images/icon/crane.png";
import icon5 from "../images/icon/drilling-machine.png";
import icon6 from "../images/icon/factory.png";
import logo from "../images/logo.jpeg";
export const data = {
  header: {
    logo: {
      name: "KidKiner",
      logo,
      link: "/",
    },
    navbar: [
      {
        nav: "Home",
        link: "/",
        active: true,
      },
      {
        nav: "About",
        link: "/about",
        active: false,
      },
      {
        nav: "Classess",
        link: "/classes",
        active: false,
      },
      {
        nav: "Teachers",
        link: "/teachers",
        active: false,
      },
      {
        nav: "Gallery",
        link: "/gallery",
        active: false,
      },
      {
        nav: "Pages",
        link: "/pages",
        active: false,
      },
      {
        nav: "Contact",
        link: "/contact",
        active: false,
      },
    ],
    class: {
      name: "Join Class",
      link: "/join",
    },
  },
  banner: {
    subTitle: "Kids Learning Center",
    title: "New Approach to Kids Education",
    text: "Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit, ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo dolore",
    more: {
      name: "Learn More",
      link: "/more",
    },
    thumbnail: banner,
  },
  oportunity: [
    {
      title: "Play Ground",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon1,
      link: "/play-ground",
    },
    {
      title: "Music & Dance",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon2,
      link: "/musit-and-dance",
    },
    {
      title: "Art and Crafts",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon3,
      link: "/art-and-crafts",
    },
    {
      title: "Safe Transprotaion",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon4,
      link: "/transprotation",
    },
    {
      title: "Healthy Foods",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon5,
      link: "/healthy-food",
    },
    {
      title: "Educational Tour",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
      icon: icon6,
      link: "/education-tour",
    },
  ],

  about: {
    id: "about",
    heading: "Learn about us",
    title: "Best School For Your Kids",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
    thumbnail: about1,
    quality: {
      thumbnail: about2,
      button: {
        name: "Learn More",
        link: "/about",
      },
      list: [
        {
          icon: "✔️",
          text: "Labore eos amet dolor amet diam",
        },
        {
          icon: "✔️",
          text: "Etsea et sit dolor amet ipsum",
        },
        {
          icon: "✔️",
          text: "Diam dolor diam elitripsum vero",
        },
      ],
    },
  },
  class: {
    id: "class",
    heading: "Popular Classes",
    title: "Classes For Your Kids",
    class: [
      {
        id: "drawing",
        title: "Drawing Class",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          class1,
        table: {
          age: {
            start: 3,
            end: 6,
          },
          seats: 40,
          time: {
            start: "08:00",
            finished: "10:00",
          },
          tusionFee: {
            fee: 290,
            status: "Monthly",
          },
        },
        joinBtn: {
          name: "Join Now",
          link: "/drawing",
        },
      },
      {
        id: "language",
        title: "Language Learning",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          class2,
        table: {
          age: {
            start: 3,
            end: 6,
          },
          seats: 40,
          time: {
            start: "08:00",
            finished: "10:00",
          },
          tusionFee: {
            fee: 290,
            status: "Monthly",
          },
        },
        joinBtn: {
          name: "Join Now",
          link: "/language-learning",
        },
      },
      {
        id: "science",
        title: "Basic Science",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          class3,
        table: {
          age: {
            start: 3,
            end: 6,
          },
          seats: 40,
          time: {
            start: "08:00",
            finished: "10:00",
          },
          tusionFee: {
            fee: 290,
            status: "Monthly",
          },
        },
        joinBtn: {
          name: "Join Now",
          link: "/science",
        },
      },
    ],
  },
  book: {
    id: "book",
    heading: "Book A Seate",
    title: "Book A Seate For Your Kids",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore, minima a assumenda. Eaque eos hic commodi pariatur corrupti facere asperiores, magni dicta esse numquam. Ipsam, totam provident tenetur hic quibusdam fuga repellendus molestias beatae a suscipit, aliquid dolor asperiores animi numquam incidunt.",
    list: [
      {
        id: "book1",
        icon: "✔️",
        text: "Labore eos amet dolor amet diam",
      },
      {
        id: "book3",
        icon: "✔️",
        text: "Etsea et sit dolor amet ipsum",
      },
      {
        id: "book2",
        icon: "✔️",
        text: "Diam dolor diam elitripsum vero",
      },
    ],
    button: {
      name: "Book Now",
      link: "/seate-book",
    },
    bookForm: {
      title: "Book A Seate",
      input: [
        {
          id: "field1",
          name: "name",
          value: "",
          placeholder: "Your Name",
          type: "text",
        },
        {
          id: "field2",
          name: "email",
          value: "",
          placeholder: "Your Email",
          type: "email",
        },
        {
          id: "field3",
          name: "class",
          value: "",
          placeholder: "Select Class",
          type: "select",
          option: ["Class 1", "Class 2", "Class 3"],
        },
      ],
    },
  },
  teacher: {
    id: "teacher",
    heading: "Our Teachers",
    title: "Meet Our Teacheres",
    teachers: [
      {
        id: "teacher01",
        name: "Julia Smith",
        subject: "Music",
        avater: "team-1.jpg",
        socialLink: [
          {
            name: "Twitter",
            link: "www.twitter.com",
            icon: "T",
          },
          {
            name: "Facebook",
            link: "www.facebook.com",
            icon: "F",
          },
          {
            name: "LinkedIn",
            link: "www.linkedin.com",
            icon: "IN",
          },
        ],
      },
      {
        id: "teacher02",
        name: "Jhon Doe",
        subject: "Music",
        avater: "team-2.jpg",
        socialLink: [
          {
            name: "Twitter",
            link: "www.twitter.com",
            icon: "T",
          },
          {
            name: "Facebook",
            link: "www.facebook.com",
            icon: "F",
          },
          {
            name: "LinkedIn",
            link: "www.linkedin.com",
            icon: "IN",
          },
        ],
      },
      {
        id: "teacher03",
        name: "Molle Rose",
        subject: "Music",
        avater: "team-3.jpg",
        socialLink: [
          {
            name: "Twitter",
            link: "www.twitter.com",
            icon: "T",
          },
          {
            name: "Facebook",
            link: "www.facebook.com",
            icon: "F",
          },
          {
            name: "LinkedIn",
            link: "www.linkedin.com",
            icon: "IN",
          },
        ],
      },
      {
        id: "teacher04",
        name: "Donal Jhon",
        subject: "Music",
        avater: "team-4.jpg",
        socialLink: [
          {
            name: "Twitter",
            link: "www.twitter.com",
            icon: "T",
          },
          {
            name: "Facebook",
            link: "www.facebook.com",
            icon: "F",
          },
          {
            name: "LinkedIn",
            link: "www.linkedin.com",
            icon: "IN",
          },
        ],
      },
    ],
  },
  testimonial: {
    id: "testimonial",
    heading: "Testimonial",
    title: "What Parent Say!",
    parents: [
      {
        id: "parent01",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-1.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
      {
        id: "parent02",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-2.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
      {
        id: "parent03",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-3.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
      {
        id: "parent04",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-4.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
      {
        id: "parent05",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-2.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
      {
        id: "parent06",
        name: "Parent Name",
        profession: "Job Holder",
        avater: "testimonial-1.jpg",
        comment:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia.",
      },
    ],
  },
  blog: {
    id: "blog",
    heading: "Leatest Blog",
    title: "Leatest Article From Blog",
    articles: [
      {
        id: "article01",
        title: "Deam amet eos and no eos",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          "class-1.jpg",
        tags: {
          user: {
            name: "Admin",
            link: "/admin",
            icon: "A",
          },
          category: {
            name: "Web Design",
            link: "/webdesign",
            icon: "WD",
          },
          post: {
            name: 15,
            link: "/post",
            icon: "POST",
          },
        },
        button: {
          name: "Read More",
          link: "/article/articel01",
        },
      },
      {
        id: "article02",
        title: "Deam amet eos and no eos",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          "class-2.jpg",
        tags: {
          user: {
            name: "Admin",
            link: "/admin",
            icon: "A",
          },
          category: {
            name: "Web Design",
            link: "/webdesign",
            icon: "WD",
          },
          post: {
            name: 15,
            link: "/post",
            icon: "POST",
          },
        },
        button: {
          name: "Read More",
          link: "/article/articel01",
        },
      },
      {
        id: "article03",
        title: "Deam amet eos and no eos",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur vero voluptates officia. Nesciunt veritatis iure vel labore",
        thumbnail:
          "class-3.jpg",
        tags: {
          user: {
            name: "Admin",
            link: "/admin",
            icon: "A",
          },
          category: {
            name: "Web Design",
            link: "/webdesign",
            icon: "WD",
          },
          post: {
            name: 15,
            link: "/post",
            icon: "POST",
          },
        },
        button: {
          name: "Read More",
          link: "/article/articel01",
        },
      },
    ],
  },
};
