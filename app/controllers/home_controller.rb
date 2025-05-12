class HomeController < ApplicationController
  def index
    @works = published_works
  end
end
