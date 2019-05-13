module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :current_user, User, null: false, camelize: false, description: 'The currently logged in user'
    def current_user
      context[:current_user]
    end
  end
end
