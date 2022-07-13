class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :surname
      t.integer :age
      t.references :shop, foreign_key: true
      t.integer :lock_version
      t.timestamps
    end
  end
end
