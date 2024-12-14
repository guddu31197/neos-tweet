import { v4 as uuid } from "uuid";
import { elon, hero, tanay } from "../../assets";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "kumar",
    userphoto:hero,
    content:
      "I just want you to know that if you are out there and you are being really hard on yourself right now for something that has happened ... it's normal. That is what is going to happen to you in life. No one gets through unscathed. We are all going to have a few scratches on us. Please be kind to yourselves and stand up for yourself, please. For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubham@2610",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName:"Tanay",
        lastName:"Pratap",
        userphoto: tanay,
        username: "tanaypratap",
        text: "Life will never be perfect. It will never have everything you want. As a software engineer, you should know that a system will always have trade offs. You need to decide what trade offs you can live with and what are you optimizing your life for.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "Musk",
        userphoto: elon,
        username: "elonmusk",
        text: "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better. I think that's the single best piece of advice: constantly think about how you could be doing things better and questioning yourself.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    userphoto: tanay,
    content:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil repellendus suscipit numquam sint hic cumque voluptatum quos veritatis beatae inventore illo ut ad voluptas temporibus ipsa, adipisci perspiciatis dolorum, voluptates consectetur totam. Totam maiores quo dolore mollitia aspernatur atque ratione voluptatibus ad voluptates, cum aperiam repellendus corporis eveniet harum ducimus beatae officiis non, laboriosam excepturi. Nesciunt quas laudantium accusamus consectetur repellendus aut, molestiae ipsa pariatur repudiandae quidem nihil distinctio enim nam doloribus molestias, aspernatur cum maxime ex magni eveniet quae, sequi doloremque beatae voluptas! Sunt facilis quibusdam eveniet est! Maxime, architecto? Soluta dolor laboriosam quisquam minus, eaque maxime eius, nostrum cumque dolorum quaerat nemo reprehenderit corrupti dolore. Harum suscipit tenetur possimus praesentium, voluptatum sed ea quis accusamus dolor autem repellat, soluta sit vel ratione sequi, exercitationem molestiae ut in! Voluptatum numquam veritatis dolorem eos aperiam rerum ratione officia ut impedit incidunt molestiae, itaque reiciendis temporibus totam corrupti dignissimos exercitationem maxime beatae minus? Consequuntur quidem excepturi, totam blanditiis reiciendis voluptates nam officia sed voluptatum placeat cum, asperiores aliquam porro maiores eveniet! Error ipsam perferendis dolorum, maiores suscipit repellat corrupti soluta, deleniti minus est iste officiis quibusdam praesentium at sapiente. Non sint aliquid tempora ipsa dolor a ipsum ab sit fuga.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "musk",
        userphoto: elon,
        username: "elonmusk",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "musk",
        userphoto: elon,
        username: "elonmusk",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque ",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "musk",
    userphoto: elon,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "elonmusk",

    comments: [
      {
        _id: uuid(),
        firstName: "Elon",
        lastName: "musk",
        userphoto: elon,
        username: "shubhamyadav",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
