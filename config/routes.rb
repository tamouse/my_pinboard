Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  devise_for :users
  root to: "home#welcome"
  get 'home/welcome'
  post "/graphql", to: "graphql#execute"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
