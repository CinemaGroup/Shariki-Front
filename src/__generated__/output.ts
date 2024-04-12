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
  DeweyDecimal: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
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

export type CategoryInput = {
  name: Scalars['String']['input'];
  parent?: InputMaybe<SelectInput>;
};

export type Characteristic = {
  __typename?: 'Characteristic';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  type: CharacteristicType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CharacteristicInput = {
  name: Scalars['String']['input'];
  type: CharacteristicSelectInput;
};

export type CharacteristicSelectInput = {
  name: Scalars['String']['input'];
  value: CharacteristicType;
};

export enum CharacteristicType {
  Collection = 'COLLECTION',
  Country = 'COUNTRY',
  Hue = 'HUE',
  Manufacturer = 'MANUFACTURER',
  Material = 'MATERIAL'
}

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CollectionInput = {
  name: Scalars['String']['input'];
};

export type Color = {
  __typename?: 'Color';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  product: Product;
  productId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ColorInput = {
  color: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
};

export type CreateFolderInput = {
  folderPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CurrentProduct = {
  __typename?: 'CurrentProduct';
  product?: Maybe<Product>;
  similarProducts: Array<Product>;
};

export type EditFileOrFolderNameInput = {
  newPath: Scalars['String']['input'];
  oldPath: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type FolderWithChild = {
  __typename?: 'FolderWithChild';
  childrens: Array<FolderWithChild>;
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type Holiday = {
  __typename?: 'Holiday';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type HolidayInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createCharacteristic: Characteristic;
  createCollection: Collection;
  createFolder: Scalars['String']['output'];
  createHoliday: Holiday;
  createPost: Post;
  createProduct: Product;
  createReview: Review;
  createTag: Tag;
  createType: Type;
  deleteCategory: Category;
  deleteCharacteristic: Characteristic;
  deleteCollection: Collection;
  deleteFileOrFolder: Scalars['String']['output'];
  deleteHoliday: Holiday;
  deletePost: Post;
  deleteProduct: Product;
  deleteReview: Review;
  deleteTag: Tag;
  deleteType: Type;
  duplicateCategory: Category;
  duplicateCharacteristic: Characteristic;
  duplicateCollection: Collection;
  duplicateHoliday: Holiday;
  duplicateProduct: Product;
  duplicateTag: Tag;
  duplicateType: Type;
  editFileOrFolderName: Scalars['String']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  register: AuthResponse;
  toggleCategory: Category;
  toggleCharacteristic: Characteristic;
  toggleCollection: Collection;
  toggleHoliday: Holiday;
  togglePost: Post;
  toggleProduct: Product;
  toggleReview: Review;
  toggleTag: Tag;
  toggleType: Type;
  updateCategory: Category;
  updateCharacteristic: Characteristic;
  updateCollection: Collection;
  updateHoliday: Holiday;
  updatePost: Post;
  updateProduct: Product;
  updateReview: Review;
  updateTag: Tag;
  updateType: Type;
  uploadFiles: Scalars['String']['output'];
};


export type MutationCreateFolderArgs = {
  data: CreateFolderInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileOrFolderArgs = {
  path: Scalars['String']['input'];
};


export type MutationDeleteHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditFileOrFolderNameArgs = {
  data: EditFileOrFolderNameInput;
};


export type MutationLoginArgs = {
  data: AuthLoginInput;
};


export type MutationRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationToggleCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCharacteristicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type MutationTogglePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCharacteristicArgs = {
  data: CharacteristicInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCollectionArgs = {
  data: CollectionInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateHolidayArgs = {
  data: HolidayInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
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


export type MutationUpdateTypeArgs = {
  data: TypeInput;
  id: Scalars['Int']['input'];
};


export type MutationUploadFilesArgs = {
  data: UploadFilesInput;
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
  collections: Array<Collection>;
  colors: Array<Color>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  holidays: Array<Holiday>;
  iconPath?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['DeweyDecimal']['output']>;
  orderItems: Array<OrderItem>;
  packageQuantity: Scalars['Int']['output'];
  price: Scalars['DeweyDecimal']['output'];
  sizes: Array<Size>;
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  tags: Array<Tag>;
  typeId: Scalars['Int']['output'];
  types: Array<Type>;
  updatedAt: Scalars['DateTime']['output'];
  views: Scalars['Int']['output'];
};

export type ProductInput = {
  categories: Array<SelectInput>;
  characteristics: Array<SelectInput>;
  collections: Array<SelectInput>;
  colors: Array<ColorInput>;
  description: Scalars['String']['input'];
  holidays: Array<SelectInput>;
  iconPath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  oldPrice?: InputMaybe<Scalars['String']['input']>;
  packageQuantity: Scalars['String']['input'];
  price: Scalars['String']['input'];
  sizes: Array<SizeInput>;
  sku: Scalars['String']['input'];
  tags: Array<SelectInput>;
  types: Array<SelectInput>;
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
  categories: Array<Category>;
  categoryById: Category;
  characteristicById: Characteristic;
  characteristics: Array<Characteristic>;
  collectionById: Collection;
  collections: Array<Collection>;
  folderItems: StorageItem;
  folders: Array<FolderWithChild>;
  holidayById: Holiday;
  holidays: Array<Holiday>;
  postById: Post;
  posts: Array<Post>;
  productById: Product;
  productBySlug: CurrentProduct;
  products: Array<Product>;
  profile: ProfileResponse;
  reviewById: Review;
  reviews: Array<Review>;
  tagById: Tag;
  tags: Array<Tag>;
  typeById: Type;
  types: Array<Type>;
  users: Array<User>;
};


export type QueryCategoriesArgs = {
  query: QueryInput;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCharacteristicByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCharacteristicsArgs = {
  query: QueryInput;
};


export type QueryCollectionByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCollectionsArgs = {
  query: QueryInput;
};


export type QueryFolderItemsArgs = {
  folderPath: Scalars['String']['input'];
};


export type QueryHolidayByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHolidaysArgs = {
  query: QueryInput;
};


export type QueryPostByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPostsArgs = {
  query: QueryInput;
};


export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  isSale?: InputMaybe<Scalars['Boolean']['input']>;
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


export type QueryTypeByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTypesArgs = {
  query: QueryInput;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
};

export type QueryProductInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
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

export type SelectInput = {
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type Size = {
  __typename?: 'Size';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  oldPrice?: Maybe<Scalars['DeweyDecimal']['output']>;
  price: Scalars['DeweyDecimal']['output'];
  product: Product;
  productId: Scalars['Int']['output'];
  size: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SizeInput = {
  oldPrice?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['String']['input'];
  size: Scalars['String']['input'];
};

export enum Sort {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum Status {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type StorageItem = {
  __typename?: 'StorageItem';
  files: Array<File>;
  folders: Array<Folder>;
};

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

export type TypeInput = {
  iconPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UploadFilesInput = {
  data: Array<Scalars['Upload']['input']>;
  folderPath: Scalars['String']['input'];
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

export type LoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type LoginMutation = { login: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type RegisterMutation = { register: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };

export type CreateCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCategoryMutation = { createCategory: { id: number } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { deleteCategory: { id: number } };

export type DuplicateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCategoryMutation = { duplicateCategory: { id: number } };

export type ToggleCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCategoryMutation = { toggleCategory: { id: number } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: { id: number } };

export type CreateCharacteristicMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCharacteristicMutation = { createCharacteristic: { id: number } };

export type DeleteCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCharacteristicMutation = { deleteCharacteristic: { id: number } };

export type DuplicateCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCharacteristicMutation = { duplicateCharacteristic: { id: number } };

export type ToggleCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCharacteristicMutation = { toggleCharacteristic: { id: number } };

export type UpdateCharacteristicMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CharacteristicInput;
}>;


export type UpdateCharacteristicMutation = { updateCharacteristic: { id: number } };

export type CreateCollectionMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCollectionMutation = { createCollection: { id: number } };

export type DeleteCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCollectionMutation = { deleteCollection: { id: number } };

export type DuplicateCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCollectionMutation = { duplicateCollection: { id: number } };

export type ToggleCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCollectionMutation = { toggleCollection: { id: number } };

export type UpdateCollectionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CollectionInput;
}>;


export type UpdateCollectionMutation = { updateCollection: { id: number } };

export type CreateHolidayMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateHolidayMutation = { createHoliday: { id: number } };

export type DeleteHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteHolidayMutation = { deleteHoliday: { id: number } };

export type DuplicateHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateHolidayMutation = { duplicateHoliday: { id: number } };

export type ToggleHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleHolidayMutation = { toggleHoliday: { id: number } };

export type UpdateHolidayMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: HolidayInput;
}>;


export type UpdateHolidayMutation = { updateHoliday: { id: number } };

export type CreateProductMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateProductMutation = { createProduct: { id: number } };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { deleteProduct: { id: number } };

export type DuplicateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateProductMutation = { duplicateProduct: { id: number } };

export type ToggleProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleProductMutation = { toggleProduct: { id: number } };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: ProductInput;
}>;


export type UpdateProductMutation = { updateProduct: { id: number } };

export type CreateFolderMutationVariables = Exact<{
  data: CreateFolderInput;
}>;


export type CreateFolderMutation = { createFolder: string };

export type DeleteFileOrFolderMutationVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type DeleteFileOrFolderMutation = { deleteFileOrFolder: string };

export type EditFileOrFolderNameMutationVariables = Exact<{
  data: EditFileOrFolderNameInput;
}>;


export type EditFileOrFolderNameMutation = { editFileOrFolderName: string };

export type UploadFilesMutationVariables = Exact<{
  data: UploadFilesInput;
}>;


export type UploadFilesMutation = { uploadFiles: string };

export type CreateTagMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTagMutation = { createTag: { id: number } };

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTagMutation = { deleteTag: { id: number } };

export type DuplicateTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateTagMutation = { duplicateTag: { id: number } };

export type ToggleTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleTagMutation = { toggleTag: { id: number } };

export type UpdateTagMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: TagInput;
}>;


export type UpdateTagMutation = { updateTag: { id: number } };

export type CreateTypeMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTypeMutation = { createType: { id: number } };

export type DeleteTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteTypeMutation = { deleteType: { id: number } };

export type DuplicateTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateTypeMutation = { duplicateType: { id: number } };

export type ToggleTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleTypeMutation = { toggleType: { id: number } };

export type UpdateTypeMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: TypeInput;
}>;


export type UpdateTypeMutation = { updateType: { id: number } };

export type CategoriesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CategoriesQuery = { categories: Array<{ id: number, name: string, slug: string }> };

export type CategoryByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CategoryByIdQuery = { categoryById: { name: string, parent?: { id: number, name: string } | null } };

export type CharacteristicByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CharacteristicByIdQuery = { characteristicById: { name: string, type: CharacteristicType } };

export type CharacteristicsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CharacteristicsQuery = { characteristics: Array<{ id: number, name: string, slug: string, type: CharacteristicType }> };

export type CollectionByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CollectionByIdQuery = { collectionById: { name: string } };

export type CollectionsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CollectionsQuery = { collections: Array<{ id: number, name: string, slug: string }> };

export type HolidayByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type HolidayByIdQuery = { holidayById: { name: string } };

export type HolidaysQueryVariables = Exact<{
  query: QueryInput;
}>;


export type HolidaysQuery = { holidays: Array<{ id: number, name: string, slug: string }> };

export type PostsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type PostsQuery = { posts: Array<{ name: string, slug: string, excerpt: string, description: string, poster: string, bigPoster: string, createdAt: any, rubrics: Array<{ name: string }> }> };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductByIdQuery = { productById: { name: string, sku: string, price: any, oldPrice?: any | null, packageQuantity: number, description: string, iconPath?: string | null, tags: Array<{ id: number, name: string }>, types: Array<{ id: number, name: string }>, holidays: Array<{ id: number, name: string }>, characteristics: Array<{ id: number, name: string }>, categories: Array<{ id: number, name: string }>, collections: Array<{ id: number, name: string }>, colors: Array<{ color: string, images: Array<string> }>, sizes: Array<{ size: string, price: any, oldPrice?: any | null }> } };

export type ProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductBySlugQuery = { productBySlug: { product?: { id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: any, oldPrice?: any | null, views: number, boughtTimes: number, status: Status, createdAt: any, sizes: Array<{ size: string, price: any, oldPrice?: any | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }>, characteristics: Array<{ name: string, type: CharacteristicType }> } | null, similarProducts: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: any, oldPrice?: any | null, views: number, boughtTimes: number, status: Status, createdAt: any, sizes: Array<{ size: string, price: any, oldPrice?: any | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }> }> } };

export type ProductsQueryVariables = Exact<{
  query: QueryProductInput;
  isSale?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ProductsQuery = { products: Array<{ id: number, name: string, slug: string, sku: string, iconPath?: string | null, description: string, packageQuantity: number, price: any, oldPrice?: any | null, views: number, boughtTimes: number, status: Status, createdAt: any, sizes: Array<{ size: string, price: any, oldPrice?: any | null }>, colors: Array<{ color: string, images: Array<string> }>, types: Array<{ iconPath: string }> }> };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: Array<{ author: string, content: string, photo: string }> };

export type GetFolderItemsQueryVariables = Exact<{
  folderPath: Scalars['String']['input'];
}>;


export type GetFolderItemsQuery = { folderItems: { folders: Array<{ name: string, size: string, count: number, path: string, createdAt: any }>, files: Array<{ name: string, size: string, extension: string, path: string, createdAt: any }> } };

export type FoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type FoldersQuery = { folders: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any, childrens: Array<{ name: string, path: string, createdAt: any }> }> }> }> }> }> }> }> }> }> };

export type TagByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TagByIdQuery = { tagById: { name: string, imagePath: string } };

export type TagsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type TagsQuery = { tags: Array<{ id: number, name: string, slug: string, imagePath: string }> };

export type TypeByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TypeByIdQuery = { typeById: { name: string, iconPath: string } };

export type TypesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type TypesQuery = { types: Array<{ id: number, name: string, iconPath: string }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { user: { role: UserRole, profile: { login: string, email: string, avatarPath: string } } } };


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
export const CreateCategoryDocument = gql`
    mutation CreateCategory {
  createCategory {
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  deleteCategory(id: $id) {
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DuplicateCategoryDocument = gql`
    mutation DuplicateCategory($id: Int!) {
  duplicateCategory(id: $id) {
    id
  }
}
    `;
export type DuplicateCategoryMutationFn = Apollo.MutationFunction<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;

/**
 * __useDuplicateCategoryMutation__
 *
 * To run a mutation, you first call `useDuplicateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCategoryMutation, { data, loading, error }] = useDuplicateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>(DuplicateCategoryDocument, options);
      }
