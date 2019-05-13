class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :expose_gon

  private

  def expose_gon
    gon.push(
      {
        flash: flash.map {|item| {level: item.first, message: item.last}}
      }
    )
  end

end
