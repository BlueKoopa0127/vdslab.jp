import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";

const request = (query, variables = {}) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const promise = window
    .fetch(
      "https://api-ap-northeast-1.graphcms.com/v2/ck1vrsd0c1mts019whoce6cox/master",
      options,
    )
    .then((response) => response.json())
    .then(({ data }) => data);
  return Observable.fromPromise(promise);
};

export const getCategories = () => {
  const query = `{
  categories: categories {
    id
    name
  }
}`;
  return request(query);
};

export const getMembers = () => {
  const query = `{
  staffs: members (stage: PUBLISHED, where: {type: Staff}, orderBy: order_ASC) {
    id, name, title, description, picture {
      url
    }
  }
  students: members (stage: PUBLISHED, where: {type: Student}) {
    id, name, title, description, order, assignedYear
  }
}`;
  return request(query);
};

export const getPost = (postId) => {
  const query = `query($postId:ID!) {
  post: post(where: { id: $postId }) {
    id
    title
    content
    date
  }
}`;
  return request(query, { postId });
};

export const getPosts = (page = 1, perPage = 5) => {
  const skip = (page - 1) * perPage;
  const query = `query($perPage:Int!, $skip:Int!) {
  posts: posts(stage: PUBLISHED, orderBy: date_DESC, first: $perPage, skip: $skip) {
    id
    title
    content
    date
  }
  count: postsConnection {
    aggregate {
      count
    }
  }
}`;
  return request(query, {
    perPage,
    skip,
  });
};

export const getProducts = () => {
  const query = `{
  products: products(stage: PUBLISHED, orderBy: publishYear_DESC) {
    id
    name
    description
    publishYear
    picture {
      url
    }
    categories {
      id
      name
    }
  }
}`;
  return request(query);
};

export const getProductsByCategoryId = (categoryId) => {
  const query = `query($categoryId:ID!) {
  products: products(stage: PUBLISHED, where: {categories_some: {id: $categoryId}}, orderBy: publishYear_DESC) {
    id
    name
    description
    publishYear
    picture {
      url
    }
    categories {
      id
      name
    }
  }
}`;
  return request(query, { categoryId });
};

export const getProjects = () => {
  const query = `{
  projects: projects(stage: PUBLISHED, orderBy: startYear_DESC) {
    id
    name
    description
    startYear
    endYear
    picture {
      url
    }
    categories {
      id
      name
    }
  }
}`;
  return request(query);
};

export const getProjectsByCategoryId = (categoryId) => {
  const query = `query($categoryId:ID!) {
  projects: projects(stage: PUBLISHED, where: {categories_some: {id: $categoryId}}, orderBy: startYear_DESC) {
    id
    name
    description
    startYear
    endYear
    picture {
      url
    }
    categories {
      id
      name
    }
  }
}`;
  return request(query, { categoryId });
};
