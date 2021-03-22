# == Schema Information
#
# Table name: stocks
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  tikr           :string           not null
#  last_price     :string           not null
#  percent_change :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Stock < ApplicationRecord
    validates :name, :tikr, :last_price, :percent_change, presence: true
    validates :name, :tikr, uniqueness: true

    has_many :assets, class_name: "Asset", foreign_key: "stock_id"

    has_many :owners, through: :assets, source: :owner
end
