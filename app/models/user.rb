# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  buying_power    :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password

    validates :first_name, :last_name, :password_digest, presence: true
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 10}, allow_nil: true

    has_many :assets, class_name: "Asset", foreign_key: "user_id"

    has_many :owned_stocks, through: :assets, source: :stocks

    after_initialize :ensure_session_token, :ensure_buying_power

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) || User.find_by(email: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        password_obj = BCrypt::Password.new(self.password_digest)
        password_obj.is_password?(password)
    end

    def generate_session_token 
        SecureRandom.urlsafe_base64(16)
    end

    def ensure_buying_power 
        self.buying_power ||= self.buying_power = 25000
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save
        self.session_token
    end

    # def calculate_portfolio_value
    #     assets = self.assets
    #     
    # end
    # User.new(first_name: "test", last_name: "test", username: "test", email: "test@email.com", buying_power: 1000, password: "password1234")
    # def portfolio_value
    #     self.portfolio_value ||= 
    # end

    def charge(asset_total_cost)
        self.update(buying_power: self.buying_power - asset_total_cost)
    end

    def credit(asset_total_value)
        self.update(buying_power: self.buying_power + asset_total_value)  
    end
end
