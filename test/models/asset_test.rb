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
require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