export type DuplicateCategoryMutationHookResult = ReturnType<typeof useDuplicateCategoryMutation>;
export type DuplicateCategoryMutationResult = Apollo.MutationResult<DuplicateCategoryMutation>;
export type DuplicateCategoryMutationOptions = Apollo.BaseMutationOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;
export const ToggleCategoryDocument = gql`
    mutation ToggleCategory($id: Int!) {
  toggleCategory(id: $id) {
    id
  }
}
    `;
export type ToggleCategoryMutationFn = Apollo.MutationFunction<ToggleCategoryMutation, ToggleCategoryMutationVariables>;

/**
 * __useToggleCategoryMutation__
 *
 * To run a mutation, you first call `useToggleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCategoryMutation, { data, loading, error }] = useToggleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCategoryMutation, ToggleCategoryMutationVariables>(ToggleCategoryDocument, options);
      }
export type ToggleCategoryMutationHookResult = ReturnType<typeof useToggleCategoryMutation>;
export type ToggleCategoryMutationResult = Apollo.MutationResult<ToggleCategoryMutation>;
export type ToggleCategoryMutationOptions = Apollo.BaseMutationOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $data: CategoryInput!) {
  updateCategory(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const CreateCharacteristicDocument = gql`
    mutation CreateCharacteristic {
  createCharacteristic {
    id
  }
}
    `;
export type CreateCharacteristicMutationFn = Apollo.MutationFunction<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;

/**
 * __useCreateCharacteristicMutation__
 *
 * To run a mutation, you first call `useCreateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacteristicMutation, { data, loading, error }] = useCreateCharacteristicMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>(CreateCharacteristicDocument, options);
      }
export type CreateCharacteristicMutationHookResult = ReturnType<typeof useCreateCharacteristicMutation>;
export type CreateCharacteristicMutationResult = Apollo.MutationResult<CreateCharacteristicMutation>;
export type CreateCharacteristicMutationOptions = Apollo.BaseMutationOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;
export const DeleteCharacteristicDocument = gql`
    mutation DeleteCharacteristic($id: Int!) {
  deleteCharacteristic(id: $id) {
    id
  }
}
    `;
export type DeleteCharacteristicMutationFn = Apollo.MutationFunction<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;

/**
 * __useDeleteCharacteristicMutation__
 *
 * To run a mutation, you first call `useDeleteCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCharacteristicMutation, { data, loading, error }] = useDeleteCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>(DeleteCharacteristicDocument, options);
      }
export type DeleteCharacteristicMutationHookResult = ReturnType<typeof useDeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationResult = Apollo.MutationResult<DeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationOptions = Apollo.BaseMutationOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;
export const DuplicateCharacteristicDocument = gql`
    mutation DuplicateCharacteristic($id: Int!) {
  duplicateCharacteristic(id: $id) {
    id
  }
}
    `;
export type DuplicateCharacteristicMutationFn = Apollo.MutationFunction<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>;

/**
 * __useDuplicateCharacteristicMutation__
 *
 * To run a mutation, you first call `useDuplicateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCharacteristicMutation, { data, loading, error }] = useDuplicateCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>(DuplicateCharacteristicDocument, options);
      }
export type DuplicateCharacteristicMutationHookResult = ReturnType<typeof useDuplicateCharacteristicMutation>;
export type DuplicateCharacteristicMutationResult = Apollo.MutationResult<DuplicateCharacteristicMutation>;
export type DuplicateCharacteristicMutationOptions = Apollo.BaseMutationOptions<DuplicateCharacteristicMutation, DuplicateCharacteristicMutationVariables>;
export const ToggleCharacteristicDocument = gql`
    mutation ToggleCharacteristic($id: Int!) {
  toggleCharacteristic(id: $id) {
    id
  }
}
    `;
export type ToggleCharacteristicMutationFn = Apollo.MutationFunction<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>;

/**
 * __useToggleCharacteristicMutation__
 *
 * To run a mutation, you first call `useToggleCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCharacteristicMutation, { data, loading, error }] = useToggleCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>(ToggleCharacteristicDocument, options);
      }
export type ToggleCharacteristicMutationHookResult = ReturnType<typeof useToggleCharacteristicMutation>;
export type ToggleCharacteristicMutationResult = Apollo.MutationResult<ToggleCharacteristicMutation>;
export type ToggleCharacteristicMutationOptions = Apollo.BaseMutationOptions<ToggleCharacteristicMutation, ToggleCharacteristicMutationVariables>;
export const UpdateCharacteristicDocument = gql`
    mutation UpdateCharacteristic($id: Int!, $data: CharacteristicInput!) {
  updateCharacteristic(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCharacteristicMutationFn = Apollo.MutationFunction<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;

/**
 * __useUpdateCharacteristicMutation__
 *
 * To run a mutation, you first call `useUpdateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacteristicMutation, { data, loading, error }] = useUpdateCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>(UpdateCharacteristicDocument, options);
      }
export type UpdateCharacteristicMutationHookResult = ReturnType<typeof useUpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationResult = Apollo.MutationResult<UpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationOptions = Apollo.BaseMutationOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;
export const CreateCollectionDocument = gql`
    mutation CreateCollection {
  createCollection {
    id
  }
}
    `;
export type CreateCollectionMutationFn = Apollo.MutationFunction<CreateCollectionMutation, CreateCollectionMutationVariables>;

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCollectionMutation, CreateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCollectionMutation, CreateCollectionMutationVariables>(CreateCollectionDocument, options);
      }
export type CreateCollectionMutationHookResult = ReturnType<typeof useCreateCollectionMutation>;
export type CreateCollectionMutationResult = Apollo.MutationResult<CreateCollectionMutation>;
export type CreateCollectionMutationOptions = Apollo.BaseMutationOptions<CreateCollectionMutation, CreateCollectionMutationVariables>;
export const DeleteCollectionDocument = gql`
    mutation DeleteCollection($id: Int!) {
  deleteCollection(id: $id) {
    id
  }
}
    `;
export type DeleteCollectionMutationFn = Apollo.MutationFunction<DeleteCollectionMutation, DeleteCollectionMutationVariables>;

/**
 * __useDeleteCollectionMutation__
 *
 * To run a mutation, you first call `useDeleteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectionMutation, { data, loading, error }] = useDeleteCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCollectionMutation, DeleteCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCollectionMutation, DeleteCollectionMutationVariables>(DeleteCollectionDocument, options);
      }
export type DeleteCollectionMutationHookResult = ReturnType<typeof useDeleteCollectionMutation>;
export type DeleteCollectionMutationResult = Apollo.MutationResult<DeleteCollectionMutation>;
export type DeleteCollectionMutationOptions = Apollo.BaseMutationOptions<DeleteCollectionMutation, DeleteCollectionMutationVariables>;
export const DuplicateCollectionDocument = gql`
    mutation DuplicateCollection($id: Int!) {
  duplicateCollection(id: $id) {
    id
  }
}
    `;
export type DuplicateCollectionMutationFn = Apollo.MutationFunction<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>;

/**
 * __useDuplicateCollectionMutation__
 *
 * To run a mutation, you first call `useDuplicateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCollectionMutation, { data, loading, error }] = useDuplicateCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>(DuplicateCollectionDocument, options);
      }
export type DuplicateCollectionMutationHookResult = ReturnType<typeof useDuplicateCollectionMutation>;
export type DuplicateCollectionMutationResult = Apollo.MutationResult<DuplicateCollectionMutation>;
export type DuplicateCollectionMutationOptions = Apollo.BaseMutationOptions<DuplicateCollectionMutation, DuplicateCollectionMutationVariables>;
export const ToggleCollectionDocument = gql`
    mutation ToggleCollection($id: Int!) {
  toggleCollection(id: $id) {
    id
  }
}
    `;
export type ToggleCollectionMutationFn = Apollo.MutationFunction<ToggleCollectionMutation, ToggleCollectionMutationVariables>;

/**
 * __useToggleCollectionMutation__
 *
 * To run a mutation, you first call `useToggleCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCollectionMutation, { data, loading, error }] = useToggleCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCollectionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCollectionMutation, ToggleCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCollectionMutation, ToggleCollectionMutationVariables>(ToggleCollectionDocument, options);
      }
export type ToggleCollectionMutationHookResult = ReturnType<typeof useToggleCollectionMutation>;
export type ToggleCollectionMutationResult = Apollo.MutationResult<ToggleCollectionMutation>;
export type ToggleCollectionMutationOptions = Apollo.BaseMutationOptions<ToggleCollectionMutation, ToggleCollectionMutationVariables>;
export const UpdateCollectionDocument = gql`
    mutation UpdateCollection($id: Int!, $data: CollectionInput!) {
  updateCollection(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCollectionMutationFn = Apollo.MutationFunction<UpdateCollectionMutation, UpdateCollectionMutationVariables>;

/**
 * __useUpdateCollectionMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutation, { data, loading, error }] = useUpdateCollectionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCollectionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCollectionMutation, UpdateCollectionMutationVariables>(UpdateCollectionDocument, options);
      }
export type UpdateCollectionMutationHookResult = ReturnType<typeof useUpdateCollectionMutation>;
export type UpdateCollectionMutationResult = Apollo.MutationResult<UpdateCollectionMutation>;
export type UpdateCollectionMutationOptions = Apollo.BaseMutationOptions<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const CreateHolidayDocument = gql`
    mutation CreateHoliday {
  createHoliday {
    id
  }
}
    `;
export type CreateHolidayMutationFn = Apollo.MutationFunction<CreateHolidayMutation, CreateHolidayMutationVariables>;

/**
 * __useCreateHolidayMutation__
 *
 * To run a mutation, you first call `useCreateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHolidayMutation, { data, loading, error }] = useCreateHolidayMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<CreateHolidayMutation, CreateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHolidayMutation, CreateHolidayMutationVariables>(CreateHolidayDocument, options);
      }
export type CreateHolidayMutationHookResult = ReturnType<typeof useCreateHolidayMutation>;
export type CreateHolidayMutationResult = Apollo.MutationResult<CreateHolidayMutation>;
export type CreateHolidayMutationOptions = Apollo.BaseMutationOptions<CreateHolidayMutation, CreateHolidayMutationVariables>;
export const DeleteHolidayDocument = gql`
    mutation DeleteHoliday($id: Int!) {
  deleteHoliday(id: $id) {
    id
  }
}
    `;
export type DeleteHolidayMutationFn = Apollo.MutationFunction<DeleteHolidayMutation, DeleteHolidayMutationVariables>;

/**
 * __useDeleteHolidayMutation__
 *
 * To run a mutation, you first call `useDeleteHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHolidayMutation, { data, loading, error }] = useDeleteHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteHolidayMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHolidayMutation, DeleteHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHolidayMutation, DeleteHolidayMutationVariables>(DeleteHolidayDocument, options);
      }
export type DeleteHolidayMutationHookResult = ReturnType<typeof useDeleteHolidayMutation>;
export type DeleteHolidayMutationResult = Apollo.MutationResult<DeleteHolidayMutation>;
export type DeleteHolidayMutationOptions = Apollo.BaseMutationOptions<DeleteHolidayMutation, DeleteHolidayMutationVariables>;
export const DuplicateHolidayDocument = gql`
    mutation DuplicateHoliday($id: Int!) {
  duplicateHoliday(id: $id) {
    id
  }
}
    `;
export type DuplicateHolidayMutationFn = Apollo.MutationFunction<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>;

/**
 * __useDuplicateHolidayMutation__
 *
 * To run a mutation, you first call `useDuplicateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateHolidayMutation, { data, loading, error }] = useDuplicateHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>(DuplicateHolidayDocument, options);
      }
export type DuplicateHolidayMutationHookResult = ReturnType<typeof useDuplicateHolidayMutation>;
export type DuplicateHolidayMutationResult = Apollo.MutationResult<DuplicateHolidayMutation>;
export type DuplicateHolidayMutationOptions = Apollo.BaseMutationOptions<DuplicateHolidayMutation, DuplicateHolidayMutationVariables>;
export const ToggleHolidayDocument = gql`
    mutation ToggleHoliday($id: Int!) {
  toggleHoliday(id: $id) {
    id
  }
}
    `;
export type ToggleHolidayMutationFn = Apollo.MutationFunction<ToggleHolidayMutation, ToggleHolidayMutationVariables>;

/**
 * __useToggleHolidayMutation__
 *
 * To run a mutation, you first call `useToggleHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleHolidayMutation, { data, loading, error }] = useToggleHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleHolidayMutation(baseOptions?: Apollo.MutationHookOptions<ToggleHolidayMutation, ToggleHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleHolidayMutation, ToggleHolidayMutationVariables>(ToggleHolidayDocument, options);
      }
export type ToggleHolidayMutationHookResult = ReturnType<typeof useToggleHolidayMutation>;
export type ToggleHolidayMutationResult = Apollo.MutationResult<ToggleHolidayMutation>;
export type ToggleHolidayMutationOptions = Apollo.BaseMutationOptions<ToggleHolidayMutation, ToggleHolidayMutationVariables>;
export const UpdateHolidayDocument = gql`
    mutation UpdateHoliday($id: Int!, $data: HolidayInput!) {
  updateHoliday(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateHolidayMutationFn = Apollo.MutationFunction<UpdateHolidayMutation, UpdateHolidayMutationVariables>;

/**
 * __useUpdateHolidayMutation__
 *
 * To run a mutation, you first call `useUpdateHolidayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHolidayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHolidayMutation, { data, loading, error }] = useUpdateHolidayMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateHolidayMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHolidayMutation, UpdateHolidayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHolidayMutation, UpdateHolidayMutationVariables>(UpdateHolidayDocument, options);
      }
export type UpdateHolidayMutationHookResult = ReturnType<typeof useUpdateHolidayMutation>;
export type UpdateHolidayMutationResult = Apollo.MutationResult<UpdateHolidayMutation>;
export type UpdateHolidayMutationOptions = Apollo.BaseMutationOptions<UpdateHolidayMutation, UpdateHolidayMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct {
  createProduct {
    id
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProduct(id: $id) {
    id
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DuplicateProductDocument = gql`
    mutation DuplicateProduct($id: Int!) {
  duplicateProduct(id: $id) {
    id
  }
}
    `;
export type DuplicateProductMutationFn = Apollo.MutationFunction<DuplicateProductMutation, DuplicateProductMutationVariables>;

/**
 * __useDuplicateProductMutation__
 *
 * To run a mutation, you first call `useDuplicateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateProductMutation, { data, loading, error }] = useDuplicateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateProductMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateProductMutation, DuplicateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateProductMutation, DuplicateProductMutationVariables>(DuplicateProductDocument, options);
      }
export type DuplicateProductMutationHookResult = ReturnType<typeof useDuplicateProductMutation>;
export type DuplicateProductMutationResult = Apollo.MutationResult<DuplicateProductMutation>;
export type DuplicateProductMutationOptions = Apollo.BaseMutationOptions<DuplicateProductMutation, DuplicateProductMutationVariables>;
export const ToggleProductDocument = gql`
    mutation ToggleProduct($id: Int!) {
  toggleProduct(id: $id) {
    id
  }
}
    `;
export type ToggleProductMutationFn = Apollo.MutationFunction<ToggleProductMutation, ToggleProductMutationVariables>;

/**
 * __useToggleProductMutation__
 *
 * To run a mutation, you first call `useToggleProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleProductMutation, { data, loading, error }] = useToggleProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleProductMutation(baseOptions?: Apollo.MutationHookOptions<ToggleProductMutation, ToggleProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleProductMutation, ToggleProductMutationVariables>(ToggleProductDocument, options);
      }
export type ToggleProductMutationHookResult = ReturnType<typeof useToggleProductMutation>;
export type ToggleProductMutationResult = Apollo.MutationResult<ToggleProductMutation>;
export type ToggleProductMutationOptions = Apollo.BaseMutationOptions<ToggleProductMutation, ToggleProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $data: ProductInput!) {
  updateProduct(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const CreateFolderDocument = gql`
    mutation CreateFolder($data: CreateFolderInput!) {
  createFolder(data: $data)
}
    `;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const DeleteFileOrFolderDocument = gql`
    mutation DeleteFileOrFolder($path: String!) {
  deleteFileOrFolder(path: $path)
}
    `;
export type DeleteFileOrFolderMutationFn = Apollo.MutationFunction<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;

/**
 * __useDeleteFileOrFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFileOrFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileOrFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileOrFolderMutation, { data, loading, error }] = useDeleteFileOrFolderMutation({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useDeleteFileOrFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>(DeleteFileOrFolderDocument, options);
      }
export type DeleteFileOrFolderMutationHookResult = ReturnType<typeof useDeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationResult = Apollo.MutationResult<DeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationOptions = Apollo.BaseMutationOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;
export const EditFileOrFolderNameDocument = gql`
    mutation EditFileOrFolderName($data: EditFileOrFolderNameInput!) {
  editFileOrFolderName(data: $data)
}
    `;
export type EditFileOrFolderNameMutationFn = Apollo.MutationFunction<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;

/**
 * __useEditFileOrFolderNameMutation__
 *
 * To run a mutation, you first call `useEditFileOrFolderNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFileOrFolderNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFileOrFolderNameMutation, { data, loading, error }] = useEditFileOrFolderNameMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditFileOrFolderNameMutation(baseOptions?: Apollo.MutationHookOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>(EditFileOrFolderNameDocument, options);
      }
export type EditFileOrFolderNameMutationHookResult = ReturnType<typeof useEditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationResult = Apollo.MutationResult<EditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationOptions = Apollo.BaseMutationOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;
export const UploadFilesDocument = gql`
    mutation UploadFiles($data: UploadFilesInput!) {
  uploadFiles(data: $data)
}
    `;
export type UploadFilesMutationFn = Apollo.MutationFunction<UploadFilesMutation, UploadFilesMutationVariables>;

/**
 * __useUploadFilesMutation__
 *
 * To run a mutation, you first call `useUploadFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFilesMutation, { data, loading, error }] = useUploadFilesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadFilesMutation(baseOptions?: Apollo.MutationHookOptions<UploadFilesMutation, UploadFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFilesMutation, UploadFilesMutationVariables>(UploadFilesDocument, options);
      }
export type UploadFilesMutationHookResult = ReturnType<typeof useUploadFilesMutation>;
export type UploadFilesMutationResult = Apollo.MutationResult<UploadFilesMutation>;
export type UploadFilesMutationOptions = Apollo.BaseMutationOptions<UploadFilesMutation, UploadFilesMutationVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag {
  createTag {
    id
  }
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation DeleteTag($id: Int!) {
  deleteTag(id: $id) {
    id
  }
}
    `;
export type DeleteTagMutationFn = Apollo.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, options);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = Apollo.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = Apollo.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const DuplicateTagDocument = gql`
    mutation DuplicateTag($id: Int!) {
  duplicateTag(id: $id) {
    id
  }
}
    `;
export type DuplicateTagMutationFn = Apollo.MutationFunction<DuplicateTagMutation, DuplicateTagMutationVariables>;

/**
 * __useDuplicateTagMutation__
 *
 * To run a mutation, you first call `useDuplicateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateTagMutation, { data, loading, error }] = useDuplicateTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateTagMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateTagMutation, DuplicateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateTagMutation, DuplicateTagMutationVariables>(DuplicateTagDocument, options);
      }
export type DuplicateTagMutationHookResult = ReturnType<typeof useDuplicateTagMutation>;
export type DuplicateTagMutationResult = Apollo.MutationResult<DuplicateTagMutation>;
export type DuplicateTagMutationOptions = Apollo.BaseMutationOptions<DuplicateTagMutation, DuplicateTagMutationVariables>;
export const ToggleTagDocument = gql`
    mutation ToggleTag($id: Int!) {
  toggleTag(id: $id) {
    id
  }
}
    `;
export type ToggleTagMutationFn = Apollo.MutationFunction<ToggleTagMutation, ToggleTagMutationVariables>;

/**
 * __useToggleTagMutation__
 *
 * To run a mutation, you first call `useToggleTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTagMutation, { data, loading, error }] = useToggleTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTagMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTagMutation, ToggleTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTagMutation, ToggleTagMutationVariables>(ToggleTagDocument, options);
      }
export type ToggleTagMutationHookResult = ReturnType<typeof useToggleTagMutation>;
export type ToggleTagMutationResult = Apollo.MutationResult<ToggleTagMutation>;
export type ToggleTagMutationOptions = Apollo.BaseMutationOptions<ToggleTagMutation, ToggleTagMutationVariables>;
export const UpdateTagDocument = gql`
    mutation UpdateTag($id: Int!, $data: TagInput!) {
  updateTag(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateTagMutationFn = Apollo.MutationFunction<UpdateTagMutation, UpdateTagMutationVariables>;

/**
 * __useUpdateTagMutation__
 *
 * To run a mutation, you first call `useUpdateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagMutation, { data, loading, error }] = useUpdateTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTagMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagMutation, UpdateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagMutation, UpdateTagMutationVariables>(UpdateTagDocument, options);
      }
export type UpdateTagMutationHookResult = ReturnType<typeof useUpdateTagMutation>;
export type UpdateTagMutationResult = Apollo.MutationResult<UpdateTagMutation>;
export type UpdateTagMutationOptions = Apollo.BaseMutationOptions<UpdateTagMutation, UpdateTagMutationVariables>;
export const CreateTypeDocument = gql`
    mutation CreateType {
  createType {
    id
  }
}
    `;
export type CreateTypeMutationFn = Apollo.MutationFunction<CreateTypeMutation, CreateTypeMutationVariables>;

/**
 * __useCreateTypeMutation__
 *
 * To run a mutation, you first call `useCreateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTypeMutation, { data, loading, error }] = useCreateTypeMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateTypeMutation(baseOptions?: Apollo.MutationHookOptions<CreateTypeMutation, CreateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTypeMutation, CreateTypeMutationVariables>(CreateTypeDocument, options);
      }
export type CreateTypeMutationHookResult = ReturnType<typeof useCreateTypeMutation>;
export type CreateTypeMutationResult = Apollo.MutationResult<CreateTypeMutation>;
export type CreateTypeMutationOptions = Apollo.BaseMutationOptions<CreateTypeMutation, CreateTypeMutationVariables>;
export const DeleteTypeDocument = gql`
    mutation DeleteType($id: Int!) {
  deleteType(id: $id) {
    id
  }
}
    `;
export type DeleteTypeMutationFn = Apollo.MutationFunction<DeleteTypeMutation, DeleteTypeMutationVariables>;

/**
 * __useDeleteTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTypeMutation, { data, loading, error }] = useDeleteTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTypeMutation, DeleteTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTypeMutation, DeleteTypeMutationVariables>(DeleteTypeDocument, options);
      }
export type DeleteTypeMutationHookResult = ReturnType<typeof useDeleteTypeMutation>;
export type DeleteTypeMutationResult = Apollo.MutationResult<DeleteTypeMutation>;
export type DeleteTypeMutationOptions = Apollo.BaseMutationOptions<DeleteTypeMutation, DeleteTypeMutationVariables>;
export const DuplicateTypeDocument = gql`
    mutation DuplicateType($id: Int!) {
  duplicateType(id: $id) {
    id
  }
}
    `;
export type DuplicateTypeMutationFn = Apollo.MutationFunction<DuplicateTypeMutation, DuplicateTypeMutationVariables>;

/**
 * __useDuplicateTypeMutation__
 *
 * To run a mutation, you first call `useDuplicateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateTypeMutation, { data, loading, error }] = useDuplicateTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateTypeMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateTypeMutation, DuplicateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateTypeMutation, DuplicateTypeMutationVariables>(DuplicateTypeDocument, options);
      }
export type DuplicateTypeMutationHookResult = ReturnType<typeof useDuplicateTypeMutation>;
export type DuplicateTypeMutationResult = Apollo.MutationResult<DuplicateTypeMutation>;
export type DuplicateTypeMutationOptions = Apollo.BaseMutationOptions<DuplicateTypeMutation, DuplicateTypeMutationVariables>;
export const ToggleTypeDocument = gql`
    mutation ToggleType($id: Int!) {
  toggleType(id: $id) {
    id
  }
}
    `;
export type ToggleTypeMutationFn = Apollo.MutationFunction<ToggleTypeMutation, ToggleTypeMutationVariables>;

/**
 * __useToggleTypeMutation__
 *
 * To run a mutation, you first call `useToggleTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTypeMutation, { data, loading, error }] = useToggleTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTypeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleTypeMutation, ToggleTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleTypeMutation, ToggleTypeMutationVariables>(ToggleTypeDocument, options);
      }
export type ToggleTypeMutationHookResult = ReturnType<typeof useToggleTypeMutation>;
export type ToggleTypeMutationResult = Apollo.MutationResult<ToggleTypeMutation>;
export type ToggleTypeMutationOptions = Apollo.BaseMutationOptions<ToggleTypeMutation, ToggleTypeMutationVariables>;
export const UpdateTypeDocument = gql`
    mutation UpdateType($id: Int!, $data: TypeInput!) {
  updateType(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateTypeMutationFn = Apollo.MutationFunction<UpdateTypeMutation, UpdateTypeMutationVariables>;

/**
 * __useUpdateTypeMutation__
 *
 * To run a mutation, you first call `useUpdateTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTypeMutation, { data, loading, error }] = useUpdateTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTypeMutation, UpdateTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTypeMutation, UpdateTypeMutationVariables>(UpdateTypeDocument, options);
      }
export type UpdateTypeMutationHookResult = ReturnType<typeof useUpdateTypeMutation>;
export type UpdateTypeMutationResult = Apollo.MutationResult<UpdateTypeMutation>;
export type UpdateTypeMutationOptions = Apollo.BaseMutationOptions<UpdateTypeMutation, UpdateTypeMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($query: QueryInput!) {
  categories(query: $query) {
    id
    name
    slug
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> & ({ variables: CategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryByIdDocument = gql`
    query CategoryById($id: Int!) {
  categoryById(id: $id) {
    name
    parent {
      id
      name
    }
  }
}
    `;

/**
 * __useCategoryByIdQuery__
 *
 * To run a query within a React component, call `useCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables> & ({ variables: CategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
      }
export function useCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export function useCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export type CategoryByIdQueryHookResult = ReturnType<typeof useCategoryByIdQuery>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdSuspenseQueryHookResult = ReturnType<typeof useCategoryByIdSuspenseQuery>;
export type CategoryByIdQueryResult = Apollo.QueryResult<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const CharacteristicByIdDocument = gql`
    query CharacteristicById($id: Int!) {
  characteristicById(id: $id) {
    name
    type
  }
}
    `;

/**
 * __useCharacteristicByIdQuery__
 *
 * To run a query within a React component, call `useCharacteristicByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacteristicByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacteristicByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacteristicByIdQuery(baseOptions: Apollo.QueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables> & ({ variables: CharacteristicByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
      }
export function useCharacteristicByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
        }
export function useCharacteristicByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>(CharacteristicByIdDocument, options);
        }
export type CharacteristicByIdQueryHookResult = ReturnType<typeof useCharacteristicByIdQuery>;
export type CharacteristicByIdLazyQueryHookResult = ReturnType<typeof useCharacteristicByIdLazyQuery>;
export type CharacteristicByIdSuspenseQueryHookResult = ReturnType<typeof useCharacteristicByIdSuspenseQuery>;
export type CharacteristicByIdQueryResult = Apollo.QueryResult<CharacteristicByIdQuery, CharacteristicByIdQueryVariables>;
export const CharacteristicsDocument = gql`
    query Characteristics($query: QueryInput!) {
  characteristics(query: $query) {
    id
    name
    slug
    type
  }
}
    `;

/**
 * __useCharacteristicsQuery__
 *
 * To run a query within a React component, call `useCharacteristicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacteristicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacteristicsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCharacteristicsQuery(baseOptions: Apollo.QueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables> & ({ variables: CharacteristicsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
      }
export function useCharacteristicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
        }
export function useCharacteristicsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CharacteristicsQuery, CharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacteristicsQuery, CharacteristicsQueryVariables>(CharacteristicsDocument, options);
        }
export type CharacteristicsQueryHookResult = ReturnType<typeof useCharacteristicsQuery>;
export type CharacteristicsLazyQueryHookResult = ReturnType<typeof useCharacteristicsLazyQuery>;
export type CharacteristicsSuspenseQueryHookResult = ReturnType<typeof useCharacteristicsSuspenseQuery>;
export type CharacteristicsQueryResult = Apollo.QueryResult<CharacteristicsQuery, CharacteristicsQueryVariables>;
export const CollectionByIdDocument = gql`
    query CollectionById($id: Int!) {
  collectionById(id: $id) {
    name
  }
}
    `;

/**
 * __useCollectionByIdQuery__
 *
 * To run a query within a React component, call `useCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables> & ({ variables: CollectionByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
      }
export function useCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
        }
export function useCollectionByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
        }
export type CollectionByIdQueryHookResult = ReturnType<typeof useCollectionByIdQuery>;
export type CollectionByIdLazyQueryHookResult = ReturnType<typeof useCollectionByIdLazyQuery>;
export type CollectionByIdSuspenseQueryHookResult = ReturnType<typeof useCollectionByIdSuspenseQuery>;
export type CollectionByIdQueryResult = Apollo.QueryResult<CollectionByIdQuery, CollectionByIdQueryVariables>;
export const CollectionsDocument = gql`
    query Collections($query: QueryInput!) {
  collections(query: $query) {
    id
    name
    slug
  }
}
    `;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables> & ({ variables: CollectionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export function useCollectionsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsSuspenseQueryHookResult = ReturnType<typeof useCollectionsSuspenseQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const HolidayByIdDocument = gql`
    query HolidayById($id: Int!) {
  holidayById(id: $id) {
    name
  }
}
    `;

/**
 * __useHolidayByIdQuery__
 *
 * To run a query within a React component, call `useHolidayByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useHolidayByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHolidayByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHolidayByIdQuery(baseOptions: Apollo.QueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables> & ({ variables: HolidayByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
      }
export function useHolidayByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
        }
export function useHolidayByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HolidayByIdQuery, HolidayByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HolidayByIdQuery, HolidayByIdQueryVariables>(HolidayByIdDocument, options);
        }
export type HolidayByIdQueryHookResult = ReturnType<typeof useHolidayByIdQuery>;
export type HolidayByIdLazyQueryHookResult = ReturnType<typeof useHolidayByIdLazyQuery>;
export type HolidayByIdSuspenseQueryHookResult = ReturnType<typeof useHolidayByIdSuspenseQuery>;
export type HolidayByIdQueryResult = Apollo.QueryResult<HolidayByIdQuery, HolidayByIdQueryVariables>;
export const HolidaysDocument = gql`
    query Holidays($query: QueryInput!) {
  holidays(query: $query) {
    id
    name
    slug
  }
}
    `;

/**
 * __useHolidaysQuery__
 *
 * To run a query within a React component, call `useHolidaysQuery` and pass it any options that fit your needs.
 * When your component renders, `useHolidaysQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHolidaysQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useHolidaysQuery(baseOptions: Apollo.QueryHookOptions<HolidaysQuery, HolidaysQueryVariables> & ({ variables: HolidaysQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
      }
export function useHolidaysLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HolidaysQuery, HolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
        }
export function useHolidaysSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HolidaysQuery, HolidaysQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HolidaysQuery, HolidaysQueryVariables>(HolidaysDocument, options);
        }
export type HolidaysQueryHookResult = ReturnType<typeof useHolidaysQuery>;
export type HolidaysLazyQueryHookResult = ReturnType<typeof useHolidaysLazyQuery>;
export type HolidaysSuspenseQueryHookResult = ReturnType<typeof useHolidaysSuspenseQuery>;
export type HolidaysQueryResult = Apollo.QueryResult<HolidaysQuery, HolidaysQueryVariables>;
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
export const ProductByIdDocument = gql`
    query ProductById($id: Int!) {
  productById(id: $id) {
    name
    sku
    price
    oldPrice
    packageQuantity
    tags {
      id
      name
    }
    types {
      id
      name
    }
    holidays {
      id
      name
    }
    characteristics {
      id
      name
    }
    categories {
      id
      name
    }
    collections {
      id
      name
    }
    description
    iconPath
    colors {
      color
      images
    }
    sizes {
      size
      price
      oldPrice
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables> & ({ variables: ProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export function useProductByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdSuspenseQueryHookResult = ReturnType<typeof useProductByIdSuspenseQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const ProductBySlugDocument = gql`
    query ProductBySlug($slug: String!) {
  productBySlug(slug: $slug) {
    product {
      id
      name
      slug
      sku
      iconPath
      description
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
        images
      }
      types {
        iconPath
      }
      characteristics {
        name
        type
      }
      status
      createdAt
    }
    similarProducts {
      id
      name
      slug
      sku
      iconPath
      description
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
        images
      }
      types {
        iconPath
      }
      status
      createdAt
    }
  }
}
    `;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables> & ({ variables: ProductBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
      }
export function useProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export function useProductBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export type ProductBySlugQueryHookResult = ReturnType<typeof useProductBySlugQuery>;
export type ProductBySlugLazyQueryHookResult = ReturnType<typeof useProductBySlugLazyQuery>;
export type ProductBySlugSuspenseQueryHookResult = ReturnType<typeof useProductBySlugSuspenseQuery>;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: QueryProductInput!, $isSale: Boolean) {
  products(query: $query, isSale: $isSale) {
    id
    name
    slug
    sku
    iconPath
    description
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
      images
    }
    types {
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
 *      isSale: // value for 'isSale'
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
export const GetFolderItemsDocument = gql`
    query GetFolderItems($folderPath: String!) {
  folderItems(folderPath: $folderPath) {
    folders {
      name
      size
      count
      path
      createdAt
    }
    files {
      name
      size
      extension
      path
      createdAt
    }
  }
}
    `;

/**
 * __useGetFolderItemsQuery__
 *
 * To run a query within a React component, call `useGetFolderItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFolderItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFolderItemsQuery({
 *   variables: {
 *      folderPath: // value for 'folderPath'
 *   },
 * });
 */
