class Book < ApplicationRecord
  has_and_belongs_to_many :authors
  belongs_to :shop

  validates :title ,presence: true
  validates :published_at ,comparison: {greater_than: Date.new(1900,1,1)}

end

