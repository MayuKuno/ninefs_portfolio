class TechStack < ApplicationRecord
  belongs_to :work

  CATEGORIES = ["Backend", "Frontend", "Database", "DevOps", "Infrastructure", "Other"].freeze

  validates :name, presence: true
  validates :category, inclusion: { in: CATEGORIES }, allow_nil: true
end
