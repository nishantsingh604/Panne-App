import { sampleBooks } from '@/app/constants';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import React from 'react'

const page = () => {
  return <>
  <form action={async()=>{
    "use server";

    await signOut();
  }}
  className="mb-10">
    <Button>Logout</Button>
  </form>
  <BookList title="Borrowed Books" books={sampleBooks}/>
  
  </>
};

export default page;