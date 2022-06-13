import React from 'react';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id); // 받아오는 query id
};

export default UserProfile;
