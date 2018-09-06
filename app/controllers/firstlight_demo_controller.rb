class FirstlightDemoController < ApplicationController

  def index
    service = FlService.new
    @franchise_ratings = service.get_current_quarter_franchise_ratings
  end

end
