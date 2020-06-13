class Like < ApplicationRecord
  belongs_to :work
  validates :session_id, uniqueness: { scope: :work_id }
end
