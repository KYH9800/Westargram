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
        userImageSrc: [
          {
            src: faker.image.image(),
          },
        ],
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
  userProfileImage: [],
  hasMorePosts: true, // 가져오려는 시도
  // 게시글을 불러올때(무한 스크롤)
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  // 게시글을 추가
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  // 게시글 수정
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  // 이미지 업로드
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  // 사용자 프로필 이미지 업로드
  uploadUserProfileImagesLoading: false,
  uploadUserProfileImagesDone: false,
  uploadUserProfileImagesError: null,
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
// 게시글 수정
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
// 상태 리셋
export const ADD_POST_STATE_RESET = 'ADD_POST_STATE_RESET';
// 이미지 업로드, UPLOAD_IMAGES
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
// 사용자 이미지 업로드
export const UPLOAD_USER_PROFILE_IMAGES_REQUEST = 'UPLOAD_USER_PROFILE_IMAGES_REQUEST';
export const UPLOAD_USER_PROFILE_IMAGES_SUCCESS = 'UPLOAD_USER_PROFILE_IMAGES_SUCCESS';
export const UPLOAD_USER_PROFILE_IMAGES_FAILURE = 'UPLOAD_USER_PROFILE_IMAGES_FAILURE';
// 이미지 제거, REMOVE_IMAGE
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const REMOVE_ALL_IMAGE = 'REMOVE_ALL_IMAGE';
// 게시글 삭제
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

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
        draft.mainPosts = draft.mainPosts.concat(action.data); // 기존 data + dummy 10개
        draft.hasMorePosts = action.data.length === 10; // 10개의 게시글을 불러온다
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
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_POST_STATE_RESET:
        draft.addPostDone = false;
      //* 게시글 수정
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        draft.mainPosts.find((v) => v.id === action.data.PostId).content = action.data.content;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      //* 게시글 삭제
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        // 지우려는 것만 지우고 나머진 남겨둔다
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      //* 이미지 업로드
      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;
      case UPLOAD_IMAGES_SUCCESS: {
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        draft.imagePaths = draft.imagePaths.concat(action.data);
        break;
      }
      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;
      //* 이미지 제거
      case REMOVE_ALL_IMAGE:
        draft.imagePaths = []; // 이미지 전부 제거
        break;
      case REMOVE_IMAGE: // 이미지는 서버에서 잘 안지운다(자원이라서), 때문에 case가 한개
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;
      //* 사용자 프로필 이미지 업로드
      case UPLOAD_USER_PROFILE_IMAGES_REQUEST:
        draft.uploadUserProfileImagesLoading = true;
        draft.uploadUserProfileImagesDone = false;
        draft.uploadUserProfileImagesError = null;
        break;
      case UPLOAD_USER_PROFILE_IMAGES_SUCCESS: {
        draft.uploadUserProfileImagesLoading = false;
        draft.uploadUserProfileImagesDone = true;
        draft.userProfileImage = draft.userProfileImage.concat(action.data);
        break;
      }
      case UPLOAD_USER_PROFILE_IMAGES_FAILURE:
        draft.uploadUserProfileImagesLoading = false;
        draft.uploadUserProfileImagesError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
