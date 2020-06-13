class Work < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_many :tech_stacks, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :work_images, dependent: :destroy
  enum status: { published: 0, draft: 1 }
  scope :only_published, -> { where(status: :published) }
  def main_image
    work_images.find_by(is_main: true) || work_images.first || WorkImage.new(image: nil)
  end
end
