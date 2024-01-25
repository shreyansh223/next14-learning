'use server';
import { Post, User } from './models';
import connectToDb from './utils';
import { signIn, signOut } from './auth';
const bcrypt = require('bcryptjs');
const saltRounds = 10;

export const addPost = async (formData) => {
  'use server';
  //   const title = formData.get('title');
  //   const desc = formData.get('desc');
  //   const slug = formData.get('slug');
  //   const userId = formData.get('userId');
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      userId,
      desc,
      slug,
    });
    await newPost.save();
    revalidatePath('/blog');
    console.log('created');
  } catch (err) {
    throw err;
  }
};
//3:13:11

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};
export const handleLogout = async () => {
  'use server';
  await signOut();
};
export const register = async (formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password != passwordRepeat) return 'Passwords do not match';
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) return 'user already exists';
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = new User({
        username,
        email,
        password: hash,
      });
      await newUser.save();
    });
  } catch (err) {
    throw err;
  }
};

export const handleUsernamePasswordLogin = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw err;
  }
};