export function useGetFolderItemsQuery(baseOptions: Apollo.QueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables> & ({ variables: GetFolderItemsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
      }
export function useGetFolderItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export function useGetFolderItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export type GetFolderItemsQueryHookResult = ReturnType<typeof useGetFolderItemsQuery>;
export type GetFolderItemsLazyQueryHookResult = ReturnType<typeof useGetFolderItemsLazyQuery>;
export type GetFolderItemsSuspenseQueryHookResult = ReturnType<typeof useGetFolderItemsSuspenseQuery>;
export type GetFolderItemsQueryResult = Apollo.QueryResult<GetFolderItemsQuery, GetFolderItemsQueryVariables>;
export const FoldersDocument = gql`
    query Folders {
  folders {
    name
    path
    childrens {
      name
      path
      childrens {
        name
        path
        childrens {
          name
          path
          childrens {
            name
            path
            childrens {
              name
              path
              childrens {
                name
                path
                childrens {
                  name
                  path
                  childrens {
                    name
                    path
                    childrens {
                      name
                      path
                      createdAt
                    }
                    createdAt
                  }
                  createdAt
                }
                createdAt
              }
              createdAt
            }
            createdAt
          }
          createdAt
        }
        createdAt
      }
      createdAt
    }
    createdAt
  }
}
    `;

/**
 * __useFoldersQuery__
 *
 * To run a query within a React component, call `useFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoldersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoldersQuery(baseOptions?: Apollo.QueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
      }
export function useFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export function useFoldersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export type FoldersQueryHookResult = ReturnType<typeof useFoldersQuery>;
export type FoldersLazyQueryHookResult = ReturnType<typeof useFoldersLazyQuery>;
export type FoldersSuspenseQueryHookResult = ReturnType<typeof useFoldersSuspenseQuery>;
export type FoldersQueryResult = Apollo.QueryResult<FoldersQuery, FoldersQueryVariables>;
export const TagByIdDocument = gql`
    query TagById($id: Int!) {
  tagById(id: $id) {
    name
    imagePath
  }
}
    `;

/**
 * __useTagByIdQuery__
 *
 * To run a query within a React component, call `useTagByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTagByIdQuery(baseOptions: Apollo.QueryHookOptions<TagByIdQuery, TagByIdQueryVariables> & ({ variables: TagByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
      }
export function useTagByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagByIdQuery, TagByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
        }
export function useTagByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagByIdQuery, TagByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagByIdQuery, TagByIdQueryVariables>(TagByIdDocument, options);
        }
export type TagByIdQueryHookResult = ReturnType<typeof useTagByIdQuery>;
export type TagByIdLazyQueryHookResult = ReturnType<typeof useTagByIdLazyQuery>;
export type TagByIdSuspenseQueryHookResult = ReturnType<typeof useTagByIdSuspenseQuery>;
export type TagByIdQueryResult = Apollo.QueryResult<TagByIdQuery, TagByIdQueryVariables>;
export const TagsDocument = gql`
    query Tags($query: QueryInput!) {
  tags(query: $query) {
    id
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
export const TypeByIdDocument = gql`
    query TypeById($id: Int!) {
  typeById(id: $id) {
    name
    iconPath
  }
}
    `;

/**
 * __useTypeByIdQuery__
 *
 * To run a query within a React component, call `useTypeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTypeByIdQuery(baseOptions: Apollo.QueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables> & ({ variables: TypeByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
      }
export function useTypeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
        }
export function useTypeByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TypeByIdQuery, TypeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TypeByIdQuery, TypeByIdQueryVariables>(TypeByIdDocument, options);
        }
export type TypeByIdQueryHookResult = ReturnType<typeof useTypeByIdQuery>;
export type TypeByIdLazyQueryHookResult = ReturnType<typeof useTypeByIdLazyQuery>;
export type TypeByIdSuspenseQueryHookResult = ReturnType<typeof useTypeByIdSuspenseQuery>;
export type TypeByIdQueryResult = Apollo.QueryResult<TypeByIdQuery, TypeByIdQueryVariables>;
export const TypesDocument = gql`
    query Types($query: QueryInput!) {
  types(query: $query) {
    id
    name
    iconPath
  }
}
    `;

/**
 * __useTypesQuery__
 *
 * To run a query within a React component, call `useTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTypesQuery(baseOptions: Apollo.QueryHookOptions<TypesQuery, TypesQueryVariables> & ({ variables: TypesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
      }
export function useTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TypesQuery, TypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
        }
export function useTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TypesQuery, TypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TypesQuery, TypesQueryVariables>(TypesDocument, options);
        }
export type TypesQueryHookResult = ReturnType<typeof useTypesQuery>;
export type TypesLazyQueryHookResult = ReturnType<typeof useTypesLazyQuery>;
export type TypesSuspenseQueryHookResult = ReturnType<typeof useTypesSuspenseQuery>;
export type TypesQueryResult = Apollo.QueryResult<TypesQuery, TypesQueryVariables>;
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