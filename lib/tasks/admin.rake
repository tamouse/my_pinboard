namespace :users do
  desc "Create a new user"
  task :new, [:username,:password,:email] => :environment do |_task, args|
    username = args[:username]
    password = args[:password]
    email = args[:email]
    raise "Username, Password, and Email are all required" unless username.present? && password.present? && email.present?

    User.create!(
      username: username,
      admin: false,
      password: password,
      password_confirmation: password,
      email: email
    )
    puts "created #{username}"
  end

  desc "Create a new admin user"
  task :admin, [:username,:password] => :environment do |_task, args|
    username = args[:username]
    password = args[:password]
    raise "Username and Password are required" unless username.present? && password.present?
    User.create!(
      username: args[:username],
      admin: true,
      password: args[:password],
      password_confirmation: args[:password]
    )
    puts "created admin user #{username}"
  end
end
