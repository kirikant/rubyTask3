class Author < ApplicationRecord
  has_and_belongs_to_many :books
  validates :name,:surname, presence: true
  validates :name,:surname, :format => { with: /[a-zA-Z ]+/,message: "allows only letters"}

end
