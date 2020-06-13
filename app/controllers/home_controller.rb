  class HomeController < ApplicationController
    def index
      @works = Work.published
    end
  end




