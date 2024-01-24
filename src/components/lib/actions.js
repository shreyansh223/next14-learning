'use server';
import { Post } from './models';
import connectToDb from './utils';
import { signIn, signOut } from './auth';

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
