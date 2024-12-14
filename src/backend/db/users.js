import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {elon, eloncover, hero, ratantata, shucover, tanay, tanaycover, tatacover} from '../../assets'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Kumar",
    username: "shubham@2610",
    email: "guestuser@gmail.com",
    password: "testuser123",
    userphoto: hero,
    coverphoto: shucover,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Learning web Development at @neogCamp`
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    email: "tanaypratap@gmail.com",
    password: "tanay123",
    userphoto: tanay,
    coverphoto:tanaycover,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ` Fixing indian education system  `
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    email: "elonmusk@gmail.com",
    password: "elonmusk123",
    userphoto: elon,
    coverphoto:eloncover,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ` Founder, CEO, and Chief Engineer at SpaceX; angel investor`
  },
  {
    _id: uuid(),
    firstName: "Ratan",
    lastName: "Tata",
    username: "ratantata",
    email: "ratantata@gmail.com",
    password: "ratantata123",
    userphoto: ratantata,
    coverphoto:tatacover,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `chairman of Tata Group`
  },
];
