class ChangeDecimalsToInts < ActiveRecord::Migration[5.2]
  def change
    change_column :stocks, :last_price, :int
    change_column :stocks, :percent_change, :int
    change_column :assets, :avg_price, :int
    change_column :assets, :quantity, :int
    change_column :users, :buying_power, :int
  end
end
