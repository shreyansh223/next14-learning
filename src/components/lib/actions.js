import revalidatePath from 'next/dist/server/web/spec-extension/revalidate-path';
import { Post } from './models';
import connectToDb from './utils';

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
