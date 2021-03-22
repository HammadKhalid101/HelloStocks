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
require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
