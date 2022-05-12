import produce from 'immer';

// Dummy Data
import shortId from 'shortid'; // npm install shortid map에 키값으로 id를 랜덤하게 쓰게 해준다
import faker from 'faker'; // $npm install faker

export const generateDummyPost = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: 1, // shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(), // 실제 아니고 Dummy Image를 쓰고 싶다면 placeholder.com
        },
        {
          src: faker.image.image(), // 실제 아니고 Dummy Image를 쓰고 싶다면 placeholder.com
        },
        {
          src: faker.image.image(), // 실제 아니고 Dummy Image를 쓰고 싶다면 placeholder.com
        },
      ],
      Comments: [
        {
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

// initialState
export const initialState = {
  mainPosts: [], // Dummy Data
  singlePost: null, // 게시글 하나만 불러올때
  imagePaths: [], // 이미지 업로드 할 때 이미지 경로들이 여기에 저장
  hasMorePosts: true, // 가져오려는 시도
  // 게시글을 불러올때(무한 스크롤)
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  // 게시글을 추가
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

/* action 정의, action 함수 정의 */
// 처음에 화면을 로딩하는 action
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
// 게시글 추가
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// reducer
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      //* 게시글 불러오기(Infinite Scroll)
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts); // 기존 data + dummy 10개
        draft.hasMorePosts = draft.mainPosts.length < 50; // 50개 보다 많아지면 false
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      //* 게시글 추가
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        // todo: 성공한 데이터 담기
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
