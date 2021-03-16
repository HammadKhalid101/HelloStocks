class ChangeBuyingPowerColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :buying_power, :integer
  end
end
