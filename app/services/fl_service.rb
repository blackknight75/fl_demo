class FlService
  def initialize
    login = HTTParty.post("http://localhost:3000/api/v1/auth", body: {:email => "test@test.com", :password => "test"})
    @access_token = login["access_token"]
  end

  def get_current_quarter_franchise_ratings
    HTTParty.get("http://localhost:3000/api/v1/franchise/current_quarter_ratings", headers: { "Authorization": "Bearer " + @access_token })
  end
end
