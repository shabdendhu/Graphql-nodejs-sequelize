const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    get_allBasket: [Basket]
    get_basket_by_id(id: Int!): Basket
  }
  type Basket {
    id: Int!
    product_id: Int!
    user_id: Int!
    created_by: Int
    updated_by: Int
    is_active: Boolean
  }
  extend type Mutation {
    create_new_basket(input: AddBasketInput!): AddBasketResponse
    update_basket(input: UpdateBasketInput!): UpdateBasketResponse
    delete_asket(id: Int!): DeleteBasketResponse
  }
  type UpdateBasketResponse {
    status: Int
  }
  type DeleteBasketResponse {
    status: Int
  }
  input AddBasketInput {
    product_id: Int!
    user_id: Int!
    created_by: Int
  }
  type AddBasketResponse {
    id: Int!
    product_id: Int!
    user_id: Int!
    created_by: Int
  }
  input UpdateBasketInput {
    id: Int!
    product_id: Int!
    user_id: Int!
    created_by: Int
    updated_by: Int
    is_active: Boolean
  }
`;