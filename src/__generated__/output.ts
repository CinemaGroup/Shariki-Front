import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthLoginInput = {
  loginOrEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Billing = {
  __typename?: 'Billing';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  phone: Scalars['String']['output'];
  profile: Profile;
  profileId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Category = {
  __typename?: 'Category';
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['Int']['output']>;
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Characteristic = {
  __typename?: 'Characteristic';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  items: Array<CollectionItem>;
  name: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  collection: Collection;
  collectionId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Color = {
  __typename?: 'Color';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  oldPrice?: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createReview: Review;
  createTag: Tag;
  deletePost: Post;
  deleteReview: Review;
  deleteTag: Tag;
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  newTokens: AuthResponse;
  register: AuthResponse;
  togglePost: Post;
  toggleReview: Review;
  toggleTag: Tag;
  updatePost: Post;
  updateReview: Review;
  updateTag: Tag;
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  data: AuthLoginInput;
};


export type MutationRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationTogglePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateReviewArgs = {
  data: ReviewInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['Int']['input'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  items: Array<OrderItem>;
  method: PaymentMethod;
  status: OrderStatus;
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  oldPrice?: Maybe<Scalars['Float']['output']>;
  order: Order;
  orderId: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProcess = 'IN_PROCESS',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Refunded = 'REFUNDED'
}

export enum PaymentMethod {
  Yookassa = 'YOOKASSA'
}

export type Post = {
  __typename?: 'Post';
  bigPoster: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  excerpt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  poster: Scalars['String']['output'];
  rubrics: Array<Rubric>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type PostInput = {
  bigPoster: Scalars['String']['input'];
  description: Scalars['String']['input'];
  excerpt: Scalars['String']['input'];
  name: Scalars['String']['input'];
  poster: Scalars['String']['input'];
  rubrics: Array<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  boughtTimes: Scalars['Int']['output'];
  categories: Array<Category>;
  characteristics: Array<Characteristic>;
  collections: Array<CollectionItem>;
  colors: Array<Color>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  iconPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['String']['output']>;
  orderItems: Array<OrderItem>;
  packageQuantity: Scalars['Int']['output'];
  price: Scalars['String']['output'];
  sizes: Array<Size>;
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  tags: Array<Tag>;
  type: Type;
  typeId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  avatarPath: Scalars['String']['output'];
  billing: Billing;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  user: User;
};

export type Query = {
  __typename?: 'Query';
  postById: Post;
  posts: Array<Post>;
  products: Array<Product>;
  profile: ProfileResponse;
  reviewById: Review;
  reviews: Array<Review>;
  tagById: Tag;
  tags: Array<Tag>;
  users: Array<User>;
};


export type QueryPostByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPostsArgs = {
  query: QueryInput;
};


export type QueryProductsArgs = {
  query: QueryProductInput;
};


export type QueryReviewByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  query: QueryInput;
};


export type QueryTagByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTagsArgs = {
  query: QueryInput;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status: Scalars['String']['input'];
};

export type QueryProductInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  photo: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  photo: Scalars['String']['input'];
};

export type Rubric = {
  __typename?: 'Rubric';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Size = {
  __typename?: 'Size';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  oldPrice?: Maybe<Scalars['Float']['output']>;
  price: Scalars['Float']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  size: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum Sort {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum Status {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type TagInput = {
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Type = {
  __typename?: 'Type';
  createdAt: Scalars['DateTime']['output'];
  iconPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  isVerified: Scalars['Boolean']['output'];
  orders: Array<Order>;
  profile: Profile;
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type GetNewTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensMutation = { newTokens: { accessToken: string, user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type LoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type LoginMutation = { login: { accessToken: string, user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type RegisterMutation = { register: { accessToken: string, user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type PostsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type PostsQuery = { posts: Array<{ name: string, slug: string, excerpt: string, description: string, poster: string, bigPoster: string, createdAt: any, rubrics: Array<{ name: string }> }> };

export type ProductsQueryVariables = Exact<{
  query: QueryProductInput;
}>;


export type ProductsQuery = { products: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, images: Array<string>, packageQuantity: number, price: string, oldPrice?: string | null, views: number, boughtTimes: number, status: Status, createdAt: any, sizes: Array<{ size: string, price: number, oldPrice?: number | null }>, colors: Array<{ color: string, price: number, oldPrice?: number | null }>, type: { name: string, iconPath: string } }> };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: Array<{ author: string, content: string, photo: string }> };

export type TagsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type TagsQuery = { tags: Array<{ name: string, slug: string, imagePath: string }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };


export const GetNewTokensDocument = gql`
    mutation GetNewTokens {
  newTokens {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
    accessToken
  }
}
    `;
export type GetNewTokensMutationFn = Apollo.MutationFunction<GetNewTokensMutation, GetNewTokensMutationVariables>;

/**
 * __useGetNewTokensMutation__
 *
 * To run a mutation, you first call `useGetNewTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetNewTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getNewTokensMutation, { data, loading, error }] = useGetNewTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetNewTokensMutation(baseOptions?: Apollo.MutationHookOptions<GetNewTokensMutation, GetNewTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetNewTokensMutation, GetNewTokensMutationVariables>(GetNewTokensDocument, options);
      }
export type GetNewTokensMutationHookResult = ReturnType<typeof useGetNewTokensMutation>;
export type GetNewTokensMutationResult = Apollo.MutationResult<GetNewTokensMutation>;
export type GetNewTokensMutationOptions = Apollo.BaseMutationOptions<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: AuthLoginInput!) {
  login(data: $data) {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($data: AuthRegisterInput!) {
  register(data: $data) {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
    accessToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const PostsDocument = gql`
    query Posts($query: QueryInput!) {
  posts(query: $query) {
    name
    slug
    excerpt
    description
    poster
    bigPoster
    rubrics {
      name
    }
    createdAt
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables> & ({ variables: PostsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: QueryProductInput!) {
  products(query: $query) {
    id
    name
    slug
    sku
    iconPath
    description
    images
    packageQuantity
    price
    oldPrice
    views
    boughtTimes
    sizes {
      size
      price
      oldPrice
    }
    colors {
      color
      price
      oldPrice
    }
    type {
      name
      iconPath
    }
    status
    createdAt
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($query: QueryInput!) {
  reviews(query: $query) {
    author
    content
    photo
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables> & ({ variables: ReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export function useReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsSuspenseQueryHookResult = ReturnType<typeof useReviewsSuspenseQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const TagsDocument = gql`
    query Tags($query: QueryInput!) {
  tags(query: $query) {
    name
    slug
    imagePath
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTagsQuery(baseOptions: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables> & ({ variables: TagsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    user {
      profile {
        login
        email
        avatarPath
      }
      role
    }
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;