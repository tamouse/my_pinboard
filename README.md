# my pinboard replacement

A replacement for pinboard, tailored to my personal needs.


## Bookmarklets

This will need a bookmarklet to pop open the new / edit form so I can fill in additional fields.

This is sort of a canonical bookmarklet:

``` javascript
javascript:
u = location.href
s = document.getSelection()
t = document.title
mypb = `http://localhost:3000`
void open(
  `${mypb}/new?u=${u}&d=${d}&t=${t}`,
  "MyPins",
  `toolbar=no,width=800,height=900`
)
```

The bookmarklet will get compressed and encoded so it can sit in a bookmark in the browser.

## Structural Changes

- created `app/javascript/src/` where all *actual* code goes, with the following subdirectories:
  - `components` - basic React components that can be used or reused around the app
  - `lib` - utilities and services, things that aren't react-ish
  - `hooks` - react hooks
  - `views` - React "page" level components
    - `Users` - replacing some devise views with React components

- components in `app/javascript/components/` are *thin* shells that import the desired component out of `../src/` and export it as default

## Future Directions

So far, I'm rolling on individual `react_component` components, popping them into the views.

Eventually, I'd like to redo this with a single `App` component.

Convert the `gon` structure into a react context. Only use so far is for flash output from Devise. I want to be able to reuse the `FlashDisplay` component for both `gon.flash` and internal app flash messages.

Wind in more formatting as needed.

Restrict signups. I don't want to support the world. There's a wiki page on Devise that talks about having a single user.

Add tests, linting, prettier rules.



## Commentary from the `rails new` template

New rails app created with template.


- ruby version: ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin18]



Commented out `coffee-rails` and `jbuilder` because I don't like them or use them.

Added `kaminari` gem to enable pagination.

Added the following gems to the development and test contexts:

- [`factory_bot_rails`](https://github.com/thoughtbot/factory_bot) for testing factories (See: <https://devhints.io/factory_bot>)
- [`faker`](https://github.com/stympy/faker) for generating testing data
- [`pry-rails`](https://github.com/rweng/pry-rails) to run pry as the default rails console
- [`pry-byebug`](https://github.com/deivid-rodriguez/pry-byebug) to integrate pry with byebug


Added [`devise`](https://github.com/plataformatec/devise) and created User model. Additional fields in the User model:

- `username` [String] - a username
- `preferred_name` [String] - the user's preferred name
- `preferred_pronouns` [String] - the user's preferred pronouns, e.g. "she/her/hers", "they/them/theirs", etc.
- `admin` [Boolean] - whether the user is an admin or not. Boolean forced to bi-state by setting `null: false` in the migration. The default is `false`.

The default route `root` is set to `home#welcome`. You may want to modify `app/views/home/welcome.html.erb`

User model created: true


Added [`pundit`](https://github.com/varvet/pundit) and initialized. Created User policy in `app/policies/user_policy.rb`. You should update the user policy for your needs. The default application policy is fully restricted.



Added [GraphQL](http://graphql-ruby.org/) and initialized.

Created `Types::UserGraphType` with fields:

- `id`
- `email`
- `username`
- `preferred_name`
- `preferred_pronouns`
- `admin`
- `created_at`
- `updated_at`



Added [`webpacker`](https://github.com/rails/webpacker), [`react-rails`](https://github.com/reactjs/react-rails), initialized them both, and added the `application` pack to the default application layout.  You can now build react components for inclusion in standard rails views in `app/javascript/components/`. You can put regular javascript source in `app/javascript/src/` to be imported or required in react components.

- Created `DisplayUser` component, appended to `app/views/home/welcome.html.erb`


Added apollo client libraries to `package.json`:

- `apollo-boost` for the most common set of apollo client libraries
- `react-apollo` for using apollo client with react
- `graphql` for creating query documents

See the [apollo client docs](https://www.apollographql.com/docs/react/) for more info on using apollo client
