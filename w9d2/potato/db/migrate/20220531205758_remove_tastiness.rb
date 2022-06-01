class RemoveTastiness < ActiveRecord::Migration[6.1]
  def change
    change_table :cheeses do |t|
      t.remove :tastiness
    end
  end
end
