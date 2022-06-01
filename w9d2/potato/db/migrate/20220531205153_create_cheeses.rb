class CreateCheeses < ActiveRecord::Migration[6.1]
  def change
    create_table :cheeses do |t|
      t.string :name
      t.string :tastiness

      t.timestamps
    end
  end
end
