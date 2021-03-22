# == Schema Information
#
# Table name: assets
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  stock_id   :integer          not null
#  quantity   :integer          not null
#  avg_price  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Asset < ApplicationRecord
    validates :stocks, :user_id, :quantity, :avg_price, presence: true

    belongs_to :owner, class_name: "User", foreign_key: "user_id"
    belongs_to :stocks, class_name: "Stock", foreign_key: "stock_id"
end