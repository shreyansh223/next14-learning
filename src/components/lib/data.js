// const users = [
//   { id: 1, name: 'Jane' },
//   { id: 2, name: 'Mane' },
// ];

import { Post, User } from './models';
import connectToDb from './utils';

// const posts = [
//   { id: 1, title: 'Post 1', body: '..........', userId: 1 },
//   { id: 2, title: 'Post 2', body: '..........', userId: 2 },
// ];

export const getPost = async ({ slug }) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('failed to fetch data');
  }
};
export const getPosts = async () => {
  try {
    connectToDb();
    const post = await Post.find();
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('failed to fetch data');
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('failed to fetch data');
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const user = await User.findById();
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('failed to fetch data');
  }
};
