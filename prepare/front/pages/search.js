import React from 'react';
import { useSelector } from 'react-redux';
// components
import Layout from '../components/layout';

const Search = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      alert('서비스 이용을 위해 로그인이 필요합니다.');
      router.push('/');
    }
  }, [me]);

  return (
    <Layout>
      <div>search</div>
    </Layout>
  );
};

export default Search;
