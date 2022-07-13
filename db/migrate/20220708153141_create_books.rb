class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string  :title
      t.date :published_at
      t.string :theme
      t.references :shop, foreign_key: true
      t.integer :lock_version
      t.timestamps
    end
  end
end
